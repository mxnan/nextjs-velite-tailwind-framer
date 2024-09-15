"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

interface TypingWordsProps {
  text: string;
  duration?: number;
  className?: string;
}

export default function TypingWords({
  text,
  duration = 100,
  className,
}: TypingWordsProps) {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [i, setI] = useState<number>(0);

  useEffect(() => {
    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        setI(i + 1);
      } else {
        clearInterval(typingEffect);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [duration, i]);

  return (
    <h1
      className={cn(
        "font-bold text-xl",
        className,
      )}
    >
      {displayedText ? displayedText : text}
    </h1>
  );
}
