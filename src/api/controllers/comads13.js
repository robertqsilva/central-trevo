function sendVip(bot, chatId, messageId) {
  const mensagem = `<b>🍀 ENTRE NO NOSSO GRUPO VIP 🍀</b>

⚠️<b>Tenha acesso a métodos e esquemas exclusivos.

✅ Metodos (Amazon, NetShoes, MP, IPTV e etc).
✅ Cursos para iniciantes no 7.
✅ Aprenda a codar seus checkers.
✅ Documentos free (rg, cnh, foto selfie e etc).
✅ Engenharia social.
✅ Passo a passo para fazer suas laras.
✅ Tela fakes (Mercado livre, Amazon, Magalu e etc).
✅ Virada de saldo.</b>

⚠️ <b>O link de convite será valido apenas por 05 minutos!</b>

obs: Se você ja está no grupo e gerar outro link, séra debitado o valor normalmente!

<code>@centraltrevoBot</code>`;

  bot.editMessageText(mensagem, {
    chat_id: chatId,
    message_id: messageId,
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [
        [{ text: "🍀 ENTRAR NO GRUPO VIP 🍀", callback_data: "grupovip" }],
        [{ text: "❮ ❮ Voltar", callback_data: "back" }],
      ],
    },
  });
}

module.exports = { sendVip };
