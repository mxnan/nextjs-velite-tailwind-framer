import { FormSection } from '@/components/form-section';
import { FadeText } from '@/components/mdx/fade-text';
import { Metadata } from 'next';
import React from 'react'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Contact",
    description: "Just a email contact section",
    alternates: {
      canonical: `https://mxnan.com/contact`,
    },
  };
}
export default function ContactPage() {
  return (
  <section className="flex-1 relative">
      <div className="max-w-2xl mx-auto space-y-8 py-24">
        <FadeText
          text="Connect with me ?"
          direction="left"
          framerProps={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { duration: 1, delay: 0.3, type: "spring" },
            },
          }}
          className="scroll-m-10 uppercase tracking-tight
          text-4xl md:text-5xl
          drop-shadow-2xl font-bold 
          bg-clip-text text-transparent bg-gradient-to-r from-gray-500 dark:from-stone-500 to-stone-950 dark:to-white"
        />
        <p className="font-medium max-md:text-sm md:ml-6">
          Looking for new opportunities. Let&apos;s get in touch.
        </p>
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        <FormSection className="pt-8 px-6" />
      </div>
  </section>
  )
}
