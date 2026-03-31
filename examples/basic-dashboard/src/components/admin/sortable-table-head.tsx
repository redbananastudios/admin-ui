"use client";

import type { ReactNode } from "react";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { TableHead } from "@/components/ui/table";
import { cn } from "@/lib/utils";

export type SortDirection = "asc" | "desc";

export type SortState = {
  column: string;
  direction: SortDirection;
} | null;

type SortableTableHeadProps = {
  column: string;
  children: ReactNode;
  sort: SortState;
  onSortChange: (nextSort: SortState) => void;
  className?: string;
  buttonClassName?: string;
  align?: "left" | "right";
};

export function SortableTableHead({
  column,
  children,
  sort,
  onSortChange,
  className,
  buttonClassName,
  align = "left",
}: SortableTableHeadProps) {
  const isActive = sort?.column === column;
  const direction = isActive ? sort.direction : null;

  function handleSort() {
    onSortChange({
      column,
      direction:
        direction === "asc" ? "desc" : "asc",
    });
  }

  return (
    <TableHead
      className={cn(align === "right" && "text-right", className)}
    >
      <Button
        type="button"
        variant="ghost"
        size="sm"
        className={cn(
          "-ml-3 h-8 gap-1.5 rounded-xl px-3 text-[0.72rem] uppercase tracking-[0.16em] text-muted-foreground hover:bg-surface-3 hover:text-foreground",
          align === "right" && "ml-auto",
          buttonClassName,
        )}
        onClick={handleSort}
      >
        <span>{children}</span>
        {direction === "asc" ? (
          <ArrowUp className="size-3.5" />
        ) : direction === "desc" ? (
          <ArrowDown className="size-3.5" />
        ) : (
          <ArrowUpDown className="size-3.5" />
        )}
      </Button>
    </TableHead>
  );
}
