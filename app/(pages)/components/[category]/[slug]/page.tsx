import React from "react";
import { Components, components } from "#site/content";
import { MDXContent } from "@/components/mdx/mdx-components";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface ComponentSlugPageProps {
  params: {
    category: string;
    slug: string;
  };
}

async function getComponents(
  category: string,
  slug: string
): Promise<Components | undefined> {
  const component = components.find((component) => {
    const match =
      component.category === category &&
      component.slug === `components/${category}/${slug}`;

    return match;
  });

  return component;
}

export async function generateMetadata({
  params,
}: ComponentSlugPageProps): Promise<Metadata> {
  const components = await getComponents(params.category, params.slug);

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

export async function generateStaticParams(): Promise<
  ComponentSlugPageProps["params"][]
> {
  const params = components.map((component) => {
    const slugParts = component.slug.split("/");
    return {
      category: component.category,
      slug: slugParts[slugParts.length - 1],
    };
  });

  return params;
}

export default async function ComponentSlugPage({
  params,
}: ComponentSlugPageProps): Promise<React.ReactElement> {
  const component = await getComponents(params.category, params.slug);
  if (!component) {
    notFound();
  }

  return (
    <section className="flex-1 relative">
      <MDXContent code={component.content} />
    </section>
  );
}
