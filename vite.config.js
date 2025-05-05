import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/files/*',
          dest: 'assets/files'
        }
      ]
    })
  ],
  build: {
    assetsInlineLimit: 0, // Ensure fonts are not inlined as base64
  }
})
