import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  server: {
    // apenas para dev, pode ignorar se já estiver ok
    port: 3000
  },
  base: '/'
})
