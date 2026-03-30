"use client"

import { useTheme } from "next-themes"
import { Toaster } from "sonner"

export function AppToaster() {
  const { resolvedTheme } = useTheme()

  return (
    <Toaster
      position="top-right"
      closeButton
      theme={resolvedTheme === "dark" ? "dark" : "light"}
      toastOptions={{
        classNames: {
          toast:
            "group rounded-[calc(var(--radius)*0.95)] border border-border/70 bg-popover/98 px-4 py-3 text-popover-foreground shadow-panel backdrop-blur-xl",
          title: "text-sm font-semibold tracking-[-0.02em] text-foreground",
          description: "text-sm leading-6 text-muted-foreground",
          actionButton:
            "!h-8 !rounded-[calc(var(--radius)*0.72)] !bg-primary !px-3 !text-xs !font-semibold !text-primary-foreground",
          cancelButton:
            "!h-8 !rounded-[calc(var(--radius)*0.72)] !border !border-border/70 !bg-surface-2 !px-3 !text-xs !font-semibold !text-foreground",
          closeButton:
            "!border-border/60 !bg-surface-2 !text-muted-foreground hover:!bg-surface-3 hover:!text-foreground",
          success: "!border-success/24 !bg-success/10",
          error: "!border-destructive/24 !bg-destructive/10",
          warning: "!border-warning/24 !bg-warning/10",
          info: "!border-info/24 !bg-info/10",
        },
      }}
    />
  )
}
