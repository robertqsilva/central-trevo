function sendCardFull(bot, chatId, messageId) {
  const mensagem = `<i>💳 Escolha um nível para continuar sua comprar</i>
  
<code>@centraltrevoBot</code>`;

  bot.editMessageText(mensagem, {
    chat_id: chatId,
    message_id: messageId,
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [
        [
          { text: "CLASSIC - R$15", callback_data: "cardcc" },
          { text: "GOLD - R$ 30", callback_data: "cardcc" },
        ],
        [
          { text: "STANDARD - R$ 15", callback_data: "cardcc" },
          { text: "PLATINUM - R$ 38", callback_data: "cardcc" },
        ],
        [
          { text: "BLACK - R$ 60", callback_data: "cardcc" },
          { text: "BUSINESS - R$ 35", callback_data: "cardcc" },
        ],
        [
          { text: "CORPORATE - R$ 35", callback_data: "cardcc" },
          { text: "INFINITE - R$ 60", callback_data: "cardcc" },
        ],
        [
          { text: "AMEX - R$ 25", callback_data: "cardcc" },
          {
            text: "BUSINESS SIGNATURE - R$ 18",
            callback_data: "cardcc",
          },
        ],
        [{ text: "❮ ❮ Voltar", callback_data: "backcard" }],
      ],
    },
  });
}

module.exports = { sendCardFull };
