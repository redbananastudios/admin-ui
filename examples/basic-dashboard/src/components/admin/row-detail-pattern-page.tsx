"use client";

import { CarFront, ClipboardList, RadioTower } from "lucide-react";
import { DataTableShell } from "@/components/admin/data-table-shell";
import { PageHeader } from "@/components/admin/page-header";
import { RowDetailTable, type RowDetailTableColumn } from "@/components/admin/row-detail-table";
import { SectionCard } from "@/components/admin/section-card";
import { StatCard } from "@/components/admin/stat-card";
import { StatusBadge } from "@/components/admin/status-badge";
import { Button } from "@/components/ui/button";
import {
  rowDetailMetrics,
  rowDetailRows,
  rowDetailUsageNotes,
  type RowDetailRecord,
} from "@/lib/mock-row-detail-table";

const statIcons = [CarFront, RadioTower, ClipboardList];

const rowDetailColumns: RowDetailTableColumn<RowDetailRecord>[] = [
  {
    id: "asset",
    header: "Asset",
    cell: (row) => (
      <div className="space-y-1">
        <p className="font-semibold text-foreground">{row.id}</p>
        <p className="text-sm text-muted-foreground">{row.asset}</p>
      </div>
    ),
  },
  {
    id: "driver",
    header: "Driver",
    cell: (row) => row.driver,
  },
  {
    id: "corridor",
    header: "Corridor",
    cell: (row) => row.corridor,
  },
  {
    id: "status",
    header: "Status",
    cell: (row) => <StatusBadge status={row.status}>{row.status}</StatusBadge>,
  },
  {
    id: "eta",
    header: "ETA",
    cell: (row) => row.eta,
  },
  {
    id: "revenue",
    header: "Revenue",
    headerClassName: "text-right",
    cellClassName: "text-right font-semibold text-foreground",
    cell: (row) => row.revenue,
  },
];

function renderRowDetail(row: RowDetailRecord) {
  return (
    <div className="grid gap-4 xl:grid-cols-[minmax(0,1.25fr)_minmax(250px,0.85fr)]">
      <div className="space-y-4">
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-border/60 bg-surface-2 px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Current journey
            </p>
            <p className="mt-2 text-sm font-semibold text-foreground">
              {row.currentJourney}
            </p>
          </div>
          <div className="rounded-2xl border border-border/60 bg-surface-2 px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Lane
            </p>
            <p className="mt-2 text-sm font-semibold text-foreground">{row.lane}</p>
          </div>
          <div className="rounded-2xl border border-border/60 bg-surface-2 px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Next inspection
            </p>
            <p className="mt-2 text-sm font-semibold text-foreground">
              {row.nextInspection}
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-border/60 bg-surface-2 px-4 py-4">
          <div className="space-y-1">
            <p className="text-sm font-semibold text-foreground">Operational note</p>
            <p className="text-sm leading-6 text-muted-foreground">{row.notes}</p>
          </div>
          <div className="mt-4 rounded-2xl border border-border/50 bg-background/65 px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Telemetry
            </p>
            <p className="mt-2 text-sm text-foreground">{row.telemetry}</p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-border/60 bg-surface-2 px-4 py-4">
        <div className="space-y-1">
          <p className="text-sm font-semibold text-foreground">Readiness checkpoints</p>
          <p className="text-sm leading-6 text-muted-foreground">
            Compact checklist content is a strong fit for the expanded row pattern.
          </p>
        </div>

        <div className="mt-4 space-y-3">
          {row.checkpoints.map((checkpoint) => (
            <div
              key={checkpoint.label}
              className="rounded-2xl border border-border/50 bg-background/65 px-4 py-3"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-foreground">
                    {checkpoint.label}
                  </p>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {checkpoint.value}
                  </p>
                </div>
                <StatusBadge status={checkpoint.tone}>{checkpoint.tone}</StatusBadge>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <Button size="sm">Open profile</Button>
          <Button size="sm" variant="outline">
            Contact driver
          </Button>
        </div>
      </div>
    </div>
  );
}

export function RowDetailPatternPage() {
  const defaultExpandedIds = rowDetailRows[0] ? [rowDetailRows[0].id] : [];

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Reusable block"
        title="Row Detail Table Pattern"
        description="Expandable data grid for cases where operators need more context without leaving the list view."
        actions={
          <>
            <Button variant="outline">Export queue</Button>
            <Button>Add asset</Button>
          </>
        }
      />

      <section className="grid gap-4 md:grid-cols-3">
        {rowDetailMetrics.map((metric, index) => {
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

      <section className="grid gap-4 xl:grid-cols-[minmax(0,1.7fr)_minmax(300px,0.85fr)]">
        <DataTableShell
          title="Expandable fleet queue"
          description="Use this pattern when each row needs a compact drilldown panel for live context, checks, or actions."
          actions={<StatusBadge status="scheduled">Single-row expand</StatusBadge>}
        >
          <RowDetailTable
            columns={rowDetailColumns}
            rows={rowDetailRows}
            getRowId={(row) => row.id}
            renderDetail={renderRowDetail}
            defaultExpandedIds={defaultExpandedIds}
          />
        </DataTableShell>

        <SectionCard
          title="Pattern guidance"
          description="When to keep detail under the row and when to navigate away."
        >
          <div className="space-y-3">
            {rowDetailUsageNotes.map((note) => (
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
              <p className="text-sm font-semibold">Red Taxi recommendation</p>
              <p className="mt-2 text-sm leading-6 text-primary/80">
                Keep row detail focused on operational summary, checklist items, and quick actions. If the content starts to behave like a full workspace, move it to a Resource Detail page.
              </p>
            </div>
          </div>
        </SectionCard>
      </section>
    </div>
  );
}
