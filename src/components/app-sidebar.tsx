"use client";

import * as React from "react";
import {
  FileDown,
  Frame,
  House,
  Map,
  Send,
  PieChart,
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
import { NavActions } from "./nav-actions";
import { NavProducts } from "./nav-product";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

// This is sample data.
const data = {
  developer: {
    name: "GUDDU KUMAR",
    email: "gk4communication@gmail.com",
    avatar: "/avatar.png",
    logo: "/logo.png",
  },
  navMain: [
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
    }
  ],
  projects: [
    {
    name: "GhostWire",
    url: "/projects/ghostwire",
    liveURL: "#",
    githubURL: "#",
    icon: Frame,
    logo: "/projects/ghostwire/logo.png",
    description:
      "A real-time chat application built with React and Socket.io, featuring user authentication, private messaging, and group chats.",
    technologies: [
      { name: "React", logo: "/projects/ghostwire/tech/react.png" },
      { name: "Socket.io", logo: "/projects/ghostwire/tech/socketio.png" },
      { name: "Node.js", logo: "/projects/ghostwire/tech/nodejs.png" },
      { name: "Express", logo: "/projects/ghostwire/tech/express.png" },
      { name: "MongoDB", logo: "/projects/ghostwire/tech/mongodb.png" },
    ],
    isHighlightProject: true,
  },
  {
    name: "Dashboard",
    url: "/projects/dashboard",
    liveURL: "#",
    githubURL: "#",
    icon: PieChart,
    logo: "/projects/dashboard/logo.png",
    description:
      "An interactive dashboard for visualizing data using D3.js, allowing users to filter and explore various datasets.",
    technologies: [
      { name: "D3.js", logo: "/projects/dashboard/tech/d3js.png" },
      { name: "JavaScript", logo: "/projects/dashboard/tech/javascript.png" },
      { name: "HTML", logo: "/projects/dashboard/tech/html.png" },
      { name: "CSS", logo: "/projects/dashboard/tech/css.png" },
    ],
    isHighlightProject: true,
  },
  {
    name: "Portfolio",
    url: "/projects/portfolio",
    liveURL: "#",
    githubURL: "#",
    icon: Map,
    logo: "/projects/portfolio/logo.png",
    description:
      "A personal portfolio website showcasing projects, skills, and experience, built with Next.js and Tailwind CSS.",
    technologies: [
      { name: "Next.js", logo: "/projects/portfolio/tech/nextjs.png" },
      { name: "Tailwind CSS", logo: "/projects/portfolio/tech/tailwindcss.png" },
      { name: "React", logo: "/projects/portfolio/tech/react.png" },
      { name: "Vercel", logo: "/projects/portfolio/tech/vercel.png" },
    ],
    isHighlightProject: true,
  },
  {
    name: "Portfolio2",
    url: "/projects/portfolio2",
    liveURL: "#",
    githubURL: "#",
    icon: Map,
    logo: "/projects/portfolio2/logo.png",
    description:
      "A personal portfolio website showcasing projects, skills, and experience, built with Next.js and Tailwind CSS.",
    technologies: [
      { name: "Next.js", logo: "/projects/portfolio2/tech/nextjs.png" },
      { name: "Tailwind CSS", logo: "/projects/portfolio2/tech/tailwindcss.png" },
      { name: "React", logo: "/projects/portfolio2/tech/react.png" },
      { name: "Vercel", logo: "/projects/portfolio2/tech/vercel.png" },
    ],
    isHighlightProject: false,
  },
  ],
  actions: [
    {
      title: "Contact",
      url: "/contact",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "/feedback",
      icon: Send,
    },
    {
      title: "Resume",
      url: "/resume",
      icon: FileDown,
    },
  ],
  products: [
    {
      title: "Blog",
      url: "/blog",
      icon: Map,
    },
    {
      title: "GhostWire",
      url: "https://ghost-wire.vercel.app/",
      icon: Frame,
    },
    {title: "Dashboard App",
      url: "https://nextjs-dashboard-sigma-five-e2k4qc6izv.vercel.app/",
      icon: PieChart,
    },
  ],
  socialMediaHandles: [
    {
      title: "GitHub",
      url: "https://github.com/guddukumar-gitHub",
      icon: "/github.png",
    },
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/guddu-kumar-in/",
      icon: "/linkedin.png",
    },
  ],
};



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
        <NavMain items={data.navMain} />
        <NavActions items={data.actions} />
        <NavProducts items={data.products} />
      </SidebarContent>
      <SidebarFooter>
        <NavDeveloper developer={data.developer} socialMediaHandles={data.socialMediaHandles} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
