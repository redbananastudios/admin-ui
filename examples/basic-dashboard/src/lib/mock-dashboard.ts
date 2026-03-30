export type DashboardStat = {
  label: string;
  value: string;
  delta: string;
  trend: "up" | "down" | "stable";
  description: string;
};

export type BookingRow = {
  id: string;
  rider: string;
  route: string;
  driver: string;
  fare: string;
  status:
    | "scheduled"
    | "en-route"
    | "boarding"
    | "completed"
    | "delayed"
    | "cancelled";
  eta: string;
};

export type DriverStatus = {
  name: string;
  vehicle: string;
  zone: string;
  status: "available" | "en-route" | "break" | "offline";
  load: string;
};

export type ActivityItem = {
  title: string;
  detail: string;
  time: string;
  tone: "info" | "success" | "warning";
};

export type DemandPoint = {
  interval: string;
  requests: number;
  capacity: number;
};

export const dashboardStats: DashboardStat[] = [
  {
    label: "Active Trips",
    value: "284",
    delta: "+12.4%",
    trend: "up",
    description: "Compared with the last 60 minutes",
  },
  {
    label: "On-Time Rate",
    value: "94.8%",
    delta: "+1.7%",
    trend: "up",
    description: "Across airport and city transfers",
  },
  {
    label: "Drivers Online",
    value: "132",
    delta: "-3",
    trend: "down",
    description: "6 currently returning to depot",
  },
  {
    label: "Average Wait",
    value: "06m 18s",
    delta: "Stable",
    trend: "stable",
    description: "Passenger pickup waiting time",
  },
];

export const bookingRows: BookingRow[] = [
  {
    id: "BK-4109",
    rider: "Emily Watson",
    route: "Paddington -> Heathrow T5",
    driver: "K. Ahmed",
    fare: "GBP 58.40",
    status: "en-route",
    eta: "08 min",
  },
  {
    id: "BK-4113",
    rider: "Arlo Freight",
    route: "Canary Wharf -> Gatwick",
    driver: "M. Doyle",
    fare: "GBP 92.10",
    status: "boarding",
    eta: "Now",
  },
  {
    id: "BK-4118",
    rider: "Nina Harper",
    route: "Euston -> Kings Cross",
    driver: "D. Foster",
    fare: "GBP 22.90",
    status: "scheduled",
    eta: "14 min",
  },
  {
    id: "BK-4120",
    rider: "Sutton Legal",
    route: "Victoria -> London City Airport",
    driver: "J. Clarke",
    fare: "GBP 64.75",
    status: "delayed",
    eta: "19 min",
  },
  {
    id: "BK-4124",
    rider: "Marcus Bell",
    route: "Soho -> Waterloo",
    driver: "P. Grant",
    fare: "GBP 18.30",
    status: "completed",
    eta: "Closed",
  },
];

export const driverStatuses: DriverStatus[] = [
  {
    name: "Khalid Ahmed",
    vehicle: "TX-204 / EV Saloon",
    zone: "Westminster",
    status: "en-route",
    load: "2 pickups left",
  },
  {
    name: "Mia Doyle",
    vehicle: "TX-122 / Business Van",
    zone: "Canary Wharf",
    status: "available",
    load: "Ready for next dispatch",
  },
  {
    name: "Jon Clarke",
    vehicle: "TX-088 / Executive SUV",
    zone: "South Bank",
    status: "break",
    load: "10 min pause",
  },
  {
    name: "Priya Grant",
    vehicle: "TX-331 / EV Saloon",
    zone: "Waterloo",
    status: "offline",
    load: "Returning to depot",
  },
];

export const activityFeed: ActivityItem[] = [
  {
    title: "Dispatch escalation cleared",
    detail: "Airport pickup queue normalized after lane reassignment.",
    time: "3 min ago",
    tone: "success",
  },
  {
    title: "Surge watch enabled",
    detail: "Demand spike detected in Canary Wharf commuter corridor.",
    time: "11 min ago",
    tone: "warning",
  },
  {
    title: "Live ETA sync recovered",
    detail: "Map provider fallback returned to primary telemetry feed.",
    time: "21 min ago",
    tone: "info",
  },
];

export const chartSeries: DemandPoint[] = [
  { interval: "08:00", requests: 44, capacity: 26 },
  { interval: "09:00", requests: 58, capacity: 34 },
  { interval: "10:00", requests: 62, capacity: 39 },
  { interval: "11:00", requests: 56, capacity: 31 },
  { interval: "12:00", requests: 70, capacity: 45 },
  { interval: "13:00", requests: 83, capacity: 59 },
  { interval: "14:00", requests: 76, capacity: 51 },
  { interval: "15:00", requests: 88, capacity: 66 },
  { interval: "16:00", requests: 94, capacity: 71 },
  { interval: "17:00", requests: 79, capacity: 56 },
  { interval: "18:00", requests: 72, capacity: 48 },
  { interval: "19:00", requests: 84, capacity: 62 },
];
