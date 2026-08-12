import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    target: 'es2022',
    assetsInlineLimit: 2048,
  },
  css: {
    modules: {
      generateScopedName: '[name]__[local]__[hash:base64:4]',
      localsConvention: 'camelCaseOnly',
    },
  },
})
