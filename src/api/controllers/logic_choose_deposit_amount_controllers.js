const getmessages = require("../utils/getMessages");
const { inlineKeyboardDeposit } = require("../utils/inlineKeyboards");

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

function updateMoneyDeposit(bot, chatId, messageId, query, data) {
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
    money = newSaldo;

    const message = getmessages.depositAmount(money);

    const options = inlineKeyboardDeposit();

    bot.editMessageText(message, {
      chat_id: chatId,
      message_id: messageId,
      ...options,
    });
  }
}

module.exports = { updateMoneyDeposit, userState };
