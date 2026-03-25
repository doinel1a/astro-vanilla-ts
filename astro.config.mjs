import path from 'node:path';

import sitemap from '@astrojs/sitemap';
import tailwind from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

import { DOMAIN } from './_config';

export default defineConfig({
  site: `https://${DOMAIN}`,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwind()],
    resolve: {
      alias: {
        _config: path.resolve('./_config.ts')
      }
    }
  }
});
