import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    historyApiFallback: true
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
  base: '/',
  // Configuração específica para o Render SPA
  preview: {
    port: 5173,
    strictPort: true,
    host: true,
    headers: {
      "Cache-Control": "no-store"
    }
  }
});