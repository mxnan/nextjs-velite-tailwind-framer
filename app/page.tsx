import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Home",
    description: "Home page",
    alternates: {
      canonical: `https://mxnan.com`,
    },
  };
}
export default function Home() {
  return (
    <section className="w-full">
      <Button>hello</Button>
      
    </section>
  );
}
