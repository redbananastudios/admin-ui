"use client";

import { type PropsWithChildren } from "react";
import { AppHeader } from "@/components/admin/app-header";
import { AppSidebar } from "@/components/admin/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

type AppShellProps = PropsWithChildren;

export function AppShell({
  children,
  defaultSidebarOpen = true,
}: AppShellProps & { defaultSidebarOpen?: boolean }) {
  return (
    <SidebarProvider defaultOpen={defaultSidebarOpen}>
      <div className="surface-grid relative flex min-h-screen w-full bg-transparent">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,hsl(var(--primary)/0.08),transparent_28%),radial-gradient(circle_at_top_right,hsl(var(--info)/0.06),transparent_22%)]" />
        <AppSidebar />
        <SidebarInset className="relative min-h-screen bg-transparent">
          <AppHeader />
          {children}
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
