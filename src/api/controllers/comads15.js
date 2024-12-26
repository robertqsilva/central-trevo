const { removeSaldoUser } = require("../services/database/database_services");

async function accessGrupoVip(bot, chatId, _, query, _, saldo, userName) {
  if (saldo < 10) {
    return bot.answerCallbackQuery(query.id, {
      text: `⚠️ É necessário o valor de no minimo 10R$ na conta para entrar no grupo vip.

🍀 Recarregue seu saldo`,
      show_alert: true,
    });
  }

  const groupId = -1002288732477;
  bot
    .createChatInviteLink(groupId, {
      expire_date: Math.floor(Date.now() / 1000) + 300,
      member_limit: 1,
    })
    .then(async (inviteLink) => {
      await removeSaldoUser(chatId, saldo - 10);
      bot.sendMessage(
        chatId,
        `🍀 ${userName} agora vc faz parte da <b>Central Trevo!</b> 🍀
        
Aqui está seu link exclusivo para entrar no grupo. 
Válido por 5 minutos: ${inviteLink.invite_link}`,
        { parse_mode: "HTML" }
      );
      return;
    })
    .catch((err) => {
      bot.answerCallbackQuery(query.id, {
        text: `⚠️ Desculpe, houve um problema ao gerar o link de convite.

Tente novamente!`,
        show_alert: true,
      });
    });
}

module.exports = { accessGrupoVip };
