import type { ReactNode } from "react";
import {
  CalendarRange,
  Download,
  Plus,
  RefreshCw,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import { FilterBar } from "@/components/admin/filter-bar";
import { Button } from "@/components/ui/button";
import { DateRangePicker } from "@/components/ui/date-range-picker";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

type FilterOption = {
  label: string;
  value: string;
};

type SearchStatusToolbarProps = {
  searchPlaceholder?: string;
  statusOptions: FilterOption[];
  segmentOptions?: FilterOption[];
  primaryActionLabel?: string;
  leadingAction?: ReactNode;
  className?: string;
};

type SearchDateRangeToolbarProps = {
  searchPlaceholder?: string;
  periodOptions: FilterOption[];
  primaryActionLabel?: string;
  className?: string;
};

type BulkActionToolbarProps = {
  selectionLabel: string;
  className?: string;
};

function ToolbarSearchInput({
  placeholder,
  className,
}: {
  placeholder: string;
  className?: string;
}) {
  return (
    <div className={cn("relative min-w-[240px] flex-1", className)}>
      <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
      <Input className="pl-11" placeholder={placeholder} />
    </div>
  );
}

function ToolbarSelect({
  defaultValue,
  placeholder,
  options,
  className,
}: {
  defaultValue: string;
  placeholder: string;
  options: FilterOption[];
  className?: string;
}) {
  return (
    <Select defaultValue={defaultValue}>
      <SelectTrigger className={cn("min-w-[160px]", className)}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export function SearchStatusToolbar({
  searchPlaceholder = "Search vehicles, drivers, or registrations",
  statusOptions,
  segmentOptions = [],
  primaryActionLabel = "Add record",
  leadingAction,
  className,
}: SearchStatusToolbarProps) {
  return (
    <FilterBar className={cn("gap-3", className)}>
      <ToolbarSearchInput placeholder={searchPlaceholder} />
      <ToolbarSelect
        defaultValue={statusOptions[0]?.value ?? "all"}
        placeholder="Status"
        options={statusOptions}
      />
      {segmentOptions.length ? (
        <ToolbarSelect
          defaultValue={segmentOptions[0]?.value ?? "all"}
          placeholder="Segment"
          options={segmentOptions}
        />
      ) : null}
      <div className="flex w-full flex-wrap items-center gap-2 sm:ml-auto sm:w-auto sm:justify-end">
        {leadingAction}
        <Button size="sm" variant="outline">
          <SlidersHorizontal className="size-4" />
          Advanced filters
        </Button>
        <Button size="sm" variant="outline">
          <Download className="size-4" />
          Export
        </Button>
        <Button size="sm">
          <Plus className="size-4" />
          {primaryActionLabel}
        </Button>
      </div>
    </FilterBar>
  );
}

export function SearchDateRangeToolbar({
  searchPlaceholder = "Search routes, corridors, or KPI groups",
  periodOptions,
  primaryActionLabel = "Export weekly pack",
  className,
}: SearchDateRangeToolbarProps) {
  return (
    <FilterBar className={cn("gap-3", className)}>
      <ToolbarSearchInput placeholder={searchPlaceholder} />
      <ToolbarSelect
        defaultValue={periodOptions[0]?.value ?? "7d"}
        placeholder="Period"
        options={periodOptions}
      />
      <DateRangePicker
        className="min-w-[250px] sm:w-[250px]"
        defaultValue={{
          from: new Date(2026, 2, 23),
          to: new Date(2026, 2, 30),
        }}
        placeholder="Date range"
      />
      <div className="flex w-full flex-wrap items-center gap-2 sm:ml-auto sm:w-auto sm:justify-end">
        <Button size="sm" variant="outline">
          <CalendarRange className="size-4" />
          Compare period
        </Button>
        <Button size="sm" variant="outline">
          <RefreshCw className="size-4" />
          Refresh
        </Button>
        <Button size="sm">
          <Download className="size-4" />
          {primaryActionLabel}
        </Button>
      </div>
    </FilterBar>
  );
}

export function BulkActionToolbar({
  selectionLabel,
  className,
}: BulkActionToolbarProps) {
  return (
    <FilterBar className={cn("items-center justify-between gap-3", className)}>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Batch operations
        </p>
        <p className="mt-1 text-sm font-medium text-foreground">{selectionLabel}</p>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Button size="sm" variant="outline">
          Assign driver
        </Button>
        <Button size="sm" variant="outline">
          Change status
        </Button>
        <Button size="sm">Create dispatch batch</Button>
      </div>
    </FilterBar>
  );
}
