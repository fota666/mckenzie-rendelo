// Condition landing pages (/derekfajas, /nyakfajas, /porckorongserv, /isiasz).
// Answer-first copy for patients and answer engines. Only general, established physiotherapy
// knowledge and the clinic's own facts; no outcome promises. Red flags follow common clinical
// guidance (urgent medical assessment first).

export interface Condition {
  slug: string;
  /** Loop in /video/rendelo shown next to the steps. */
  clip: { name: string; label: string };
  name: string;            // as patients search it
  h1: string;
  metaTitle: string;
  metaDescription: string;
  answer: string;          // first paragraph: the direct answer
  whenToCome: string[];
  redFlags: string[];
  approach: { title: string; text: string }[];
  methods: { path: string; label: string }[];
  timeline: string;
  faqs: { q: string; a: string }[];
  related: string[];       // other condition slugs
}

const commonRedFlags = [
  'vizelet- vagy székletürítési zavar, vagy a gát környékén zsibbadás',
  'gyorsan erősödő izomgyengeség a lábban vagy a karban',
  'láz, ismeretlen eredetű fogyás vagy korábbi daganatos betegség mellett jelentkező fájdalom',
  'baleset, esés után kezdődő erős fájdalom',
  'éjszaka és nyugalomban sem csillapodó, egyre erősödő fájdalom',
];

