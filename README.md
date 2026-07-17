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

## Media credits
Photos and video processed from your originals (field monitoring cabinet, solar station,
RWDI, BCI demo, rooftop). Originals were HEIC/MOV; converted to web JPG/WebP/MP4.
