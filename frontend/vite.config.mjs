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
          charts: ["recharts", "d3"]
        }
      }
    }
  },

  ssr: {
    noExternal: ["recharts", "d3"]
  },

  optimizeDeps: {
    include: ["recharts", "d3", "react", "react-dom"]
  }
});