"use client";

import { Bell, ChevronDown, Search } from "lucide-react";
import { usePathname } from "next/navigation";
import { getRouteMeta } from "@/lib/navigation";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function AppHeader() {
  const pathname = usePathname();
  const meta = getRouteMeta(pathname);

  return (
    <header className="sticky top-0 z-30 border-b border-border/60 bg-header-background/86 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <SidebarTrigger className="md:hidden" />
        <div className="min-w-0 flex-1">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-primary/80">
            {meta.eyebrow}
          </p>
          <div className="flex items-center gap-3">
            <h2 className="truncate text-lg font-semibold tracking-[-0.03em] text-header-foreground">
              {meta.title}
            </h2>
            <span className="hidden h-1.5 w-1.5 rounded-full bg-border lg:inline-flex" />
            <p className="hidden truncate text-sm text-muted-foreground lg:block">
              {meta.subtitle}
            </p>
          </div>
        </div>

        <div className="hidden min-w-0 flex-1 justify-center xl:flex">
          <button
            type="button"
            className="flex w-full max-w-md items-center gap-3 rounded-full border border-border/70 bg-surface-2 px-4 py-2.5 text-left text-sm text-muted-foreground shadow-soft transition-colors hover:bg-surface-3"
          >
            <Search className="size-4" />
            Search trips, drivers, routes...
          </button>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full border border-border/70 bg-surface-2 text-muted-foreground shadow-soft hover:bg-surface-3 hover:text-foreground"
            aria-label="Notifications"
          >
            <Bell className="size-4" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="h-11 rounded-full border border-border/70 bg-surface-2 px-2.5 text-left shadow-soft hover:bg-surface-3"
              >
                <Avatar className="size-8 border border-border/70 bg-primary/15">
                  <AvatarFallback className="bg-transparent text-xs font-semibold text-primary">
                    RT
                  </AvatarFallback>
                </Avatar>
                <div className="hidden min-w-0 sm:block">
                  <p className="truncate text-sm font-semibold text-foreground">
                    Dispatch Lead
                  </p>
                  <p className="truncate text-xs text-muted-foreground">
                    demo@redtaxi.io
                  </p>
                </div>
                <ChevronDown className="hidden size-4 text-muted-foreground sm:block" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-52">
              <DropdownMenuLabel>Profile</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Operations profile</DropdownMenuItem>
              <DropdownMenuItem>Notification preferences</DropdownMenuItem>
              <DropdownMenuItem>Sign out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
