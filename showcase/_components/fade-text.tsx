"use client";

import { useMemo } from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

type FadeTextProps = {
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  framerProps?: Variants;
  text: string;
};

export function FadeText({
  direction = "up",
  className,
  framerProps = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { type: "tween", duration: 1.5, stiffness: 150, damping: 15 },
    },
  },
  text,
}: FadeTextProps) {
  const directionOffset = useMemo(() => {
    const map = { up: 20, down: -20, left: -15, right: 15 };
    return map[direction];
  }, [direction]);

  const axis = direction === "up" || direction === "down" ? "y" : "x";

  const FADE_ANIMATION_VARIANTS = useMemo(() => {
    const { hidden, show, ...rest } = framerProps as {
      [name: string]: { [name: string]: number; opacity: number };
    };

    return {
      ...rest,
      hidden: {
        ...(hidden ?? {}),
        opacity: hidden?.opacity ?? 0,
        [axis]: hidden?.[axis] ?? directionOffset,
      },
      show: {
        ...(show ?? {}),
        opacity: show?.opacity ?? 1,
        [axis]: show?.[axis] ?? 0,
      },
    };
  }, [directionOffset, axis, framerProps]);

  return (
    <motion.div
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      className="relative inline-block w-full [view-transition-name:text]"
      variants={FADE_ANIMATION_VARIANTS}
    >
      <motion.span
        className={cn(
          "w-fit    drop-shadow-2xl bg-clip-text text-transparent bg-gradient-to-t from-gray-500 dark:from-stone-500 to-stone-950 dark:to-white",
          className
        )}
      >
        {text}
      </motion.span>
    </motion.div>
  );
}
