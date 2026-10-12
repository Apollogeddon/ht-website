# GitHub workflows

This repository uses GitHub Actions to check the site, version it, deploy it to GitHub Pages and confirm the live site responds. This page is for contributors who need to know what runs on a pull request and how a release goes out.

## Index workflow

The [`index.yml`](./workflows/index.yml) workflow runs on every pull request to `main` and every push to `main`. Its token is read-only unless a job grants itself more. It runs these jobs:

1. **Website**: [forgejs](https://github.com/apollogeddon/forgejs)'s reusable `website.yml` (see [Website](#website)).
2. **Lighthouse**: builds the site and runs [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci) over its pages (see [Lighthouse](#lighthouse)).
3. **Auto-merge**: on a pull request, merges a Dependabot pull request through forgejs's `merge.yml`, once Website and Lighthouse have both passed. Website's own auto-merge is turned off (`auto_merge: false`), so Lighthouse gates the merge too. GitHub Actions updates aren't merged automatically: a workflow token may not change workflow files, so a person merges those.
4. **Validate**: after a push to `main` that published a release, checks the live site at <https://ht.apollogeddon.com> responds.

A new push to a pull request cancels its previous run. Runs on `main` are never cancelled, so a release is never created without its deploy.

## Website

forgejs's `website.yml` runs, on every pull request and push:

- **Secrets and dependencies**: Gitleaks over the repository, and OSV-Scanner over `package-lock.json`.
- **Lint and types**: Biome and `npm run type` (`astro check`).
- **Tests**: `npm test`, the Playwright suite in `e2e/` (see the README's [Testing](../README.md#testing)).
- **Build**: `npm run build` with the `PUBLIC_WEB3FORMS_ACCESS_KEY` repository variable, then the built site's internal links are checked with lychee, and every page against WCAG 2.2 A and AA with axe.
- **Review**: asks for a review of Dependabot's pull requests, which CODEOWNERS doesn't request on a bot's.

On `main` it also:

- runs [release-please](https://github.com/googleapis/release-please), which keeps a release pull request open with the next version and the `CHANGELOG.md` entries;
- when that pull request merges and a release is created, deploys the build to GitHub Pages;
- upgrades dependencies OSV-Scanner finds vulnerable and commits the new lock file.

## Lighthouse

The website workflow runs only the standard npm scripts, so Lighthouse has a job of its own. It builds the site with the same Web3Forms variable and runs `npm run lhci` over the pages listed in [`lighthouserc.cjs`](../lighthouserc.cjs). Accessibility and SEO must score at least 0.95, and best practices at least 0.9. Performance only warns, as it varies with the machine. The reports are uploaded as the `lighthouse` artifact.

## Dependabot

[`dependabot.yml`](./dependabot.yml) proposes npm updates daily and GitHub Actions updates weekly. Each waits 3 days after a version is published, except our own `@apollogeddon` packages. npm updates are grouped into one pull request for our own packages and one for the rest, majors included. forgejs's reusable workflows are tracked at `@main`, so Dependabot leaves them alone.
