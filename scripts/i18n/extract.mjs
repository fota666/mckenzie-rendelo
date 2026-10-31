// Lists the translatable Hungarian units of the built site and which ones lack an English or German translation.
// Usage: node scripts/i18n/extract.mjs        (run after `astro build`)
// Writes i18n/units.json (all units) and i18n/missing.<lang>.json (units without a translation).
import fs from 'node:fs';
import path from 'node:path';
import { cheerio, collect, listPages, loadJson, I18N_DIR, NOT_TRANSLATED, TRANSLATED } from './lib.mjs';

fs.mkdirSync(I18N_DIR, { recursive: true });
const units = new Map(); // key -> pages
for (const { rel, file } of listPages()) {
  if (NOT_TRANSLATED.has(rel)) continue;
  const $ = cheerio.load(fs.readFileSync(file, 'utf-8'), { decodeEntities: true });
  for (const u of collect($)) {
    if (!units.has(u.key)) units.set(u.key, new Set());
    units.get(u.key).add(rel || 'index');
  }
}
const all = [...units.entries()].map(([hu, pages]) => ({ hu, pages: [...pages] }));
fs.writeFileSync(path.join(I18N_DIR, 'units.json'), JSON.stringify(all, null, 1));
console.log('units:', all.length, 'words:', all.reduce((n, u) => n + u.hu.split(' ').length, 0));
for (const lang of TRANSLATED) {
  const have = loadJson(path.join(I18N_DIR, `${lang}.json`));
  const missing = all.filter((u) => !(u.hu in have));
  fs.writeFileSync(path.join(I18N_DIR, `missing.${lang}.json`), JSON.stringify(missing.map((u) => u.hu), null, 1));
  console.log(lang, 'missing:', missing.length);
}
