"use client";
import { motion } from "framer-motion";

interface MarqueeContainerProps {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  speed?: number; // Duration in seconds
  width?: number; // Total width of the content
}

const MarqueeContainer = ({ 
  children, 
  direction = 'left',
  speed = 20,
  width = 1840, // Default width (adjust based on content)
}: MarqueeContainerProps) => {
  const getAnimationDirection = () => {
    return direction === 'left' 
      ? {
          x: [0, -width],
        }
      : {
          x: [-width, 0],
        };
  };

  return (
    <div className="relative w-full overflow-hidden py-4">
      <motion.div
        className="flex gap-4 whitespace-nowrap"
        animate={getAnimationDirection()}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "reverse",
            duration: speed,
            type: "tween",
            ease: "linear",
            stiffness: 100,
            damping: 20,
          },
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default MarqueeContainer;