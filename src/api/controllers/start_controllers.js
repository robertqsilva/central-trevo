const { getUserDB } = require("../services/database/database_services");
const getmessages = require("../utils/getMessages.js");
const { inlineKeyboardStart } = require("../utils/inlineKeyboards.js");

async function accessMainMessageStart(bot, chatId, messageId) {
  const { money } = await getUserDB(chatId);
  const mensagem = getmessages.getMessageStart(Number(money).toFixed(2), chatId);

  const options = inlineKeyboardStart();

  bot.editMessageText(mensagem, {
    chat_id: chatId,
    message_id: messageId,
    ...options,
  });
}

module.exports = { accessMainMessageStart };
