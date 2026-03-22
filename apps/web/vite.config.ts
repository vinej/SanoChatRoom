import { defineConfig } from "vite"
import path from "path"
import react from "@vitejs/plugin-react"
import tailwind from "@tailwindcss/vite"
export default defineConfig({
  plugins: [
    // The order doesn’t strictly matter, but this is conventional
    tailwind(),
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@ltrpc/router": path.resolve(__dirname, "../../packages/ltrpc/src")
    },
  },
    build: {
    rollupOptions: {
      // If you want to exclude this shared package from bundling
      external: ["@sanochatroom/db", "@sanochatroom/ltrpc"],
    }
  }
})

