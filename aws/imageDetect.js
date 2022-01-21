const AWS = require("aws-sdk");

const detectImageLabels = (bytes) => {
  AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
  });

  const client = new AWS.Rekognition();

  const params = {
    Image: {
      Bytes: bytes,
    },
  };

  return client.detectLabels(params).promise();
};

module.exports = detectImageLabels;
