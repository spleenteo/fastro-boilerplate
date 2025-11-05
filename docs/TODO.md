---
agent_edit: true 
scope: Codex adds things to be done as a list of tasks, suggestions, urgencies
---

- [x] [Features] [Impact: high] [Effort: medium]: Rebuild the `/src/pages/[locale]/index.astro` route once the new block fragments are available so localized home pages load without missing imports. (Completed on November 5, 2025)
- [ ] [Refactoring] [Impact: high] [Effort: high]: Restructure modular blocks under `src/blocks/**` with a `Blocks.astro` registry and `.fragment.graphql` files so the implementation matches the conventions in `docs/blocks-and-components.md`.
- [ ] [Features] [Impact: high] [Effort: medium]: Extract GraphQL operations into colocated `.graphql` files for each page and block (per `docs/cms-data-loading.md`) and update imports to use generated types.
- [x] [Refactoring] [Impact: medium] [Effort: medium]: Exclude `head-start/**` from the main Astro/TypeScript toolchain so local builds run without the sandbox scaffold. (Completed on November 5, 2025)
