import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import babel from 'vite-plugin-babel';


export default defineConfig({
  plugins: [
    react(),
    babel(), // No additional configuration is required
  ],
  base: '/orcas_testing/', // Adjust for GitHub Pages
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  build: {
    rollupOptions: {
      input: 'src/main.js', // Ensure this matches your entry file
    },
  },
});
