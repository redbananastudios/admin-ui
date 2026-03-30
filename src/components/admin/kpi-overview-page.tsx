import { Activity, ArrowUpRight, Gauge, ShieldCheck, TrendingUp } from "lucide-react";
import { DataTableShell } from "@/components/admin/data-table-shell";
import { SearchDateRangeToolbar } from "@/components/admin/filter-toolbar-presets";
import { PageHeader } from "@/components/admin/page-header";
import { SectionCard } from "@/components/admin/section-card";
import { StatCard } from "@/components/admin/stat-card";
import { StatusBadge } from "@/components/admin/status-badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  corridorPerformance,
  fleetEfficiency,
  kpiDemandCurve,
  kpiMetrics,
  kpiPeriodOptions,
  operationalIncidents,
} from "@/lib/mock-kpi-overview";

const statIcons = [TrendingUp, ShieldCheck, Gauge, Activity];

export function KpiOverviewPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="KPI overview"
        title="Network performance"
        description="A reusable management summary surface for weekly, monthly, or corridor-level performance reporting."
        actions={
          <>
            <Button variant="outline">Save snapshot</Button>
            <Button>
              <ArrowUpRight className="size-4" />
              Share board
            </Button>
          </>
        }
      />

      <SearchDateRangeToolbar
        searchPlaceholder="Search KPI groups, corridors, or vehicle classes"
        periodOptions={kpiPeriodOptions}
      />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {kpiMetrics.map((metric, index) => {
          const Icon = statIcons[index];

          return (
            <StatCard
              key={metric.label}
              icon={Icon}
              label={metric.label}
              value={metric.value}
              delta={metric.delta}
              trend={metric.trend}
              description={metric.description}
            />
          );
        })}
      </section>

      <section className="grid gap-4 xl:grid-cols-[minmax(0,1.65fr)_minmax(320px,0.85fr)]">
        <SectionCard
          title="Demand and capacity curve"
          description="Chart placeholder pattern for route volume, capacity, or operational throughput."
          action={<StatusBadge status="scheduled">Weekly view</StatusBadge>}
        >
          <div className="space-y-5">
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-border/60 bg-surface-2 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Peak corridor
                </p>
                <p className="mt-2 text-lg font-semibold text-foreground">
                  Heathrow arrivals
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Highest demand intensity between 16:00 and 19:00.
                </p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-surface-2 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Spare capacity
                </p>
                <p className="mt-2 text-lg font-semibold text-foreground">14.6%</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Buffer capacity available without reserve activation.
                </p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-surface-2 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Margin signal
                </p>
                <p className="mt-2 text-lg font-semibold text-foreground">
                  Healthy spread
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Premium corridors continue to carry the portfolio yield.
                </p>
              </div>
            </div>

            <div className="surface-dot rounded-[calc(var(--radius)*0.95)] border border-border/60 bg-surface-2 p-5">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Completed trip volume
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Mocked weekly performance data for layout and reporting rhythm
                  </p>
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                    Trips
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-info" />
                    Capacity
                  </span>
                </div>
              </div>

              <div className="flex h-64 items-end gap-2">
                {kpiDemandCurve.map((value, index) => (
                  <div key={index} className="flex flex-1 flex-col items-center gap-3">
                    <div className="relative flex h-full w-full items-end justify-center">
                      <div
                        className="w-full rounded-t-2xl bg-linear-to-t from-primary/85 via-primary to-primary shadow-soft"
                        style={{ height: `${value}%` }}
                      />
                      <div
                        className="absolute bottom-0 w-[42%] rounded-t-2xl bg-info/25"
                        style={{ height: `${Math.max(value - 16, 22)}%` }}
                      />
                    </div>
                    <span className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      {`W${index + 1}`}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionCard>

        <SectionCard
          title="Operational incidents"
          description="Right-rail signal panel for exceptions, approvals, or noteworthy performance events."
        >
          <div className="space-y-3">
            {operationalIncidents.map((incident) => (
              <div
                key={incident.title}
                className="rounded-2xl border border-border/60 bg-surface-2 px-4 py-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-foreground">
                      {incident.title}
                    </p>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {incident.detail}
                    </p>
                  </div>
                  <StatusBadge status={incident.tone}>{incident.tone}</StatusBadge>
                </div>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {incident.time}
                </p>
              </div>
            ))}
          </div>
        </SectionCard>
      </section>

      <section className="grid gap-4 xl:grid-cols-[minmax(0,1.45fr)_minmax(320px,0.8fr)]">
        <DataTableShell
          title="Corridor performance"
          description="Use this table pattern for KPI breakdowns, partner reporting, or route-level summaries."
        >
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Corridor</TableHead>
                <TableHead>Trips</TableHead>
                <TableHead>On-time</TableHead>
                <TableHead>Yield</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {corridorPerformance.map((row) => (
                <TableRow key={row.corridor}>
                  <TableCell className="font-semibold text-foreground">
                    {row.corridor}
                  </TableCell>
                  <TableCell>{row.trips}</TableCell>
                  <TableCell>{row.onTime}</TableCell>
                  <TableCell>{row.yield}</TableCell>
                  <TableCell>
                    <StatusBadge status={row.status}>{row.status}</StatusBadge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </DataTableShell>

        <SectionCard
          title="Fleet efficiency"
          description="Compact scoring bars that sit well beside larger reporting tables."
        >
          <div className="space-y-4">
            {fleetEfficiency.map((item) => (
              <div key={item.label} className="space-y-2">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-foreground">{item.label}</p>
                  <p className="text-sm font-semibold text-foreground">{item.score}%</p>
                </div>
                <div className="h-2 rounded-full bg-surface-3">
                  <div
                    className="h-2 rounded-full bg-linear-to-r from-primary/80 to-primary"
                    style={{ width: `${item.score}%` }}
                  />
                </div>
                <p className="text-sm leading-6 text-muted-foreground">{item.detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>
      </section>
    </div>
  );
}
