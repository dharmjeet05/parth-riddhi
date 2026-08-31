# Parth  Riddhi — Wedding Website 

A mobile-first Gujarati wedding invitation site. Built with Next.js 14 (App
Router), Tailwind CSS and Framer Motion.

##  Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## ✏️ Editing content

**Everything is controlled from one file:** `lib/wedding.ts`
- Names (English + Gujarati), date, venue, hashtag
- Gallery photos and the hero photo
- The list of wedding functions (Mehndi, Sangeet/Garba, Pithi, Lagna, etc.)

##  Adding the real photos (when you get them)

1. Drop the images into the `public/` folder, e.g. `public/couple-1.jpg`.
2. In `lib/wedding.ts`, replace the placeholder `picsum.photos` URLs with the
   local paths, e.g. `"/couple-1.jpg"`.
3. Portrait photos (4:5 ratio) look best in the gallery and hero.

> Currently using `picsum.photos` placeholder images.

##  Design — "Romantic Floral"
- Swaying marigold garland (toran) across the top
- Blooming floral wreath around the couple's names (hand-drawn SVG flowers)
- Drifting flower-petal animation across the whole page
- Live countdown to **27 Feb 2027**
- Scroll-reveal floral dividers & sections
- Tap-to-zoom photo gallery (lightbox)
- Fully responsive — designed mobile-first (90%+ mobile traffic)
