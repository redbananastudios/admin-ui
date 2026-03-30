# Admin UI

Premium transport-focused admin UI foundation built with Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui, and `next-themes`.

This repository contains:

- a dark-first semantic token system with polished light mode
- a reusable admin shell with sidebar and top header
- restyled shadcn/ui primitives for a premium operations dashboard feel
- thin wrapper components for common admin patterns
- a style guide route for visual QA
- a mock dashboard route for layout and theme validation

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

Use semantic tokens instead of hardcoded colors, and compose new pages from the existing shell and wrapper components.

## Validation

Before publish, the project was validated with:

```bash
npm run lint
npm run build
```
