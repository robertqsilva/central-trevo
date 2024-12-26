require("dotenv").config();

const {
  getUserDB,
  createUser,
} = require("./services/database/database_services");
const callbackHandlers = require("./utils/require");
const TelegramBot = require("node-telegram-bot-api");

const TOKEN = process.env.TOKEN;
const bot = new TelegramBot(TOKEN, { polling: true });

bot.onText(/\/start/, async (msm) => {
  
  const chatId = msm.chat.id;
  
  const nome = msm.chat.username
  let user = await getUserDB(chatId);

  
  if (!user) {
    await createUser(nome, chatId, 0);
    user = await getUserDB(chatId);
  }

  const data = callbackHandlers.start(user.saldo, chatId);
  const options = data.options;
  const mensagem = data.mensagem;

  return bot.sendMessage(chatId, mensagem, options);
});

bot.onText(/\/pix/, async (msm) => {
  const chatId = msm.chat.id;

  let user = await getUserDB(chatId);
  const nome = msm.chat.username;

  if (!user) {
    await createUser(nome, chatId, 0);
  }

  const data = callbackHandlers.saldo();
  const options = data.options;
  const mensagem = data.mensagem;

  return bot.sendMessage(chatId, mensagem, options);
});

bot.on("callback_query", async (query) => {
  const chatId = query.message.chat.id;
  const messageId = query.message.message_id;
  const data = query.data;

  const userName = query.from.username;
  
  let {saldo} = await getUserDB(chatId);
  if (callbackHandlers[data]) {
    return callbackHandlers[data](
      bot,
      chatId,
      messageId,
      query,
      data,
      saldo,
      userName
    );
  }
});
