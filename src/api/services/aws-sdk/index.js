const aws = require("aws-sdk");

const endpoint = new aws.Endpoint(process.env.ENDPOINT_S3);

const s3 = new aws.S3({
  endpoint,
  credentials: {
    accessKeyId: process.env.KEY_ID,
    secretAccessKey: process.env.APP_KEY,
  },
});

async function uploadFile(Key, Body, mimetype) {
  const file = await s3
    .upload({
      Bucket: process.env.BACKBLAZE_BUCKET,
      Key,
      Body,
      ContentType: mimetype,
    })
    .promise();

  return {
    file
  };
}

async function deleteFile(path) {
  await s3
    .deleteObject({
      Bucket: process.env.BACKBLAZE_BUCKET,
      Key: path,
    })
    .promise();
}

module.exports = { uploadFile, deleteFile };
