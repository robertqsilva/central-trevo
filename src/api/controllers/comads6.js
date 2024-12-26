const fs = require("fs");
const path = require("path");
const sharp = require("sharp"); 
const { userState } = require("./comads9");
const { createPayment, checkPayment } = require("../services/gateway");
const { excluirImagem, uploadArquivos } = require("../services/aws-sdk");

async function saveBase64ToFileAndResize(
  base64String,
  filePath,
  width,
  height
) {
  const buffer = Buffer.from(base64String, "base64");

  // Redimensiona a imagem usando Sharp
  await sharp(buffer)
    .resize(width, height)
    .toFile(filePath) // Salva a imagem redimensionada
    .catch((err) => {
      console.error("Erro ao redimensionar e salvar o arquivo:", err);
      throw err;
    });
}

async function sendDeposito(bot, chatId, messageId, query) {
  const transaction_amount = userState[chatId];

  if (!transaction_amount || transaction_amount < 10) {
    return bot.answerCallbackQuery(query.id, {
      text: `❌ O valor deve ser no mínimo R$ 10 para gerar um Pix!`,
      show_alert: true,
    });
  }

  const description = `Depósito no valor de ${transaction_amount}`;
  const payment = await createPayment(transaction_amount, description);

  const codigopix = payment.code;
  const imgQrCodeBase64 = payment.code_base64;
  const filePath = path.join(__dirname, "../../../public/deposito.txt");

  const tempImagePath = path.join(__dirname, "temp_qrcode.jpg");


  await saveBase64ToFileAndResize(imgQrCodeBase64, tempImagePath, 300, 300);

  const fileName = `qrcode_${chatId}.jpg`;
  const s3Response = await uploadArquivos(
    fileName,
    fs.createReadStream(tempImagePath),
    "image/jpeg"
  );

  const imageUrl = `${s3Response.arquivo.Location}?versionId=${s3Response.arquivo.VersionId}`;

  const mensagem = fs
    .readFileSync(filePath, "utf8")
    .replace("{codigopix}", codigopix)
    .replace("{transaction_amount}", transaction_amount.toFixed(2));

  bot.editMessageMedia(
    {
      type: "photo",
      media: imageUrl,
      caption: mensagem,
      parse_mode: "HTML",
    },
    {
      chat_id: chatId,
      message_id: messageId,
      reply_markup: {
        inline_keyboard: [
          [{ text: "🍀🍀🍀🍀🍀🍀🍀🍀🍀🍀🍀🍀🍀🍀", callback_data: "🍀" }],
        ],
      },
    }
  );

  delete userState[chatId];

  await fs.promises.unlink(tempImagePath);
  await excluirImagem(s3Response.arquivo.Key);
  await checkPayment(payment.id, chatId)
}

module.exports = { sendDeposito };
