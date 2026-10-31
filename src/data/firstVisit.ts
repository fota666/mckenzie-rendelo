// The first 55-minute visit, minute by minute. Shared by the homepage and the contact page
// so both describe the same four steps. `clip` is a vertical loop in /video/rendelo, `photo` a still in /images/rendelo (steps without a matching clip). `alt` says what it shows.
export const firstVisit = [
  { min: '0-10', photo: 'rendelo-kezeloagy', alt: 'a kezelőszoba a kezelőággyal, ahol a kikérdezés és a vizsgálat zajlik', title: 'Kikérdezés', body: 'Mikor kezdődött, mitől rosszabb, mitől jobb. Ha vannak leletei (MRI, röntgen), hozza magával.' },
  { min: '10-30', clip: 'nyak-mckenzie-onkezeles', alt: 'ülve végzett ismételt mozgás a terapeuta mellett', title: 'Mozgásvizsgálat', body: 'Ismételt mozgások és testhelyzetek, miközben figyeljük, hogyan változik a fájdalom helye és erőssége.' },
  { min: '30-45', clip: 'derekfajas-hasonfekvo-mobilizalas', alt: 'hasonfekvő páciens derekának kezelése kézzel', title: 'Kezelés', body: 'A vizsgálat alapján McKenzie-gyakorlatok, szükség esetén manuális technikák.' },
  { min: '45-55', clip: 'vall-gumiszalag-gyakorlat', alt: 'gumiszalagos gyakorlat, amelyet otthon is lehet végezni', title: 'Otthoni program', body: 'Írásban vagy videón megkapja a gyakorlatokat, és megbeszéljük, mikor jöjjön vissza.' },
] as const;
