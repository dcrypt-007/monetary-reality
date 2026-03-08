# Architecture — Monetary Reality

## Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| Framework | Next.js 15 (App Router) | File-based routing, server components, excellent DX |
| Language | TypeScript | Type safety, better IDE support, fewer runtime errors |
| Styling | Tailwind CSS v4 | Utility-first, no CSS bloat, rapid iteration |
| Deployment | TBD (Vercel recommended) | Zero-config deployment for Next.js |

No database, CMS, or authentication at this stage. Content lives in the codebase as components and will be extracted to structured data files as the content library grows.

## Folder Structure

```
monetary-reality/
├── docs/                          # Project documentation
│   ├── PROJECT_OVERVIEW.md
│   ├── ARCHITECTURE.md
│   ├── CONTENT_STRATEGY.md
│   └── NEXT_STEPS.md
├── public/
│   └── images/                    # Static assets (logos, OG images, etc.)
├── src/
│   ├── app/                       # Next.js App Router pages
│   │   ├── layout.tsx             # Root layout (header + footer wrap)
│   │   ├── page.tsx               # Homepage
│   │   ├── globals.css            # Global styles + Tailwind import
│   │   ├── thesis/
│   │   ├── money-vs-goods/
│   │   ├── monetary-plumbing/
│   │   ├── asset-inflation/
│   │   ├── case-studies/
│   │   ├── deep-dives/
│   │   ├── sources/
│   │   ├── about/
│   │   └── tools/
│   │       ├── simulator/         # Money vs Goods Simulator
│   │       ├── calculator/        # Purchasing Power Calculator
│   │       ├── timeline/          # Monetary Expansion Timeline
│   │       └── case-viewer/       # Collapse Case Study Viewer
│   ├── components/
│   │   ├── layout/                # Header, Footer, Navigation
│   │   ├── sections/              # Homepage section components
│   │   ├── charts/                # Reusable chart components (future)
│   │   ├── tools/                 # Interactive tool components (future)
│   │   └── ui/                    # Shared UI primitives (PageShell, etc.)
│   ├── content/
│   │   ├── case-studies/          # Structured case study data (future)
│   │   └── explainers/            # Structured explainer content (future)
│   ├── data/                      # Static datasets (JSON/CSV for charts)
│   └── lib/                       # Utility functions, data fetching helpers
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
├── .gitignore
└── README.md
```

## Component Strategy

### Page Components (`src/app/*/page.tsx`)
Each route has a `page.tsx` that serves as the entry point. Pages compose section components and pass data down. Pages are server components by default.

### Section Components (`src/components/sections/`)
Large visual sections of the homepage or other pages. These are modular and can be rearranged or reused.

### UI Components (`src/components/ui/`)
Small, reusable primitives. Currently includes `PageShell` — a consistent page wrapper with title, subtitle, and content area.

### Layout Components (`src/components/layout/`)
Header and Footer. These wrap every page via the root `layout.tsx`.

### Chart Components (`src/components/charts/`) — Future
Reusable chart wrappers. When we add a charting library (likely Recharts or D3), individual chart types will live here.

### Tool Components (`src/components/tools/`) — Future
Interactive tool logic. Each tool page in `app/tools/` will import its core logic from here, keeping pages thin and tools reusable.

## Design Decisions

1. **App Router over Pages Router** — App Router is the future of Next.js. Server components reduce client JS by default.

2. **No charting library yet** — Adding Recharts or D3 before we have real data to chart would be premature. The architecture has a clear place for it when ready.

3. **No CMS yet** — Content currently lives in components. When content volume grows, we can extract to MDX files, JSON, or a headless CMS without restructuring.

4. **No database** — Static data and client-side interactivity are sufficient for the MVP. A database adds complexity with no current benefit.

5. **Tailwind v4** — Using the latest version with the new CSS-first configuration. Lighter, faster, simpler config.

## Future Extensibility

- **Adding charts**: Install Recharts/D3, create components in `src/components/charts/`, import into pages
- **Adding data**: Place JSON/CSV in `src/data/`, create loader functions in `src/lib/`
- **Adding content**: Start with MDX in `src/content/`, or connect a headless CMS later
- **Adding interactivity**: Build tool logic in `src/components/tools/`, import into tool pages
- **Adding API routes**: Use `src/app/api/` when server-side processing is needed
