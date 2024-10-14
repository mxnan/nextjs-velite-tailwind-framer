"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";

// Moved OpenCloseButton to a separate component for better organization
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
}) => (
  <motion.div
    className={cn("z-50", className)}
    initial={false}
    animate={isOpen ? "open" : "closed"}
  >
    <Button
      variant="default"
      onClick={onclickFunction}
      className="flex items-center gap-4"
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
);

export default function ResponsiveSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  // Use useCallback to memoize the function
  const checkMobile = useCallback(() => {
    setIsMobile(window.innerWidth < 1440);
  }, []);

  useEffect(() => {
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [checkMobile]); // Add checkMobile to the dependency array

  const toggleSidebar = useCallback(() => setIsOpen((prev) => !prev), []); // Memoize toggleSidebar

  const sidebarVariants = {
    open: { x: 0, opacity: 1 },
    closed: { x: "-100%", opacity: 0 },
  };

  return (
    <>
      <AnimatePresence>
        {isMobile && (
          <OpenCloseButton
            className="fixed top-20 left-8"
            text1="See all ?"
            text2="Close"
            isOpen={isOpen}
            onclickFunction={toggleSidebar}
          />
        )}
      </AnimatePresence>
      <motion.div
        className={cn(
          "fixed z-30 top-40 overflow-y-auto scrollbar-hide",
          isMobile
            ? "w-64 h-[calc(100vh-45vh)] p-4 left-2 bg-white/90 dark:bg-black/90 text-secondary rounded-2xl shadow-xl border-2 border-gray-500"
            : "w-56 h-[calc(100vh-30vh)] bg-transparent py-2 border-0 shadow-none flex-1 left-[calc(50%-47rem)] 2xl:left-[calc(50%-50rem)]"
        )}
        initial={isMobile ? "closed" : "open"}
        animate={isMobile ? (isOpen ? "open" : "closed") : "open"}
        variants={sidebarVariants}
        transition={{
          duration: 0.6,
          type: "spring",
          damping: 15,
          stiffness: 100,
        }}
      >
        <nav className={cn("flex flex-col gap-4 h-auto", isMobile && "pr-2")}>
          {siteConfig.componentSidebar.map((category) => (
            <div
              key={category.category}
              className="flex flex-col items-end gap-3"
            >
              <span
                className={cn(
                  "font-light text-xl",
                  isMobile
                    ? "font-medium text-indigo-600 dark:text-lime-400/80"
                    : "text-indigo-700 dark:text-lime-400/80"
                )}
              >
                {category.category}
              </span>
              <ul className="flex flex-col gap-1">
                {category.items.map((item) => (
                  <li
                    key={item.name}
                    className="hover:-translate-x-2 transition-transform duration-300 ease-in-out"
                  >
                    <Link
                      href={item.href}
                      onClick={toggleSidebar}
                      className="flex items-center justify-end gap-2 group/rotate"
                    >
                      <span className="w-max font-semibold text-secondary-foreground custom-underline pb-2">
                        {item.name}
                      </span>
                      <Icons.downright
                        className={cn(
                          "w-4 h-4 -translate-y-1 group-hover/rotate:-rotate-[30deg] transition-transform duration-300 ease-in-out",
                          item.href === pathname &&
                            "text-secondary-foreground stroke-[4px] -rotate-[30deg]",
                          "text-secondary-foreground/60"
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