# AI Dashboard Build Guide

Use this guide when another AI needs to build new admin pages in this repository while preserving the exact Red Taxi dashboard style.

This is not a greenfield UI project.

The job is to extend the existing admin system without drifting away from the established shell, palette, spacing, and component language.

When working from the published shadcn registry instead of this source repo, prefer these installable blocks:

- `@redtaxi/redtaxi-dashboard-starter`
- `@redtaxi/redtaxi-style-guide`
- `@redtaxi/redtaxi-resource-list-page`
- `@redtaxi/redtaxi-resource-detail-page`
- `@redtaxi/redtaxi-kpi-overview-page`

## Primary Rule

Do not redesign the dashboard from scratch.

Build on top of the existing foundation in this repo:

- `src/app/globals.css`
- `src/components/ui`
- `src/components/admin`
- `src/components/theme`
- `src/app/(dashboard)/layout.tsx`
- `src/lib/navigation.ts`
- `docs/admin-theme-system.md`

If a new page does not look like it belongs next to `/` and `/style-guide`, it is wrong.

## Visual Target

The intended style is a premium transport and dispatch SaaS interface similar in feel to TranGo:

- dark-first operational atmosphere
- deep graphite surfaces
- restrained orange-red brand accent
- subtle borders
- dense but readable spacing
- rounded panels
- serious enterprise tone
- premium but not flashy

The dashboard should feel like a control room, not a marketing site and not a generic SaaS template.

## Exact Style Rules

Follow these rules strictly:

- keep the main accent red by using the existing `--primary` token
- do not introduce new brand colors
- do not hardcode random hex values inside feature components
- do not replace shadcn primitives when composition is enough
- do not invent a new spacing scale
- do not make light mode feel like a different product
- do not switch to blue, purple, teal, or pastel accents for primary actions
- do not flatten cards into plain white or plain black boxes
- do not remove the layered surface treatment and subtle shadows

Keep warning, success, info, and destructive semantics intact:

- primary brand/action: red
- warning: amber
- success: green
- info: blue
- destructive: red destructive tone

## Files That Define The Style

### Theme and tokens

The full palette and surface system live in:

- `src/app/globals.css`

Do not bypass these tokens. Reuse:

- `--background`
- `--foreground`
- `--panel-background`
- `--surface-1`
- `--surface-2`
- `--surface-3`
- `--border`
- `--primary`
- `--sidebar-background`
- `--sidebar-active-background`
- `--table-header`
- `--table-row-hover`

### Base UI components

These are already restyled and should be reused:

- `src/components/ui/button.tsx`
- `src/components/ui/input.tsx`
- `src/components/ui/select.tsx`
- `src/components/ui/table.tsx`
- `src/components/ui/card.tsx`
- `src/components/ui/dialog.tsx`
- `src/components/ui/dropdown-menu.tsx`
- `src/components/ui/tabs.tsx`
- `src/components/ui/badge.tsx`

### Admin composition layer

These define the admin look and page rhythm:

- `src/components/admin/app-shell.tsx`
- `src/components/admin/app-sidebar.tsx`
- `src/components/admin/app-header.tsx`
- `src/components/admin/page-container.tsx`
- `src/components/admin/page-header.tsx`
- `src/components/admin/section-card.tsx`
- `src/components/admin/app-card.tsx`
- `src/components/admin/stat-card.tsx`
- `src/components/admin/status-badge.tsx`
- `src/components/admin/data-table-shell.tsx`
- `src/components/admin/filter-bar.tsx`
- `src/components/admin/empty-state.tsx`

## How To Build A New Dashboard Page

If the work matches one of these shapes, start from the existing pattern instead of inventing layout:

- collection endpoint or list screen -> `ResourceListPage`
- single-record screen -> `ResourceDetailPage`
- reporting or summary screen -> `KpiOverviewPage`

When creating a new admin page:

1. Put the route under `src/app/(dashboard)/...`
2. Let the route inherit `src/app/(dashboard)/layout.tsx`
3. Start with `PageHeader`
4. Build sections with `SectionCard` or `AppCard`
5. Use `StatCard` for metrics
6. Use `DataTableShell` for tables
7. Use `StatusBadge` for status chips
8. Use `FilterBar` for search/filter rows
9. Use shadcn form primitives only through the restyled local components in `src/components/ui`
10. Compare visually against `/` and `/style-guide`

## Page Composition Blueprint

Most pages should follow this structure:

```tsx
import { PageHeader } from "@/components/admin/page-header";
import { SectionCard } from "@/components/admin/section-card";
import { DataTableShell } from "@/components/admin/data-table-shell";

export default function ExamplePage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Operations"
        title="Page title"
        description="Short operational summary."
      />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {/* StatCard components */}
      </section>

      <section className="grid gap-4 xl:grid-cols-[minmax(0,1.5fr)_minmax(320px,0.85fr)]">
        <SectionCard title="Primary panel">
          Main content
        </SectionCard>

        <SectionCard title="Secondary panel">
          Supporting content
        </SectionCard>
      </section>

      <DataTableShell title="Records">
        Table content
      </DataTableShell>
    </div>
  );
}
```

## Use Existing Pages As References

Use these as the visual source of truth:

- `/` implemented in `src/components/admin/dashboard-overview.tsx`
- `/style-guide` implemented in `src/components/admin/style-guide-showcase.tsx`

If unsure how a surface should look, copy the existing pattern from those files rather than inventing a new one.

## Navigation Rules

Page titles, subtitles, and sidebar items are managed in:

- `src/lib/navigation.ts`

When adding a real page:

- add the new route to `APP_NAV_SECTIONS`
- add matching route metadata to `PAGE_META`
- keep labels concise and operations-oriented

## What Another AI Must Not Change Casually

Avoid changing these unless the task explicitly requires a design-system update:

- semantic token names in `globals.css`
- the red primary accent
- surface shadows and border softness
- sidebar visual treatment
- page header spacing rhythm
- table styling language
- shell layout structure

If a new page needs a new pattern, compose it from the existing building blocks before making new primitives.

## Visual QA Checklist

Before finishing a page, compare it against the existing dashboard and confirm:

- dark mode still looks premium and operational
- light mode still looks like the same product
- red is used for brand/action emphasis, not everywhere
- tables match the existing dashboard table style
- cards match the existing panel style
- the page looks native to the current shell
- no random colors were hardcoded
- no generic default shadcn styling leaked through

## Prompt Template For Another AI

Use this prompt when asking another AI to build a new page in this repo:

```md
Build this page inside the existing Red Taxi admin UI foundation.

Important rules:
- Do not redesign the app.
- Reuse the existing theme tokens in `src/app/globals.css`.
- Reuse the existing components in `src/components/ui` and `src/components/admin`.
- Match the same visual language as `/` and `/style-guide`.
- Keep the current red primary accent and transport-operations feel.
- Use `PageHeader`, `SectionCard`, `AppCard`, `StatCard`, `DataTableShell`, `FilterBar`, and `StatusBadge` where appropriate.
- Do not hardcode random colors.
- Do not introduce a new design system.

Before finishing, compare the page visually against the current dashboard and style guide to ensure it feels like the same product.
```

## Short Version

If another AI is building in this repo, the safest instruction is:

"Extend the existing admin system. Do not restyle it. Reuse the current Red Taxi shell, tokens, wrappers, and shadcn overrides so the new page looks indistinguishable from the existing dashboard."
