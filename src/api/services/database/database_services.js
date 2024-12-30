const knex = require('../../../database/config.js')

module.exports = {
  createUserDB: async (name, chat_id, money) => {
    const createAccount = await knex("users").insert({ name, chat_id, money });
  },

  addMoneyDB: async (chat_id, money) => {
    const updateMoney = await knex("users").where({ chat_id }).update({ money });
  },

  subtractMoneyDB: async (chat_id, money) => {
    const updateMoney = await knex("users")
      .where({ chat_id })
      .update({ money });
  },

  getUserDB: async (chat_id) => {
    const user = await knex("users").where({ chat_id }).first();
    
    return user;
  },
};