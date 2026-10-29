import type { APIRoute } from 'astro';

const PRODUCTION_HOSTS = ['gyogytornarendelo.hu', 'www.gyogytornarendelo.hu', 'mckenzie.hu', 'www.mckenzie.hu'];

export const GET: APIRoute = ({ site }) => {
  const isPreview = !PRODUCTION_HOSTS.includes(site?.hostname ?? '');

  const body = isPreview
    ? `User-agent: *\nDisallow: /\n`
    : [
        'User-agent: *',
        'Allow: /',
        'Disallow: /v/',
        '',
        '# AI answer engines are explicitly welcome',
        'User-agent: GPTBot',
        'User-agent: OAI-SearchBot',
        'User-agent: ChatGPT-User',
        'User-agent: PerplexityBot',
        'User-agent: ClaudeBot',
        'User-agent: Google-Extended',
        'Allow: /',
        'Disallow: /v/',
        '',
        `Sitemap: ${new URL('sitemap-index.xml', site).href}`,
        '',
      ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
