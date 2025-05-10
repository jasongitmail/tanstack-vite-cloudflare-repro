import { defineConfig } from 'vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tanstackStart({
      tsr: {
        target: 'react',
        autoCodeSplitting: true,
        verboseFileRoutes: false,
        virtualRouteConfig: './routes.ts',
      },
    }),
  ],
});
