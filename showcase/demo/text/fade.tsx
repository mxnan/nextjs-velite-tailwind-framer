import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FadeText } from "@/showcase/_components/fade-text";
import React from "react";

export default function FadeTextDemo() {
  return (
    <div className="p-10 grid gap-6 grid-cols-1 md:grid-cols-2">
      <FadeText
        text="fade up"
        direction="up"
        framerProps={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              duration: 2,
              delay: 0.5,
              ease: "ease-in-out",
              type: "spring",
              stiffness: 150,
              damping: 15,
            },
          },
        }}
        className={cn(buttonVariants({ variant: "default" }), "font-semibold")}
      />
      <FadeText
        text="fade down"
        direction="down"
        framerProps={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              duration: 2,
              delay: 0.5,
              ease: "ease-in-out",
              type: "spring",
              stiffness: 150,
              damping: 15,
            },
          },
        }}
        className={cn(buttonVariants({ variant: "default" }), "font-semibold")}
      />
      <FadeText
        text="fade left"
        direction="left"
        framerProps={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              duration: 2,
              delay: 0.5,
              ease: "ease-in-out",
              type: "spring",
              stiffness: 150,
              damping: 15,
            },
          },
        }}
        className={cn(buttonVariants({ variant: "default" }), "font-semibold")}
      />
      <FadeText
        text="fade right"
        direction="right"
        framerProps={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              duration: 2,
              delay: 0.5,
              ease: "ease-in-out",
              type: "spring",
              stiffness: 150,
              damping: 15,
            },
          },
        }}
        className={cn(buttonVariants({ variant: "default" }), "font-semibold")}
      />
    </div>
  );
}
