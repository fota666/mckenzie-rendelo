// Single source of truth for name, address, phone, hours and prices.
// The same values feed the visible page and the Schema.org markup, so search engines
// and answer engines see one consistent entity (the audit found 10+ name variants).

export const clinic = {
  name: 'McKenzie Gyógytorna Rendelő',
  legalName: 'Chef Egészségügyi és Szolgáltató Kft.',
  tagline: 'McKenzie referenciarendelő Budapesten',
  phone: '+36304878284',
  phoneDisplay: '(30) 487-8284',
  email: 'mck.relle@t-online.hu',
  therapists: 15, // active; 3 more on GYES (see csapatunk.astro)
  bookingHours: 'Hétköznap 9:00-17:00', // phone line hours, as on the old kapcsolat page
  hours: { days: 'Hétfő-péntek', open: '08:00', close: '20:00', schema: 'Mo-Fr 08:00-20:00' },
  sameAs: [
    'https://www.facebook.com/p/McKenzie-Gy%C3%B3gytorna-Rendel%C5%91-100063646028294/',
    'https://www.instagram.com/mckenzie_gyogytorna_rendelo',
  ],
  locations: [
    {
      id: 'belvaros',
      name: 'Belvárosi rendelő',
      street: 'Sas u. 7.',
      postalCode: '1051',
      district: 'V. kerület',
      transit: 'Arany János utca M3, kb. 5 perc gyalog',
      transitMore: 'Deák Ferenc tér M1, M2, M3, 6-8 perc gyalog',
      area: 'Bazilika környéke',
      bell: null,
      parking: 'Bazilika garázs, Gödör',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Budapest+Sas+u.+7',
      rating: { value: 5.0, count: 68 },
    },
    {
      id: 'buda',
      name: 'Bel-budai rendelő',
      street: 'Bartók Béla út 34. I. em. 1.',
      postalCode: '1111',
      district: 'XI. kerület',
      transit: 'Móricz Zsigmond körtér M4, kb. 5 perc gyalog',
      transitMore: 'Villamos: 6, 19, 41, 47, 48, 49, 56, 61',
      area: 'Móricz Zsigmond körtér',
      bell: '18-as kapucsengő',
      parking: 'Allee garázs, 6-8 perc',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Budapest+Bart%C3%B3k+B%C3%A9la+%C3%BAt+34',
      rating: { value: 4.9, count: 73 },
    },
  ],
  prices: {
    single: { label: 'Egyéni kezelés', duration: '55 perc', amount: '14 000-15 000 Ft' },
    pass: { label: '5 alkalmas bérlet', amount: '65 000 Ft', perVisit: '13 000 Ft / alkalom' },
  },
} as const;

export const reviewTotal = clinic.locations.reduce((n, l) => n + l.rating.count, 0);
