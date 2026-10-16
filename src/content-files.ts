import { readdirSync } from "node:fs";

// The Markdown-like extensions people use besides .md, and MDX and Markdoc, which need integrations
// the site doesn't have. The glob loader takes only lower-case .md, so it would drop any of these.
const OTHER_MARKDOWN = /\.(md|mdx|mdoc|markdown|mdown|mkdn|mkd|mdwn|mdtxt|mdtext)$/i;

/** The files under `base` that look like posts but aren't lower-case .md, which the glob loader would skip. */
export function unsupportedPosts(base: string): string[] {
  return readdirSync(base, { recursive: true, encoding: "utf8" }).filter(
    (file) => OTHER_MARKDOWN.test(file) && !file.endsWith(".md"),
  );
}
