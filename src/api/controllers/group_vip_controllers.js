const getmessages = require("../utils/getMessages");
const {inlineKeyboardGroupVip} = require('../utils/inlineKeyboards.js')
function groupVipmessage(bot, chatId, messageId) {
  const message = getmessages.groupVip()

  const options = inlineKeyboardGroupVip()
  bot.editMessageText(message, {
    chat_id: chatId,
    message_id: messageId,
    ...options
  });
}

module.exports = { groupVipmessage };
