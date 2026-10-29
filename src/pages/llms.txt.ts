import type { APIRoute } from 'astro';
import { clinic, reviewTotal } from '../data/clinic';

// Plain-text summary for AI answer engines (llmstxt.org convention).
export const GET: APIRoute = ({ site }) => {
  const root = new URL(import.meta.env.BASE_URL, site).href;
  const loc = clinic.locations
    .map((l) => `- ${l.name}: ${l.postalCode} Budapest, ${l.street} (${l.district}). ${l.transit}. Parkolás: ${l.parking}.`)
    .join('\n');

  const body = `# ${clinic.name}

> ${clinic.tagline}. Gyógytorna derékfájásra, nyakfájásra, porckorongsérvre és gerincferdülésre McKenzie-módszerrel (MDT), két budapesti rendelőben. Vezető gyógytornász: Relle Éva, 1993 óta a Magyarországi McKenzie Intézet vezetője.

## Tények
- ${clinic.therapists} gyógytornász
- Rendelés: ${clinic.hoursText}
- Időpont általában 1-2 napon belül, beutaló nem kell
- Telefon: ${clinic.phoneDisplay}
- ${clinic.prices.single.label} (${clinic.prices.single.duration}): ${clinic.prices.single.amount}
- ${clinic.prices.pass.label}: ${clinic.prices.pass.amount} (${clinic.prices.pass.perVisit})
- Google-értékelés: ${clinic.locations.map((l) => `${l.name} ${l.rating.value.toFixed(1)} (${l.rating.count} vélemény)`).join(', ')}, összesen ${reviewTotal}

## Rendelők
${loc}

## Oldalak
- [Kezelési módszerek](${root}modszerek): McKenzie-módszer, manuálterápia, stabilizációs tréning, Schroth-terápia, műtét utáni rehabilitáció
- [Csapatunk](${root}csapatunk)
- [Árak](${root}araink)
- [Gyakori kérdések](${root}gyik)
- [Kapcsolat és időpontfoglalás](${root}kapcsolat)
`;

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
