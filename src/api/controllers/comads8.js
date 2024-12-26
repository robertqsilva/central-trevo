let saldo = 0;

function sendSaldoDeposito(bot, chatId, messageId) {
  const mensagem = `<b>💵 Saldo Automático</b>

<i>Gerar Pix de</i> <b>R$${saldo.toFixed(2)}</b>

<i>Com saldo automático o saldo cai na mesma hora</i>

<code>@centraltrevoBot</code>`;

  const inlineKeyboard = [
    [
      { text: "+1", callback_data: "add_1" },
      { text: "+5", callback_data: "add_5" },
      { text: "+10", callback_data: "add_10" },
      { text: "+25", callback_data: "add_25" },
    ],
    [
      { text: "-1", callback_data: "sub_1" },
      { text: "-5", callback_data: "sub_5" },
      { text: "-10", callback_data: "sub_10" },
      { text: "-25", callback_data: "sub_25" },
    ],
    [{ text: "Confirmar", callback_data: "deposito" }],
    [{ text: "❮ ❮ Voltar", callback_data: "saldo" }],
  ];

  bot.editMessageText(mensagem, {
    chat_id: chatId,
    message_id: messageId,
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: inlineKeyboard,
    },
  });
}

module.exports = { sendSaldoDeposito };
