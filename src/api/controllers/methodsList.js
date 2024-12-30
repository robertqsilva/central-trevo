const getmessages = require("../utils/getMessages");

async function methodsList(bot, chatId, messageId) {
  const message = getmessages.methods();

  bot.editMessageText(message, {
    chat_id: chatId,
    message_id: messageId,
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [[{ text: "❮ ❮ Voltar", callback_data: "back" }]],
    },
  });
}

module.exports = {methodsList}
