<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes - APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Red Taxi Admin UI Agent Guide

This repository is the source of truth for the Red Taxi admin design system, registry, and reusable dashboard patterns.

## Read First

Before changing UI code, read these files:

- `docs/ai-dashboard-build-guide.md`
- `docs/admin-theme-system.md`
- `docs/shadcn-registry-usage.md`
- `README.md`

If the task is about the sample consumer app, also read:

- `examples/basic-dashboard/README.md`

## Primary Rule

Do not redesign the product.

Extend the existing Red Taxi system so new screens look native beside the current dashboard, style guide, and published pattern routes.

## Source Of Truth

The current Red Taxi look and feel is defined by:

- `src/app/globals.css`
- `src/components/ui`
- `src/components/admin`
- `src/components/theme`
- `src/lib/navigation.ts`
- `registry.json`
- `public/r`

The reusable page patterns are:

- `src/components/admin/resource-list-page.tsx`
- `src/components/admin/resource-detail-page.tsx`
- `src/components/admin/resource-form-page.tsx`
- `src/components/admin/kpi-overview-page.tsx`
- `src/components/admin/filter-toolbar-presets.tsx`
- `src/components/admin/row-detail-table.tsx`
- `src/components/ui/alert-dialog.tsx`
- `src/components/ui/date-range-picker.tsx`
- `src/components/theme/app-toaster.tsx`

## Styling Guardrails

- Keep the primary brand/action color red.
- Do not introduce new brand colors.
- Do not hardcode random hex values in feature components.
- Do not rebuild shadcn primitives when composition is enough.
- Do not replace the shell layout, surface hierarchy, or panel rhythm casually.
- Keep dark mode and light mode feeling like the same product.
- Prefer semantic tokens and existing wrappers over ad hoc styling.
- Use `AlertDialog` for destructive actions instead of improvised modals.
- Use `DateRangePicker` instead of native date-range controls.
- Use `toast` with the installed `AppToaster` for mutation feedback.

## Preferred Build Flow

When adding new admin UI inside this repo:

1. Reuse the existing Red Taxi wrappers and patterns.
2. Map the feature to the closest existing page shape.
3. Add routes under `src/app/(dashboard)/...`.
4. Update `src/lib/navigation.ts` when the page should appear in navigation.
5. Compare the result against `/`, `/style-guide`, and the pattern routes.

API-to-page mapping:

- collection endpoint -> `ResourceListPage`
- single-record endpoint -> `ResourceDetailPage`
- create/edit endpoint -> `ResourceFormPage`
- metrics/reporting endpoint -> `KpiOverviewPage`
- list endpoint with inline context -> `RowDetailTable`

## Registry Guidance

This repo publishes a shadcn registry.

Use the template URL in `components.json`:

```json
{
  "registries": {
    "@redtaxi": "https://raw.githubusercontent.com/redbananastudios/admin-ui/main/public/r/{name}.json"
  }
}
```

`{name}` is a placeholder for shadcn config, not a literal browser URL.

Useful concrete registry files:

- `https://raw.githubusercontent.com/redbananastudios/admin-ui/main/public/r/registry.json`
- `https://raw.githubusercontent.com/redbananastudios/admin-ui/main/public/r/redtaxi-dashboard-starter.json`
- `https://raw.githubusercontent.com/redbananastudios/admin-ui/main/public/r/redtaxi-resource-list-page.json`

## When Working In Another Project

If the task is to build a new admin using this system in another repo:

- install the Red Taxi registry blocks instead of copying random files manually
- use `@redtaxi/redtaxi-dashboard-starter` and `@redtaxi/redtaxi-style-guide` first
- add `@redtaxi/redtaxi-resource-list-page`, `@redtaxi/redtaxi-resource-detail-page`, `@redtaxi/redtaxi-resource-form-page`, and `@redtaxi/redtaxi-kpi-overview-page` as needed
- preserve the Red Taxi shell and theme instead of restyling it

## What To Avoid

- Do not use code from unrelated legacy repos as a shortcut.
- Do not add a second design system on top of this one.
- Do not invent new spacing rules page by page.
- Do not let default shadcn styling leak back into the app.
- Do not ship new pages without checking dark mode and light mode.

## Validation

Before finishing UI work, run:

```bash
npm run lint
npm run build
```

If you touch the registry or registry-backed patterns, also run:

```bash
npm run registry:build
```

If you change the sample consumer app, also validate:

```bash
cd examples/basic-dashboard
npm run lint
npm run build
```

## Short Instruction For Future Agents

Safest default instruction:

"Extend the existing Red Taxi admin system. Do not restyle it. Reuse the current tokens, shell, wrappers, and registry-backed page patterns so the result looks indistinguishable from the current dashboard and style guide."
