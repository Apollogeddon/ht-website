// Lighthouse CI over the built site (`npm run build` first). Performance only warns: it
// varies with the machine running it, so it would make the check flaky.
module.exports = {
  ci: {
    collect: {
      staticDistDir: "./dist",
      url: ["/", "/solutions", "/blog", "/blog/welcome", "/testimonials", "/profiles", "/policies", "/contact"],
      numberOfRuns: 1,
      settings: { chromeFlags: "--no-sandbox --headless=new" },
    },
    assert: {
      assertions: {
        "categories:accessibility": ["error", { minScore: 0.95 }],
        "categories:seo": ["error", { minScore: 0.95 }],
        "categories:best-practices": ["error", { minScore: 0.9 }],
        "categories:performance": ["warn", { minScore: 0.9 }],
      },
    },
    upload: { target: "filesystem", outputDir: ".lighthouseci" },
  },
};
