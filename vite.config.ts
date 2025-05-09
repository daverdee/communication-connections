
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { spaFallbackPlugin } from "./src/utils/vitePlugins";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Base URL for assets
  base: "/",
  server: {
    host: "::",
    port: 8080,
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['..'],
    },
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
    spaFallbackPlugin(), // Add our custom SPA fallback plugin
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'build', // Using 'build' for cPanel and Netlify compatibility
    emptyOutDir: true,
    sourcemap: process.env.NODE_ENV !== 'production'
  }
}));
