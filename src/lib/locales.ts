/**
 * Centralizes the list of supported locales exposed by the project so pages
 * and utilities can share the same source of truth.
 */

export const supportedLocales = ['it', 'en'] as const;
export type SiteLocale = (typeof supportedLocales)[number];
export const defaultLocale: SiteLocale = supportedLocales[0];

export function isSupportedLocale(locale: unknown): locale is SiteLocale {
  return typeof locale === 'string' && supportedLocales.includes(locale as SiteLocale);
}
