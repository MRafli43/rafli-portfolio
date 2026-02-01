import { defineCollection, z } from "astro:content";

// Define schema for about collection
const aboutCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
  }),
});

// Define schema for experience collection
const experienceCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
  }),
});

// Define schema for projects collection
const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    github: z.string().optional(),
  }),
});

// Export all collections
export const collections = {
  about: aboutCollection,
  experience: experienceCollection,
  projects: projectsCollection,
};