"use client";
import React from "react";
import { motion } from "framer-motion";
import { WobbleCard } from "@/showcase/_components/wobble-card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
const ImageCardDemo = () => {
  const container = {
    hidden: { y: -100 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.2,

        delayChildren: 0.3,
        staggerChildren: 0.4,
        type: "tween",
        damping: 50,
        stiffness: 200,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1, type: "tween" } },
  };

  return (
    <section className="relative h-full py-16 px-6 w-full flex-1">
      <div className="relative h-96 z-10 rounded-xl w-full overflow-hidden">
        <motion.div
          initial={{ y: -100 }}
          animate={{
            y: 0,
            transition: {
              duration: 1,
              type: "tween",
              ease: "easeInOut",
              damping: 50,
              stiffness: 200,
            },
          }}
          className="relative w-full h-96 overflow-hidden rounded-2xl"
          whileHover={{ scale: 1.03, y: -10, opacity: 0.8 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            initial={{ opacity: "0", y: -200 }}
            animate={{
              opacity: 100,
              y: 0,
              transition: {
                duration: 1,
                type: "spring",
                damping: 50,
                stiffness: 200,
              },
            }}
            className="relative w-full h-full"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              title="example"
              src="https://images.unsplash.com/photo-1724127902295-b2f5ba9a2b20?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="example"
              priority
              width={2048}
              height={1280}
              style={{ objectFit: "cover" }}
              sizes="(100vw, 100vh)"
              className="object-cover h-full rounded-2xl object-top"
            />
          </motion.div>
        </motion.div>

        <WobbleCard
          className="flex flex-col p-5 group/wobble "
          containerClassName="h-72 max-w-md w-full bg-transparent/40 rounded-xl
       absolute inset-0 top-16 left-0 lg:left-16"
        >
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="z-20 text-white
           px-2 w-full h-full rounded-xl"
          >
            <motion.h2 variants={item} className="text-2xl font-bold mb-5">
              Contact ?
            </motion.h2>
            <motion.p variants={item} className="text-sm mt-1 font-medium">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
              praesentium .
            </motion.p>
            <motion.p variants={item} className="text-sm mt-1 font-medium">
              Lorem ipsum dolor sit amet . praesentium .
            </motion.p>
            <motion.p variants={item} className="text-sm mt-1 font-medium">
              Read more ?
            </motion.p>
            <Button className="mt-5 font-semibold">Contact</Button>
          </motion.div>
        </WobbleCard>
      </div>
    </section>
  );
};

export default ImageCardDemo;
