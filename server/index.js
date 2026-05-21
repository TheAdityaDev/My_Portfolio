require("node:dns/promises").setServers(["1.1.1.1", "8.8.8.8"]);
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const projectRoutes = require("./routes/projectRoutes");
const contactRoutes = require("./routes/contactRoutes");
const connectDB = require("./config/db");
const path = require("path");

const app = express();

// PORT define
const PORT = process.env.PORT || 5000;

// middleware
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);
app.use(express.json());

// static frontend
app.use(express.static(path.join(__dirname, "public")));

// API routes
app.use("/api/projects", projectRoutes);
app.use("/api/contact", contactRoutes);

// test route
app.get("/api", (req, res) => {
  res.json({ message: "API Running 🚀" });
});

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// DB connect
connectDB();

// server start
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
