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
    title: 'Napok óta fáj a dereka vagy a nyaka, és nem múlik.',
    voice: 'Napok óta fáj a derekam vagy a nyakam, és nem múlik.',
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
    body: 'Megkeressük, mi váltja ki a visszaesést, és McKenzie-gyakorlatokkal megtanítjuk, hogyan kezelje a következő rohamot maga. A visszaesések megelőzésére stabilizációs tréninget és tartásjavítást kapcsolunk hozzá.',
    link: { path: 'modszerek#mckenzie', label: 'McKenzie-módszer' },
    methods: [
      { path: 'modszerek#mckenzie', label: 'McKenzie-módszer', when: 'önkezelés' },
      { path: 'modszerek#stabilizacio', label: 'Stabilizációs tréning', when: 'megelőzés' },
      { path: 'modszerek#tartasjavitas', label: 'Tartásjavítás', when: 'megelőzés' },
    ],
    pages: [{ path: 'derekfajas', label: 'Derékfájás' }, { path: 'nyakfajas', label: 'Nyakfájás' }],
    media: { video: 'stabilizacio', image: 'video/stabilizacio.jpg', alt: 'Stabilizáló gyakorlat gumiszalaggal' },
  },
  {
    id: 'sferv',
    tag: 'Porckorongsérv',
    title: 'Az MRI-vizsgálat sérvet mutatott ki, és most felmerült a műtét lehetősége.',
    voice: 'Az MRI sérvet mutatott ki, és felmerült a műtét.',
    body: 'A sérv nem jelent automatikusan műtétet. Először McKenzie-vizsgálattal és konzervatív kezeléssel megnézzük, javul-e az állapota. Ha mégis műtétre kerül sor, felkészítjük rá, majd segítjük a műtét utáni rehabilitációját.',
    link: { path: 'modszerek#mckenzie', label: 'McKenzie-módszer' },
    methods: [
      { path: 'modszerek#mckenzie', label: 'McKenzie-módszer', when: 'konzervatív kezelés' },
      { path: 'modszerek#mutet-utani', label: 'Műtét előtti és utáni rehabilitáció', when: 'ha műtét lesz' },
    ],
    pages: [{ path: 'porckorongserv', label: 'Porckorongsérv' }, { path: 'isiasz', label: 'Isiász' }],
    media: { video: 'kezeles', image: 'video/kezeles.jpg', alt: 'Manuális kezelés fekvő páciensen' },
  },
  {
    id: 'gerincferdules',
    tag: 'Gerincferdülés',
    title: 'Gyermeknél vagy felnőttnél scoliosist, Scheuermann-betegséget állapítottak meg.',
    voice: 'Nálam vagy a gyermekemnél gerincferdülést állapítottak meg.',
    body: 'Háromdimenziós Schroth-gyakorlatokkal és légzéstechnikával dolgozunk a gerincgörbület és a bordapúp korrekcióján, otthon is végezhető programmal.',
    link: { path: 'modszerek#schroth', label: 'Schroth-terápia' },
    methods: [
      { path: 'modszerek#schroth', label: 'Schroth-terápia' },
      { path: 'modszerek#tartasjavitas', label: 'Tartásjavítás', when: 'kiegészítő' },
    ],
    media: { image: 'images/modszerek/schroth.png', alt: 'Schroth-terápia gyakorlat' },
  },
];
