import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { expect, test } from "@playwright/test";
import { unsupportedPosts } from "../src/content-files";

// The build fails on these, as the glob loader would otherwise leave them out of the site without a word.
test("finds every post the site would drop, whatever its case, and passes .md ones", () => {
  const base = mkdtempSync(path.join(tmpdir(), "content-"));
  try {
    mkdirSync(path.join(base, "nested"));
    const dropped = ["a.mdx", "b.MDX", "c.markdown", "d.mdoc", "e.MD", "_draft.mdx", path.join("nested", "f.Markdown")];
    for (const file of [...dropped, "kept.md", "_skipped.md", "Thumbs.db", ".DS_Store", "image.png"]) {
      writeFileSync(path.join(base, file), "");
    }
    expect(unsupportedPosts(base).sort()).toEqual(dropped.sort());
  } finally {
    rmSync(base, { recursive: true, force: true });
  }
});

test("passes the site's own content", () => {
  for (const base of ["src/content/blog", "src/content/testimonials"]) {
    expect(unsupportedPosts(base)).toEqual([]);
  }
});
