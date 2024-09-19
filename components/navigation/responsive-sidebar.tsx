// components/ResponsiveSidebar.tsx
"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { siteConfig } from "@/config/site";
import { Icons } from "../icons";

export default function ResponsiveSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1440); // Adjust breakpoint as needed
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const sidebarVariants = {
    open: { x: 0, scaleY: 1, opacity: 1 },
    closed: { x: "-100%", scaleY: 0.4, opacity: 0 },
  };

  return (
    <>
      {isMobile && (
        <OpenCloseButton
          className="fixed top-20 left-8 "
          text1="See all ?"
          text2="Close"
          isOpen={isOpen}
          onclickFunction={toggleSidebar}
        />
      )}
      <motion.div
        className={cn(
          "fixed z-30 top-44 h-[70dvh] p-4 ",
          isMobile
            ? "w-64 left-0 bg-primary text-secondary rounded-2xl shadow-xl border"
            : "w-56 bg-transparent border-0 shadow-none flex-1 left-[calc(50%-47rem)] 2xl:left-[calc(50%-50rem)]   "
        )}
        initial={isMobile ? "closed" : "open"}
        animate={isMobile ? (isOpen ? "open" : "closed") : "open"}
        variants={sidebarVariants}
        transition={{
          duration: 0.6,
         
          type: "tween",
          damping: 50,
          stiffness: 200,
          restDelta: 0.001,
        }}
      >
        <nav
          className={cn(
            "flex-1 flex flex-col gap-4",
            isMobile ? "pr-6 py-10" : ""
          )}
        >
          {/* Mapping over componentSidebar from lib/site.config*/}
          {siteConfig.componentSidebar.map((category) => (
            <div
              key={category.category}
              className="flex flex-col items-end gap-3"
            >
              <span className="text-muted-foreground text-xl">
                {category.category}
              </span>

              <ul className="flex flex-col gap-1 ">
                {category.items.map((item) => (
                  <li
                    key={item.name}
                    className="hover:-translate-x-2 transition-transform ease-in-out duration-300"
                  >
                    <Link
                      href={item.href}
                      onClick={toggleSidebar}
                      className="flex items-center justify-end gap-2 group/rotate"
                    >
                      <span className="w-max font-semibold  custom-underline pb-2 ">
                        {item.name}
                      </span>

                      <Icons.downright
                        className={cn(
                          "w-4 h-4 pb-0 -translate-y-1 text-muted-foreground group-hover/rotate:-rotate-[30deg] transition-transform ease-in-out duration-300",
                          item.href === pathname &&
                            " text-secondary stroke-[4px] -rotate-[30deg] transition-colors ease-in-out duration-300",
                          isMobile
                            ? "text-secondary/[0.6]"
                            : "text-muted-foreground"
                        )}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </motion.div>
    </>
  );
}

const OpenCloseButton = ({
  onclickFunction,
  isOpen,
  text1,
  text2,
  className,
}: {
  onclickFunction: () => void;
  isOpen: boolean;
  text1?: string;
  text2?: string;
  className?: string;
}) => {
  return (
    <>
      <motion.div
        className={cn("z-50 ", className)}
        initial={false}
        animate={isOpen ? "open" : "closed"}
      >
        <Button
          variant={"default"}
          onClick={onclickFunction}
          className="flex items-center gap-4 "
        >
          {text1 && text2 && <span>{isOpen ? text2 : text1}</span>}

          <motion.svg
            width="20"
            height="20"
            viewBox="0 0 23 23"
            fill="none"
            strokeWidth={3}
            strokeLinecap="round"
            className="stroke-primary-foreground"
          >
            <motion.path
              variants={{
                closed: { d: "M 2 2.5 L 20 2.5" },
                open: { d: "M 3 16.5 L 17 2.5" },
              }}
            />
            <motion.path
              d="M 2 9.423 L 20 9.423"
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.1 }}
            />
            <motion.path
              variants={{
                closed: { d: "M 2 16.346 L 20 16.346" },
                open: { d: "M 3 2.5 L 17 16.346" },
              }}
            />
          </motion.svg>
        </Button>
      </motion.div>
    </>
  );
};
