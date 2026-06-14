<div align="center">
  <a href="https://ht.apollogeddon.com">
    <img src="./src/assets/logo.svg" alt="Logo">
  </a>
  <br><br>
</div>

A modern, responsive website for **Harnessing Talent**, a management consultancy based in Adelaide. Recreated using [Astro](https://astro.build/), [React](https://react.dev/), and [Tailwind CSS v4](https://tailwindcss.com/).

## 🚀 Key Features

* **Modern Stack:** Built on Astro for high performance and zero-JS by default (where possible).
* **Styling:** Professional "Orange & Grey" theme using Tailwind CSS.
* **Dark Mode:** Fully supported dark/light mode with system preference detection.
* **Content Collections:** Type-safe blog management using Markdown.
* **Responsive:** Mobile-first design for all pages.

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
│   ├── classes.ts      # Tailwind CSS class constants for UI consistency
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
