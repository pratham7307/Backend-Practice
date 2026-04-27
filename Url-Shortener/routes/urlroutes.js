const express = require("express");
const router = express.Router();

const { generateShortUrl } = require("../controllers/urlcontroller");

router.post("/", generateShortUrl);

module.exports = router;