"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/lib/navigation";
import {
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

type SidebarNavItemProps = {
  item: NavItem;
};

export function SidebarNavItem({ item }: SidebarNavItemProps) {
  const pathname = usePathname();
  const isActive = item.href ? pathname === item.href : false;
  const Icon = item.icon;

  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        asChild={!item.disabled && Boolean(item.href)}
        isActive={isActive}
        tooltip={item.title}
        className={cn(
          "h-11 rounded-2xl px-3 text-[0.95rem] font-medium text-sidebar-foreground/80 transition-all duration-150 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground data-active:bg-sidebar-active-background data-active:text-sidebar-active-foreground data-active:shadow-soft",
          item.disabled && "cursor-not-allowed opacity-45 hover:bg-transparent",
        )}
      >
        {!item.disabled && item.href ? (
          <Link href={item.href}>
            <Icon className="size-[18px]" />
            <span>{item.title}</span>
          </Link>
        ) : (
          <>
            <Icon className="size-[18px]" />
            <span>{item.title}</span>
          </>
        )}
      </SidebarMenuButton>
      {item.badge ? (
        <SidebarMenuBadge className="right-3 rounded-full border border-border/60 bg-surface-2 px-1.5 text-[0.62rem] font-semibold text-muted-foreground">
          {item.badge}
        </SidebarMenuBadge>
      ) : null}
    </SidebarMenuItem>
  );
}
