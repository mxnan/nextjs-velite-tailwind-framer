"use client";
import { FormSection } from "@/components/form-section";
import { Button } from "@/components/ui/button";
import Accordion from "@/showcase/_components/accordion-primitive";
import ImageinView from "@/showcase/_components/image-in-view";
import { BookAudio, LeafyGreen } from "lucide-react";
import Image from "next/image";
import React from "react";
type AccordionItem = {
  title: string;
  content: () => React.ReactNode;
};
const accordionItems: AccordionItem[] = [
  {
    title: "Explore Knowledge",
    content: () => (
      <div className="flex items-center gap-8 flex-inline">
        <div className="relative hidden sm:block sm:w-48 lg:w-72 h-40 overflow-hidden rounded-xl border">
          <Image
            src={
              "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="example"
            fill
            className="object-cover w-full h-full aspect-video"
          />
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-row flex-inline">
            <BookAudio className="h-7 w-7 mr-2" />
            <p className="text-sm font-medium">
              Discover new worlds of information with our interactive learning
              platform.
            </p>
          </div>
          <Button className="w-max">Track Here ?</Button>
        </div>
      </div>
    ),
  },
  {
    title: "Innovative Learning",
    content: () => (
      <div className="flex flex-col gap-6">
        <div className="flex flex-row flex-inline">
          <LeafyGreen className="h-5 w-5 mr-2" />
          <p className="text-sm font-medium">
            Experience cutting-edge educational techniques that adapt to your
            unique learning style.
          </p>
        </div>
        <Button className="w-max">Learn more ?</Button>
      </div>
    ),
  },

  {
    title: "Global Community",
    content: () => (
      <div className="flex flex-row flex-inline">
        {/* using form section as a placeholder */}
        <FormSection />
      </div>
    ),
  },
  {
    title: "Personalized Growth",
    content: () => (
      <div className="flex items-center gap-8 flex-inline">
        <div className="relative hidden sm:block sm:w-48 lg:w-72 h-40 overflow-hidden rounded-xl border">
          <Image
            src={
              "https://images.unsplash.com/photo-1523798506119-1caac6f7e8d6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="example"
            fill
            className="object-cover w-full h-full aspect-video"
          />
        </div>
        <div className="flex flex-col gap-6">
          <p className="text-sm font-medium">
            Track your progress and receive tailored recommendations to
            accelerate your learning journey.
          </p>
          <Button className="w-max">Track Here ?</Button>
        </div>
      </div>
    ),
  },
];
export default function AccordionDemo() {
  return (
    <div className="flex-1 w-full overflow-hidden rounded-2xl py-10">
      <div className="relative p-8 ">
        <div className="max-w-6xl mx-auto  flex flex-col md:flex-row-reverse justify-start md:justify-center items-start md:items-center gap-10">
          <ImageinView /> <Accordion items={accordionItems} />
        </div>
        <div
          className="absolute top-1/2 right-0 z-0 dark:bg-indigo-600/30 bg-lime-400/30 w-3/5 
            translate-x-1/2 h-full -translate-y-1/2 blur-[10rem]"
        />
        <div
          className="absolute top-1/2 left-0 z-0 dark:bg-indigo-600/30 bg-lime-400/30 w-1/5 
            -translate-x-1/2 h-full -translate-y-1/2 blur-[10rem]"
        />
      </div>
    </div>
  );
}
