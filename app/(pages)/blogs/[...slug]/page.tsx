import { blogs } from "#site/content";
import { Icons } from "@/components/icons";
import { MDXContent } from "@/components/mdx/mdx-components";
import ProgressBar from "@/components/mdx/progress-bar";
import { DashboardTableOfContents } from "@/components/mdx/toc";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import "@/styles/mdx.css";
import { Metadata } from "next";
import Link from "next/link";
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
      <div className="hidden xl:block fixed top-44 right-[calc(50%+33rem)]">
        <Link
          href="/blogs"
          className={cn(
            buttonVariants({ variant: "default" }),
            "group font-semibold"
          )}
        >
          <Icons.upleft className="mr-2 h-5 w-5 group-hover:-rotate-12 transition-all duration-300 ease-in-out" />
          All Blogs ?
        </Link>
      </div>
      <div
        className={cn(
          "w-full max-w-4xl mx-auto",
          blog.status === "draft" && "opacity-30"
        )}
      >
        <MDXContent code={blog.content} />
      </div>
      <div className="hidden 2xl:block ">
        <div className="fixed top-36 left-[calc(50%+30rem)] -mt-10  overflow-y-auto pt-10">
          <DashboardTableOfContents toc={blog.toc} />
        </div>
      </div>
    </section>
  );
}
