import type { APIRoute } from 'astro';
import { clinic, reviewTotal, ratingText } from '../data/clinic';

// Plain-text summary for AI answer engines (llmstxt.org convention).
// Only facts that are also visible on the site, from the same data files.
export const GET: APIRoute = ({ site }) => {
  const root = new URL(import.meta.env.BASE_URL, site).href;
  const loc = clinic.locations
    .map((l) => `- ${l.name} (Google: ${l.googleName}): ${l.postalCode} Budapest, ${l.street} (${l.district}). ${l.transit}. Parkolás: ${l.parking}. Google-értékelés: ${ratingText(l.rating.value)} (${l.rating.count} vélemény). Térkép: ${l.mapsUrl}`)
    .join('\n');

  const body = `# ${clinic.name}

> Magánrendelő Budapesten, két helyszínen (V. és XI. kerület). Gyógytorna derékfájásra, nyakfájásra, isiászra, porckorongsérvre és gerincferdülésre, elsősorban McKenzie-módszerrel (MDT). Alapító, vezető gyógytornász: Relle Éva (diploma 1992, a rendelőt 1993-ban alapította, McKenzie nemzetközi minősítővizsga, a Magyarországi McKenzie Intézet kuratóriumának tagja, 2000 óta a Semmelweis Egyetem Egészségtudományi Karán is oktat).

## Tények
- ${clinic.therapists} gyógytornász, mindannyian McKenzie-képzéssel
- Rendelés: ${clinic.hoursText}
- Időpontfoglalás: telefonon ${clinic.phoneDisplay}, ${clinic.bookingHours.toLowerCase()}, vagy visszahívás-kérés a weboldalon
- Időpont általában 1-2 napon belül, beutaló nem kell, egészségpénztárra számlát adnak
- ${clinic.prices.single.label} (${clinic.prices.single.duration}): ${clinic.prices.single.amount}, ${clinic.prices.single.note}
- ${clinic.prices.pass.label}: ${clinic.prices.pass.amount} (${clinic.prices.pass.perVisit}, ${clinic.prices.pass.saving})
- Google-értékelés összesen: ${reviewTotal} vélemény
- E-mail: ${clinic.email}

## Rendelők
${loc}

## Oldalak
- [Kezelési módszerek](${root}modszerek): McKenzie-módszer, manuálterápia, stabilizációs tréning, Schroth-terápia, műtét előtti és utáni rehabilitáció, tartásjavítás, kineziológiai taping
- [Csapatunk](${root}csapatunk): terapeuták rendelővel, képesítéssel, nyelvvel és árral
- [Árak](${root}araink)
- [Vélemények](${root}velemenyek)
- [Gyakori kérdések](${root}gyik)
- [Kapcsolat, időpontfoglalás, visszahívás](${root}kapcsolat)
`;

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
