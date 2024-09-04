import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import readingTime from "reading-time";

const posts = defineCollection({
  name: "posts",
  directory: "posts",
  include: "**/*.mdx",
  schema: (z) => ({
    title: z.string(),
    description: z.string(),
    published: z.boolean().default(false),
    image: z.string(),
    date: z.string(),
    tags: z.array(z.string()),
    readTime: z
      .object({
        text: z.string(),
        minutes: z.string(),
        time: z.string(),
        words: z.string(),
      })
      .optional(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSlug],
    });
    return {
      ...document,
      readTime: Object(readingTime(document.content)),
      mdx,
    };
  },
});

export default defineConfig({
  collections: [posts],
});
