# MonetaryReality.com — Project Handoff

## Overview

MonetaryReality.com is a data-driven public educational website about monetary expansion and its effects on prices. It explains how money creation through central banking, fractional reserve lending, deficit spending, and shadow banking drives persistent price increases — and why the effects aren't distributed equally (the Cantillon Effect).

**Live URL:** https://monetaryreality.com
**Repo:** https://github.com/dcrypt-007/monetary-reality
**Domain registrar:** GoDaddy (renews March 7, 2029)
**Hosting:** GitHub Pages via GitHub Actions
**Google Search Console:** Verified, sitemap submitted (12 pages indexed)

---

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **React:** v19
- **Build output:** Static HTML export (`output: "export"` in next.config.ts)
- **Deployment:** GitHub Actions → GitHub Pages
- **No external dependencies** — zero third-party libraries beyond Next.js, React, and Tailwind

---

## Architecture

### Static Export

This site uses `output: "export"` in `next.config.ts`, which means it builds to fully static HTML/CSS/JS. This has important implications:

- **No server-side features.** No API routes, no `getServerSideProps`, no dynamic server functions.
- **No `redirect()` from next/navigation.** Use client-side `router.replace()` if redirects are needed.
- **No `headers()` in next.config.ts.** Security headers must be handled at the hosting level.
- **No dynamic `ImageResponse` routes.** Icons and OG images must be static files in `/public`.
- **Route handlers (robots.ts, sitemap.ts) need `export const dynamic = "force-static"`.** Without this, the static export build will fail.
- **Images must use `unoptimized: true`** since there's no image optimization server.

### Deployment Pipeline

1. Push to `main` branch
2. GitHub Actions workflow (`.github/workflows/nextjs.yml`) triggers automatically
3. Runs `next build` which produces static output in `out/`
4. Deploys to GitHub Pages
5. Custom domain served via CNAME file in `/public`

### DNS Configuration (GoDaddy)

- 4 A records pointing to GitHub Pages IPs: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- CNAME record: `www` → `dcrypt-007.github.io`
- SSL auto-provisioned by GitHub Pages

---

## File Structure

```
monetary-reality/
├── .github/workflows/nextjs.yml    # GitHub Actions deployment workflow
├── public/
│   ├── CNAME                        # Custom domain for GitHub Pages
│   ├── favicon.ico                  # 32x32 favicon
│   ├── favicon.png                  # 32x32 PNG favicon
│   ├── apple-touch-icon.png         # 180x180 Apple touch icon
│   ├── opengraph-image.png          # 1200x630 OG image
│   └── images/                      # Static images
├── src/
│   ├── app/
│   │   ├── layout.tsx               # Root layout (metadata, fonts, header/footer)
│   │   ├── page.tsx                 # Homepage
│   │   ├── globals.css              # Global styles + Tailwind
│   │   ├── robots.ts                # Generates /robots.txt
│   │   ├── sitemap.ts               # Generates /sitemap.xml (12 pages)
│   │   ├── thesis/page.tsx          # The Core Thesis
│   │   ├── money-vs-goods/page.tsx  # Money vs Goods (with interactive demo)
│   │   ├── monetary-plumbing/page.tsx # How Money Gets Created
│   │   ├── asset-inflation/page.tsx # Asset Inflation
│   │   ├── case-studies/page.tsx    # Case Studies
│   │   ├── deep-dives/page.tsx      # Deep Dives
│   │   ├── sources/page.tsx         # Sources & Data
│   │   ├── about/page.tsx           # About
│   │   └── tools/
│   │       ├── calculator/page.tsx  # Purchasing Power Calculator
│   │       ├── timeline/page.tsx    # Monetary Timeline
│   │       └── case-viewer/page.tsx # Case Study Viewer
│   └── components/
│       ├── layout/
│       │   ├── Header.tsx           # Site header + navigation
│       │   └── Footer.tsx           # Site footer
│       ├── sections/
│       │   ├── HeroSection.tsx      # Homepage hero with CTA
│       │   ├── CoreThesisSection.tsx # Homepage thesis preview
│       │   ├── ToolsPreviewSection.tsx # Homepage tools grid
│       │   ├── CaseStudiesPreview.tsx  # Homepage case studies preview
│       │   ├── ExploreSection.tsx      # Homepage explore section
│       │   └── SourcesPreview.tsx      # Homepage sources preview
│       ├── tools/
│       │   ├── MoneyVsGoodsDemo.tsx    # Interactive M2 vs CPI chart
│       │   ├── FractionalReserveDemo.tsx # Fractional reserve banking demo
│       │   ├── CantillonDemo.tsx       # Cantillon Effect visualization
│       │   ├── PurchasingPowerCalc.tsx  # Dollar purchasing power calculator
│       │   ├── MonetaryTimeline.tsx     # Timeline of monetary events
│       │   └── CaseStudyCard.tsx       # Case study display card
│       └── ui/
│           ├── JsonLd.tsx           # JSON-LD structured data components
│           └── PageShell.tsx        # Shared page wrapper
├── next.config.ts                   # Next.js config (static export)
├── tailwind.config.ts               # Tailwind configuration
├── tsconfig.json                    # TypeScript configuration
└── package.json                     # Dependencies
```

---

## SEO Implementation

