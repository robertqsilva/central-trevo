const fs = require("fs");
const path = require("path");

function getMensagemTermo(saldo, chatId) {
  const filePath = path.join(__dirname, "../../../public/termos.txt");
  const mensagem = fs.readFileSync(filePath, "utf8");

  return mensagem
}

module.exports = getMensagemTermo;
