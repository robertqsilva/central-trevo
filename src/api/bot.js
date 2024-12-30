require("dotenv").config();

const {
  getUserDB, createUserDB
} = require("./services/database/database_services");
const callbackHandlers = require("./utils/require");
const TelegramBot = require("node-telegram-bot-api");

const TOKEN = process.env.TOKEN;
const bot = new TelegramBot(TOKEN, { polling: true });

bot.onText(/\/start/, async (msm) => {
  
  const chatId = msm.chat.id;
  
  const name = msm.from.username || msm.from.first_name
  let user = await getUserDB(chatId);

  
  if (!user) {
    await createUserDB(name, chatId, 0);
    user = await getUserDB(chatId);
  }

  const data = callbackHandlers.start(user.money, chatId);
  const options = data.options;
  const message = data.message;

  return bot.sendMessage(chatId, message, options);
});

bot.onText(/\/pix/, async (msm) => {
  const chatId = msm.chat.id;

  let user = await getUserDB(chatId);
  const name = msm.chat.username;

  if (!user) {
    await createUserDB(name, chatId, 0);
  }

  const data = callbackHandlers.saldo();
  const options = data.options;
  const message = data.message;

  return bot.sendMessage(chatId, message, options);
});

bot.on("callback_query", async (query) => {
  const chatId = query.message.chat.id;
  const messageId = query.message.message_id;
  const data = query.data;

  
  const userName = query.from.username || query.from.first_name;
  
  let {money} = await getUserDB(chatId);
  if (callbackHandlers[data]) {
    return callbackHandlers[data](
      bot,
      chatId,
      messageId,
      query,
      data,
      money,
      userName
    );
  }
});
