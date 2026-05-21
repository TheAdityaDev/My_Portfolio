const express = require("express");
const cors = require("cors");
require("dotenv").config();

const projectRoutes = require("./routes/projectRoutes");
const contactRoutes = require("./routes/contactRoutes");
const connectDB = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

// API routes
app.use("/api/projects", projectRoutes);
app.use("/api/contact", contactRoutes);

// test route
app.get("/", (req, res) => {
  res.json({ message: "API Running 🚀" });
});

connectDB();

module.exports = app;