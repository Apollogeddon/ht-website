<div align="center">
  <a href="https://ht.apollogeddon.com">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="./src/assets/logo-dark.svg">
      <img src="./src/assets/logo.svg" alt="Harnessing Talent">
    </picture>
  </a>
  <br><br>
</div>

Website for **[Harnessing Talent](https://ht.apollogeddon.com)**, a management consultancy based in Adelaide, South Australia. The site showcases the consulting services, team profiles, and client testimonials, with an integrated blog. Built with [Astro](https://astro.build/) for performance and [Tailwind CSS](https://tailwindcss.com/) for styling, it is designed to be fast, accessible, and straightforward for non-developers to maintain.

## 🚀 Key Features

* **Performance-first:** Astro ships zero JavaScript by default, delivering fast load times out of the box.
* **SEO-ready:** Open Graph, Twitter cards, and canonical URLs configured on every page.
* **Blog & testimonials:** Content managed via Astro Content Collections — type-safe, Markdown-based.
* **Accessible:** Automated accessibility testing on every build with axe-core.

## 📂 Project Structure

```text
/
├── public/             # Static assets (images, favicon, etc.)
├── src/
│   ├── assets/         # Optimised assets (logo, images)
│   ├── components/     # Reusable UI components (Header, Footer, ThemeToggle)
│   ├── content/        # Content Collections (Blog posts and Testimonials)
│   ├── layouts/        # Page wrappers (MainLayout)
│   ├── pages/          # Route definitions (index, profiles, solutions, etc.)
│   ├── styles/         # Global CSS with Tailwind v4 imports
│   ├── consts.ts       # Global site constants and content
│   └── styles.ts       # Color palettes and icon paths
├── astro.config.mjs    # Astro configuration
└── package.json        # Project dependencies and scripts
```

## 🛠️ Quick Start

See [INSTALL.md](./INSTALL.md) for detailed setup instructions.

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## 📝 Managing Content

See [UPDATES.md](./UPDATES.md) for guides on adding **Blog Posts** and **Testimonials**.
