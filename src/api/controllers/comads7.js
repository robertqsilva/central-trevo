function sendPix(bot, chatId, messageId) {
  const mensagem = `<i>Selecione uma forma de adicionar saldo:</i>
  
<code>@centraltrevoBot</code>`;

  const options = {
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [
        [{ text: "💠 Pix Automatico", callback_data: "addSaldo" }],
        [{ text: "❮ ❮ Voltar", callback_data: "back" }],
      ],
    },
  };

  if(!bot){
    return { mensagem, options }
  }

  bot.editMessageText(mensagem, {
    chat_id: chatId,
    message_id: messageId,
    ...options
  });
}

module.exports = { sendPix };
