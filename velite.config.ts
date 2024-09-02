import { defineConfig, defineCollection, s } from "velite";

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
      summary: s.string().max(200).optional(),
      date: s.isodate(),
      published: s.boolean().default(true),
      image: s.string().optional(),
      tags: s.string().array().optional(),
      content: s.mdx(),
    })
    .transform(computedFields),
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
  collections: { blogs },
  mdx: {
    rehypePlugins: [],
    remarkPlugins: [],
  },
});
