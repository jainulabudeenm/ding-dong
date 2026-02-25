# Ding-Dong — Codebase Guide

## What this is
A React + Vite single-page app with a Spline 3D hero section, gated behind Supabase authentication.

## Tech stack
- **React 19** — UI
- **Vite 7** — dev server and build tool
- **Tailwind CSS 4** (via `@tailwindcss/vite`) — styling
- **Supabase** (`@supabase/supabase-js`) — auth (email/password)
- **Spline** (`@splinetool/react-spline`) — interactive 3D scene

## Project structure
```
index.html          — HTML entry point, mounts #root
src/
  main.jsx          — React entry, renders <App /> into #root
  App.jsx           — Root component; owns auth state, gates UI
  Auth.jsx          — Login / Sign Up / Forgot Password UI
  lib/
    supabase.js     — Supabase client (reads env vars)
  App.css           — Minimal global styles
  assets/           — Static assets (react.svg)
public/
  vite.svg          — Favicon
PricingTable.jsx    — Standalone pricing component (not yet wired into the app)
```

## Auth flow
`App.jsx` initialises auth state with `supabase.auth.getSession()` on mount and subscribes to changes via `onAuthStateChange`. Session is stored in React state:
- `undefined` → still loading (renders nothing)
- `null` → logged out → renders `<Auth />`
- session object → logged in → renders the hero + Sign Out button

`Auth.jsx` handles three actions:
- **Log In** — `signInWithPassword`
- **Create Account** — `signUp` (shows "check your email" on success)
- **Forgot Password?** — `resetPasswordForEmail` (requires email field to be filled)

All three share the same error/success banner state and a shared `loading` flag that disables buttons during requests.

## Environment variables
Create a `.env.local` file (never commit it):
```
VITE_SUPABASE_URL=your-project-url
VITE_SUPABASE_ANON_KEY=your-anon-key
```
These are consumed in `src/lib/supabase.js` via `import.meta.env`.

## Dev commands
```bash
npm run dev      # start dev server (usually http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview production build locally
npm run lint     # ESLint
```

## Deployment
Target platform: **Vercel**. Set `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` as environment variables in the Vercel project settings. Vite's build output (`dist/`) is auto-detected.

## Notes
- The Spline scene is lazy-loaded (`React.lazy`) with a spinner fallback to avoid blocking the initial render.
- A black `div` is absolutely positioned over the bottom-right corner to patch the "Made with Spline" watermark.
- `PricingTable.jsx` lives at the repo root and is not currently imported anywhere.
