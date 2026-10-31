// Shared helpers for the English and German builds.
//
// The Hungarian pages stay the single source of truth. After `astro build`, every built page is read,
// its visible text is split into translatable units, and a copy is written to dist/en and dist/de with
// the units replaced from i18n/en.json and i18n/de.json (keys are the Hungarian unit strings).
// Units are whole blocks of text with inline markup (links, bold) replaced by numbered placeholders,
// so translators see one sentence in context: "Telefonon <t1>(30) 487-8284</t1>, hétköznap ...".

import * as cheerio from 'cheerio';
import fs from 'node:fs';
import path from 'node:path';

export const LANGS = ['hu', 'en', 'de'];
export const TRANSLATED = ['en', 'de'];
export const DIST = path.resolve('dist');
export const I18N_DIR = path.resolve('i18n');

// Pages that are not translated (legal text needs a lawyer's review first).
export const NOT_TRANSLATED = new Set(['adatvedelmi-tajekoztato']);

// Hungarian page path (relative to the base, no slashes) -> localized slug.
export const SLUGS = {
  en: {
    '': '', modszerek: 'methods', csapatunk: 'team', araink: 'prices', velemenyek: 'reviews', gyik: 'faq', kapcsolat: 'contact',
    derekfajas: 'low-back-pain', nyakfajas: 'neck-pain', porckorongserv: 'herniated-disc', isiasz: 'sciatica',
    gerincferdules: 'scoliosis', vallfajas: 'shoulder-pain', terdfajdalom: 'knee-pain', csipofajdalom: 'hip-pain',
    'muteti-rehabilitacio': 'rehabilitation-before-and-after-surgery', 'ulomunka-tartashibak': 'desk-work-pain',
  },
  de: {
    '': '', modszerek: 'methoden', csapatunk: 'team', araink: 'preise', velemenyek: 'bewertungen', gyik: 'haeufige-fragen', kapcsolat: 'kontakt',
    derekfajas: 'rueckenschmerzen', nyakfajas: 'nackenschmerzen', porckorongserv: 'bandscheibenvorfall', isiasz: 'ischias',
    gerincferdules: 'skoliose', vallfajas: 'schulterschmerzen', terdfajdalom: 'knieschmerzen', csipofajdalom: 'huftschmerzen',
    'muteti-rehabilitacio': 'reha-vor-und-nach-operation', 'ulomunka-tartashibak': 'schreibtischarbeit-beschwerden',
  },
};

const INLINE = new Set(['a', 'strong', 'b', 'em', 'i', 'span', 'br', 'small', 'sup', 'sub', 'abbr', 'mark', 'u']);
const SKIP = new Set(['script', 'style', 'svg', 'noscript', 'iframe', 'video', 'img', 'input', 'textarea', 'path']);
const ATTRS = ['alt', 'title', 'aria-label', 'placeholder'];

export const norm = (s) => s.replace(/[ \t\r\n\f]+/g, ' ').trim();

/** List the built Hungarian pages as { rel, file } where rel is '' for the home page. */
export function listPages() {
  const out = [];
  const home = path.join(DIST, 'index.html');
  if (fs.existsSync(home)) out.push({ rel: '', file: home });
  for (const d of fs.readdirSync(DIST, { withFileTypes: true })) {
    if (!d.isDirectory() || ['_astro', 'images', 'video', 'en', 'de'].includes(d.name)) continue;
    const f = path.join(DIST, d.name, 'index.html');
    if (fs.existsSync(f)) out.push({ rel: d.name, file: f });
  }
  return out;
}

function inlineOK(el) {
  return el.type === 'tag' && INLINE.has(el.name) && el.children.every((k) => k.type === 'text' || k.type === 'comment' || inlineOK(k));
}
const hasText = (el) => el.children.some((k) => (k.type === 'text' && k.data.trim()) || (k.type === 'tag' && !SKIP.has(k.name) && hasText(k)));

