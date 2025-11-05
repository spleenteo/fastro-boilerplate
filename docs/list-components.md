---
agent_edit: true 
scope: A list to describe all components used in the project
---

## Draft & Layout Utilities

- `DraftModeToggler` (`src/components/DraftModeToggler/Component.astro`): Custom element that surfaces enable/disable actions for Draft Mode by calling the `/api/draft-mode/*` routes and reloading the page once the cookie state changes.
- `DraftModeQueryListener` (`src/components/DraftModeQueryListener/Component.astro`): Wraps `@datocms/astro`’s `QueryListener`, automatically subscribing to GraphQL query updates when Draft Mode is active so editors see live previews.

## Media Wrappers

- `ResponsiveImage` (`src/components/ResponsiveImage/Component.astro` + `fragments.ts`): One-stop wrapper around `@datocms/astro`’s `<Image />`, exposing a shared fragment to fetch responsive image data (`src`, `srcSet`, `alt`, etc.) for reuse across pages and blocks.
- `VideoPlayer` (`src/components/VideoPlayer/Component.astro` + `fragments.ts`): Hydrated client component built on `react-datocms`’s `<VideoPlayer />`, paired with a fragment that requests the Mux playback payload once and can be spread wherever video assets appear.

## Structured Text Enhancers

- `HeadingWithAnchorLink` (`src/components/HeadingWithAnchorLink/Component.astro`): Overrides Structured Text heading nodes to inject deterministic anchor links by slugifying the rendered text.
- `PageLink` (`src/components/linkToRecord/PageLink/Component.astro` + `fragments.ts`): Renderer for link nodes targeting `PageRecord` entries, ensuring the structured text link metadata maps to the correct URL.
- `PageInline` (`src/components/inlineRecord/PageInline/Component.astro` + `fragments.ts`): Inline renderer that turns referenced page records into pill-styled anchors within structured text content.

## Blocks (DatoCMS Modular Content)

- `HeroBlock` (`src/components/blocks/HeroBlock/Component.astro` + `fragments.ts`): Renders the home hero section by mapping renamed DatoCMS fields (display options, hero title/subtitle, hero image) and surfaces nested button-rich text through the rebuilt structured text fragment.
- `ButtonBlock` (`src/components/blocks/ButtonBlock/Component.astro` + `fragments.ts`): Handles button-rich text blocks by outputting accessible anchors and exposing a fragment for the renamed `label`, `url`, and `primary` fields.
- `ImageBlock` (`src/components/blocks/ImageBlock/Component.astro` + `fragments.ts`): Presents a single asset as a `<figure>` with responsive imagery and caption, sharing the `ResponsiveImage` fragment to stay in sync with the CMS model.
- `ImageGalleryBlock` (`src/components/blocks/ImageGalleryBlock/Component.astro` + `fragments.ts`): Maps an array of assets into a gallery grid, reusing `ResponsiveImage` for each entry while preserving asset titles.
- `VideoBlock` (`src/components/blocks/VideoBlock/Component.astro` + `fragments.ts`): Couples the shared `VideoPlayer` with block metadata to render Mux-hosted videos and a descriptive caption.

## Icons

- `Ico` (`src/components/Ico/Ico.astro`): Thin wrapper around `astro-icon` that enforces the configured icon set (`ICON_SET` in `src/config/design.ts`), adds default sizing, and handles optional accessibility labels.
