"use client";

import * as React from "react";
import {
  Boxes,
  ChevronDown,
  CircleOff,
  Filter,
  Search,
  SlidersHorizontal,
  Trash2,
} from "lucide-react";
import { toast } from "sonner";
import { ConfirmDialog } from "@/components/admin/confirm-dialog";
import { DiffBadge } from "@/components/admin/diff-badge";
import { EmptyState } from "@/components/admin/empty-state";
import { FilterBar } from "@/components/admin/filter-bar";
import { PageHeader } from "@/components/admin/page-header";
import { RowDetailTable, type RowDetailTableColumn } from "@/components/admin/row-detail-table";
import { SectionCard } from "@/components/admin/section-card";
import {
  SortableTableHead,
  type SortState,
} from "@/components/admin/sortable-table-head";
import { DataTableShell } from "@/components/admin/data-table-shell";
import { StatCard } from "@/components/admin/stat-card";
import { StatusBadge } from "@/components/admin/status-badge";
import { TablePagination } from "@/components/admin/table-pagination";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogWarning,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DatePicker } from "@/components/ui/date-picker";
import { DateRangePicker } from "@/components/ui/date-range-picker";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ShimmerBlock,
  ShimmerCircle,
  ShimmerLines,
} from "@/components/ui/shimmer";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { Switch } from "@/components/ui/switch";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  rowDetailRows,
  type RowDetailRecord,
} from "@/lib/mock-row-detail-table";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

const chartPreviewData = [
  { day: "Mon", bookings: 118, capacity: 104 },
  { day: "Tue", bookings: 132, capacity: 115 },
  { day: "Wed", bookings: 148, capacity: 124 },
  { day: "Thu", bookings: 141, capacity: 121 },
  { day: "Fri", bookings: 162, capacity: 136 },
  { day: "Sat", bookings: 154, capacity: 130 },
];

const chartPreviewConfig = {
  bookings: {
    label: "Bookings",
    color: "var(--color-chart-1)",
  },
  capacity: {
    label: "Capacity",
    color: "var(--color-chart-3)",
  },
} satisfies ChartConfig;

type TableControlRow = {
  item: string;
  owner: string;
  updated: string;
  changeTone: "added" | "removed";
  changeLabel: string;
};

const tableControlRows: TableControlRow[] = [
  {
    item: "Vehicle document pack",
    owner: "Fleet Ops",
    updated: "02 min ago",
    changeTone: "added",
    changeLabel: "+3 docs",
  },
  {
    item: "Airport corridor rule",
    owner: "Dispatch Lead",
    updated: "08 min ago",
    changeTone: "removed",
    changeLabel: "-1 lane",
  },
  {
    item: "Pricing override",
    owner: "Revenue Ops",
    updated: "16 min ago",
    changeTone: "added",
    changeLabel: "+2 bands",
  },
  {
    item: "Night shift fallback",
    owner: "Control Room",
    updated: "24 min ago",
    changeTone: "removed",
    changeLabel: "-4 slots",
  },
  {
    item: "Driver briefing deck",
    owner: "People Ops",
    updated: "41 min ago",
    changeTone: "added",
    changeLabel: "+1 pack",
  },
  {
    item: "Zone geofence revision",
    owner: "Platform Ops",
    updated: "55 min ago",
    changeTone: "removed",
    changeLabel: "-2 borders",
  },
];

const rowDetailPreviewColumns: RowDetailTableColumn<RowDetailRecord>[] = [
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
    id: "status",
    header: "Status",
    cell: (row) => <StatusBadge status={row.status}>{row.status}</StatusBadge>,
  },
  {
    id: "eta",
    header: "ETA",
    cell: (row) => row.eta,
  },
];

