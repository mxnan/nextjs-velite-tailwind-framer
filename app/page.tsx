import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/theme-toggle";
import Link from "next/link";


export default function Home() {
  return (
    <section className="flex-1 min-h-dvh flex flex-col items-center justify-center">
      <Button>hello</Button>
      <ThemeToggle />
      <Link href="/blogs">Blogs</Link>
    </section>
  );
}
