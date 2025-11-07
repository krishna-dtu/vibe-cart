import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// ⚠️ Replace 'your-repo-name' below with your actual GitHub repository name
export default defineConfig(() => ({
  base: "/vibe-cart/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve("./src"),
    },
  },
}));
