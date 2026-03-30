"use client"

import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"

type DatePickerProps = Omit<
  React.ComponentProps<typeof Calendar>,
  "mode" | "selected" | "onSelect"
> & {
  id?: string
  name?: string
  value?: Date
  defaultValue?: Date
  onChange?: (date?: Date) => void
  placeholder?: string
  className?: string
  align?: "start" | "center" | "end"
}

export function DatePicker({
  id,
  name,
  value,
  defaultValue,
  onChange,
  placeholder = "Select date",
  className,
  align = "start",
  ...props
}: DatePickerProps) {
  const [open, setOpen] = React.useState(false)
  const [internalDate, setInternalDate] = React.useState<Date | undefined>(
    defaultValue,
  )

  const isControlled = value !== undefined
  const selectedDate = isControlled ? value : internalDate

  function handleSelect(date?: Date) {
    if (!isControlled) {
      setInternalDate(date)
    }

    onChange?.(date)
    setOpen(false)
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
            !selectedDate && "text-muted-foreground",
            className,
          )}
        >
          <span className="truncate">
            {selectedDate ? format(selectedDate, "dd MMM yyyy") : placeholder}
          </span>
          <CalendarIcon className="size-4 text-muted-foreground" />
        </Button>
      </PopoverTrigger>
      <PopoverContent align={align} className="w-auto p-0">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={handleSelect}
          className="bg-popover/98"
          initialFocus
          {...props}
        />
      </PopoverContent>
      {name ? (
        <input
          type="hidden"
          name={name}
          value={selectedDate ? format(selectedDate, "yyyy-MM-dd") : ""}
        />
      ) : null}
    </Popover>
  )
}
