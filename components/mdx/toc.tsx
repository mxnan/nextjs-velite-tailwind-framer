"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { useMounted } from "@/hooks/use-mounted";
import { AnimatePresence, motion } from "framer-motion";

interface TocEntry {
  items?: TocEntry[];
  url: string;
  title: string;
}

interface TocProps {
  toc: TocEntry[];
}

export function DashboardTableOfContents({ toc }: TocProps) {
  const itemIds = React.useMemo(
    () =>
      toc
        ? toc
            .flatMap((item) => [item.url, item?.items?.map((item) => item.url)])
            .flat()
            .filter(Boolean)
            .map((id) => id?.split("#")[1])
        : [],
    [toc]
  );
  const activeHeading = useActiveItem(itemIds);
  const mounted = useMounted();

  return mounted ? (
    <div className="space-y-2">
      <p className="font-bold text-lg">On This Page</p>
      <Tree tree={toc} activeItem={activeHeading} />
    </div>
  ) : null;
}

function useActiveItem(itemIds: (string | undefined)[]) {
  const [activeId, setActiveId] = React.useState<string>("");

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: `0% 0% -80% 0%` }
    );

    itemIds?.forEach((id) => {
      if (!id) {
        return;
      }

      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      itemIds?.forEach((id) => {
        if (!id) {
          return;
        }

        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [itemIds]);

  return activeId;
}

interface TreeProps {
  tree: TocEntry[];
  level?: number;
  activeItem?: string | null;
}

function Tree({ tree, level = 1, activeItem }: TreeProps) {
  return tree.length && level < 3 ? (
    <ul className={cn("m-0 list-none", { "pl-3": level !== 1 })}>
      {tree.map((item, index) => {
        return (
          <li key={index} className={cn("mt-0 pt-2")}>
            <a
              href={item.url}
              className={cn(
                "inline-block relative text-sm pl-3 transition-colors duration-300 ease-in-out",
                item.url === `#${activeItem}`
                  ? "text-primary"
                  : "text-primary/50"
              )}
            >
              <AnimatePresence>
                {item.url === `#${activeItem}` && (
                  <motion.span
                    key="activeItem"
                    layoutId="activeItem"
                    className="absolute left-0 top-0 rounded-xl h-4 w-1 bg-blue-500"
                    initial={{ opacity: 0.3 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0.3 }}
                    transition={{
                      type: "tween",
                      duration: 0.3,
                      stiffness: 200,
                      damping: 30,
                    }}
                  />
                )}
              </AnimatePresence>
              {item.title}
            </a>
            {item.items?.length ? (
              <Tree
                tree={item.items}
                level={level + 1}
                activeItem={activeItem}
              />
            ) : null}
          </li>
        );
      })}
    </ul>
  ) : null;
}
