// ─────────────────────────────────────────────────────────────
//  Edit everything about the wedding from this one file.
//  When you get the couple's real photos, drop them in /public
//  and replace the `src` values below (e.g. "/couple-1.jpg").
// ─────────────────────────────────────────────────────────────

export const wedding = {
  groom: "Parth",
  bride: "Riddhi",
  // Gujarati spellings (shown as a subtle accent)
  groomGu: "પાર્થ",
  brideGu: "રિદ્ધિ",

  // Wedding day  — 27 February 2027, 10:30 AM
  date: new Date("2027-02-27T10:30:00+05:30"),
  dateLabel: "27th February 2027",
  dayLabel: "Saturday",

  hashtag: "#ParthWedsRiddhi",

  // Couple's photos (in /public/photos). Real w/h keeps each photo's
  // natural shape in the gallery — no awkward cropping.
  gallery: [
    { src: "/photos/01.jpg", w: 1200, h: 1600 },
    { src: "/photos/02.jpg", w: 1600, h: 1066 },
    { src: "/photos/03.jpg", w: 1200, h: 1600 },
    { src: "/photos/04.jpg", w: 1600, h: 1600 },
    { src: "/photos/05.jpg", w: 1066, h: 1600 },
    { src: "/photos/06.jpg", w: 1600, h: 1066 },
    { src: "/photos/07.jpg", w: 899, h: 1599 },
    { src: "/photos/08.jpg", w: 1440, h: 959 },
    { src: "/photos/09.jpg", w: 1066, h: 1600 },
    { src: "/photos/10.jpg", w: 1200, h: 1600 },
  ],

  // Main featured couple photo (full-length portrait, 2:3).
  heroImage: "/photos/hero.jpg",

  // Faint background photo behind the hero names.
  heroBg: "/photos/hero-bg.jpg",
};

export type GalleryPhoto = (typeof wedding.gallery)[number];
