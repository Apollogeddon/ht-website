// @ts-check

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://apollogeddon.github.io",
	base: "/ht-website",
	vite: {
		plugins: [tailwindcss()],
	},

	integrations: [react()],
});
