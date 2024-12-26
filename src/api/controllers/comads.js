const getMensagem = require("../utils/msmstart");
const optionsStart = require("../utils/options");

function start(saldo, chatId) {
  const mensagem = getMensagem(saldo, chatId);
  const options = optionsStart();

  return { mensagem, options };
}

module.exports = { start };
