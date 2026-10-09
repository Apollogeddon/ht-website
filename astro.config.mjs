// @ts-check

import tailwindcss from "@tailwindcss/vite";
import { defineConfig, envField } from "astro/config";
import { loadEnv } from "vite";

// The contact form is the site's only way to reach the business, so a deploy without its
// Web3Forms key must fail rather than ship a form whose every submission is rejected.
// Only builds of a push to main deploy; pull request builds, Dependabot's included, may not
// get repository variables, and the e2e tests supply their own key.
const env = loadEnv(process.env.NODE_ENV ?? "production", process.cwd(), "");
const deploying = process.env.GITHUB_EVENT_NAME === "push" && process.env.GITHUB_REF === "refs/heads/main";
if (deploying && !env.PUBLIC_WEB3FORMS_ACCESS_KEY) {
  throw new Error("PUBLIC_WEB3FORMS_ACCESS_KEY is not set: the contact form would not work");
}

// https://astro.build/config
export default defineConfig({
  site: "https://ht.apollogeddon.com",
  base: "/",
  env: {
    schema: {
      PUBLIC_WEB3FORMS_ACCESS_KEY: envField.string({ context: "client", access: "public", optional: true }),
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
