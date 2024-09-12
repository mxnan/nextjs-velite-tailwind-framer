import ParticlesReveal from "@/showcase/_components/particles-reveal";
import React from "react";

const GridItems = [
  {
    title: "Grid Reveal",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit.",
    info: [" text ", " text ", " text "],
  },
  {
    title: "Grid Reveal",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit.",
    info: [" text ", " text ", " text "],
  },
  {
    title: "Grid Reveal",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit.",
    info: [" text ", " text ", " text "],
  },
];
const ParticlesRevealGridDemo = () => {
  return (
    <div
      className="w-full relative pt-24
    flex-1 grid grid-cols-1 gap-6 p-4
                      sm:grid-cols-2 
                      md:grid-cols-2
                      lg:grid-cols-3
                      justify-items-center content-start
    "
    >
      {GridItems.map((item, index) => (
        <ParticlesReveal key={index} width="fit-content" duration={1.5}>
          {/* just a card example*/}
          <div className="max-w-sm group/card rounded-md border border-secondary-foreground p-3 cursor-pointer">
            <h1 className="text-xl font-semibold mb-3">{item.title}</h1>
            <p className=" font-semibold text-sm mb-2">{item.description}</p>
            <ul className="text-xs font-semibold flex gap-3 group-hover/card:translate-x-2 transition-transform duration-300 ">
              {item.info.map((info, index) => (
                <li key={index}>{info}</li>
              ))}
            </ul>
          </div>
        </ParticlesReveal>
      ))}
    </div>
  );
};

export default ParticlesRevealGridDemo;
