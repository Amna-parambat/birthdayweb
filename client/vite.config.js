import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages configuration for repo: minha-birthday-mern
export default defineConfig({
  plugins: [react()],
  base: '/minha-birthday-mern/',
  server: {
    port: 3000
  }
});

