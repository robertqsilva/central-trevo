function sendCardCC(bot, _, _, query) {
  return bot.answerCallbackQuery(query.id, {
    text: `⚠️ As vendas de cc estão off por enquanto

🍀 Tente novamente mais tarde`,
    show_alert: true,
  });
}

module.exports = { sendCardCC };
