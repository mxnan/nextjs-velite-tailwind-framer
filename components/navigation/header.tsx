import React from "react";
import ThemeToggle from "../theme-toggle";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { Icons } from "../icons";
import TopNav from "./top-nav";

export default function Header() {
  return (
    <header
      className="z-10 sticky top-0 w-full border-b border-border
      bg-background/95 backdrop-blur
      supports-[backdrop-filter]:bg-background/60"
    >
      <nav className="h-14 flex items-center justify-between">
        <TopNav />
        <div>
          <Link
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "w-10 pb-1 px-0"
              )}
            >
              <Icons.twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </div>
          </Link>
          <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
            <div
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "w-10 pb-1 px-0"
              )}
            >
              <Icons.gitHub className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </div>
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
