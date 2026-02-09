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
    // Minification options
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs in production
        drop_debugger: true,
      },
    },
    // Chunk size warning limit
    chunkSizeWarningLimit: 1000,
    // Manual chunking to split code
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Split heavy libraries into their own chunks
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
              return 'vendor-react';
            }
            if (id.includes('framer-motion')) {
              return 'vendor-framer';
            }
            if (id.includes('leaflet') || id.includes('react-leaflet')) {
              return 'vendor-maps';
            }
            // Default vendor chunk
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