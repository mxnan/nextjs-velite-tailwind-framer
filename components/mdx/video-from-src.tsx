"use client";
import React from "react";
import { motion } from "framer-motion";
import { Icons } from "../icons";

export default function VideoFromSrc({
  src,
  title = "Video player",
  className,
}: {
  src: string;
  title: string;
  className?: string;
}) {
  const initial = {
    width: "200px",
  };

  const animate = {
    width: "auto",
    transition: {
      delay: 0.3,
      duration: 1,
      type: "tween",
      stiffness: 100,
      damping: 30,
    },
  };
  return (
    <div className={className}>
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        title={title}
      >
        <source src={src} />
        Your browser does not support the video tag.
      </video>
      <motion.span
        whileInView={animate}
        initial={initial}
        className="absolute z-20 -bottom-2 -right-2 
         min-w-max rounded-2xl p-3 pb-5 pr-5 text-sm font-medium bg-secondary
          text-indigo-600 dark:text-lime-400 flex items-center gap-2
          "
      >
        <Icons.chevronDown />  Image Card
      </motion.span>
    </div>
  );
}
