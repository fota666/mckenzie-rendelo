// Entry points by situation, not by method name: patients search for their pain, not for "MDT".
// Paths are relative to BASE_URL; media is a video name in /public/video or an image path.

export interface Situation {
  id: string;
  tag: string;
  title: string;
  /** First-person version for the "which sentence is true for you" layout. */
  voice: string;
  body: string;
  link: { path: string; label: string };
  /** Condition landing pages for this situation. */
  pages?: { path: string; label: string }[];
  /** Every method this situation leads to, in the order we use them, with when it applies. */
  methods: { path: string; label: string; when?: string }[];
  media: { video?: string; image: string; alt: string };
}

export const situations: Situation[] = [
  {
    id: 'most-faj',
    tag: 'Most fáj',
    title: 'Napok, akár hetek óta fáj a dereka vagy a nyaka, és nem múlik el.',
    voice: 'Napok, akár hetek óta fáj a derekam vagy a nyakam, és nem múlik el.',
    body: 'Az első alkalommal ismételt mozgások segítségével megnézzük, hogyan változik a fájdalom különböző mozgásokra. Már az első alkalom után hazavisz egy gyakorlatot, amelyet otthon is végezhet.',
    link: { path: 'modszerek#mckenzie', label: 'McKenzie-módszer' },
    methods: [{ path: 'modszerek#mckenzie', label: 'McKenzie-módszer' }],
    pages: [{ path: 'derekfajas', label: 'Derékfájás' }, { path: 'nyakfajas', label: 'Nyakfájás' }, { path: 'isiasz', label: 'Isiász' }],
    media: { video: 'vizsgalat', image: 'video/vizsgalat.jpg', alt: 'Gyógytornász a hát mozgását vizsgálja' },
  },
  {
    id: 'visszater',
    tag: 'Évek óta visszatér',
    title: 'A fájdalom újra és újra előjön, a gyógyszer csak tompítja.',
    voice: 'A fájdalom újra és újra előjön, a gyógyszer csak tompítja.',
    body: 'Megnézzük, mely helyzetek és mozgások váltják ki a panaszt, és olyan gyakorlatokat tanítunk, amelyekkel otthon is tehet a fájdalom enyhítéséért. Szükség esetén stabilizációs tréninggel és tartásjavítással egészítjük ki, ami csökkentheti a panasz visszatérésének esélyét.',
    link: { path: 'modszerek#mckenzie', label: 'McKenzie-módszer' },
    methods: [
      { path: 'modszerek#mckenzie', label: 'McKenzie-módszer', when: 'önkezelés' },
      { path: 'modszerek#stabilizacio', label: 'Stabilizációs tréning', when: 'megelőzés' },
      { path: 'modszerek#tartasjavitas', label: 'Tartásjavítás', when: 'megelőzés' },
    ],
    pages: [{ path: 'derekfajas', label: 'Derékfájás' }, { path: 'nyakfajas', label: 'Nyakfájás' }, { path: 'ulomunka-tartashibak', label: 'Ülőmunka okozta fájdalom' }],
    media: { video: 'stabilizacio', image: 'video/stabilizacio.jpg', alt: 'Stabilizáló gyakorlat gumiszalaggal' },
  },
  {
    id: 'sferv',
    tag: 'Porckorongsérv',
    title: 'Az MRI-vizsgálat sérvet mutatott ki, és most felmerült akár a műtét lehetősége is.',
    voice: 'Az MRI sérvet mutatott ki, és felmerült akár a műtét lehetősége is.',
    body: 'A porckorongsérv sok esetben műtét nélkül is kezelhető, de nem minden állapot alkalmas konzervatív terápiára. A vizsgálat megmutatja, hogy a gyógytorna Önnek megfelelő-e, vagy előbb orvosi kivizsgálás kell. Ha műtétre mégis szükség van, felkészítjük rá, majd segítjük a műtét utáni rehabilitációját.',
    link: { path: 'modszerek#mckenzie', label: 'McKenzie-módszer' },
    methods: [
      { path: 'modszerek#mckenzie', label: 'McKenzie-módszer', when: 'konzervatív kezelés' },
      { path: 'modszerek#mutet-utani', label: 'Műtét előtti és utáni rehabilitáció', when: 'ha műtétre szükség van' },
    ],
    pages: [{ path: 'porckorongserv', label: 'Porckorongsérv' }, { path: 'isiasz', label: 'Isiász' }, { path: 'muteti-rehabilitacio', label: 'Műtét előtt és után' }],
    media: { video: 'kezeles', image: 'video/kezeles.jpg', alt: 'Manuális kezelés fekvő páciensen' },
  },
  {
    id: 'gerincferdules',
    tag: 'Gerincferdülés',
    title: 'Önnél vagy gyermekénél gerincferdülést vagy Scheuermann-betegséget állapítottak meg.',
    voice: 'Nálam vagy a gyermekemnél gerincferdülést állapítottak meg.',
    body: 'Háromdimenziós Schroth-gyakorlatokkal és légzéstechnikával dolgozunk a gerincgörbület és a törzs aszimmetriájának kezelésén, otthon is végezhető programmal. Hogy mire számíthat, azt a vizsgálat és az orvosi leletek alapján beszéljük meg.',
    link: { path: 'modszerek#schroth', label: 'Schroth-terápia' },
    methods: [
      { path: 'modszerek#schroth', label: 'Schroth-terápia' },
      { path: 'modszerek#tartasjavitas', label: 'Tartásjavítás', when: 'kiegészítő' },
    ],
    pages: [{ path: 'gerincferdules', label: 'Gerincferdülés' }],
    media: { image: 'images/modszerek/schroth.png', alt: 'Schroth-terápia gyakorlat' },
  },
];
