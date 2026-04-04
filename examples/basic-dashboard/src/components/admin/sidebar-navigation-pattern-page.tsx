import { Layers3, MousePointerClick, PanelLeft, ShieldCheck } from "lucide-react"
import { APP_NAV_SECTIONS } from "@/lib/navigation"
import { PageHeader } from "@/components/admin/page-header"
import { SectionCard } from "@/components/admin/section-card"
import { StatCard } from "@/components/admin/stat-card"
import { Button } from "@/components/ui/button"

const totalRootItems = APP_NAV_SECTIONS.reduce(
  (count, section) => count + section.items.length,
  0,
)

const totalChildItems = APP_NAV_SECTIONS.reduce(
  (count, section) =>
    count +
    section.items.reduce(
      (sectionCount, item) => sectionCount + (item.children?.length ?? 0),
      0,
    ),
  0,
)

const sidebarStates = [
  {
    title: "Expanded state",
    detail:
      "Brand copy, shift summary, section labels, and nested children stay visible with the full 18rem operational layout.",
  },
  {
    title: "Collapsed state",
    detail:
      "Only the logo, icons, and active highlights remain. Use the persistent footer toggle to move between states.",
  },
  {
    title: "Flyout access",
    detail:
      "Hover or click a collapsed parent icon such as Web Bookings or Invoicing to reach its child routes without expanding the whole rail.",
  },
]

const flyoutExamples = [
  "Web Bookings",
  "Invoicing",
  "Payments",
  "Driver Reports",
  "Bookings Reports",
  "Financial Reports",
  "Utilities",
]

export function SidebarNavigationPatternPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Navigation system"
        title="Sidebar Navigation Pattern"
        description="The live sidebar on the left is the reference implementation. Use the footer toggle to test expanded, collapsed, and flyout behavior in one place."
        actions={
          <>
            <Button variant="outline">Review root nav data</Button>
            <Button>Use in Admin v2</Button>
          </>
        }
      />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          icon={Layers3}
          label="Sections"
          value={String(APP_NAV_SECTIONS.length)}
          delta="Structured"
          trend="stable"
          description="Grouped by operational domain instead of a flat starter menu."
        />
        <StatCard
          icon={PanelLeft}
          label="Root items"
          value={String(totalRootItems)}
          delta="Live"
          trend="stable"
          description="Top-level nodes shown directly in the rail."
        />
        <StatCard
          icon={MousePointerClick}
          label="Child items"
          value={String(totalChildItems)}
          delta="Flyout ready"
          trend="up"
          description="Accessible in both expanded and collapsed desktop states."
        />
        <StatCard
          icon={ShieldCheck}
          label="Desktop toggle"
          value="1"
          delta="Persistent"
          trend="stable"
          description="Footer-mounted collapse control with cookie-backed persistence."
        />
      </section>

      <section className="grid gap-4 xl:grid-cols-[minmax(0,1.3fr)_minmax(320px,0.7fr)]">
        <SectionCard
          title="Usage example"
          description="Keep the actual shell live and use this checklist when implementing new admin modules."
        >
          <div className="space-y-3">
            {sidebarStates.map((state) => (
              <div
                key={state.title}
                className="rounded-[calc(var(--radius)*0.95)] border border-border/60 bg-surface-2 px-4 py-4"
              >
                <p className="text-sm font-semibold text-foreground">{state.title}</p>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  {state.detail}
                </p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          title="Flyout parents"
          description="These parent items should remain usable even when the desktop rail is icon-only."
        >
          <div className="flex flex-wrap gap-2">
            {flyoutExamples.map((example) => (
              <span
                key={example}
                className="rounded-full border border-border/65 bg-surface-2 px-3 py-1.5 text-sm font-medium text-foreground/82"
              >
                {example}
              </span>
            ))}
          </div>
        </SectionCard>
      </section>
    </div>
  )
}
