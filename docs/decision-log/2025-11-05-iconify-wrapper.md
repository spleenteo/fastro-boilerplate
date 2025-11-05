---
agent_edit: true
---

# Iconify Wrapper With `Ico`

**We standardised icon rendering through a shared Iconify setup and the `Ico` wrapper component so that all icons share defaults, accessibility rules, and naming conventions.**

- Date: 2025-11-05
- Alternatives Considered: Importing `astro-icon` directly wherever needed; switching to a bespoke inline SVG sprite.

## Decision

To keep Iconify usage consistent, we load `astro-icon` once at the integration level and expose a single `Ico` component. The wrapper adds the project-wide default Iconify set (`iconoir`), applies standard sizing classes, and enforces accessibility conventions (automatic `aria-hidden` unless a label is provided). This avoids repeated boilerplate in templates and removes the need to remember prefixes when using icons from the default set. When another collection is required, authors can still pass fully qualified names like `mdi:github`, so the wrapper does not limit flexibility.
