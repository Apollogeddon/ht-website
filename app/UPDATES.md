# Content Updates Guide

This guide explains how to add new content to the Harnessing Talent website.

## ✍️ Adding a New Blog Post

The blog uses **Astro Content Collections**. Posts are stored as Markdown files.

1. **Navigate to:** `src/content/blog/`
2. **Create a new file:** e.g., `my-new-post.md`
3. **Add Frontmatter:** Every post must start with the following block:

    ```markdown
    ---
    title: "Your Post Title Here"
    description: "A short summary of the post for the listing page."
    pubDate: "2026-02-01"
    ---
    
    Start writing your content here...
    
    You can use **bold**, *italics*, lists, and links.
    ```

4. **Save the file.** The blog page will automatically update (re-run `npm run dev` if needed, but Astro usually hot-reloads).

## 💬 Adding a New Testimonial

Testimonials are now stored as individual files in the content collection.

1. **Navigate to:** `src/content/testimonials/`
2. **Create a new file:** e.g., `new-client.md`
3. **Add Frontmatter & Content:**

    ```markdown
    ---
    author: "Client Name"
    role: "Job Title, Company"
    ---
    Paste the testimonial text here. No quotes needed.
    ```

4. **Save the file.** The Testimonials page will automatically update.

## 📝 Updating Website Text

Most of the static text on the website (titles, descriptions, service lists, and contact information) is centralized in a single configuration file.

1. **Open:** `src/consts.ts`
2. **Find the relevant section:** The file is organized into exported constants such as:
    - `SITE_TITLE` & `SITE_DESCRIPTION`: Global site identity.
    - `CONTACT_INFO`: Email, phone, and location.
    - `SOLUTIONS`: The list of services shown on the Solutions page.
    - `HERO_CONTENT`: The main heading and buttons on the homepage.
    - `POLICIES_CONTENT`: Content for the Privacy Policy page.
3. **Edit the text:** Update the strings inside the quotes. For lists (like `SOLUTIONS`), ensure you maintain the array and object structure.
4. **Save the file.** The changes will reflect across the site immediately.

## 🖼️ Updating Images

### Recommended: Using Optimized Assets

For the best performance, place images in `src/assets/` and use Astro's `<Image />` component.

1. **Place your image:** `src/assets/new-image.jpg`
2. **Use it in a component:**

   ```astro
   ---
   import { Image } from "astro:assets";
   import myImage from "../assets/new-image.jpg";
   ---
   <Image src={myImage} alt="Description" class="..." />
   ```

### Alternative: Using the Public Folder

If you need to reference images via a static URL (e.g., in Markdown or CSS backgrounds):

1. Place your image file in the `public/` directory.
2. Reference it with a leading slash: `/my-image.jpg`.
