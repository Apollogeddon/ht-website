<div align="center">
  <a href="https://ht.apollogeddon.com">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="./src/assets/logo-dark.svg">
      <img src="./src/assets/logo.svg" alt="Harnessing Talent">
    </picture>
  </a>

  <p align="center">
    The Harnessing Talent website, built with Astro
    <br />
    <a href="https://ht.apollogeddon.com"><strong>Visit the site</strong></a>
  </p>
</div>

<br />

Website for **[Harnessing Talent](https://ht.apollogeddon.com)**, a management consultancy based in Adelaide, South Australia. The site showcases the consulting services, team profiles, and client testimonials, with an integrated blog. Built with [Astro](https://astro.build/) for performance and [Tailwind CSS](https://tailwindcss.com/) for styling, it is designed to be fast, accessible, and straightforward for non-developers to maintain.

## What it is

A static site of a few pages (home, solutions, profiles, testimonials, blog, contact, policies), built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/) v4. Astro renders every page to HTML at build time and ships little JavaScript: a theme toggle, the testimonial carousel, scroll reveals and the contact form's submit handler. The output in `dist/` is published to GitHub Pages.

The contact form posts to [Web3Forms](https://web3forms.com/), which emails each submission on; there is no server of our own. Every page sets a title, description, canonical URL and Open Graph and Twitter card tags from `src/layouts/MainLayout.astro`.

Two guides cover the site for its editors, without needing to know the code:

- [INSTALL.md](./INSTALL.md): setting up a Windows machine with VS Code to edit the site.
- [UPDATES.md](./UPDATES.md): adding blog posts and testimonials, changing the site's text, and publishing.

## Local setup

You need Node.js 24 (the version is pinned in `.nvmrc`) and npm.

```bash
npm install
npm run dev
```

The site is then at <http://localhost:4321> and reloads as you save. `npm install` also installs the git hooks (see [Checks](#checks)).

### Scripts

| Script | What it does |
| :--- | :--- |
| `npm run dev` | Start the development server on port 4321. |
| `npm run build` | Build the site into `dist/`. |
| `npm run preview` | Serve the built `dist/` locally, to check a build. |
| `npm run lint` | Biome (format and lint, fixing what it can), then markdownlint over the Markdown files. |
| `npm run lint:ts` / `npm run lint:md` | Just Biome, or just markdownlint. |
| `npm run type` | `astro check`: type-checks the `.astro` and TypeScript files and the content collections' front matter. |
| `npm test` | Build the site, serve it, and run the Playwright tests against it. Installs Playwright's browsers first. |
| `npm run test:e2e:ui` | The same tests in Playwright's interactive UI. |
| `npm run security` | Scan the dependencies for known vulnerabilities with [OSV-Scanner](https://google.github.io/osv-scanner/) (needs `osv-scanner` on your PATH). |

## Environment variables

| Variable | Used for | Where it is set |
| :--- | :--- | :--- |
| `PUBLIC_WEB3FORMS_ACCESS_KEY` | The contact form's Web3Forms access key. It is public: it ends up in the page's HTML. | The `PUBLIC_WEB3FORMS_ACCESS_KEY` repository variable in GitHub, passed to the build in CI. |

You don't need the key to work on the site. Without it, the contact page still renders, but its submit button is disabled and a notice says the form is unavailable; everything else works as normal. To try the form for real, copy `.env.example` to `.env` and put a key of your own in it (`.env` is gitignored), as [INSTALL.md](./INSTALL.md#4-configure-the-contact-form) describes.

The key is declared in `astro.config.mjs` as an optional `astro:env` variable. The only build that insists on it is the deploy build, of a push to `main` in GitHub Actions: it fails rather than ship a form whose every submission would be rejected. Local builds, pull request builds and the tests don't need it, and `npm test` builds with a placeholder key of its own.

## Project structure

```text
/
├── .github/workflows/  # CI: calls forgejs's website workflow, then checks the live site
├── e2e/                # Playwright tests (accessibility, forms, links, navigation, SEO, site)
├── public/             # Files copied as-is into the build (favicons)
├── src/
│   ├── assets/         # Logos and photos, optimised by Astro at build time
│   ├── components/     # UI components (Header, Footer, buttons, cards, sections)
│   ├── content/        # Content collections: blog posts and testimonials, in Markdown
│   ├── layouts/        # MainLayout: the page shell, meta tags and theme script
│   ├── pages/          # One file per route; blog/[slug] and solutions/[slug] are generated
│   ├── styles/
│   │   └── global.css  # Tailwind import, design tokens and shared component classes
│   ├── consts.ts       # The site's text, navigation and routes
│   ├── content.config.ts # The content collections' schemas
│   └── styles.ts       # SVG icon paths and the brand palette for script use
├── astro.config.mjs    # Astro configuration, including the environment variable schema
├── playwright.config.ts # Browsers to test in, and the build the tests run against
└── package.json
```

## Design tokens

The site's colours, shadows and gradients are CSS custom properties in [`src/styles/global.css`](./src/styles/global.css). There are two layers:

- **The palette**, in the `@theme` block: `--color-brand-50` to `--color-brand-700` (the orange brand scale) and `--color-zinc-50` to `--color-zinc-950` (neutrals). Being in `@theme`, Tailwind generates utilities from them, such as `bg-brand-600` or `text-zinc-500`. They are the same in light and dark mode.
- **Semantic tokens**, in `:root` and redefined under `.dark`, describe a role rather than a colour, so one class works in both themes:

| Tokens | Role |
| :--- | :--- |
| `--bg-primary`, `--bg-secondary`, `--bg-muted`, `--bg-inverse` | Page background, raised surfaces, muted bands, and the inverse of the page. |
| `--text-primary`, `--text-secondary`, `--text-inverse` | Body text, quieter text, and text on `--bg-inverse`. |
| `--border-subtle`, `--border-strong` | Dividers and outlines. |
| `--brand-accent`, `--brand-accent-hover`, `--brand-light` | Brand-coloured text, links and outlines, and a pale brand tint for backgrounds. |
| `--brand-fill`, `--brand-fill-hover` | Filled brand surfaces that carry white text (buttons, bands). Kept separate from `--brand-accent` so white text keeps enough contrast in dark mode. |
| `--error`, `--error-bg`, `--error-fg`, `--success-bg`, `--success-fg` | Form validation and status messages. |
| `--header-bg`, `--header-border` | The sticky header. |
| `--card-bg`, `--card-border`, `--card-shadow`, `--card-shadow-hover` | Cards. |
| `--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-brand` | Elevation. |
| `--gradient-hero`, `--gradient-brand`, `--gradient-brand-text` | Hero background, brand bands, and gradient text. |
| `--surface-glass`, `--ring-focus`, `--ease-spring` | Translucent panels, the focus ring, and the easing used by transitions. |

Use the semantic tokens in components, through Tailwind's arbitrary values:

```astro
<section class="bg-[var(--bg-muted)] text-[var(--text-secondary)]">
  <a class="text-[var(--brand-accent)] hover:text-[var(--brand-accent-hover)]" href="/contact">Get in touch</a>
</section>
```

Reach for a palette colour (`text-brand-600`) only where the colour must not change with the theme, such as on a fixed brand-coloured background. Dark mode is the `.dark` class on `<html>`, set before first paint from the visitor's choice or their system setting; Tailwind's `dark:` variant follows the same class.

The rest of `global.css` builds shared classes on the tokens: buttons (`.btn-primary`, `.btn-secondary`, `.btn-ghost`), cards (`.card-base`, `.card-interactive`, `.card-glass`, `.card-stat`), layout (`.container-site`, `.section-padding`, `-sm`, `-lg`), type (`.eyebrow`, `.display-hero`, `.text-gradient-brand`, `.prose-site`, `.article-content` for blog posts) and backgrounds and motion (`.bg-hero`, `.bg-muted-soft`, `.scroll-reveal`, the arch motif). Prefer one of these to restyling the same thing in a component. Under `prefers-reduced-motion`, animations and transitions are turned off.

When you add or change a token, set it in both `:root` and `.dark`, and check the contrast: the accessibility tests fail on text that doesn't meet WCAG AA in either theme.

## Editing content

| What | Where |
| :--- | :--- |
| Blog posts | One Markdown file each in `src/content/blog/`. Front matter: `title`, `description`, `pubDate`, and optionally `updatedDate`. The file name is the URL: `welcome.md` is `/blog/welcome`. Files starting with `_` are skipped, and an `.mdx` file fails the build, as the site has no MDX support. |
| Testimonials | One Markdown file each in `src/content/testimonials/`, with `author` and `role` in the front matter and the quote as the body. |
| Page text, navigation, solutions, contact details, policies | `src/consts.ts`. Each solution there also gets its own page under `/solutions/`. |
| Images | `src/assets/`, imported and rendered with Astro's `<Image />`, so they are resized and compressed at build time. |

Front matter is checked against the schemas in `src/content.config.ts`: `npm run type` and the build fail on a missing, mistyped or unknown field. [UPDATES.md](./UPDATES.md) walks through each of these step by step.

## Checks

Commits run through [lefthook](https://github.com/evilmartians/lefthook): Biome checks the staged files, and commitlint checks the message against [Conventional Commits](https://www.conventionalcommits.org/) (`feat: add june blog post`). Biome and commitlint take their base configuration from [forgejs](https://github.com/Apollogeddon/forgejs); markdownlint's rules are this repository's own, in `.markdownlint-cli2.jsonc`.

### Testing

`npm test` builds the site with a placeholder Web3Forms key, serves it with `astro preview`, and runs the tests in `e2e/` with [Playwright](https://playwright.dev/) in Chromium, Firefox and WebKit, on desktop and on Pixel 5 and iPhone 13 viewports:

- `a11y.spec.ts` scans every page with [axe-core](https://github.com/dequelabs/axe-core) in both the light and the dark theme, and fails on any violation it can detect.
- `forms.spec.ts` checks the contact form: its fields, sending to Web3Forms and the thank-you that follows, the error shown when sending fails, validation of an empty form, and that it still posts without JavaScript. Web3Forms is intercepted, so nothing is sent.
- `navigation.spec.ts` checks keyboard and screen reader use of the menus and the theme toggle, and that content revealed on scroll is visible without JavaScript.
- `links.spec.ts` checks for broken internal links, `seo.spec.ts` for each page's title, description, canonical and social tags, and `site.spec.ts` that each page renders.

Run one file or one browser with Playwright's own options, for example `npx playwright test e2e/a11y.spec.ts --project=chromium`. Locally, Playwright reuses a server already running on port 4321; stop `npm run dev` first if you want the tests to run against a fresh build. The HTML report opens with `npx playwright show-report`.

## Deploying

CI is forgejs's [website workflow](https://github.com/Apollogeddon/forgejs/blob/main/.github/workflows/website.yml), called from [`.github/workflows/.index.yaml`](./.github/workflows/.index.yaml) ([`.github/WORKFLOWS.md`](./.github/WORKFLOWS.md) describes each job):

1. On every pull request and push to `main`, it installs, runs the tests, and builds the site with the `PUBLIC_WEB3FORMS_ACCESS_KEY` variable. A separate job runs Lighthouse over the build, and Dependabot's pull requests are merged once both pass.
2. On `main`, [release-please](https://github.com/googleapis/release-please) keeps a release pull request open, with the next version and the `CHANGELOG.md` entries from the commit messages.
3. Merging that release pull request tags a release, and the build is deployed to GitHub Pages at <https://ht.apollogeddon.com>. A last job then checks the live site responds.

So a merge to `main` alone doesn't change the live site: it goes out with the next release.

## License

The code in this repository is licensed under the MIT License. See [`LICENSE`](./LICENSE).

The MIT License does not cover the website's content, which belongs to Harnessing Talent: all rights reserved. That content includes:

- the written text in `src/consts.ts` and on the pages
- the blog posts and testimonials in `src/content/`
- the logos, images and other media in `src/assets/` and `public/`
- the Harnessing Talent name and branding

Don't reuse any of it without Harnessing Talent's permission.
