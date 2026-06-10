import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
<<<<<<< HEAD
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',

      manifest: {
        name: 'Repnox',
        short_name: 'Repnox',
        description: 'Sistema de acompanhamento de exercícios físicos',
        theme_color: '#F16D10',
        background_color: '#1E1D22',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})
=======

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
>>>>>>> adbd70a40a05f4314f664ec6506bc5fbe3c9a4f0
