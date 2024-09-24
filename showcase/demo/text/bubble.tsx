import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const BubbleDemo = () => {
  return (
    <div className="p-10">
      <BubbleText text="Bubble Text (hover)" />
    </div>
  );
};

const BubbleText = ({ text }: { text: string }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="text-center text-5xl custom-underline pb-3 tracking-wider">
      {text.split("").map((child, idx) => (
        <motion.span
          key={idx}
          className="inline-block relative"
          onHoverStart={() => setHoveredIndex(idx)}
          onHoverEnd={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 "
                initial={{ opacity: 0,x: 5, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 5, scale: 0.9 }}
                transition={{
                  duration: 0.25,
                  type: "tween",
                  stiffness: 100,
                  damping: 10,
                }}
              >
                {child}
              </motion.span>
            )}
          </AnimatePresence>
          <span
            className={cn(
              "relative z-10 transition-all duration-300 ease-in-out",
              hoveredIndex === idx
                ? "text-primary/90 font-black "
                : Math.abs(hoveredIndex! - idx) === 1
                ? "text-primary/70 font-extralight"
                : "text-primary/70 font-extralight "
            )}
          >
            {child}
          </span>
        </motion.span>
      ))}
    </div>
  );
};

export default BubbleDemo;
