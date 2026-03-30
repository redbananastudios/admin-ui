"use client";

import * as React from "react";
import { startTransition } from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

export type RowDetailTableColumn<T> = {
  id: string;
  header: React.ReactNode;
  cell: (row: T) => React.ReactNode;
  headerClassName?: string;
  cellClassName?: string;
};

type RowDetailTableProps<T> = {
  columns: RowDetailTableColumn<T>[];
  rows: T[];
  getRowId: (row: T) => string;
  renderDetail: (row: T) => React.ReactNode;
  defaultExpandedIds?: string[];
  expandedIds?: string[];
  onExpandedChange?: (expandedIds: string[]) => void;
  expansionMode?: "single" | "multiple";
  emptyState?: React.ReactNode;
  className?: string;
  detailPanelClassName?: string;
};

export function RowDetailTable<T>({
  columns,
  rows,
  getRowId,
  renderDetail,
  defaultExpandedIds = [],
  expandedIds,
  onExpandedChange,
  expansionMode = "single",
  emptyState,
  className,
  detailPanelClassName,
}: RowDetailTableProps<T>) {
  const [internalExpandedIds, setInternalExpandedIds] =
    React.useState<string[]>(defaultExpandedIds);

  const resolvedExpandedIds =
    expandedIds === undefined ? internalExpandedIds : expandedIds;

  const expandedLookup = React.useMemo(
    () => new Set(resolvedExpandedIds),
    [resolvedExpandedIds],
  );

  function updateExpanded(nextExpandedIds: string[]) {
    if (expandedIds === undefined) {
      startTransition(() => {
        setInternalExpandedIds(nextExpandedIds);
      });
    }

    onExpandedChange?.(nextExpandedIds);
  }

  function toggleRow(rowId: string) {
    const isExpanded = expandedLookup.has(rowId);

    if (isExpanded) {
      updateExpanded(resolvedExpandedIds.filter((id) => id !== rowId));
      return;
    }

    if (expansionMode === "single") {
      updateExpanded([rowId]);
      return;
    }

    updateExpanded([...resolvedExpandedIds, rowId]);
  }

  if (!rows.length) {
    return emptyState ? <>{emptyState}</> : null;
  }

  return (
    <Table className={className}>
      <TableHeader>
        <TableRow>
          <TableHead className="w-11 pl-2 pr-0">
            <span className="sr-only">Expand row</span>
          </TableHead>
          {columns.map((column) => (
            <TableHead key={column.id} className={column.headerClassName}>
              {column.header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row) => {
          const rowId = getRowId(row);
          const detailId = `${rowId}-detail`;
          const isExpanded = expandedLookup.has(rowId);

          return (
            <React.Fragment key={rowId}>
              <TableRow
                data-state={isExpanded ? "selected" : undefined}
                className={cn(
                  "group/row",
                  isExpanded && "border-b-0 bg-table-row-hover/55",
                )}
              >
                <TableCell className="w-11 pl-2 pr-0">
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon-sm"
                    aria-expanded={isExpanded}
                    aria-controls={detailId}
                    aria-label={isExpanded ? "Collapse row" : "Expand row"}
                    className={cn(
                      "text-muted-foreground hover:bg-surface-3 hover:text-foreground",
                      isExpanded && "bg-surface-3 text-primary",
                    )}
                    onClick={() => toggleRow(rowId)}
                  >
                    <ChevronRight
                      className={cn(
                        "size-4 transition-transform duration-200",
                        isExpanded && "rotate-90",
                      )}
                    />
                  </Button>
                </TableCell>

                {columns.map((column) => (
                  <TableCell key={column.id} className={column.cellClassName}>
                    {column.cell(row)}
                  </TableCell>
                ))}
              </TableRow>

              {isExpanded ? (
                <TableRow
                  id={detailId}
                  className="border-b border-border/60 bg-transparent hover:bg-transparent"
                >
                  <TableCell
                    colSpan={columns.length + 1}
                    className="bg-surface-1/60 px-3 py-3 sm:px-4"
                  >
                    <div
                      className={cn(
                        "animate-in fade-in-0 slide-in-from-top-1 rounded-[calc(var(--radius)*0.92)] border border-border/60 bg-panel-background/95 p-4 shadow-soft duration-200",
                        detailPanelClassName,
                      )}
                    >
                      {renderDetail(row)}
                    </div>
                  </TableCell>
                </TableRow>
              ) : null}
            </React.Fragment>
          );
        })}
      </TableBody>
    </Table>
  );
}
