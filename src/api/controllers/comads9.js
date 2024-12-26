const actions = {
  add_1: 1,
  add_5: 5,
  add_10: 10,
  add_25: 25,
  sub_1: -1,
  sub_5: -5,
  sub_10: -10,
  sub_25: -25,
};

const userState = {};

function updateSaldo(bot, chatId, messageId, query, data) {
  if (actions[data] !== undefined) {
    const currentSaldo = userState[chatId] || 0;
    const newSaldo = currentSaldo + actions[data];

    if (newSaldo < 0) {
      return bot.answerCallbackQuery(query.id, {
        text: "❌ Depósito negativo!",
        show_alert: true,
      });
    }
    userState[chatId] = newSaldo;
    saldo = newSaldo;

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
}

module.exports = { updateSaldo, userState };
