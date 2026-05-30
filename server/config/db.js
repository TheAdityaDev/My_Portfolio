const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI;
    
    if (!uri) {
      console.warn("MONGODB_URI missing in .env - running in offline mode");
      return false;
    }

    await mongoose.connect(uri);
    console.log("MongoDB connected successfully");
    return true;
  } catch (error) {
    console.error("MongoDB connection failed:");
    console.error(error.message);
    console.warn("Continuing without database...");
    return false;
  }
};

module.exports = connectDB;
