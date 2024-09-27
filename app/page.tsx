import { Metadata } from "next";
import { components, Components } from "#site/content";
import { MDXContent } from "@/components/mdx/mdx-components";
import HomePageHero from "@/components/home-page-hero";

async function getComponents(slug: string): Promise<Components | undefined> {
  return components.find((components) => components.slug === slug);
}

export const metadata: Metadata = {
  title: "Home",
  description: "Home Page for showcasing main components",
};
export default async function Home() {
  const components = await getComponents("components/home");

  if (!components) {
    return <div>Component not found</div>;
  }

  return (
    <>
      <HomePageHero />
      <section className="max-w-screen-xl mx-auto">
        <MDXContent code={components.content} />
      </section>
      
    </>
  );
}
