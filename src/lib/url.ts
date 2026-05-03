/**
 * Build an internal URL that is always prefixed with the correct base path.
 *
 * import.meta.env.BASE_URL may or may not have a trailing slash depending on
 * the Astro version and runtime, so this helper normalises both cases.
 *
 * Usage:
 *   url('company/fieldnotes/')  → '/graveyard/company/fieldnotes/'
 *   url('/about/')              → '/graveyard/about/'
 *   url('rss.xml')              → '/graveyard/rss.xml'
 *
 * The base path itself (one place only) lives in astro.config.mjs.
 * Never hardcode '/graveyard/' in component code.
 */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL; // e.g. '/graveyard/' or '/graveyard'
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  const cleanPath = path.replace(/^\//, ''); // strip any leading slash from path
  return `${normalizedBase}${cleanPath}`;
}
