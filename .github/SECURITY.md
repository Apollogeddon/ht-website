# Security policy

## Supported versions

Only the live site, built from `main`, receives security fixes. There are no other versions.

## Reporting a vulnerability

Report security vulnerabilities privately through [GitHub's private vulnerability reporting](https://github.com/Apollogeddon/ht-website/security/advisories/new). Don't open a public issue.

You can expect an initial response within a few days. If the issue is confirmed, the fix is deployed to the live site and credited in the advisory unless you ask otherwise.

## Automated security tooling

This repository's CI runs on every pull request and on every push to `main`, before the site deploys:

- **Gitleaks** scans for committed secrets.
- **OSV-Scanner** scans dependencies for known vulnerabilities.

**Dependabot** proposes updates to npm dependencies and GitHub Actions daily.
