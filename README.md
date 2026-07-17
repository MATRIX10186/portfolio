# Sawat Wongsaroj — Personal Portfolio

A fast, single-page portfolio built with [Astro](https://astro.build). No client-side
JavaScript framework, pure static output — deploys anywhere.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
```

## Build for production

```bash
npm run build    # outputs static site to ./dist
npm run preview  # preview the production build
```

Deploy the `dist/` folder to Netlify, Vercel, Cloudflare Pages, GitHub Pages, etc.

## Editing content

All copy lives in **`src/data/site.ts`** — text, links, experience, projects and
stats. Change it there and it updates everywhere.

### Things to fill in
- `src/data/site.ts` → `links.linkedin` and `links.github` are placeholders. Replace
  with your real profile URLs.
- `public/Sawat-Wongsaroj-Resume.pdf` — replace with your own PDF anytime (keep the
  same filename, or update `links.resume`).
- Project screenshots live in `public/media/` as optimized `.jpg` / `.webp` pairs.

## Structure

```
src/
  data/site.ts        # all editable content
  layouts/Base.astro  # <head>, fonts, meta
  pages/index.astro   # the page (all sections)
  styles/global.css   # design system
public/
  media/              # optimized photos + video from your uploads
  favicon.svg
```

## License & copyright

**Code and media are under different terms.** See [`LICENSE`](./LICENSE) for the full text.

- **Source code** (`src/`, config files): for portfolio viewing and private reference only — not for redistribution or commercial reuse without permission.
- **Media** (`public/media/`, résumés, and other assets): **All Rights Reserved.** Not licensed for reuse, redistribution, embedding, or training. Unauthorized use may be subject to DMCA takedown.

© 2026 Sawat Wongsaroj. For licensing requests: sawatw2000@gmail.com

## Media credits

Photos and video processed from project originals (field monitoring, solar station,
RWDI / Smartadata, BCI demo, rooftop, The Lake House). Converted to web JPG/WebP/MP4
for delivery. All media remains proprietary — see License above.
