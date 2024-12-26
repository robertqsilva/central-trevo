function sendMix(bot, _, _, query) {
  return bot.answerCallbackQuery(query.id, {
    text: `⚠️ As vendas de mix estão off por enquanto

🍀 Tente novamente mais tarde`,
    show_alert: true,
  });
}

module.exports = { sendMix };
