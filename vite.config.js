import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/omar-elfoly-portfolio-site/',
  plugins: [react()],
  build: {
    sourcemap: true,
  },
})
