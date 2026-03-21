import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@db": path.resolve(__dirname, "../../packages/db/src")
    }
  },
  build: {
    rollupOptions: {
      // If you want to exclude this shared package from bundling
      external: ["@sanochatroom/db"]
    }
  }
})
