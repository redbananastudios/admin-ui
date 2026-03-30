# Admin UI

Premium transport-focused admin UI foundation built with Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui, and `next-themes`.

This repository contains:

- a dark-first semantic token system with polished light mode
- a reusable admin shell with sidebar and top header
- restyled shadcn/ui primitives for a premium operations dashboard feel
- real chart support via shadcn charts and Recharts
- thin wrapper components for common admin patterns
- a GitHub-hosted shadcn registry for reusable Red Taxi installs
- a style guide route for visual QA
- a mock dashboard route for layout and theme validation
- higher-level page patterns for list, detail, and KPI reporting screens
- a separate sample consumer app in `examples/basic-dashboard`

## Stack

- Next.js
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- next-themes
- class-variance-authority
- lucide-react

## Routes

- `/` mock dashboard
- `/style-guide` visual QA page
- `/patterns/resource-list` API collection pattern
- `/patterns/resource-detail` API detail pattern
- `/patterns/kpi-overview` KPI reporting pattern

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Reusing The Foundation

The core reusable pieces live in:

- `src/app/globals.css`
- `src/components/ui`
- `src/components/admin`
- `src/components/theme`
- `src/lib/navigation.ts`
- `docs/admin-theme-system.md`
- `docs/shadcn-registry-usage.md`

## shadcn Registry

The reusable registry endpoint is built from `registry.json` into `public/r`.

Build the registry files with:

```bash
npm run registry:build
```

Registry URL template:

```text
https://raw.githubusercontent.com/redbananastudios/admin-ui/main/public/r/{name}.json
```

`{name}` is a shadcn placeholder. Use that exact form inside `components.json`, but use a concrete file name when opening the registry in a browser, for example:

```text
https://raw.githubusercontent.com/redbananastudios/admin-ui/main/public/r/registry.json
https://raw.githubusercontent.com/redbananastudios/admin-ui/main/public/r/redtaxi-dashboard-starter.json
```

See `docs/shadcn-registry-usage.md` for install commands and MCP setup.

Available higher-level registry blocks:

- `@redtaxi/redtaxi-filter-toolbar-presets`
- `@redtaxi/redtaxi-resource-list-page`
- `@redtaxi/redtaxi-resource-detail-page`
- `@redtaxi/redtaxi-kpi-overview-page`

Chart support is included through `src/components/ui/chart.tsx` and the `recharts` dependency.

Use semantic tokens instead of hardcoded colors, and compose new pages from the existing shell and wrapper components.

## Validation

Before publish, the project was validated with:

```bash
npm run lint
npm run build
```
