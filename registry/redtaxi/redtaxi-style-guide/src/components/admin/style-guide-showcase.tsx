"use client";

import { Boxes, CircleOff, Filter, Search, SlidersHorizontal, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { EmptyState } from "@/components/admin/empty-state";
import { FilterBar } from "@/components/admin/filter-bar";
import { PageHeader } from "@/components/admin/page-header";
import { SectionCard } from "@/components/admin/section-card";
import { DataTableShell } from "@/components/admin/data-table-shell";
import { StatCard } from "@/components/admin/stat-card";
import { StatusBadge } from "@/components/admin/status-badge";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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

export function StyleGuideShowcase() {
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
          </div>
        </SectionCard>
      </section>

      <section className="grid gap-4 xl:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)]">
        <SectionCard title="Form controls" description="Dense inputs that still feel premium and calm under load.">
          <div className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Input placeholder="Search drivers or bookings" />
              <Select defaultValue="dispatch">
                <SelectTrigger>
                  <SelectValue placeholder="Select view" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dispatch">Dispatch queue</SelectItem>
                  <SelectItem value="fleet">Fleet board</SelectItem>
                  <SelectItem value="billing">Billing ops</SelectItem>
                </SelectContent>
              </Select>
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

        <SectionCard title="Loading states" description="Skeletons should feel like part of the surface, not generic placeholders.">
          <div className="space-y-3">
            <Skeleton className="h-5 w-32" />
            <Skeleton className="h-11 w-full" />
            <Skeleton className="h-28 w-full" />
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
        title="Table example"
        description="Dispatch-critical tables should feel grounded, precise, and legible."
      >
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Trip</TableHead>
              <TableHead>Route</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>ETA</TableHead>
              <TableHead className="text-right">Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-semibold">BK-5102</TableCell>
              <TableCell>City Airport -&gt; Shoreditch</TableCell>
              <TableCell>
                <StatusBadge status="en-route">en-route</StatusBadge>
              </TableCell>
              <TableCell>06 min</TableCell>
              <TableCell className="text-right font-semibold">GBP 41.20</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-semibold">BK-5107</TableCell>
              <TableCell>Paddington -&gt; Heathrow</TableCell>
              <TableCell>
                <StatusBadge status="scheduled">scheduled</StatusBadge>
              </TableCell>
              <TableCell>14 min</TableCell>
              <TableCell className="text-right font-semibold">GBP 58.80</TableCell>
            </TableRow>
          </TableBody>
        </Table>
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
