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
  media: { video?: string; image: string; alt: string };
}

export const situations: Situation[] = [
  {
    id: 'most-faj',
    tag: 'Most fáj',
    title: 'Napok óta fáj a dereka vagy a nyaka, és nem múlik.',
    voice: 'Napok óta fáj a derekam vagy a nyakam, és nem múlik.',
    body: 'Az első alkalommal ismételt mozgások segítségével kiderítjük, melyik irányú mozgás csökkenti a fájdalmat. Már az első alkalom után hazavisz egy gyakorlatot, amelyet otthon is végezhet.',
    link: { path: 'modszerek#mckenzie', label: 'McKenzie-módszer' },
    media: { video: 'vizsgalat', image: 'video/vizsgalat.jpg', alt: 'Gyógytornász a hát mozgását vizsgálja' },
  },
  {
    id: 'visszater',
    tag: 'Évek óta visszatér',
    title: 'A fájdalom újra és újra előjön, a gyógyszer csak tompítja.',
    voice: 'A fájdalom újra és újra előjön, a gyógyszer csak tompítja.',
    body: 'Megkeressük, mi váltja ki a visszaesést, és megtanítjuk, hogyan kezelje a következő rohamot maga. Ehhez stabilizációs tréninget és tartásjavítást kapcsolunk.',
    link: { path: 'modszerek#stabilizacio', label: 'Stabilizációs tréning' },
    media: { video: 'stabilizacio', image: 'video/stabilizacio.jpg', alt: 'Stabilizáló gyakorlat gumiszalaggal' },
  },
  {
    id: 'sferv',
    tag: 'Porckorongsérv',
    title: 'Az MRI-vizsgálat sérvet mutatott ki, és most felmerült a műtét lehetősége.',
    voice: 'Az MRI sérvet mutatott ki, és felmerült a műtét.',
    body: 'A sérv nem jelent automatikusan műtétet. Megnézzük, javul-e az állapota konzervatív kezelés hatására, és ha műtétre kerül sor, felkészítjük rá, majd segítjük a műtét utáni rehabilitációját.',
    link: { path: 'modszerek#mutet-utani', label: 'Műtét előtti és utáni rehabilitáció' },
    media: { video: 'kezeles', image: 'video/kezeles.jpg', alt: 'Manuális kezelés fekvő páciensen' },
  },
  {
    id: 'gerincferdules',
    tag: 'Gerincferdülés',
    title: 'Gyermeknél vagy felnőttnél scoliosist, Scheuermann-betegséget állapítottak meg.',
    voice: 'Nálam vagy a gyermekemnél gerincferdülést állapítottak meg.',
    body: 'Háromdimenziós Schroth-gyakorlatokkal és légzéstechnikával dolgozunk a gerincgörbület és a bordapúp korrekcióján, otthon is végezhető programmal.',
    link: { path: 'modszerek#schroth', label: 'Schroth-terápia' },
    media: { image: 'images/modszerek/schroth.png', alt: 'Schroth-terápia gyakorlat' },
  },
];
