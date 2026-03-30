export type RowDetailStatus =
  | "available"
  | "en-route"
  | "break"
  | "offline"
  | "scheduled";

export type RowDetailMetric = {
  label: string;
  value: string;
  delta: string;
  trend: "up" | "down" | "stable";
  description: string;
};

export type RowDetailCheckpoint = {
  label: string;
  value: string;
  tone: "completed" | "scheduled" | "delayed";
};

export type RowDetailRecord = {
  id: string;
  asset: string;
  driver: string;
  corridor: string;
  status: RowDetailStatus;
  eta: string;
  revenue: string;
  currentJourney: string;
  lane: string;
  telemetry: string;
  nextInspection: string;
  notes: string;
  checkpoints: RowDetailCheckpoint[];
};

export const rowDetailMetrics: RowDetailMetric[] = [
  {
    label: "Rows with drilldown",
    value: "24",
    delta: "+6",
    trend: "up",
    description: "Records exposing operational context without leaving the grid.",
  },
  {
    label: "Pinned corridors",
    value: "08",
    delta: "Stable",
    trend: "stable",
    description: "Priority zones holding dedicated detail cards under each row.",
  },
  {
    label: "Ready for review",
    value: "91%",
    delta: "+2.4%",
    trend: "up",
    description: "Expanded-row content passing the latest operational QA checklist.",
  },
];

export const rowDetailRows: RowDetailRecord[] = [
  {
    id: "TX-204",
    asset: "Mercedes EQV Executive",
    driver: "Khalid Ahmed",
    corridor: "Heathrow corridor",
    status: "en-route",
    eta: "06 min",
    revenue: "GBP 88.20",
    currentJourney: "Heathrow T5 -> Canary Wharf",
    lane: "Terminal 5 premium lane",
    telemetry: "Stable heartbeat, last ping 45 sec ago",
    nextInspection: "03 Apr 2026",
    notes:
      "Pinned to the airport concierge pool with luggage assist and reduced idle threshold for evening arrival banks.",
    checkpoints: [
      { label: "Driver brief", value: "Confirmed 14:48", tone: "completed" },
      { label: "Airport pass", value: "Renews in 5 days", tone: "scheduled" },
      { label: "Charge reserve", value: "Below target by 8%", tone: "delayed" },
    ],
  },
  {
    id: "TX-188",
    asset: "Tesla Model Y Long Range",
    driver: "Mia Doyle",
    corridor: "Canary Wharf",
    status: "available",
    eta: "Ready now",
    revenue: "GBP 52.40",
    currentJourney: "Standby for premium city pickups",
    lane: "Docklands priority rank",
    telemetry: "Telemetry synced, battery draw forecast aligned",
    nextInspection: "09 Apr 2026",
    notes:
      "Configured for finance-district transfers with short-turn reservations and high-frequency document checks.",
    checkpoints: [
      { label: "Last sanitisation", value: "12 min ago", tone: "completed" },
      { label: "Document pack", value: "Ready for next rider", tone: "completed" },
      { label: "Standby reassignment", value: "Pending after 16:30", tone: "scheduled" },
    ],
  },
  {
    id: "TX-099",
    asset: "BMW i5 Touring",
    driver: "Jon Clarke",
    corridor: "South Bank",
    status: "break",
    eta: "Back in 12 min",
    revenue: "GBP 41.00",
    currentJourney: "Operator reset before theatre egress window",
    lane: "Waterloo bridge standby",
    telemetry: "Heartbeat stable with pause flag set",
    nextInspection: "18 Apr 2026",
    notes:
      "Useful example for mid-shift pause states where the expanded row carries actionable notes and readiness checks.",
    checkpoints: [
      { label: "Driver rest timer", value: "Ends 15:32", tone: "scheduled" },
      { label: "Traffic watch", value: "Bridge congestion elevated", tone: "delayed" },
      { label: "Next passenger brief", value: "Prepared", tone: "completed" },
    ],
  },
  {
    id: "TX-061",
    asset: "Mercedes V-Class XL",
    driver: "Priya Grant",
    corridor: "Paddington",
    status: "offline",
    eta: "Workshop 15:30",
    revenue: "GBP 0.00",
    currentJourney: "Scheduled workshop handoff",
    lane: "West depot intake",
    telemetry: "Offline by workshop flag",
    nextInspection: "Today 15:30",
    notes:
      "Ideal for destructive or maintenance workflows where the row expands into diagnosis, approvals, and handoff details.",
    checkpoints: [
      { label: "Fault intake", value: "Brake sensor review", tone: "scheduled" },
      { label: "Replacement vehicle", value: "Not yet assigned", tone: "delayed" },
      { label: "Customer impact note", value: "Prepared for dispatch", tone: "completed" },
    ],
  },
];

export const rowDetailUsageNotes = [
  {
    label: "Best fit",
    value: "Dense operational lists",
    detail:
      "Use when users need more context than a flat row can hold, but should stay in the table instead of navigating away.",
  },
  {
    label: "Good for",
    value: "Bookings, vehicles, drivers",
    detail:
      "Particularly strong for transport screens where every row needs route, compliance, or incident context.",
  },
  {
    label: "Avoid when",
    value: "Rows become full pages",
    detail:
      "If the detail content turns into an editor or full workflow, send users to a Resource Detail page instead.",
  },
];
