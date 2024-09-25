import {
  BlurVignetteEffect,
  BlurVignetteEffectArticle,
} from "@/showcase/_components/blur-vignette-effect";
import Image from "next/image";
import React from "react";

export default function BlurVignetteCardDemo() {
  return (
    <>
      <div className="w-full h-96 text-black/80 grid grid-cols-1 md:grid-cols-2 gap-4 p-4 overflow-hidden">
        <BlurVignetteEffect
          radius="24px"
          inset="100px"
          transitionLength="200px"
          blur="15px"
          initial={{ opacity: 0.5, y: 100 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1.2,
              type: "tween",
              stiffness: 100,
              damping: 20,
            },
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1726621074197-114bcacddc7e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="grid"
            priority
            width={1920}
            className="mx-auto w-full relative h-full object-cover"
            height={3000}
          />
          <BlurVignetteEffectArticle
            initial={{ y: -100 }}
            animate={{
              y: 0,
              transition: {
                duration: 0.6,
                type: "tween",
                damping: 50,
                stiffness: 200,
              },
            }}
            className="w-fit h-fit m-4 "
          >
            <article className="px-3 py-5 w-full h-full">
              <h1 className="text-3xl font-semibold mb-2">Custom UI</h1>
              <p className="text-sm font-medium">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Debitis, quaerat ab? Rerum facilis dignissimos voluptatum!
              </p>
            </article>
          </BlurVignetteEffectArticle>
        </BlurVignetteEffect>
        <BlurVignetteEffect
          className="hidden md:block"
          radius="24px"
          inset="100px"
          transitionLength="200px"
          blur="15px"
          initial={{ opacity: 0.5, y: 100 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1.2,
              type: "tween",
              stiffness: 100,
              damping: 20,
            },
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1726409849659-1bd8aa7bdfe5?q=80&w=1942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="grid"
            priority
            width={1920}
            className="mx-auto w-full relative h-full object-cover"
            height={2800}
          />
          <BlurVignetteEffectArticle
            initial={{ y: -100 }}
            animate={{
              y: 0,
              transition: {
                duration: 0.6,
                type: "tween",
                damping: 50,
                stiffness: 200,
              },
            }}
            className="w-fit h-fit m-4 mt-auto"
          >
            <article className="px-3 py-5 w-full h-full">
              <h1 className="text-3xl font-semibold mb-2">Custom UI</h1>
              <p className="text-sm font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                sequi mollitia sed corporis veritatis quaerat totam. Ipsam at
                unde officia minus provident quasi odio distinctio.
              </p>
            </article>
          </BlurVignetteEffectArticle>
        </BlurVignetteEffect>
      </div>
    </>
  );
}
