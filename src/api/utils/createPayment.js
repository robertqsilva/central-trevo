const { uploadFile } = require("../services/aws-sdk");
const { createPayment } = require("../services/gateway");
const path = require("path");
const getmessages = require("./getMessages");
const saveBase64ToFileAndResize = require("./base64ToFile");
const fs = require("fs");

async function createMessagePayment(transaction_amount, description, chatId) {
  const payment = await createPayment(transaction_amount, description);

  const codepix = payment.code;
  const imgQrCodeBase64 = payment.code_base64;

  const tempImagePath = path.join(__dirname, "temp_qrcode.jpg");
  await saveBase64ToFileAndResize(imgQrCodeBase64, tempImagePath, 300, 300);

  const fileName = `qrcode_${chatId}.jpg`;
  const s3Response = await uploadFile(
    fileName,
    fs.createReadStream(tempImagePath),
    "image/jpeg"
  );
  

  const imageUrl = `${s3Response.file.Location}?versionId=${s3Response.file.VersionId}`;

  const message = getmessages.deposit(codepix, transaction_amount);
  const keyFile = s3Response.file.Key;
  const idPayment = payment.id;

  return { message, imageUrl, tempImagePath, keyFile, idPayment };
}

module.exports = createMessagePayment;
