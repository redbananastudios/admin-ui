import { AlertTriangle, CarFront, Route, ShieldCheck, TimerReset } from "lucide-react";
import { DataTableShell } from "@/components/admin/data-table-shell";
import { EmptyState } from "@/components/admin/empty-state";
import { SearchStatusToolbar } from "@/components/admin/filter-toolbar-presets";
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
  attentionItems,
  coverageNotes,
  resourceListMetrics,
  resourceRows,
  resourceSegmentOptions,
  resourceStatusOptions,
} from "@/lib/mock-resource-list";

const statIcons = [CarFront, ShieldCheck, Route, TimerReset];

export function ResourceListPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Fleet register"
        title="Vehicle operations"
        description="A reusable Red Taxi list-page pattern for API-backed resources such as vehicles, drivers, bookings, or customers."
        actions={
          <>
            <Button variant="outline">Import feed</Button>
            <Button>Add vehicle</Button>
          </>
        }
      />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {resourceListMetrics.map((metric, index) => {
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

      <section className="grid gap-4 xl:grid-cols-[minmax(0,1.7fr)_minmax(300px,0.9fr)]">
        <DataTableShell
          title="Fleet directory"
          description="Use this structure for any API-backed collection screen. Swap the mock rows for your own schema and keep the surrounding rhythm intact."
          actions={<StatusBadge status="scheduled">Synced 2 min ago</StatusBadge>}
        >
          <div className="space-y-4">
            <SearchStatusToolbar
              searchPlaceholder="Search by registration, vehicle type, or driver"
              statusOptions={resourceStatusOptions}
              segmentOptions={resourceSegmentOptions}
              primaryActionLabel="Add vehicle"
            />

            {resourceRows.length ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Asset</TableHead>
                    <TableHead>Driver</TableHead>
                    <TableHead>Zone</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Utilization</TableHead>
                    <TableHead>Next window</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {resourceRows.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>
                        <div className="space-y-1">
                          <p className="font-semibold text-foreground">{row.id}</p>
                          <p className="text-sm text-muted-foreground">{row.vehicle}</p>
                        </div>
                      </TableCell>
                      <TableCell>{row.driver}</TableCell>
                      <TableCell>{row.zone}</TableCell>
                      <TableCell>
                        <StatusBadge status={row.status}>{row.status}</StatusBadge>
                      </TableCell>
                      <TableCell className="font-medium text-foreground">
                        {row.utilization}
                      </TableCell>
                      <TableCell>{row.nextWindow}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <EmptyState
                icon={CarFront}
                title="No resource records yet"
                description="Keep the surrounding shell and wrappers, then map your API collection here once the endpoint is ready."
                action={<Button>Add first record</Button>}
              />
            )}
          </div>
        </DataTableShell>

        <div className="space-y-4">
          <SectionCard
            title="Attention queue"
            description="Compact right-rail pattern for issues, exceptions, and operational notes."
          >
            <div className="space-y-3">
              {attentionItems.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border/60 bg-surface-2 px-4 py-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-foreground">
                        {item.title}
                      </p>
                      <p className="text-sm leading-6 text-muted-foreground">
                        {item.detail}
                      </p>
                    </div>
                    <StatusBadge status={item.tone}>{item.tone}</StatusBadge>
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard
            title="Coverage notes"
            description="Low-chrome summary blocks for situational context beside a dense table."
          >
            <div className="space-y-3">
              {coverageNotes.map((note) => (
                <div
                  key={note.label}
                  className="rounded-2xl border border-border/60 bg-surface-2 px-4 py-3"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {note.label}
                  </p>
                  <p className="mt-2 text-base font-semibold text-foreground">
                    {note.value}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    {note.detail}
                  </p>
                </div>
              ))}

              <div className="rounded-2xl border border-primary/18 bg-primary/10 px-4 py-3 text-primary">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <AlertTriangle className="size-4" />
                  Pattern intent
                </div>
                <p className="mt-2 text-sm leading-6 text-primary/80">
                  Use this page for any resource collection view. Keep the same left-table and right-context balance, then wire real actions and filters from your API.
                </p>
              </div>
            </div>
          </SectionCard>
        </div>
      </section>
    </div>
  );
}
