import type { LucideIcon } from "lucide-react";
import {
  Blocks,
  ChartColumnBig,
  CarFront,
  CreditCard,
  FilePenLine,
  FileSearch2,
  LayoutDashboard,
  MapPinned,
  RadioTower,
  Settings2,
  ShieldCheck,
  Waypoints,
} from "lucide-react";

export type NavItem = {
  title: string;
  href?: string;
  icon: LucideIcon;
  badge?: string;
  disabled?: boolean;
  description?: string;
};

export type NavSection = {
  title: string;
  items: NavItem[];
};

export const APP_NAV_SECTIONS: NavSection[] = [
  {
    title: "Control Center",
    items: [
      {
        title: "Dashboard",
        href: "/",
        icon: LayoutDashboard,
        description: "Executive operations overview",
      },
      {
        title: "Bookings",
        icon: Waypoints,
        badge: "128",
        disabled: true,
        description: "Trip lifecycle monitoring",
      },
      {
        title: "Dispatch",
        icon: RadioTower,
        badge: "9",
        disabled: true,
        description: "Live fleet coordination",
      },
      {
        title: "Fleet",
        icon: CarFront,
        disabled: true,
        description: "Drivers and vehicle health",
      },
    ],
  },
  {
    title: "Foundation",
    items: [
      {
        title: "Style Guide",
        href: "/style-guide",
        icon: ShieldCheck,
        description: "Visual QA and component review",
      },
      {
        title: "Coverage Map",
        icon: MapPinned,
        disabled: true,
        description: "Zones and service footprint",
      },
      {
        title: "Billing",
        icon: CreditCard,
        disabled: true,
        description: "Revenue and settlements",
      },
      {
        title: "Settings",
        icon: Settings2,
        disabled: true,
        description: "Platform and tenant configuration",
      },
    ],
  },
  {
    title: "Patterns",
    items: [
      {
        title: "Resource List",
        href: "/patterns/resource-list",
        icon: Blocks,
        description: "API collection page pattern",
      },
      {
        title: "Resource Detail",
        href: "/patterns/resource-detail",
        icon: FileSearch2,
        description: "Single record detail layout",
      },
      {
        title: "Resource Form",
        href: "/patterns/resource-form",
        icon: FilePenLine,
        description: "Create and edit workflow pattern",
      },
      {
        title: "KPI Overview",
        href: "/patterns/kpi-overview",
        icon: ChartColumnBig,
        description: "Management summary reporting",
      },
    ],
  },
];

export const PAGE_META: Record<
  string,
  { title: string; subtitle: string; eyebrow: string }
> = {
  "/": {
    title: "Operations Dashboard",
    subtitle:
      "Keep dispatch, bookings, and fleet performance aligned from one transport control surface.",
    eyebrow: "Live overview",
  },
  "/style-guide": {
    title: "Style Guide",
    subtitle:
      "QA surface for the Red Taxi admin design system, wrappers, and interaction states.",
    eyebrow: "Design system",
  },
  "/patterns/resource-list": {
    title: "Resource List Pattern",
    subtitle:
      "Reusable Red Taxi collection view for vehicles, drivers, bookings, and other API-backed resources.",
    eyebrow: "Reusable block",
  },
  "/patterns/resource-detail": {
    title: "Resource Detail Pattern",
    subtitle:
      "Single-record detail layout with tabs, metadata rail, alerts, and related history.",
    eyebrow: "Reusable block",
  },
  "/patterns/resource-form": {
    title: "Resource Form Pattern",
    subtitle:
      "Create and edit workflow layout with dense form sections, release checks, and operational defaults.",
    eyebrow: "Reusable block",
  },
  "/patterns/kpi-overview": {
    title: "KPI Overview Pattern",
    subtitle:
      "Management reporting layout for operational metrics, incidents, and route performance.",
    eyebrow: "Reusable block",
  },
};

export function getRouteMeta(pathname: string) {
  return (
    PAGE_META[pathname] ?? {
      title: "Red Taxi Admin",
      subtitle: "Premium transport operations workspace.",
      eyebrow: "Workspace",
    }
  );
}
