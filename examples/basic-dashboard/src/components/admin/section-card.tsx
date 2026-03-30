import type { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const sectionCardVariants = cva("shadow-panel", {
  variants: {
    tone: {
      default: "bg-panel-background text-panel-foreground",
      muted: "bg-surface-2 text-panel-foreground",
      transparent: "bg-panel-background/90 text-panel-foreground backdrop-blur-sm",
    },
  },
  defaultVariants: {
    tone: "default",
  },
});

type SectionCardProps = VariantProps<typeof sectionCardVariants> & {
  title?: string;
  description?: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
};

export function SectionCard({
  title,
  description,
  action,
  children,
  className,
  contentClassName,
  tone,
}: SectionCardProps) {
  return (
    <Card
      className={cn(
        "border border-border/70 bg-panel-background/95 shadow-panel",
        sectionCardVariants({ tone }),
        className,
      )}
    >
      {title || description || action ? (
        <CardHeader className="border-b border-border/60 pb-4">
          <div className="space-y-1">
            {title ? <CardTitle>{title}</CardTitle> : null}
            {description ? <CardDescription>{description}</CardDescription> : null}
          </div>
          {action ? <CardAction>{action}</CardAction> : null}
        </CardHeader>
      ) : null}
      <CardContent className={cn("pt-5", contentClassName)}>{children}</CardContent>
    </Card>
  );
}
