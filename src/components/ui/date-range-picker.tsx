"use client"

import * as React from "react"
import { format } from "date-fns"
import type { DateRange } from "react-day-picker"
import { CalendarRangeIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"

function isSingleDayRange(range?: DateRange) {
  return Boolean(
    range?.from &&
      range?.to &&
      range.from.getTime() === range.to.getTime(),
  )
}

function formatRangeLabel(range?: DateRange) {
  if (!range?.from) {
    return null
  }

  if (!range.to || isSingleDayRange(range)) {
    return format(range.from, "dd MMM yyyy")
  }

  const sameYear = range.from.getFullYear() === range.to.getFullYear()
  const sameMonth = sameYear && range.from.getMonth() === range.to.getMonth()

  if (sameMonth) {
    return `${format(range.from, "dd")} - ${format(range.to, "dd MMM yyyy")}`
  }

  if (sameYear) {
    return `${format(range.from, "dd MMM")} - ${format(range.to, "dd MMM yyyy")}`
  }

  return `${format(range.from, "dd MMM yyyy")} - ${format(range.to, "dd MMM yyyy")}`
}

type DateRangePickerProps = Omit<
  React.ComponentProps<typeof Calendar>,
  "mode" | "selected" | "onSelect"
> & {
  id?: string
  value?: DateRange
  defaultValue?: DateRange
  onChange?: (range?: DateRange) => void
  placeholder?: string
  className?: string
  align?: "start" | "center" | "end"
  nameFrom?: string
  nameTo?: string
}

export function DateRangePicker({
  id,
  value,
  defaultValue,
  onChange,
  placeholder = "Select date range",
  className,
  align = "start",
  nameFrom,
  nameTo,
  numberOfMonths = 2,
  showOutsideDays = false,
  ...props
}: DateRangePickerProps) {
  const [open, setOpen] = React.useState(false)
  const [internalRange, setInternalRange] = React.useState<DateRange | undefined>(
    defaultValue,
  )

  const isControlled = value !== undefined
  const selectedRange = isControlled ? value : internalRange
  const label = formatRangeLabel(selectedRange)

  function handleSelect(range?: DateRange, triggerDate?: Date) {
    const wasAwaitingEndDate = Boolean(
      selectedRange?.from &&
        (!selectedRange?.to || isSingleDayRange(selectedRange)),
    )

    const shouldResetExistingRange = Boolean(
      triggerDate &&
        selectedRange?.from &&
        selectedRange?.to &&
        !isSingleDayRange(selectedRange),
    )

    const resolvedRange =
      shouldResetExistingRange && triggerDate
        ? { from: triggerDate, to: triggerDate }
        : range

    const completedDistinctRange = Boolean(
      resolvedRange?.from &&
        resolvedRange?.to &&
        resolvedRange.from.getTime() !== resolvedRange.to.getTime(),
    )

    if (!isControlled) {
      setInternalRange(resolvedRange)
    }

    onChange?.(resolvedRange)

    if (wasAwaitingEndDate && completedDistinctRange) {
      setOpen(false)
    }
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          id={id}
          type="button"
          variant="outline"
          className={cn(
            "h-11 w-full justify-between rounded-2xl border-input/90 bg-surface-2 px-4 py-2 text-left text-sm font-medium text-foreground shadow-soft hover:bg-surface-2 hover:text-foreground focus-visible:bg-background",
            !label && "text-muted-foreground",
            className,
          )}
        >
          <span className="truncate">{label ?? placeholder}</span>
          <CalendarRangeIcon className="size-4 text-muted-foreground" />
        </Button>
      </PopoverTrigger>
      <PopoverContent align={align} className="w-auto gap-0 overflow-hidden p-0">
        <Calendar
          mode="range"
          selected={selectedRange}
          onSelect={handleSelect}
          defaultMonth={selectedRange?.from}
          numberOfMonths={numberOfMonths}
          showOutsideDays={showOutsideDays}
          className="bg-popover/98"
          initialFocus
          {...props}
        />
        <div className="flex items-center justify-between gap-3 border-t border-border/60 bg-panel-muted/80 px-4 py-3 text-sm">
          <p className="text-muted-foreground">
            {label ?? "Choose a start and end date"}
          </p>
          {selectedRange?.from || selectedRange?.to ? (
            <Button
              size="sm"
              variant="ghost"
              onClick={() => {
                if (!isControlled) {
                  setInternalRange(undefined)
                }

                onChange?.(undefined)
              }}
            >
              Clear
            </Button>
          ) : null}
        </div>
      </PopoverContent>
      {nameFrom ? (
        <input
          type="hidden"
          name={nameFrom}
          value={selectedRange?.from ? format(selectedRange.from, "yyyy-MM-dd") : ""}
        />
      ) : null}
      {nameTo ? (
        <input
          type="hidden"
          name={nameTo}
          value={selectedRange?.to ? format(selectedRange.to, "yyyy-MM-dd") : ""}
        />
      ) : null}
    </Popover>
  )
}
