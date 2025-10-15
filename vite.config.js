import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: '.',           // ✅ Make sure this points to the folder with index.html
  build: {
    outDir: 'dist'
  }
})