Everything is in place and verified in Google Search Console:

- **Sitemap:** `/sitemap.xml` — auto-generated from `src/app/sitemap.ts`, covers all 12 pages with priorities
- **Robots.txt:** `/robots.txt` — allows all crawlers, points to sitemap
- **Metadata:** Full `<title>`, `<meta description>`, keywords on every page via Next.js Metadata API in `layout.tsx`
- **Open Graph:** OG image (1200x630), title, description, locale on every page
- **Twitter Cards:** `summary_large_image` card configured
- **Canonical URLs:** Set on all pages
- **JSON-LD Structured Data:** Multiple schema types across pages:
  - `WebSite` schema on homepage
  - `Organization` schema on homepage
  - `Article` schema on content pages
  - `BreadcrumbList` schema on all inner pages
  - `WebApplication` schema on tool pages
  - `FAQPage` schema where applicable
- **Google Search Console:** Domain property verified (auto-verified via GoDaddy DNS), sitemap submitted and indexed
- **Favicon set:** favicon.ico, favicon.png, apple-touch-icon.png all in `/public`

---

## Content Pages — Status

| Page | Route | Status |
|------|-------|--------|
| Homepage | `/` | Complete — hero, thesis preview, tools grid, case studies preview |
| The Core Thesis | `/thesis` | Complete |
| Money vs Goods | `/money-vs-goods` | Complete — full content + interactive MoneyVsGoodsDemo |
| How Money Gets Created | `/monetary-plumbing` | Complete — QE, deficit spending, shadow banking, zero reserves, Cantillon Effect + FractionalReserveDemo |
| Asset Inflation | `/asset-inflation` | Content may need review/expansion |
| Case Studies | `/case-studies` | Content may need review/expansion |
| Deep Dives | `/deep-dives` | Content may need review/expansion |
| Sources & Data | `/sources` | Content may need review/expansion |
| About | `/about` | Content may need review/expansion |
| Purchasing Power Calculator | `/tools/calculator` | Has PurchasingPowerCalc interactive component |
| Monetary Timeline | `/tools/timeline` | Has MonetaryTimeline interactive component |
| Case Study Viewer | `/tools/case-viewer` | Has CaseStudyCard component |

---

## Interactive Tools

All interactive tools are client-side React components with no external API dependencies:

1. **Money vs Goods Demo** (`MoneyVsGoodsDemo.tsx`) — Visualizes M2 money supply growth vs CPI, showing the gap between money creation and official inflation
2. **Fractional Reserve Demo** (`FractionalReserveDemo.tsx`) — Step-by-step visualization of how a single deposit multiplies through the banking system
3. **Cantillon Demo** (`CantillonDemo.tsx`) — Shows how new money benefits those closest to its creation point
4. **Purchasing Power Calculator** (`PurchasingPowerCalc.tsx`) — Calculate how much buying power a dollar has lost over time
5. **Monetary Timeline** (`MonetaryTimeline.tsx`) — Interactive timeline of key monetary policy events
6. **Case Study Card** (`CaseStudyCard.tsx`) — Display component for historical case studies

---

## Key Design Decisions

- **Zero external data APIs.** All data is embedded in the components. This ensures the site works forever without breaking dependencies.
- **No charting libraries.** All visualizations are built with raw SVG/CSS. No D3, no Chart.js, no Recharts.
- **Static export only.** The site is purely static HTML — no server, no database, no backend. This keeps hosting free on GitHub Pages and makes the site extremely fast.
- **Tailwind 4.** Uses the latest Tailwind CSS with the PostCSS plugin approach.
- **Dark theme.** The site uses a dark color scheme (`stone-900`/`stone-950` backgrounds) with warm accent colors.

---

## How to Develop Locally

```bash
git clone https://github.com/dcrypt-007/monetary-reality.git
cd monetary-reality
npm install
npm run dev
```

Site will be available at `http://localhost:3000`.

To test the production build:

```bash
npm run build
# Static files output to /out directory
npx serve out
```

---

## How to Deploy

Just push to the `main` branch. GitHub Actions handles the rest automatically.

```bash
git add .
git commit -m "Your changes"
git push origin main
```

The workflow takes about 1-2 minutes. Check status at: https://github.com/dcrypt-007/monetary-reality/actions

---

## Known Constraints (Static Export)

If you're adding new features, keep these in mind:

1. **No API routes** — can't create `/api/*` endpoints
2. **No server components that fetch data** — all data must be embedded or fetched client-side
3. **No `redirect()` or `rewrite()`** — use client-side navigation instead
4. **No dynamic image generation** — use static images in `/public`
5. **Route handlers need `export const dynamic = "force-static"`** — or the build will fail
6. **No `headers()` in next.config.ts** — security headers aren't supported in static export
7. **All images need `unoptimized: true`** — already set in next.config.ts

---

## Potential Next Steps

- Review and expand content on asset-inflation, case-studies, deep-dives, sources, and about pages
- Add more interactive visualizations (e.g., housing price vs income chart, gold vs dollar purchasing power)
- Add a blog or news section for ongoing monetary policy commentary
- Consider analytics (Plausible, Umami, or similar privacy-friendly options)
- Social media sharing optimization and content marketing
- Backlink building and content partnerships for SEO growth
