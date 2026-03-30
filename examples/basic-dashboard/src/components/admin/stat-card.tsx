import type { LucideIcon } from "lucide-react";
import { ArrowDownRight, ArrowRight, ArrowUpRight } from "lucide-react";
import { AppCard } from "@/components/admin/app-card";
import { cn } from "@/lib/utils";

type StatCardProps = {
  label: string;
  value: string;
  delta: string;
  trend: "up" | "down" | "stable";
  description: string;
  icon: LucideIcon;
};

const trendStyles = {
  up: "text-success",
  down: "text-destructive",
  stable: "text-muted-foreground",
};

const trendIcons = {
  up: ArrowUpRight,
  down: ArrowDownRight,
  stable: ArrowRight,
};

export function StatCard({
  label,
  value,
  delta,
  trend,
  description,
  icon: Icon,
}: StatCardProps) {
  const TrendIcon = trendIcons[trend];

  return (
    <AppCard className="gap-4 bg-linear-to-br from-panel-background via-panel-background to-surface-3/80">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">{label}</p>
          <div className="flex items-end gap-3">
            <p className="text-3xl font-semibold tracking-[-0.05em] text-foreground">
              {value}
            </p>
            <span
              className={cn(
                "inline-flex items-center gap-1 rounded-full border border-current/12 px-2 py-1 text-xs font-semibold",
                trendStyles[trend],
              )}
            >
              <TrendIcon className="size-3.5" />
              {delta}
            </span>
          </div>
        </div>
        <div className="rounded-2xl border border-primary/20 bg-primary/12 p-3 text-primary shadow-soft">
          <Icon className="size-5" />
        </div>
      </div>
      <p className="text-sm leading-6 text-muted-foreground">{description}</p>
    </AppCard>
  );
}
