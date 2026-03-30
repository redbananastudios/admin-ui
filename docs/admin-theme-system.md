# Red Taxi Admin Theme System

## Visual Principles

This admin styling foundation is built to feel like a premium transport and dispatch control surface:

- dark-first operational mood with layered graphite surfaces
- soft, crisp light mode using clean neutrals instead of startup-white defaults
- restrained orange-red as the primary action and alert accent
- compact but breathable spacing for data-dense screens
- strong hierarchy through typography, contrast, borders, and panel elevation
- consistent shell, panel, table, and form styling across all admin pages

The target reference was a high-end transportation SaaS similar in tone to TranGo:

- serious, modern, and enterprise-ready
- not playful
- not pastel
- not glass-heavy
- not generic shadcn defaults

## Palette Direction

### Dark palette

- background: deep graphite / near-black blue-gray
- panels: slightly lifted charcoal surfaces
- borders: muted steel borders with low but visible separation
- text: cool off-white with softened secondary copy
- accent: transport red used deliberately for actions, highlighted states, and critical attention points

### Light palette

- background: soft neutral gray with subtle cool undertones
- panels: white and near-white layered surfaces
- borders: clean soft-gray separation, never harsh black outlines
- text: dark slate foreground with subdued secondary text
- accent: same orange-red family as dark mode so both themes feel like the same product

## Semantic Token Mapping

All visual decisions flow through `src/app/globals.css`.

Core shadcn-compatible tokens:

- `--background`
- `--foreground`
- `--card`
- `--card-foreground`
- `--popover`
- `--popover-foreground`
- `--primary`
- `--primary-foreground`
- `--secondary`
- `--secondary-foreground`
- `--muted`
- `--muted-foreground`
- `--accent`
- `--accent-foreground`
- `--destructive`
- `--destructive-foreground`
- `--border`
- `--input`
- `--ring`
- `--radius`

Admin-specific semantic tokens:

- `--header-background`
- `--header-foreground`
- `--panel-background`
- `--panel-foreground`
- `--panel-muted`
- `--surface-1`
- `--surface-2`
- `--surface-3`
- `--table-header`
- `--table-row-hover`
- `--sidebar-background`
- `--sidebar-foreground`
- `--sidebar-border`
- `--sidebar-active-background`
- `--sidebar-active-foreground`
- `--success`
- `--warning`
- `--info`
- `--shadow-soft`
- `--shadow-panel`

## shadcn/ui Restyling Approach

The project uses shadcn/ui as the base component library. The goal is not to replace it, but to theme it into a transport-focused admin system.

Restyled primitives include:

- `Button`
- `Input`
- `Textarea`
- `Select`
- `Dropdown Menu`
- `Dialog`
- `AlertDialog`
- `Sheet`
- `Popover`
- `Card`
- `Chart`
- `Table`
- `Badge`
- `Tabs`
- `Checkbox`
- `Switch`
- `Tooltip`
- `Separator`
- `Skeleton`

Key styling decisions:

- buttons are more solid, slightly heavier, and more deliberate than default shadcn
- inputs use soft panel surfaces with subtle elevation instead of transparent fields
- cards read as operational panels with shadow depth and low-contrast borders
- tables use distinct headers, strong row rhythm, and hover states tuned for data screens
- overlays inherit the same panel language as the dashboard instead of feeling like a separate UI

## Shell and Wrapper Components

### Shell components

- `AppShell`
- `AppSidebar`
- `SidebarNavItem`
- `AppHeader`
- `PageContainer`
- `PageHeader`
- `SectionCard`

### Thin wrapper layer

- `AppCard`
- `StatCard`
- `StatusBadge`
- `DataTableShell`
- `FilterBar`
- `EmptyState`
- `RowDetailTable`
- `src/components/ui/chart.tsx` for real chart rendering
- `src/components/ui/calendar.tsx`, `src/components/ui/date-picker.tsx`, and `src/components/ui/date-range-picker.tsx` for themed date selection
- `src/components/ui/alert-dialog.tsx` for destructive confirmations
- `src/components/theme/app-toaster.tsx` for Red Taxi-styled toast feedback

These wrappers are intentionally thin and should stay thin. They compose shadcn components and theme tokens rather than replacing the base UI model.

### Higher-level page patterns

- `ResourceListPage`
- `ResourceDetailPage`
- `ResourceFormPage`
- `KpiOverviewPage`
- `RowDetailPatternPage`
- `SearchStatusToolbar`
- `SearchDateRangeToolbar`
- `BulkActionToolbar`

These are reusable page-shape starters for API-driven admin screens. They should be used as starting points, then adapted to real schemas without changing the surrounding Red Taxi shell language.

## Usage Rules

- use semantic tokens, not random hardcoded colors
- prefer `AppCard` or `SectionCard` for dashboard panels
- prefer `StatusBadge` for operational status chips
- prefer `DataTableShell` for admin tables
- use `PageHeader` for page intro structure
- prefer the registry page patterns for API-backed list, detail, form, and KPI screens before inventing a new layout
- prefer `DateRangePicker` for reporting and booking date filters instead of native range workarounds
- use `AlertDialog` for destructive actions and `toast` through `AppToaster` for mutation feedback
- keep pages thin by moving repeated patterns into wrapper components
- keep shell chrome consistent across all future admin routes

## What To Avoid

- do not hardcode arbitrary hex values in feature components
- do not introduce a second spacing system page-by-page
- do not add one-off shadows or border colors outside the token system
- do not rebuild shadcn primitives when styling or composition is enough
- do not make light mode look like a different product
- do not overuse the red accent; reserve it for action, focus, and operational emphasis

## Future Page Guidance

When adding new pages:

- start from `PageHeader`
- structure content using `SectionCard` and `AppCard`
- use `FilterBar` for search and filter rows
- use `StatusBadge` for all statuses and health markers
- keep data sections aligned to the same panel spacing and table rhythm established by the dashboard and style guide

This keeps the admin UI close to the transport control-room feel without creating a large custom framework.
