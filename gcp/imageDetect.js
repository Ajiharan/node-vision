const vision = require("@google-cloud/vision");

async function detectLabels(buffer) {
  try {
    const config = {
      credentials: {
        private_key: process.env.GOOGLE_PRIVARE_KEY?.replace(/\\n/g, "\n"),
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
      },
    };
    //setup client
    const client = new vision.ImageAnnotatorClient(config);

    // Performs label detection on the image file
    const [result] = await client.labelDetection(buffer);
    const labels = result.labelAnnotations;

    return labels;
  } catch (err) {
    throw err?.message;
  }
}

module.exports = detectLabels;
