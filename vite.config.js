import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  base: "./",
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@vue/apollo-option": path.resolve(__dirname, "node_modules/@vue/apollo-option"),
    },
  },
  server: {
    port: 3000,
    open: true,
    historyApiFallback: true,
  },
  build: {
    rollupOptions: {
		// ?
    },
  },
});
