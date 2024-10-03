import Link from "next/link";

import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export function MdxCard({
  href,
  className,
  children,
  ...props
}: CardProps) {
  // Check if the href is external by looking for http(s):// or starting with //
  const isExternalLink = href?.match(/^(https?:)?\/\//);

  return (
    <div
      className={cn(
        "group relative rounded-lg border shadow-md transition-all hover:translate-y-1 hover:shadow-xl duration-300 ease-in-out",
        className
      )}
      {...props}
    >
      <div className="flex flex-col justify-between space-y-4">
        <div className="[&>p]:text-muted-foreground space-y-2 [&>h3]:!mt-0 [&>h4]:!mt-0">
          {children}
        </div>
      </div>
      {href && (
        isExternalLink ? (
          <a 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer"
            className="absolute inset-0"
          >
            <span className="sr-only">View (opens in new tab)</span>
          </a>
        ) : (
          <Link href={href} className="absolute inset-0">
            <span className="sr-only">View</span>
          </Link>
        )
      )}
    </div>
  );
}