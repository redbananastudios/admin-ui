"use client";

import Link from "next/link";
import { ArrowRight, MapPinned } from "lucide-react";
import { APP_NAV_SECTIONS } from "@/lib/navigation";
import { Button } from "@/components/ui/button";
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
} from "@/components/ui/sidebar";
import { SidebarNavItem } from "@/components/admin/sidebar-nav-item";

export function AppSidebar() {
  return (
    <Sidebar
      collapsible="icon"
      variant="inset"
      className="border-none bg-transparent p-3"
    >
      <div className="flex h-full flex-col rounded-[calc(var(--radius)*1.2)] border border-sidebar-border/80 bg-sidebar shadow-panel">
        <SidebarHeader className="gap-5 border-b border-sidebar-border/80 px-4 py-5">
          <div className="flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-2xl bg-linear-to-br from-primary via-primary to-primary/70 text-primary-foreground shadow-soft">
              <MapPinned className="size-5" />
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold tracking-[0.02em] text-sidebar-foreground">
                Red Taxi
              </p>
              <p className="truncate text-xs uppercase tracking-[0.22em] text-sidebar-foreground/45">
                Ops Control
              </p>
            </div>
          </div>
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
        </SidebarHeader>

        <SidebarContent className="gap-6 px-2 py-3">
          {APP_NAV_SECTIONS.map((section) => (
            <SidebarGroup key={section.title} className="px-2 py-0">
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

        <SidebarFooter className="mt-auto border-t border-sidebar-border/80 p-4">
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
        </SidebarFooter>
      </div>
      <SidebarRail />
    </Sidebar>
  );
}
