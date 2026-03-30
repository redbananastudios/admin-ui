# Basic Dashboard Example

This folder is a separate consumer app that installs the Red Taxi dashboard foundation from the GitHub-hosted shadcn registry.

## Registry Source

The app is configured to use:

```json
{
  "registries": {
    "@redtaxi": "https://raw.githubusercontent.com/redbananastudios/admin-ui/main/public/r/{name}.json"
  }
}
```

## What Was Installed

This example was created with shadcn and then populated from the registry with:

```bash
npx shadcn@latest add @redtaxi/redtaxi-dashboard-starter @redtaxi/redtaxi-style-guide -y -o
```

The API-ready pattern routes in this example were then added from:

```bash
npx shadcn@latest add @redtaxi/redtaxi-resource-list-page @redtaxi/redtaxi-resource-detail-page @redtaxi/redtaxi-resource-form-page @redtaxi/redtaxi-kpi-overview-page -y -o
```

This example also includes the current Red Taxi utility primitives for:

- destructive confirmations via `AlertDialog`
- mutation feedback via `AppToaster` and `sonner`
- booking/report filters via `DateRangePicker`

## Routes

- `/` redirects to `/dashboard`
- `/dashboard` basic Red Taxi dashboard
- `/style-guide` visual QA page
- `/patterns/resource-list` reusable collection page
- `/patterns/resource-detail` reusable detail page
- `/patterns/resource-form` reusable create/edit page
- `/patterns/kpi-overview` reusable KPI reporting page

## Run Locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).
