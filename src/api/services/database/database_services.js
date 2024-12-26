const knex = require('../../../database/config.js')

module.exports = {
    createUser: async (nome, chat_id, saldo) => {
        const cadastro = await knex('users').insert({nome, chat_id, saldo})
    },

    addSaldoUser: async (chat_id, saldo) => {
        const addSaldo = await knex('users').where({chat_id}).update({saldo})
    },

    removeSaldoUser: async (chat_id, saldo) => {
        const removeSaldo = await knex('users').where({chat_id}).update({saldo})
    },

    getUserDB: async (chat_id) => {
        const user = await knex('users').where({chat_id}).first()
        return user
    },

}