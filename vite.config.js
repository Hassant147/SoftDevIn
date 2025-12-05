import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
// NOTE: For pre-rendering, consider:
// - Vercel's ISR (Incremental Static Regeneration) at deployment
// - prerender.io service integration
// - vite-ssg for static site generation
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'node_modules'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minimize: 'terser',
  },
})

