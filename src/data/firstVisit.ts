// The first 55-minute visit, minute by minute. Shared by the homepage and the contact page
// so both describe the same four steps.
export const firstVisit = [
  { min: '0-10', video: null, title: 'Kikérdezés', body: 'Mikor kezdődött, mitől rosszabb, mitől jobb. Ha vannak leletei (MRI, röntgen), hozza magával.' },
  { min: '10-30', video: 'vizsgalat', title: 'Mozgásvizsgálat', body: 'Ismételt mozgások és testhelyzetek, miközben figyeljük, hogyan változik a fájdalom helye és erőssége.' },
  { min: '30-45', video: 'kezeles', title: 'Kezelés', body: 'A vizsgálat alapján McKenzie-gyakorlatok, szükség esetén manuális technikák.' },
  { min: '45-55', video: 'otthon', title: 'Otthoni program', body: 'Írásban vagy videón megkapja a gyakorlatokat, és megbeszéljük, mikor jöjjön vissza.' },
] as const;
