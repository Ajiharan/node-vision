const vision = require("@google-cloud/vision");
const clientSecret = require("./google-client-secret.json");
async function detectLabels(buffer) {
  try {
    const config = {
      credentials: {
        private_key: clientSecret.private_key,
        client_email: clientSecret.client_email,
      },
    };
    const client = new vision.ImageAnnotatorClient(config);

    // Performs label detection on the image file
    const [result] = await client.labelDetection(buffer);
    const labels = result.labelAnnotations;

    return labels;
  } catch (err) {
    console.log(err);
  }
  // Imports the Google Cloud client library

  // Creates a client
}

module.exports = detectLabels;
