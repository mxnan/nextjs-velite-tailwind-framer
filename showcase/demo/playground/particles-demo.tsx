import Particles from "@/showcase/_components/particles";
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <span className="px-5 py-3 bg-secondary-foreground/80 rounded-lg text-3xl font-semibold text-secondary">
          particles.tsx
        </span>
      </div>
    </div>
  );
};

export default ParticlesDemo;
