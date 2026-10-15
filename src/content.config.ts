import { defineCollection, z } from "astro:content";
import { readdirSync } from "node:fs";
import { glob } from "astro/loaders";

// The site has no MDX integration, and the glob loader would skip an .mdx file with only a
// warning, so the build fails on one instead of publishing without it.
function markdownOnly(base: string) {
  const mdx = readdirSync(base, { recursive: true, encoding: "utf8" }).filter((file) => file.endsWith(".mdx"));
  if (mdx.length > 0) {
    throw new Error(`${base}: ${mdx.join(", ")}: posts are Markdown (.md); MDX isn't supported`);
  }
  return glob({ pattern: "**/[^_]*.md", base });
}

// strict: a misspelt or unsupported front matter field fails the build rather than being dropped
const blog = defineCollection({
  loader: markdownOnly("./src/content/blog"),
  schema: z
    .object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
    })
    .strict(),
});

const testimonials = defineCollection({
  loader: markdownOnly("./src/content/testimonials"),
  schema: z
    .object({
      author: z.string(),
      role: z.string(),
    })
    .strict(),
});

export const collections = { blog, testimonials };
