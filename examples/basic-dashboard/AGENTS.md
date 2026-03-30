<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes - APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Basic Dashboard Consumer Guide

This folder is a consumer app for the Red Taxi admin registry.

## Read First

- `README.md`
- `../README.md`
- `../docs/ai-dashboard-build-guide.md`
- `../docs/shadcn-registry-usage.md`

## Primary Rule

Do not redesign this sample app.

Treat it as a proof that the Red Taxi registry installs cleanly into another project.

## Use The Installed System

- Reuse the components already installed in `src/components/ui` and `src/components/admin`.
- Keep the same red theme and shell treatment.
- Use `AlertDialog` for destructive confirms and `toast` with `AppToaster` for mutation feedback.
- Use `DateRangePicker` for range filters instead of native browser date inputs.
- Prefer the installed pattern routes for new API-backed screens:
  - `/patterns/resource-list`
  - `/patterns/resource-detail`
  - `/patterns/resource-form`
  - `/patterns/kpi-overview`
  - `/patterns/row-detail`

## Validation

Before finishing work here, run:

```bash
npm run lint
npm run build
```
