// Single source of truth for name, address, phone, hours and prices.
// The same values feed the visible page and the Schema.org markup, so search engines
// and answer engines see one consistent entity (the audit found 10+ name variants).

const NBSP = ' ';

export const clinic = {
  name: 'McKenzie Gyógytorna Rendelő',
  legalName: 'Chef Egészségügyi és Szolgáltató Kft.',
  tagline: 'McKenzie referenciarendelő Budapesten',
  phone: '+36304878284',
  phoneDisplay: '(30) 487-8284',
  email: 'mck.relle@t-online.hu',
  therapists: 15, // active; 3 more on GYES (see data/team.ts)
  bookingHours: 'Hétköznap 9:00-17:00', // phone line hours, as on the old kapcsolat page
  bookingHoursShort: 'H-P 9-17 óra',
  bookingHoursSentence: 'hétköznap 9 és 17 óra között',
  hoursText: 'hétfőtől péntekig, 8:00 és 20:00 között',
  hours: { days: 'Hétfő-péntek', open: '08:00', close: '20:00', schema: 'Mo-Fr 08:00-20:00' },
  sameAs: [
    'https://www.facebook.com/p/McKenzie-Gy%C3%B3gytorna-Rendel%C5%91-100063646028294/',
    'https://www.instagram.com/mckenzie_gyogytorna_rendelo',
  ],
  locations: [
    {
      id: 'belvaros',
      name: 'Belvárosi rendelő',
      googleName: 'Belvárosi Gyógytorna-rendelő',
      street: 'Sas u. 7. 2. em.',
      postalCode: '1051',
      district: 'V. kerület',
      transit: 'Arany János utca M3, kb. 5 perc gyalog',
      transitMore: 'Deák Ferenc tér M1, M2, M3, 6-8 perc gyalog',
      area: 'Bazilika környéke',
      bell: null,
      parking: 'Bazilika garázs, Gödör',
      geo: { lat: 47.4999675, lng: 19.0523906 },
      mapsUrl: 'https://www.google.com/maps?cid=13267961777364014041',
      // Google rating as shown on the Maps profile on 2026-10-29.
      rating: { value: 5.0, count: 78, checked: '2026-10-29' },
    },
    {
      id: 'buda',
      name: 'Bel-budai rendelő',
      googleName: 'McKenzie Bel-budai Gyógytorna-rendelő',
      street: 'Bartók Béla út 34. I. em. 1.',
      postalCode: '1111',
      district: 'XI. kerület',
      transit: 'Móricz Zsigmond körtér M4, kb. 5 perc gyalog',
      transitMore: 'Villamos: 6, 19, 41, 47, 48, 49, 56, 61',
      area: 'Móricz Zsigmond körtér',
      bell: '18-as kapucsengő',
      parking: 'Allee garázs, 6-8 perc',
      geo: { lat: 47.4791083, lng: 19.051651 },
      mapsUrl: 'https://www.google.com/maps?cid=14953815393740334208',
      rating: { value: 5.0, count: 103, checked: '2026-10-29' },
    },
  ],
  prices: {
    single: {
      label: 'Egyéni kezelés',
      duration: '50-55 perc',
      amount: `14${NBSP}000 vagy 15${NBSP}000${NBSP}Ft`,
      range: `14${NBSP}000-15${NBSP}000${NBSP}Ft`,
      note: 'a terapeutától függően',
      min: 14000,
      max: 15000,
    },
    pass: {
      label: '5 alkalmas bérlet',
      amount: `65${NBSP}000-70${NBSP}000${NBSP}Ft`,
      perVisit: `13${NBSP}000-14${NBSP}000${NBSP}Ft / alkalom`,
      saving: 'a terapeuta díjától függően',
      min: 65000,
      max: 70000,
      // Confirmed by Relle Éva (2026-10-31): same in both clinics, transferable, no fixed expiry.
      terms: 'Mindkét rendelőben felhasználható, és másra is átruházható. Érvényességi határidőt nem szabunk, de szakmai szempontból 3 hónapon belüli felhasználást javaslunk.',
    },
  },
} as const;

export const reviewTotal = clinic.locations.reduce((n, l) => n + l.rating.count, 0);
export const ratingText = (v: number) => v.toFixed(1).replace('.', ',');
/** Review counts are shown as a floor to the nearest ten ("180+"), so they only need an update when the next ten is passed. */
export const moreThan = (n: number) => `${Math.floor(n / 10) * 10}+`;
export const reviewTotalText = moreThan(reviewTotal);

/** One wording for health-fund invoicing, used on every page. */
export const healthFundNote = 'Egészségpénztárra számlát adunk';
