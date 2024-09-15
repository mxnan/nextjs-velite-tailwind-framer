import Particles from "@/showcase/_components/particles";
import TypingWords from "@/showcase/_components/typing-words";
import React from "react";
// update imports acc to your folder structure .
const ParticlesDemo = () => {
  return (
    <div className="w-full h-80">
      <Particles
        className="absolute inset-0 "
        quantity={300}
        ease={80}
        size={4}
        refresh
      />
      <div className="absolute flex flex-col items-center space-y-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <TypingWords
          className="px-5 py-3 w-max bg-secondary-foreground/80 rounded-lg text-3xl font-semibold text-secondary"
          text="particles.tsx"
          duration={50}
        />
        <TypingWords
          className="px-3 w-max py-1 bg-primary/80 rounded-lg text-xs font-semibold text-secondary"
          text="Use as background for hero sections"
          duration={100}
        />
      </div>
    </div>
  );
};

export default ParticlesDemo;
