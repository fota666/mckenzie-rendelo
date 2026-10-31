// Relle Éva, founder. Every fact here has a source:
// - diploma 1992: team data. Founded the clinic in 2001: Relle Éva herself (2026-10-31). The old Rólam page said 1993.
// - credentialing exam: team data (gyogytornaszok page of the old site)
// - board member of the Magyarországi McKenzie Intézet Alapítvány: hu.mckenzieinstitute.org/rolunk/
// - teaches at Semmelweis Egyetem ETK since 2000 (mestertanár): semmelweis.hu CV, 2025
// The old claim "1993 óta vezeti a Magyarországi McKenzie Intézetet" is NOT used: the foundation
// exists since 1995 and its board is chaired by someone else.
// The philosophy line is Relle Éva's own sentence (confirmed by her, 2026-10-31).

export const founder = {
  name: 'Relle Éva',
  role: 'Alapító, vezető gyógytornász',
  photo: 'images/csapat/relle_eva.jpg',
  headline: 'Relle Éva 2001-ben alapította a rendelőt, hogy a McKenzie-módszer itthon is elérhető legyen.',
  intro:
    'Az alapító gyógytornász 1992-ben diplomázott, és letette a McKenzie nemzetközi minősítővizsgát. A Magyarországi McKenzie Intézet kuratóriumának tagja, 2000 óta a Semmelweis Egyetem Egészségtudományi Karán is oktat. A rendelőben ma 15 gyógytornász dolgozik a vezetésével, két budapesti helyszínen.',
  philosophy:
    'Nem elég kezelni a fájdalmat. A páciensnek meg kell tanulnia, hogyan előzze meg annak visszatérését.',
  credentials: ['Diploma 1992', 'McKenzie A-E', 'Nemzetközi minősítővizsga', 'Semmelweis Egyetem, oktató', 'Magyar, angol, német'],
  timeline: [
    { year: '1992', text: 'Gyógytornász diploma' },
    { year: '2000', text: 'Oktatni kezd a Semmelweis Egyetem Egészségtudományi Karán' },
    { year: '2001', text: 'Megalapítja a McKenzie Gyógytorna Rendelőt' },
    { year: 'ma', text: '15 gyógytornász, két rendelő Budapesten' },
  ],
  links: {
    institute: 'https://hu.mckenzieinstitute.org/rolunk/',
  },
};
