"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Icons } from "../icons";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function TopNav() {
  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      <Link
        href="/"
        className={cn(
          "flex-1",
          buttonVariants({ variant: "ghost", size: "icon" })
        )}
      >
        <Icons.logo className="h-6 w-6" />
        <span className="sr-only">{siteConfig.name}</span>
      </Link>
      <div className="flex items-center">
        {siteConfig.topNavLinks.slice(1).map((link, index: number) => (
          <TopNavLinks key={link.label} index={index} link={link} />
        ))}
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
    <Link
      key={link.link}
      href={link.href}
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
                ease: "easeInOut",
              },
            }}
            exit={{
              opacity: 0,
              transition: {
                duration: 0.5,
                delay: 0.3,
                ease: "easeInOut",
              },
            }}
          />
        )}
      </AnimatePresence>
      <span
        className={cn(
          "text-foreground text-[15px] font-semibold",
          pathname === link.href ? "text-primary" : "text-foreground/60"
        )}
      >
        {link.label}
      </span>
    </Link>
  );
};
