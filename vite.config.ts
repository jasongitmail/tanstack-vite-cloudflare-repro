// import { cloudflare } from "@cloudflare/vite-plugin";
// import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    tanstackStart({
      tsr: {
        target: 'react',
        autoCodeSplitting: true,
        verboseFileRoutes: false,
        virtualRouteConfig: './routes.ts',
      },
      target: "cloudflare_module",
    }),
    // tailwindcss(),
    // cloudflare(),
  ],
});
