import path from 'node:path';

import tailwind from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  integrations: [],
  vite: {
    plugins: [tailwind()],
    resolve: {
      alias: {
        _config: path.resolve('./_config.ts')
      }
    }
  }
});
