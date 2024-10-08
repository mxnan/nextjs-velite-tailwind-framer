import { blogs } from "#site/content";
import { Icons } from "@/components/icons";
import { MDXContent } from "@/components/mdx/mdx-components";
import ProgressBar from "@/components/mdx/progress-bar";
import { buttonVariants } from "@/components/ui/button";
import { cn, formatDate } from "@/lib/utils";
import { FadeText } from "@/showcase/_components/fade-text";
import "@/styles/mdx.css";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import { notFound } from "next/navigation";

const DashboardTableOfContents = dynamic(
  () =>
    import("@/components/mdx/toc").then((mod) => mod.DashboardTableOfContents),
  { ssr: false }
);
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
  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set("title", blog.title);

  return {
    title: blog.title,
    description: blog.description,
    keywords: blog.tags?.join(", "),
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: blog.slug,
      type: "article",
      images: [
        {
          url: `/api/og?${ogSearchParams.toString()}`,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: [`/api/og?${ogSearchParams.toString()}`],
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
      <div className=" xl:block xl:fixed top-44 right-[calc(50%+33rem)]">
        <Link
          prefetch={true}
          href="/blogs"
          className={cn(
            buttonVariants({ variant: "default" }),
            "group font-semibold "
          )}
        >
          <Icons.upleft className=" mr-2 h-5 w-5 group-hover:-rotate-12 transition-all duration-300 ease-in-out" />
          All{" "}
          <span className=" ml-1" >
            Blogs
          </span>
        </Link>
      </div>
      <div
        className={cn(
          "w-full max-w-4xl mx-auto",
          blog.status === "draft" && "opacity-30"
        )}
      >
        <FadeText
          text={blog.title}
          direction="left"
          className=" scroll-m-10  tracking-tight
        text-4xl w-max
        drop-shadow-2xl font-semibold  "
        />

        <div className="[view-transition-name:text2] py-3 flex items-center gap-4">
          <dl className="flex">
            <dt className="sr-only">Published On</dt>
            <dd
              className={cn(
                "flex items-start gap-2 text-sm font-semibold text-muted-foreground transition-colors duration-500 ease-in-out"
              )}
            >
              <Icons.calenderClock className="w-4 h-4" />
              <time dateTime={blog.date}>{formatDate(blog.date)}</time>
            </dd>
          </dl>
          <p className="text-sm flex gap-2">
            <span
              className={cn(
                " font-semibold text-indigo-600 dark:text-lime-400 transition-all duration-500 ease-in-out",
                blog.status === "draft" && "text-red-500"
              )}
            >
              {blog.status}
            </span>{" "}
            <Icons.squarePen className="w-4 h-4" />
          </p>{" "}
        </div>
        <MDXContent code={blog.content} />
      </div>
      {blog.toc && blog.toc.length > 0 && (
        <div className="hidden 2xl:block ">
          <div className="fixed top-44 left-[calc(50%+30rem)] -mt-10 h-full overflow-y-auto pt-10">
            <DashboardTableOfContents toc={blog.toc} />
          </div>
        </div>
      )}
    </section>
  );
}
