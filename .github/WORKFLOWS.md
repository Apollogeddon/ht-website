# GitHub workflows

This repository uses GitHub Actions to check the site, version it, deploy it to GitHub Pages and confirm the live site responds. This page is for contributors who need to know what runs on a pull request and how a release goes out.

## Index workflow

The [`.index.yml`](./workflows/.index.yml) workflow (`index`) runs on every pull request to `main`, every push to `main`, the `auto-merged` dispatch the merge pipeline sends, a manual run and a weekly schedule. Its token is read-only unless a job grants itself more. Each job calls one of [forgejs](https://github.com/apollogeddon/forgejs)'s pipelines, or is a stage of one, so the run page reads `<pipeline> / <stage>`:

1. **version** (`version / release`): on `main`, [release-please](https://github.com/googleapis/release-please) keeps a release pull request open with the next version and the `CHANGELOG.md` entries, and tags a release when it merges.
2. **website** (`website / lint`, `scan`, `test`, `build`): on a pull request, and again on `main` when a release was published (see [Website](#website)).
3. **website / check (lighthouse)**: runs [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci) over the website pipeline's build (see [Lighthouse](#lighthouse)).
4. **pages** (`pages / deploy`): when a release was published and the website checks and Lighthouse passed, deploys the build to GitHub Pages.
5. **pages / check**: after that deploy, checks the live site at <https://ht.apollogeddon.com> responds.
6. **patch** (`patch / update`): weekly, on a manual run and on the `auto-merged` dispatch, upgrades dependencies OSV-Scanner finds vulnerable and commits the new lock file to `main`.
7. **merge** (`merge / review`, `merge / squash`): on Dependabot's pull requests, asks for a review, which CODEOWNERS doesn't request on a bot's, and squash-merges once the website checks and Lighthouse have passed. GitHub Actions updates aren't merged automatically: a workflow token may not change workflow files, so a person merges those. The merge sends `auto-merged`, which runs the workflow on `main`, as a merge made with the workflow token starts no push run.

A new push to a pull request cancels its previous run. Runs on `main` are never cancelled, so a release is never created without its deploy. The forgejs pipelines are called at `@main`.

## Website

forgejs's `website.yml` runs:

- **lint**: Biome and `npm run type` (`astro check`).
- **scan**: Gitleaks over the repository, and OSV-Scanner over `package-lock.json`. A high or critical finding fails a pull request; `osv-scanner.toml` lists the findings accepted until a set date, each with its reason.
- **test**: `npm test`, the Playwright suite in `e2e/`, which also checks every page with axe and the internal links (see the README's [Testing](../README.md#testing)).
- **build**: `npm run build` with the `PUBLIC_WEB3FORMS_ACCESS_KEY` repository variable, uploaded as the `dist` artifact that Lighthouse checks and Pages deploys.

The pipeline's own `check` stage (lychee and axe over the build) is turned off, as the Playwright suite covers both, so it shows as skipped.

## Lighthouse

forgejs's website pipeline has no Lighthouse stage, so it's a job of this workflow's own, named `website / check (lighthouse)` to read as one. It downloads the website pipeline's build and runs `npm run lhci` over the pages listed in [`lighthouserc.cjs`](../lighthouserc.cjs). Accessibility and SEO must score at least 0.95, and best practices at least 0.9. Performance only warns, as it varies with the machine. The reports are uploaded as the `lighthouse` artifact.

## Dependabot

[`dependabot.yml`](./dependabot.yml) proposes npm updates daily and GitHub Actions updates weekly. Each waits 3 days after a version is published, except our own `@apollogeddon` packages. npm updates are grouped into one pull request for our own packages and one for the rest's minor and patch updates; each major update to the rest comes in a pull request of its own. forgejs's pipelines are tracked at a branch (`@main`), so Dependabot leaves them alone.
