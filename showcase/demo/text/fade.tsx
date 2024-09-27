import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FadeText } from "@/showcase/_components/fade-text";
import React from "react";

export default function FadeTextDemo() {
  return (
    <div className="p-10 grid gap-6  grid-cols-1 md:grid-cols-2">
      <FadeText
        text="fade left"
        direction="left"
        className="font-semibold text-2xl"
      />
      <FadeText
        text="fade down"
        direction="down"
       className="font-semibold text-2xl"
      />
      <FadeText
        text="fade up"
        direction="up"
       className="font-semibold text-2xl"
      />
      <FadeText
        text="fade right"
        direction="right"
       className="font-semibold text-2xl"
      />
    </div>
  );
}
