import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Automatically use root '/' for Vercel, and '/luxury-twins-carcare/' for GitHub Pages
  base: process.env.VERCEL ? '/' : '/luxury-twins-carcare/',
})
