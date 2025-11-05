---
agent_edit: true
---

# Replace gql.tada With DatoCMS CLI Schema

**We removed gql.tada in favour of the schema generated via the DatoCMS CLI so that `schema.ts` is now the only source of truth for content typing.**

- Date: 2025-11-05
- Alternatives Considered: Keep using gql.tada for GraphQL typing; adopt a different GraphQL code generator.

## Decision

DatoCMS' `schema:generate` command already runs as part of the toolchain and produces an explicit `schema.ts`. Relying exclusively on that output simplifies the build, avoids maintaining the gql.tada plugin/introspection files, and keeps the typing story aligned with DatoCMS' official workflow. All query helpers, fragments, and components were updated to consume string-based GraphQL documents whose types are defined against the structures described in `schema.ts`.
