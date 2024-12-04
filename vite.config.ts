import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// TypeScript Vite configuration
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    force: true,
  },
});
