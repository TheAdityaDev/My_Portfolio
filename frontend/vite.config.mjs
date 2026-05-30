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
        manualChunks(id) {
          // Vendor code splitting
          if (id.includes('node_modules')) {
            if (id.includes('recharts') || id.includes('d3')) {
              return 'charts';
            }
            if (id.includes('react') || id.includes('react-router')) {
              return 'vendor';
            }
            return 'vendor';
          }
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
    ]
  }
});