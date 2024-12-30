const getmessages = require("../utils/getMessages");
const { inlineKeyboardTypePayment } = require("../utils/inlineKeyboards");

function selectTypePayment(bot, chatId, messageId) {
  const message = getmessages.selectTypePayment()

  const options = inlineKeyboardTypePayment()

  if(!bot){
    return { message, options }
  }

  bot.editMessageText(message, {
    chat_id: chatId,
    message_id: messageId,
    ...options
  });
}

module.exports = { selectTypePayment };
