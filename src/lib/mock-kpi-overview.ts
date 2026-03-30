export type KpiMetric = {
  label: string;
  value: string;
  delta: string;
  trend: "up" | "down" | "stable";
  description: string;
};

export type CorridorRow = {
  corridor: string;
  trips: string;
  onTime: string;
  yield: string;
  status: "completed" | "scheduled" | "delayed";
};

export type IncidentItem = {
  title: string;
  detail: string;
  time: string;
  tone: "scheduled" | "completed" | "delayed";
};

export const kpiMetrics: KpiMetric[] = [
  {
    label: "Completed trips",
    value: "1,482",
    delta: "+9.1%",
    trend: "up",
    description: "Week-over-week across airport and city transfer lanes",
  },
  {
    label: "On-time arrivals",
    value: "96.2%",
    delta: "+2.4%",
    trend: "up",
    description: "Measured against promised passenger arrival windows",
  },
  {
    label: "Average route margin",
    value: "23.8%",
    delta: "+1.1%",
    trend: "up",
    description: "Net operating margin after energy and duty costs",
  },
  {
    label: "Escalations opened",
    value: "11",
    delta: "-3",
    trend: "down",
    description: "Operator and customer-experience incidents this week",
  },
];

export const kpiPeriodOptions = [
  { label: "Last 7 days", value: "7d" },
  { label: "Last 30 days", value: "30d" },
  { label: "Current quarter", value: "quarter" },
];

export const kpiDemandCurve = [42, 51, 64, 58, 72, 79, 74, 88, 94, 85, 76, 82];

export const corridorPerformance: CorridorRow[] = [
  {
    corridor: "Heathrow -> Canary Wharf",
    trips: "214",
    onTime: "97.4%",
    yield: "GBP 91.20",
    status: "completed",
  },
  {
    corridor: "Mayfair -> Heathrow",
    trips: "166",
    onTime: "95.9%",
    yield: "GBP 84.60",
    status: "completed",
  },
  {
    corridor: "Paddington -> London City",
    trips: "128",
    onTime: "90.8%",
    yield: "GBP 58.40",
    status: "scheduled",
  },
  {
    corridor: "Canary Wharf -> Gatwick",
    trips: "94",
    onTime: "88.2%",
    yield: "GBP 109.10",
    status: "delayed",
  },
];

export const operationalIncidents: IncidentItem[] = [
  {
    title: "Airport queue normalized",
    detail: "Lane assignment changes restored terminal throughput and cleared the backlog.",
    time: "Today, 14:30",
    tone: "completed",
  },
  {
    title: "VIP corridor staffing staged",
    detail: "Reserve drivers are now allocated against the evening executive arrival bank.",
    time: "Today, 12:50",
    tone: "scheduled",
  },
  {
    title: "East corridor dwell above target",
    detail: "A series of late boarding handoffs pushed wait time above the threshold.",
    time: "Today, 11:20",
    tone: "delayed",
  },
];

export const fleetEfficiency = [
  {
    label: "Airport transfer lane",
    score: 92,
    detail: "Strong on-time performance and healthy premium-load density.",
  },
  {
    label: "Executive inner-city",
    score: 81,
    detail: "Solid conversion, though charge dwell is slightly above target.",
  },
  {
    label: "Corporate shuttle",
    score: 74,
    detail: "Turnaround still constrained by depot departure clustering.",
  },
];
