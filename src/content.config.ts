import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { unsupportedPosts } from "./content-files";

// The site has no MDX or Markdoc integration, and the glob loader would skip any file but .md with
// at most a warning, so the build fails on one instead of publishing without it.
function markdownOnly(base: string) {
  const unsupported = unsupportedPosts(base);
  if (unsupported.length > 0) {
    throw new Error(
      `${base}: ${unsupported.join(", ")}: entries are Markdown ending in lower-case .md; MDX and Markdoc aren't supported`,
    );
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
