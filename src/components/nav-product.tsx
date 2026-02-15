"use client"

import { type LucideIcon } from "lucide-react"

import {
  Collapsible,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as data from "@/lib/data";

export function NavProducts({ items }: { items: typeof data.products
}) {
  const pathname = usePathname();
  const isActive = (url: string) => pathname === url;
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Products</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible key={item.slug} asChild defaultOpen={isActive(item.liveURL)}>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip={item.name} size="sm">
                <Link href={item.liveURL} target="_blank" className={pathname === item.liveURL ? "text-primary" : ""}>
                  <img src={item.logo} alt={item.name} className="w-4 h-4 mr-2" />
                  <span>{item.name}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
