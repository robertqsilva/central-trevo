const { getUserDB } = require("../services/database/database_services");
const getMensagemStart = require("../utils/msmstart");
const optionsStart = require("../utils/options");

async function sendStart(bot, chatId, messageId) {
  const {saldo} = await getUserDB(chatId);

  
  const mensagem = getMensagemStart(Number(saldo).toFixed(2), chatId);

  const options = optionsStart();

  bot.editMessageText(mensagem, {
    chat_id: chatId,
    message_id: messageId,
    ...options,
  });
}

module.exports = { sendStart };
