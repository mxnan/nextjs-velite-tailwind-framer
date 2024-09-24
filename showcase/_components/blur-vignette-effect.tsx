"use client";
import React, { createContext, useContext } from "react";
import { motion, MotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface BlurVignetteEffectContextProps {
  radius?: string;
  inset?: string;
  transitionLength?: string;
  blur?: string;
}

const BlurVignetteEffectContext = createContext<BlurVignetteEffectContextProps>(
  {
    radius: "24px",
    inset: "20px",
    transitionLength: "44px",
    blur: "6px",
  }
);

export const useBlurVignetteEffectContext = () =>
  useContext(BlurVignetteEffectContext);

interface BlurVignetteEffectProps extends MotionProps {
  className?: string;
  children: React.ReactNode;
  radius?: string;
  inset?: string;
  transitionLength?: string;
  blur?: string;
}

export const BlurVignetteEffect: React.FC<BlurVignetteEffectProps> = ({
  className,
  children,
  radius = "24px",
  inset = "20px",
  transitionLength = "44px",
  blur = "6px",
  ...motionProps
}) => {
  return (
    <BlurVignetteEffectContext.Provider
      value={{ radius, inset, transitionLength, blur }}
    >
      <motion.div
        className={cn("relative overflow-hidden", className)}
        style={{ borderRadius: radius }}
        {...motionProps}
      >
        {children}
      </motion.div>
    </BlurVignetteEffectContext.Provider>
  );
};

interface BlurVignetteEffectArticleProps extends MotionProps {
  children?: React.ReactNode;
  className?: string;
}

export const BlurVignetteEffectArticle: React.FC<
  BlurVignetteEffectArticleProps
> = ({ children, className, ...motionProps }) => {
  const { radius, inset, transitionLength, blur } =
    useBlurVignetteEffectContext();
  const gradient1 = `linear-gradient(to right, black, black ${inset}, transparent calc(${inset} + ${transitionLength}), transparent calc(100% - ${transitionLength} - ${inset}), black calc(100% - ${inset}))`;
  const gradient2 = `linear-gradient(to bottom, black, black ${inset}, transparent calc(${inset} + ${transitionLength}), transparent calc(100% - ${transitionLength} - ${inset}), black calc(100% - ${inset}))`;
  const radialGradients = [
    `radial-gradient(circle at bottom right, transparent 0px, transparent calc(${radius} - ${transitionLength}), black ${radius})`,
    `radial-gradient(circle at bottom left, transparent 0px, transparent calc(${radius} - ${transitionLength}), black ${radius})`,
    `radial-gradient(circle at top left, transparent 0px, transparent calc(${radius} - ${transitionLength}), black ${radius})`,
    `radial-gradient(circle at top right, transparent 0px, transparent calc(${radius} - ${transitionLength}), black ${radius})`,
  ];

  const maskImage = `${gradient1},${gradient2},${radialGradients.join(
    ","
  )}` as string;
  return (
    <motion.div
      className={cn("absolute inset-0 backdrop-blur", className)}
      style={{
        borderRadius: radius,
        maskImage: maskImage,
        maskSize: `
          100% calc(100% - (${inset} + ${radius}) * 2),
          calc(100% - (${inset} + ${radius}) * 2) 100%,
          calc(${radius} + ${inset}) calc(${radius} + ${inset}),
          calc(${radius} + ${inset}) calc(${radius} + ${inset}),
          calc(${radius} + ${inset}) calc(${radius} + ${inset}),
          calc(${radius} + ${inset}) calc(${radius} + ${inset})
        `,
        maskPosition: `
          0 calc(${inset} + ${radius}),
          calc(${inset} + ${radius}) 0,
          0 0,
          100% 0,
          100% 100%,
          0 100%
        `,
        maskRepeat: "no-repeat",
        backdropFilter: `blur(${blur})`,
      }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};
