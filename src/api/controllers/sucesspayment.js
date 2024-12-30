const getmessages = require("../utils/getMessages");

async function sucessPaymentMessage(bot, chatId, userName) {
  const message = getmessages.sucessPayment(userName);
  return bot.sendMessage(chatId, message, { parse_mode: "HTML" });
}

module.exports = sucessPaymentMessage