import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const companies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/companies' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    tagline: z.string(),
    industry: z.string(),
    target_market: z.string(),
    founder: z.string(),
    founding_year: z.number().int(),
    death_year: z.number().int(),
    cause_of_death: z.string(),
    logo: z.string().optional(),
    logo_initials: z.string().optional(),
    logo_color: z.string().optional(),
    epitaph: z.string().optional(),
    hero_headline: z.string(),
    hero_subheadline: z.string(),
    features: z
      .array(z.object({ title: z.string(), description: z.string() }))
      .length(3),
    published_at: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { companies };
