const fs = require("fs");
const path = require("path");

function getMensagemStart(saldo, chatId) {
  const filePath = path.join(__dirname, "../../../public/start.txt");
  const mensagem = fs.readFileSync(filePath, "utf8");

  
  return mensagem
    .replace("{saldo}", Number(saldo).toFixed(2))
    .replace("{chatId}", chatId);
}

module.exports = getMensagemStart