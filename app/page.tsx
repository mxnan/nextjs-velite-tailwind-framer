import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/theme-toggle";
import Link from "next/link";


export default function Home() {
  return (
    <section className="w-full">
      <Button>hello</Button>
      <ThemeToggle />
      <Link href="/blogs">Blogs</Link>
    </section>
  );
}
