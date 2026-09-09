# AI Math Coach — Frontend

A React + Tailwind CSS (v4) implementation of the AI Math Coach dashboard,
built from the light/dark mockups — including your bear mascot and
foliage artwork as real, optimized assets. Frontend only, plain
JavaScript (no TypeScript), no backend.

## Quick start

Requires **Node.js 18+**.

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

Other scripts:

```bash
npm run build    # production build → dist/
npm run preview  # locally preview the production build
npm run lint     # oxlint
```

A pre-built `dist/` folder is already included in this zip if you just
want to preview the finished app without installing anything —
open `dist/index.html` via `npm run preview` (opening the file
directly with `file://` won't work because the app loads modules
and images relative to a server root).

## What's implemented

- **Both themes from your mockups**, toggled with the sun/moon button
  in the top bar. The choice is remembered (`localStorage`) and
  defaults to the visitor's OS light/dark preference on first visit.
- **Responsive top nav** with all 11 sections (Home, Learn, AI Tutor,
  Practice, Quizzes, Progress, Mistakes, Upload, Reports, Calendar,
  Settings) — collapses into a menu on smaller screens.
- **Home dashboard**: greeting (changes with time of day), headline,
  CTA, the floating bear-with-laptop illustration, and the Study
  Record card with animated count-up stats.
- **"See Progress"** expands a small chart panel; the three icon
  buttons switch it between a bar chart, line chart, and topic
  breakdown donut — all hand-built in SVG, no charting library.
- **Chat dock** at the bottom: the three quick-action chips and the
  free-text input both produce a canned coach reply with a typing
  indicator, so the chat *feels* alive even though there's no real
  AI behind it yet.
- Other nav tabs show a friendly "coming soon" placeholder instead of
  a dead click — swap these out as you build each section for real.
- Motion is done with **Framer Motion** for entrances/expansions and
  a few CSS keyframes (in `src/index.css`) for the ambient bob/float
  effects. Everything respects `prefers-reduced-motion`.

## Project structure

```
src/
  assets/images/       Your mascot & foliage art (optimized to .webp)
  components/
    layout/             TopNav, NotificationBell, UserMenu, BackgroundDecor
    dashboard/          Hero, StudyRecordCard, StatPill, MiniChart,
                         BearMascot, ComingSoonPanel
    chat/               ChatWidget, ChatMessage, TypingDots
    ui/                 BearIcon (small vector logo/avatar), ThemeToggle
  context/              ThemeContext (light/dark state + persistence)
  data/                 navItems.js, statsData.js, chatData.js, chartData.js
                        — edit these to change copy/numbers without
                        touching component code
  hooks/                useCountUp.js
  App.jsx, main.jsx, index.css
```

## Customizing

- **Colors, fonts, animation timings** — all defined once in the
  `@theme { ... }` block at the top of `src/index.css` (Tailwind v4
  style, no separate `tailwind.config.js` needed). Look for
  `--color-brand-*`, `--color-canvas*`, `--color-surface*`,
  `--font-display`, `--font-body`.
- **Nav items** — `src/data/navItems.js`. Add a `case` for a new
  tab's placeholder copy in `ComingSoonPanel.jsx`, or build a real
  panel and render it from `App.jsx` instead of `ComingSoonPanel`.
- **Study Record numbers** — `src/data/statsData.js` and the
  `02:52` / streak values inside `StudyRecordCard.jsx`.
- **Chat replies** — `src/data/chatData.js`. When you're ready to
  connect a real AI backend, replace the `setTimeout` + canned
  `reply` logic in `ChatWidget.jsx`'s `sendReply` with your API call.

## Notes

- Images were resized and converted from PNG to WebP (about a 95%
  size reduction) since the originals were large illustration
  exports; visually identical, much faster to load.
- Fonts are loaded from Google Fonts via a `<link>` in `index.html`
  (Baloo 2 for headings, Inter for body text) — swap or self-host
  these if you need to work offline or avoid the external request.
