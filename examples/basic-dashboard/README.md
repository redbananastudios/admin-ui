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

## Routes

- `/` redirects to `/dashboard`
- `/dashboard` basic Red Taxi dashboard
- `/style-guide` visual QA page

## Run Locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).
