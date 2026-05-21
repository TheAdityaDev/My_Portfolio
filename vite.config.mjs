import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tagger from "@dhiwise/component-tagger";

export default defineConfig({
  base: "./",   // 🔥 MOST IMPORTANT FIX

  build: {
    outDir: "dist",   // 🔥 FIXED (Vercel standard)
    chunkSizeWarningLimit: 2000,
  },

  plugins: [tsconfigPaths(), react(), tagger()],
});