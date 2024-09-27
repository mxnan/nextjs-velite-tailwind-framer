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
          className="scroll-m-10  tracking-tight
          text-4xl md:text-5xl lg:text-6xl font-semibold
         "
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
