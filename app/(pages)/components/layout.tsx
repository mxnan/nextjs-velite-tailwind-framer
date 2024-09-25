import ProgressBar from "@/components/mdx/progress-bar";
import dynamic from "next/dynamic";
import "@/styles/mdx.css";

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
    <>
      <DynamicResponsiveSidebar />
      <div className="relative pt-16 max-w-4xl 2xl:max-w-6xl xl:ml-[calc(50%-30rem)] mx-auto">
        <ProgressBar />
        {children}
      </div>
    </>
  );
}
