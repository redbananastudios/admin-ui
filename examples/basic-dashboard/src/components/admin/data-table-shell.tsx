import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type DataTableShellProps = {
  title: string;
  description?: string;
  actions?: ReactNode;
  children: ReactNode;
  className?: string;
};

export function DataTableShell({
  title,
  description,
  actions,
  children,
  className,
}: DataTableShellProps) {
  return (
    <section
      className={cn(
        "overflow-hidden rounded-[calc(var(--radius)*1.08)] border border-border/70 bg-panel-background/95 shadow-panel",
        className,
      )}
    >
      <div className="flex flex-col gap-4 border-b border-border/60 px-5 py-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-1">
          <h2 className="text-base font-semibold text-panel-foreground">{title}</h2>
          {description ? (
            <p className="text-sm text-muted-foreground">{description}</p>
          ) : null}
        </div>
        {actions ? <div className="flex items-center gap-2">{actions}</div> : null}
      </div>
      <div className="px-3 pb-3 pt-1 sm:px-4">{children}</div>
    </section>
  );
}
