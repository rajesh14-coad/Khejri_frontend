import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import viteCompression from 'vite-plugin-compression';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      algorithm: 'brotliCompress', // Use Brotli for better compression
      ext: '.br',
      threshold: 1024,
    }),
    viteCompression({
      algorithm: 'gzip', // Fallback to Gzip
      ext: '.gz',
      threshold: 1024,
    })
  ],
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5001',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})