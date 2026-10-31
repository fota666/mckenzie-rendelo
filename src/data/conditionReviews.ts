// Public Google reviews, quoted word for word, grouped by the complaint they mention.
// Only reviews that name the complaint or the treatment. Cut-off reviews are quoted up to a full sentence, marked with an ellipsis.
// Names are shortened to surname plus initial. Pages without an entry simply show no review block.
export interface ConditionReview { text: string; name: string; place: 'belvaros' | 'buda'; lang?: 'en' }
// `place` records which Google profile the review comes from (for our own checking, not shown).

export const conditionReviews: Record<string, ConditionReview[]> = {
  derekfajas: [
    { text: 'Derékfájdalommal fordultam a rendelőhöz egy kisebb sérülés után, ahol Vágó Esztert ajánlották nekem. Összesen három alkalommal jártam nála, és végig nagyon …', name: 'Rák Sz.', place: 'belvaros' },
    { text: 'Erős gerincfájdalmaim voltak, amikor először felkerestem a rendelőt. Heti rendszerességgel járok a gyógytornára, aminek köszönhetően a fájdalmaim megszűntek. …', name: 'Dunai A.', place: 'buda' },
    { text: 'A mckenzie gerinctorna mesterei. Évek óta lumbagós vagyok, amint kiújul mindig elmegyek a Bartók Béla úti rendelőbe egy kis utókezelésre. Szakszerű és kedves gyógytornászok, csak ajánlani tudom.', name: 'Bölcső G.', place: 'belvaros' },
  ],
  nyakfajas: [
    { text: 'Vágó Eszter kiváló munkát végzett a fájó nyakammal. Csak ajánlani tudom!', name: 'Buza Zs.', place: 'belvaros' },
    { text: 'Profi, kedves, jó ár/érték arányú szolgáltatás. Nyaki sérv miatt kerestem fel. …', name: 'Kulifay B.', place: 'buda' },
    { text: 'Csak ajánlani tudom a rendelőt, nagyon kedvesek a gyógytornászok, a hozzáértésük megkérdőjelezhetetlen. Én nyaki gerincsérvvel kerestem fel őket, és nagyon …', name: 'Luif L.', place: 'belvaros' },
    { text: 'Több problémával kerestem fel a rendelőt (nyak, hát, váll, derékfájdalom) és már az első néhány alkalom után érezhető volt a javulás. …', name: 'Téglás Gy.', place: 'belvaros' },
  ],
  porckorongserv: [
    { text: 'Porckorongsérvvel fordultam a rendelőhöz. A bejelentkezés egyszerűen és gyorsan ment. A rendelő tiszta, a gyógytornász pedig időben fogadott. Már pár alkalom után nagy javulást érzek. Köszönöm a segítséget!', name: 'Nyerges B.', place: 'buda' },
    { text: 'Lumbális gerincsérv miatt kezdtem el Szabó Évához gyógytornára járni. Éva figyelmes, jó terapeuta, az alkalmazott módszer hatékony. Több mint egy éve járok …', name: 'Boros Á.', place: 'buda' },
    { text: 'Nekem első alkalommal többszörös gerincsérvemnél segítettek, már olyan állapotban voltam hogy időpontom volt a sebészetre, gerincműtétre. Szerencsére még időben …', name: 'Jánosi I.', place: 'belvaros' },
  ],
  isiasz: [
    { text: 'Előszőr 15 évvel ezelőtt jártam a rendelőbe. Gerincsérvem miatt a jobb lábam szinte érzéketlenné vàlt . Akkor a nagy szakértelemmel rendelkező gyógytornász …', name: 'Józsefné K.', place: 'belvaros' },
    { text: '2021-ben a Covid oltás után neurológiai problémáim alakuktak ki pl.végtagok zsibbadása, ill. egyéb gerinc pananaszaim is voltak, ezért kértem gyógytornász …', name: 'Cruden E.', place: 'buda' },
    { text: 'Gerincsérv után kerültem a gyógytornára. Az első találkozáson konkrétan nem tudtam állva maradni …', name: 'Rusznák A.', place: 'belvaros' },
    { text: '5-ös csigolya elmozdulás 4-es csigolya kezdődő sérv. Semmelweis idegsebészeten műtétet javasoltak. Heti 1 alkalommal járok a belvárosba ,persze mindennap otthon …', name: 'Mátsik Z.', place: 'belvaros' },
  ],
  gerincferdules: [
    { text: '"Klasszikus", ülőmunkából és gyermekkori gerincferdülésből adódó problémák miatt kezdtem kezelésre járni és már az első alkalom után érezhető volt a különbség. …', name: 'Kalocsai T.', place: 'buda' },
    { text: 'Eszterhez egy évtizedes gerincfájdalom miatt jártam. Nagy körültekintéssel segített megtalálni a forrásokat, és olyan gyakorlatokkal és tanácsokkal látott el, amiket a mai napig használok, és működnek. Szívből ajánlom!', name: 'Kele Zs.', place: 'belvaros' },
    { text: 'Vágó Eszternél volt a lányom. Alapos, jó szakember és nagyon kedves.', name: 'Füzesi K.', place: 'belvaros' },
    { text: 'Nagyon felkészült és tapasztalt szakemberek, nyugodt környezet jellemzi. A kislányunk Ágihoz jár, nyugodt szívvel ajánljuk és köszönjük folyamatos segítséget!', name: 'Guzmics K.', place: 'buda' },
  ],
  vallfajas: [
    { text: 'Professzionálisan felszerelt rendelő, Noémi szakmai tudása, hozzáértése nagyban segítette a vállsérülésből felépülésemet. Mindenkinek ajánlani tudom a helyet, a módszert-Mckenzie és Noémit ! Köszönöm', name: 'Almási J.', place: 'belvaros' },
    { text: 'Vállproblémával fordultam a rendelőhöz, telefonon azonnal gyors segítséget kaptam, Vágó Eszter gyógytornászhoz már másnapra kaptam is időpontot. …', name: 'Szalai K.', place: 'belvaros' },
    { text: 'Egy vállsérüléssel kerestem fel a rendelőt évekkel ezelőtt, ahol Vágó Eszter gyógytornászhoz kerültem. Nagyon felkészülten és odafigyeléssel segítette a …', name: 'Konya M.', place: 'belvaros' },
    { text: 'Deréktáji és vállpanaszokkal kerestem fel a rendelőt, ahol Eszter professzionális felkészültségének, valamint empatikus és segítőkész …', name: 'Szabó P.', place: 'belvaros' },
  ],
  terdfajdalom: [
    { text: 'Elülső keresztszalag szakadás után kerestem fel őket. Nagyon kedvesek, segítőkészek és értenek a munkájukhoz. Rövid időn belül (műtét nélkül) ismét teljes mozgásra képes voltam, hála nekik. Ezúton is köszönöm szépen nekik a segítséget. Bátran ajánlom!', name: 'Borkó J.', place: 'buda' },
    { text: "I had a knee pain for years. Zsuzsa's expertise helped me to fix my movements. I'm very satisfied with the place.", name: 'Bombolya L.', place: 'belvaros', lang: 'en' },
    { text: 'Nagyon sok gyógytornásznál voltam sport sérülések miatt, rengeteg negatív tapasztalat után kerültem ide. De ezen a helyen a tökéletes szakértelem és a kedvesség teljesen megváltoztatta a negatív tapasztalataimat. Csak ajánlani tudom a helyet.', name: 'Michl G.', place: 'belvaros' },
  ],
  csipofajdalom: [
    { text: 'Igazi gyógyulási lehetőség, kedves, figyelmes, tanítás. Kulturált tiszta terem, öltöző. Köszönöm szépen. Ajánlani tudom azoknak akik szeretnének szabadulni a fájdalomtól.', name: 'Horváth J.', place: 'belvaros' },
    { text: 'Timi szakértelme,kedvessége,biztatása nagyon sokat segített. Erős fájdalmam elmúlt. …', name: 'Nagy E.', place: 'buda' },
    { text: 'Az utcára sem volt erőm lemenni a fájdalmaim miatt, de Ildikó kitartó, empatikus és szakszerű segítségének hála, rendkívül sokat segített rajtam. Minden …', name: 'Hadi A.', place: 'belvaros' },
  ],
  'muteti-rehabilitacio': [
    { text: 'Akut probléma kezelésére, vagy megelőző terápiára is kiváló ez a rendelő. Kellemes, jól felszerelt környezetben profi, figyelmes gyógytornász segítette a műtét utáni rehabilitációmat, azóta pedig a prevenciós tornámat. A családom is ide jár, ha panasza van.', name: 'Pados G.', place: 'buda' },
    { text: 'A műtétem után jártam ide és nagyon elégedett voltam. Sajnos azonban egyéb gond is adódott és újra felkerestem őket és egyáltalán nem bántam meg! Éva nagyon kedves, segítőkész, empatikus. Kaptam otthonra is feladatot bőven. Ajánlom mindenkinek!', name: 'gkrizo', place: 'buda' },
    { text: 'Kiváló szakemberek, kiváló munkát végeznek. Néhány évvel gerincsérv-műtét után ismét kezdtek kiújulni a panaszaim, csak a gerinc másik részén. …', name: 'Piricz J.', place: 'buda' },
    { text: 'Sok-sok éve járok Önökhöz, név szerint Kókai Zsuzsához kezelésre. Több mozgásszervi problémával is kerestem már, gerinc probléma,műtét utáni rehabilitáció, stb. …', name: 'Pukkai Zs.', place: 'belvaros' },
  ],
  'ulomunka-tartashibak': [
    { text: '"Klasszikus", ülőmunkából és gyermekkori gerincferdülésből adódó problémák miatt kezdtem kezelésre járni és már az első alkalom után érezhető volt a különbség. …', name: 'Kalocsai T.', place: 'buda' },
    { text: 'Kb 5 éve járok ide heti rendszerességgel. Előtte a derék fájdalmaim miatt már 50 métert sem tudtam megtenni. 60 éves vagyok, ülő munkát végzek, és …', name: 'Katona G.', place: 'buda' },
    { text: 'Több problémával kerestem fel a rendelőt (nyak, hát, váll, derékfájdalom) és már az első néhány alkalom után érezhető volt a javulás. …', name: 'Téglás Gy.', place: 'belvaros' },
  ],
};
