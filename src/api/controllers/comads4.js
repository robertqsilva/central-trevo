function sendCard(bot, chatId, messageId) {
  const mensagem = `<b>💳 Store CCs full</b>

⥬ Escolha uma das opções

<code>@centraltrevoBot</code>`;

  bot.editMessageText(mensagem, {
    chat_id: chatId,
    message_id: messageId,
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [
        [{ text: "💳 CC Card Full", callback_data: "card2" }],
        [{ text: "Pacotes Mix", callback_data: "mix" }],
        [{ text: "❮ ❮ Voltar", callback_data: "back" }],
      ],
    },
  });
}

module.exports = { sendCard };
