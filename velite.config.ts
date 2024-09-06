import { defineConfig, defineCollection, s } from "velite";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeAutoLinkHeadings from "rehype-autolink-headings";

const computedFields = <T extends { slug: string }>(data: T) => ({
  ...data,
  slugAsParams: data.slug.split("/").slice(1).join("/"),
});

const blogs = defineCollection({
  name: "Blogs",
  pattern: "blogs/*.mdx",
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(20),
      description: s.string().max(99).optional(),
      date: s.isodate(),
      status: s.enum(["published", "draft"]).default("draft"),
      image: s.string().optional(),
      tags: s.string().array().optional(),
      toc: s.toc(),
      content: s.mdx(),
    })
    .transform(computedFields),
});

const components = defineCollection({
  name: "Components",
  pattern: "components/**/*.mdx",
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(50),
      description: s.string().max(200).optional(),
      category: s.string(),
      tags: s.string().array().optional(),
      toc: s.toc(),
      content: s.mdx(),
    })
    .transform((data) => ({
      ...computedFields(data),
      category: data.slug.split("/")[1], // Extract category from the slug
    })),
});

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { blogs, components },
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "vitesse-black",
        },
      ],
      [
        rehypeAutoLinkHeadings,
        {
          behavior: ":wrap",
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
    ],
    remarkPlugins: [],
  },
});
