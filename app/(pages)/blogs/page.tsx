import { blogs } from "#site/content";
import Link from "next/link";
import React from "react";

export default async function BlogsPage() {
  const displayBlogs = blogs;
  return (
    <section className="flex-1 min-h-screen flex flex-col items-center justify-center">
      {displayBlogs.map((blog) => (
        <Link key={blog.slug} href={blog.slug}>
          <h1>{blog.title}</h1>
        </Link>
      ))}
    </section>
  );
}
