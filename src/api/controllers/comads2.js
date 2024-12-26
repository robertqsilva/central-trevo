const getMensagemTermo = require("../utils/msmTermo");

function sendTermos(bot, chatId, messageId) {
  const termo = getMensagemTermo();

  bot.editMessageText(termo, {
    chat_id: chatId,
    message_id: messageId,
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [[{ text: "❮ ❮ Voltar", callback_data: "back" }]],
    },
  });
}

module.exports = { sendTermos };
