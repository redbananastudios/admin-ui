import { cn } from "@/lib/utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        "animate-pulse rounded-[calc(var(--radius)*0.7)] bg-linear-to-r from-surface-3 via-accent/65 to-surface-3",
        className,
      )}
      {...props}
    />
  )
}

export { Skeleton }
