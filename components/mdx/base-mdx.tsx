import { cn } from "@/lib/utils";
import React, { HTMLAttributes } from "react";
import CustomLink from "./custom-link";
import Pre from "./pre-with-copy";

type ComponentsProps = HTMLAttributes<HTMLElement>;

export const basecomponents = {
  h1: ({ className, ...props }: ComponentsProps) => (
    <h1
      className={cn(
        "mt-12 scroll-m-32 text-4xl font-bold text-primary  tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: ComponentsProps) => (
    <h2
      className={cn(
        "mt-10 scroll-m-32 pb-1 text-3xl font-semibold text-primary tracking-tight first:mt-0",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: ComponentsProps) => (
    <h3
      className={cn(
        "mt-8 scroll-m-32 text-2xl font-semibold text-primary tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: ComponentsProps) => (
    <h4
      className={cn(
        "mt-8 scroll-m-32 text-xl font-semibold text-primary tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: ComponentsProps) => (
    <h5
      className={cn(
        "mt-8 scroll-m-32 text-lg font-semibold text-primary tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: ComponentsProps) => (
    <h6
      className={cn(
        "mt-8 scroll-m-32 text-base font-semibold text-primary tracking-tight",
        className
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: ComponentsProps) => (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...props}
    />
  ),
  strong: ({ className, ...props }: ComponentsProps) => (
    <strong
      className={cn("font-semibold text-muted-foreground", className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: ComponentsProps) => (
    <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
  ),
  ol: ({ className, ...props }: ComponentsProps) => (
    <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
  ),
  li: ({ className, ...props }: ComponentsProps) => (
    <li className={cn("mt-2 list-disc", className)} {...props} />
  ),
  blockquote: ({ className, ...props }: ComponentsProps) => (
    <blockquote
      className={cn(
        "[&>*]:text-muted-foreground mt-6 border-l-4 border-blue-500  pl-6 italic",
        className
      )}
      {...props}
    />
  ),
  hr: ({ ...props }) => (
    <hr className="my-4 h-[1px] max-w-sm md:my-8 bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent" {...props} />
  ),
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn("w-full max-w-4xl", className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn("even:bg-secondary m-0 border-t p-0", className)}
      {...props}
    />
  ),
  th: ({ className, ...props }: ComponentsProps) => (
    <th
      className={cn(
        "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: ComponentsProps) => (
    <td
      className={cn(
        "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  //////////////////////////////////////////////
  pre: Pre, // using as pre-with-copy for copy button functions
  //////////////////////////////////////////////
  code: ({ className, ...props }: ComponentsProps) => (
    <code
      className={cn(
        "relative rounded  px-[0.3rem] py-[0.2rem]  font-mono font-medium !text-sm",
        className
      )}
      {...props}
    />
  ),
  ////////////////////// customLink
  a: ({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
    <CustomLink
      className={cn(
        "font-semibold text-primary/60 mx-1 pb-2 custom-underline text-sm",
        className
      )}
      {...props}
    />
  ),
  ///////////////////// steps
  Step: ({ className, ...props }: React.ComponentProps<"h3">) => (
    <h3 className={cn("my-8 scroll-m-32 ", className)} {...props} />
  ),
  Steps: ({ ...props }: React.ComponentProps<"div">) => (
    <div
      className="[&>h3]:step steps mb-12 ml-4 border-l-[4px] border-primary/50 pl-8 [counter-reset:step]"
      {...props}
    />
  ),
};
