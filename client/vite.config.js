import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages configuration for repo: minhabirthday
export default defineConfig({
  plugins: [react()],
  base: '/minhabirthday/',
  server: {
    port: 3000
  }
});

