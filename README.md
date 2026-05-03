# Graveyard of Imaginary Companies

A static site hosting a growing collection of fictional, AI-generated startups. Each company has a "tombstone" page with a logo, landing-page-style hero, and a darkly humorous cause of death. New entries are added weekly by an automated n8n workflow.

## Stack

- **Astro** (static site generator)
- **TypeScript** (strict mode)
- **Tailwind CSS** (dark theme)
- **GitHub Pages** (deploy via Actions)

## Local Development

```bash
npm install
npm run dev       # dev server at localhost:4321
npm run build     # produces /dist
npm run preview   # serves the build locally
```

## Where n8n Writes

n8n commits two files per company:

| File | Path |
|---|---|
| Markdown | `content/companies/<slug>.md` |
| Logo | `public/logos/<slug>.png` |

Slugs are lowercase, hyphenated, ASCII-only.

## Frontmatter Schema

Defined in [`src/content/config.ts`](src/content/config.ts). All fields are required unless noted:

| Field | Type | Notes |
|---|---|---|
| `name` | string | |
| `slug` | string | Must match filename |
| `tagline` | string | |
| `industry` | string | |
| `target_market` | string | |
| `founder` | string | |
| `founding_year` | integer | |
| `death_year` | integer | |
| `cause_of_death` | string | |
| `logo` | string | Path like `/logos/slug.png` |
| `hero_headline` | string | |
| `hero_subheadline` | string | |
| `features` | array of 3 objects | Each has `title` and `description` |
| `published_at` | string | ISO date `YYYY-MM-DD` |
| `tags` | array of strings | Optional |

## Adding a Company Manually

1. Create `content/companies/<slug>.md` with the frontmatter above
2. Place a logo at `public/logos/<slug>.png`
3. Push to `main` — the Action builds and deploys

## Deploy Flow

Push to `main` → GitHub Action runs → Astro builds → deployed to GitHub Pages.

If the build fails (e.g. malformed frontmatter), the previous deploy stays live.
