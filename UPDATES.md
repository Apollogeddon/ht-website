# Content Updates Guide

This guide explains how to add and update content on the Harnessing Talent website.

## How Publishing Works

Every change you make follows the same three steps:

1. **Edit** — make your changes in VS Code and save the file (`Ctrl+S`).
2. **Commit** — save a snapshot of your changes with a short description.
3. **Push** — send the changes to GitHub, which automatically updates the live site.

The live site usually updates within 2–3 minutes of pushing. See [Publishing Your Changes](#-publishing-your-changes) at the bottom of this guide for the exact steps.

---

## ✍️ Adding a New Blog Post

Blog posts are stored as simple text files in the `src/content/blog/` folder.

1. In VS Code, open the `src/content/blog/` folder in the file explorer.
2. Right-click the folder and select **New File**.
3. Name the file using lowercase letters and hyphens (e.g., `my-new-post.md`).
4. Paste in the following template and fill in your details:

    ```markdown
    ---
    title: "Your Post Title Here"
    description: "A short summary shown on the blog listing page."
    pubDate: "2026-02-01"
    ---

    Start writing your post content here.

    You can use **bold**, *italics*, and [links](https://example.com).
    ```

5. Write your post content below the second `---` line.
6. Save the file (`Ctrl+S`).

> **Important:** Keep the `---` lines exactly as shown. Everything between them is required. The `pubDate` must be in `YYYY-MM-DD` format.

---

## 💬 Adding a New Testimonial

Testimonials are stored as individual files in `src/content/testimonials/`.

1. In VS Code, open the `src/content/testimonials/` folder.
2. Right-click the folder and select **New File**.
3. Name the file using the client's name in lowercase with hyphens (e.g., `jane-smith.md`).
4. Paste in the following template:

    ```markdown
    ---
    author: "Client Name"
    role: "Job Title, Company Name"
    ---
    Write the testimonial text here. No need to add quotation marks.
    ```

5. Save the file (`Ctrl+S`).

---

## 📝 Updating Website Text

Most of the text on the website lives in one file: `src/consts.ts`. Open it in VS Code to make changes.

### What you can safely edit

Look for the section you want and update the text inside the quotes:

| Constant | What it controls |
| --- | --- |
| `SITE_TITLE` / `SITE_DESCRIPTION` | Site name and meta description |
| `SOLUTIONS` | The services listed on the Solutions page |
| `HOME_ABOUT_US` | The "About Us" section on the homepage |
| `WHY_CHOOSE_US` | The "Why Choose Us" section on the homepage |
| `POLICIES_CONTENT` | Privacy policy text |
| `CONTACT_PAGE` | Text on the Contact page |

### Rules for editing this file

This file uses TypeScript, which is strict about formatting. Follow these rules to avoid breaking the site:

- **Only change text inside quotes.** Don't add or remove quotes, commas, or brackets.
- **Don't change the names** of the constants (e.g., `SITE_TITLE`, `SOLUTIONS`).
- **For lists** (like the bullet points under each solution), each item looks like `"Text here",` — keep the comma at the end of every item except the last one in the list.
- **Save the file** and check the local preview (`npm run dev`) before publishing.

### Example — updating the About Us text

Find this section and change the text inside the quotes:

```typescript
export const HOME_ABOUT_US = {
  eyebrow: "About Us",
  title: "About Harnessing Talent",
  paragraphs: [
    "Change this paragraph text here.",
  ],
};
```

---

## ✉️ Updating the Contact Form Email

If you need to change the email address that receives contact form submissions:

1. Go to [Web3Forms](https://web3forms.com/) and enter the **new** email address.
2. They will email a new Access Key to that address.
3. For the live site: contact the site administrator to update the key in GitHub's repository secrets.
4. For local development: update the key in your `.env` file.

---

## 🖼️ Adding Images

For the best performance, place images in `src/assets/` and use them via Astro's `<Image />` component.

1. Copy your image file into the `src/assets/` folder.
2. In the relevant `.astro` file, import and use it:

   ```astro
   ---
   import { Image } from "astro:assets";
   import myImage from "../assets/my-image.jpg";
   ---
   <Image src={myImage} alt="Description of the image" />
   ```

---

## 🔍 Checking Your Changes (Linting)

Before publishing, run a quick check to catch any formatting issues:

1. In VS Code, open the terminal: **Terminal → New Terminal** (or press `` Ctrl+` ``).
2. Run:

    ```powershell
    npm run lint
    ```

3. If it reports any issues, it will usually fix them automatically. Save any files it changes, then run it again until it passes cleanly.

> **Note:** This check also runs automatically when you commit. If it fails at that point, fix the issues and try committing again.

---

## 🚀 Publishing Your Changes

Once you're happy with your changes, follow these steps to publish them to the live site.

### Step 1 — Stage your files

1. In VS Code, click the **Source Control** icon in the left sidebar (it looks like a branch icon, or press `Ctrl+Shift+G`).
2. You will see a list of files you've changed under **Changes**.
3. Hover over each file you want to include and click the **+** icon to stage it. Staged files move to the **Staged Changes** section.

### Step 2 — Write a commit message

Type a short description of your change in the **Message** box at the top. Commit messages must follow this format:

```
type: short description in lowercase
```

**Common types for content changes:**

| Type | When to use | Example |
| --- | --- | --- |
| `feat` | Adding something new | `feat: add june blog post` |
| `fix` | Correcting existing content | `fix: correct typo in about section` |
| `chore` | General updates (not new content) | `chore: update contact page text` |

> **Important:** The format is enforced automatically — if your message doesn't match, the commit will be rejected with an error. Check the format and try again.

### Step 3 — Commit and push

1. Click the **Commit** button (tick icon).
2. If the lint check runs and finds issues, fix them, save, re-stage the files, and commit again.
3. Click **Sync Changes** (or **Push**) to send your changes to GitHub.
4. Wait 2–3 minutes, then check the live site at [ht.apollogeddon.com](https://ht.apollogeddon.com).

> **If something looks wrong on the live site**, don't panic — changes can be reversed. Contact the site administrator.
