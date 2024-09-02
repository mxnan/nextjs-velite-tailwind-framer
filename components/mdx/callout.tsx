import { cn } from "@/lib/utils";

export interface CalloutProps {
  children?: React.ReactNode;
  type?: "default" | "warning" | "danger";
}

export function Callout({
  children,
  type = "default",
  ...props
}: CalloutProps) {
  return (
    <div
      className={cn(
        "my-10 w-full max-w-3xl pr-5 p-3 font-medium text-sm flex items-start rounded-md border-l-[5px] border-b-[5px] bg-popover",
        {
          " text-secondary bg-destructive": type === "danger",
          " bg-ring text-secondary": type === "warning",
        }
      )}
      {...props}
    >
      {children}
    </div>
  );
}
