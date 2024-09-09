import React, { useCallback } from "react";
import dynamic from "next/dynamic";
import { Icons } from "../icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface ComponentPreviewProps {
  path: string;
  category: string;
  usingFramer?: boolean;
  usingCN?: boolean;
  forShowcase?: boolean;
}

export function ComponentPreview({
  path,
  category,
  usingFramer,
  usingCN,
  forShowcase = false,
}: ComponentPreviewProps) {
  // get preview component from showcase/[]/[].tsx
  const Preview = useCallback(() => {
    const DynamicComponent = dynamic(
      () => import(`@/showcase/demo/${category}/${path}`),
      {
        ssr: true,
      }
    );
    return <DynamicComponent />;
  }, [path, category]);

  return (
    <div className="min-h-80 relative mt-4 border rounded-lg w-full bg-secondary">
      <div
        className={cn(
          "absolute -top-14 right-4 flex ",
          forShowcase && "hidden"
        )}
      >
        <TooltipProvider disableHoverableContent delayDuration={0}>
          <Tooltip>
            <TooltipTrigger className="p-2">
              <Icons.tailwind className="h-6 w-6 fill-primary" />
            </TooltipTrigger>
            <TooltipContent>
              <div className="flex items-center gap-1">
                <span>{usingCN ? "Using" : "Not using"}</span>
                <span
                  className={cn(
                    "font-semibold text-base",
                    usingCN ? "text-green-500" : "text-red-500"
                  )}
                >
                  Tailwind
                </span>
              </div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider disableHoverableContent delayDuration={0}>
          <Tooltip>
            <TooltipTrigger className="p-2">
              <Icons.framer className="h-5 w-5 fill-primary" />
            </TooltipTrigger>
            <TooltipContent>
              <div className="flex items-center gap-1">
                <span>{usingFramer ? "Using" : "Not using"}</span>
                <span
                  className={cn(
                    "font-medium text-sm",
                    usingFramer ? "text-green-500" : "text-red-500"
                  )}
                >
                  Framer motion
                </span>
              </div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <Preview />
      </div>
    </div>
  );
}
