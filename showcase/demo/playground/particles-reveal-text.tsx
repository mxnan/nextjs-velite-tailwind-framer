import ParticlesReveal from '@/showcase/_components/particles-reveal';
import React from 'react'

const ParticlesRevealTextDemo  = () => {
  return (
    <div className="w-2/3 h-72 flex items-center justify-center">
      <ParticlesReveal
        width="fit-content"
        className="bg-stone-700"
        duration={1.5}
      >
        <h1 className="text-5xl text-center font-semibold ">
          Just a Heading with reveal animations
        </h1>
      </ParticlesReveal>
    </div>
  );
}

export default ParticlesRevealTextDemo 