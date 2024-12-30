const fs = require("fs");
const { userState } = require("./logic_choose_deposit_amount_controllers");
const { checkPayment } = require("../services/gateway");
const { deleteFile } = require("../services/aws-sdk");
const createMessagePayment = require("../utils/createPayment");

async function makeDeposit(bot, chatId, messageId, query, _, _, userName) {
  const transaction_amount = userState[chatId];

  if (!transaction_amount || transaction_amount < 5) {
    return bot.answerCallbackQuery(query.id, {
      text: `❌ O valor deve ser no mínimo R$ 5 para gerar um Pix!`,
      show_alert: true,
    });
  }

  const description = `Depósito no valor de ${transaction_amount}`;

  const dataPayment = await createMessagePayment(
    transaction_amount,
    description,
    chatId
  );

  bot.editMessageMedia(
    {
      type: "photo",
      media: dataPayment.imageUrl,
      caption: dataPayment.message,
      parse_mode: "HTML",
    },
    {
      chat_id: chatId,
      message_id: messageId,
      reply_markup: {
        inline_keyboard: [
          [{ text: "🍀🍀🍀🍀🍀🍀🍀🍀🍀🍀🍀🍀🍀🍀", callback_data: "🍀" }],
        ],
      },
    }
  );

  delete userState[chatId];

  await fs.promises.unlink(dataPayment.tempImagePath);
  await deleteFile(dataPayment.keyFile);
  await checkPayment(dataPayment.idPayment, chatId, bot, userName);
}

module.exports = { makeDeposit };
