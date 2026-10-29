// The first 55-minute visit, minute by minute. Shared by the homepage and the contact page
// so both describe the same four steps. `photo` is a real clinic photo in /images/rendelo.
export const firstVisit = [
  { min: '0-10', video: null, photo: 'rendelo-kezeloagy', title: 'Kikérdezés', body: 'Mikor kezdődött, mitől rosszabb, mitől jobb. Ha vannak leletei (MRI, röntgen), hozza magával.' },
  { min: '10-30', video: 'vizsgalat', photo: 'mckenzie-gyakorlat', title: 'Mozgásvizsgálat', body: 'Ismételt mozgások és testhelyzetek, miközben figyeljük, hogyan változik a fájdalom helye és erőssége.' },
  { min: '30-45', video: 'kezeles', photo: 'manualis-kezeles', title: 'Kezelés', body: 'A vizsgálat alapján McKenzie-gyakorlatok, szükség esetén manuális technikák.' },
  { min: '45-55', video: 'otthon', photo: 'stabilizacios-gyakorlat', title: 'Otthoni program', body: 'Írásban vagy videón megkapja a gyakorlatokat, és megbeszéljük, mikor jöjjön vissza.' },
] as const;
