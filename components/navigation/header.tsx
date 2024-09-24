import React from "react";
import { siteConfig } from "@/config/site";
import { Link } from 'next-view-transitions'
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { Icons } from "../icons";
import dynamic from "next/dynamic";


const TopNav = dynamic(() => import("./top-nav"), { ssr: false });
const MobileNav = dynamic(() => import("./mobile-nav"), { ssr: false });

export default function Header() {
  return (
    <header
      className="z-50 sticky top-0 w-full border-b border-border
      bg-background/95 backdrop-blur
      supports-[backdrop-filter]:bg-background/60"
    >
      <nav className="h-14 flex items-center justify-between">
        <Link
          href="/"
          className={cn(
            "mr-4",
            buttonVariants({ variant: "ghost", size: "icon" })
          )}
        >
          <Icons.logo className="h-6 w-6" />
          <span className="sr-only">{siteConfig.name}</span>
        </Link>
        <TopNav />

        <div className="md:hidden">
          <MobileNav />
        </div>
      </nav>
    </header>
  );
}
