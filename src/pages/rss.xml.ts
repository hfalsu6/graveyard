import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';

export async function GET(context: APIContext) {
  const companies = await getCollection('companies');

  const sorted = companies.sort(
    (a, b) => b.data.published_at.localeCompare(a.data.published_at),
  );

  return rss({
    title: 'Graveyard of Imaginary Companies',
    description: 'A weekly archive of startups that never were.',
    site: context.site!.toString(),
    items: sorted.map((company) => ({
      title: `${company.data.name} (${company.data.founding_year}–${company.data.death_year})`,
      description: `${company.data.tagline} — ${company.data.cause_of_death}`,
      link: `${import.meta.env.BASE_URL.replace(/\/$/, '')}/company/${company.data.slug}/`,
      pubDate: new Date(company.data.published_at),
    })),
  });
}
