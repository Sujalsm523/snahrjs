# Snahrjs — Sacred Fragrances

A spiritual-themed static website for a perfume brand. Dark, intentional design with sacred accents—fragrances for inner light and ritual.

## Tech Stack

- **React 18** + **Vite**
- **React Router** (client-side only)
- HTML, CSS, JavaScript — no cart, login, checkout, or database

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
```

Output is in `dist/`.

## Deploy

- **Netlify**: Connect repo, build command `npm run build`, publish directory `dist`. SPA redirects are in `public/_redirects` (copied to `dist`).
- **Vercel**: Connect repo; `vercel.json` handles SPA rewrites.
- **GitHub Pages**: Build with `npm run build`, deploy `dist`. If using project site (`username.github.io/repo`), set `base: '/repo-name/'` in `vite.config.js` and rebuild. For SPA routing, use a 404 redirect to `index.html` (e.g. copy `index.html` to `404.html` in `dist`).

## Structure

```
bella/
├── public/           # Static assets, favicon, _redirects
├── src/
│   ├── components/   # Header, Footer, Hero, ProductCard
│   ├── data/         # products.js (sample data)
│   ├── pages/        # Home, Collection, ProductDetail, About
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css     # Global styles
├── index.html
├── package.json
├── vite.config.js
├── netlify.toml
├── vercel.json
└── README.md
```

## Pages

- **Home**: Hero, tagline “Fragrances for Inner Light & Ritual”, featured products, “Explore Collection” CTA
- **Collection**: Grid of all perfumes (image, name, description, price)
- **Product Detail**: Large image, description, fragrance notes (Top/Heart/Base), price, “Back to Collection”
- **About**: Brand story, vision, mission, spiritual positioning
- **Footer**: Social links, contact email, copyright

Design: spiritual dark theme (deep indigo/black, warm amber accent), Playfair Display + Poppins, responsive.
