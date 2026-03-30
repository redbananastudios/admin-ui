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

export type DemandCurvePoint = {
  week: string;
  trips: number;
  capacity: number;
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

export const kpiDemandCurve: DemandCurvePoint[] = [
  { week: "W1", trips: 42, capacity: 35 },
  { week: "W2", trips: 51, capacity: 41 },
  { week: "W3", trips: 64, capacity: 46 },
  { week: "W4", trips: 58, capacity: 43 },
  { week: "W5", trips: 72, capacity: 57 },
  { week: "W6", trips: 79, capacity: 62 },
  { week: "W7", trips: 74, capacity: 60 },
  { week: "W8", trips: 88, capacity: 71 },
  { week: "W9", trips: 94, capacity: 79 },
  { week: "W10", trips: 85, capacity: 70 },
  { week: "W11", trips: 76, capacity: 64 },
  { week: "W12", trips: 82, capacity: 68 },
];

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
