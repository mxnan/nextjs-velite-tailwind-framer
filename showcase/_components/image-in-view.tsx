"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ImageInView() {
  const variants = {
    initial: {
      width: "100%",
      filter: "blur(1px)",
    },
    animate: {
      width: "auto",
      filter: "blur(0px)",
      transition: {
        width: {
          delay: 0.2,
          duration: 1,
          type: "tween",
          stiffness: 200,
          damping: 30,
        },
        filter: {
          delay: 0.2,
          duration: 0.5,
        },
      },
    },
  };

  return (
    <div className="flex-1 hidden sm:block">
      <div className="flex flex-inline">
        <motion.div
          variants={variants}
          initial="initial"
          whileInView="animate"
          className="relative max-sm:hidden sm:min-w-64 lg:min-w-72 2xl:min-w-80 h-64 overflow-hidden rounded-xl flex items-center justify-center"
        >
          <Image
            src="https://images.unsplash.com/photo-1727949395650-5315f1c592c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="example"
            fill
            className="object-cover w-full h-full aspect-video"
          />
        </motion.div>
      </div>
    </div>
  );
}