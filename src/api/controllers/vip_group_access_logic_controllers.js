const { link } = require("fs");
const { subtractMoneyDB } = require("../services/database/database_services");
const getmessages = require("../utils/getMessages");

async function accessGroupVip(bot, chatId, _, query, _, money, userName) {
  if (money < 10) {
    return bot.answerCallbackQuery(query.id, {
      text: `⚠️ É necessário o valor de no minimo 10R$ na conta para entrar no grupo vip.

🍀 Recarregue seu saldo`,
      show_alert: true,
    });
  }

  const groupId = Number(process.env.GRUPO_ID);

  bot
    .createChatInviteLink(groupId, {
      expire_date: Math.floor(Date.now() / 1000) + 300,
      member_limit: 1,
    })
    .then(async (inviteLink) => {
      await subtractMoneyDB(chatId, money - 10);
      const message = getmessages.accessGroupVip(
        userName,
        inviteLink.invite_link
      );
      bot.sendMessage(chatId, message, { parse_mode: "HTML" });
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

module.exports = { accessGroupVip };
