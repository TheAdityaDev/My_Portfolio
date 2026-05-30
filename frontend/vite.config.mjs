import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: "/",
  plugins: [react(), tsconfigPaths()],

  build: {
    outDir: "dist",
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          charts: ["recharts", "d3"],
          utils: ["axios", "date-fns", "framer-motion"]
        }
      }
    }
  },

  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "recharts",
      "d3",
      "axios",
      "date-fns",
      "framer-motion",
      "lucide-react",
      "react-helmet",
      "react-hook-form",
      "@reduxjs/toolkit",
      "redux",
      "react-snowfall"
    ],
    exclude: ["frontend/dist"]
  }
});