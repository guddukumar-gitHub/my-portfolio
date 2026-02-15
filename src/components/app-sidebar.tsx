"use client";

import * as React from "react";
import {
  FileDown,
  Frame,
  House,
  Send,
  LifeBuoy,
  UserRoundPen,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavDeveloper } from "@/components/nav-developer";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { NavProducts } from "./nav-product";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import * as data from "@/lib/data";

const navigationItems = [
    {
      title: "Home",
      url: "/home",
      icon: House,
      isActive: true,
    },
    {
      title: "About",
      url: "/about",
      icon: UserRoundPen,
      isActive: false,
    },
    {
      title: "Skills",
      url: "/skills",
      icon: SquareTerminal,
      isActive: false,
    },
    {
      title: "Projects",
      url: "/projects",
      icon: Frame,
      isActive: false,
    },
    {
      title: "Contact",
      url: "/contact",
      icon: Send,
      isActive: false,
    },
    {
      title: "feedback",
      url: "/feedback",
      icon: LifeBuoy,
      isActive: false,
    },
    {
      title: "Resume",
      url: "/resume",
      icon: FileDown,
      isActive: false,
    }
  ];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link className="text-2xl font-bold" href="/">
                <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={data.developer.avatar} alt={data.developer.name} />
                <AvatarFallback className="rounded-lg">GK</AvatarFallback>
              </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Guddu Kumar</span>
                  <span className="truncate text-xs">Software Developer</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navigationItems} />
        <NavProducts items={data.products} />
      </SidebarContent>
      <SidebarFooter>
        <NavDeveloper developer={data.developer} socialMediaHandles={data.socials} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
