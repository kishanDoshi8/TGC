# TGC Subs & Convenience — website

The website for TGC Subs & Convenience (210 Front St, Quinte West). Two pages:

- **Home** (`/`) — hero, top picks, convenience store, rewards, about, visit us
- **Menu** (`/menu`) — searchable sub menu with Regular / Large prices

It was originally scaffolded in **Firebase Studio** (Google's online editor) and is
deployed on **Vercel**.

---

## The 2-minute Next.js primer

If you've done React before, Next.js is "React plus a folder-based router plus a
build step". The parts that matter here:

| Concept | What it means in this project |
| --- | --- |
| **App Router** | Every folder in `src/app/` with a `page.tsx` becomes a URL. `src/app/page.tsx` → `/`, `src/app/menu/page.tsx` → `/menu`. |
| **`layout.tsx`** | Wraps every page. Holds the fonts, the `<html>`/`<body>` tags and the page title/description. |
| **Server vs client components** | Files are rendered on the server by default (fast, no JavaScript sent). Files starting with `'use client'` run in the browser too — needed for anything interactive (search box, size toggle, animations, mobile menu). |
| **Static output** | Both pages are pre-built into plain HTML at build time (`○ (Static)` in the build output). No database, no server code. |
| **`next/image`** | Images imported from `src/assests/` are automatically resized and compressed for each visitor's screen. |
| **`@/` imports** | Shortcut for `src/`. `@/data/menu` means `src/data/menu.ts`. |

Styling is **Tailwind CSS** — the long `className="..."` strings are styles
(e.g. `text-primary` = brand red, `rounded-3xl` = rounded corners, `md:` = from
tablet width up). Animations use **framer-motion**. Icons are from **lucide-react**.

---

## Common edits

### Change a price, name or item on the menu
Edit **`src/data/menu.ts`** — the only file you need. Both pages read from it.

```ts
{ name: 'Classic Meatball', description: 'Meatball', regularPrice: '$11.49', largePrice: '$14.29', fillings: ['meatball'] },
```

- `popular: true` adds the "Popular" badge.
- `fillings` controls the sub illustration, listed **bottom → top**. Available
  fillings are listed at the top of `src/components/SubArt.tsx`.
- Top picks on the home page are chosen in `topPicks` (same file) by menu name;
  their prices update automatically.
- Phone, email, address and the Facebook link are in `store` (same file).

### Change text on the home page
Each section is its own file in `src/components/LandingPage/`
(`HeroSection.tsx`, `TopPicksSection.tsx`, `ConvenienceSection.tsx`,
`RewardsSection.tsx`, `AboutUsSection.tsx`, `ContactSection.tsx` = footer).
The order of sections is in `src/app/page.tsx`.

### Change colours or fonts
- Colours: the `:root` block in `src/app/globals.css` (HSL values —
  `--primary` is the red, `--accent` the mustard, `--background` the cream).
- Fonts: `src/app/layout.tsx`.

### Replace a photo
Drop the new file into `src/assests/` (keep the same filename, or update the
`import` line at the top of the component that uses it). Keep photos under
~1–2 MB; export as `.jpg` if possible.

---

## Running it on your computer

Needs **Node.js 20 or newer** (`node -v` to check).

```bash
npm install
```

```bash
npm run dev
```

Then open http://localhost:9002 — the page reloads as you save files.

To check that a production build works (this is what Vercel runs):

```bash
npm run build
```

---

## How deployment works (Vercel)

- Vercel watches this GitHub repo. **Every push to `master` deploys the live site
  automatically.**
- Pushes to any other branch (or a pull request) get a **preview URL** — a
  private copy of the site to check before merging. Find it on the pull request
  or in the Vercel dashboard under *Deployments*.
- No environment variables or settings are needed; Vercel detects Next.js on
  its own.
- If a deploy fails, open it in the Vercel dashboard → *Building* log and
  scroll to the **bottom** — the actual error is usually the last few lines.

### Keep Next.js updated
Vercel **refuses to deploy** Next.js versions with known critical security
holes (that's what broke the build in late 2026 on 15.2.3). A few times a year,
update the patch version and push:

```bash
npm install next@15.5 --save-exact
```

```bash
npm run build
```

`npm audit` shows known issues. Bumping to a new **major** version (e.g. Next 16)
is a bigger job — read its upgrade guide first.

---

## Folder map

```
src/
  app/
    layout.tsx          fonts, page title, wraps every page
    page.tsx            home page (list of sections)
    menu/page.tsx       menu page
    globals.css         colours + base styles
  components/
    Navbar.tsx          top bar + mobile menu
    LandingPage/        home page sections + footer
    Menu/MenuBrowser.tsx  menu search, size toggle, category bar
    SubArt.tsx          the illustrated subs
    Reveal.tsx          fade-in-on-scroll helper
    ui/                 generic UI kit (shadcn/ui) — mostly unused
  data/menu.ts          ← menu, prices, store details
  assests/              photos and logo
```

### Leftovers from the template (safe to ignore)
Firebase Studio added things this site doesn't use: `src/ai/` and the
`genkit`, `firebase` and `@tanstack` packages, most of `src/components/ui/`,
and `.idx/dev.nix` (Firebase Studio's editor config). They aren't included in
the website, but they are the source of most `npm audit` warnings and could be
removed in a clean-up.
