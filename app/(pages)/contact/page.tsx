
import { FadeText } from "@/showcase/_components/fade-text";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import React from "react";

const FormSection = dynamic(
  () => import("@/components/form-section").then((mod) => mod.FormSection),
  {
    ssr: false,
  }
);

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Page for emailing",
};
export default function ContactPage() {
  return (
    <>
      <div className="max-w-2xl w-full h-max mx-auto space-y-8 pt-16">
        <FadeText
          text="Connect with me ?"
          direction="left"
          framerProps={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                duration: 1,
                delay: 0.5,
                type: "spring",
                stiffness: 150,
                damping: 15,
              },
            },
          }}
          className="scroll-m-10 uppercase tracking-tight
          text-4xl md:text-5xl lg:text-6xl
          drop-shadow-2xl font-bold 
          bg-clip-text text-transparent bg-gradient-to-r from-gray-500 dark:from-stone-500 to-stone-950 dark:to-white"
        />
        <p className="font-medium max-md:text-sm md:ml-6">
          Looking for new opportunities. Let&apos;s get in touch.
        </p>
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        <FormSection className="pt-8 px-6" />
      </div>
    </>
  );
}
