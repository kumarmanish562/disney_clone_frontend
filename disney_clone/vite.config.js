import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/disney_clone_fronten/', // <-- Add this line
  plugins: [react()],
});