const express = require("express");
const cors = require("cors");
require("dotenv").config();

const projectRoutes = require("./routes/projectRoutes");
const contactRoutes = require("./routes/contactRoutes");
const connectDB = require("./config/db");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

// API routes FIRST
app.use("/api/projects", projectRoutes);
app.use("/api/contact", contactRoutes);

// static frontend
app.use(express.static(path.join(__dirname, "../public")));

// frontend routes LAST
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// test route
app.get("/", (req, res) => {
  res.json({ message: "API Running 🚀" });
});

connectDB();

module.exports = app;