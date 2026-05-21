require("node:dns/promises").setServers(["1.1.1.1", "8.8.8.8"]); 
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const projectRoutes = require('./routes/projectRoutes');
const contactRoutes = require('./routes/contactRoutes');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/projects', projectRoutes);
app.use('/api/contact', contactRoutes);

app.use(express.static(
  path.join(__dirname, "../build")
));

app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../client/dist/index.html")
  );
});

app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on port ${PORT}`);
});