export const conditions: Condition[] = [
  {
    slug: 'derekfajas',
    clip: { name: 'derekfajas-hasonfekvo-mobilizalas', label: 'Hasonfekvő páciens derekának kezelése a rendelőben' },
    name: 'Derékfájás',
    h1: 'Derékfájás gyógytorna Budapesten, McKenzie-módszerrel',
    metaTitle: 'Derékfájás gyógytorna Budapest | McKenzie Gyógytorna Rendelő',
    metaDescription: 'Derékfájás és lumbágó kezelése McKenzie-módszerrel a V. és XI. kerületben. Mozgásvizsgálat, kezelés, otthoni gyakorlatsor. Beutaló nem kell, időpont 1-2 napon belül.',
    answer: 'Derékfájással beutaló nélkül jöhet hozzánk. Az első 55 perces alkalommal ismételt mozgásokkal és testhelyzetekkel megvizsgáljuk, hogyan változik a fájdalma, és ez alapján olyan gyakorlatsort kap, amelyet otthon egyedül is végezhet. A kezelés 14 000-15 000 Ft, időpont általában 1-2 napon belül, két budapesti rendelőben.',
    whenToCome: [
      'napok vagy hetek óta fáj a dereka, és nem javul magától',
      'a fájdalom bizonyos mozdulatokra, üléskor vagy hajláskor erősödik',
      'évek óta vissza-visszatér a derékfájás',
      'a fájdalom a farba vagy a combba is kisugárzik',
      'ülőmunka mellett estére merev és fájós a dereka',
    ],
    redFlags: commonRedFlags,
    approach: [
      { title: 'Vizsgálat', text: 'Megkérdezzük, mikor kezdődött a fájdalom, mitől rosszabb és mitől jobb. Utána ismételt előre- és hátrahajlással, oldalirányú mozgásokkal és tartott testhelyzetekkel figyeljük, hogyan változik a fájdalom helye és erőssége.' },
      { title: 'Gyakorlatok', text: 'A vizsgálat alapján kiválasztjuk azokat a mozgásokat, amelyek a panaszát kedvezően befolyásolják. Ezeket a rendelőben megtanulja, és otthon naponta többször végzi.' },
      { title: 'Önkezelés', text: 'A cél, hogy a következő fájdalmas időszakban már tudja, mit tegyen. Ehhez tartásról, ülésről és emelésről is adunk tanácsot, szükség esetén stabilizációs tréninggel kiegészítve.' },
    ],
    methods: [
      { path: 'modszerek#mckenzie', label: 'McKenzie-módszer' },
      { path: 'modszerek#stabilizacio', label: 'Stabilizációs tréning' },
      { path: 'modszerek#manualterapia', label: 'Manuálterápia' },
      { path: 'modszerek#tartasjavitas', label: 'Tartásjavítás' },
    ],
    timeline: 'A javulás üteme egyénenként eltér. Az első vizsgálat után a terapeuta elmondja, mire számíthat. Egy kezelési sor gyakran 4-6 alkalomból áll, és sokat számít, hogy az otthoni gyakorlatokat rendszeresen végzi-e.',
    faqs: [
      { q: 'Pihentessem a derekamat, vagy mozogjak?', a: 'A legtöbb nem specifikus derékfájásnál a teljes ágynyugalom nem javasolt, a megszokott tevékenységek óvatos folytatása általában jobb. Hogy pontosan milyen mozgás jó Önnek, azt az első vizsgálaton megnézzük.' },
      { q: 'Kell MRI a gyógytorna előtt?', a: 'Általában nem. Ha nincs a fenti figyelmeztető jelek közül egyik sem, a gyógytorna képalkotó vizsgálat nélkül is elkezdhető. Ha van korábbi lelete, hozza magával.' },
      { q: 'Mennyibe kerül a derékfájás kezelése?', a: 'Egy 50-55 perces egyéni kezelés 14 000 vagy 15 000 Ft, a terapeutától függően. Az 5 alkalmas bérlet 65 000 Ft. Egészségpénztárra számlát adunk.' },
    ],
    related: ['isiasz', 'porckorongserv', 'nyakfajas'],
  },
  {
    slug: 'nyakfajas',
    clip: { name: 'nyak-mckenzie-onkezeles', label: 'Ülve végzett nyaki mozgásvizsgálat és gyakorlat' },
    name: 'Nyakfájás',
    h1: 'Nyakfájás gyógytorna Budapesten, McKenzie-módszerrel',
    metaTitle: 'Nyakfájás gyógytorna Budapest | McKenzie Gyógytorna Rendelő',
    metaDescription: 'Nyakfájás, nyakból kiinduló fejfájás és karba sugárzó fájdalom kezelése McKenzie-módszerrel Budapesten. Beutaló nem kell, időpont 1-2 napon belül.',
    answer: 'Nyakfájással beutaló nélkül jöhet hozzánk. Az első 55 perces alkalommal megvizsgáljuk, hogyan reagál a nyaka ismételt mozgásokra és testhelyzetekre, és ehhez igazítva tanítunk otthon végezhető gyakorlatokat. A kezelés 14 000-15 000 Ft, időpont általában 1-2 napon belül.',
    whenToCome: [
      'merev, fájós a nyaka, nehezen fordítja a fejét',
      'a nyaki fájdalom a vállba, a lapockák közé vagy a karba sugárzik',
      'a nyakából induló fejfájása van',
      'képernyő előtti munka után estére fáj a nyaka',
      'visszatérő nyaki panaszai vannak',
    ],
    redFlags: [
      'baleset, ostorcsapás-sérülés vagy esés után kezdődő fájdalom',
      'szédülés, látászavar, beszéd- vagy nyelési nehézség',
      'gyorsan erősödő gyengeség vagy ügyetlenség a karban, kézben',
      'járásbizonytalanság vagy zsibbadás mindkét kézben',
      'láz, ismeretlen eredetű fogyás, éjszakai erős fájdalom',
    ],
    approach: [
      { title: 'Vizsgálat', text: 'Ismételt nyaki mozgásokkal (például az áll behúzásával, forgatással, oldalra döntéssel) figyeljük, hogyan változik a fájdalom és a kisugárzás.' },
      { title: 'Gyakorlatok', text: 'A kedvező mozgásirányra épülő, rövid gyakorlatokat tanítunk, amelyeket munka közben is el lehet végezni.' },
      { title: 'Tartás és munkahely', text: 'Megnézzük, hogyan ül, mekkora a képernyő távolsága és magassága, és egyszerű változtatásokat javaslunk.' },
    ],
    methods: [
      { path: 'modszerek#mckenzie', label: 'McKenzie-módszer' },
      { path: 'modszerek#manualterapia', label: 'Manuálterápia' },
      { path: 'modszerek#tartasjavitas', label: 'Tartásjavítás' },
    ],
    timeline: 'A javulás üteme egyénenként eltér, előre nem ígérünk alkalomszámot. Az első vizsgálat után a terapeuta elmondja, mire számíthat, és hány alkalmat javasol.',
    faqs: [
      { q: 'A nyakfájás okozhat fejfájást?', a: 'Igen, a fejfájás egy része a nyakból indul ki. Hogy az Ön fejfájása ilyen-e, azt a vizsgálat során próbáljuk kideríteni. Hirtelen, szokatlanul erős fejfájással viszont azonnal orvoshoz forduljon.' },
      { q: 'Mit tehetek otthon, amíg nincs időpontom?', a: 'Kerülje a hosszú, azonos testhelyzetet, gyakran tartson szünetet a képernyő előtt. Ha a fájdalom erősödik, a kar zsibbad vagy gyengül, ne várjon, kérjen orvosi vizsgálatot.' },
      { q: 'Mennyibe kerül a nyakfájás kezelése?', a: 'Egy 50-55 perces egyéni kezelés 14 000 vagy 15 000 Ft, a terapeutától függően. Az 5 alkalmas bérlet 65 000 Ft.' },
    ],
    related: ['derekfajas', 'porckorongserv', 'isiasz'],
  },
  {
    slug: 'porckorongserv',
    clip: { name: 'derek-nyak-ulve-gyakorlat', label: 'Ülve végzett derék- és nyakgyakorlatok a terapeuta mellett' },
    name: 'Porckorongsérv',
    h1: 'Porckorongsérv gyógytorna Budapesten, műtét előtt és után',
    metaTitle: 'Porckorongsérv gyógytorna Budapest | McKenzie Gyógytorna Rendelő',
    metaDescription: 'Porckorongsérv (gerincsérv) konzervatív kezelése McKenzie-módszerrel, műtét előtti felkészítés és műtét utáni rehabilitáció Budapesten. Beutaló nem kell.',
    answer: 'A porckorongsérv nem jelent automatikusan műtétet, sok esetben konzervatív kezeléssel is javul. Ha az orvosa nem lát sürgős műtéti okot, McKenzie-vizsgálattal és célzott gyakorlatokkal kezdjük a kezelést. Ha mégis műtét lesz, felkészítjük rá, és segítjük a műtét utáni rehabilitációt.',
    whenToCome: [
      'MRI-n porckorongsérvet vagy porckorong-előboltosulást írtak le',
      'a derékból vagy a nyakból a lábba vagy a karba sugárzik a fájdalom',
      'felmerült a műtét, de előbb szeretné a konzervatív kezelést kipróbálni',
      'műtét előtt áll, vagy nemrég műtötték',
    ],
    redFlags: commonRedFlags,
    approach: [
      { title: 'Vizsgálat', text: 'A leletek mellett mozgásvizsgálatot végzünk: figyeljük, hogy bizonyos mozgásokra a végtagba sugárzó fájdalom visszahúzódik-e a gerinc felé (centralizáció). Ez kedvező jel, és segít a gyakorlatok kiválasztásában.' },
      { title: 'Konzervatív kezelés', text: 'A kedvező mozgásirányra épülő gyakorlatok, testtartási tanácsok és fokozatos terhelés. A terapeuta minden alkalommal ellenőrzi, hogyan változnak a tünetek.' },
      { title: 'Műtét előtt és után', text: 'Ha műtétre kerül sor, a műtét előtti tornával felkészítjük az izmokat, utána pedig fokozatosan visszaállítjuk a mozgást és az erőt.' },
    ],
    methods: [
      { path: 'modszerek#mckenzie', label: 'McKenzie-módszer' },
      { path: 'modszerek#mutet-utani', label: 'Műtét előtti és utáni rehabilitáció' },
      { path: 'modszerek#stabilizacio', label: 'Stabilizációs tréning' },
    ],
    timeline: 'A javulás üteme a sérv helyétől, a tünetektől és az otthoni gyakorlástól is függ, ezért előre nem ígérünk alkalomszámot. A terapeuta minden alkalommal értékeli a változást, és ha a konzervatív kezelés nem hoz javulást, orvosi kontrollt javasol.',
    faqs: [
      { q: 'Kell-e műteni a porckorongsérvet?', a: 'Erről mindig az orvos dönt. Sok porckorongsérv műtét nélkül is javul, ezért ha nincs sürgős műtéti ok, érdemes konzervatív kezeléssel kezdeni.' },
      { q: 'Hozzam az MRI-leletet?', a: 'Igen, kérjük, hozza magával az MRI-leletet és a korábbi orvosi zárójelentéseket az első alkalomra.' },
      { q: 'Lehet gyógytornára járni a műtét után?', a: 'Igen, a műtét utáni rehabilitáció is a szakterületünk. Az orvosa által megadott időponttól kezdjük, fokozatos terheléssel.' },
    ],
    related: ['isiasz', 'derekfajas', 'nyakfajas'],
  },
  {
    slug: 'isiasz',
    clip: { name: 'csipo-mobilizalas-hanyatt', label: 'Hanyatt fekvő páciens csípőjének és lábának mozgatása' },
    name: 'Isiász',
    h1: 'Isiász gyógytorna Budapesten, McKenzie-módszerrel',
    metaTitle: 'Isiász gyógytorna Budapest | McKenzie Gyógytorna Rendelő',
    metaDescription: 'Isiász, lábba sugárzó derékfájás kezelése McKenzie-módszerrel Budapesten, a V. és XI. kerületben. Beutaló nem kell, időpont 1-2 napon belül.',
    answer: 'Isiásszal, vagyis a derékból a farba és a lábba sugárzó fájdalommal beutaló nélkül jöhet hozzánk. Az első 55 perces alkalommal megvizsgáljuk, hogyan változik a kisugárzó fájdalom különböző mozgásokra, és ehhez igazítjuk az otthoni gyakorlatokat. A kezelés 14 000-15 000 Ft.',
    whenToCome: [
      'a fájdalom a derékból a farba, a comb hátsó részébe vagy a lábszárba sugárzik',
      'a lábában zsibbadást vagy bizsergést érez',
      'üléskor vagy előrehajláskor erősödik a lábfájdalom',
      'az orvos isiászt vagy ülőideg-gyulladást állapított meg',
    ],
    redFlags: commonRedFlags,
    approach: [
      { title: 'Vizsgálat', text: 'Ismételt mozgásokkal figyeljük, hogy a lábba sugárzó fájdalom visszahúzódik-e a derék felé. Ha igen, ez segít megtalálni a kedvező mozgásirányt.' },
      { title: 'Gyakorlatok', text: 'Rövid, naponta többször végzendő gyakorlatokat tanítunk, és megbeszéljük, mely testhelyzeteket érdemes átmenetileg kerülni.' },
      { title: 'Követés', text: 'A következő alkalmakon ellenőrizzük, hogyan változott a kisugárzás, és ehhez igazítjuk a programot.' },
    ],
    methods: [
      { path: 'modszerek#mckenzie', label: 'McKenzie-módszer' },
      { path: 'modszerek#stabilizacio', label: 'Stabilizációs tréning' },
      { path: 'modszerek#manualterapia', label: 'Manuálterápia' },
    ],
    timeline: 'A javulás üteme egyénenként eltér. Ha a lábfájdalom a gyakorlatok ellenére erősödik, vagy gyengeség jelentkezik, orvosi kontrollt javaslunk.',
    faqs: [
      { q: 'Mi okozza az isiászt?', a: 'Az isiász tünet, nem önálló betegség: az ülőideg lefutása mentén jelentkező fájdalom. Gyakori oka a porckorong érintettsége, de más okok is lehetnek, ezért fontos a vizsgálat.' },
      { q: 'Jó-e, ha a fájdalom a lábból a derekamba húzódik vissza?', a: 'Általában igen, ezt centralizációnak hívjuk, és kedvező jelnek tartjuk. A vizsgálat során pont ezt figyeljük.' },
      { q: 'Mennyibe kerül az isiász kezelése?', a: 'Egy 50-55 perces egyéni kezelés 14 000 vagy 15 000 Ft, a terapeutától függően. Az 5 alkalmas bérlet 65 000 Ft.' },
    ],
    related: ['porckorongserv', 'derekfajas', 'nyakfajas'],
  },
];

export const conditionBySlug = Object.fromEntries(conditions.map((c) => [c.slug, c]));
