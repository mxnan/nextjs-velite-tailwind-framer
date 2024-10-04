"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { buttonVariants } from "../ui/button";
import { Icons } from "../icons";
import ThemeToggle from "../theme-toggle";
import { Link } from "next-view-transitions";

export default function TopNav() {
  return (
    <nav className="w-full flex items-center justify-between max-md:hidden">
      <div className="flex items-center gap-2">
        {siteConfig.topNavLinks.slice(1).map((link) => (
          <NavLinks key={link.label} link={link} />
        ))}
      </div>

      <div className="flex items-center">
        <a href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
          <div
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "w-10 pb-1 px-0 "
            )}
          >
            <Icons.twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </div>
        </a>
        <a href={siteConfig.links.github} target="_blank" rel="noreferrer">
          <div
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "w-10 pb-1 px-0 "
            )}
          >
            <Icons.gitHub className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </div>
        </a>
        <ThemeToggle />
      </div>
    </nav>
  );
}

function NavLinks({ link }: { link: any }) {
  const pathname = usePathname();
  return (
    <Link key={link.link} href={link.href}>
      <div className={cn("relative block flex-1 w-max px-1 pb-3 pt-4 group")}>
        <span className="relative z-10 font-semibold"> {link.label}</span>
        {pathname === link.href && (
          <span className="[view-transition-name:underline] absolute bottom-2 left-0 h-1 w-full block rounded-full bg-gray-500" />
        )}
        {/* Add hover effect indicator */}
        <span className="absolute bottom-2 left-0 h-1 w-full block rounded-full bg-gray-400 dark:bg-gray-600 opacity-0 transform scale-x-0 transition-all duration-200 group-hover:opacity-25 group-hover:scale-x-100" />
      </div>
    </Link>
  );
}
