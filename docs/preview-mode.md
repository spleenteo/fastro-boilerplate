---
agent_edit: true
scope: How to manage draft preview for editors
---

# Draft Mode & Preview Secrets

## PASSWORD_FOR_DRAFT

Fastro signs every `/api/preview`, `/api/draft-mode/*`, `/api/preview-links`, and `/api/seo-analysis`
request with a shared password. Set `PASSWORD_FOR_DRAFT` in your `.env` files and in every Vercel
environment. DatoCMS’ “Web Previews” and “SEO/Readability Analysis” plugins must use the exact same
value; otherwise the endpoints respond with `401 Invalid token`, as they compare the supplied
password with `timingSafeEqual`.

### Generating the password

- Run `openssl rand -hex 32` (or any strong random generator).
- Store the value as `PASSWORD_FOR_DRAFT=<value>` without wrapping quotes or trailing whitespace.
- Update DatoCMS plugin settings so preview URLs include `token=<value>`.

### Migration note — 2025-11-09

The previous variable name, `SECRET_API_TOKEN`, caused editors to paste the JWT secret by mistake.
All code now expects `PASSWORD_FOR_DRAFT`. If an old `SECRET_API_TOKEN` entry is still present, copy
its value into `PASSWORD_FOR_DRAFT` and remove the deprecated variable to avoid confusion.
