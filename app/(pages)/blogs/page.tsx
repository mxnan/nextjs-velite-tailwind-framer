import { blogs } from "#site/content";
import { FadeText } from "@/components/mdx/fade-text";
import { sortBlogs } from "@/lib/utils";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import React from "react";

const BlogCard = dynamic(() => import("@/components/blog-card"), {
  ssr: false,
});
export const metadata: Metadata = {
  title: "Blogs",
  description: "Blogs of mxnan",
};
export default async function BlogsPage() {
  const sortedBlogs = sortBlogs(blogs.filter((blog) => blog));
  const displayBlogs = sortedBlogs;
  return (
    <section
      className="w-full relative max-w-4xl mx-auto flex-1 max-lg:space-y-32 
  py-12 "
    >
      {/* BlogCards div */}
      <div className="flex-1 h-max flex flex-col gap-8 ">
        <div className="space-y-5 flex flex-col max-md:items-center">
          <FadeText
            text="Blogs"
            direction="left"
            framerProps={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { duration: 1, delay: 0.3, type: "spring" },
              },
            }}
            className="scroll-m-10 uppercase tracking-tight
        text-[5rem]  xl:text-[6rem] md:leading-[7rem] 
        drop-shadow-2xl font-semibold 
        bg-clip-text text-transparent bg-gradient-to-r from-gray-500 dark:from-stone-500 to-stone-950 dark:to-white"
          />

          <p className="text-sm ">
            Just some blogs to showcase learnings and findings
          </p>
        </div>
        {displayBlogs?.length > 0 && (
          <div
            className="flex-1 p-4 
                    grid grid-cols-1
                    md:grid-cols-2
                    lg:grid-cols-2
                    justify-items-center content-center"
          >
            {displayBlogs?.map((blog, index) => (
              <BlogCard key={blog.slug} index={index} {...blog} />
            ))}
          </div>
        )}
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
    </section>
  );
}
