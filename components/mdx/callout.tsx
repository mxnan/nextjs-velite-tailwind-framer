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
        "my-10 w-full max-w-3xl pr-5 p-3 font-medium text-sm flex items-start rounded-md  border-l-[5px] border-b-[5px] border-gray-300 dark:border-gray-700  bg-stone-50 dark:bg-stone-950",
        {
          " text-white bg-red-500 dark:bg-red-900": type === "danger",
          " bg-yellow-300 dark:bg-orange-600":
            type === "warning",
        }
      )}
      {...props}
    >
      {children}
    </div>
  );
}