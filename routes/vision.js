const express = require("express");
const detectImageLabel = require("../aws/imageDetect");
const detectLabels = require("../gcp/imageDetect");
const router = express.Router();
const dotenv = require("dotenv");

dotenv.config();
router.post("/classify", async (req, res) => {
  try {
    const { data } = req.files.file;

    //------using google vision service--------
    // const result = await detectLabels(data);
    // const response = result?.map(({ description }) => description);

    //-------using aws Rekognition service--------
    const result = await detectImageLabel(data);
    const response = result?.Labels.map(({ Name }) => Name);
    return res.json({
      labels: response,
    });
  } catch (err) {
    // return res.status(400).json({ error: err||"Unable to process the request" });
    return res.status(400).json({ error: "Unable to process the request" });
  }
});

module.exports = router;
