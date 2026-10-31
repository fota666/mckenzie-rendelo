// "Mi a panasza?" entries for the calm homepage and its design alternatives.
// `poster` is the first frame of the clip that belongs to the condition page (public/video/rendelo).
export interface Complaint { slug: string; name: string; note: string; group: 'Gerinc' | 'Ízületek' | 'Műtét után'; poster: string }

export const chooser: Complaint[] = [
  { slug: 'derekfajas', name: 'Derékfájás', note: 'Lumbágó, visszatérő derékfájás', group: 'Gerinc', poster: 'derekfajas-hasonfekvo-mobilizalas' },
  { slug: 'nyakfajas', name: 'Nyakfájás', note: 'Nyaki fájdalom, nyakból induló fejfájás', group: 'Gerinc', poster: 'nyak-mckenzie-onkezeles' },
  { slug: 'porckorongserv', name: 'Porckorongsérv', note: 'Konzervatív kezelés, műtét előtt', group: 'Gerinc', poster: 'derek-nyak-ulve-gyakorlat' },
  { slug: 'isiasz', name: 'Isiász', note: 'Lábba sugárzó fájdalom', group: 'Gerinc', poster: 'csipo-mobilizalas-hanyatt' },
  { slug: 'gerincferdules', name: 'Gerincferdülés', note: 'Gyermekeknek és felnőtteknek', group: 'Gerinc', poster: 'labdan-ules-szalaghuzas' },
  { slug: 'ulomunka-tartashibak', name: 'Ülőmunka okozta fájdalom', note: 'Nyak, váll, derék', group: 'Gerinc', poster: 'ulomunka-tartaskorrekcio' },
  { slug: 'vallfajas', name: 'Váll', note: 'Beszűkült mozgás, fagyott váll', group: 'Ízületek', poster: 'vall-manualis-kezeles' },
  { slug: 'terdfajdalom', name: 'Térd', note: 'Sport, sérülés, műtét után', group: 'Ízületek', poster: 'terd-csipo-vizsgalat' },
  { slug: 'csipofajdalom', name: 'Csípő', note: 'Fájó, merev csípő', group: 'Ízületek', poster: 'csipo-mobilizalas-ovvel' },
  { slug: 'muteti-rehabilitacio', name: 'Műtét előtt vagy után', note: 'Gerinc, csípő, térd', group: 'Műtét után', poster: 'gluteus-gumiszalag-terd' },
];
