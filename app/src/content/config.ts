import { defineCollection, z } from "astro:content";

const blog = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const testimonials = defineCollection({
	type: "content",
	schema: z.object({
		author: z.string(),
		role: z.string(),
	}),
});

export const collections = { blog, testimonials };
