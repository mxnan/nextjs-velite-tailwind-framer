"use client";

import Link from "next/link";
import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { buttonVariants } from "../ui/button";
import { Icons } from "../icons";
import ThemeToggle from "../theme-toggle";
import { TransitionLink } from "./transition-link";

export default function TopNav() {
  return (
    <nav className="w-full flex items-center justify-between max-md:hidden">
      <div className="flex items-center">
        {siteConfig.topNavLinks.slice(1).map((link, index: number) => (
          <TopNavLinks key={link.label} index={index} link={link} />
        ))}
      </div>

      <div className="flex items-center">
        <Link href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
          <div
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "w-10 pb-1 px-0 "
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
              "w-10 pb-1 px-0 "
            )}
          >
            <Icons.gitHub className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </div>
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}

const TopNavLinks = ({ index, link }: { index: number; link: any }) => {
  const pathname = usePathname();
  // for hover effect
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  /// ////////////////////////////
  return (
    <TransitionLink key={link.link} href={link.href}>
      <div
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
        className="relative block flex-1 px-3 pb-3 pt-4"
      >
        <AnimatePresence mode="wait">
          {hoveredIndex === index && (
            <motion.span
              className="absolute bottom-1 left-0 h-1 w-full block 
            rounded-md bg-primary "
              layoutId="hoverBackground"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 1,
                  type: "tween",
                  stiffness: 100,
                  damping: 10,
                },
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.5,
                  delay: 0.3,
                  type: "tween",
                  stiffness: 100,
                  damping: 10,
                },
              }}
            />
          )}
        </AnimatePresence>
        <span
          className={cn(
            "max-md:text-sm font-bold",
            pathname === link.href ? "text-primary" : "text-foreground/60"
          )}
        >
          {link.label}
        </span>
      </div>
    </TransitionLink>
  );
};
