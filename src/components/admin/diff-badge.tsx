import type { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const diffBadgeVariants = cva(
  "rounded-full border px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em]",
  {
    variants: {
      tone: {
        added:
          "border-success/25 bg-success/12 text-success dark:border-success/30 dark:bg-success/18",
        removed:
          "border-destructive/22 bg-destructive/12 text-destructive dark:border-destructive/30 dark:bg-destructive/18",
      },
    },
    defaultVariants: {
      tone: "added",
    },
  },
);

type DiffBadgeProps = VariantProps<typeof diffBadgeVariants> & {
  className?: string;
  children?: ReactNode;
};

export function DiffBadge({
  tone = "added",
  children,
  className,
}: DiffBadgeProps) {
  return (
    <Badge
      variant="outline"
      className={cn(diffBadgeVariants({ tone }), className)}
    >
      <span aria-hidden>{tone === "added" ? "+" : "-"}</span>
      {children ?? (tone === "added" ? "Added" : "Removed")}
    </Badge>
  );
}
