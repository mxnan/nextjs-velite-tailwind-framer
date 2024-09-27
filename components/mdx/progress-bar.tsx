"use client";
import React from "react";
import { motion, useScroll } from "framer-motion";

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed bottom-0 left-0 right-0 origin-left z-50 h-1 bg-indigo-800 dark:bg-lime-400"
    ></motion.div>
  );
};

export default ProgressBar;