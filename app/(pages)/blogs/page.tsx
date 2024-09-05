import { blogs } from "#site/content";
import BlogCard from "@/components/blog-card";

import { FadeText } from "@/components/mdx/fade-text";
import { sortBlogs } from "@/lib/utils";
import { Metadata } from "next";

import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Blogs",
    description: "Writing some blogs to showcase my learning and findings",
    alternates: {
      canonical: `https://mxnan.com/blogs`,
    },
  };
}
export default async function BlogsPage() {
  const sortedBlogs = sortBlogs(blogs.filter((blog) => blog));
  const displayBlogs = sortedBlogs;
  return (
    <section
      className="w-full relative max-w-4xl mx-auto flex-1 lg:flex max-lg:space-y-32 
  py-12 md:border-b"
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
            className="flex-1 p-4 md:border-x 
                    grid grid-cols-1
                    md:grid-cols-2
                    lg:grid-cols-2
                    justify-items-center content-center"
          >
            {displayBlogs?.map((blog, index) => (
              <BlogCard key={blog.slug} index={index} {...blog}  />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
