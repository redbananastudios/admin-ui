export type DetailStatus = "available" | "en-route" | "offline";

export type DetailHighlight = {
  label: string;
  value: string;
  description: string;
};

export type DetailAlert = {
  title: string;
  detail: string;
  tone: "scheduled" | "delayed" | "completed";
};

export type DetailDocument = {
  name: string;
  owner: string;
  renewal: string;
  tone: "completed" | "scheduled" | "delayed";
};

export type AssignmentRow = {
  id: string;
  route: string;
  driver: string;
  status: "completed" | "scheduled" | "en-route";
  window: string;
  revenue: string;
};

export const resourceDetail = {
  id: "TX-204",
  model: "Mercedes EQV Executive",
  status: "available" as DetailStatus,
  summary:
    "Reusable detail-page pattern for any single resource record. Designed for vehicles, drivers, bookings, or infrastructure assets that need a rich main surface and a compact right rail.",
  assignedDriver: "Khalid Ahmed",
  region: "Heathrow corridor",
  registration: "LF26 RTX",
  vin: "W1V44781342570199",
  odometer: "42,180 km",
  battery: "81%",
  uptime: "99.2%",
  nextInspection: "03 Apr 2026",
  nextService: "09 Apr 2026",
  dispatchTier: "Executive airport transfer",
};

export const detailHighlights: DetailHighlight[] = [
  {
    label: "Dispatch tier",
    value: "Executive airport transfer",
    description: "Pinned to premium corridor pools and scheduled concierge runs.",
  },
  {
    label: "Availability window",
    value: "Ready in 04 min",
    description: "Current handoff is completing near Terminal 5 arrivals.",
  },
  {
    label: "Utilization trend",
    value: "+7.4%",
    description: "Improvement against the previous seven-day duty cycle.",
  },
];

export const detailAlerts: DetailAlert[] = [
  {
    title: "Telematics heartbeat stable",
    detail: "Primary location and battery signals are streaming without packet loss.",
    tone: "completed",
  },
  {
    title: "Inspection window approaching",
    detail: "Workshop prep notes should be confirmed before the Thursday morning run.",
    tone: "scheduled",
  },
  {
    title: "Charge dwell exceeded target",
    detail: "The last depot charge remained connected 18 minutes beyond the standard turnover window.",
    tone: "delayed",
  },
];

export const detailDocuments: DetailDocument[] = [
  {
    name: "Operator permit",
    owner: "Compliance",
    renewal: "Renewed 11 Jan 2026",
    tone: "completed",
  },
  {
    name: "Airport access pass",
    owner: "Dispatch",
    renewal: "Review due 04 Apr 2026",
    tone: "scheduled",
  },
  {
    name: "Insurance certificate",
    owner: "Finance",
    renewal: "Renewal blocked by insurer amendment",
    tone: "delayed",
  },
];

export const serviceTimeline = [
  {
    title: "Depot charge completed",
    detail: "Battery returned to 81% with preconditioning enabled for airport route readiness.",
    time: "Today, 14:12",
  },
  {
    title: "Cabin inspection passed",
    detail: "Interior prep, executive amenities, and passenger Wi-Fi checks confirmed.",
    time: "Today, 11:20",
  },
  {
    title: "Brake sensor recalibrated",
    detail: "Minor workshop intervention closed with no downtime carryover.",
    time: "Yesterday, 18:05",
  },
];

export const assignmentRows: AssignmentRow[] = [
  {
    id: "BK-4212",
    route: "Heathrow T5 -> Canary Wharf",
    driver: "Khalid Ahmed",
    status: "completed",
    window: "Today 13:10",
    revenue: "GBP 88.20",
  },
  {
    id: "BK-4217",
    route: "Mayfair -> Heathrow T3",
    driver: "Khalid Ahmed",
    status: "en-route",
    window: "Today 15:00",
    revenue: "GBP 71.40",
  },
  {
    id: "BK-4221",
    route: "Paddington -> London City",
    driver: "Reserve pool",
    status: "scheduled",
    window: "Today 17:30",
    revenue: "GBP 52.00",
  },
];
