const getMessages = require("../utils/getMessages");
const { inlineKeyboardStart } = require("../utils/inlineKeyboards");

function firstStart(money, chatId) {
  const message = getMessages.getMessageStart(money, chatId);
  const options = inlineKeyboardStart();

  return { message, options };
}

module.exports = { firstStart };
