import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",

      includeAssets: ["favicon.ico", "images/musculos/*.png", "images/exercicios/*.gif"],
      manifest: {
        name: "Repnox",
        short_name: "Repnox",
        description: "Sistema de acompanhamento de exercícios físicos",
        theme_color: "#F16D10",
        background_color: "#1E1D22",
        display: "standalone",
        start_url: "/",

        icons: [
          {
            src: "/icon-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icon-512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
