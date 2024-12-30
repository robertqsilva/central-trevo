const { getUserDB } = require("../services/database/database_services");
const getmessages = require("../utils/getMessages");

async function accountInfomations(bot, chatId, messageId) {
  const { money } = await getUserDB(chatId);
  const message = getmessages.infoAccount(chatId, money)

  bot.editMessageText(message, {
    chat_id: chatId,
    message_id: messageId,
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [[{ text: "❮ ❮ Voltar", callback_data: "back" }]],
    },
  });
}

module.exports = { accountInfomations };
