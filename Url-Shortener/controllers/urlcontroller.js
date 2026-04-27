const { nanoid } = require('nanoid');
const URL = require('../models/urlmodel');
async function generateShortUrl(req, res) {
  try {
    const actualUrl = req.body.url;

    // validation
    if (!actualUrl) {
      return res.status(400).json({ error: 'URL is required' });
    }

    // generate short id
    const shortId = nanoid(10);

    // save in database
    await URL.create({
      actualUrl: actualUrl,
      shortUrl: shortId
    });

    // response
    res.json({ shortUrl: shortId });

  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
}

module.exports = { generateShortUrl };