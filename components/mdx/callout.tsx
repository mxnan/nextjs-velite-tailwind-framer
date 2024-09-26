"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

export interface CalloutProps {
  children?: React.ReactNode;
  type?: "default" | "warning" | "danger";
}

export function Callout({
  children,
  type = "default",
  ...props
}: CalloutProps) {
  const backgroundColor = useMotionValue(
    type === "danger"
      ? "rgb(154, 52, 18)"
      : type === "warning"
      ? "rgb(253, 224, 71)"
      : "rgb(226, 232, 240, 0.5)"
  );

  const backgroundColorTemplate = useMotionTemplate`${backgroundColor}`;

  return (
    <motion.div
      className={cn(
        "my-10 cursor-pointer w-fit  pr-5 p-3 font-semibold text-lg flex items-start rounded-2xl border-border border-l-[5px] hover:border-r-[10px] border-b-[5px] hover:border-t-[10px] transition-all ease-in-out duration-300",
        {
          "text-white hover:text-gray-100 border-rose-300": type === "danger",
          "text-gray-800 hover:text-gray-900 border-purple-500":
            type === "warning",
        }
      )}
      style={{
        backgroundColor: backgroundColorTemplate,
      }}
      animate={{
        backgroundColor:
          type === "danger"
            ? "rgb(194, 65, 12)"
            : type === "warning"
            ? "rgb(250, 204, 21)"
            : "rgb(226, 232, 240, 0.5)",
      }}
      whileHover={{
        backgroundColor:
          type === "danger"
            ? "rgb(249, 115, 22)"
            : type === "warning"
            ? "rgb(234, 179, 8)"
            : "rgb(241, 245, 249, 0.5)",
      }}
      transition={{
        duration: 0.3,
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
