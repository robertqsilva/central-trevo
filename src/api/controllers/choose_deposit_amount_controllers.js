const getmessages = require("../utils/getMessages");
const { inlineKeyboardDeposit } = require("../utils/inlineKeyboards");

let money = 0;

function chooseDepositAmount(bot, chatId, messageId) {
  const message = getmessages.depositAmount(money);

  const options = inlineKeyboardDeposit();

  bot.editMessageText(message, {
    chat_id: chatId,
    message_id: messageId,
    ...options,
  });
}

module.exports = { chooseDepositAmount };
