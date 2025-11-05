<!--datocms-autoinclude-header start-->

<a href="https://www.datocms.com/"><img src="https://www.datocms.com/images/full_logo.svg" height="60"></a>

👉 [Visit the DatoCMS homepage](https://www.datocms.com) or see [What is DatoCMS?](#what-is-datocms)

---

# Estro

**Base setup on top of headless services to help you quickly start a new website**

This project is highly inspired and copied by Head-Start, a boilerplate make by the NL agency VoorHoede
Their versione is defenitely more extended and powerful, plenty of well reasoned good practices.
For my goal, that's too much, so Fastro is trying to get just some inspiration.

* [Inteview](https://www.datocms.com/casual-chats/focusing-on-flexibility-extensibility-with-plugins-and-head-start)
* [Head Start Repo](https://github.com/voorhoede/head-start)

Also, this project originally derives from the official DatoCMS-Astro template https://www.datocms.com/marketplace/starters/astro-starter-kit

## Philosophy

- Provide a generic template to help develop new websites (not web apps) faster.
- Provide a pre-defined setup for composable pages with common components.
- Provide pre-configured services like a CMS and deployment platform.
- Support common needs like internationalisation (i18n), SEO, redirects and analytics.
- Provide functional interactivity without a JS framework (React, Vue, Svelte, etc)*.


## Architecture

The site is created as lightweight progressively enhanced website connected to a headless CMS:

- [Astro](https://astro.build/) - web framework to structure this project. Astro is selected because it embraces web standards, is designed for performance, and supports all our favourite UI frameworks (React, Vue and Svelte).
- [DatoCMS](https://www.datocms.com/) - a headless CMS is connected to manage web content. DatoCMS is selected for its modular and structured content options, advanced image service, multi-language support and GraphQL API.

## Getting started

First create a project on DatoCMS and get the API Tokens to by copied in `.env` from `.env.sample`

Then run

```bash
npm install
npm run dev
```



## Commands

All commands are run from the root of the project, from a terminal:

| Command (`npm run ...`) | Action
|:------------------------| :-----------------------------------------------
| `dev`                   | Starts local dev server at `localhost:4321` (head in T9)
| `build`                 | Build your production site to `./dist/`
| `preview`               | Preview your build locally, before deploying
| `astro ...`             | Run commands like `astro add` (see `astro -- --help`)
| `lint`                  | Check code style and valide HTML output
| `test`                  | Runs the test suite, individual tests are available using `test:...`


## License

Released under [ISC License](./LICENSE.md).
