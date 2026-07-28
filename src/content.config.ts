import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const solutions = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/solutions' }),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    description: z.string(),
    images: z.array(z.object({
      src: z.string(),
      alt: z.string(),
      tag: z.string().optional(),
    })),
    category_descriptions: z.array(z.object({
      tag: z.string(),
      description: z.string(),
    })).optional(),
    documents: z.array(z.object({
      label: z.string(),
      file: z.string(),
    })).optional(),
  }),
});

const team = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/team' }),
  schema: z.object({
    order: z.number(),
    name: z.string(),
    role: z.string(),
    photo: z.string().optional(),
    bio: z.string().optional(),
  }),
});

const reps = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/reps' }),
  schema: z.object({
    name: z.string(),
    company: z.string(),
    email: z.string(),
    phone: z.string(),
    photo: z.string().optional(),
    regions: z.array(z.string()),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    image: z.string(),
    image_alt: z.string().optional(),
    date: z.coerce.date(),
  }),
});

export const collections = { solutions, team, reps, blog };
