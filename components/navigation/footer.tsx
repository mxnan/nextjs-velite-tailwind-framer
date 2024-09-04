"use client";
import { cn } from "@/lib/utils";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { ChevronDown, Wrench } from "lucide-react";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Icons } from "../icons";
import RetroGrid from "../custom/retro-grid";


interface FooterLinksProps {
  name: string;
  href: string;
  icon?: React.ReactNode;
}

export const FooterLinks: {
  main: FooterLinksProps[];
  social: FooterLinksProps[];
} = {
  main: [
    { name: "Components", href: "/components" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ],
  social: [
    {
      name: "Twitter",
      href: "https://twitter.com/etc_etcx",
      icon: <Icons.twitter className="w-6 h-6 " />,
    },
    {
      name: "GitHub",
      href: "https://github.com/mxnan",
      icon: <Icons.gitHub className="w-6 h-6" />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/manan-negi-377373140/",
      icon: <Icons.logo className="w-6 h-6" />,
    },
  ],
};

const Footer: React.FC = () => {
  const pathname = usePathname();
  return (
    <footer className="w-full relative">
      <RetroGrid className="bottom-0 h-full opacity-50 [perspective:200px] " />
      <div
        className="mx-auto  w-full max-w-6xl
      pb-32 pt-20 space-y-10"
      >
        <div className=" flex justify-center gap-2">
          {FooterLinks.social.map((item) => (
            <TooltipProvider key={item.name}>
              <Tooltip disableHoverableContent delayDuration={0}>
                <TooltipTrigger className="p-2 rounded-xl hover:bg-stone-200 dark:hover:bg-stone-800 group/icon">
                  <a
                    aria-label={item.name}
                    rel="noopener noreferrer"
                    target="_blank"
                    href={item.href}
                    className="fill-black dark:fill-white group-hover/icon:fill-indigo-800 dark:group-hover/icon:fill-amber-700"
                  >
                    {item.icon}
                  </a>
                </TooltipTrigger>
                <TooltipContent className="mr-12 mb-2 text-indigo-800 dark:text-amber-700">
                  <p className=" flex items-center gap-2 text-sm">
                    {item.name} <ChevronDown className="w-4 h-4 " />
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
        <nav className="flex flex-wrap justify-center mr-4">
          {FooterLinks.main.map((item) => (
            <div
              key={item.name}
              className="px-5 pt-1 flex items-center justify-center "
            >
              <Link href={item.href}>
                <Button
                  aria-label={item.name}
                  variant={"default"}
                  size={"sm"}
                  className={cn(
                    "font-medium custom-underline flex-1",
                    pathname === item.href && "text-blue-500"
                  )}
                >
                  {item.name}
                </Button>
              </Link>
            </div>
          ))}
        </nav>

        <div className="mt-6 flex flex-col items-center justify-center text-sm ">
          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label="repo-link"
            href="https://github.com/mxnan/mxnan.com"
            className="w-max my-3 pb-2 flex justify-center gap-2 custom-underline"
          >
            Found a Bug ? <Wrench className="w-4 h-4" /> Contribute ?
          </a>
          <span className="text-gray-500 font-semibold mt-4">
            &copy; {new Date().getFullYear()}{" "}
            <span className="mx-1 font-semibold text-blue-500">
              mxnan.com
            </span>{" "}
          </span>
          <span className="mt-2 "> All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;