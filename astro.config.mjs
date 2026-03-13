// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://fota666.github.io',
  base: '/mckenzie-rendelo',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
