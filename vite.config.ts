import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Это позволит открывать проект в локальной сети, чтобы тестировать с телефона
    host: true,
    port: 3000,
  },
  build: {
    // Папка, куда соберется готовый проект
    outDir: 'dist',
  }
})
