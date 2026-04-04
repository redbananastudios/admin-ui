"use client"

import Link from "next/link"
import { ArrowRight, MapPinned } from "lucide-react"
import { APP_NAV_SECTIONS } from "@/lib/navigation"
import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarRail,
  SidebarSeparator,
  SidebarToggle,
  useSidebar,
} from "@/components/ui/sidebar"
import { SidebarNavItem } from "@/components/admin/sidebar-nav-item"
import { cn } from "@/lib/utils"

export function AppSidebar() {
  const { isMobile, state } = useSidebar()
  const isCollapsed = !isMobile && state === "collapsed"

  return (
    <Sidebar
      collapsible="icon"
      variant="inset"
      className="border-none bg-transparent"
    >
      <div className="flex h-full flex-col overflow-hidden rounded-[calc(var(--radius)*1.2)] border border-sidebar-border/80 bg-sidebar shadow-panel">
        <SidebarHeader
          className={cn(
            "border-b border-sidebar-border/80 transition-[padding,gap] duration-200",
            isCollapsed ? "items-center gap-1.5 px-1.5 py-2.5" : "gap-5 px-4 py-5",
          )}
        >
          <div
            className={cn(
              "flex items-center gap-3 transition-[gap] duration-200",
              isCollapsed && "justify-center",
            )}
          >
            <div
              className={cn(
                "flex shrink-0 items-center justify-center bg-linear-to-br from-primary via-primary to-primary/70 text-primary-foreground shadow-soft transition-[width,height,border-radius] duration-200",
                isCollapsed ? "size-9 rounded-[18px]" : "size-11 rounded-2xl",
              )}
            >
              <MapPinned className={cn("transition-[width,height] duration-200", isCollapsed ? "size-4.5" : "size-5")} />
            </div>
            <div
              className={cn(
                "min-w-0 overflow-hidden transition-[max-width,opacity] duration-200",
                isCollapsed ? "max-w-0 opacity-0" : "max-w-40 opacity-100",
              )}
            >
              <p className="truncate text-sm font-semibold tracking-[0.02em] text-sidebar-foreground">
                Red Taxi
              </p>
              <p className="truncate text-xs uppercase tracking-[0.22em] text-sidebar-foreground/45">
                Ops Control
              </p>
            </div>
          </div>

          <div
            className={cn(
              "grid overflow-hidden transition-[grid-template-rows,opacity] duration-200",
              isCollapsed
                ? "grid-rows-[0fr] opacity-0"
                : "grid-rows-[1fr] opacity-100",
            )}
          >
            <div className="min-h-0 overflow-hidden">
              <div className="rounded-[calc(var(--radius)*0.9)] border border-sidebar-border/70 bg-sidebar-accent/75 p-3">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-sidebar-foreground/55">
                  Shift Summary
                </p>
                <div className="mt-3 flex items-end justify-between gap-3">
                  <div>
                    <p className="text-2xl font-semibold tracking-[-0.05em] text-sidebar-foreground">
                      94.8%
                    </p>
                    <p className="mt-1 text-xs text-sidebar-foreground/65">
                      On-time dispatch rate
                    </p>
                  </div>
                  <div className="rounded-full border border-primary/25 bg-primary/12 px-2 py-1 text-[0.68rem] font-semibold text-primary">
                    +2.1%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SidebarHeader>

        <SidebarContent
          className={cn(
            "transition-[padding,gap] duration-200",
            isCollapsed ? "gap-2 px-1 py-2.5" : "gap-5 px-2 py-3",
          )}
        >
          {APP_NAV_SECTIONS.map((section) => (
            <SidebarGroup
              key={section.title}
              className={cn(
                "transition-[padding] duration-200",
                isCollapsed ? "px-0 py-0" : "px-1.5 py-0",
              )}
            >
              <SidebarGroupLabel className="px-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-sidebar-foreground/38">
                {section.title}
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu className="gap-1">
                  {section.items.map((item) => (
                    <SidebarNavItem key={item.title} item={item} />
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </SidebarContent>

        <SidebarFooter
          className={cn(
            "mt-auto border-t border-sidebar-border/80 transition-[padding,gap] duration-200",
            isCollapsed ? "gap-2 px-1.5 py-2.5" : "gap-4 p-4",
          )}
        >
          <div
            className={cn(
              "grid overflow-hidden transition-[grid-template-rows,opacity] duration-200",
              isCollapsed
                ? "grid-rows-[0fr] opacity-0"
                : "grid-rows-[1fr] opacity-100",
            )}
          >
            <div className="min-h-0 overflow-hidden">
              <div className="rounded-[calc(var(--radius)*0.95)] border border-sidebar-border/70 bg-linear-to-br from-sidebar-accent to-sidebar-accent/60 p-4">
                <p className="text-sm font-semibold text-sidebar-foreground">
                  Dispatch watch active
                </p>
                <p className="mt-1 text-sm leading-6 text-sidebar-foreground/65">
                  Keep the mock dashboard close to the transport-control reference as we expand the admin.
                </p>
                <Button
                  asChild
                  variant="secondary"
                  size="sm"
                  className="mt-4 w-full justify-between"
                >
                  <Link href="/style-guide">
                    Review style guide
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <SidebarSeparator className="mx-0" />
          <SidebarToggle
            className={cn(
              "h-10 rounded-2xl border border-sidebar-border/80 bg-sidebar-accent/70 text-sidebar-foreground shadow-soft hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
              isCollapsed
                ? "mx-auto size-9 rounded-[18px] border-sidebar-border/70 bg-sidebar-accent/80"
                : "w-full justify-between px-3.5",
            )}
          />
        </SidebarFooter>
      </div>
      <SidebarRail />
    </Sidebar>
  )
}
