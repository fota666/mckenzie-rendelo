// Condition landing pages, one per entry (slug = URL).
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
    related: ['isiasz', 'porckorongserv', 'nyakfajas', 'ulomunka-tartashibak'],
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
    related: ['derekfajas', 'porckorongserv', 'vallfajas', 'ulomunka-tartashibak'],
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
    related: ['isiasz', 'derekfajas', 'muteti-rehabilitacio'],
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

  {
    slug: 'gerincferdules',
    clip: { name: 'labdan-ules-szalaghuzas', label: 'Ülő gyakorlat labdán, szalaggal, a bordásfal mellett' },
    name: 'Gerincferdülés',
    h1: 'Gerincferdülés (scoliosis) gyógytorna Budapesten, Schroth-terápiával',
    metaTitle: 'Gerincferdülés gyógytorna Budapest | Schroth-terápia',
    metaDescription: 'Gerincferdülés (scoliosis) és Scheuermann-betegség kezelése Schroth-terápiával gyermekeknek és felnőtteknek Budapesten. Beutaló nem kell, időpont 1-2 napon belül.',
    answer: 'Gerincferdüléssel gyermeket és felnőttet is várunk, beutaló nélkül. Háromdimenziós Schroth-gyakorlatokkal és légzéstechnikával dolgozunk a gerincgörbület és a bordapúp korrekcióján, otthon is végezhető programmal. A gyógytorna az orvosi kontroll mellett történik, nem helyettesíti azt. Egy alkalom 14 000-15 000 Ft, időpont általában 1-2 napon belül.',
    whenToCome: [
      'Önnél vagy gyermekénél gerincferdülést (scoliosist) vagy Scheuermann-betegséget állapítottak meg',
      'az orvos gyógytornát javasolt a görbület mellé',
      'felnőttként a gerincferdülés miatt fáj a háta vagy a dereka',
      'tartáshibája van, és célzott gyakorlatsort szeretne',
    ],
    redFlags: [
      'gyermeknél a görbület gyorsan romlik, vagy a törzs alakja feltűnően változott a legutóbbi kontroll óta',
      'zsibbadás, gyengeség vagy járászavar jelentkezik',
      'éjszaka is fennálló, egyre erősödő hátfájdalom',
      'még nincs orvosi diagnózis a görbületről: ilyenkor először ortopédiai vagy gerincgyógyászati vizsgálat kell',
    ],
    approach: [
      { title: 'Vizsgálat', text: 'Megnézzük a törzs és a gerinc tartását és mozgását, és átnézzük a korábbi leleteket, például a röntgent. Az orvosi javaslatot és kontrollt figyelembe vesszük.' },
      { title: 'Schroth-gyakorlatok', text: 'Aszimmetrikus testhelyzetekkel és háromdimenziós légzéssel aktiváljuk a törzs izmait, a görbület és a csigolyák rotációjából eredő bordapúp korrekciója érdekében.' },
      { title: 'Otthoni program', text: 'A gyakorlatokat a mindennapi mozgásba illesztve otthon is végezheti. Gyermeknél a szülővel is átbeszéljük a feladatokat.' },
    ],
    methods: [
      { path: 'modszerek#schroth', label: 'Schroth-terápia' },
      { path: 'modszerek#tartasjavitas', label: 'Tartásjavítás' },
    ],
    timeline: 'A gerincferdülés gyógytornája hosszabb folyamat, az ütemet az orvosi kontroll és a gyakorlatok rendszeressége határozza meg. Az első vizsgálat után a terapeuta elmondja, milyen gyakorisággal érdemes jönni.',
    faqs: [
      { q: 'Mi az a Schroth-terápia?', a: 'A Katharina Schroth által kifejlesztett háromdimenziós gerincferdülés-terápia (3DST). Aszimmetrikus testhelyzetekkel és háromdimenziós légzéssel a görbület mellett a csigolyák rotációjából eredő bordapúpot is célozza.' },
      { q: 'Gyermeknek is jó a Schroth-terápia?', a: 'Gyermekeknél és felnőtteknél is alkalmazzuk. Időpontkéréskor jelezze a gyermek korát és a diagnózist, és megfelelő terapeutát ajánlunk.' },
      { q: 'Kell hozzá orvosi diagnózis vagy röntgen?', a: 'Beutaló nem kell. Ha van korábbi röntgen- vagy orvosi lelet a görbületről, hozza magával, mert segíti a tervezést. Diagnózis nélkül először ortopédiai vagy gerincgyógyászati vizsgálatot javaslunk.' },
    ],
    related: ['ulomunka-tartashibak', 'derekfajas', 'porckorongserv'],
  },
  {
    slug: 'vallfajas',
    clip: { name: 'vall-manualis-kezeles', label: 'Váll manuális kezelése a rendelőben' },
    name: 'Vállfájás',
    h1: 'Vállfájás gyógytorna Budapesten, manuálterápiával és célzott gyakorlatokkal',
    metaTitle: 'Vállfájás gyógytorna Budapest | McKenzie Gyógytorna Rendelő',
    metaDescription: 'Vállfájdalom, beszűkült vállmozgás és fagyott váll kezelése manuálterápiával és gyakorlatokkal Budapesten. Beutaló nem kell, időpont 1-2 napon belül.',
    answer: 'Vállpanasszal beutaló nélkül jöhet hozzánk. A vállat és a nyaki gerincet is megvizsgáljuk, mert a vállfájdalom a nyakból is eredhet, majd manuális technikákkal és célzott gyakorlatokkal kezeljük. Egy alkalom 14 000-15 000 Ft, időpont általában 1-2 napon belül.',
    whenToCome: [
      'fáj a karemelés, a hátra- vagy a fejre nyúlás',
      'a fájó vállon fekve nem tud aludni',
      'a váll mozgása beszűkült, vagy fagyott vállat gyanítanak',
      'sérülés vagy műtét után szeretné visszanyerni a váll mozgását',
      'a nyaktól a vállig és a karig húzódik a fájdalom',
    ],
    redFlags: [
      'baleset vagy esés után hirtelen kezdődő erős fájdalom, és a kar nem mozdítható',
      'mellkasi szorító fájdalom, légszomj, hidegverejték, vagy a bal karba és az állkapocsba sugárzó fájdalom: ilyenkor hívjon mentőt',
      'láz mellett meleg, vörös, duzzadt ízület',
      'a karban gyorsan erősödő gyengeség vagy zsibbadás',
      'ismeretlen eredetű fogyás vagy korábbi daganatos betegség mellett jelentkező fájdalom',
    ],
    approach: [
      { title: 'Vizsgálat', text: 'Megnézzük a váll és a nyaki gerinc mozgását, és ismételt mozgásokkal ellenőrizzük, hogy a nyak befolyásolja-e a panaszt.' },
      { title: 'Kezelés', text: 'Manuális technikákkal, például Mulligan-mobilizációval javítjuk az ízület mozgását, és lazítjuk a feszes izmokat.' },
      { title: 'Gyakorlatok', text: 'Mozgásterjedelmet növelő és gumiszalagos erősítő gyakorlatokat kap, amelyeket otthon is végezhet.' },
    ],
    methods: [
      { path: 'modszerek#manualterapia', label: 'Manuálterápia' },
      { path: 'modszerek#mckenzie', label: 'McKenzie-módszer' },
      { path: 'modszerek#izuleti-fajdalmak', label: 'Ízületi fájdalmak gyógytornája' },
    ],
    timeline: 'A javulás üteme egyénenként eltér, és függ attól, mióta áll fenn a panasz. Az első vizsgálat után a terapeuta elmondja, mire számíthat, és az otthoni gyakorlatok rendszeressége sokat számít.',
    faqs: [
      { q: 'Mi a fagyott váll?', a: 'A váll mozgásterjedelmének fájdalmas, fokozatos beszűkülése. A diagnózist orvos állítja fel, a gyógytorna a mozgásterjedelem és a funkció visszaállítását segíti.' },
      { q: 'A nyakból is jöhet a vállfájás?', a: 'Igen, a nyaki gerinc panaszai a vállba és a karba is sugározhatnak, ezért a vizsgálat a nyakat is magában foglalja.' },
      { q: 'Kell ultrahang vagy MRI a gyógytornához?', a: 'A gyógytorna megkezdéséhez beutaló és képalkotó vizsgálat nem szükséges. Ha van korábbi lelete, hozza magával. Ha a vizsgálat alapján szükségesnek látjuk, orvosi kivizsgálást javaslunk.' },
    ],
    related: ['nyakfajas', 'ulomunka-tartashibak', 'csipofajdalom'],
  },
  {
    slug: 'terdfajdalom',
    clip: { name: 'terd-csipo-vizsgalat', label: 'A terapeuta a térd és a csípő mozgását vizsgálja' },
    name: 'Térdfájdalom',
    h1: 'Térdfájdalom gyógytorna Budapesten',
    metaTitle: 'Térdfájdalom gyógytorna Budapest | McKenzie Gyógytorna Rendelő',
    metaDescription: 'Térdfájdalom, sportsérülés és térdműtét utáni mozgásproblémák kezelése gyógytornával Budapesten. Beutaló nem kell, időpont 1-2 napon belül.',
    answer: 'Térdfájdalommal beutaló nélkül jöhet hozzánk. A térd mellett a csípőt és a derekat is megvizsgáljuk, mert a panasz forrása ott is lehet, majd manuális technikákkal és erősítő gyakorlatokkal kezeljük. Egy alkalom 14 000-15 000 Ft, időpont általában 1-2 napon belül.',
    whenToCome: [
      'lépcsőzéskor, felálláskor vagy guggoláskor fáj a térde',
      'sportolás után jelentkezik a térdfájdalom',
      'térdsérülés vagy térdműtét után szeretné visszanyerni az erőt és a mozgást',
      'merev vagy gyenge a térde',
      'nem tudja, hogy a térd, a csípő vagy a derék okozza-e a panaszt',
    ],
    redFlags: [
      'baleset után a térd hirtelen kidagad, és nem tud ráállni a lábára',
      'a térd bezáródik, nem hajlítható vagy nem nyújtható',
      'láz mellett meleg, vörös, duzzadt a térd',
      'a vádli megduzzad és fáj, különösen hosszú ülés vagy műtét után',
      'éjszaka és nyugalomban sem csillapodó, egyre erősödő fájdalom',
    ],
    approach: [
      { title: 'Vizsgálat', text: 'Megnézzük a térd, a csípő és a derék mozgását és erejét, mert a térdfájdalom hátterében ezek is állhatnak.' },
      { title: 'Kezelés', text: 'Manuális technikákkal és mozgatással javítjuk az ízület mozgását, és csökkentjük a fájdalmat.' },
      { title: 'Erősítés', text: 'Egyéni gyakorlatokkal, például gumiszalaggal erősítjük a combot és a csípő körüli izmokat, hogy a térd terhelése csökkenjen.' },
    ],
    methods: [
      { path: 'modszerek#izuleti-fajdalmak', label: 'Ízületi fájdalmak gyógytornája' },
      { path: 'modszerek#manualterapia', label: 'Manuálterápia' },
      { path: 'modszerek#mutet-utani', label: 'Műtét utáni rehabilitáció' },
    ],
    timeline: 'A javulás üteme egyénenként eltér. Az első vizsgálat után a terapeuta elmondja, mire számíthat, és az otthoni gyakorlatok rendszeressége sokat számít.',
    faqs: [
      { q: 'Honnan tudható, hogy a térd vagy a csípő okozza a panaszt?', a: 'A vizsgálat során a csípőt és a derekat is átnézzük, és ebből derül ki, hol van a panasz forrása.' },
      { q: 'Sportolás közben fáj a térdem, edzhetek?', a: 'Ez a vizsgálattól függ. Megnézzük, melyik terhelés váltja ki a panaszt, és megbeszéljük, min érdemes módosítani, amíg a térd erősödik.' },
      { q: 'Térdműtét után is jöhetek?', a: 'Igen, a műtét utáni rehabilitációt is végezzük. A műtétet végző orvos előírásait mindig figyelembe vesszük.' },
    ],
    related: ['csipofajdalom', 'muteti-rehabilitacio', 'derekfajas'],
  },
  {
    slug: 'csipofajdalom',
    clip: { name: 'csipo-mobilizalas-ovvel', label: 'Csípő mobilizálása övvel a rendelőben' },
    name: 'Csípőfájdalom',
    h1: 'Csípőfájdalom gyógytorna Budapesten',
    metaTitle: 'Csípőfájdalom gyógytorna Budapest | McKenzie Gyógytorna Rendelő',
    metaDescription: 'Csípőfájdalom, merev csípő és csípőműtét előtti vagy utáni mozgásproblémák kezelése gyógytornával Budapesten. Beutaló nem kell, időpont 1-2 napon belül.',
    answer: 'Csípőfájdalommal beutaló nélkül jöhet hozzánk. A csípő mellett a derekat is megvizsgáljuk, mert a fájdalom a derékból is sugározhat, majd manuális technikákkal és erősítő gyakorlatokkal kezeljük. Egy alkalom 14 000-15 000 Ft, időpont általában 1-2 napon belül.',
    whenToCome: [
      'járáskor vagy ülésből felálláskor fáj a csípője',
      'a fájdalom a farba, a lágyékba vagy a combba húzódik',
      'csípőműtét előtt fel szeretne készülni, vagy műtét után rehabilitálna',
      'hosszú ülés vagy sport után merev a csípője',
      'tisztázni szeretné, hogy a derék vagy a csípő okozza-e a panaszt',
    ],
    redFlags: [
      'esés után nem tud ráállni a lábára, vagy a láb rövidebbnek vagy elfordultnak látszik',
      'láz mellett meleg, fájdalmas a csípő',
      'ismeretlen eredetű fogyás vagy éjszakai nyugalmi fájdalom',
      'vizelet- vagy székletürítési zavar, gáttáji zsibbadás',
      'a vádli megduzzad és fáj műtét után',
    ],
    approach: [
      { title: 'Vizsgálat', text: 'Megnézzük a csípő, a derék és az ágyéki gerinc mozgását, mert a fájdalom forrása többféle lehet, és a derékból sugárzó fájdalom is érezhető a csípőtájon.' },
      { title: 'Kezelés', text: 'Manuális technikákkal, mozgatással és övvel segített mobilizációval javítjuk a csípő mozgását.' },
      { title: 'Erősítés', text: 'Gumiszalagos és stabilizáló gyakorlatokkal erősítjük a csípő körüli izmokat, amelyeket otthon is végezhet.' },
    ],
    methods: [
      { path: 'modszerek#izuleti-fajdalmak', label: 'Ízületi fájdalmak gyógytornája' },
      { path: 'modszerek#manualterapia', label: 'Manuálterápia' },
      { path: 'modszerek#mutet-utani', label: 'Műtét utáni rehabilitáció' },
    ],
    timeline: 'A javulás üteme egyénenként eltér. Az első vizsgálat után a terapeuta elmondja, mire számíthat, és az otthoni gyakorlatok rendszeressége sokat számít.',
    faqs: [
      { q: 'A derékból is jöhet csípőfájdalom?', a: 'Igen, a derék panaszai a farba, a csípőre és a combba is sugározhatnak, ezért a vizsgálat a derekat is magában foglalja.' },
      { q: 'Csípőműtét előtt is érdemes jönni?', a: 'Igen, a műtét előtti terápia felkészíti az ízületet és az izmokat. Műtét után a rehabilitációt is végezzük.' },
      { q: 'Kell röntgen vagy MRI a gyógytornához?', a: 'Beutaló és képalkotó vizsgálat nem szükséges a kezdéshez. Ha van korábbi lelete, hozza magával.' },
    ],
    related: ['terdfajdalom', 'muteti-rehabilitacio', 'derekfajas'],
  },
  {
    slug: 'muteti-rehabilitacio',
    clip: { name: 'gluteus-gumiszalag-terd', label: 'Gumiszalagos erősítő gyakorlat a terapeuta mellett' },
    name: 'Műtét előtti és utáni rehabilitáció',
    h1: 'Műtét előtti és utáni rehabilitáció Budapesten',
    metaTitle: 'Műtét utáni rehabilitáció Budapest | McKenzie Gyógytorna Rendelő',
    metaDescription: 'Gerinc-, csípő- és térdműtét előtti felkészítés és műtét utáni gyógytorna Budapesten. A kezelést a műtétet végző orvos előírásaihoz igazítjuk. Beutaló nem kell.',
    answer: 'Gerinc-, csípő- vagy térdműtét előtt felkészítjük, utána pedig a mozgásképesség és az erő visszaállításában segítünk. A kezelést a műtétet végző orvos előírásaihoz igazítjuk, ezért hozza magával a zárójelentést és a rehabilitációs javaslatot. Egy alkalom 14 000-15 000 Ft, beutaló nem kell.',
    whenToCome: [
      'műtétre vár, és fel szeretne készülni',
      'gerinc-, csípő- vagy térdműtéten esett át',
      'csonttörés vagy szalagszakadás után indul a rehabilitációja',
      'sportsérülés után szeretne visszatérni az eredeti terheléshez',
      'a műtét után a mozgása vagy az ereje nem tér vissza',
    ],
    redFlags: [
      'láz mellett a műtéti seb vörös, fájdalmas, duzzadt vagy váladékozik',
      'a vádli megduzzad, fáj vagy meleg, esetleg légszomj jelentkezik: ez azonnali orvosi ellátást igényel',
      'gerincműtét után vizelet- vagy székletürítési zavar, gáttáji zsibbadás',
      'hirtelen jelentkező erős fájdalom, vagy a láb vagy a kar gyengül',
      'a műtétet végző orvos még nem engedélyezte a mozgásterápiát, ilyenkor először az ő jóváhagyását kérje',
    ],
    approach: [
      { title: 'Műtét előtt', text: 'Felkészítjük az ízületeket és az izmokat a műtétre, hogy a műtét utáni időszakot jobb állapotból kezdje.' },
      { title: 'Műtét után', text: 'Visszaállítjuk az erőt és a mozgásképességet, és megelőzzük a szövődményeket, az orvosi előírásokhoz igazodva.' },
      { title: 'Visszatérés', text: 'Fokozatosan emeljük a terhelést, ha a cél a sport, egészen a sportolói szintig.' },
    ],
    methods: [
      { path: 'modszerek#mutet-utani', label: 'Műtét előtti és utáni rehabilitáció' },
      { path: 'modszerek#stabilizacio', label: 'Stabilizációs tréning' },
      { path: 'modszerek#izuleti-fajdalmak', label: 'Ízületi fájdalmak gyógytornája' },
    ],
    timeline: 'A rehabilitáció hossza a műtéttől és az orvosi előírásoktól függ. Az első vizsgálat után a terapeuta elmondja, milyen ütemben érdemes jönni.',
    faqs: [
      { q: 'Mikor kezdhetem a rehabilitációt a műtét után?', a: 'Ezt a műtétet végző orvos határozza meg. A zárójelentésben vagy a kontrollon kapott előírásokat hozza magával, és ahhoz igazítjuk a kezelést.' },
      { q: 'Műtét előtt is érdemes jönni?', a: 'Igen, a műtét előtti terápia felkészíti az ízületeket és az izmokat.' },
      { q: 'Gerincműtét után is vállalnak rehabilitációt?', a: 'Igen, gerinc-, csípő- és térdműtét után is. Porckorongsérv esetén a konzervatív kezelésről a porckorongsérv oldalunkon írunk.' },
    ],
    related: ['porckorongserv', 'terdfajdalom', 'csipofajdalom'],
  },
  {
    slug: 'ulomunka-tartashibak',
    clip: { name: 'ulomunka-tartaskorrekcio', label: 'Tartáskorrekció íróasztali munka közben' },
    name: 'Ülőmunka okozta panaszok',
    h1: 'Ülőmunka okozta nyak-, váll- és derékfájás kezelése Budapesten',
    metaTitle: 'Ülőmunka okozta fájdalom, tartásjavítás Budapest | McKenzie Gyógytorna Rendelő',
    metaDescription: 'Íróasztali munka okozta nyak-, váll- és derékfájás kezelése, tartásjavítás és ergonómiai tanácsok Budapesten. Beutaló nem kell, időpont 1-2 napon belül.',
    answer: 'Íróasztali munkából eredő nyak-, váll- és derékpanaszokkal beutaló nélkül jöhet hozzánk. Megnézzük, mely testhelyzetek váltják ki a fájdalmat, és tartásjavító gyakorlatokat, ergonómiai tanácsokat adunk, amelyeket a munkahelyen is végezhet. Egy alkalom 14 000-15 000 Ft, időpont általában 1-2 napon belül.',
    whenToCome: [
      'a nap végére feszes a nyaka és a válla',
      'estére fáj vagy merev a dereka',
      'laptop- vagy telefonhasználat közben előrebillen a feje, és fáj a nyaka',
      'a fájdalom munka közben erősödik, pihenőnapon enyhül',
      'nyakból kiinduló fejfájása van',
    ],
    redFlags: commonRedFlags,
    approach: [
      { title: 'Vizsgálat', text: 'Megnézzük, mely testhelyzetek és mozgások váltják ki vagy enyhítik a fájdalmat, és hogyan ül és dolgozik.' },
      { title: 'Gyakorlatok', text: 'Rövid, több helyen elvégezhető gyakorlatokat kap, amelyeket a munkahelyen is végezhet.' },
      { title: 'Ergonómia', text: 'Tanácsot adunk az asztal, a szék és a képernyő beállításához és a munkahelyi testhelyzetekhez.' },
    ],
    methods: [
      { path: 'modszerek#tartasjavitas', label: 'Tartásjavítás' },
      { path: 'modszerek#mckenzie', label: 'McKenzie-módszer' },
      { path: 'modszerek#stabilizacio', label: 'Stabilizációs tréning' },
    ],
    timeline: 'A javulás üteme egyénenként eltér. Az első vizsgálat után a terapeuta elmondja, mire számíthat, és az otthoni és munkahelyi gyakorlatok rendszeressége sokat számít.',
    faqs: [
      { q: 'Mit tehetek a munkahelyen a fájdalom ellen?', a: 'Rövid, rendszeresen ismételt mozgásokat és testhelyzetváltást, amelyeket a vizsgálat után egyénre szabunk. Hogy melyik mozgás jó Önnek, azt az első alkalommal megtanítjuk.' },
      { q: 'Kell beutaló vagy lelet?', a: 'Nem kell. Ha van korábbi MRI- vagy röntgenlelete, hozza magával.' },
      { q: 'Gyermeknek is van tartásjavítás?', a: 'Igen, gyermekkori tartáshibák esetén is. Időpontkéréskor jelezze a gyermek korát, és megfelelő terapeutát ajánlunk.' },
    ],
    related: ['nyakfajas', 'derekfajas', 'vallfajas'],
  },
];

export const conditionBySlug = Object.fromEntries(conditions.map((c) => [c.slug, c]));
