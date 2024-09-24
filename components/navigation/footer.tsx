import { Link } from 'next-view-transitions'
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Icons } from "../icons";
import dynamic from "next/dynamic";

const RetroGrid = dynamic(() => import("../custom/retro-grid"), { ssr: false });

interface FooterLinksProps {
  name: string;
  href: string;
  icon?: React.ReactNode;
}
const FooterLinks: {
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
  return (
    <footer className="w-full relative">
      <RetroGrid className="bottom-0 h-full opacity-50 [perspective:200px] " />
      <div
        className="mx-auto  w-full max-w-xl group/footer
      pb-32 pt-20 space-y-10"
      >
        <div className=" flex justify-center gap-2">
          {FooterLinks.social.map((item) => (
            <TooltipProvider key={item.name}>
              <Tooltip disableHoverableContent delayDuration={0}>
                <TooltipTrigger className="p-2 rounded-xl hover:bg-primary hover:text-primary-foreground transition-colors duration-300 ease-in-out group/icon">
                  <a
                    aria-label={item.name}
                    rel="noopener noreferrer"
                    target="_blank"
                    href={item.href}
                  >
                    {item.icon}
                  </a>
                </TooltipTrigger>
                <TooltipContent className="mr-12 mb-2 text-muted">
                  <p className=" flex items-center gap-2 text-sm">
                    {item.name} <Icons.chevronDown className="w-4 h-4 " />
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
        <nav className="flex flex-wrap items-center gap-6 justify-center mr-4">
          {FooterLinks.main.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="custom-underline px-1 pb-2 font-semibold"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="mt-6 flex flex-col items-center justify-center text-sm ">
          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label="repo-link"
            href="https://github.com/mxnan/nextjs-velite-tailwind-framer/blob/main/CONTRIBUTING.md"
            className="w-max rounded-lg p-2 px-3 flex justify-center gap-2
            group-hover/footer:bg-secondary transition-colors duration-300 ease-in-out
            "
          >
            Found a Bug ? <Icons.wrench className="w-4 h-4" /> Contribute ?
          </a>
          <span className="text-muted-foreground font-semibold mt-4">
            &copy; {new Date().getFullYear()}{" "}
            <span className="mx-1 font-semibold text-blue-500">mxnan.com</span>{" "}
          </span>
          <span className="mt-2 "> All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
