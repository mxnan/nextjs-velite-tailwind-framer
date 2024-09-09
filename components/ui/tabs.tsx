"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "w-max justify-start rounded-none bg-transparent p-0",
      className
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(
        "relative bg-transparent text-sm px-3 pb-2 pt-2 font-medium text-muted-foreground shadow-none transition-colors duration-300 ease-in-out data-[state=active]:font-bold data-[state=active]:text-foreground data-[state=active]:shadow-none",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {props.children}
      {isHovered === true && (
        <AnimatePresence>
          <motion.span
            className="absolute bottom-0 left-0 h-[3px] rounded-xl w-full bg-primary"
            initial={{ opacity: 0, y: 10, scaleX: 0 }}
            animate={{ opacity: 1, y: 0, scaleX: 1 }}
            exit={{ opacity: 0, y: -10, scaleX: 0 }}
            transition={{
              duration: 0.5,
              type: "tween",
              stiffness: 100,
              damping: 20,
            }}
          />
        </AnimatePresence>
      )}
    </TabsPrimitive.Trigger>
  );
});
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  >
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.9 }}
      transition={{
        duration: 0.3,
        type: "tween",
        stiffness: 100,
        damping: 20,
      }}
    >
      {props.children}
    </motion.div>
  </TabsPrimitive.Content>
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
