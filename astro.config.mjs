import tailwind from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  integrations: [],
  vite: {
    plugins: [tailwind()]
  }
});
