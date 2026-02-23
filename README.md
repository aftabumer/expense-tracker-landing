# Expense Tracker — Landing Page

Marketing landing page for [Expense Tracker](https://expensetracker.app) — the free, offline-first personal finance app for tracking expenses, debt, net worth, and Zakat.

Built with **Astro 4**, **Tailwind CSS 3**, and **Plus Jakarta Sans**.

---

## Tech Stack

| Tool | Version |
|------|---------|
| [Astro](https://astro.build) | 4.16.x |
| [Tailwind CSS](https://tailwindcss.com) | 3.4.x |
| Plus Jakarta Sans (Google Fonts) | Variable |

---

## Project Structure

```
expense-tracker-landing/
├── public/
│   ├── robots.txt          # SEO crawler rules
│   ├── sitemap.xml         # Static sitemap
│   └── og-image.png        # Social preview image (add manually — 1200×630px)
├── src/
│   ├── layouts/
│   │   └── Layout.astro    # Base layout with full SEO meta, JSON-LD, fonts
│   ├── components/
│   │   ├── Header.astro    # Sticky nav with mobile menu
│   │   ├── Hero.astro      # Above-the-fold hero with dashboard mockup
│   │   ├── Stats.astro     # Social proof numbers
│   │   ├── Features.astro  # Feature grid (6 cards)
│   │   ├── HowItWorks.astro# Step-by-step section
│   │   ├── Comparison.astro# Competitor comparison table
│   │   ├── Testimonials.astro # Review cards (mobile carousel)
│   │   ├── Pricing.astro   # Pricing cards (mobile scroll snap)
│   │   ├── FAQ.astro       # Accordion FAQ
│   │   ├── CTA.astro       # Bottom call-to-action
│   │   └── Footer.astro    # Footer with links + socials
│   └── pages/
│       └── index.astro     # Main page (composes all sections)
├── astro.config.mjs
├── tailwind.config.mjs
└── tsconfig.json
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install

```bash
npm install
```

### Dev server

```bash
npm run dev
```

Opens at `http://localhost:4321`

### Build

```bash
npm run build
```

Output goes to `dist/`. Preview with:

```bash
npm run preview
```

---

## Branches

| Branch | Purpose |
|--------|---------|
| `master` | Production-ready code |
| `dev` | Active development |

---

## SEO

- Full Open Graph + Twitter Card meta tags
- JSON-LD structured data (SoftwareApplication + Organization schema)
- Canonical URLs via `Astro.site`
- `robots.txt` — allows all crawlers
- `sitemap.xml` — lists all public pages

> **Action required:** Add `public/og-image.png` (1200×630px) for social share previews.

---

## App Link

The landing page links to the live app at:
`https://expense-tracker-dashboard-omega.vercel.app/auth`

---

## License

Private — all rights reserved.
