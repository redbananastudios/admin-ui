import type { LucideIcon } from "lucide-react";
import {
  CarFront,
  CreditCard,
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
        href: "/dashboard",
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
];

export const PAGE_META: Record<
  string,
  { title: string; subtitle: string; eyebrow: string }
> = {
  "/dashboard": {
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
