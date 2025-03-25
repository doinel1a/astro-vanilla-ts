import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  integrations: [],
  vite: {
    plugins: [tailwindcss()]
  }
});
