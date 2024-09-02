"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => setMounted(true), []);

  const switchTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleTheme = () => {
    setIsAnimating(true);
    // @ts-ignore
    if (!document.startViewTransition) {
      switchTheme();
      setTimeout(() => setIsAnimating(false), 500); // Match animation duration
      return;
    }
    // @ts-ignore
    document.startViewTransition(() => {
      switchTheme();
      setTimeout(() => setIsAnimating(false), 500); // Match animation duration
    });
  };
  //custom theme switch animation

  //animation for framermotion on svg entry and exit
  const iconVariants = {
    initial: { y: -30, x: 0, opacity: 0, transition: { duration: 0.4 } },
    exit: { y: 0, x: 30, opacity: 0, transition: { duration: 0.4 } },
    enter: { y: 0, x: 0, opacity: 1, transition: { duration: 0.4 } },
  };

  return (
    <Button
      size={"icon"}
      variant={"ghost"}
      aria-label="Toggle Dark Mode"
      type="button"
      className="dark-mode-toggle relative rounded-xl  
        text-indigo-500 dark:text-yellow-500
      flex items-center justify-center overflow-hidden
     
      "
      onClick={toggleTheme}
    >
      {mounted && (
        <AnimatePresence initial={false}>
          {theme === "light" || isAnimating ? (
            <motion.svg
              key="moon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              className="h-6 w-6 absolute"
              initial="initial"
              animate="enter"
              exit="exit"
              variants={iconVariants}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </motion.svg>
          ) : (
            <motion.svg
              key="sun"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              className="h-6 w-6  absolute"
              initial="initial"
              animate="enter"
              exit="exit"
              variants={iconVariants}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </motion.svg>
          )}
        </AnimatePresence>
      )}
    </Button>
  );
};

export default ThemeToggle;