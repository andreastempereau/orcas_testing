import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/orcas_testing/', // Ensure this matches your GitHub repository name
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  build: {
    rollupOptions: {
      input: 'src/main.tsx', // Ensure this matches your entry file
    },
  },
});
