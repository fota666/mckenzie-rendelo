// Public Google reviews, quoted word for word, grouped by the complaint they mention.
// Only reviews that name the complaint or the treatment. Cut-off reviews are quoted up to the last full sentence, marked with an ellipsis.
// Names are shortened to surname plus initial. Pages without an entry simply show no review block.
export interface ConditionReview { text: string; name: string; place: 'belvaros' | 'buda'; lang?: 'en' }

export const conditionReviews: Record<string, ConditionReview[]> = {
  derekfajas: [
    { text: 'A mckenzie gerinctorna mesterei. Évek óta lumbagós vagyok, amint kiújul mindig elmegyek a Bartók Béla úti rendelőbe egy kis utókezelésre. Szakszerű és kedves gyógytornászok, csak ajánlani tudom.', name: 'Bölcső G.', place: 'belvaros' },
  ],
  nyakfajas: [
    { text: 'Vágó Eszter kiváló munkát végzett a fájó nyakammal. Csak ajánlani tudom!', name: 'Buza Zs.', place: 'belvaros' },
    { text: 'Profi, kedves, jó ár/érték arányú szolgáltatás. Nyaki sérv miatt kerestem fel. …', name: 'Kulifay B.', place: 'buda' },
  ],
  porckorongserv: [
    { text: 'Porckorongsérvvel fordultam a rendelőhöz. A bejelentkezés egyszerűen és gyorsan ment. A rendelő tiszta, a gyógytornász pedig időben fogadott. Már pár alkalom után nagy javulást érzek. Köszönöm a segítséget!', name: 'Nyerges B.', place: 'buda' },
  ],
  gerincferdules: [
    { text: '"Klasszikus", ülőmunkából és gyermekkori gerincferdülésből adódó problémák miatt kezdtem kezelésre járni és már az első alkalom után érezhető volt a különbség. …', name: 'Kalocsai T.', place: 'buda' },
  ],
  vallfajas: [
    { text: 'Professzionálisan felszerelt rendelő, Noémi szakmai tudása, hozzáértése nagyban segítette a vállsérülésből felépülésemet. Mindenkinek ajánlani tudom a helyet, a módszert-Mckenzie és Noémit ! Köszönöm', name: 'Almási J.', place: 'belvaros' },
    { text: 'Vállproblémával fordultam a rendelőhöz, telefonon azonnal gyors segítséget kaptam, Vágó Eszter gyógytornászhoz már másnapra kaptam is időpontot. …', name: 'Szalai K.', place: 'belvaros' },
  ],
  terdfajdalom: [
    { text: 'Elülső keresztszalag szakadás után kerestem fel őket. Nagyon kedvesek, segítőkészek és értenek a munkájukhoz. Rövid időn belül (műtét nélkül) ismét teljes mozgásra képes voltam, hála nekik. Ezúton is köszönöm szépen nekik a segítséget. Bátran ajánlom!', name: 'Borkó J.', place: 'buda' },
    { text: "I had a knee pain for years. Zsuzsa's expertise helped me to fix my movements. I'm very satisfied with the place.", name: 'Bombolya L.', place: 'belvaros', lang: 'en' },
  ],
  'muteti-rehabilitacio': [
    { text: 'Akut probléma kezelésére, vagy megelőző terápiára is kiváló ez a rendelő. Kellemes, jól felszerelt környezetben profi, figyelmes gyógytornász segítette a műtét utáni rehabilitációmat, azóta pedig a prevenciós tornámat. A családom is ide jár, ha panasza van.', name: 'Pados G.', place: 'buda' },
    { text: 'A műtétem után jártam ide és nagyon elégedett voltam. Sajnos azonban egyéb gond is adódott és újra felkerestem őket és egyáltalán nem bántam meg! Éva nagyon kedves, segítőkész, empatikus. Kaptam otthonra is feladatot bőven. Ajánlom mindenkinek!', name: 'gkrizo', place: 'buda' },
  ],
  'ulomunka-tartashibak': [
    { text: '"Klasszikus", ülőmunkából és gyermekkori gerincferdülésből adódó problémák miatt kezdtem kezelésre járni és már az első alkalom után érezhető volt a különbség. …', name: 'Kalocsai T.', place: 'buda' },
  ],
};