/** innerHTML with inline tags replaced by <tN> placeholders; returns { key, tags } */
export function toUnit($, el) {
  const tags = [];
  const render = (nodes) => nodes.map((n) => {
    if (n.type === 'text') return n.data.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    if (n.type !== 'tag') return '';
    if (n.name === 'br') return '<br/>';
    const i = tags.length + 1;
    tags.push({ open: openTag($, n), name: n.name });
    return `<t${i}>${render(n.children)}</t${i}>`;
  }).join('');
  const html = render(el.children);
  return { key: norm(html), tags };
}
function openTag($, n) {
  const attrs = Object.entries(n.attribs || {}).map(([k, v]) => ` ${k}="${String(v).replace(/"/g, '&quot;')}"`).join('');
  return `<${n.name}${attrs}>`;
}
export function fromUnit(translated, tags) {
  let out = translated;
  tags.forEach((t, idx) => {
    const i = idx + 1;
    out = out.split(`<t${i}>`).join(t.open).split(`</t${i}>`).join(`</${t.name}>`);
  });
  return out.replace(/<br\s*\/?>/g, '<br />');
}

/** Walk the body and collect translatable nodes: [{ kind, el|node, key, tags }] */
export function collect($) {
  const out = [];
  const walk = (el) => {
    if (el.attribs?.['data-notranslate'] !== undefined) return;
    for (const a of ATTRS) if (el.attribs?.[a] && /\p{L}{3}/u.test(el.attribs[a])) out.push({ kind: 'attr', el, attr: a, key: norm(el.attribs[a]) });
    for (const [a, v] of Object.entries(el.attribs || {})) if (a.startsWith('data-msg-') && v) out.push({ kind: 'attr', el, attr: a, key: norm(v) });
    if (SKIP.has(el.name)) return;
    const kids = el.children || [];
    const direct = kids.some((k) => k.type === 'text' && k.data.trim());
    const allInline = kids.every((k) => k.type === 'text' || k.type === 'comment' || inlineOK(k));
    if (direct && allInline) {
      const u = toUnit($, el);
      if (/\p{L}{2}/u.test(u.key)) out.push({ kind: 'unit', el, ...u });
      return;
    }
    for (const k of kids) {
      if (k.type === 'tag') walk(k);
      else if (k.type === 'text' && k.data.trim() && /\p{L}{2}/u.test(k.data)) out.push({ kind: 'text', node: k, key: norm(k.data) });
    }
  };
  walk($('body')[0]);
  // <title> and meta
  const title = $('title')[0];
  if (title) out.push({ kind: 'text', node: title.children[0], key: norm(title.children[0].data) });
  $('meta[name=description],meta[property="og:title"],meta[property="og:description"]').each((_, m) => {
    if (m.attribs.content) out.push({ kind: 'attr', el: m, attr: 'content', key: norm(m.attribs.content) });
  });
  // JSON-LD: sentence-like string values
  $('script[type="application/ld+json"]').each((_, s) => {
    let data; try { data = JSON.parse(s.children[0]?.data || ''); } catch { return; }
    const strs = [];
    const visit = (v, key) => {
      if (typeof v === 'string') { if (/^(name|description|text|jobTitle|headline|serviceType|abstract)$/.test(key) && /\p{L}{3}/u.test(v)) strs.push(v); }
      else if (Array.isArray(v)) v.forEach((x) => visit(x, key));
      else if (v && typeof v === 'object') Object.entries(v).forEach(([k, x]) => visit(x, k));
    };
    visit(data, '');
    for (const v of strs) out.push({ kind: 'json', script: s, key: norm(v), raw: v });
  });
  return out;
}

export function loadJson(f, fallback = {}) {
  try { return JSON.parse(fs.readFileSync(f, 'utf-8')); } catch { return fallback; }
}

export function localizedPath(base, lang, rel) {
  if (lang === 'hu') return rel ? `${base}${rel}/` : base;
  const slug = SLUGS[lang][rel] ?? rel;
  return slug ? `${base}${lang}/${slug}/` : `${base}${lang}/`;
}

export { cheerio };
