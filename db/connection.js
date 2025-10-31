// db/connection.js
const { MongoClient } = require('mongodb');
require('dotenv').config(); // 👈 Loads variables from .env

// 1️⃣ Get the connection string from the environment
const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("❌ MONGODB_URI is not defined in your .env file");
}

// 2️⃣ Create the MongoClient instance
const client = new MongoClient(uri);

// 3️⃣ Function to connect
async function connectToMongo() {
  try {
    await client.connect();
    console.log("✅ Connected successfully to MongoDB Atlas");
    return client;
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err);
    throw err;
  }
}

// 4️⃣ Helper function to access a specific database
function getDb(dbName) {
  return client.db(dbName);
}

module.exports = { connectToMongo, getDb };
