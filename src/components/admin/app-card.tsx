import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type AppCardProps = ComponentProps<"section">;

export function AppCard({ className, ...props }: AppCardProps) {
  return (
    <section
      className={cn(
        "flex flex-col rounded-[calc(var(--radius)*1.05)] border border-border/70 bg-panel-background/95 p-5 text-panel-foreground shadow-panel",
        className,
      )}
      {...props}
    />
  );
}
