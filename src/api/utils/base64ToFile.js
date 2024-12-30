const sharp = require("sharp");

async function saveBase64ToFileAndResize(
  base64String,
  filePath,
  width,
  height
) {
  
  
  const buffer = Buffer.from(base64String, "base64");

  await sharp(buffer)
    .resize(width, height)
    .toFile(filePath)
    .catch((err) => {
      console.error("Erro ao redimensionar e salvar o arquivo:", err);
      throw err;
    });
}

module.exports = saveBase64ToFileAndResize;
