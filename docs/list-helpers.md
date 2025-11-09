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

- `recordInfo` helpers (`src/lib/datocms/recordInfo.ts`): Maps DatoCMS items (`home_page`, `page`, `article`) to the corresponding on-site routes/locale-aware slugs so preview and SEO endpoints can craft working URLs.

## Internationalization

- `i18n` toolkit (`src/lib/locales.ts`): Source of truth for `supportedLocales`, `defaultLocale`, and the `isSupportedLocale()` type guard that powers routing params and locale fallbacks across pages.

## Design & Icons

- `design` config (`src/config/design.ts`): Defines the default `ICON_SET` and the `iconName()` helper to normalize Iconify identifiers consumed by the `Ico` component.

## API Route Helpers

- API utilities (`src/pages/api/utils.ts`): Shared functions for Astro API routes, including CORS headers (`withCORS`), JSON serialization, success/error response builders, and `isRelativeUrl` guard used to prevent open redirects.

## Tooling Scripts

- `sync-datocms` (`scripts/sync-datocms.mjs`): Node script that loads `.env` values, regenerates `schema.ts` via `npx datocms schema:generate`, and refreshes `docs/DATOCMS.md` from the official DatoCMS LLM docs dump.
- `check-docs-inventory` (`scripts/check-docs-inventory.mjs`): CI-enforced guard (`npm run docs:inventory` / `npm run test:docs`) that validates every `docs/list-*` reference points to a real file and that new helpers/components are reflected in the inventories.
