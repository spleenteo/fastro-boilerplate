import type { SchemaTypes } from '@datocms/cma-client';
import { defaultLocale, isSupportedLocale } from '~/lib/locales';

function normalizeSlug(value: unknown) {
  if (typeof value !== 'string') {
    return null;
  }

  const trimmed = value.trim().replace(/^\/+|\/+$/g, '');

  return trimmed.length > 0 ? trimmed : null;
}

function localePath(locale: string) {
  return `/${isSupportedLocale(locale) ? locale : defaultLocale}/`;
}

/*
 * Both the "Web Previews" and "SEO/Readability Analysis" plugins from DatoCMS
 * need to know the URL of the site that corresponds to each DatoCMS record to
 * work properly. These two functions are responsible for returning this
 * information, and are utilized by the API routes associated with the two
 * plugins:
 *
 * - server/api/seo-analysis/index.ts
 * - server/api/preview-links/index.ts
 */

export async function recordToWebsiteRoute(
  item: SchemaTypes.Item,
  itemTypeApiKey: string,
  locale: string,
): Promise<string | null> {
  const localizedRoot = localePath(locale);

  switch (itemTypeApiKey) {
    case 'home_page': {
      return localizedRoot;
    }
    case 'page': {
      const slug = normalizeSlug(item.attributes.slug as string | null);

      if (!slug) {
        return localizedRoot;
      }

      return `${localizedRoot}${slug}/`;
    }
    case 'article': {
      const slug = await recordToSlug(item, itemTypeApiKey, locale);

      return slug ? `/blog/${slug}` : null;
    }
    default:
      return null;
  }
}

export async function recordToSlug(
  item: SchemaTypes.Item,
  itemTypeApiKey: string,
  locale: string,
): Promise<string | null> {
  switch (itemTypeApiKey) {
    case 'article': {
      return normalizeSlug(item.attributes.slug as string | null);
    }
    default:
      return null;
  }
}
