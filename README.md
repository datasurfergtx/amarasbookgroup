# Amara's Book Group

Marketing and storefront site for Amara's Book Group, an Armenian children's book publisher.

Built with Vite + React + React Router + Tailwind CSS. Deployed as a static site on Netlify.

## Pages

- **Home** (`/`) — hero, mascot intro, featured book, alphabet teaser
- **Shop** (`/shop`) — book grid
- **Book PDP** (`/shop/:slug`) — book details with a "Buy on Amazon" CTA
- **Pronunciation Help** (`/pronunciation`) — full Armenian alphabet (39 letters)
- **Contact** (`/contact`) — Netlify Forms-powered contact form

## Local development

Requires Node 18+.

```bash
npm install
npm run dev
```

The dev server runs on http://localhost:5173.

## Production build

```bash
npm run build
npm run preview
```

Output is written to `dist/`.

## Deploy on Netlify

1. Push this repo to GitHub.
2. In Netlify, "Add new site" → "Import an existing project" → pick this repo.
3. Build command and publish directory are read automatically from `netlify.toml`:
   - Build: `npm run build`
   - Publish: `dist`
4. Netlify Forms will pick up the hidden `contact` form in `index.html` on the first deploy. Submissions appear in the Netlify dashboard under "Forms".

## Replacing placeholder assets

- `public/images/book-cover.jpg` — replace with the real "My Hye Book" cover.
- `src/data/books.js` — update the book metadata, price, and Amazon URL as needed.
- `src/data/alphabet.js` — drop audio file paths into the `audio` field of each letter when ready (`/audio/<letter>.mp3`); the Listen buttons will activate automatically.

## Future: direct checkout

The "Buy on Amazon" button in `src/pages/BookDetail.jsx` is the seam where Stripe Checkout (via a Netlify Function at `/.netlify/functions/create-checkout`) will plug in.
