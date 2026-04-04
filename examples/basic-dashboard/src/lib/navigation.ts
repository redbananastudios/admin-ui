import type { LucideIcon } from "lucide-react"
import {
  BadgePoundSterling,
  Blocks,
  BookMarked,
  BriefcaseBusiness,
  CarFront,
  ChartColumnBig,
  CreditCard,
  FileClock,
  FilePenLine,
  FileSearch2,
  FileSpreadsheet,
  Globe,
  LayoutDashboard,
  MapPinned,
  PanelLeft,
  Receipt,
  RadioTower,
  ScrollText,
  Settings2,
  ShieldCheck,
  SlidersHorizontal,
  UsersRound,
  WalletCards,
  Waypoints,
  Wrench,
} from "lucide-react"

export type NavItem = {
  title: string
  href?: string
  icon: LucideIcon
  badge?: string
  disabled?: boolean
  description?: string
  children?: NavItem[]
}

export type NavSection = {
  title: string
  items: NavItem[]
}

export const APP_NAV_SECTIONS: NavSection[] = [
  {
    title: "Overview",
    items: [
      {
        title: "Dashboard",
        href: "/",
        icon: LayoutDashboard,
        description: "Executive operations overview",
      },
      {
        title: "Live Dispatch",
        icon: RadioTower,
        badge: "9",
        disabled: true,
        description: "Realtime operator control board",
      },
      {
        title: "Coverage Map",
        icon: MapPinned,
        disabled: true,
        description: "Zones, depots, and service footprint",
      },
    ],
  },
  {
    title: "Bookings",
    items: [
      {
        title: "All Bookings",
        icon: Waypoints,
        badge: "128",
        disabled: true,
        description: "Trip lifecycle monitoring",
      },
      {
        title: "Web Bookings",
        icon: Globe,
        description: "Review public booking intake and amendments",
        children: [
          {
            title: "All Web Requests",
            icon: Globe,
            disabled: true,
          },
          {
            title: "Amendment Requests",
            icon: FilePenLine,
            disabled: true,
          },
          {
            title: "Processed Requests",
            icon: ScrollText,
            disabled: true,
          },
        ],
      },
      {
        title: "Airport Meet & Greet",
        icon: BriefcaseBusiness,
        disabled: true,
        description: "Premium arrival handling and concierge work",
      },
    ],
  },
  {
    title: "Management",
    items: [
      {
        title: "Drivers",
        icon: UsersRound,
        disabled: true,
        description: "Driver profiles, onboarding, and availability",
      },
      {
        title: "Vehicles",
        icon: CarFront,
        disabled: true,
        description: "Fleet readiness and vehicle health",
      },
      {
        title: "Customers",
        icon: BriefcaseBusiness,
        disabled: true,
        description: "Private and account-based passenger records",
      },
      {
        title: "Utilities",
        icon: Wrench,
        description: "Back-office tools and operational maintenance",
        children: [
          {
            title: "HVS Account Changes",
            icon: Wrench,
            disabled: true,
          },
        ],
      },
    ],
  },
  {
    title: "Billing & Payments",
    items: [
      {
        title: "Invoicing",
        icon: Receipt,
        description: "Billing workflows, credits, and invoice history",
        children: [
          {
            title: "Invoice Processor",
            icon: Receipt,
            disabled: true,
          },
          {
            title: "Invoice Processor (Grp)",
            icon: Receipt,
            disabled: true,
          },
          {
            title: "Invoice History",
            icon: ScrollText,
            disabled: true,
          },
          {
            title: "Credit Invoice",
            icon: BadgePoundSterling,
            disabled: true,
          },
          {
            title: "Credit Journeys",
            icon: Waypoints,
            disabled: true,
          },
          {
            title: "Credit Notes",
            icon: FileClock,
            disabled: true,
          },
        ],
      },
      {
        title: "Payments",
        icon: WalletCards,
        description: "Statement processing and reconciliation history",
        children: [
          {
            title: "Statement Processing",
            icon: WalletCards,
            disabled: true,
          },
          {
            title: "Statement History",
            icon: ScrollText,
            disabled: true,
          },
        ],
      },
      {
        title: "Refund Controls",
        icon: CreditCard,
        disabled: true,
        description: "Adjustments, refunds, and payment holds",
      },
    ],
  },
  {
    title: "Reports",
    items: [
      {
        title: "Driver Reports",
        icon: UsersRound,
        description: "Driver activity, costs, and earnings",
        children: [
          { title: "Availability Report", icon: UsersRound, disabled: true },
          { title: "Driver Expenses", icon: BadgePoundSterling, disabled: true },
          { title: "Driver Earnings", icon: ChartColumnBig, disabled: true },
          { title: "On Shift", icon: RadioTower, disabled: true },
        ],
      },
      {
        title: "Bookings Reports",
        icon: BookMarked,
        description: "Operational reporting across trip intake and fulfilment",
        children: [
          { title: "Booking Summary", icon: FileSpreadsheet, disabled: true },
          { title: "Completed Journeys", icon: FileSpreadsheet, disabled: true },
          { title: "Cancelled Journeys", icon: FileSpreadsheet, disabled: true },
          { title: "No Shows", icon: FileSpreadsheet, disabled: true },
          { title: "Airport Transfers", icon: FileSpreadsheet, disabled: true },
          { title: "Corporate Work", icon: FileSpreadsheet, disabled: true },
          { title: "Web Conversion", icon: FileSpreadsheet, disabled: true },
          { title: "Late Arrival Audit", icon: FileSpreadsheet, disabled: true },
          { title: "Dispatch Exceptions", icon: FileSpreadsheet, disabled: true },
        ],
      },
      {
        title: "Financial Reports",
        icon: BadgePoundSterling,
        description: "Revenue, payment, and billing operations reporting",
        children: [
          { title: "Revenue Overview", icon: ChartColumnBig, disabled: true },
          { title: "Debtors", icon: BadgePoundSterling, disabled: true },
          { title: "Credits Issued", icon: FileClock, disabled: true },
          { title: "Payment Reconciliation", icon: WalletCards, disabled: true },
          { title: "VAT Summary", icon: Receipt, disabled: true },
        ],
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
        title: "UI Patterns",
        icon: Blocks,
        description: "Reference layouts and reusable admin building blocks",
        children: [
          {
            title: "Resource List",
            href: "/patterns/resource-list",
            icon: Blocks,
          },
          {
            title: "Resource Detail",
            href: "/patterns/resource-detail",
            icon: FileSearch2,
          },
          {
            title: "Resource Form",
            href: "/patterns/resource-form",
            icon: FilePenLine,
          },
          {
            title: "KPI Overview",
            href: "/patterns/kpi-overview",
            icon: ChartColumnBig,
          },
          {
            title: "Row Detail Table",
            href: "/patterns/row-detail",
            icon: PanelLeft,
          },
          {
            title: "Sidebar Navigation",
            href: "/patterns/sidebar-navigation",
            icon: SlidersHorizontal,
          },
        ],
      },
    ],
  },
  {
    title: "System",
    items: [
      {
        title: "Settings",
        icon: Settings2,
        disabled: true,
        description: "Tenant controls, policies, and defaults",
      },
      {
        title: "Audit Trail",
        icon: ScrollText,
        disabled: true,
        description: "System-level change history and activity review",
      },
    ],
  },
]

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
  "/patterns/row-detail": {
    title: "Row Detail Table Pattern",
    subtitle:
      "Expandable grid pattern for inline operational context, checklists, and quick actions.",
    eyebrow: "Reusable block",
  },
  "/patterns/sidebar-navigation": {
    title: "Sidebar Navigation Pattern",
    subtitle:
      "Expanded, collapsed, and flyout behavior for the Red Taxi Admin v2 multi-level navigation.",
    eyebrow: "Reusable block",
  },
}

export function getRouteMeta(pathname: string) {
  return (
    PAGE_META[pathname] ?? {
      title: "Red Taxi Admin",
      subtitle: "Premium transport operations workspace.",
      eyebrow: "Workspace",
    }
  )
}
