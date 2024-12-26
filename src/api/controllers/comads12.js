function sendFree(bot, chatId, messageId) {
  const mensagem = `🟢 INDIQUE PELO SEU LINK 🟢  
 
✔️ Você ganha 10% de todo saldo depositado pelo seu afiliado.
✔️  Sem limitações de ganhos. 

Seu Link\:
t.me/centraltrevoBot?start=${chatId}

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

module.exports = { sendFree };
