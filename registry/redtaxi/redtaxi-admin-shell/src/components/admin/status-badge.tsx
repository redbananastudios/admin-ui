import type { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const statusBadgeVariants = cva(
  "rounded-full border px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em]",
  {
    variants: {
      status: {
        scheduled:
          "border-info/25 bg-info/10 text-info dark:border-info/30 dark:bg-info/15",
        "en-route":
          "border-primary/30 bg-primary/15 text-primary dark:border-primary/35 dark:bg-primary/18",
        boarding:
          "border-warning/25 bg-warning/12 text-warning dark:border-warning/30 dark:bg-warning/18",
        completed:
          "border-success/25 bg-success/12 text-success dark:border-success/30 dark:bg-success/18",
        delayed:
          "border-warning/25 bg-warning/14 text-warning dark:border-warning/35 dark:bg-warning/20",
        cancelled:
          "border-destructive/20 bg-destructive/12 text-destructive dark:border-destructive/30 dark:bg-destructive/18",
        available:
          "border-success/25 bg-success/12 text-success dark:border-success/30 dark:bg-success/18",
        break:
          "border-warning/25 bg-warning/12 text-warning dark:border-warning/30 dark:bg-warning/18",
        offline:
          "border-border bg-muted/70 text-muted-foreground dark:bg-muted/80",
      },
    },
    defaultVariants: {
      status: "scheduled",
    },
  },
);

type StatusBadgeProps = VariantProps<typeof statusBadgeVariants> & {
  className?: string;
  children: ReactNode;
};

export function StatusBadge({
  status,
  children,
  className,
}: StatusBadgeProps) {
  return (
    <Badge
      variant="outline"
      className={cn(statusBadgeVariants({ status }), className)}
    >
      {children}
    </Badge>
  );
}
