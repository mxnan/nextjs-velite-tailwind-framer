import { formatDate } from "@/lib/utils";
import { Clock } from "lucide-react";
import Link from "next/link";

interface BlogCardProps {
  slug: string;
  title: string;
  date: string;
  description?: string;
  summary?: string;
  status?: string;
  tags?: string[];
}

export default function BlogCard({
  slug,
  title,
  date,
  description,
  summary,
  status,
  tags,
}: BlogCardProps) {
  return (
    <Link
      href={slug}
      className="relative block h-full w-full max-w-2xl  max-md:border-b"
    >
      <div className="p-4 lg:p-6 relative flex flex-col justify-between h-full">
        <h1 className="text-3xl font-semibold">{title}</h1>
        <p className="text-lg">{description}</p>
        <dl className="flex-1">
          <dt className="sr-only">Published On</dt>
          <dd className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <time dateTime={date}>{formatDate(date)}</time>
          </dd>
        </dl>
        <p className="text-muted-foreground">{summary}</p>
        <ul>
          {tags?.map((tag) => (
            <li key={tag}># {tag}</li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
