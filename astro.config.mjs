// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// SITE_URL / BASE_PATH are set per deploy target (see .github/workflows/deploy.yml).
// Default: the redesign preview on the MediaCenter host, served from the domain root.
export default defineConfig({
  site: process.env.SITE_URL || 'https://redesign.mckenzie.hu',
  base: process.env.BASE_PATH || '/',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
