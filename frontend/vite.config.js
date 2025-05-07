import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    // Configurar o histórico para suportar o modo SPA
    historyApiFallback: true
  },
  build: {
    outDir: 'dist',
  },
  // Adicionar a seguinte configuração para garantir que o router funcione em produção
  base: '/',
});