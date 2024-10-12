"use client";

import { cn } from "@/lib/utils";
import { Variants, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState, useCallback, memo, ReactNode } from "react"; // Added ReactNode

// Updated type definition for AccordionItemType
type AccordionItemType = {
  title: string;
  content: () => ReactNode; // Changed to function returning ReactNode
};

interface AccordionItemProps extends AccordionItemType {
  isExpanded: boolean;
  onToggle: () => void;
  className?: string;
}

interface AccordionProps {
  items: AccordionItemType[];
}

// Variants remain unchanged
const cardVariants: Variants = {
  collapsed: {
    height: "60px",
    width: "300px",
    transition: { type: "tween", stiffness: 200, damping: 30 },
  },
  expanded: {
    height: "auto",
    width: "auto",
    transition: { type: "tween", stiffness: 200, damping: 30 },
  },
};

const contentVariants: Variants = {
  collapsed: { opacity: 0, x: -30 },
  expanded: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.3, type: "tween", stiffness: 200, damping: 30 },
  },
};

const chevronVariants: Variants = {
  collapsed: { rotate: 0 },
  expanded: { rotate: 180, transition: { delay: 0.3 } },
};

// Updated AccordionItem to use function content
const AccordionItem = memo<AccordionItemProps>(
  ({ title, content, isExpanded, className, onToggle }) => {
    return (
      <motion.div
        className={cn(
          "mb-2 w-fit h-full overflow-hidden",
          className,

          isExpanded
            ? "border-l-4 rounded-none border-indigo-700 dark:border-lime-400"
            : "border rounded-xl dark:border-zinc-700"
        )}
        variants={cardVariants}
        initial="collapsed"
        animate={isExpanded ? "expanded" : "collapsed"}
      >
        <div
          onClick={onToggle}
          className={cn("cursor-pointer flex items-center justify-between p-4",
            isExpanded ? "" : ""
          )}
        >
          <span className=" m-0  font-semibold text-stone-500 dark:text-stone-400">
            {title}
          </span>
          <motion.div className="ml-4" variants={chevronVariants}>
            <ChevronDown
              className="h-4 w-4 stroke-[3px] text-indigo-700 dark:text-lime-400"
              size={18}
            />
          </motion.div>
        </div>

        <motion.div
          className="px-4 py-3"
          variants={contentVariants}
          initial="collapsed"
          animate={isExpanded ? "expanded" : "collapsed"}
        >
          {content()} {/* Call the content function here */}
        </motion.div>
      </motion.div>
    );
  }
);

AccordionItem.displayName = "AccordionItem";

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = useCallback((index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  }, []);

  return (
    <div className="z-10 flex flex-col items-start justify-start">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          {...item}
          className="max-w-2xl"
          isExpanded={expandedIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
