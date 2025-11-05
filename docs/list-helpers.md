---
agent_edit: true 
scope: A list to describe all helpers, scripts, middlewares used in the project
---

## Data Fetching & GraphQL

- `executeQuery` (`src/lib/datocms/executeQuery.ts`): Thin wrapper around `@datocms/cda-client` that selects the proper CDA token based on the `includeDrafts` flag, enforces `excludeInvalid`, and forwards variables for every GraphQL request.
- `TagFragment` (`src/lib/datocms/commonFragments.ts`): Shared fragment returning `_seoMetaTags` payloads so layouts can merge favicon/meta tags with page-level SEO data.

## Draft Mode Utilities

- `draftMode` helpers (`src/lib/draftMode.ts`): Provides `enableDraftMode`, `disableDraftMode`, `isDraftModeEnabled`, and `draftModeHeaders()` to manage the signed cookie, guard API access, and re-create the Draft Mode header set when server-side fetching draft content.

## Routing & Preview Glue

- `recordInfo` helpers (`src/lib/datocms/recordInfo.ts`): Maps DatoCMS items to on-site routes and friendly slugs; used by preview/SEO endpoints to build URLs for `Page` and `Article` models.

## Internationalization

- `i18n` toolkit (`src/lib/index.ts`): Initializes Rosetta with the configured locales, exposes `t`, `setLocale`, `getLocale`, `getLocaleName`, and constants like `defaultLocale`/`cookieName` for locale-aware UI.

## Design & Icons

- `design` config (`src/config/design.ts`): Defines the default `ICON_SET` and the `iconName()` helper to normalize Iconify identifiers consumed by the `Ico` component.

## API Route Helpers

- API utilities (`src/pages/api/utils.ts`): Shared functions for Astro API routes, including CORS headers (`withCORS`), JSON serialization, success/error response builders, and `isRelativeUrl` guard used to prevent open redirects.

## Tooling Scripts

- `sync-datocms` (`scripts/sync-datocms.mjs`): Node script that loads `.env` values, regenerates `schema.ts` via `npx datocms schema:generate`, and refreshes `docs/DATOCMS.md` from the official DatoCMS LLM docs dump.
