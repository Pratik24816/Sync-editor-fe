// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    base: '/',
  },
  server: {
    port: 3000,
  },
  // Add this for routing
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
