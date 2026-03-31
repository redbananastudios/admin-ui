import * as React from "react";
import { cn } from "@/lib/utils";

function ShimmerBlock({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="shimmer-block"
      className={cn(
        "relative overflow-hidden rounded-[calc(var(--radius)*0.78)] border border-border/40 bg-surface-3/85",
        "before:absolute before:inset-0 before:-translate-x-full before:bg-linear-to-r before:from-transparent before:via-foreground/10 before:to-transparent before:animate-[shimmer_2.1s_infinite]",
        className,
      )}
      {...props}
    />
  );
}

function ShimmerCircle({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <ShimmerBlock
      className={cn("size-11 rounded-full border-border/35", className)}
      {...props}
    />
  );
}

function ShimmerLines({
  className,
  lines = 3,
}: {
  className?: string;
  lines?: number;
}) {
  return (
    <div className={cn("space-y-2.5", className)}>
      {Array.from({ length: lines }, (_, index) => (
        <ShimmerBlock
          key={index}
          className={cn(
            "h-4",
            index === lines - 1 ? "w-2/3" : "w-full",
          )}
        />
      ))}
    </div>
  );
}

export { ShimmerBlock, ShimmerCircle, ShimmerLines };
