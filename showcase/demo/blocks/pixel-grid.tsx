"use client";
import { FormSection } from "@/components/form-section";
import { WobbleCard } from "@/showcase/_components/wobble-card";
import { useTheme } from "next-themes";

import React, { useState, useEffect, useCallback } from "react";

export default function PixelCursorDemo() {
  const [windowWidth, setWindowWidth] = useState(0);
  const { theme } = useTheme();

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const colorize = useCallback(
    (element: HTMLElement) => {
      element.style.backgroundColor = theme === "light" ? "#27272a" : "#e5e7eb";
      element.style.transition = "0.3s ease-in-out";

      setTimeout(() => {
        element.style.backgroundColor = "transparent";
      }, 300);
    },
    [theme]
  );

  const getBlocks = (columnIndex: number) => {
    const blockSize = windowWidth * 0.05;
    const nbOfBlocks = Math.ceil(window.innerHeight / blockSize);

    return [...Array(nbOfBlocks)].map((_, index) => (
      <div
        key={`${columnIndex}-${index}`}
        className="h-6 aspect-square hover:border hover:rounded-3xl border-indigo-700 dark:border-lime-400"
        onMouseEnter={(e: any) => colorize(e.target)}
        style={{
          width: "100%",
          aspectRatio: "1",
        }}
      />
    ));
  };

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      {/* Place holder for pixel effect , use anything you want */}
      <div className="z-20 h-full flex items-center justify-center ">
        <WobbleCard
          containerClassName="z-20 h-max max-w-3xl w-full bg-primary/90 text-primary-foreground "
          className="flex flex-col"
        >
          <div className="w-full h-full flex flex-col py-8 px-8">
            <span className="text-3xl font-semibold mb-4">Contact ?</span>
            <FormSection className="px-4" />
          </div>
        </WobbleCard>
      </div>

      {/* Pixel Grid */}
      <div
        className="absolute inset-0 grid h-full"
        style={{
          gridTemplateColumns: `repeat(21, 1fr)`,
          gap: "0px",
        }}
      >
        {windowWidth > 0 &&
          [...Array(100)].map((_, index: number) => (
            <div
              key={`col_${index}`}
              className="flex flex-col"
              style={{ gap: "0px" }}
            >
              {getBlocks(index)}
            </div>
          ))}
      </div>
    </div>
  );
}
