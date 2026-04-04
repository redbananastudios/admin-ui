"use client"

import * as React from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { usePathname } from "next/navigation"
import type { NavItem } from "@/lib/navigation"
import {
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuFlyout,
  SidebarMenuFlyoutContent,
  SidebarMenuFlyoutTrigger,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { cn } from "@/lib/utils"

type SidebarNavItemProps = {
  item: NavItem
}

const navButtonClassName =
  "h-11 rounded-2xl px-3 text-[0.95rem] font-medium text-sidebar-foreground/80 transition-all duration-150 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground data-active:bg-sidebar-active-background data-active:text-sidebar-active-foreground data-active:shadow-soft group-data-[collapsible=icon]:h-9 group-data-[collapsible=icon]:w-9 group-data-[collapsible=icon]:rounded-[18px] group-data-[collapsible=icon]:px-0 group-data-[collapsible=icon]:shadow-none"

function matchesHref(pathname: string, href?: string) {
  if (!href) {
    return false
  }

  return pathname === href || pathname.startsWith(`${href}/`)
}

function isItemActive(pathname: string, item: NavItem): boolean {
  if (matchesHref(pathname, item.href)) {
    return true
  }

  return item.children?.some((child) => isItemActive(pathname, child)) ?? false
}

function SidebarChildItem({
  item,
  pathname,
}: {
  item: NavItem
  pathname: string
}) {
  const Icon = item.icon
  const isActive = matchesHref(pathname, item.href)

  return (
    <SidebarMenuSubItem>
      <SidebarMenuSubButton
        asChild
        isActive={isActive}
        className={cn(
          "h-8 rounded-xl px-2.5 text-[0.8rem] text-sidebar-foreground/72 data-active:bg-sidebar-active-background data-active:text-sidebar-active-foreground",
          item.disabled &&
            "cursor-not-allowed opacity-45 hover:bg-transparent hover:text-sidebar-foreground/72",
        )}
      >
        {!item.disabled && item.href ? (
          <Link href={item.href}>
            <Icon className="size-3.5" />
            <span>{item.title}</span>
          </Link>
        ) : (
          <button type="button" disabled className="flex w-full items-center gap-2">
            <Icon className="size-3.5" />
            <span>{item.title}</span>
          </button>
        )}
      </SidebarMenuSubButton>
    </SidebarMenuSubItem>
  )
}

function SidebarFlyoutChildItem({
  item,
  pathname,
  onSelect,
}: {
  item: NavItem
  pathname: string
  onSelect: () => void
}) {
  const Icon = item.icon
  const isActive = matchesHref(pathname, item.href)
  const className = cn(
    "flex w-full items-start gap-3 rounded-[18px] border border-transparent px-3 py-3 text-left transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
    isActive &&
      "border-primary/15 bg-sidebar-active-background text-sidebar-active-foreground shadow-soft",
    item.disabled && "cursor-not-allowed opacity-50 hover:bg-transparent",
  )

  if (!item.disabled && item.href) {
    return (
      <Link href={item.href} className={className} onClick={onSelect}>
        <Icon className="mt-0.5 size-4 shrink-0" />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold">{item.title}</p>
          {item.description ? (
            <p className="mt-1 text-xs leading-5 text-sidebar-foreground/58">
              {item.description}
            </p>
          ) : null}
        </div>
        {item.badge ? (
          <span className="rounded-full border border-sidebar-border/80 bg-sidebar-accent px-2 py-0.5 text-[0.65rem] font-semibold text-sidebar-foreground/72">
            {item.badge}
          </span>
        ) : null}
      </Link>
    )
  }

  return (
    <button type="button" disabled className={className}>
      <Icon className="mt-0.5 size-4 shrink-0" />
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold">{item.title}</p>
        {item.description ? (
          <p className="mt-1 text-xs leading-5 text-sidebar-foreground/58">
            {item.description}
          </p>
        ) : null}
      </div>
      {item.badge ? (
        <span className="rounded-full border border-sidebar-border/80 bg-sidebar-accent px-2 py-0.5 text-[0.65rem] font-semibold text-sidebar-foreground/72">
          {item.badge}
        </span>
      ) : null}
    </button>
  )
}

function ExpandedParentNavItem({
  item,
  pathname,
}: {
  item: NavItem
  pathname: string
}) {
  const Icon = item.icon
  const isActive = isItemActive(pathname, item)
  const [open, setOpen] = React.useState(isActive)

  React.useEffect(() => {
    if (isActive) {
      setOpen(true)
    }
  }, [isActive])

  return (
    <SidebarMenuItem>
      <Collapsible
        open={open}
        onOpenChange={setOpen}
        className="group/collapsible"
      >
        <div className="relative">
          <CollapsibleTrigger asChild>
            <SidebarMenuButton
              type="button"
              isActive={isActive}
              className={cn(
                navButtonClassName,
                item.disabled &&
                  "cursor-not-allowed opacity-45 hover:bg-transparent",
              )}
            >
              <Icon className="size-[18px]" />
              <span>{item.title}</span>
              <ChevronRight className="ml-auto size-4 text-sidebar-foreground/42 transition-transform duration-150 group-data-[state=open]/collapsible:rotate-90" />
            </SidebarMenuButton>
          </CollapsibleTrigger>
          {item.badge ? (
            <SidebarMenuBadge className="right-3 rounded-full border border-border/60 bg-surface-2 px-1.5 text-[0.62rem] font-semibold text-muted-foreground">
              {item.badge}
            </SidebarMenuBadge>
          ) : null}
        </div>
        <CollapsibleContent className="overflow-hidden pt-1">
          <SidebarMenuSub className="mx-4 border-sidebar-border/65 px-2.5">
            {item.children?.map((child) => (
              <SidebarChildItem key={child.title} item={child} pathname={pathname} />
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </Collapsible>
    </SidebarMenuItem>
  )
}

function CollapsedParentNavItem({
  item,
  pathname,
}: {
  item: NavItem
  pathname: string
}) {
  const Icon = item.icon
  const isActive = isItemActive(pathname, item)
  const [open, setOpen] = React.useState(false)
  const closeTimerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null)

  const clearCloseTimer = React.useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
  }, [])

  const openFlyout = React.useCallback(() => {
    clearCloseTimer()
    setOpen(true)
  }, [clearCloseTimer])

  const scheduleClose = React.useCallback(() => {
    clearCloseTimer()
    closeTimerRef.current = setTimeout(() => {
      setOpen(false)
    }, 140)
  }, [clearCloseTimer])

  React.useEffect(() => {
    setOpen(false)
  }, [pathname])

  React.useEffect(() => {
    return () => {
      clearCloseTimer()
    }
  }, [clearCloseTimer])

  return (
    <SidebarMenuItem onMouseEnter={openFlyout} onMouseLeave={scheduleClose}>
      <SidebarMenuFlyout open={open} onOpenChange={setOpen}>
        <SidebarMenuFlyoutTrigger asChild>
          <SidebarMenuButton
            type="button"
            isActive={isActive}
            className={navButtonClassName}
            aria-expanded={open}
            aria-haspopup="menu"
            onClick={() => setOpen((current) => !current)}
          >
            <Icon className="size-[18px]" />
            <span className="sr-only">{item.title}</span>
          </SidebarMenuButton>
        </SidebarMenuFlyoutTrigger>
        <SidebarMenuFlyoutContent
          sideOffset={14}
          onOpenAutoFocus={(event) => event.preventDefault()}
          onMouseEnter={openFlyout}
          onMouseLeave={scheduleClose}
        >
          <div className="rounded-[20px] border border-sidebar-border/80 bg-sidebar-accent/72 px-3.5 py-3">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-sidebar-foreground">
                  {item.title}
                </p>
                {item.description ? (
                  <p className="mt-1 text-xs leading-5 text-sidebar-foreground/58">
                    {item.description}
                  </p>
                ) : null}
              </div>
              {item.badge ? (
                <span className="rounded-full border border-primary/25 bg-primary/10 px-2 py-0.5 text-[0.65rem] font-semibold text-primary">
                  {item.badge}
                </span>
              ) : null}
            </div>
          </div>

          <ul className="mt-2 space-y-1">
            {item.children?.map((child) => (
              <li key={child.title}>
                <SidebarFlyoutChildItem
                  item={child}
                  pathname={pathname}
                  onSelect={() => setOpen(false)}
                />
              </li>
            ))}
          </ul>
        </SidebarMenuFlyoutContent>
      </SidebarMenuFlyout>
    </SidebarMenuItem>
  )
}

function LeafNavItem({
  item,
  pathname,
}: {
  item: NavItem
  pathname: string
}) {
  const Icon = item.icon
  const isActive = matchesHref(pathname, item.href)

  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        asChild={!item.disabled && Boolean(item.href)}
        isActive={isActive}
        tooltip={item.title}
        className={cn(
          navButtonClassName,
          item.disabled &&
            "cursor-not-allowed opacity-45 hover:bg-transparent",
        )}
      >
        {!item.disabled && item.href ? (
          <Link href={item.href}>
            <Icon className="size-[18px]" />
            <span className="group-data-[collapsible=icon]:hidden">{item.title}</span>
          </Link>
        ) : (
          <>
            <Icon className="size-[18px]" />
            <span className="group-data-[collapsible=icon]:hidden">{item.title}</span>
          </>
        )}
      </SidebarMenuButton>
      {item.badge ? (
        <SidebarMenuBadge className="right-3 rounded-full border border-border/60 bg-surface-2 px-1.5 text-[0.62rem] font-semibold text-muted-foreground">
          {item.badge}
        </SidebarMenuBadge>
      ) : null}
    </SidebarMenuItem>
  )
}

export function SidebarNavItem({ item }: SidebarNavItemProps) {
  const pathname = usePathname()
  const { isMobile, state } = useSidebar()
  const isCollapsed = !isMobile && state === "collapsed"

  if (item.children?.length) {
    return isCollapsed ? (
      <CollapsedParentNavItem item={item} pathname={pathname} />
    ) : (
      <ExpandedParentNavItem item={item} pathname={pathname} />
    )
  }

  return <LeafNavItem item={item} pathname={pathname} />
}
