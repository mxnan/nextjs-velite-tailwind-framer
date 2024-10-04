import { FadeText } from "@/showcase/_components/fade-text";
import { Metadata } from "next";
import { components, Components } from "#site/content";
import dynamic from "next/dynamic";
import React from "react";
import { MDXContent } from "@/components/mdx/mdx-components";

const FormSection = dynamic(
  () => import("@/components/form-section").then((mod) => mod.FormSection),
  {
    ssr: false,
  }
);
async function getComponents(slug: string): Promise<Components | undefined> {
  return components.find((components) => components.slug === slug);
}
export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Page for emailing",
};
export default async function ContactPage() {
  const components = await getComponents("components/contact");

  if (!components) {
    return <div>Component not found</div>;
  }

  return (
    <>
      <div className="w-full h-max pt-16">
        <div className="space-y-8 relative max-w-4xl mx-auto mb-8">
          <FadeText
            text="Connect with me ?"
            direction="left"
            className="scroll-m-10 tracking-tight 
          text-4xl md:text-5xl lg:text-6xl font-semibold
         "
          />
          <p className="[view-transition-name:text2] font-medium max-md:text-sm md:ml-6">
            Looking for new opportunities. Let&apos;s get in touch.
          </p>
          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        </div>
        <MDXContent code={components.content} />
      </div>
    </>
  );
}
