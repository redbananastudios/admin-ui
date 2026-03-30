export type ResourceFormTone = "completed" | "scheduled" | "delayed";

export type SelectOption = {
  label: string;
  value: string;
};

export type FormHighlight = {
  label: string;
  value: string;
  detail: string;
};

export type AmenityOption = {
  id: string;
  label: string;
  detail: string;
  checked: boolean;
};

export type ReadinessToggle = {
  title: string;
  detail: string;
  enabled: boolean;
};

export type ComplianceChecklistItem = {
  title: string;
  detail: string;
  tone: ResourceFormTone;
};

export type AssignmentDefault = {
  label: string;
  value: string;
  detail: string;
};

export const resourceFormRecord = {
  id: "TX-318",
  model: "Volvo XC90 Executive",
  status: "scheduled" as const,
  mode: "Draft update",
  summary:
    "Reusable Red Taxi create/edit pattern for vehicles, drivers, bookings, depots, or any other API-backed resource that needs a polished operational form.",
  manager: "Naomi Brooks",
  team: "Airport premium fleet",
  updatedAt: "Today, 16:24",
  publishWindow: "Tonight, 21:00 rollout",
};

export const formHighlights: FormHighlight[] = [
  {
    label: "Dispatch tier",
    value: "Executive airport transfer",
    detail: "Higher-priority lane with concierge pickup prep and tighter readiness windows.",
  },
  {
    label: "Primary depot",
    value: "Heathrow west staging",
    detail: "Vehicle rotates through T3, T4, and T5 premium demand corridors.",
  },
  {
    label: "Readiness target",
    value: "Ready in 06 min",
    detail: "Current turnover budget for premium pickups in the evening arrivals bank.",
  },
];

export const vehicleClassOptions: SelectOption[] = [
  { label: "Executive SUV", value: "executive-suv" },
  { label: "Premium sedan", value: "premium-sedan" },
  { label: "Electric MPV", value: "electric-mpv" },
  { label: "Accessible transfer", value: "accessible" },
];

export const serviceTierOptions: SelectOption[] = [
  { label: "Priority executive", value: "priority-executive" },
  { label: "Airport concierge", value: "airport-concierge" },
  { label: "Corporate transfer", value: "corporate-transfer" },
  { label: "Standard on-demand", value: "standard-ondemand" },
];

export const depotOptions: SelectOption[] = [
  { label: "Heathrow west staging", value: "heathrow-west" },
  { label: "Canary Wharf reserve", value: "canary-wharf" },
  { label: "Paddington relay", value: "paddington" },
  { label: "Luton overflow yard", value: "luton-overflow" },
];

export const shiftWindowOptions: SelectOption[] = [
  { label: "Airport evening arrivals", value: "airport-evening" },
  { label: "Corporate morning peak", value: "corporate-morning" },
  { label: "Late-night reserve", value: "late-night-reserve" },
  { label: "Weekend overflow", value: "weekend-overflow" },
];

export const amenityOptions: AmenityOption[] = [
  {
    id: "wifi",
    label: "Cabin Wi-Fi",
    detail: "Passenger network available immediately after handover.",
    checked: true,
  },
  {
    id: "water",
    label: "Complimentary water",
    detail: "Premium amenity for airport and executive bookings.",
    checked: true,
  },
  {
    id: "child-seat",
    label: "Child-seat ready",
    detail: "Reserve-compatible setup stored in the boot compartment.",
    checked: false,
  },
  {
    id: "charging",
    label: "Device charging kit",
    detail: "Rear-seat charging kit and cable pack inspected at turnover.",
    checked: true,
  },
];

export const readinessToggles: ReadinessToggle[] = [
  {
    title: "Auto-assign premium runs",
    detail: "Surface this asset earlier for high-yield airport and executive requests.",
    enabled: true,
  },
  {
    title: "Enforce charge top-up window",
    detail: "Prevent new assignments if projected battery drops below premium corridor threshold.",
    enabled: true,
  },
  {
    title: "Hold back from overflow dispatch",
    detail: "Keep this asset out of low-margin overflow pools unless reserve activation is triggered.",
    enabled: false,
  },
  {
    title: "Notify manager on downtime risk",
    detail: "Send an ops note if inspection, insurance, or permit issues would block activation.",
    enabled: true,
  },
];

export const complianceChecklist: ComplianceChecklistItem[] = [
  {
    title: "Operator permit validated",
    detail: "Permit renewal confirmed through 14 Sep 2026 with no outstanding amendments.",
    tone: "completed",
  },
  {
    title: "Insurance certificate review due",
    detail: "Finance needs the updated insurer rider before tonight's publish window.",
    tone: "scheduled",
  },
  {
    title: "Airport access pass pending",
    detail: "Terminal 5 access card replacement is still waiting for security office pickup.",
    tone: "delayed",
  },
  {
    title: "Telematics profile ready",
    detail: "Device pairing and dispatch heartbeat are healthy for production release.",
    tone: "completed",
  },
];

export const assignmentDefaults: AssignmentDefault[] = [
  {
    label: "Priority corridor",
    value: "Heathrow T5 -> Canary Wharf",
    detail: "Default ranking route for premium handover windows and concierge pickups.",
  },
  {
    label: "Reserve fallback",
    value: "Mayfair executive loop",
    detail: "Secondary assignment if airport premium demand softens after 21:00.",
  },
  {
    label: "Manager approval",
    value: "Required for overnight pool",
    detail: "Stops low-context after-hours dispatch unless the duty lead signs off.",
  },
];
