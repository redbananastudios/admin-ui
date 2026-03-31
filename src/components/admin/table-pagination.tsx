"use client";

import * as React from "react";
import { startTransition } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type TablePaginationProps = {
  totalItems: number;
  page?: number;
  defaultPage?: number;
  pageSize?: number;
  defaultPageSize?: number;
  pageSizeOptions?: number[];
  onPageChange?: (page: number) => void;
  onPageSizeChange?: (pageSize: number) => void;
  itemLabel?: string;
  className?: string;
};

export function TablePagination({
  totalItems,
  page,
  defaultPage = 1,
  pageSize,
  defaultPageSize = 5,
  pageSizeOptions = [5, 10, 20, 50],
  onPageChange,
  onPageSizeChange,
  itemLabel = "rows",
  className,
}: TablePaginationProps) {
  const [internalPage, setInternalPage] = React.useState(defaultPage);
  const [internalPageSize, setInternalPageSize] =
    React.useState(defaultPageSize);

  const resolvedPageSize =
    pageSize === undefined ? internalPageSize : pageSize;
  const totalPages = Math.max(1, Math.ceil(totalItems / resolvedPageSize));
  const resolvedPage = Math.min(
    page === undefined ? internalPage : page,
    totalPages,
  );

  const rangeStart = totalItems ? (resolvedPage - 1) * resolvedPageSize + 1 : 0;
  const rangeEnd = Math.min(resolvedPage * resolvedPageSize, totalItems);

  function updatePage(nextPage: number) {
    const safePage = Math.min(Math.max(nextPage, 1), totalPages);

    if (page === undefined) {
      startTransition(() => {
        setInternalPage(safePage);
      });
    }

    onPageChange?.(safePage);
  }

  function updatePageSize(nextPageSize: number) {
    if (pageSize === undefined) {
      startTransition(() => {
        setInternalPageSize(nextPageSize);
      });
    }

    onPageSizeChange?.(nextPageSize);
    updatePage(1);
  }

  return (
    <div
      className={cn(
        "flex flex-col gap-3 rounded-[calc(var(--radius)*1.02)] border border-border/60 bg-surface-2/90 px-3 py-3 shadow-soft sm:flex-row sm:items-center sm:justify-between",
        className,
      )}
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
        <div className="flex items-center gap-2">
          <Label htmlFor="table-pagination-size" className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
            Rows per page
          </Label>
          <Select
            value={String(resolvedPageSize)}
            onValueChange={(value) => updatePageSize(Number(value))}
          >
            <SelectTrigger
              id="table-pagination-size"
              size="sm"
              className="w-[92px]"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {pageSizeOptions.map((option) => (
                <SelectItem key={option} value={String(option)}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <p className="text-sm text-muted-foreground">
          {rangeStart}-{rangeEnd} of {totalItems} {itemLabel}
        </p>
      </div>

      <div className="flex items-center gap-2">
        <p className="mr-1 text-sm text-muted-foreground">
          Page {resolvedPage} of {totalPages}
        </p>
        <Button
          type="button"
          variant="outline"
          size="icon-sm"
          aria-label="First page"
          disabled={resolvedPage <= 1}
          onClick={() => updatePage(1)}
        >
          <ChevronsLeft className="size-3.5" />
        </Button>
        <Button
          type="button"
          variant="outline"
          size="icon-sm"
          aria-label="Previous page"
          disabled={resolvedPage <= 1}
          onClick={() => updatePage(resolvedPage - 1)}
        >
          <ChevronLeft className="size-3.5" />
        </Button>
        <Button
          type="button"
          variant="outline"
          size="icon-sm"
          aria-label="Next page"
          disabled={resolvedPage >= totalPages}
          onClick={() => updatePage(resolvedPage + 1)}
        >
          <ChevronRight className="size-3.5" />
        </Button>
        <Button
          type="button"
          variant="outline"
          size="icon-sm"
          aria-label="Last page"
          disabled={resolvedPage >= totalPages}
          onClick={() => updatePage(totalPages)}
        >
          <ChevronsRight className="size-3.5" />
        </Button>
      </div>
    </div>
  );
}
