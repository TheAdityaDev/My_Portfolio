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
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to DB (non-blocking, won't crash if fails)
connectDB().catch(err => {
  console.error("⚠️ DB connection error:", err.message);
  // App continues without DB - API will return dummy data
});

// frontend static files - serve from frontend/dist
const frontendPath = path.join(__dirname, '../frontend/dist');
app.use(express.static(frontendPath));

// API routes
app.use("/api/projects", projectRoutes);
app.use("/api/contact", contactRoutes);

// test api
app.get("/api", (req, res) => {
  res.json({ message: "API Running 🚀" });
});

// React Router Fix 🔥 - Catch-all route for SPA
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

// Global error handler - PREVENTS CRASHES
app.use((err, req, res, next) => {
  console.error("❌ Unhandled error:", err);
  res.status(500).json({ 
    message: "Internal Server Error",
    error: process.env.NODE_ENV === 'production' ? null : err.message 
  });
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('⚠️ Unhandled Rejection at:', promise, 'reason:', reason);
});

// Server Start - Export for both local and Vercel
if (require.main === module) {
  // Local development
  app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
  });
}

// Export for Vercel serverless
module.exports = app;
