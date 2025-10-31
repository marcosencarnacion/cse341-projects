const express = require('express');
const { connectToMongo } = require('./db/connection');
const app = express();

app.use(express.json());

async function startServer() {
  try {
    await connectToMongo();
    console.log("🚀 Server is ready to use MongoDB");

    app.get('/', (req, res) => {
      res.send('MongoDB connected successfully!');
    });

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error('Error starting server:', err);
  }
}

startServer();
