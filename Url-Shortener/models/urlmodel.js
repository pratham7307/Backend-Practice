const mongoose = require("mongoose");
const urlSchema = new mongoose.Schema(
  {
    actualUrl: {
      type: String,
      required: true,
      trim: true,
    },
    shortUrl: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);
const Url = mongoose.model("Url", urlSchema);
module.exports = Url;