"use client";
import { cn, formatDate } from "@/lib/utils";

import { Icons } from "./icons";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "next-view-transitions";

interface BlogCardProps {
  slug: string;
  title: string;
  date: string;
  description?: string;
  status?: string;
  tags?: string[];
  index: number;
}

export default function BlogCard({
  slug,
  title,
  date,
  description,
  status,
  tags,
  index,
}: BlogCardProps) {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Link
      href={slug}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      className="relative block h-full w-full max-w-2xl  max-md:border-b"
    >
      <AnimatePresence mode="wait">
        {hoveredIndex === index && (
          <motion.span
            className="absolute inset-0 h-full w-full block rounded-lg 
               bg-muted-foreground/[0.2] "
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.4,
                type: "spring",
                damping: 50,
                stiffness: 200,
              },
            }}
            exit={{
              opacity: 0,
              transition: {
                duration: 0.3,
                delay: 0.1,
                type: "spring",
                stiffness: 100,
                damping: 10,
              },
            }}
          />
        )}
      </AnimatePresence>
      <div className="p-3 lg:p-5 w-full h-full space-y-5">
        <div className="w-full space-y-3">
          <h1 className="text-3xl font-semibold my-2" >{title}</h1>
          <div className="flex flex-wrap my-2">
            <dl className="flex-1">
              <dt className="sr-only">Published On</dt>
              <dd
                className={cn(
                  "flex items-start gap-2 text-sm font-semibold text-muted-foreground transition-colors duration-500 ease-in-out",
                  hoveredIndex === index && "text-primary"
                )}
              >
                <Icons.calenderClock className="w-4 h-4" />
                <time dateTime={date}>{formatDate(date)}</time>
              </dd>
            </dl>
            <p className="text-sm flex gap-2">
              <span
                className={cn(
                  "opacity-0 font-semibold text-indigo-600 dark:text-lime-400 transition-all duration-500 ease-in-out",
                  hoveredIndex === index && "opacity-100",
                  status === "draft" && "text-red-500 dark:text-red-500"
                )}
              >
                {status}
              </span>{" "}
              <Icons.squarePen className="w-4 h-4" />
            </p>{" "}
          </div>
          <p className="text-sm font-medium mt-2">{description}</p>{" "}
        </div>
        <ul className="flex flex-wrap items-center gap-2">
          {tags?.map((tag) => (
            <li
              className={cn(
                "text-xs font-semibold px-3 py-1 rounded-md bg-transparent text-primary transition-colors duration-500 ease-in-out ",
                hoveredIndex === index && "bg-primary text-secondary "
              )}
              key={tag}
            >
              # {tag}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
