import { FormSection } from "@/components/form-section";
import Particles from "@/showcase/_components/particles";
import { WobbleCard } from "@/showcase/_components/wobble-card";
import React from "react";

const ParticlesWobbleCard = () => {
  return (
    <section className="relative w-full h-max py-24 flex items-center justify-center px-2">
      <WobbleCard
        containerClassName="z-10 h-2/3 max-w-3xl w-full bg-primary/90 text-primary-foreground "
        className="flex flex-col"
      >
        <div className="w-full h-full flex flex-col py-8 px-8">
          <span className="text-3xl font-semibold mb-4">Contact ?</span>
         <FormSection className="px-4" />
        </div>
      </WobbleCard>
      <Particles
        className="absolute inset-0 "
        quantity={300}
        ease={40}
        staticity={50}
        size={4}
        refresh
      />
    </section>
  );
};

export default ParticlesWobbleCard;
