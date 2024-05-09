import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { pigment } from '@pigment-css/vite-plugin';
import theme from './theme';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    pigment({
      theme,
    }),
    react(),
  ],
});
