"use client";

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { Icons } from "../icons";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { siteConfig } from "@/config/site";
import ThemeToggle from "../theme-toggle";

export default function MobileNav() {
  const [open, setOpen] = React.useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <span
          className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "")}
        >
          <Icons.menu className="h-6 w-6" />
          <span className="sr-only">Toggle Sheet</span>
        </span>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader className="py-6 border-b border-border">
          <SheetTitle className="flex items-center text-xl font-bold">
            <Icons.logo className="h-6 w-6 mr-2" /> {siteConfig.name}
          </SheetTitle>
          <SheetDescription className="flex items-center">
            <ThemeToggle /> Switch theme
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-4 py-8">
          {siteConfig.topNavLinks.map((link) => (
            <MobileLink
              key={link.label}
              href={link.href}
              onOpenChange={setOpen}
            >
              {link.label}
            </MobileLink>
          ))}
        </div>
        <div className="flex items-center py-6">
          <Link
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
          >
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
        </div>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps extends LinkProps {
  children: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
}

const MobileLink = ({
  href,
  children,
  onOpenChange,

  ...props
}: MobileLinkProps) => {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={cn(buttonVariants({ variant: "default" }), "text-start")}
      {...props}
    >
      {children}
    </Link>
  );
};
