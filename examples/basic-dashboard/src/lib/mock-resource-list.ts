export type ResourceListMetric = {
  label: string;
  value: string;
  delta: string;
  trend: "up" | "down" | "stable";
  description: string;
};

export type ResourceRow = {
  id: string;
  vehicle: string;
  driver: string;
  zone: string;
  status: "available" | "en-route" | "break" | "offline";
  utilization: string;
  nextWindow: string;
};

export type AttentionItem = {
  title: string;
  detail: string;
  tone: "scheduled" | "delayed" | "completed";
};

export const resourceListMetrics: ResourceListMetric[] = [
  {
    label: "Active vehicles",
    value: "138",
    delta: "+5.2%",
    trend: "up",
    description: "Connected to dispatch and ready for assignment",
  },
  {
    label: "Drivers assigned",
    value: "122",
    delta: "+8",
    trend: "up",
    description: "Operators currently attached to vehicle records",
  },
  {
    label: "Utilization rate",
    value: "78%",
    delta: "Stable",
    trend: "stable",
    description: "Average duty-cycle utilization over the current shift",
  },
  {
    label: "Service due",
    value: "09",
    delta: "2 cleared",
    trend: "stable",
    description: "Assets needing workshop attention this week",
  },
];

export const resourceStatusOptions = [
  { label: "All statuses", value: "all" },
  { label: "Available", value: "available" },
  { label: "En route", value: "en-route" },
  { label: "Break", value: "break" },
  { label: "Offline", value: "offline" },
];

export const resourceSegmentOptions = [
  { label: "All segments", value: "all" },
  { label: "Airport transfer", value: "airport" },
  { label: "Executive fleet", value: "executive" },
  { label: "City dispatch", value: "city" },
];

export const resourceRows: ResourceRow[] = [
  {
    id: "TX-204",
    vehicle: "Mercedes EQV Executive",
    driver: "Khalid Ahmed",
    zone: "Heathrow corridor",
    status: "en-route",
    utilization: "86%",
    nextWindow: "Inspection in 3 days",
  },
  {
    id: "TX-188",
    vehicle: "Tesla Model Y Long Range",
    driver: "Mia Doyle",
    zone: "Canary Wharf",
    status: "available",
    utilization: "74%",
    nextWindow: "Available now",
  },
  {
    id: "TX-099",
    vehicle: "BMW i5 Touring",
    driver: "Jon Clarke",
    zone: "South Bank",
    status: "break",
    utilization: "68%",
    nextWindow: "Back in 12 min",
  },
  {
    id: "TX-061",
    vehicle: "Mercedes V-Class XL",
    driver: "Priya Grant",
    zone: "Paddington",
    status: "offline",
    utilization: "0%",
    nextWindow: "Workshop handoff at 15:30",
  },
  {
    id: "TX-145",
    vehicle: "Audi Q8 e-tron",
    driver: "Owen Francis",
    zone: "London City",
    status: "available",
    utilization: "81%",
    nextWindow: "Priority request pool",
  },
  {
    id: "TX-212",
    vehicle: "Mercedes EQS Saloon",
    driver: "Lara Gibson",
    zone: "Mayfair",
    status: "en-route",
    utilization: "89%",
    nextWindow: "Drop complete in 9 min",
  },
];

export const attentionItems: AttentionItem[] = [
  {
    title: "Registration expiry cluster",
    detail: "Three executive vehicles need document renewals before Friday cutoff.",
    tone: "delayed",
  },
  {
    title: "Airport lane optimization live",
    detail: "Recent reassignment increased Heathrow pickup capacity by 6 vehicles.",
    tone: "completed",
  },
  {
    title: "Workshop queue prebooked",
    detail: "Morning maintenance windows are staged for the next two offline assets.",
    tone: "scheduled",
  },
];

export const coverageNotes = [
  {
    label: "Prime coverage",
    value: "West London",
    detail: "Highest available executive capacity for the next 45 minutes.",
  },
  {
    label: "Pressure watch",
    value: "City airport",
    detail: "Two delayed turnarounds need reassignment cover after 17:00.",
  },
  {
    label: "Standby reserve",
    value: "14 drivers",
    detail: "Eligible for overflow dispatch if surge mode is enabled.",
  },
];
