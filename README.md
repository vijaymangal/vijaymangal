# Vijay Mangal — Portfolio

Premium personal portfolio built with React 19, TypeScript, Vite, Tailwind CSS, Framer Motion, and React Router.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Build

```bash
npm run build
npm run preview
```

## Validation

Run `npm run lint` and `npm run build`. With the dev server running, run `npm run test:portfolio` for browser checks at 320, 390, 768, and 1440 pixels. The checks cover page headings, image loading, overflow, route metadata, project links, mobile menu controls, keyboard focus, reduced-motion scrolling, and the résumé PDF. Screenshots are saved in the ignored `artifacts/` directory.

The browser check uses Playwright Chromium when installed, or local Google Chrome. Set `PORTFOLIO_URL` to test a different local preview URL.

Run `npm run test:theme` with the dev server running to check light/dark switching, saved choices, system preferences, route consistency, and operation when browser storage is unavailable. Theme colors are defined in `src/styles/globals.css`. The navigation toggle saves an explicit choice under `portfolio-theme`; without a saved choice the site follows the system theme.

## Replace Your Assets

1. **Brand** — Update the signature text in `src/components/layout/Logo.tsx`.
2. **Profile photo** — Replace `src/assets/profile-photo.JPG`; the build also uses it for the social sharing image.
3. **Résumé** — Replace `public/VijayKumarMangal-Resume.pdf`.
4. **Projects** — Update `src/data/projects.ts` and the screenshots in `public/projects/`. Featured project IDs are configured in `src/components/sections/Projects.tsx`.
5. **Social links** — Update URLs in `src/data/social.ts`.

## Project Structure

```
src/
├── assets/          # Logo, profile photo
├── components/      # UI, layout, sections
├── pages/           # Page components
├── layouts/         # Main layout wrapper
├── hooks/           # Custom React hooks
├── data/            # Static content
├── types/           # TypeScript types
├── utils/           # Helpers
└── styles/          # Global CSS
```

## Deploy to Vercel

1. Push the repo to GitHub
2. Go to [vercel.com](https://vercel.com) → Import Project
3. Framework: **Vite**
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Deploy

## Deploy to Netlify

1. Push the repo to GitHub
2. Go to [netlify.com](https://netlify.com) → Add new site
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy

`netlify.toml` and `vercel.json` are included for SPA routing.

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- Framer Motion
- React Router
- Lucide React
- react-helmet-async
