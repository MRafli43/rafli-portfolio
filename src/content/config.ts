import { defineCollection, z } from "astro:content";

export const collections = {
  projects: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string().optional(),
      github: z.string().url().optional(),
    }),
  }),

  experience: defineCollection({
    schema: z.object({
      title: z.string(),
    }),
  }),

  about: defineCollection({
    schema: z.object({
      title: z.string(),
    }),
  }),
};
