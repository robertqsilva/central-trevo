const { getUserDB } = require("../services/database/database_services");

async function sendCarteira(bot, chatId, messageId) {
  const {saldo} = await getUserDB(chatId);
  const mensagem = `<b>Minha Carteira</b>

<b>ID:</b>  <code>${chatId}</code>

<i>Saldo</i>: <b>${Number(saldo).toFixed(2)}</b>

<code>@centraltrevoBot</code>`;

  bot.editMessageText(mensagem, {
    chat_id: chatId,
    message_id: messageId,
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [[{ text: "❮ ❮ Voltar", callback_data: "back" }]],
    },
  });
}

module.exports = { sendCarteira };
