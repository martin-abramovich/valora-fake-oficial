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
    })),
  }),
});

export const collections = { solutions };
