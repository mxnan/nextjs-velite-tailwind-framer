"use client";
import React from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { Fan } from "lucide-react";

const ShurikenLoader: React.FC = () => {
  const variants: Variants = {
    initial: {
      opacity: 1,
      scale: 1.1,
      rotate: -180,
    },
    animate: {
      opacity: 0.2,
      scale: 1,
      rotate: 180,
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 1.5,
        ease: "anticipate",
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        key="loader"
        transition={{
          staggerChildren: 0.2,
        }}
        initial="initial"
        animate="animate"
        className="flex items-center justify-center gap-1 py-2"
      >
        {[...Array(5)].map((_, index) => (
          <motion.div
            key={index}
            variants={variants}
            className="h-4 w-4 rounded-sm"
          >
            <Fan strokeWidth={3} size={24} />
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default ShurikenLoader;
