import { components, Components } from "#site/content";
import { MDXContent } from "@/components/mdx/mdx-components";
import { Metadata } from "next";

import React from "react";

async function getComponents(slug: string): Promise<Components | undefined> {
  return components.find((components) => components.slug === slug);
}

export async function generateMetadata(): Promise<Metadata> {
  const components = await getComponents("components/intro");

  if (!components) {
    return {};
  }
  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set("title", components.title);

  return {
    title: components.title,
    description: components.description,
    keywords: components.tags?.join(", "),
    openGraph: {
      title: components.title,
      description: components.description,
      url: components.slug,
      type: "article",
      images: [
        {
          url: `/api/og?${ogSearchParams.toString()}`,
          width: 1200,
          height: 630,
          alt: components.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: components.title,
      description: components.description,
      images: [`/api/og?${ogSearchParams.toString()}`],
    },
  };
}

export default async function IntroPage() {
  const components = await getComponents("components/intro");

  if (!components) {
    return <div>Component not found</div>;
  }

  return (
    <section className="flex-1 relative">
      <MDXContent code={components.content} /> 
    </section>
  );
}
