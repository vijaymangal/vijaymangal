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

## Replace Your Assets

1. **Logo** — Replace `src/assets/logo.svg` with your PNG logo (`logo.png`), then update imports in `Navbar.tsx` and `Footer.tsx`
2. **Profile Photo** — Add `src/assets/profile-photo.png` and update the import in `Hero.tsx`
3. **Resume** — Add your resume as `public/resume.pdf`
4. **Photography** — Replace URLs in `src/data/photography.ts` with your own images
5. **Social Links** — Update URLs in `src/data/social.ts`

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
