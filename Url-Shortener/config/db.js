const mongoose = require('mongoose');

async function connection(url) {
  try {
    const res = await mongoose.connect(url);
    console.log("MongoDB connected successfully");
    return res;
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
}

module.exports = { connection };