function renderRowDetailPreview(row: RowDetailRecord) {
  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,1.2fr)_minmax(220px,0.8fr)]">
      <div className="space-y-3">
        <div className="rounded-2xl border border-border/60 bg-surface-2 px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Current journey
          </p>
          <p className="mt-2 text-sm font-semibold text-foreground">
            {row.currentJourney}
          </p>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            {row.notes}
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-border/60 bg-surface-2 px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Lane
            </p>
            <p className="mt-2 text-sm font-semibold text-foreground">{row.lane}</p>
          </div>
          <div className="rounded-2xl border border-border/60 bg-surface-2 px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Telemetry
            </p>
            <p className="mt-2 text-sm text-foreground">{row.telemetry}</p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {row.checkpoints.map((checkpoint) => (
          <div
            key={checkpoint.label}
            className="rounded-2xl border border-border/60 bg-surface-2 px-4 py-3"
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
    </div>
  );
}

export function StyleGuideShowcase() {
  const defaultExpandedIds = rowDetailRows[0] ? [rowDetailRows[0].id] : [];
  const [tableSort, setTableSort] = React.useState<SortState>({
    column: "item",
    direction: "asc",
  });
  const [tablePage, setTablePage] = React.useState(1);
  const [tablePageSize, setTablePageSize] = React.useState(3);

  const sortedTableControlRows = tableControlRows.toSorted((left, right) => {
    const direction = tableSort?.direction === "desc" ? -1 : 1;
    const activeColumn = tableSort?.column ?? "item";

    switch (activeColumn) {
      case "owner":
        return left.owner.localeCompare(right.owner) * direction;
      case "updated":
        return left.updated.localeCompare(right.updated) * direction;
      default:
        return left.item.localeCompare(right.item) * direction;
    }
  });

  const paginatedTableControlRows = sortedTableControlRows.slice(
    (tablePage - 1) * tablePageSize,
    tablePage * tablePageSize,
  );

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Visual QA"
        title="Admin style guide"
        description="This page exercises the theme tokens, shell, and wrapper components so dark/light mode can be reviewed quickly."
        actions={
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="outline">Export tokens</Button>
          </div>
        }
      />

      <section className="grid gap-4 xl:grid-cols-2">
        <SectionCard title="Buttons" description="Primary actions, secondary actions, and utility controls.">
          <div className="flex flex-wrap gap-3">
            <Button>Primary action</Button>
            <Button variant="outline">Secondary</Button>
            <Button variant="secondary">Secondary fill</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Escalate</Button>
            <Button size="icon" aria-label="Filter">
              <Filter className="size-4" />
            </Button>
          </div>
        </SectionCard>

        <SectionCard title="Statuses and badges" description="Semantic markers for bookings, drivers, alerts, and health.">
          <div className="flex flex-wrap gap-3">
            <StatusBadge status="scheduled">scheduled</StatusBadge>
            <StatusBadge status="en-route">en-route</StatusBadge>
            <StatusBadge status="boarding">boarding</StatusBadge>
            <StatusBadge status="completed">completed</StatusBadge>
            <StatusBadge status="delayed">delayed</StatusBadge>
            <StatusBadge status="cancelled">cancelled</StatusBadge>
            <DiffBadge tone="added">+4 docs</DiffBadge>
            <DiffBadge tone="removed">-2 lanes</DiffBadge>
          </div>
        </SectionCard>
      </section>

      <section className="grid gap-4 xl:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)]">
        <SectionCard title="Form controls" description="Dense inputs that still feel premium and calm under load.">
          <div className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="style-guide-search">Search workspace</Label>
                <Input
                  id="style-guide-search"
                  placeholder="Search drivers or bookings"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="style-guide-view">View preset</Label>
                <Select defaultValue="dispatch">
                  <SelectTrigger id="style-guide-view">
                    <SelectValue placeholder="Select view" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dispatch">Dispatch queue</SelectItem>
                    <SelectItem value="fleet">Fleet board</SelectItem>
                    <SelectItem value="billing">Billing ops</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <DatePicker defaultValue={new Date(2026, 2, 30)} />
              <DateRangePicker
                defaultValue={{
                  from: new Date(2026, 2, 23),
                  to: new Date(2026, 2, 30),
                }}
              />
            </div>
            <Textarea placeholder="Incident note, shift handover, or trip escalation summary..." />
            <div className="flex flex-wrap items-center gap-6">
              <label className="flex items-center gap-3 text-sm text-foreground">
                <Checkbox defaultChecked />
                Auto-refresh panels
              </label>
              <label className="flex items-center gap-3 text-sm text-foreground">
                <Switch defaultChecked />
                Enable surge watch
              </label>
            </div>

            <Collapsible
              defaultOpen
              className="rounded-[calc(var(--radius)*1.02)] border border-border/60 bg-surface-2/90 shadow-soft"
            >
              <div className="flex items-center justify-between gap-3 px-4 py-3">
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-foreground">
                    Shift handover notes
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Collapsible blocks keep dense forms readable without leaving the page.
                  </p>
                </div>
                <CollapsibleTrigger asChild>
                  <Button type="button" variant="ghost" size="sm">
                    Toggle detail
                    <ChevronDown className="size-4" />
                  </Button>
                </CollapsibleTrigger>
              </div>
              <CollapsibleContent className="border-t border-border/60 px-4 py-4">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-border/60 bg-background/65 px-4 py-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      Handover owner
                    </p>
                    <p className="mt-2 text-sm font-semibold text-foreground">
                      Evening dispatch lead
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border/60 bg-background/65 px-4 py-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      Review window
                    </p>
                    <p className="mt-2 text-sm font-semibold text-foreground">
                      Next 30 minutes
                    </p>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </SectionCard>

        <SectionCard title="Overlay surfaces" description="Dialogs, confirms, sheets, and popovers share the same panel language.">
          <div className="flex flex-wrap gap-3">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Open dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Escalate dispatch issue</DialogTitle>
                  <DialogDescription>
                    Review the surface treatment for structured modal workflows.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button variant="outline">Cancel</Button>
                  <Button>Resolve now</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">
                  <Trash2 className="size-4" />
                  Open alert dialog
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Delete vehicle profile</AlertDialogTitle>
                  <AlertDialogDescription>
                    Use the Red Taxi alert dialog for destructive confirms and other irreversible actions.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogWarning />
                <AlertDialogFooter>
                  <AlertDialogCancel>Keep profile</AlertDialogCancel>
                  <AlertDialogAction>Delete vehicle</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <ConfirmDialog
              title="Archive selected incidents"
              description="Use the reusable confirm wrapper when you need title, description, and loading state without rebuilding the dialog footer each time."
              confirmLabel="Archive batch"
              loadingLabel="Archiving..."
              trigger={<Button variant="outline">Open confirm dialog</Button>}
              onConfirm={() => new Promise((resolve) => setTimeout(resolve, 900))}
            >
              <div className="rounded-2xl border border-border/60 bg-surface-2 px-4 py-3 text-sm leading-6 text-muted-foreground">
                12 incident records will be moved to the archive queue and removed from the live watchlist.
              </div>
            </ConfirmDialog>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="secondary">Open sheet</Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Driver profile drawer</SheetTitle>
                  <SheetDescription>
                    Persistent side-surface for operational details and quick edits.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost">Open popover</Button>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverHeader>
                  <PopoverTitle>Zone alert</PopoverTitle>
                  <PopoverDescription>
                    Canary Wharf demand exceeded the configured threshold by 18%.
                  </PopoverDescription>
                </PopoverHeader>
              </PopoverContent>
            </Popover>

            <Button
              variant="outline"
              onClick={() =>
                toast.success("Vehicle updated", {
                  description:
                    "The latest profile changes are ready for tonight's publish window.",
                  action: {
                    label: "Undo",
                    onClick: () => {},
                  },
                })
              }
            >
              Show success toast
            </Button>

            <Button
              variant="ghost"
              onClick={() =>
                toast.error("Update failed", {
                  description:
                    "Insurance renewal could not be saved because the compliance API timed out.",
                })
              }
            >
              Show error toast
            </Button>
          </div>
        </SectionCard>
      </section>

      <section className="grid gap-4 xl:grid-cols-2">
        <SectionCard title="Tabs" description="Used for compact view switching and secondary navigation.">
          <Tabs defaultValue="overview">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="dispatch">Dispatch</TabsTrigger>
              <TabsTrigger value="billing">Billing</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="pt-4 text-sm text-muted-foreground">
              Overview tabs should feel grounded, not flashy.
            </TabsContent>
            <TabsContent value="dispatch" className="pt-4 text-sm text-muted-foreground">
              Dispatch view variants inherit the same card and surface language.
            </TabsContent>
            <TabsContent value="billing" className="pt-4 text-sm text-muted-foreground">
              Billing and settings screens should still look like the same product.
            </TabsContent>
          </Tabs>
        </SectionCard>

        <SectionCard title="Loading states" description="Use skeletons for simple placeholders and shimmer blocks when a richer loading scaffold reads better.">
          <div className="space-y-4">
            <Skeleton className="h-5 w-32" />
            <Skeleton className="h-11 w-full" />
            <Skeleton className="h-28 w-full" />
            <div className="grid gap-3 rounded-[calc(var(--radius)*1.02)] border border-border/60 bg-surface-2/90 p-4 shadow-soft">
              <div className="flex items-center gap-3">
                <ShimmerCircle />
                <div className="flex-1 space-y-2">
                  <ShimmerBlock className="h-4 w-1/3" />
                  <ShimmerBlock className="h-3.5 w-2/5" />
                </div>
              </div>
              <ShimmerLines lines={3} />
            </div>
          </div>
        </SectionCard>
      </section>

      <SectionCard
        title="Charts"
        description="Real chart support via the shadcn chart component and Recharts, styled to match the Red Taxi surfaces."
      >
        <ChartContainer
          config={chartPreviewConfig}
          className="min-h-[16rem] w-full"
        >
          <AreaChart accessibilityLayer data={chartPreviewData}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tickMargin={10}
            />
            <ChartTooltip content={<ChartTooltipContent indicator="line" />} />
            <ChartLegend
              verticalAlign="top"
              content={<ChartLegendContent className="justify-start gap-5 pb-4 pt-0" />}
            />
            <Area
              type="monotone"
              dataKey="capacity"
              stroke="var(--color-capacity)"
              fill="var(--color-capacity)"
              fillOpacity={0.12}
              strokeWidth={1.75}
            />
            <Area
              type="monotone"
              dataKey="bookings"
              stroke="var(--color-bookings)"
              fill="var(--color-bookings)"
              fillOpacity={0.16}
              strokeWidth={2.1}
            />
          </AreaChart>
        </ChartContainer>
      </SectionCard>

      <section className="grid gap-4 xl:grid-cols-2">
        <div className="grid gap-4 md:grid-cols-2">
          <StatCard
            icon={Boxes}
            label="Template coverage"
            value="17"
            delta="+3"
            trend="up"
            description="Reusable admin wrappers ready for future pages."
          />
          <StatCard
            icon={SlidersHorizontal}
            label="Theme tokens"
            value="30+"
            delta="Stable"
            trend="stable"
            description="Semantic tokens aligned across both color modes."
          />
        </div>

        <SectionCard title="Filter bar" description="Reusable toolbar container for search, filters, and actions.">
          <FilterBar>
            <div className="flex min-w-[220px] flex-1 items-center gap-2">
              <Search className="size-4 text-muted-foreground" />
              <Input placeholder="Search anything..." className="border-0 bg-transparent shadow-none focus-visible:bg-transparent" />
            </div>
            <Select defaultValue="today">
              <SelectTrigger className="sm:w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="week">This week</SelectItem>
                <SelectItem value="month">This month</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">Reset</Button>
            <Button>Apply</Button>
          </FilterBar>
        </SectionCard>
      </section>

      <DataTableShell
        title="Table controls"
        description="Sortable headers, pagination, and diff badges for list screens that need more than a static table."
      >
        <div className="space-y-4">
          <Table>
            <TableHeader>
              <TableRow>
                <SortableTableHead
                  column="item"
                  sort={tableSort}
                  onSortChange={(nextSort) => {
                    setTableSort(nextSort);
                    setTablePage(1);
                  }}
                >
                  Item
                </SortableTableHead>
                <SortableTableHead
                  column="owner"
                  sort={tableSort}
                  onSortChange={(nextSort) => {
                    setTableSort(nextSort);
                    setTablePage(1);
                  }}
                >
                  Owner
                </SortableTableHead>
                <TableHead>Diff</TableHead>
                <SortableTableHead
                  column="updated"
                  sort={tableSort}
                  onSortChange={(nextSort) => {
                    setTableSort(nextSort);
                    setTablePage(1);
                  }}
                  align="right"
                >
                  Updated
                </SortableTableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedTableControlRows.map((row) => (
                <TableRow key={row.item}>
                  <TableCell className="font-semibold">{row.item}</TableCell>
                  <TableCell>{row.owner}</TableCell>
                  <TableCell>
                    <DiffBadge tone={row.changeTone}>{row.changeLabel}</DiffBadge>
                  </TableCell>
                  <TableCell className="text-right">{row.updated}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <TablePagination
            totalItems={tableControlRows.length}
            page={tablePage}
            pageSize={tablePageSize}
            onPageChange={setTablePage}
            onPageSizeChange={(nextPageSize) => {
              setTablePageSize(nextPageSize);
              setTablePage(1);
            }}
            pageSizeOptions={[3, 4, 6]}
            itemLabel="controls"
          />
        </div>
      </DataTableShell>

      <DataTableShell
        title="Row detail view"
        description="Expandable rows are the Red Taxi answer when operators need more context without leaving the table."
      >
        <RowDetailTable
          columns={rowDetailPreviewColumns}
          rows={rowDetailRows.slice(0, 3)}
          getRowId={(row) => row.id}
          renderDetail={renderRowDetailPreview}
          defaultExpandedIds={defaultExpandedIds}
        />
      </DataTableShell>

      <EmptyState
        icon={CircleOff}
        title="No filtered incidents"
        description="Empty states should still feel premium and deliberate, with one clear next action when relevant."
        action={<Button>Open all incidents</Button>}
      />
    </div>
  );
}
