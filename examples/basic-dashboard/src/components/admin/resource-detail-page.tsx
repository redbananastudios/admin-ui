import { ClipboardList, FileCheck2, LocateFixed, ShieldCheck, Zap } from "lucide-react";
import { AppCard } from "@/components/admin/app-card";
import { DataTableShell } from "@/components/admin/data-table-shell";
import { PageHeader } from "@/components/admin/page-header";
import { SectionCard } from "@/components/admin/section-card";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  assignmentRows,
  detailAlerts,
  detailDocuments,
  detailHighlights,
  resourceDetail,
  serviceTimeline,
} from "@/lib/mock-resource-detail";

export function ResourceDetailPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Resource detail"
        title={`${resourceDetail.id} · ${resourceDetail.model}`}
        description={resourceDetail.summary}
        actions={
          <>
            <Button variant="outline">Schedule service</Button>
            <Button>Assign journey</Button>
          </>
        }
      />

      <section className="grid gap-4 xl:grid-cols-[minmax(0,1.65fr)_minmax(300px,0.85fr)]">
        <SectionCard
          title="Asset workspace"
          description="Use tabs for dense detail surfaces, but keep the surrounding panel hierarchy quiet and operational."
        >
          <Tabs defaultValue="overview">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="service">Service history</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-5 space-y-5">
              <div className="grid gap-3 lg:grid-cols-3">
                {detailHighlights.map((highlight) => (
                  <AppCard
                    key={highlight.label}
                    className="gap-3 border-border/60 bg-surface-2/92 p-4"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      {highlight.label}
                    </p>
                    <p className="text-lg font-semibold text-foreground">
                      {highlight.value}
                    </p>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {highlight.description}
                    </p>
                  </AppCard>
                ))}
              </div>

              <div className="grid gap-4 lg:grid-cols-[minmax(0,1.2fr)_minmax(240px,0.8fr)]">
                <div className="rounded-[calc(var(--radius)*0.92)] border border-border/60 bg-surface-2 p-5">
                  <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <LocateFixed className="size-4 text-primary" />
                    Dispatch notes
                  </div>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    This vehicle is pinned to high-value airport corridors, with premium pickup prep enabled and a reduced idle threshold to keep turnover times tight during evening arrival banks.
                  </p>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-border/60 bg-panel-background/70 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        Preferred staging
                      </p>
                      <p className="mt-2 font-semibold text-foreground">
                        Heathrow executive lane
                      </p>
                    </div>
                    <div className="rounded-2xl border border-border/60 bg-panel-background/70 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        Charge policy
                      </p>
                      <p className="mt-2 font-semibold text-foreground">
                        Top-up between premium runs
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[calc(var(--radius)*0.92)] border border-border/60 bg-surface-2 p-5">
                  <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <ShieldCheck className="size-4 text-primary" />
                    Live compliance
                  </div>
                  <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-center justify-between gap-3">
                      <span>Operator permit</span>
                      <StatusBadge status="completed">valid</StatusBadge>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <span>Airport access pass</span>
                      <StatusBadge status="scheduled">review</StatusBadge>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <span>Insurance amendment</span>
                      <StatusBadge status="delayed">blocked</StatusBadge>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="service" className="mt-5">
              <div className="space-y-3">
                {serviceTimeline.map((event) => (
                  <div
                    key={event.title}
                    className="rounded-[calc(var(--radius)*0.92)] border border-border/60 bg-surface-2 px-4 py-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <p className="font-semibold text-foreground">{event.title}</p>
                        <p className="text-sm leading-6 text-muted-foreground">
                          {event.detail}
                        </p>
                      </div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        {event.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="documents" className="mt-5">
              <div className="space-y-3">
                {detailDocuments.map((document) => (
                  <div
                    key={document.name}
                    className="flex flex-col gap-3 rounded-[calc(var(--radius)*0.92)] border border-border/60 bg-surface-2 px-4 py-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="space-y-1">
                      <p className="font-semibold text-foreground">{document.name}</p>
                      <p className="text-sm text-muted-foreground">
                        Owned by {document.owner}
                      </p>
                      <p className="text-sm leading-6 text-muted-foreground">
                        {document.renewal}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <StatusBadge status={document.tone}>{document.tone}</StatusBadge>
                      <Button size="sm" variant="outline">
                        Review file
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </SectionCard>

        <div className="space-y-4">
          <SectionCard
            title="Live summary"
            description="Compact right-rail summary for the most important record metadata."
          >
            <div className="space-y-4">
              <div className="rounded-[calc(var(--radius)*0.92)] border border-border/60 bg-surface-2 p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-foreground">
                    Operational status
                  </p>
                  <StatusBadge status={resourceDetail.status}>
                    {resourceDetail.status}
                  </StatusBadge>
                </div>
                <div className="mt-4 grid gap-3 text-sm text-muted-foreground">
                  <div className="flex items-center justify-between gap-3">
                    <span>Assigned driver</span>
                    <span className="font-medium text-foreground">
                      {resourceDetail.assignedDriver}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span>Region</span>
                    <span className="font-medium text-foreground">
                      {resourceDetail.region}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span>Registration</span>
                    <span className="font-medium text-foreground">
                      {resourceDetail.registration}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span>VIN</span>
                    <span className="font-medium text-foreground">
                      {resourceDetail.vin}
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
                <AppCard className="gap-3 border-border/60 bg-surface-2 p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <Zap className="size-4 text-primary" />
                    Battery and uptime
                  </div>
                  <p className="text-2xl font-semibold tracking-[-0.05em] text-foreground">
                    {resourceDetail.battery}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {resourceDetail.uptime} telemetry uptime this month
                  </p>
                </AppCard>

                <AppCard className="gap-3 border-border/60 bg-surface-2 p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <ClipboardList className="size-4 text-primary" />
                    Service window
                  </div>
                  <p className="text-2xl font-semibold tracking-[-0.05em] text-foreground">
                    {resourceDetail.nextService}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Inspection due {resourceDetail.nextInspection}
                  </p>
                </AppCard>
              </div>
            </div>
          </SectionCard>

          <SectionCard
            title="Alerts and flags"
            description="Suggested companion panel for approvals, escalations, or service events."
          >
            <div className="space-y-3">
              {detailAlerts.map((alert) => (
                <div
                  key={alert.title}
                  className="rounded-[calc(var(--radius)*0.92)] border border-border/60 bg-surface-2 px-4 py-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-foreground">
                        {alert.title}
                      </p>
                      <p className="text-sm leading-6 text-muted-foreground">
                        {alert.detail}
                      </p>
                    </div>
                    <StatusBadge status={alert.tone}>{alert.tone}</StatusBadge>
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>
      </section>

      <DataTableShell
        title="Recent assignments"
        description="Use a full-width table below the detail surface for related records, trip history, or audit entries."
        actions={
          <Button size="sm" variant="outline">
            <FileCheck2 className="size-4" />
            Export history
          </Button>
        }
      >
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Job</TableHead>
              <TableHead>Route</TableHead>
              <TableHead>Driver</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Window</TableHead>
              <TableHead className="text-right">Revenue</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {assignmentRows.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="font-semibold text-foreground">{row.id}</TableCell>
                <TableCell>{row.route}</TableCell>
                <TableCell>{row.driver}</TableCell>
                <TableCell>
                  <StatusBadge status={row.status}>{row.status}</StatusBadge>
                </TableCell>
                <TableCell>{row.window}</TableCell>
                <TableCell className="text-right font-semibold text-foreground">
                  {row.revenue}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DataTableShell>
    </div>
  );
}
