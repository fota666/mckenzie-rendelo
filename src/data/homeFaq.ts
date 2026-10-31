// Homepage questions. Shared by the homepage and the calm design variant; the languages answer
// is computed from the team data so it cannot drift from the team page.
import { clinic, healthFundNote } from './clinic';
import { terapeutak } from './team';

const speaks = (lang: string) => terapeutak.filter((t) => !t.status && t.langs.includes(lang));
const english = speaks('angol').length;
const german = speaks('német').map((t) => t.name);

const faqs = [
  { q: 'Mi az a McKenzie-módszer?', a: 'A McKenzie-módszer hivatalos magyar nevén Mechanikai Diagnózis és Terápia (MDT): részletes mozgásvizsgálatra épülő gyógytorna gerinc- és végtagpanaszokra. Ismételt mozgásokkal és testhelyzetekkel megnézzük, hogyan változik a fájdalom, ebből áll össze az a gyakorlatsor, amelyet otthon egyedül is végezhet.' },
  { q: 'Kell beutaló?', a: 'Nem kell, magánrendelésről van szó. Ha van korábbi MRI- vagy röntgenlelete, hozza magával.' },
  { q: 'Hogyan foglalhatok időpontot?', a: `Telefonon a ${clinic.phoneDisplay} számon, ${clinic.bookingHoursSentence}, vagy kérjen visszahívást. Általában 1-2 napon belül kap időpontot, a kezelések ${clinic.hoursText} vannak.` },
  { home: false, q: 'Porckorongsérvvel is jöhetek?', a: 'Igen, a sérv sok esetben műtét nélkül is kezelhető, de nem minden állapot alkalmas gyógytornára, ezt a vizsgálat dönti el. Vizelet- vagy székletürítési zavar, gáttáji zsibbadás vagy gyorsan erősödő gyengeség esetén viszont azonnal orvoshoz forduljon.' },
  { q: 'Hány alkalom kell, és mikor javulok?', a: 'A javulás üteme egyénenként eltér, ezért előre nem ígérünk alkalomszámot. Az első vizsgálat után a terapeuta elmondja, mire számíthat. Egy kezelési sor gyakran 4-6 alkalomból áll.' },
  { q: 'Fáj a kezelés?', a: 'A vizsgálat és a gyakorlatok alatt folyamatosan figyeljük, hogyan változik a fájdalma, és úgy választjuk meg a mozgásokat, hogy ne erősítsék a panaszt. Ha valami kellemetlen, szóljon, és módosítunk.' },
  { home: false, q: 'Mit vegyek fel?', a: 'Kényelmes, mozgásra alkalmas ruhát. Öltöző és mosdó mindkét rendelőben van.' },
  { q: 'Mi van, ha le kell mondanom?', a: 'Az időpontot legalább 24 órával korábban, telefonon kell lemondani. A 24 órán belüli lemondás vagy a meg nem jelenés esetén a kezelés díját ki kell fizetni.' },
  { q: 'Beszélnek angolul vagy németül?', a: `Igen. ${english} terapeutánk beszél angolul, németül ${german.join(', ')}. Telefonon kérjen időpontot hozzájuk.` },
  { home: false, q: 'Ülőmunka okozta nyak- és derékfájásra is érdemes jönni?', a: 'Igen. A vizsgálat megmutatja, mely testhelyzetek váltják ki a panaszt, és tartásjavító gyakorlatokat, ergonómiai tanácsokat is kap az íróasztali munkához.' },
  { home: false, q: 'Gyermeket is kezelnek?', a: 'Igen, gerincferdülés (Schroth-terápia) és gyermekkori tartáshibák esetén is. Időpontkéréskor jelezze, hogy gyermeknek kéri, és megfelelő terapeutát ajánlunk.' },
  { q: 'Elszámolható egészségpénztárral?', a: `Igen. ${healthFundNote}, a feltételekről előzetesen érdemes egyeztetni a pénztárral. A TB nem fedezi a kezelést.` },
];

export { faqs as homeFaqs };
