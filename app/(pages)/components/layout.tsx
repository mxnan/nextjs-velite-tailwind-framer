import ProgressBar from "@/components/mdx/progress-bar";
import dynamic from "next/dynamic";

const DynamicResponsiveSidebar = dynamic(
  () => import("@/components/navigation/responsive-sidebar"),
  { ssr: false }
);
export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <DynamicResponsiveSidebar />
      <div className="relative pt-16 max-w-4xl xl:ml-[calc(50%-30rem)] mx-auto">
        <ProgressBar />
        {children}
      </div>
    </div>
  );
}