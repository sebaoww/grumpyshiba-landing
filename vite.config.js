import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: '.', // root della vite build
  build: {
    outDir: 'dist',
  }
})
