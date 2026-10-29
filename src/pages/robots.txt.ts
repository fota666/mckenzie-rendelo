import type { APIRoute } from 'astro';

const PRODUCTION_HOSTS = ['gyogytornarendelo.hu', 'www.gyogytornarendelo.hu', 'mckenzie.hu', 'www.mckenzie.hu'];

export const GET: APIRoute = ({ site }) => {
  const isPreview = !PRODUCTION_HOSTS.includes(site?.hostname ?? '');

  const body = isPreview
    ? `User-agent: *\nDisallow: /\n`
    : `User-agent: *\nAllow: /\nDisallow: /admin/\n\nSitemap: ${new URL('sitemap-index.xml', site).href}\n`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
