# Red Taxi shadcn Registry Usage

This repo now exposes a GitHub-hosted shadcn registry for the Red Taxi admin system.

## Important

Use a GitHub-hosted JSON endpoint, not the normal repository HTML page.

Recommended registry URL:

```text
https://raw.githubusercontent.com/redbananastudios/admin-ui/main/public/r/{name}.json
```

`{name}` is a placeholder used by shadcn. If you paste that exact string into a browser, it will 404.

Concrete working examples:

```text
https://raw.githubusercontent.com/redbananastudios/admin-ui/main/public/r/registry.json
https://raw.githubusercontent.com/redbananastudios/admin-ui/main/public/r/redtaxi-dashboard-starter.json
https://raw.githubusercontent.com/redbananastudios/admin-ui/main/public/r/redtaxi-resource-list-page.json
```

That URL works with:

- shadcn CLI
- shadcn MCP
- AI agents such as Codex or Claude that are using the shadcn MCP server

## Available Registry Items

- `@redtaxi/redtaxi-theme`
- `@redtaxi/redtaxi-ui`
- `@redtaxi/redtaxi-admin-shell`
- `@redtaxi/redtaxi-filter-toolbar-presets`
- `@redtaxi/redtaxi-dashboard-starter`
- `@redtaxi/redtaxi-style-guide`
- `@redtaxi/redtaxi-resource-list-page`
- `@redtaxi/redtaxi-resource-detail-page`
- `@redtaxi/redtaxi-resource-form-page`
- `@redtaxi/redtaxi-kpi-overview-page`

`@redtaxi/redtaxi-ui` now includes real chart support through shadcn charts and `recharts`, plus a themed calendar/date-picker layer through `react-day-picker`.

## Install Into A New App

1. Create a new Next.js app
2. Run `npx shadcn@latest init -d`
3. Add the registry to `components.json`
4. Install the starter items

Example:

```json
{
  "registries": {
    "@redtaxi": "https://raw.githubusercontent.com/redbananastudios/admin-ui/main/public/r/{name}.json"
  }
}
```

Then install:

```bash
npx shadcn@latest add @redtaxi/redtaxi-dashboard-starter @redtaxi/redtaxi-style-guide -y -o
```

To add the higher-level API-ready page patterns:

```bash
npx shadcn@latest add @redtaxi/redtaxi-resource-list-page @redtaxi/redtaxi-resource-detail-page @redtaxi/redtaxi-resource-form-page @redtaxi/redtaxi-kpi-overview-page -y -o
```

## Recommended Agent Workflow

For a new admin project:

1. install `@redtaxi/redtaxi-dashboard-starter`
2. install `@redtaxi/redtaxi-style-guide`
3. install the page pattern blocks that match your API surface
4. keep the style guide route as the visual QA source of truth
5. replace mock data with API-backed data
6. extend pages by composing the existing admin wrappers

The starter sets up:

- `/` as a redirect to `/dashboard`
- `/dashboard` as the main starter dashboard
- `/style-guide` as the visual QA route

The reusable page-pattern installs add:

- `/patterns/resource-list`
- `/patterns/resource-detail`
- `/patterns/resource-form`
- `/patterns/kpi-overview`

Use those patterns as the starting point for:

- `GET /vehicles`, `GET /drivers`, `GET /bookings` -> `@redtaxi/redtaxi-resource-list-page`
- `GET /vehicles/:id`, `GET /drivers/:id`, `GET /bookings/:id` -> `@redtaxi/redtaxi-resource-detail-page`
- `POST /vehicles`, `PUT /vehicles/:id`, `POST /drivers`, `PUT /drivers/:id` -> `@redtaxi/redtaxi-resource-form-page`
- KPI or reporting endpoints -> `@redtaxi/redtaxi-kpi-overview-page`

## MCP Setup

Use the official shadcn MCP server:

```toml
[mcp_servers.shadcn]
command = "npx"
args = ["shadcn@latest", "mcp"]
```

With that in place, an AI agent can be told:

- "Use the Red Taxi registry and install the dashboard starter"
- "Build a Drivers page using the existing Red Taxi shell and wrappers"
- "Keep the exact same Red Taxi style as the dashboard starter and style guide"

## Rules For AI Agents

- do not redesign the system
- do not swap the red primary accent
- do not add random colors
- do not rebuild shadcn primitives from scratch
- use the installed Red Taxi wrappers first
- compare all new pages visually against `/` and `/style-guide`
