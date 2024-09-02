import { Button } from "@/components/ui/button";
import { blogs, type Blogs } from "#site/content";
import ThemeToggle from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="flex-1 min-h-screen flex flex-col items-center justify-center">
      <Button>hello</Button>
      <ThemeToggle />
      {blogs.map((blog: Blogs) => (
        <div key={blog.slug}>
          <h1>{blog.title}</h1>
          <p>{blog.summary}</p>
          <p>{blog.date}</p>
          <p>{blog.image}</p>
          <p>{blog.tags}</p>
        </div>
      ))}
    </main>
  );
}
