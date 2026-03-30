import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { AppCard } from "@/components/admin/app-card";

type EmptyStateProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  action?: ReactNode;
};

export function EmptyState({
  icon: Icon,
  title,
  description,
  action,
}: EmptyStateProps) {
  return (
    <AppCard className="items-center justify-center gap-4 border-dashed bg-panel-background/80 py-12 text-center">
      <div className="rounded-3xl border border-primary/20 bg-primary/12 p-4 text-primary">
        <Icon className="size-6" />
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <p className="max-w-md text-sm leading-6 text-muted-foreground">
          {description}
        </p>
      </div>
      {action}
    </AppCard>
  );
}
