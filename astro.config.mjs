// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mckenzie-rendelo.hu',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
