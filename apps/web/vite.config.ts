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
      "@server": path.resolve(__dirname, "../../apps/server/src"),
      "@db": path.resolve(__dirname, "../../packages/db/src")
    },
  },
    build: {
    rollupOptions: {
      // If you want to exclude this shared package from bundling
      external: ["@sanochatroom/db", "@sanochatroom/server"],
    }
  }
})

