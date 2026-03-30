"use client";

import {
  Activity,
  ArrowUpRight,
  CarFront,
  Clock3,
  Download,
  Route,
  ShieldCheck,
  WalletCards,
} from "lucide-react";
import { PageHeader } from "@/components/admin/page-header";
import { SectionCard } from "@/components/admin/section-card";
import { StatCard } from "@/components/admin/stat-card";
import { StatusBadge } from "@/components/admin/status-badge";
import { DataTableShell } from "@/components/admin/data-table-shell";
import { Button } from "@/components/ui/button";
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  activityFeed,
  bookingRows,
  chartSeries,
  dashboardStats,
  driverStatuses,
} from "@/lib/mock-dashboard";
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";

const statIcons = [Route, ShieldCheck, CarFront, Clock3];
const demandChartConfig = {
  requests: {
    label: "Requests",
    color: "var(--color-chart-1)",
  },
  capacity: {
    label: "Fleet capacity",
    color: "var(--color-chart-3)",
  },
} satisfies ChartConfig;

export function DashboardOverview() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Dispatch control"
        title="Red Taxi command center"
        description="A transport-focused admin shell inspired by premium operations dashboards: dense, deliberate, and easy to scan at speed."
        actions={
          <>
            <Button variant="outline">
              <Download className="size-4" />
              Export shift report
            </Button>
            <Button>
              <ArrowUpRight className="size-4" />
              Launch dispatch view
            </Button>
          </>
        }
      />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((stat, index) => {
          const Icon = statIcons[index];

          return (
            <StatCard
              key={stat.label}
              icon={Icon}
              label={stat.label}
              value={stat.value}
              delta={stat.delta}
              trend={stat.trend}
              description={stat.description}
            />
          );
        })}
      </section>

      <section className="grid gap-4 xl:grid-cols-[minmax(0,1.7fr)_minmax(320px,0.95fr)]">
        <SectionCard
          title="Demand pulse"
          description="Live request load, trip flow, and route pressure across the current shift."
          action={
            <div className="flex items-center gap-2">
              <StatusBadge status="en-route">Live telemetry</StatusBadge>
            </div>
          }
        >
          <div className="space-y-5">
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-border/60 bg-surface-2 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Peak zone
                </p>
                <p className="mt-2 text-lg font-semibold text-foreground">
                  Canary Wharf
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  18 active requests in the last 10 minutes
                </p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-surface-2 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Average ETA
                </p>
                <p className="mt-2 text-lg font-semibold text-foreground">08m 42s</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Trending 6% faster than prior hour
                </p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-surface-2 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Surge monitor
                </p>
                <p className="mt-2 text-lg font-semibold text-foreground">
                  Redline watch
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Demand concentrated around airport corridors
                </p>
              </div>
            </div>

            <div className="surface-dot rounded-[calc(var(--radius)*0.95)] border border-border/60 bg-surface-2 p-5">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Requests by interval
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Real chart component with Red Taxi chart tokens and shared tooltip styling
                  </p>
                </div>
              </div>

              <ChartContainer
                config={demandChartConfig}
                className="min-h-[18rem] w-full"
              >
                <BarChart accessibilityLayer data={chartSeries} barGap={10}>
                  <CartesianGrid vertical={false} strokeDasharray="3 3" />
                  <XAxis
                    dataKey="interval"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={10}
                    minTickGap={24}
                  />
                  <YAxis hide domain={[0, 100]} />
                  <ChartTooltip content={<ChartTooltipContent indicator="line" />} />
                  <ChartLegend
                    verticalAlign="top"
                    content={<ChartLegendContent className="justify-start gap-5 pb-4 pt-0" />}
                  />
                  <Bar
                    dataKey="requests"
                    fill="var(--color-requests)"
                    radius={[10, 10, 0, 0]}
                    maxBarSize={20}
                  />
                  <Bar
                    dataKey="capacity"
                    fill="var(--color-capacity)"
                    fillOpacity={0.75}
                    radius={[10, 10, 0, 0]}
                    maxBarSize={20}
                  />
                </BarChart>
              </ChartContainer>
            </div>
          </div>
        </SectionCard>

        <SectionCard
          title="Operations activity"
          description="High-signal updates from dispatch, telemetry, and service coverage."
        >
          <div className="space-y-3">
            {activityFeed.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border/60 bg-surface-2 px-4 py-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-foreground">{item.title}</p>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {item.detail}
                    </p>
                  </div>
                  <StatusBadge status={item.tone === "warning" ? "delayed" : item.tone === "success" ? "completed" : "scheduled"}>
                    {item.tone}
                  </StatusBadge>
                </div>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {item.time}
                </p>
              </div>
            ))}
          </div>
        </SectionCard>
      </section>

      <section className="grid gap-4 xl:grid-cols-[minmax(0,1.55fr)_minmax(320px,0.85fr)]">
        <DataTableShell
          title="Recent bookings"
          description="Representative table styling for trips, dispatch queues, and service operations."
          actions={
            <Button variant="outline" size="sm">
              <WalletCards className="size-4" />
              Billing export
            </Button>
          }
        >
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Booking</TableHead>
                <TableHead>Passenger / Route</TableHead>
                <TableHead>Driver</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>ETA</TableHead>
                <TableHead className="text-right">Fare</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bookingRows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell className="font-semibold text-foreground">{row.id}</TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <p className="font-medium text-foreground">{row.rider}</p>
                      <p className="text-sm text-muted-foreground">{row.route}</p>
                    </div>
                  </TableCell>
                  <TableCell>{row.driver}</TableCell>
                  <TableCell>
                    <StatusBadge status={row.status}>{row.status}</StatusBadge>
                  </TableCell>
                  <TableCell>{row.eta}</TableCell>
                  <TableCell className="text-right font-semibold text-foreground">
                    {row.fare}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </DataTableShell>

        <SectionCard
          title="Driver status"
          description="A compact availability panel for dispatch and supervisory screens."
        >
          <div className="space-y-3">
            {driverStatuses.map((driver) => (
              <div
                key={driver.name}
                className="rounded-2xl border border-border/60 bg-surface-2 px-4 py-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold text-foreground">{driver.name}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {driver.vehicle}
                    </p>
                  </div>
                  <StatusBadge status={driver.status}>{driver.status}</StatusBadge>
                </div>
                <div className="mt-3 flex items-center justify-between gap-3 text-sm text-muted-foreground">
                  <span>{driver.zone}</span>
                  <span>{driver.load}</span>
                </div>
              </div>
            ))}

            <div className="rounded-2xl border border-dashed border-primary/25 bg-primary/10 px-4 py-3 text-sm text-primary">
              <div className="flex items-center gap-2 font-semibold">
                <Activity className="size-4" />
                Fleet heartbeat healthy
              </div>
              <p className="mt-2 leading-6 text-primary/80">
                Telemetry, route events, and driver availability signals are stable across the mocked dispatch zones.
              </p>
            </div>
          </div>
        </SectionCard>
      </section>
    </div>
  );
}
