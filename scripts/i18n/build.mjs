// Writes the English and German pages after `astro build`.
//   dist/<page>/index.html  (Hungarian, language links and hreflang added in place)
//   dist/en/<slug>/index.html, dist/de/<slug>/index.html  (translated copies)
// Translations come from i18n/en.json and i18n/de.json; a unit without a translation stays Hungarian and is reported.
import fs from 'node:fs';
import path from 'node:path';
import { cheerio, collect, fromUnit, listPages, loadJson, localizedPath, norm, DIST, I18N_DIR, LANGS, NOT_TRANSLATED, SLUGS, TRANSLATED } from './lib.mjs';

let base = process.env.BASE_PATH || '/';
if (!base.startsWith('/')) base = '/' + base;
if (!base.endsWith('/')) base += '/';
const site = (process.env.SITE_URL || 'https://redesign.mckenzie.hu').replace(/\/$/, '');
const OG_LOCALE = { hu: 'hu_HU', en: 'en_GB', de: 'de_DE' };

const dict = Object.fromEntries(TRANSLATED.map((l) => [l, loadJson(path.join(I18N_DIR, `${l}.json`))]));
const pages = listPages();
const known = new Set(pages.map((p) => p.rel));
const missing = Object.fromEntries(TRANSLATED.map((l) => [l, new Set()]));

const abs = (lang, rel) => site + localizedPath(base, lang, rel);

function escapeTr(t) {
  return t
    .replace(/&(?!amp;|lt;|gt;|quot;|nbsp;|#\d+;)/g, '&amp;')
    .replace(/<(?!\/?t\d+>|br\s*\/?>)/g, '&lt;');
}

function setLanguageLinks($, lang, rel) {
  const translated = !NOT_TRANSLATED.has(rel);
  $('[data-lang-switch] a[data-lang]').each((_, a) => {
    const target = a.attribs['data-lang'];
    const r = translated || target === 'hu' ? rel : '';
    $(a).attr('href', localizedPath(base, target, translated ? rel : (target === 'hu' ? rel : '')));
    if (target === lang) $(a).attr('aria-current', 'true'); else $(a).removeAttr('aria-current');
  });
  $('[data-lang-current]').text(lang.toUpperCase());
  if (!translated) return;
  $('link[rel=alternate][hreflang]').remove();
  const links = LANGS.map((l) => `<link rel="alternate" hreflang="${l}" href="${abs(l, rel)}" />`).join('\n  ')
    + `\n  <link rel="alternate" hreflang="x-default" href="${abs('hu', rel)}" />`;
  $('head').append('\n  ' + links + '\n');
}

function rewriteLinks($, lang) {
  $('a[href]').each((_, a) => {
    if ($(a).closest('[data-lang-switch]').length) return;
    const href = a.attribs.href;
    if (!href.startsWith(base)) return;
    const rest = href.slice(base.length);
    const m = rest.match(/^([^#?]*)(.*)$/);
    const rel = m[1].replace(/\/$/, '');
    if (!known.has(rel)) return;
    if (NOT_TRANSLATED.has(rel)) { $(a).attr('lang', 'hu'); return; }
    $(a).attr('href', localizedPath(base, lang, rel) + m[2]);
  });
}

function translate($, lang, rel) {
  const tr = dict[lang];
  const jsonDone = new Set();
  for (const u of collect($)) {
    const t = tr[u.key];
    if (t === undefined || t === '') { missing[lang].add(u.key); continue; }
    if (u.kind === 'unit') $(u.el).html(fromUnit(escapeTr(t), u.tags));
    else if (u.kind === 'text') {
      const lead = u.node.data.match(/^\s*/)[0], trail = u.node.data.match(/\s*$/)[0];
      u.node.data = lead + t + trail;
    } else if (u.kind === 'attr') $(u.el).attr(u.attr, t);
    else if (u.kind === 'json') {
      if (jsonDone.has(u.script)) continue;
      jsonDone.add(u.script);
      let data; try { data = JSON.parse(u.script.children[0].data); } catch { continue; }
      const visit = (v) => {
        if (Array.isArray(v)) return v.map(visit);
        if (v && typeof v === 'object') return Object.fromEntries(Object.entries(v).map(([k, x]) => {
          if (typeof x === 'string' && /^(name|description|text|jobTitle|headline|serviceType|abstract)$/.test(k) && tr[norm(x)]) return [k, tr[norm(x)]];
          if (k === 'inLanguage') return [k, lang];
          if (k === 'url' && typeof x === 'string' && x.startsWith(site + base)) {
            const r = x.slice((site + base).length).replace(/\/$/, '');
            if (known.has(r) && !NOT_TRANSLATED.has(r)) return [k, abs(lang, r)];
          }
          return [k, visit(x)];
        }));
        return v;
      };
      u.script.children[0].data = JSON.stringify(visit(data));
    }
  }
  $('html').attr('lang', lang);
  $('meta[property="og:locale"]').attr('content', OG_LOCALE[lang]);
  $('link[rel=canonical]').attr('href', abs(lang, rel));
  $('meta[property="og:url"]').attr('content', abs(lang, rel));
  rewriteLinks($, lang);
}

let written = 0;
for (const { rel, file } of pages) {
  const html = fs.readFileSync(file, 'utf-8');
  // Hungarian page: language links and hreflang
  const hu = cheerio.load(html, { decodeEntities: false });
  setLanguageLinks(hu, 'hu', rel);
  fs.writeFileSync(file, hu.html());
  if (NOT_TRANSLATED.has(rel)) continue;
  for (const lang of TRANSLATED) {
    const $ = cheerio.load(html, { decodeEntities: false });
    translate($, lang, rel);
    setLanguageLinks($, lang, rel);
    const slug = SLUGS[lang][rel] ?? rel;
    const outDir = path.join(DIST, lang, slug);
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'index.html'), $.html());
    written++;
  }
}

// sitemap: add the translated URLs
const sm = path.join(DIST, 'sitemap-0.xml');
if (fs.existsSync(sm)) {
  let xml = fs.readFileSync(sm, 'utf-8');
  const extra = [];
  for (const { rel } of pages) {
    if (NOT_TRANSLATED.has(rel)) continue;
    for (const lang of TRANSLATED) extra.push(`<url><loc>${abs(lang, rel)}</loc></url>`);
  }
  xml = xml.replace('</urlset>', extra.join('') + '</urlset>');
  fs.writeFileSync(sm, xml);
}

console.log(`i18n: wrote ${written} translated pages`);
for (const l of TRANSLATED) if (missing[l].size) console.warn(`i18n: ${l} has ${missing[l].size} untranslated units (left in Hungarian)`);
