import { blogs } from "#site/content";
import { MDXContent } from "@/components/mdx/mdx-components";
import ProgressBar from "@/components/mdx/progress-bar";
import { DashboardTableOfContents } from "@/components/mdx/toc";
import { cn } from "@/lib/utils";
import "@/styles/mdx.css";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface BlogPageProps {
  params: {
    slug: string[];
  };
}

async function getBlogFromParams(params: BlogPageProps["params"]) {
  const slug = params?.slug?.join("/");
  const blog = blogs.find((blog) => blog.slugAsParams === slug);
  return blog;
}
export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const blog = await getBlogFromParams(params);
  if (!blog) {
    return {};
  }
  return {
    title: blog.title,
    description: blog.description,
    keywords: blog.tags?.join(", "),
    alternates: {
      canonical: `https://mxnan.com/blogs/${blog.slugAsParams}`,
    },
  };
}
export async function generateStaticParams(): Promise<
  BlogPageProps["params"][]
> {
  return blogs.map((blog) => ({
    slug: blog.slugAsParams.split("/"),
  }));
}

export default async function BlogPage({ params }: BlogPageProps) {
  const blog = await getBlogFromParams(params);
  if (!blog) {
    notFound();
  }
  return (
    <section className="relative w-full">
      <ProgressBar />
      <div
        className={cn(
          "w-full max-w-4xl mx-auto",
          blog.status === "draft" && "opacity-30"
        )}
      >
        <MDXContent code={blog.content} />
        
      </div>
      <div className="hidden 2xl:block">
        <div className="fixed top-24 right-[calc(50%-46rem)] -mt-10  overflow-y-auto pt-10">
          <DashboardTableOfContents toc={blog.toc} />
        </div>
      </div>
    </section>
  );
}
