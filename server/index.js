const express = require("express");
const cors = require("cors");
require("dotenv").config();

const projectRoutes = require("./routes/projectRoutes");
const contactRoutes = require("./routes/contactRoutes");
const connectDB = require("./config/db");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 5000;

// middleware
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

// frontend static files
app.use(express.static(path.join(__dirname, "public")));

// API routes
app.use("/api/projects", projectRoutes);
app.use("/api/contact", contactRoutes);

// test api
app.get("/api", (req, res) => {
  res.json({ message: "API Running 🚀" });
});

// React Router Fix 🔥
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// DB connect
connectDB();

// server start
module.exports = app