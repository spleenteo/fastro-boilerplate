<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
  <head>
    <title>503 first byte timeout</title>
  </head>
  <body>
    <h1>Error 503 first byte timeout</h1>
    <p>first byte timeout</p>
    <h3>Error 54113</h3>
    <p>Details: cache-dub4332-DUB 1762300851 2174292692</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
  <head>
    <title>503 first byte timeout</title>
  </head>
  <body>
    <h1>Error 503 first byte timeout</h1>
    <p>first byte timeout</p>
    <h3>Error 54113</h3>
    <p>Details: cache-dub4360-DUB 1762300851 677065904</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
  <head>
    <title>503 first byte timeout</title>
  </head>
  <body>
    <h1>Error 503 first byte timeout</h1>
    <p>first byte timeout</p>
    <h3>Error 54113</h3>
    <p>Details: cache-dub4367-DUB 1762300851 3567160300</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
  <head>
    <title>503 first byte timeout</title>
  </head>
  <body>
    <h1>Error 503 first byte timeout</h1>
    <p>first byte timeout</p>
    <h3>Error 54113</h3>
    <p>Details: cache-dub4338-DUB 1762300867 390264843</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
  <head>
    <title>503 first byte timeout</title>
  </head>
  <body>
    <h1>Error 503 first byte timeout</h1>
    <p>first byte timeout</p>
    <h3>Error 54113</h3>
    <p>Details: cache-dub4347-DUB 1762300851 3891158229</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

# Images API

Every asset you upload in DatoCMS is stored on [Imgix](https://www.imgix.com/), a super-fast CDN optimized for image delivery, which provides **on-the-fly image manipulations and caching**.

What that means is that simply by adding some parameters to your images URL, you can enhance, resize, crop, compress and change format for better performance. You can also create complex compositions and extract useful metadata.

At any time you can request your image in a new size — with a new crop or whatever transformation you might need — the asset is created for you and automatically cached close to your users. One thing to keep in mind as you implement your front-end is that to achieve maximum performance, **you should take care to reuse crops and sizes across your front-end** to ensure your cached assets are re-used.

Also, all new projects in are configured with an [automatic image optimization](/docs/asset-api/asset-cdn-settings.md) preset that selects the best format for compression without compromising the visual quality of your assets.

> [!NOTE] Should I use the Images API or the CDA with responsiveImage parameters?
> All your images on DatoCMS go through Imgix, but the same transformations and parameters can be accessed through two related APIs:
>
> - The Images API (this page) lets you apply image transformations directly via URL parameters, which is good for testing and directly fetching images.
> - But most production frontends use our GraphQL-based Content Delivery API (CDA) instead. And in that API, you can directly specify Imgix parameters right inside your query, and our GraphQL will automatically generate the correct Image API URL parameters for you. For more details, please see Content Delivery API: [Images and videos](/docs/content-delivery-api/images-and-videos.md)

### Powerful transformations at your disposal

Suppose you upload this asset to one of your DatoCMS projects:

[(Image content)](https://www.datocms-assets.com/205/1570696780-example.jpg?auto=format&fit=max&w=2000)

The URL that DatoCMS will assign to this image will be similar to this:

```plaintext
https://www.datocms-assets.com/205/1570696780-example.jpg
```

In fact, every asset URL will follow this structure:

```plaintext
https://www.datocms-assets.com/<project id>/<upload timestamp>-<asset name>.<original file format>
```

If you fetch this URL, you will be served the original asset. This wastes a lot of bandwidth as content editors should upload full resolution assets. The DatoCMS image pipeline allows to scale, crop, and process images on the fly based on the URL-parameters you provide.

For example, by appending `?h=200` to the base URL, you instruct DatoCMS to scale the image to be 200 pixels tall:

```plaintext
https://www.datocms-assets.com/205/1570696780-example.jpg?h=200
```

You can specify any number of parameters. The following URL, for example,

- crops the image to be 800x500px, centering around the second face it recognizes inside the picture;
- desaturates the image;
- adds a copyright caption at the bottom;
- transforms the format to be a PNG;

```plaintext
https://www.datocms-assets.com/205/1570542926-example.jpg?fit=facearea&faceindex=2&facepad=5&sat=-100&w=800&h=500&fm=png&txt=%C2%A9%20Matheus%20Ferrero&txt-align=bottom,center&txt-color=FFF&txt-size=15&txt-pad=20
```

This is the final result:

[(Image content)](https://www.datocms-assets.com/205/1601387830-example.png?auto=format&fit=max&w=2000)

Even though the DatoCMS image backend (Imgix) is fast, you get a tremendous performance boost if your frontend limits the number of sizes and crops you ask for.

The first time the image is called with these parameters, Imgix will cache the resulting image on one of their geographically positioned CDN servers; subsequent calls with the same parameters will not need to reprocess the image. imgix will then propagate the image to all other CDN servers around the world, as shown on our [real-time map.](https://www.datocms.com/features/worldwide-cdn.md)

Take a look at [Imgix's Image API Reference](https://docs.imgix.com/apis/url) page to see all the transformations available.

### Focal points

When the same image is used in different contexts with different aspect ratios, the classic problem we might encounter is being able to crop it **while preserving the key parts**:

[(Image content)](https://www.datocms-assets.com/205/1601304730-optimal-crop.png?auto=format&fit=max&w=2000)

DatoCMS provides a complete set of [automatic controls on the crop](https://docs.imgix.com/apis/rendering/size/crop), but unfortunately these detection methods are all automatic, so the result in some cases may not be exactly what we expect.

With focal points, you can now **ensure that the key part of your images doesn't get cut off or misaligned** across multiple image sizes and ratios, by explicitly specifying a focal point for the image.

The interface allows you to preview the result of the crop operation on different aspect ratios:

(Video content)

When requesting a cropped version of an image without explicitly specifying a crop mode, DatoCMS will automatically center the crop on the focal point. This means that **99% of the time you won't have to change your code in any way**:

[(Image content)](https://www.datocms-assets.com/205/1714997046-screenshot-2024-05-06-at-14-03-49.png?auto=format&fit=max&w=2000)

To have an overview on the media area and its features, check out this video tutorial:

[

(Image content)

Images and Image Optimization

Play video »

](https://www.datocms.com/user-guides/media-management/images-and-image-optimization.md)

[

(Image content)

Working with the Media Manager in DatoCMS

Play video »

](https://youtu.be/OmRFyDhSXG4)

### Using the Images API with our GraphQL Content Delivery API

While this page covers how to use our images API directly (by appending URL parameters), you can also programmatically define these same parameters in a GraphQL query when you are using our Content Delivery API.

For details on that, please see: Content Delivery API: [Images and videos](/docs/content-delivery-api/images-and-videos.md) .

---

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
  <head>
    <title>503 first byte timeout</title>
  </head>
  <body>
    <h1>Error 503 first byte timeout</h1>
    <p>first byte timeout</p>
    <h3>Error 54113</h3>
    <p>Details: cache-dub4394-DUB 1762301019 2240603875</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
  <head>
    <title>503 first byte timeout</title>
  </head>
  <body>
    <h1>Error 503 first byte timeout</h1>
    <p>first byte timeout</p>
    <h3>Error 54113</h3>
    <p>Details: cache-dub4370-DUB 1762301021 1378133956</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
  <head>
    <title>503 first byte timeout</title>
  </head>
  <body>
    <h1>Error 503 first byte timeout</h1>
    <p>first byte timeout</p>
    <h3>Error 54113</h3>
    <p>Details: cache-dub4355-DUB 1762300867 4268416243</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
  <head>
    <title>503 first byte timeout</title>
  </head>
  <body>
    <h1>Error 503 first byte timeout</h1>
    <p>first byte timeout</p>
    <h3>Error 54113</h3>
    <p>Details: cache-dub4367-DUB 1762300882 3567221351</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
  <head>
    <title>503 first byte timeout</title>
  </head>
  <body>
    <h1>Error 503 first byte timeout</h1>
    <p>first byte timeout</p>
    <h3>Error 54113</h3>
    <p>Details: cache-dub4327-DUB 1762300867 197619473</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

# Available Export & Backup Options

At DatoCMS, ensuring the security and integrity of your data is our top priority. Our [**ISO 27001**](https://www.datocms.com/blog/iso-27001.md) **certification** guarantees that our architecture is designed with internal backups, providing a reliable safeguard against data loss. In other words, you can rest assured that we follow best practices to keep your data safe.

However, data security is a complex and multifaceted issue. That’s why having a **clear, precise, and reliable plan** is essential to protect against potential risks, including human errors at any level.

To help you navigate this, we’ve broken down different approaches depending on your specific needs:

### **You trust DatoCMS, but need backup solutions to recover from human errors on your end**

For this scenario, DatoCMS provides a powerful feature: [**environments**](/docs/scripting-migrations/introduction.md). Environments allow you to create **complete copies (forks) of your project’s data**. These copies are separate sandboxes that can be promoted to replace your primary environment in case of accidental data loss.

Additionally, plugins like [(Image content)Automatic environment backups](https://www.datocms.com/marketplace/plugins/i/datocms-plugin-automatic-environment-backups.md)are available that let you **automate periodic backups** (forks) of your primary environment, ensuring you always have a rolling backup in place.

Another common cause of human error is unintentionally deleting records, and another plugin, [(Image content)Record bin](https://www.datocms.com/marketplace/plugins/i/datocms-plugin-record-bin.md), can assist you in managing that as well.

### **You want to ensure protection against potential data loss on DatoCMS’s end**

While our infrastructure is designed to prevent data loss, we understand that you may still want an extra layer of protection.

The first key assurance is that all content within DatoCMS is **accessible through APIs**, allowing you to generate **offline backups** and store them outside our architecture.

To facilitate this, you have multiple options:

- **Use ready-made plugins** from the DatoCMS Marketplace designed for manually exporting your data or managing offline backups/restore functionality, like [(Image content)Project Exporter](https://www.datocms.com/marketplace/plugins/i/datocms-plugin-project-exporter.md) or [(Image content)Export To Google Docs](https://www.datocms.com/marketplace/plugins/i/datocms-plugin-export-to-google-docs.md)
- **Write a script using our REST API** ( [Content Management API Overview](/docs/content-management-api.md) ) to programmatically export your data
- **Enterprise customers** can access a [**periodic export feature**](/docs/import-and-export/datocms-site-export-feature.md) managed by DatoCMS, which automatically exports project data to an external cloud provider storage.

### A template for a custom export script

Exporting your DatoCMS data or making offline backups is easy with our [Content Management API](/docs/content-management-api.md). Here's a quick example script that dumps every record into a `records.json` file:

```javascript
import { buildClient } from '@datocms/cma-client-node';
import fs from 'fs/promises';

async function main() {
  const client = buildClient({
    apiToken: 'YOUR-FULL-ACCESS-API-KEY',
    environment: 'YOUR-ENVIRONMENT-NAME',
  });

  const itemTypes = await client.itemTypes.list();
  const models = itemTypes.filter((itemType) => !itemType.modular_block);
  const modelIds = models.map((model) => model.id);

  const records = [];

  for await (const record of client.items.listPagedIterator({
    nested: true,
    filter: { type: modelIds.join(',') },
  })) {
    records.push(record);
  }

  const jsonContent = JSON.stringify(records, null, 2);

  await fs.writeFile('backupProduction.json', jsonContent, 'utf8');
}

main();
```

And here is a simple script that exports all assets, and downloads them locally:

```javascript
import { buildClient } from '@datocms/cma-client-node';
import fetch from 'node-fetch';
import { writeFile } from 'fs/promises';

async function downloadImage(url) {
  const response = await fetch(url);
  const buffer = await response.buffer();
  const fileName = new URL(url).pathname.split('/').pop();
  await writeFile('./' + fileName, buffer);
}

async function main() {
  const client = buildClient({
    apiToken: 'YOUR-FULL-ACCESS-API-KEY',
    environment: 'YOUR-ENVIRONMENT-NAME',
  });

  const site = await client.site.find();

  for await (const upload of client.uploads.listPagedIterator()) {
    const imageUrl = 'https://' + site.imgix_host + upload.path;
    console.log(`Downloading ${imageUrl}...`);
    downloadImage(imageUrl);
  }
}

main();
```

You can then add this script into a cron-job and store the result in a S3 bucket, upload it to another system, or back up the results locally.

## Recap

Here's a structured comparison table summarizing the key aspects of the two backup scenarios:

| Aspect | Using DatoCMS Environments | External Backup Solutions |
| ------ | -------------------------- | ------------------------- |

| Ease of setup | Very easy and quick to implement | More complex; requires external tools or scripts |
| Data storage location | Within DatoCMS infrastructure | Stored outside DatoCMS (e.g., cloud storage, local) |
| Ease of data restoration | Restore is immediate: a single button click or API call | Complex to restore |
| Risk factors | Pointless if you aim to protect against DatoCMS-related failures | Very safe from DatoCMS failures |
| Automation | Possible through the Automatic Environment Backups plugin or periodic API calls | Possible via existing plugins or custom scripts |
| Management complexity | Low — handled entirely within DatoCMS | High — requires managing storage, automation, and restoration |
| Cost | Creating backup environments will raise the overall number of records in your project, possibly incurring extra costs. | Depends on the strategy: custom export scripts can increase the number of API calls per month, while Project Exports is an additional Enterprise feature |
| Best for... | Users who trust DatoCMS but need a safety net for human errors | Users who want full control and protection from DatoCMS-related failures |

---

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
  <head>
    <title>503 first byte timeout</title>
  </head>
  <body>
    <h1>Error 503 first byte timeout</h1>
    <p>first byte timeout</p>
    <h3>Error 54113</h3>
    <p>Details: cache-dub4363-DUB 1762300915 1679894368</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

# Import space from Contentful

If you want to try DatoCMS, but you created your existing project with Contentful, you can use our command-line tool to import all content from a Contentful space to a DatoCMS project.

(Video content)

### Setup

First install the `@datocms/cli` npm package:

Terminal window

```bash
npm install -g @datocms/cli
```

The package exposes the `datocms` CLI command, that you can use to install the Contentful importer plugin:

Terminal window

```bash
datocms plugins:install @datocms/cli-plugin-contentful
```

### What you will need

To copy your Contentful space to DatoCMS, you will need the following information:

**Your Contentful Space ID:** you can find it under _Settings > General settings_:

[(Image content)](https://www.datocms-assets.com/205/1716220233-contentful-space-id.png?auto=format&fit=max&w=2000)

A **Contentful content management token**: you can create one under _Settings > API keys_ and then clicking the _Add API key_ button:

[(Image content)](https://www.datocms-assets.com/205/1716220432-contentful-add-api-key.png?auto=format&fit=max&w=2000)

Your **DatoCMS full-access API token**: first create a new project, then go to _Project settings > API tokens_, click on **"Add a new access token"**, and choose or create a **role** with read-write permissions. You can select the default _Admin_ role, or create a more granular one, depending on your needs.

[(Image content)](https://www.datocms-assets.com/205/1744723545-datocms-docs-2025-04-15-at-15-25-16.png?auto=format&fit=max&w=2000)

### Run the import

To import all the entries and assets of your Contentful space into DatoCMS, run the following in the console, making sure to replace the placeholder values with the tokens and IDs of your project:

Terminal window

```bash
rm -rf ./api-calls && datocms contentful:import \
  --api-token=<apiToken> \
  --contentful-token=<apiToken> \
  --contentful-space-id=<spaceId> \
  --log-level=BODY_AND_HEADERS \
  --log-mode=directory
```

By specifying the `log-level` and `log-mode` options, a complete list of API calls made both to Contentful and DatoCMS will be generated in the `./api-calls` folder, one per file, in chronological order. This information can be of great help if something should go wrong during the import.

If desired, you can also specify the `--ignore-errors` option, which will attempt to continue with the import process even if it encounters errors along the way.

The required parameters are these:

Terminal window

```bash
--api-token=<value>             Your DatoCMS project read-write API token
--contentful-space-id=<value>   Your Contentful space ID
--contentful-token=<value>      Your Contentful read-write API token
```

To view the full list of options, you can always run the command:

Terminal window

```bash
datocms contentful:import --help
```

### Known limitations

Although highly compatible, there are some minor differences between the types of fields that Contentful offers compared to DatoCMS, so the tool will follow these migration rules:

- DatoCMS doesn't provide an array of strings field, so data of this kind will be converted in a single string field with comma separated values;
- Contentful API doesn't expose presentation settings for fields, so all text fields will be set as Markdown editors (you will be able to change the presentation mode later from the DatoCMS interface);
- DatoCMS doesn't allow a multi-paragraph text field to be the Model title, so if that's the case, no title field will be set;
- While Contentful's reference field allows not specifying the list of content types that can be referenced, DatoCMS instead requires an explicit list. Therefore, in these cases, the task will set the entire catalog of models as the explicit list.

---

# Import from WordPress

In this guide we'll go through the import of content present in a WordPress site to a DatoCMS project.

### Installation

Install the DatoCMS CLI:

Terminal window

```bash
npm install -g @datocms/cli@latest
```

And subsequently install the WordPress importer plugin:

Terminal window

```bash
$ datocms plugins:install @datocms/cli-plugin-wordpress
```

### What you will need

To copy your WordPress content to DatoCMS, you will need the following information:

1.  Your WordPress user name and password with **admin privileges**
2.  Your WordPress site URL
3.  Your DatoCMS full-access API token: first create a new project, then go to _Project settings > API tokens_, click on **"Add a new API token"**, and choose or create a **role** with read-write permissions. You can select the default _Admin_ role, or create a more granular one, depending on your needs.

[(Image content)](https://www.datocms-assets.com/205/1744723545-datocms-docs-2025-04-15-at-15-25-16.png?auto=format&fit=max&w=2000)

### Run the import

To import the posts and pages of your WordPress project into DatoCMS, run the following in the console:

Terminal window

```bash
$ datocms wordpress:import \
          --ignore-errors \
          --wp-url <YOUR_WP_PROJECT_URL> \
          --wp-username <YOUR_WP_USERNAME> \
          --wp-password <YOUR_WP_PASSWORD> \
          --api-token <YOUR_DATOCMS_API_TOKEN>
```

That's it! The importer will create the standard Wordpress models: articles, pages, authors, categories and tags. All the Wordpress media files will be uploaded to your DatoCMS project in the media gallery as well. Hurray!

(Video content)

### Known limitations

- Our importer only copies pages and posts: custom post types won't be imported;
- There are many different plugins to manage localizations in WordPress-land. For now, if you have a multi-lingual website, we’ll currently only import the content created for the main language.
- Same thing goes for SEO, sliders and other web elements managed by plugins. They won’t be imported.

---

# Importing data from other sources

As a developer working with DatoCMS, you often find yourself in need of importing data from an external source. For example when you are doing a one-time import from another CMS to DatoCMS, or when you just want to clean up messy data from an external API or RESTful web service, or when you want the ability to perform powerful queries on it.

In this guide we will cover how to do a one-time import from an external data source using Node.

**Concepts you should be familiar with:** knowledge of Node.js and `async`/`await`.

**What are some common external sources?** An external data source can come in a wide range of different formats made available on different transport layers. Here's a few examples:

- The REST API of your old CMS
- A text file with comma separated values (CSV)
- A SQL database
- A JSON file or newline delimited JSON (NDJSON) file

### The anatomy of an external data import

No matter what kind of source you are reading from, an external import can be split into three discrete steps:

- Read data from the external source
- Transform the data to DatoCMS records(s) matching your data model
- Save the records to your DatoCMS project

We will cover each of these in order

### Step 1. Read data from the external source

Let's start with a simple example where the external data source is an API endpoint containing an array of breeds of dogs that we want to import into a DatoCMS project.

```json5
[
  {
    "id": 1,
    "breed": "Alapaha Blue Blood Bulldog",
    "bred_for": "Guarding",
    "category": "Mixed",
    "description": "The Alapaha Blue Blood Bulldog is a well-developed, exaggerated bulldog with a broad head and...",
    "life_span": "12 - 13 years",
    "image_url": "https://cdn2.thedogapi.com/images/kuvpGHCzm.jpg"
  },
  {
    "id": 2,
    "breed": "Alaskan Husky",
    "bred_for": "Sled pulling",
    "category": "Mixed",
    "life_span": "10 - 13 years",
    "image_url": "https://cdn2.thedogapi.com/images/uEPB98jBS.jpg"
  },
  {
    "id": 3,
    "breed": "Alaskan Malamute",
    "bred_for": "Hauling heavy freight, Sled pulling",
    "category": "Working",
    "life_span": "12 - 15 years",
    "image_url": "https://cdn2.thedogapi.com/images/aREFAmi5H.jpg"
  },
  ...
]
```

The quickest way to read from this API in Node.js is to install the `node-fetch` package which gives you a `window.fetch`\-like API that enables you to fetch the data:

```javascript
const fetch = require('node-fetch');

async function importDogBreeds() {
  const response = await fetch('https://something.now.sh/dog-breeds');
  const dogBreeds = await response.json();

  // we now have an array of dogBreeds from the external API
}

importDogBreeds();
```

### Step 2: Transform to DatoCMS record(s) matching your data model

Now, let's say the following is the DatoCMS schema we want our imported data to adhere to:

##### Model "Category"

- ID: `552`
- API key: `category`
- Fields:
  - Name (API key: `name`): string

##### Model "Dog breed"

- ID: `730`
- API key: `dog_breed`
- Model fields:
  - Name (API key: `name`): string
  - Category (API key: `category`): link to model `category`
  - Breed for (API key: `breed_for`): string
  - Description (API key: `description`): text
  - Image (API key: `image`): file

If you look carefully, you'll see that the source data doesn't map 1:1 to the schema model. There's a few differences to note here:

- The `breed` field is called `name` in our DatoCMS model
- Instead of importing `category` directly as text inside the breed, we want to create a separate record for them, and have the `category` field be a reference to it instead;
- The `life_span` field from the external API isn't relevant to us, and we don't want to import it at all;

This can roughly be codified to the following transform function:

```javascript
function transformDogBreed(externalData) {
  return {
    item_type: { type: 'item_type', id: '730' }, // <- that's the ID of our dog_breed model
    name: externalData.breed,
    category: ???,
    breed_for: externalData.breed_for,
    description: externalData.description,
    image: ???,
  };
}
```

As you might have guessed, `item_type` means "model" in DatoCMS APIs, and you have to fill it in with the ID of your model (in this case, `"730"`).

The `category` field requires a category record ID, but right now we do not have it. This suggests us that first we have to import the breed categories, and then we can proceed with importing the dog breeds.

To do that, we get all the different dog breed categories, and then we remove any duplicate:

```javascript
const uniq = require('lodash.uniq');
const fetch = require('node-fetch');

async function importDogBreeds() {
  const response = await fetch('https://something.now.sh/dog-breeds');
  const dogBreeds = await response.json();

  const categories = dogBreeds.map((dogBreed) => dogBreed.category);
  const uniqueCategories = uniq(categories);
}
```

### Step 3: Importing to DatoCMS

In the previous steps all we did was fetch and prepare the data to be imported into your DatoCMS project. Now it's time to actually make it become DatoCMS records.

First we need to configure our [DatoCMS client](/docs/content-management-api/using-the-nodejs-clients.md) with our project's API token. We will need to add `@datocms/cma-client-node` as a dependency to our project and create a client instance:

```javascript
import { Client } from '@datocms/cma-client-node';

const client = new Client({ apiToken: '<YOUR-TOKEN-WITH-WRITE-ACCESS>' });
```

In order to give this client write access, we need to generate an access token. You can generate an access token under the "API token" section of your project's settings.

[(Image content)](https://www.datocms-assets.com/205/1717147759-full-access-token.png?auto=format&fit=max&w=2000)

Now that we have our client configured, the next step is to create our records, using the `client.items.create` method:

```javascript
const categoryNameToRecord = {};

for (let categoryName of uniqueCategories) {
  categoryNameToRecord[name] = await client.items.create({
    item_type: { type: 'item_type', id: '552' }, // <- that's the ID of our category model
    name,
  });
}
```

As you can see, we save the created records in a `categoryNameToRecord` object so that it will be easier to access them during the creation of dog breeds, which is obviously the next thing we need to to do in our script:

```javascript
for (let dogBreed of dogBreeds) {
  categoryNameToRecord[name] = await client.items.create({
    itemType: { type: 'item_type', id: '730' }, // <- that's the ID of our dog_breed model
    name: externalData.breed,
    category: categoryNameToRecord[dogBreed.category].id, // <- we pick the ID of our category record
    breed_for: externalData.breed_for,
    description: externalData.description,
    image: ???,
  });
}
```

The last step is uploading the images. To do that, we can simply use the `client.uploads.createFromUrl` method, passing down additional data such as the default alternate text we want for each image. You can learn more in our [CMA docs](/docs/content-management-api/resources/item/create.md#assets):

```javascript
for (let dogBreed of dogBreeds) {
  const upload = await client.uploads.createFromUrl({
    url: dogBreed.image_url,
    default_field_metadata: {
      en: {
        alt: `${dogBreed} dog`,
      },
    },
  });

  categoryNameToRecord[name] = await client.items.create({
    // ...
    image: { upload_id: upload.id },
  });
}
```

And voilà! You've just successfully imported your external data to DatoCMS!

---

# Introduction to the DatoCMS Plugin SDK

Although DatoCMS offers a wide range of features and configurations by default, with **plugins** it is possible to take a further leap forward. You can integrate third-party services with our platform or build custom integrations tailored specifically to your business and user needs.

### What is a DatoCMS Plugin?

Technically speaking, DatoCMS plugins are small web apps that run in a sandboxed `<iframe>` inside our UI and interact with the main DatoCMS app through the Plugin SDK. They can be implemented with basic HTML and JavaScript, or using more advanced client-side frameworks such as React, Angular or Vue.

> [!POSITIVE] Pro tip
> If you're using React, you can take advantage of the [`datocms-react-ui` package](/docs/plugin-sdk/react-datocms-ui.md) that provides a set of ready-to-use components that are consistent with the UI of the main DatoCMS application.

### What can plugins do?

> [!PROTIP] Pro tip: Example plugins built by the community
> Before you build your own plugin, you might want to see if similar functionality is already available in our Community Plugins Marketplace: [https://www.datocms.com/marketplace/plugins](https://www.datocms.com/marketplace/plugins.md)

A huge variety of enhancements to the DatoCMS web app are possible. From small field editor improvements to deeply-integrated full-page applications, plugins make customizing the DatoCMS interface effortless.

Some common use cases are:

- adding custom field editors to improve the editor experience;
- managing content versions for running A/B tests on structured content using personalization tools;
- tailoring the default entry editor to suit your specific needs;
- seamlessly integrating DatoCMS with third-party software and services.

For some real-world examples, you can take a look at our [Marketplace](https://www.datocms.com/marketplace/plugins.md), which already offers 100+ open-source plugins.

### How plugins work

The way in which plugins modify the default DatoCMS interface is through the concept of **hooks**.

The SDK provides a set of locations where plugins can intervene by adding functionality (ie. custom pages, sidebar panels, etc.), and for each of these locations a set of hooks are provided.

Hooks serve three main purposes:

- **Declare the plugin intentions** (e.g., "I want to add a tab in the top navigation bar of DatoCMS that points to a custom page X").
- **Render the content for the** `**iframe**` associated with the declared custom locations (e.g., "when the user enters custom page X, let me render my stuff")
- **Intercept specific events** happening on the interface, and execute custom code, or change the way the regular interface behaves.

You can read in detail about all the hooks and locations provided in the following sections of the guide.

### Distribution: private vs public plugins

As we'll learn in the following sections, plugins can either be private, or publicly released into the Marketplace.

A private plugin is built by you for your specific organization's needs to optimize your organization's editorial experience. It is fully under your control and not accessible by other organizations.

If you think a plugin you've made would be useful to other community members, then we strongly encourage its release in our public [Marketplace](https://www.datocms.com/marketplace/plugins.md). Everyone can contribute new plugins to the marketplace by releasing them as NPM packages.

#### Learn more about plugins

Check out this tutorial on how to make the most out of the plugins in our Marketplace, or how to build your own:

[

(Image content)

Intro to the Plugin Ecosystem

Play video »

](https://www.datocms.com/user-guides/the-basics/intro-to-the-plugin-ecosystem.md)

[

(Image content)

How to start developing plugins for DatoCMS

Play video »

](https://youtu.be/sc8sm34tyWw)

[

(Image content)

Exploring DatoCMS Plugins that help authors

Play video »

](https://youtu.be/PDLCgSFjrac)

---

# Build your first DatoCMS plugin

The demo plugin we're about to build is called **Record Metrics**. It will enhance your editorial experience when creating for instance a blog post by providing useful metrics such as word count and a reading time indicator. The metrics will be shown in a sidebar panel for a given record.

# Prerequisites

In order to successfully complete this tutorial:

- You'll need the latest LTS version of [Node.js](https://nodejs.org/en/) installed on your machine. If you don't have `Node.js` installed, you can download it [here](https://nodejs.org/en/download/).
- You should be comfortable using your computer’s command line and text editor.
- You’ll need to be able to read and write HTML, CSS, and JavaScript.
- You should be familiar with installing software using [NPM](https://www.npmjs.com/).
- You'll need a free DatoCMS account and a project. You can sign up [here](https://dashboard.datocms.com/signup).
- You'll need either Firefox or Chrome. Safari currently does not work due to a limitation in how it handles insecure iframes pointing to `localhost`.

# Tools

We will use several tools and libraries throughout the tutorial. We chose these technologies because we think they provide the best possible developer experience.

###### React

We use [React](https://reactjs.org/) to render our views for the app and handle our logic. React is a JavaScript library for building user interfaces. However, using React is not mandatory to create apps.

###### Plugin SDK

The Plugin SDK provides the methods that are necessary to interact with the DatoCMS web app. We will only use a subset of the methods, but if you want to know the full scope of what is possible, take a look at the other sections of this guide.

###### DatoCMS React UI

To achieve the same look and feel of the DatoCMS web app we use `datocms-react-ui` which exposes a number of React components ready to be used.

###### TypeScript

The plugin is written in TypeScript. This allows us to have documentation, autocompletion in our editor, as well as the assurance that we are passing the right parameters to our libraries. However, you do not need any TypeScript knowledge in order to complete this tutorial. Plugins can also be written in JavaScript without losing any of the functionality.

# Set up your project

As a first step, you need to scaffold the project. We will use a tool called [`tmplr`](https://github.com/loreanvictor/tmplr) to prepare a Vite-powered plugin template:

Terminal window

```bash
npx tmplr datocms/datocms-plugin-template --dir my-first-plugin
```

Follow the prompts, then navigate to the newly created folder and start the app:

Terminal window

```bash
cd my-first-plugin
npm install && npm run dev
```

This hosts your plugin on `http://localhost:5173`. We'll later connect to this through the DatoCMS web app.

# Install your plugin in the DatoCMS web app

In order for you to see your app running in the DatoCMS web app, you need to create a private plugin in DatoCMS.

> [!POSITIVE] Plugins are private unless you choose to publish them
> DatoCMS plugins are private by default (only accessible in the project you installed it in) unless you [choose to publish it to the public plugin marketplace](/docs/plugin-sdk/publishing-to-marketplace.md), which would make it accessible to all DatoCMS customers.

#### Create your private Plugin

Enter your project, and go to **Configuration** **\>** **Plugins**. Click on "**Add a new private plugin**":

(Video content)

In the modal, provide details about your plugin:

- Provide a name and (optionally) a description for your plugin. This can be whatever you want; we chose **Record Metrics** for this tutorial.
- Enter the _Entry point URL_. This is the URL where our app is running. Since we are running our app locally during development, the URL is `http://localhost:5173`. (Later, once you [deploy](/docs/plugin-sdk/build-your-first-plugin.md#deployment) your plugin, you can change the entry point to another location.)
- Specify any [special permission](/docs/plugin-sdk/additional-permissions.md) you want to grant to the plugin. For this tutorial, we don't need any of them.

Then submit the form to create the plugin. Congrats, your plugin is now installed in your current project and environment! 🎉

Once you're done with local development, you'll probably want to [deploy your plugin](/docs/plugin-sdk/build-your-first-plugin.md#deployment) so it can be accessed by your team members without needing to run your local development server.

(Video content)

# Configure your plugin

The [config screen](/docs/plugin-sdk/config-screen.md) of the plugin is rendered by the `ConfigScreen` React component.

Let's fire up our code editor of choice and open the `src/entrypoints/ConfigScreen.tsx` file in the project directory that was previously generated. Any changes you make here will be reflected in the DatoCMS web app. Let's change our welcome text from `Welcome to your plugin!` to `Welcome to Record Metrics!`

Save the file and watch the config screen update in real time:

(Video content)

> [!PROTIP] Pro tip: Use <ContextInspector />
> Inside the `src/entrypoints/ConfigScreen.tsx` file you'll notice the use of `<ContextInspector />` , which is a component made available by `datocms-react-ui` to get an instant overview of all the information/methods available within any SDK hook.
>
> Remember to use it during development, it's very convenient to avoid going back and forth in the documentation!

# Add the sidebar panel

To add [sidebar panels](/docs/plugin-sdk/sidebar-panels.md) to the DatoCMS interface, we need to implement the `itemFormSidebarPanels` and `renderItemFormSidebarPanel` hooks.

Open the `src/index.tsx` file and add the following code:

```tsx
import SidebarMetrics from './entrypoints/SidebarMetrics';

connect({
  // ...
  itemFormSidebarPanels() {
    return [
      {
        id: 'metrics',
        label: 'Metrics',
      },
    ];
  },
  renderItemFormSidebarPanel(sidebarPaneId, ctx) {
    render(<SidebarMetrics ctx={ctx} />);
  },
});
```

We also need to add the new `SidebarMetrics` component in `src/entrypoints/SidebarMetrics.tsx`:

```tsx
import { RenderItemFormSidebarPanelCtx } from 'datocms-plugin-sdk';
import { Canvas } from 'datocms-react-ui';

type PropTypes = {
  ctx: RenderItemFormSidebarPanelCtx;
};

export default function SidebarMetrics({ ctx }: PropTypes) {
  return <Canvas ctx={ctx}>Hello from the sidebar!</Canvas>;
}
```

Make sure to have a model with some text fields, and a record we can test the plugin on (if you are not familiar with the concept of models, you can read more about them [here](/docs/general-concepts/data-modelling.md)).

Then go to your Content tab, and create a blog post record. You should see a "Metrics" sidebar panel now on the page:

(Video content)

All the changes you make here to the component will also be reflected directly in the web app.

## Calculate the metrics

It's time to calculate some metrics for the record. For calculating the word count and the reading time we will use a library called [`reading-time`](https://github.com/michael-lynch/reading-time). Navigate to your project folder and install the libraries and its dependencies with:

Terminal window

```bash
npm install reading-time
npm install stream util --save-dev
```

We can use the `ctx` object, which gets passed into every hook, to interact with DatoCMS:

- The `ctx.fields` object holds all the currently loaded fields for the current project;
- The `ctx.itemType` object holds the model for the current record;
- The `ctx.formValues` object holds the current values present in the record form;

We can use this information to get the values of all the text fields present in the record, concatenate them in a single string and then call the `readingTime` function, which will calculate our desired metrics. It will do all the heavy lifting for us and return an object which holds the word count and the time to read.

The last thing we want to do is display the calculated metrics in our sidebar. For this we import the `Canvas` component from `datocms-react-ui` to give our app the look and feel of the DatoCMS web app.

The final code should look like this:

```tsx
import { RenderItemFormSidebarPanelCtx } from 'datocms-plugin-sdk';
import { Canvas } from 'datocms-react-ui';
import readingTime from 'reading-time';
import { Field } from 'datocms-plugin-sdk';

type PropTypes = {
  ctx: RenderItemFormSidebarPanelCtx;
};

export default function SidebarMetrics({ ctx }: PropTypes) {
  const modelFields = ctx.itemType.relationships.fields.data
    .map((link) => ctx.fields[link.id])
    .filter<Field>((x): x is Field => !!x);

  const textFields = modelFields.filter((field) =>
    ['text', 'string'].includes(field.attributes.field_type),
  );

  const allText = textFields.map((field) => ctx.formValues[field.attributes.api_key]).join(' ');

  const stats = readingTime(allText || '');

  return (
    <Canvas ctx={ctx}>
      <ul>
        <li>Word count: {stats.words}</li>
        <li>Reading time: {stats.text}</li>
      </ul>
    </Canvas>
  );
}
```

Type some content in your field and see how the app updates!

(Video content)

## Deployment

To deploy your plugin and make it available to everyone in your organization, you need to create a production build of your app and then host it somewhere on the internet. We strongly suggest using Netlify or Vercel, as they make the overall experience incredibly easy.

When configuring your hosting service, make sure to specify the following build command:

Terminal window

```bash
npm run build
```

Once deployed, go to "Project Settings > Plugins", and inside your plugin click the "Edit private plugin" button. In the modal, change the "Entry point URL" to the new Netlify/Vercel URL.

Congratulations, you just deployed your first plugin! 🥳

#### Build a Plugin Video tutorial

Learn to build a DatoCMS plugin from scratch with this video tutorial:

[

(Image content)

How to start developing plugins for DatoCMS

Play video »

](https://youtu.be/sc8sm34tyWw)

---

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
  <head>
    <title>503 first byte timeout</title>
  </head>
  <body>
    <h1>Error 503 first byte timeout</h1>
    <p>first byte timeout</p>
    <h3>Error 54113</h3>
    <p>Details: cache-dub4354-DUB 1762300924 1086858885</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
  <head>
    <title>503 first byte timeout</title>
  </head>
  <body>
    <h1>Error 503 first byte timeout</h1>
    <p>first byte timeout</p>
    <h3>Error 54113</h3>
    <p>Details: cache-dub4385-DUB 1762300925 2561457999</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
  <head>
    <title>503 first byte timeout</title>
  </head>
  <body>
    <h1>Error 503 first byte timeout</h1>
    <p>first byte timeout</p>
    <h3>Error 54113</h3>
    <p>Details: cache-dub4327-DUB 1762300927 197874219</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
  <head>
    <title>503 first byte timeout</title>
  </head>
  <body>
    <h1>Error 503 first byte timeout</h1>
    <p>first byte timeout</p>
    <h3>Error 54113</h3>
    <p>Details: cache-dub4374-DUB 1762300930 1765851610</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
  <head>
    <title>503 first byte timeout</title>
  </head>
  <body>
    <h1>Error 503 first byte timeout</h1>
    <p>first byte timeout</p>
    <h3>Error 54113</h3>
    <p>Details: cache-dub4337-DUB 1762300932 2500319804</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
  <head>
    <title>503 first byte timeout</title>
  </head>
  <body>
    <h1>Error 503 first byte timeout</h1>
    <p>first byte timeout</p>
    <h3>Error 54113</h3>
    <p>Details: cache-dub4351-DUB 1762300939 1798867279</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
  <head>
    <title>503 first byte timeout</title>
  </head>
  <body>
    <h1>Error 503 first byte timeout</h1>
    <p>first byte timeout</p>
    <h3>Error 54113</h3>
    <p>Details: cache-dub4384-DUB 1762300955 1708095132</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
  <head>
    <title>503 first byte timeout</title>
  </head>
  <body>
    <h1>Error 503 first byte timeout</h1>
    <p>first byte timeout</p>
    <h3>Error 54113</h3>
    <p>Details: cache-dub4392-DUB 1762300942 1190965137</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
  <head>
    <title>503 first byte timeout</title>
  </head>
  <body>
    <h1>Error 503 first byte timeout</h1>
    <p>first byte timeout</p>
    <h3>Error 54113</h3>
    <p>Details: cache-dub4343-DUB 1762300946 266107494</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

# Structured Text customizations

[Structured Text](/docs/structured-text/dast.md) is a consciously simple format, with a very small number of possible nodes — only the ones that are really helpful to capture the semantics of a standard piece of content, and with zero possibility to introduce styling and break the decoupling of content from presentation.

This is generally a very good thing, as it makes working on the frontend extremely simple and predictable: unlike HTML or Markdown, you don't have to be defensive and worry about some complex nesting of tags that you'd never think it could be possible, or unwanted styles coming from the editors.

There are, however, situations where it is critical to be able to **add a small, controlled set of styles to your content, to represent nuances of different semantics** within a piece of content.

### Adding custom styles to nodes

Let's take this article as an example:

[(Image content)](https://www.datocms-assets.com/205/1643205815-screenshot-2022-01-26-at-15-03-25.png?auto=format&fit=max&w=2000)

The third paragraph is conceptually similar to the others, but it's obviously more important, and we want the reader to pay more attention to what it says.

In these cases, we can use plugins to specify alternative styles for paragraph and heading nodes using the `customBlockStylesForStructuredTextField` hook:

```tsx
import { connect, Field, FieldIntentCtx } from 'datocms-plugin-sdk';

connect({
  customBlockStylesForStructuredTextField(field: Field, ctx: FieldIntentCtx) {
    return [
      {
        id: 'emphasized',
        node: 'paragraph',
        label: 'Emphasized',
        appliedStyle: {
          fontFamily: 'Georgia',
          fontStyle: 'italic',
          fontSize: '1.4em',
          lineHeight: '1.2',
        },
      },
    ];
  },
});
```

The code above will add a custom `"emphasized"` style for `paragraph` nodes to every Structured Text field in the project. The `appliedStyle` property lets you customize how the style will be rendered inside of DatoCMS, when the user selects it:

(Video content)

You can also use the first argument of the hook (`field`) to only allow custom styles in some specific Structured Text fields. If that's the case, you'll probably want to [add some settings to the plugin](/docs/plugin-sdk/config-screen.md) to let the final user decide which they are:

```tsx
customBlockStylesForStructuredTextField(field: Field, ctx: FieldIntentCtx) {
  const { fieldsInWhichAllowCustomStyles } = ctx.plugin.attributes.parameters;

  if (!fieldsInWhichAllowCustomStyles.includes[field.attributes.api_key)) {
    // No custom styles!
    return [];
  }

  return [
    {
      id: 'emphasized',
      node: 'paragraph',
      // ...
    },
  ];
}
```

The final Structured Text value will have the custom style applied in the `style` property:

```json
{
  "type": "root",
  "children": [
    {
      "type": "paragraph",
      "style": "emphasized",
      "children": [
        {
          "type": "span",
          "value": "Hello!"
        }
      ]
    }
  ]
}
```

### Adding custom marks

The default Structured Text editor already supports a number of [different marks](/docs/structured-text/dast.md#span) (`strong`, `code`, `underline`, `highlight`, etc.), but you might want to annotate parts of the text using custom marks.

An example would be adding a "spoiler" mark, to signal a portion of text that we don't want to show the visitor unless they explicitly accept a spoiler alert.

The `customMarksForStructuredTextField` hook lets you do exactly that:

```tsx
import { connect, Field, FieldIntentCtx } from 'datocms-plugin-sdk';

connect({
  customMarksForStructuredTextField(field: Field, ctx: FieldIntentCtx) {
    return [
      {
        id: 'spoiler',
        label: 'Spoiler',
        icon: 'bomb',
        keyboardShortcut: 'mod+shift+l',
        appliedStyle: {
          backgroundColor: 'rgba(255, 0, 0, 0.3)',
        },
      },
    ];
  },
});
```

The code above will add a custom `"spoiler"` mark to every Structured Text field in the project. The `appliedStyle` property lets you customize how the style will be rendered inside of DatoCMS, when the user selects it:

(Video content)

The final result on the Structured Text value will be the following:

```json
{
  "type": "root",
  "children": [
    {
      "type": "paragraph",
      "children": [
        {
          "type": "span",
          "value": "In the "
        },
        {
          "type": "span",
          "marks": ["spoiler"],
          "value": "final killing scene"
        },
        {
          "type": "span",
          "value": ", the director really outdid himself."
        }
      ]
    }
  ]
}
```

> [!WARNING] You're in charge of the frontend!
> All of our Structured Text management libraries (React, Vue, etc.) allow you to specify custom rendering rules. When working with custom styles and marks, it's up to your frontend to decide how to render them!

#### `customBlockStylesForStructuredTextField(field: Field, ctx)`

Use this function to define a number of custom block styles for a specific Structured Text field.

##### Return value

The function must return: `StructuredTextCustomBlockStyle[] | undefined`.

##### Context object

The following properties and methods are available in the `ctx` argument:

<details>
<summary>Hook-specific properties and methods</summary>

This hook exposes additional information and operations specific to the context in which it operates.

<details>
<summary>ctx.itemType: ItemType</summary>

[View on Github](https://github.com/datocms/plugins-sdk/blob/master/packages/sdk/src/hooks/customBlockStylesForStructuredTextField.ts#L29)

</details>

</details>

#### `customMarksForStructuredTextField(field: Field, ctx)`

Use this function to define a number of custom marks for a specific Structured Text field.

##### Return value

The function must return: `StructuredTextCustomMark[] | undefined`.

##### Context object

The following properties and methods are available in the `ctx` argument:

<details>
<summary>Hook-specific properties and methods</summary>

This hook exposes additional information and operations specific to the context in which it operates.

<details>
<summary>ctx.itemType: ItemType</summary>

[View on Github](https://github.com/datocms/plugins-sdk/blob/master/packages/sdk/src/hooks/customMarksForStructuredTextField.ts#L30)

</details>

</details>

---

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
  <head>
    <title>503 first byte timeout</title>
  </head>
  <body>
    <h1>Error 503 first byte timeout</h1>
    <p>first byte timeout</p>
    <h3>Error 54113</h3>
    <p>Details: cache-dub4321-DUB 1762300947 2326023498</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
  <head>
    <title>503 first byte timeout</title>
  </head>
  <body>
    <h1>Error 503 first byte timeout</h1>
    <p>first byte timeout</p>
    <h3>Error 54113</h3>
    <p>Details: cache-dub4327-DUB 1762300955 197995076</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
  <head>
    <title>503 first byte timeout</title>
  </head>
  <body>
    <h1>Error 503 first byte timeout</h1>
    <p>first byte timeout</p>
    <h3>Error 54113</h3>
    <p>Details: cache-dub4341-DUB 1762300958 535924173</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
  <head>
    <title>503 first byte timeout</title>
  </head>
  <body>
    <h1>Error 503 first byte timeout</h1>
    <p>first byte timeout</p>
    <h3>Error 54113</h3>
    <p>Details: cache-dub4348-DUB 1762300976 1920036985</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
  <head>
    <title>503 first byte timeout</title>
  </head>
  <body>
    <h1>Error 503 first byte timeout</h1>
    <p>first byte timeout</p>
    <h3>Error 54113</h3>
    <p>Details: cache-dub4343-DUB 1762300978 266178310</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
  <head>
    <title>503 first byte timeout</title>
  </head>
  <body>
    <h1>Error 503 first byte timeout</h1>
    <p>first byte timeout</p>
    <h3>Error 54113</h3>
    <p>Details: cache-dub4352-DUB 1762300985 1012943099</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
  <head>
    <title>503 first byte timeout</title>
  </head>
  <body>
    <h1>Error 503 first byte timeout</h1>
    <p>first byte timeout</p>
    <h3>Error 54113</h3>
    <p>Details: cache-dub4342-DUB 1762300971 2409658456</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
  <head>
    <title>503 first byte timeout</title>
  </head>
  <body>
    <h1>Error 503 first byte timeout</h1>
    <p>first byte timeout</p>
    <h3>Error 54113</h3>
    <p>Details: cache-dub4358-DUB 1762300988 2303517521</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
  <head>
    <title>503 first byte timeout</title>
  </head>
  <body>
    <h1>Error 503 first byte timeout</h1>
    <p>first byte timeout</p>
    <h3>Error 54113</h3>
    <p>Details: cache-dub4386-DUB 1762300986 910815024</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

# Section

# Basic usage

###### Preview

###### Code

```js
<Canvas ctx={ctx}>
  <Section title="Section title">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat.
  </Section>
</Canvas>
```

# Highlighted

###### Preview

###### Code

```js
<Canvas ctx={ctx}>
  <Section title="Section title" highlighted>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat.
  </Section>
</Canvas>
```

# Collapsible

###### Preview

###### Code

```js
<Canvas ctx={ctx}>
  <StateManager initial={true}>
    {(isOpen, setOpen) => (
      <Section title="Section title" collapsible={{ isOpen, onToggle: () => setOpen((v) => !v) }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </Section>
    )}
  </StateManager>
</Canvas>
```

---

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
  <head>
    <title>503 first byte timeout</title>
  </head>
  <body>
    <h1>Error 503 first byte timeout</h1>
    <p>first byte timeout</p>
    <h3>Error 54113</h3>
    <p>Details: cache-dub4357-DUB 1762300993 4212392579</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

# Spinner

# Inline spinner

###### Preview

###### Code

```js
<Canvas ctx={ctx}>
  Foo bar <Spinner size={24} />
</Canvas>
```

# Centered spinner

###### Preview

###### Code

```js
<Canvas ctx={ctx}>
  <div style={{ height: '200px', position: 'relative' }}>
    <Spinner size={48} placement="centered" />
  </div>
</Canvas>
```

---

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
  <head>
    <title>503 first byte timeout</title>
  </head>
  <body>
    <h1>Error 503 first byte timeout</h1>
    <p>first byte timeout</p>
    <h3>Error 54113</h3>
    <p>Details: cache-dub4373-DUB 1762301001 2722363619</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
  <head>
    <title>503 first byte timeout</title>
  </head>
  <body>
    <h1>Error 503 first byte timeout</h1>
    <p>first byte timeout</p>
    <h3>Error 54113</h3>
    <p>Details: cache-dub4370-DUB 1762301002 1378052527</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
  <head>
    <title>503 first byte timeout</title>
  </head>
  <body>
    <h1>Error 503 first byte timeout</h1>
    <p>first byte timeout</p>
    <h3>Error 54113</h3>
    <p>Details: cache-dub4375-DUB 1762301004 3138833742</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
  <head>
    <title>503 first byte timeout</title>
  </head>
  <body>
    <h1>Error 503 first byte timeout</h1>
    <p>first byte timeout</p>
    <h3>Error 54113</h3>
    <p>Details: cache-dub4387-DUB 1762301006 4144724392</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
  <head>
    <title>503 first byte timeout</title>
  </head>
  <body>
    <h1>Error 503 first byte timeout</h1>
    <p>first byte timeout</p>
    <h3>Error 54113</h3>
    <p>Details: cache-dub4386-DUB 1762301008 910910829</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
  <head>
    <title>503 first byte timeout</title>
  </head>
  <body>
    <h1>Error 503 first byte timeout</h1>
    <p>first byte timeout</p>
    <h3>Error 54113</h3>
    <p>Details: cache-dub4351-DUB 1762301016 1799208330</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
  <head>
    <title>503 first byte timeout</title>
  </head>
  <body>
    <h1>Error 503 first byte timeout</h1>
    <p>first byte timeout</p>
    <h3>Error 54113</h3>
    <p>Details: cache-dub4390-DUB 1762301017 2110428806</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

# How to stream videos efficiently: Raw MP4 Downloads vs HLS Streaming

This guide will walk you through the process of streaming videos using DatoCMS. We'll cover everything from uploading and encoding to implementation and troubleshooting, and help you select the most efficient and cost-effective methods to enhance your video delivery.

### Video streaming options

DatoCMS offers two main ways to stream videos:

1.  Adaptive bitrate streaming using HTTP Live Streaming (HLS)
2.  Serving raw MP4 files for direct download

These are described in more detail below.

#### **Option 1 (recommended): Adaptive Bitrate streaming through Mux**

We offer powerful video streaming capabilities thanks to our integration with [Mux](https://www.mux.com/), a leading cloud encoding platform for on-demand streaming video.

Adaptive Bitrate uses the HLS (HTTP Live Streaming) protocol and provides **plenty of benefits**:

**✅ Optimal viewing experience**: The video quality adapts automatically to the user’s connection, ensuring minimal buffering and seamless playback.

**✅ Bandwidth efficiency**: It conserves data by reducing the video quality for users with slower connections, optimizing bandwidth usage.

**✅ Improved performance**: Streaming is done through an optimized Content Delivery Network (CDN) designed for video, which ensures faster video delivery and lower latency.

To implement this method on your frontend, you have two options.

**Use our Video Player component**

We offer an easy-to-use `<VideoPlayer/>` component for:

- [React/Next.js/Remix](/docs/next-js/displaying-videos.md)
- [Vue, Nuxt](/docs/nuxt.md)
- [Svelte/SvelteKit](/docs/svelte/displaying-videos.md)

Our player is a thin wrapper around [Mux's own implementation](https://www.mux.com/player), but ours is specifically designed for DatoCMS and makes it easy to display videos straight from your GraphQL queries.

**Implement a HLS player yourself**

If you prefer more control or are using a different framework, you can implement the video player manually using the data returned from the API:

1.  Use the `muxPlaybackId` to construct the HLS streaming URL: `https://stream.mux.com/{PLAYBACK_ID}.m3u8`
2.  Implement a video player that supports HLS (e.g., video.js, Plyr, or hls.js)
3.  For fallback support, use the provided MP4 URLs (high, medium, and low quality)

#### **Option 2: Serving the MP4 file directly (NOT recommended)**

An alternative method is serving the MP4 file directly from `datocms-assets.com` using an HTML `<video>` tag. Although this is an option, it is generally not recommended **due to several drawbacks**:

**❌ High bandwidth costs**: Serving the raw MP4s will generate substantial traffic, leading to increased bandwidth consumption and higher costs. This is especially the case for autoloading videos (like a hero or background video) , which will typically consume several megabytes of bandwidth for every visitor, regardless of their device and bandwidth.

**❌ No quality control**: Unlike adaptive bitrate streaming, the video does not adjust its quality dynamically based on the viewer’s internet speed, leading to poor streaming quality.

**❌ Lack of CDN optimization**: Direct MP4 serving does not benefit from CDN optimization, resulting in higher latency and slower load times.

### Best practices for Video Streaming

#### Use HLS Streaming

We strongly recommend using HLS (HTTP Live Streaming) as it provides a superior method for managing traffic and reducing costs. HLS delivers a streaming URL (streamingUrl) that adjusts video quality according to the viewer’s network conditions, ensuring efficient and smooth playback.

#### Blocking Raw Video URLs

To prevent the serving of raw video URLs and reduce unnecessary bandwidth usage, configure your project settings to [block direct access to video files](/docs/asset-api/asset-cdn-settings.md#block-serving-raw-videos) via the Asset CDN. This step ensures videos are streamed efficiently using the provided HLS URLs.

Blocking direct access to videos has been the default setting for new DatoCMS projects since March 2024, but older projects need to explicitly opt-in to enable blocking.

### How Video Streaming is billed

Understanding how streaming is billed is crucial for managing costs effectively.

For **HLS Streaming**, billing is based on the number of streaming minutes. This means you are charged for the actual time viewers spend watching your videos, regardless of their bandwidth usage. This makes for predictable, viewership-based billing, and will usually be substantially lower in cost.

In contrast, **MP4 Serving** is billed based on bandwidth usage. This method measures the total amount of data transferred when users watch your videos. Since the video is served in its entirety without adjusting for quality, this leads to higher data usage and, consequently, higher costs, especially if you have a large audience and/or if the video files are large.

For all the details, you can read more on [How overages are managed](/docs/plans-pricing-and-billing/overcharges-on-api-and-bandwidth.md).

### Monitoring your Video Streaming usage

DatoCMS provides tools to help you monitor your project's streaming usage, allowing you to stay on top of your costs and usage patterns. The Project Usages page, part of the "Project settings" area in the CMS, offers detailed insights into your usage metrics.

Here, you can see a breakdown of how much you are being charged for streaming minutes (HLS) and bandwidth (MP4 serving).

To determine which type of charge you are incurring, look under the specific categories:

- **Streaming Minutes**: This section shows the total time your videos have been streamed using HLS.

(Image content)

- **Bandwidth**: This section details the data transferred for videos served directly via MP4. You can check the **top assets by traffic**, as well as the **top referrers for assets**, while the graph highlights in purple all the traffic generated by your projects' assets.

(Image content)

### Troubleshooting

#### Reducing overages

If you notice a spike in your overages and usage metrics, it’s essential to investigate and address the root cause. A common issue is high bandwidth usage due to serving MP4 videos directly. To troubleshoot this:

- Audit your site for `<video>` tags and switch them to HLS streaming if they are currently set to serve MP4 files directly.
- Use the network tab in your browser’s developer tools to ensure videos are being served from `stream.mux.com` and not `datocms-assets.com`

#### Looping auto-play background videos

Here are some suggestions for optimizing the scenario where you want to use a looping video as a background in your page layout:

- **Use Short Clips**: Keep the video short enough to fit within the browser’s memory cache (typically less than 10 seconds). This prevents Mux from re-downloading the video each time it loops, reducing streaming costs.
- **Optimize Quality and Size**: Balance video quality with file size to minimize data usage without sacrificing user experience. In some cases, using a lower resolution MP4 might be more cost-effective than HLS streaming if the browser can reliably cache it.
- **Alternative Hosting**: Consider hosting the video on a third-party CDN if their bandwidth costs are lower. This approach can bypass both Mux and DatoCMS CDNs, potentially reducing expenses further, especially if you have a preexisting contract with them that includes high amounts of bandwidth. You would be billed separately by the third-party host.
- **Static Asset on Your Frontend**: If your file is small enough and you have a sufficient plan with your frontend's current host & CDN, consider adding the file to your frontend repo and serving directly from there, alongside your favicons, decorative images, fonts, etc. This is similar to the previous option of hosting the video on an alternative host, but this saves you the trouble of needing a seperate account & plan just for hosting these videos. Please check with your frontend host to see how this would affect your billing.

---

# Streaming Video Analytics with Mux Data

If you've seen our article on [How to stream videos efficiently: Raw MP4 Downloads vs HLS Streaming](/docs/streaming-videos/how-to-stream-videos-efficiently.md) , you know that serving HLS (HTTP Live Streaming) video can provide your visitors with a good streaming experience and help you control costs at the same time. These HLS videos are served through our video CDN partner, [Mux.](https://www.mux.com/)

Mux provides a detailed frontend analytics service for your streaming videos: [Mux Data](https://www.mux.com/data).

Some quick setup on your frontend is required before analytics data will be available. This page details how to send analytics to Mux Data using our `<VideoPlayer/>` component for [React](/docs/next-js/displaying-videos.md), [Vue](/docs/nuxt/displaying-videos.md), and [Svelte](/docs/svelte/displaying-videos.md). Our component is just a thin wrapper around [`mux-player`](https://www.mux.com/player), making it easier to use with our [Content Delivery API](/docs/content-delivery-api.md) output while still using largely the same parameters as the original.

## What is Mux Data and how is it different from the DatoCMS Project Usages screen?

In your Project Usages section, DatoCMS provides basic information about your HLS streams. We show you the # of streamed minutes per file:

(Image content)

If you want more detailed video analytics, you'll have to use a third-party solution. Luckily, Mux already provides such a service, [Mux Data](https://www.mux.com/data).

Once set up, Mux Data provides you detailed information on your video views:

(Image content)

Mux Data Overview

### What metrics are tracked by Mux Data?

Mux Data tracks technical device details (user agents, OS and player details, codecs, etc.), visitor engagement metrics (unique viewers, play times, percentage completions, etc.) and much more.

> [!NOTE] Full list of Mux Data Metrics
> For the full, updated list of metrics tracked by Mux Data, please see [Mux Data: Technical Specs](https://www.mux.com/data#TechSpecs)

### How much does Mux Data cost? How am I billed for it?

Mux Data is a **separate service** offered by Mux directly. It is not a part of your DatoCMS subscription and does not affect your billing here in any way.

As of September 2025, Mux Data is free up to 100k views/month. No credit card is needed to sign up.

You can see more pricing details at [https://www.mux.com/pricing/data](https://www.mux.com/pricing/data).

If you choose to subscribe to a Mux Data paid plan, you will be paying Mux directly, under your separate account with them.

## How to use Mux Data with DatoCMS

It's a simple process: Sign up for a [Mux Data account](https://dashboard.mux.com/signup?type=data) (it's free and easy), then add your Mux Data env key as a parameter to your DatoCMS `<VideoPlayer/>` or the official `<mux-player/>` component.

Here is the step-by-step:

##### Use HLS Streaming

Ensure that you're serving videos using HLS (HTTP Live Streaming), not the raw .MP4s. We have a guide about this: [How to stream videos efficiently: Raw MP4 Downloads vs HLS Streaming](/docs/streaming-videos/how-to-stream-videos-efficiently.md)

##### Set up <VideoPlayer/> Component

If you're not yet using our `<VideoPlayer/>` component, follow one of these guides to set it up on your frontend:

- [<VideoPlayer/> component for React & Next.js](/docs/next-js/displaying-videos.md)
- [<VideoPlayer/> component for Vue & Nuxt](/docs/nuxt/displaying-videos.md)
- [<VideoPlayer/> component for Svelte & SvelteKit](/docs/svelte/displaying-videos.md)

If you prefer, you can also use the official `mux-player` instead: [https://www.mux.com/docs/guides/mux-player-web](https://www.mux.com/docs/guides/mux-player-web)

Our `<VideoPlayer/>` components are just a thin wrapper over the official player, sharing most of the same parameters.

##### Sign up for Mux Data

Then, [sign up for a Mux Data account](https://dashboard.mux.com/signup?type=data). This happens outside of DatoCMS, on the Mux Data site itself. This is completely separate from your DatoCMS account.

##### Copy your Mux Data env key

After you've signed up, log in with your credentials. In the Mux dashboard, hover over your team name and go to the "All Environments" screen:

(Image content)

Mux "All Environments" dropdown

You should see one or more environments with their env keys in the bottom right. Click to copy one of them (for the environment you want to monitor, probably "Production"):

(Image content)

Mux Environment Keys

Please note that these Mux environments **are not related to your DatoCMS project environments**. They are just internal names used by Mux Data, which you can assign to your different frontend environments if you have them.

##### Add your Mux Data env key to the <VideoPlayer/> component

Now that you have your env key (it should be an 8-digit alphanumeric key like `abcd1234`), you can simply supply it to your `<VideoPlayer/>` component:

```tsx
<VideoPlayer
  envKey={myOwnMuxDataEnvKey} // Your own env key from your Mux Data dashboard at https://dashboard.mux.com/environments
  disableTracking={false} // We normally default it to true, so you have to explicitly enable it
  data={yourVideoData} // The video object you get back from our CDA. Must include `muxPlaybackId`.
  // debug={true} // (Optional) Shows you analytics events in the browser console
  // {...rest} // Anything else you needed to add. See https://www.mux.com/docs/guides/player-api-reference
/>
```

For an example, please see [this Stackblitz demo](https://stackblitz.com/~/github.com/arcataroger/mux-data-test).

_See also:_ [_Mux Player API Reference_](https://www.mux.com/docs/guides/player-api-reference) _for a list of all accepted parameters_

##### Viewing your Mux Data Analytics

If the setup succeeded, try viewing your video for a few seconds. Analytics should start trickling into Mux Data. Now, just return to the Mux dashboard (`dashboard.mux.com`) and choose your environment again. You should start seeing analytics!

[(Image content)](https://www.datocms-assets.com/205/1758837383-mux-data-dashboard.png?auto=format&fit=max&w=2000)

Mux Data Dashboard

If you enabled `debug={true}`, you'll also see these logging attempts in the browser console as they're sent, which can be especially useful if the analytics _aren't_ showing up as expected (probably because of adblock; see the troubleshooting section below).

## Documentation and Troubleshooting

### Official Documentation

**Mux Data:** Because Mux Data is a service offered by our partner and not DatoCMS directly, please see the official Mux Data documentation for detailed usage information: [**Introduction to Mux Data**](https://www.mux.com/docs/guides/data).

Our`**<VideoPlayer/>**` component: Please see the readmes for the [**React**](https://github.com/datocms/react-datocms)**,** [**Vue**](https://github.com/datocms/vue-datocms)**,** or [**Svelte**](https://github.com/datocms/datocms-svelte/) packages.

The original `**mux-player**` that our component wraps: [**Mux Player for Web documentation**](https://www.mux.com/docs/guides/mux-player-web) and [**API reference**](https://www.mux.com/docs/guides/player-api-reference). Note that the React version has similar but slightly different parameters compared to the web component version.

### Not seeing anything in your Mux Data? **It may be ad-blocked**

If you're sure you've followed the above setup steps and still aren't seeing any analytics in Mux Data after a few minutes, **the most likely cause is ad-blocking.** Mux Data is an entirely clientside script that runs in the user's browser, and many adblockers (like uBlock Origin) will block it by default.

For testing, please disable any browser extensions and/or watch the video in an Incognito/Private window.

For production usage, you should also keep in mind that your own visitors may also be using ad blockers. Thus, they may not send you any Mux Data events at all, and the metrics you do see may be skewed towards users who aren't blocking ads. (The same would apply to any other clientside user analytics tracking).

### Seeing different numbers in Mux Data vs your DatoCMS Project Usages?

Because Mux Data is clientside and runs in your users' browsers, it may be affected by ad blocking, network policies, etc. These can all prevent analytics events from being successfully collected.

In comparison, the streaming minutes measured in your DatoCMS Project Usages is an authoritative serverside log tracked directly by Mux's CDN.

Thus, for billing purposes, the **DatoCMS Project Usages section is considered the authoritative source of truth for accurately counting streamed minutes.**

Still, Mux Data — even though it only tracks some percentage of your viewers and not all — can provide many additional insights into your viewership and engagement. Using both together can help you optimize your technical delivery and editorial engagement. Our serverside records tell you exactly how much time each video was watched, while Mux Data gives you much more fine-grained metrics on their delivery and engagement.

### Need help?

Although Mux Data is offered by our partner Mux, we here at DatoCMS still very much value you as our shared customer 🙂

As such, if you run into issues with any of this, please feel free to [reach out to our support team](https://www.datocms.com/support.md#form?topics=technical-support%2Fgeneral-request) or [check our forum](https://community.datocms.com/c/support/18) and we'll do our best to help!

Or if you're sure it's something out of our control, you can also reach out to Mux directly: [Open a ticket with Mux](https://www.mux.com/support/human)

---

# How to use Vercel Content Link

[Vercel Content Link](https://vercel.com/docs/workflow-collaboration/edit-mode#content-link) (previously known as Vercel Visual Editing) is an exciting feature offered by Vercel's Edit Mode. It enhances your website by adding **clickable links to any content present on the page that's coming from your DatoCMS project**. By simply clicking on these links, you'll be seamlessly directed to the corresponding record in DatoCMS.

Once configured for your project, the implementation will resemble the following example:

(Video content)

> [!WARNING] Vercel and DatoCMS requirements
> Right now, Vercel Content Link is available on Pro and Enterprise Vercel plans, while it's currently available for Enterprise DatoCMS customers. If you want to have the feature enabled in your DatoCMS projects, contact us at [support@datocms.com](mailto:support@datocms.com).

## How does it work?

When Vercel Content Link is enabled, DatoCMS's [Content Delivery API](/docs/content-delivery-api.md) incorporates hidden metadata into the response of the GraphQL queries you make.

This is achieved through a smart technique known as [steganography](https://en.wikipedia.org/wiki/Steganography). Steganography is the practice of concealing information within other data, and in this case, it involves encoding the metadata into invisible Unicode characters added to the existing strings — you can examine the complete encoding/decoding algorithm in the [@vercel/stega](https://www.npmjs.com/package/@vercel/stega) NPM pagkage.

Once the "augmented strings" from DatoCMS are used on your pages, Vercel can locate and identify the hidden metadata in the final HTML, and display clickable links that direct you to the corresponding record in DatoCMS.

## Which GraphQL fields support Content Link?

Currently, the metadata required to show a clickable link on Vercel is added in the following parts of the GraphQL response:

- **Text fields** (both Single-line Strings and Multi-paragraph Text) that are not empty and with no format validation: the metadata will be appended at the end of the original string;
- **Structured Text fields**: the metadata will be appended at the end of the [last `span` node](/docs/structured-text/dast.md#span) contained in the first [`paragraph`](/docs/structured-text/dast.md#paragraph), [`heading`](/docs/structured-text/dast.md#heading), [`list`](/docs/structured-text/dast.md#list), [`code`](/docs/structured-text/dast.md#code) or [`blockquote`](/docs/structured-text/dast.md#blockquote) node found in the document;
- **The** `**alt**` **field of any** `**Upload**` **referenced in the response:** the metadata will be appended at the end of the original string;

We've been conservative in deciding in which cases to embed hidden metadata, so your website should not break when enabling Content Link, but still, it's crucial that you test it thoroughly. If you encounter any problem, please refer to the **Troubleshooting** section of this guide.

## Enabling Content Link

To leverage the powerful capabilities of Content Link, you can follow these straightforward steps to ensure its seamless integration into your workflow.

#### Step 1: Request activation of Content Link

If you're an Enterprise customer of DatoCMS and a paid customer of Vercel, please contact us at [support@datocms.com](mailto:support@datocms.com). By providing the ID of the project where you want to enable Content Link, we'll be able to switch on the feature.

#### Step 2: Add the Content Link headers to your GraphQL API calls

To communicate to DatoCMS's Content Delivery API that you want Content Link metadata included in your responses, **you must add two headers to your API requests**:

- `X-Visual-Editing` is the header that enables the feature, and it must be set to `vercel-v1`;
- `X-Base-Editing-Url` is required to generate the right link to your DatoCMS project: it's the base URL of the project on the CMS, and unless you're using a custom domain, it looks like `https://example-project.admin.datocms.com`

Here is an example of how to add the headers when using the standard `fetch` API. In this case, we're going to enable Content Link on every preview deployment of the website:

```javascript
const visualEditingHeaders =
  process.env.VERCEL_ENV === 'preview'
    ? {
        'X-Visual-Editing': 'vercel-v1',
        'X-Base-Editing-Url': 'https://<YOUR-PROJECT-NAME>.admin.datocms.com',
      }
    : {};

const response = await fetch('https://graphql-staging.datocms.com/', {
  method: 'POST',
  headers: {
    Authorization: 'Bearer <API-KEY>',
    ...visualEditingHeaders,
  },
  body: JSON.stringify({
    query,
    variables,
  }),
});
```

How you declare the headers depends on the client you're using: please refer to your GraphQL/HTTP client documentation for more info.

## Troubleshooting

Although, in general, your website should not break when you enable Content Link, there may be special situations that can cause problems.

#### Editable elements have the wrong style

In some cases (e.g. when using letter-spacing in CSS), the editable elements could have unexpected styles. In those cases, you can use the functions available in the [@vercel/stega](https://www.npmjs.com/package/@vercel/stega) library to extract the content and remove steganography data.

Install the library

Terminal window

```bash
npm i @vercel/stega
```

Then you can use a library helper like this:

```javascript
import { vercelStegaSplit } from '@vercel/stega';

const { cleaned, encoded } = vercelStegaSplit(text);
```

#### Links appear for the wrong element

If the wrong element is highlighted when you enable Content Link, you can add the `data-vercel-edit-target` attribute to one of the parent elements:

```html
<div class="card" data-vercel-edit-target>
  <h1>{editableTitle}</h1>
  <div>Some more text</div>
</div>
```

That way, even if the editable element is the `<h1>`, you will have the full card highlighted.

## Inspecting Content Link data

Since the metadata added in the GraphQL response is encoded into invisible Unicode characters, it can be quite tricky to examine it.

Fortunately, when you enable Content Link via the Vercel toolbar, a `data-vercel-edit-info` attribute is added to every element that contains steganography data:

(Video content)

---

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
  <head>
    <title>503 first byte timeout</title>
  </head>
  <body>
    <h1>Error 503 first byte timeout</h1>
    <p>first byte timeout</p>
    <h3>Error 54113</h3>
    <p>Details: cache-dub4392-DUB 1762300907 1190757984</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

# Custom Domain Name for Assets (Enterprise only)

## What are custom asset domains?

Since [DatoCMS is a headless CMS](https://www.datocms.com/academy/headless-cms/how-a-headless-cms-works.md), your website's domain and URL structure are typically up to you to define, like `example.com/posts`. However, your project's "assets" (uploaded files like images and PDFs) are an exception to this rule. Normally, they are hosted on a domain name shared by all our customers.

DatoCMS projects on the Professional and Free plans use the shared domain name `www.datocms-assets.com` to serve assets to website visitors. The assets are hosted on our cloud storage and cached by our image CDN partner, [Imgix](https://www.imgix.com/), with an example public URL like `https://www.datocms-assets.com/205/1603211008-whitefulllogo.png`.

[**Enterprise customers**](https://www.datocms.com/enterprise-headless-cms.md) **can (optionally) use their own cloud storage and domain name instead,** resulting in prettier URLs like `https://example.com/images/whitefulllogo.png`.

#### Requirements

1.  Custom domain names are **only available for DatoCMS Enterprise customers**, not Professional or Free users. See our [plan comparison](https://www.datocms.com/pricing.md).
2.  Assets must be hosted on a **customer-provided** [**AWS S3**](https://www.datocms.com/marketplace/enterprise/aws-s3.md)**,** [**Azure Blob**](https://www.datocms.com/marketplace/enterprise/azure-blob-storage.md)**,** [**Google Cloud Storage**](https://www.datocms.com/marketplace/enterprise/google-cloud-storage.md)**,** or [**Cloudflare R2**](https://www.datocms.com/marketplace/enterprise/cloudflare-r2.md) bucket under a **separate subscription** directly with that cloud vendor, existing or new.
3.  An [**Imgix Premium Plan with custom SSL**](https://docs.imgix.com/en-US/getting-started/setup/creating-sources/advanced-settings#custom-domains) is also required. This will also be a **separate account** you subscribe to directly through Imgix.

#### Pricing

This service is included as part of DatoCMS Enterprise plans. However, you may need to separately subscribe to and pay for:

- Cloud storage costs with an external provider
- An Imgix premium plan with custom SSL
- Bandwidth charges to/from the cloud storage (their ingress/egress fees)
- Bandwidth charges from Imgix to your visitors (depending on your plan with them)

#### Additional Info

- At this time, we cannot provide custom domain names for assets on our own cloud storage. You must use one of the external storage options and an Imgix premium plan. Please see [Requirements](/docs/custom-asset-domains.md#requirements) above for details.
- Your editors' user experience inside the media area should not change. This is a backend configuration change only.
- If you already have existing assets (uploaded files) in your media area, we can help you migrate them over to a new storage service.
- Nearly all [Imgix URL parameters](https://docs.imgix.com/en-US/apis/rendering/overview) will continue to work as before, with the notable exception of the [DatoCMS-specific `skip-default-optimizations` parameter](/docs/asset-api/asset-cdn-settings.md#automatic-image-optimization). Instead, you can [specify your own default parameters](https://docs.imgix.com/en-US/getting-started/setup/creating-sources/advanced-settings#default-parameters) on your Imgix source.

### Next steps: Enabling Custom Domains

1.  If you're not already on an Enterprise plan, please see our [pricing page](https://www.datocms.com/pricing.md) for details and then [contact our Sales team](https://www.datocms.com/contact.md) to sign up.
2.  Then, please choose a cloud storage provider and follow instructions below to set it up as your new Imgix asset source:
    - [AWS S3 bucket](https://www.datocms.com/marketplace/enterprise/aws-s3.md)
    - [Azure Blob](https://www.datocms.com/marketplace/enterprise/azure-blob-storage.md)
    - [Google Cloud Storage](https://www.datocms.com/marketplace/enterprise/google-cloud-storage.md)
    - [Cloudflare R2](https://www.datocms.com/marketplace/enterprise/cloudflare-r2.md)

3.  Once step 2 is complete, please email [support@datocms.com](mailto:support@datocms.com) so we can help you finalize the setup.

### **Questions?**

If anything is unclear, please reach out to us at [support@datocms.com](mailto:support@datocms.com) for technical assistance. You can also [contact our Sales team](https://www.datocms.com/contact.md) for inquiries about Enterprise pricing.

---

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
  <head>
    <title>503 first byte timeout</title>
  </head>
  <body>
    <h1>Error 503 first byte timeout</h1>
    <p>first byte timeout</p>
    <h3>Error 54113</h3>
    <p>Details: cache-dub4342-DUB 1762300894 2409328175</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
  <head>
    <title>503 first byte timeout</title>
  </head>
  <body>
    <h1>Error 503 first byte timeout</h1>
    <p>first byte timeout</p>
    <h3>Error 54113</h3>
    <p>Details: cache-dub4362-DUB 1762300896 2211002157</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

# SvelteKit + DatoCMS Overview

Svelte is a frontend framework built around a simple idea: avoid the complexity of a Virtual DOM and compile components to responsive vanilla JS. SvelteKit is Svelte's full-stack framework: it sports file-based routing, API endpoints, and zero-configuration deployments on multiple providers (adapters for Vercel, Netlify and Cloudflare are provided and even used transparently for a great developer experience).

Svelte and SvelteKit together let you get started quickly with a set of sane defaults upon which you can build.

DatoCMS is the perfect companion to SvelteKit since it offers content, images and videos on a globally-distributed CDN. With this combo, you can have an **infinitely scalable website, ready to handle prime-time TV traffic spikes at a fraction of the regular cost.**

In the next paragraphs, will see how easy it is to combine Svelte with DatoCMS.

### Fetching content from our GraphQL API

Svelte and SvelteKit invites developers to leverage [existing standard APIs](https://kit.svelte.dev/docs/web-standards). [`fetch` API](https://kit.svelte.dev/docs/web-standards#fetch-apis) is the conventional way of retrieving data from servers.

Let's start by installing `@datocms/cda-client`, a lightweight, TypeScript-ready package that offers various helpers around the native Fetch API to perform GraphQL requests towards [DatoCMS Content Delivery API](/docs/content-delivery-api/api-endpoints.md):

Terminal window

```bash
npm install --save @datocms/cda-client
```

We can now create a function we can use in all of our components that need to fetch content from DatoCMS: Create a new directory called `lib`, and inside of it, add a file called `datocms.js`:

src/lib/datocms.js

```javascript
import { env as privateEnv } from '$env/dynamic/private';
import { executeQuery } from '@datocms/cda-client';

export const performRequest = (query, options) => {
  return executeQuery(query, {
    ...options,
    token: privateEnv.PRIVATE_DATOCMS_CDA_TOKEN,
  });
};
```

Make sure you set `PRIVATE_DATOCMS_CDA_TOKEN` as an actual API token of your DatoCMS project. You can create a new one under "Settings > API Tokens".

(Video content)

Loading data is achieved in SvelteKit by creating a `+page.server.js` file beside the `+page.svelte` component.

The `load` function exported from `+page.js` is called when the page is loaded. Here we can use our `executeQuery` function to load content from DatoCMS:

src/routes/+page.server.ts

```javascript
const query = `
  query HomeQuery {
    blogPost { title }
  }
`;

export const load = () => {
  return executeQuery(query);
};
```

The data returned by the `load` function will be available to the page/layout component a `data` prop:

src/routes/+page.svelte

```html
<script>
  export let data;
</script>

<article>
  <h1>{{ data.blogPost.title }}</h1>
</article>
```

You can learn everything you need regarding how to build GraphQL queries on our [Content Delivery API documentation](/docs/content-delivery-api.md).

---

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
  <head>
    <title>503 first byte timeout</title>
  </head>
  <body>
    <h1>Error 503 first byte timeout</h1>
    <p>first byte timeout</p>
    <h3>Error 54113</h3>
    <p>Details: cache-dub4329-DUB 1762301024 3909648534</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
  <head>
    <title>503 first byte timeout</title>
  </head>
  <body>
    <h1>Error 503 first byte timeout</h1>
    <p>first byte timeout</p>
    <h3>Error 54113</h3>
    <p>Details: cache-dub4393-DUB 1762301031 2442877458</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
  <head>
    <title>503 first byte timeout</title>
  </head>
  <body>
    <h1>Error 503 first byte timeout</h1>
    <p>first byte timeout</p>
    <h3>Error 54113</h3>
    <p>Details: cache-dub4356-DUB 1762301032 1258251725</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
  <head>
    <title>503 first byte timeout</title>
  </head>
  <body>
    <h1>Error 503 first byte timeout</h1>
    <p>first byte timeout</p>
    <h3>Error 54113</h3>
    <p>Details: cache-dub4368-DUB 1762301034 442012748</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
  <head>
    <title>503 first byte timeout</title>
  </head>
  <body>
    <h1>Error 503 first byte timeout</h1>
    <p>first byte timeout</p>
    <h3>Error 54113</h3>
    <p>Details: cache-dub4331-DUB 1762301037 3072112047</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
  <head>
    <title>503 first byte timeout</title>
  </head>
  <body>
    <h1>Error 503 first byte timeout</h1>
    <p>first byte timeout</p>
    <h3>Error 54113</h3>
    <p>Details: cache-dub4399-DUB 1762301039 2745943586</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
  <head>
    <title>503 first byte timeout</title>
  </head>
  <body>
    <h1>Error 503 first byte timeout</h1>
    <p>first byte timeout</p>
    <h3>Error 54113</h3>
    <p>Details: cache-dub4398-DUB 1762300903 531709522</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

# Remix + DatoCMS Overview

Remix is an exceptional tool for building modern frontend applications with the power of React. It lets you get started without having to write much boilerplate code and with a set of sane defaults from which you can build upon.

Remix fully supports edge functions and advanced caching mechanisms, and Remix projects can be deployed on many different hostings, such as [Netlify](https://netlify.com/), [Vercel](https://vercel.com/solutions/nextjs) and [Cloudflare Pages](https://pages.cloudflare.com/).

DatoCMS is the perfect companion to Remix since it offers content, images, and videos on a globally-distributed CDN. With this combo, you can have an **infinitely scalable website, ready to handle prime-time TV traffic spikes, at a fraction of the regular cost.**

Our [marketplace](https://www.datocms.com/marketplace/starters.md) features different demo projects on Remix, so you can learn and get started easily:

[

(Image content)

Remix Blog

Try this demo »

](https://www.datocms.com/marketplace/starters/remix-blog-example-template.md)

### Fetching content from our GraphQL API

First, use the Remix wizard to set up a new project. Read more about your options on the [Remix docs](https://remix.run/docs/en/v1#getting-started).

Terminal window

```bash
npx create-remix@latest
```

The way you fetch content from external sources in Remix is by exporting a `loader` function from your route files. Inside the React component you can then retrieve that data with a special hook called `useLoaderData`:

app/routes/index.jsx

```javascript
import { useLoaderData } from 'remix';

export async function loader() => {
  return { foo: 'bar' };
};

export default Homepage(props) {
  const { foo } = useLoaderData();

  // ...
}
```

Inside the `loader` function, we can use any Node.JS GraphQL client (or HTTP client, really) to fetch content from the [Content Delivery API](/docs/content-delivery-api.md) of DatoCMS.

Let's start by installing `@datocms/cda-client`, a lightweight, TypeScript-ready package that offers various helpers around the native Fetch API to perform GraphQL requests towards [DatoCMS Content Delivery API](/docs/content-delivery-api/api-endpoints.md):

Terminal window

```bash
npm install --save @datocms/cda-client
```

> [!PROTIP] Pro tip: Top 5 JavaScript GraphQL Client Libraries
> Our `@datocms/cda-client` is not the only option. This [blog post](https://www.datocms.com/blog/best-javascript-graphql-clients.md) ranks the best JavaScript GraphQL client libraries, helping you choose the right tool based on your project’s specific needs and ensuring efficient and optimized GraphQL data fetching.

We can now create a function we can use in all of our components that need to fetch content from DatoCMS: Create a new directory called `lib`, and inside of it, add a file called `datocms.js`:

lib/datocms.js

```javascript
import { executeQuery } from '@datocms/cda-client';

export const load = (query, options) => {
  return executeQuery(query, {
    ...options,
    token: process.env.DATOCMS_READONLY_TOKEN,
    environment: process.env.DATOCMS_ENVIRONMENT,
  });
};
```

We want to store inside environment variables both the API token and the name of the DatoCMS environment we want to fetch content from to hide them from the code, and so that we'll be able to modify them later without touching the code. Read [this tutorial](https://remix.run/docs/en/v1/guides/envvars#server-environment-variables) to know more on how to set server environment variables in Remix.

To create an API token for a DatoCMS project, go to `Settings > API Tokens` section of your DatoCMS backend. Make sure to only give it permissions to access the (read-only) Content Delivery API.

(Video content)

It's time to use our function in a real page! Open up `app/routes/index.jsx` — which is the route that renders the homepage — and define the `loader` function and a basic page component:

```jsx
import { useLoaderData } from "remix";
import { load } from "~/lib/datocms";

const HOMEPAGE_QUERY = `query HomePage($limit: IntType) {
  posts: allBlogPosts(first: $limit) {
    title
  }
}`;

export async function loader() => {
  return load(HOMEPAGE_QUERY, {
    variables: { limit: 10 }
  });
};

export default function Home() {
  const { posts } = useLoaderData();

  return <div>{JSON.stringify(posts, null, 2)}</div>;
}
```

The `HOMEPAGE_QUERY` is the GraphQL query, and of course it depends on the models available in your specific DatoCMS project. You can learn everything you need regarding how to build GraphQL queries on our [Content Delivery API documentation](/docs/content-delivery-api.md).

For more information on what to do next, we recommend reading the next sections of this integration guide!

---

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
  <head>
    <title>503 first byte timeout</title>
  </head>
  <body>
    <h1>Error 503 first byte timeout</h1>
    <p>first byte timeout</p>
    <h3>Error 54113</h3>
    <p>Details: cache-dub4394-DUB 1762301047 2240721119</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
  <head>
    <title>503 first byte timeout</title>
  </head>
  <body>
    <h1>Error 503 first byte timeout</h1>
    <p>first byte timeout</p>
    <h3>Error 54113</h3>
    <p>Details: cache-dub4348-DUB 1762301047 1920413906</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
  <head>
    <title>503 first byte timeout</title>
  </head>
  <body>
    <h1>Error 503 first byte timeout</h1>
    <p>first byte timeout</p>
    <h3>Error 54113</h3>
    <p>Details: cache-dub4376-DUB 1762301049 1369377948</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
  <head>
    <title>503 first byte timeout</title>
  </head>
  <body>
    <h1>Error 503 first byte timeout</h1>
    <p>first byte timeout</p>
    <h3>Error 54113</h3>
    <p>Details: cache-dub4359-DUB 1762301052 648877616</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
  <head>
    <title>503 first byte timeout</title>
  </head>
  <body>
    <h1>Error 503 first byte timeout</h1>
    <p>first byte timeout</p>
    <h3>Error 54113</h3>
    <p>Details: cache-dub4338-DUB 1762301054 391080986</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
  <head>
    <title>503 first byte timeout</title>
  </head>
  <body>
    <h1>Error 503 first byte timeout</h1>
    <p>first byte timeout</p>
    <h3>Error 54113</h3>
    <p>Details: cache-dub4326-DUB 1762301062 626485430</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
  <head>
    <title>503 first byte timeout</title>
  </head>
  <body>
    <h1>Error 503 first byte timeout</h1>
    <p>first byte timeout</p>
    <h3>Error 54113</h3>
    <p>Details: cache-dub4377-DUB 1762301063 2857791260</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

# Agency Partner Program Overview

The DatoCMS Partner Program is designed to offer your agency the support it needs to expand your business, while using a headless CMS that works best for your customers.

## Enrollment requirements

To be a part of the program, is necessary to comply with a few requirements. You can learn more in the [Enrollment](/docs/agency-partner-program/enrollment-requirements.md) section of this guide.

## Benefits

Enrolling in the program gives your agency access to exclusive advantages and benefits:

- **Special plans and discounts, both for you and your clients:** have access to customized plans, designed specifically for the needs of agencies, with the ability to [make them also available to your clients' accounts](/docs/agency-partner-program/partners-dashboard.md#enabling-special-plans-to-clients);
- **Automatic access to your clients' projects:** assign your staff members a [special "developer" role](/docs/agency-partner-program/partners-dashboard.md#developer-and-projects-manager-roles), allowing them to have [full access to all your — and your clients' — projects](/docs/agency-partner-program/partners-dashboard.md#automatic-access-to-your-clients-projects), even when they reside on separate accounts;
- **Dedicated partner account manager:** gain access to constant support from our Partner Team to tackle any questions you (or your customers) might have;
- **Co-marketing opportunities:** our marketing relies on real success stories — and we know that our Partners will provide some great ones. We’ll promote your projects, create case studies and articles, and feature your logo on our website;
- **DatoCMS partner listing:** we’ll get you in front of new potential clients by featuring your agency and your projects as part of our [Partners](https://www.datocms.com/partners.md) page. Teams in need of development resources go there to find the right level of support for their projects.

You can explore the effect these benefits have on your DatoCMS dashboard in the [Partners dashboard](/docs/agency-partner-program/partners-dashboard.md) section of this guide.

> [!POSITIVE] Connecting your agency to your clients' accounts
> Many of the benefits that you will be able to pass on to your customers once you're part of the program come through the concept of [agency mandates](/docs/agency-partner-program/agency-mandates.md), which will be covered in the next section of this guide.

---

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
  <head>
    <title>503 first byte timeout</title>
  </head>
  <body>
    <h1>Error 503 first byte timeout</h1>
    <p>first byte timeout</p>
    <h3>Error 54113</h3>
    <p>Details: cache-dub4372-DUB 1762301065 206671556</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

# Partners dashboard

Once you become part of our Agency Partner Program, a number of new features become available in your organization dashboard. Let's see them in detail.

### **Automatic access to your clients' projects**

Once you [add a new client to your agency organization](/docs/agency-partner-program/agency-mandates.md), your staff members will have complete access to the client's projects. This eliminates the need to individually invite each staff member to the client's organization or occupy additional collaborator seats.

In the **Projects** section of your dashboard, you can easily distinguish your client's projects from the ones you own, as they're marked with the name of the client organization:

(Video content)

### Enabling special plans to clients

Once you [set up an agency mandate](/docs/agency-partner-program/agency-mandates.md) with a client, you can also unlock exclusive pricing opportunities for them:

- If they purchase one of the [public DatoCMS plans](https://www.datocms.com/pricing.md), **a special discount gets automatically applied during the checkout process**, without having to insert any referral code. Be aware that the discount applies only to the regular plan price, and not on monthly overages (extra collaborators, API calls, traffic, etc.);
- You can also **enable special plans on their organization**. These plans are only available if you are enrolled in the Agency Partner Program.

In the **Clients** section of your dashboard, you can monitor the current plan active on all your client's organizations, and activate special plans.

Once activated, special plans are immediately available for purchase on the client's end:

(Video content)

### Developer and Projects Manager roles

In addition to the regular [Owner and Viewer roles](/docs/general-concepts/organizations-and-accounts.md#organization-members) available to every organization, two new roles can be applied to the members of your organization:

As the name suggests, **Developer** can be an useful role for developers/content creators of your staff, so that you don't have to use collaborators seats on every project for them. They can enter all the projects available in the organization — either owned by your org, or by one of your clients [connected with a mandate](/docs/agency-partner-program/agency-mandates.md) — with full privilege, but cannot perform any action inside the organization itself (ie. they cannot create new projects, delete existing ones, manage members, etc.)

**Projects managers** have the same priviledges of Developers, but have also complete control over the projects owned by the organization. They can create new projects, manage settings of existing projects, and even delete them.

The table below summarizes the available authorizations for each role:

| Permission | Owner | Projects Manager | Developer | Viewer |
| ---------- | ----- | ---------------- | --------- | ------ |

| Read-only access to everything | ✅ | ✅ | ✅ | ✅ |
| Enter all projects with full proviledges (client's projects included) | ✅ | ✅ | ✅ | |
| Create/edit/delete projects | ✅ | ✅ | | |
| Transfer projects | ✅ | ✅ | | |
| Manage members/roles | ✅ | | | |
| Manage plan and billing | ✅ | | | |
| Any other action | ✅ | | | |

---

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
  <head>
    <title>503 first byte timeout</title>
  </head>
  <body>
    <h1>Error 503 first byte timeout</h1>
    <p>first byte timeout</p>
    <h3>Error 54113</h3>
    <p>Details: cache-dub4342-DUB 1762301070 2410089396</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

# Public Profile and Case studies

#### Create your records

Once you're part of the program, a new "**Agency Profile**" link is available in your dashboard. By clicking on it, you will enter **a special DatoCMS project** where you'll be able to manage your agency profile and case studies.

> [!POSITIVE] It will be our responsibility to share your profile!
> Please be aware that we may feature your quotes, profile, or projects on our social media channels, newsletter, or for promotional purposes.

The process of submitting the profile and case studies for review will be guided by contextual help:

(Video content)

Throughout your stay in the partner program, you can keep your profile up-to-date, and edit or add new case studies at any time. In fact, you are strongly advised to do so! Any changes you make to the content post-publication, will require an explicit approval step by our team, so that we can verify the appropriateness of the changes made.

## Preview your draft content

From the moment you save your record for the first time, you can get a glimpse of the final outcome of your pages. In the right-hand menu of the record page, there's a link to preview the draft version or you can even have a full responsive preview from the Sidebar Panel. You can easily edit, save, and view the results in real-time.

(Video content)

## Request for review to go live

Due to security concerns, we cannot allow you to publish any content on our website without a review from our team. That's why we utilize Workflows to enable editing and requesting reviews.

When you're satisfied with your content, change the status from **Edit** to **Request a Review from DatoCMS**. Our team will be notified, and you'll receive a notification when your content goes live.

[(Image content)](https://www.datocms-assets.com/205/1682507672-cleanshot-20230426-1310-000373-google-chrome.png?auto=format&fit=max&w=2000)

Please note that we never alter your content. If anything appears to be non-compliant or suspicious, we will get in touch with you as soon as possible.

## Leave a quote, if you wish

On your profile page, there's a dedicated section for adding quotes. If you choose to share your thoughts, they will be instantly published on our [customers' page.](https://www.datocms.com/wall.md)

---

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
  <head>
    <title>503 first byte timeout</title>
  </head>
  <body>
    <h1>Error 503 first byte timeout</h1>
    <p>first byte timeout</p>
    <h3>Error 54113</h3>
    <p>Details: cache-dub4381-DUB 1762300911 2997180694</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

# DatoCMS Content Management API Utilities

Take a look at the full [API documentation](https://www.datocms.com/docs/content-management-api) for examples!

## Field Types

This library provides comprehensive TypeScript type definitions and utilities for all DatoCMS field types. Each field type includes type guards, validation functions, localization support, and editor appearance configurations.

### What's available

Every field type follows a consistent pattern providing:

- **Field value types**: TypeScript definitions for the field's data structure
- **Type guards**: Functions to validate field values at runtime
- **Localization support**: Utilities for handling localized field variants
- **Validation types**: Supported validators for the field type
- **Appearance configuration**: Editor types and their configuration options

**Example: `lat_lon` Field Type**

<details>
<summary>View example</summary>

```typescript
import { isLatLonFieldValue, isLocalizedLatLonFieldValue } from '@datocms/cma-client';
import type {
  LatLonFieldValue,
  LatLonFieldValidators,
  LatLonFieldAppearance,
} from '@datocms/cma-client';

// Field value type - object with latitude/longitude or null
const value: LatLonFieldValue = { latitude: 45.4642, longitude: 9.19 };

// Type guard functions for validation
if (isLatLonFieldValue(someValue)) {
  // someValue is guaranteed to be { latitude: number; longitude: number } | null
}

if (isLocalizedLatLonFieldValue(localizedValue)) {
  // localizedValue is a localized lat/lon field
}

// Validator and appearance types available for type-safe configuration
type Validators = LatLonFieldValidators;
type Appearance = LatLonFieldAppearance;
```

</details>

### Context-Dependent field types

Some field types have different value formats depending on the API context (request vs response) or query parameters:

#### Request vs Response variations

**File and Gallery fields** have different type requirements for API requests versus responses:

<details>
<summary>View example</summary>

```typescript
import {
  FileFieldValue,
  FileFieldValueInRequest,
  GalleryFieldValue,
  GalleryFieldValueInRequest,
  // Type guards for runtime validation
  isFileFieldValue,
  isFileFieldValueInRequest,
  isGalleryFieldValue,
  isGalleryFieldValueInRequest,
} from '@datocms/cma-client';

// API Response format - all metadata fields present with defaults
const fileResponse: FileFieldValue = {
  upload_id: '12345',
  alt: null, // Always present (default: null)
  title: null, // Always present (default: null)
  custom_data: {}, // Always present (default: {})
  focal_point: null, // Always present (default: null)
};

// API Request format - metadata fields are optional
const fileRequest: FileFieldValueInRequest = {
  upload_id: '12345',
  // alt, title, custom_data, focal_point are optional
};

// Runtime validation for different contexts
if (isFileFieldValueInRequest(someFileValue)) {
  // someFileValue has optional metadata fields
}

if (isGalleryFieldValue(someGalleryValue)) {
  // someGalleryValue is array of files with all metadata present
}
```

</details>

#### "Nested Mode" Response variations

**Block-containing fields** (`structured_text`, `single_block`, `rich_text`) support different block representations for regular responses, for ["Nested Mode" responses](https://www.datocms.com/docs/content-management-api/resources/item#api-response-modes-regular-vs-nested), and for requests:

<details>
<summary>View example</summary>

```typescript
import {
  StructuredTextFieldValue,
  StructuredTextFieldValueInRequest,
  StructuredTextFieldValueInNestedResponse,
  // Type guards for all variations (also available for single_block and rich_text)
  isStructuredTextFieldValue,
  isStructuredTextFieldValueInRequest,
  isStructuredTextFieldValueInNestedResponse,
} from '@datocms/cma-client';

// Regular response - blocks as string IDs
const standard: StructuredTextFieldValue = {
  document: {
    type: 'root',
    children: [
      {
        type: 'block',
        // String ID reference
        item: 'IdMLV2GJTXyQ0Bfns7R4IQ',
      },
    ],
  },
};

// Nested Mode response (?nested=true) - blocks as full objects
const nested: StructuredTextFieldValueInNestedResponse = {
  document: {
    type: 'root',
    children: [
      {
        type: 'block',
        // Always full block object
        item: {
          id: 'IdMLV2GJTXyQ0Bfns7R4IQ',
          type: 'item',
          attributes: {
            /* ... */
          },
          relationships: {
            /* ... */
          },
        },
      },
    ],
  },
};

// Request format - flexible block representation
const request: StructuredTextFieldValueInRequest = {
  document: {
    type: 'root',
    children: [
      {
        type: 'block',
        // Can be string ID, to keep block unchanged...
        item: 'FicV5CxCSQ6yOrgfwRoiKA',
      },
      {
        type: 'block',
        // ...or full block object (to create new blocks or update existing ones)
        item: {
          type: 'item',
          attributes: {
            /* ... */
          },
          relationships: {
            /* ... */
          },
        },
      },
    ],
  },
};

// Runtime validation for different contexts
if (isStructuredTextFieldValueInNestedResponse(someStructuredText)) {
  // someStructuredText has blocks as full objects
}

if (isStructuredTextFieldValueInRequest(requestData)) {
  // requestData allows flexible block representations
}
```

</details>

These variants ensure type safety across different API contexts while maintaining the same conceptual data structure. All localized variants also have corresponding type guards (e.g., `isLocalizedStructuredTextFieldValueInRequest`, `isLocalizedStructuredTextFieldValueInNestedResponse`, etc.).

**TypeScript Generics Support:** For maximum type safety, all field value types and type guards for block-containing fields accept [`ItemTypeDefinition` generics](https://www.datocms.com/docs/content-management-api/resources/item#type-safe-development-with-typescript) to provide precise typing for your specific schema:

<details>
<summary>View example</summary>

```typescript
import type { MyArticle, MyArticleSection } from './schema';

// Fully typed structured text with specific block types
const content: StructuredTextFieldValueInRequest<MyArticleSection> = {
  document: {
    type: 'root',
    children: [
      /* ... */
    ],
  },
};

// Type guard with generic for precise validation
if (isStructuredTextFieldValueInNestedResponse<MyArticleSection>(value)) {
  // value is now typed with your specific block schema
}
```

</details>

## Block Processing Utilities

### Inspecting Records and Blocks

The `inspectItem()` function provides a visual, tree-structured representation of DatoCMS records in the console, making it easier to debug and understand complex content structures.

#### inspectItem()

Formats a DatoCMS item (record or block) as a visual tree structure, showing all fields with proper formatting for each field type. Particularly useful for debugging nested structures like modular content and structured text.

<details>
<summary>View details</summary>

**TypeScript Signature:**

```typescript
function inspectItem(item: Item, options?: InspectItemOptions): string;

type InspectItemOptions = {
  maxWidth?: number; // Maximum width for text fields before truncation (default: 80)
};
```

**Parameters:**

- `item`: Any DatoCMS item, including records, blocks, or items in create/update format
- `options`: Optional configuration object
  - `maxWidth`: Maximum characters to display for text fields before truncating with "..."

**Returns:** A formatted string representation of the item as a tree structure

**Usage Example:**

```typescript
import { inspectItem } from '@datocms/cma-client';

const record = await client.items.find('MgCNaAI0RxSG8CA9sDXCHg');
console.log(inspectItem(record));

// Output:
// Item "MgCNaAI0RxSG8CA9sDXCHg" (item_type: "bJse85JFR0GbA37ey6kA1w")
// ├─ title: "My Blog Post"
// ├─ slug: "my-blog-post"
// └─ content:
//    ├─ en: "This is the English content..."
//    └─ it: "Questo è il contenuto italiano..."
```

</details>

### Creating and Duplicating Blocks

#### buildBlockRecord()

Converts a block data object into the proper format for API requests.

<details>
<summary>View details</summary>

**TypeScript Signature:**

```typescript
function buildBlockRecord<D extends ItemTypeDefinition>(
  body: ItemUpdateSchema<ToItemDefinitionInRequest<D>>,
): NewBlockInRequest<ToItemDefinitionInRequest<D>>;
```

**Parameters:**

- `body`: Block data in update schema format

**Returns:** Formatted block record ready for API requests

</details>

#### duplicateBlockRecord()

Creates a deep copy of a block record, including all nested blocks, removing IDs to create new instances.

<details>
<summary>View details</summary>

**TypeScript Signature:**

```typescript
async function duplicateBlockRecord<D extends ItemTypeDefinition>(
  existingBlock: ItemWithOptionalIdAndMeta<ToItemDefinitionInNestedResponse<D>>,
  schemaRepository: SchemaRepository,
): Promise<NewBlockInRequest<ToItemDefinitionInRequest<D>>>;
```

**Parameters:**

- `existingBlock`: The block to duplicate
- `schemaRepository`: Repository for schema lookups

**Returns:** New block record without IDs, ready to be created

</details>

### Recursive Block Operations

DatoCMS supports three field types that can contain blocks: Modular Content (arrays of blocks), Single Block fields, and Structured Text (rich-text with embedded blocks). These functions abstract away the differences between field types and can traverse blocks recursively, processing nested blocks within blocks. They require a `SchemaRepository` instance to look up field definitions for nested blocks.

#### visitBlocksInNonLocalizedFieldValue()

Visit every block in a non-localized field value recursively, including blocks nested within other blocks.

<details>
<summary>View details</summary>

**TypeScript Signature:**

```typescript
async function visitBlocksInNonLocalizedFieldValue(
  nonLocalizedFieldValue: unknown,
  fieldType: string,
  schemaRepository: SchemaRepository,
  visitor: (item: BlockInRequest, path: TreePath) => void | Promise<void>,
): Promise<void>;
```

**Parameters:**

- `nonLocalizedFieldValue`: The non-localized field value
- `fieldType`: The type of DatoCMS field (ie. `string`, `rich_text`, etc.)
- `schemaRepository`: Repository for caching schema lookups
- `visitor`: Function called for each block (including nested)
</details>

#### mapBlocksInNonLocalizedFieldValue()

Transform all blocks in a non-localized field value recursively, including nested blocks.

<details>
<summary>View details</summary>

**TypeScript Signature:**

```typescript
async function mapBlocksInNonLocalizedFieldValue(
  nonLocalizedFieldValue: unknown,
  fieldType: string,
  schemaRepository: SchemaRepository,
  mapper: (item: BlockInRequest, path: TreePath) => BlockInRequest | Promise<BlockInRequest>,
): Promise<unknown>;
```

**Parameters:**

- `nonLocalizedFieldValue`: The non-localized field value
- `fieldType`: The type of DatoCMS field (ie. `string`, `rich_text`, etc.)
- `schemaRepository`: Repository for caching schema lookups
- `mapper`: Function that transforms each block

**Returns:** New field value

</details>

#### filterBlocksInNonLocalizedFieldValue()

Filter blocks recursively, removing blocks at any nesting level that don't match the predicate.

<details>
<summary>View details</summary>

**TypeScript Signature:**

```typescript
async function filterBlocksInNonLocalizedFieldValue(
  nonLocalizedFieldValue: unknown,
  fieldType: string,
  schemaRepository: SchemaRepository,
  predicate: (item: BlockInRequest, path: TreePath) => boolean | Promise<boolean>,
): Promise<unknown>;
```

**Parameters:**

- `nonLocalizedFieldValue`: The non-localized field value to filter
- `fieldType`: The type of DatoCMS field (ie. `string`, `rich_text`, etc.)
- `schemaRepository`: Repository for caching schema lookups
- `predicate`: Function that tests each block

**Returns:** New field value with filtered blocks

**Usage Example:**

```typescript
// Remove all video blocks at any nesting level
const noVideos = await filterBlocksInNonLocalizedFieldValue(
  schemaRepository,
  field,
  fieldValue,
  (block) => block.relationships.item_type.data.id !== 'video_block',
);
```

</details>

#### findAllBlocksInNonLocalizedFieldValue()

Find all blocks that match the predicate, searching recursively through nested blocks.

<details>
<summary>View details</summary>

**TypeScript Signature:**

```typescript
async function findAllBlocksInNonLocalizedFieldValue(
  nonLocalizedFieldValue: unknown,
  fieldType: string,
  schemaRepository: SchemaRepository,
  predicate: (item: BlockInRequest, path: TreePath) => boolean | Promise<boolean>,
): Promise<Array<{ item: BlockInRequest; path: TreePath }>>;
```

**Parameters:**

- `nonLocalizedFieldValue`: The non-localized field value to search
- `fieldType`: The type of DatoCMS field (ie. `string`, `rich_text`, etc.)
- `schemaRepository`: Repository for caching schema lookups
- `predicate`: Function that tests each block

**Returns:** Array of all matching blocks with their paths

</details>

#### reduceBlocksInNonLocalizedFieldValue()

Reduce all blocks recursively to a single value.

<details>
<summary>View details</summary>

**TypeScript Signature:**

```typescript
async function reduceBlocksInNonLocalizedFieldValue<R>(
  nonLocalizedFieldValue: unknown,
  fieldType: string,
  schemaRepository: SchemaRepository,
  reducer: (accumulator: R, item: BlockInRequest, path: TreePath) => R | Promise<R>,
  initialValue: R,
): Promise<R>;
```

**Parameters:**

- `nonLocalizedFieldValue`: The non-localized field value to reduce
- `fieldType`: The type of DatoCMS field (ie. `string`, `rich_text`, etc.)
- `schemaRepository`: Repository for caching schema lookups
- `reducer`: Function that processes each block
- `initialValue`: Initial accumulator value

**Returns:** The final accumulated value

</details>

#### someBlocksInNonLocalizedFieldValue()

Check if any block (including nested) matches the predicate.

<details>
<summary>View details</summary>

**TypeScript Signature:**

```typescript
async function someBlocksInNonLocalizedFieldValue(
  nonLocalizedFieldValue: unknown,
  fieldType: string,
  schemaRepository: SchemaRepository,
  predicate: (item: BlockInRequest, path: TreePath) => boolean | Promise<boolean>,
): Promise<boolean>;
```

**Parameters:**

- `nonLocalizedFieldValue`: The non-localized field value to test
- `fieldType`: The type of DatoCMS field (ie. `string`, `rich_text`, etc.)
- `schemaRepository`: Repository for caching schema lookups
- `predicate`: Function that tests each block

**Returns:** True if any block matches

</details>

#### everyBlockInNonLocalizedFieldValue()

Check if every block (including nested) matches the predicate.

<details>
<summary>View details</summary>

**TypeScript Signature:**

```typescript
async function everyBlockInNonLocalizedFieldValue(
  nonLocalizedFieldValue: unknown,
  fieldType: string,
  schemaRepository: SchemaRepository,
  predicate: (item: BlockInRequest, path: TreePath) => boolean | Promise<boolean>,
): Promise<boolean>;
```

**Parameters:**

- `nonLocalizedFieldValue`: The non-localized field value to test
- `fieldType`: The type of DatoCMS field (ie. `string`, `rich_text`, etc.)
- `schemaRepository`: Repository for caching schema lookups
- `predicate`: Function that tests each block

**Returns:** True if all blocks match

</details>

## Unified Field Processing (Localized & Non-Localized)

These utilities provide a unified interface for working with DatoCMS field values that may or may not be localized. They eliminate the need for conditional logic when processing fields that could be either localized or non-localized.

#### mapNormalizedFieldValues() / mapNormalizedFieldValuesAsync()

Apply a transformation function to field values, handling both localized and non-localized fields uniformly.

<details>
<summary>View details</summary>

**TypeScript Signatures:**

```typescript
function mapNormalizedFieldValues<TInput, TOutput>(
  localizedOrNonLocalizedFieldValue: TInput | LocalizedFieldValue<TInput>,
  field: Field,
  mapFn: (locale: string | undefined, localeValue: TInput) => TOutput,
): TOutput | LocalizedFieldValue<TOutput>;

async function mapNormalizedFieldValuesAsync<TInput, TOutput>(
  localizedOrNonLocalizedFieldValue: TInput | LocalizedFieldValue<TInput>,
  field: Field,
  mapFn: (locale: string | undefined, localeValue: TInput) => Promise<TOutput>,
): Promise<TOutput | LocalizedFieldValue<TOutput>>;
```

**Parameters:**

- `localizedOrNonLocalizedFieldValue`: The field value (localized or non-localized)
- `field`: The DatoCMS field definition
- `mapFn`: Function to transform each value (receives locale for localized fields, undefined for non-localized)

**Returns:** Transformed value maintaining the same structure

</details>

#### filterNormalizedFieldValues() / filterNormalizedFieldValuesAsync()

Filter field values based on a predicate, handling both localized and non-localized fields.

<details>
<summary>View details</summary>

**TypeScript Signatures:**

```typescript
function filterNormalizedFieldValues<T>(
  localizedOrNonLocalizedFieldValue: T | LocalizedFieldValue<T>,
  field: Field,
  filterFn: (locale: string | undefined, localeValue: T) => boolean,
): T | LocalizedFieldValue<T> | undefined;

async function filterNormalizedFieldValuesAsync<T>(
  localizedOrNonLocalizedFieldValue: T | LocalizedFieldValue<T>,
  field: Field,
  filterFn: (locale: string | undefined, localeValue: T) => Promise<boolean>,
): Promise<T | LocalizedFieldValue<T> | undefined>;
```

**Parameters:**

- `localizedOrNonLocalizedFieldValue`: The field value to filter
- `field`: The DatoCMS field definition
- `filterFn`: Predicate function for filtering

**Returns:** Filtered value or undefined if all filtered out

</details>

#### visitNormalizedFieldValues() / visitNormalizedFieldValuesAsync()

Visit each value in a field, handling both localized and non-localized fields.

<details>
<summary>View details</summary>

**TypeScript Signatures:**

```typescript
function visitNormalizedFieldValues<T>(
  localizedOrNonLocalizedFieldValue: T | LocalizedFieldValue<T>,
  field: Field,
  visitFn: (locale: string | undefined, localeValue: T) => void,
): void;

async function visitNormalizedFieldValuesAsync<T>(
  localizedOrNonLocalizedFieldValue: T | LocalizedFieldValue<T>,
  field: Field,
  visitFn: (locale: string | undefined, localeValue: T) => Promise<void>,
): Promise<void>;
```

**Parameters:**

- `localizedOrNonLocalizedFieldValue`: The field value to visit
- `field`: The DatoCMS field definition
- `visitFn`: Function called for each value
</details>

#### someNormalizedFieldValues() / someNormalizedFieldValuesAsync()

Check if at least one field value passes the test.

<details>
<summary>View details</summary>

**TypeScript Signatures:**

```typescript
function someNormalizedFieldValues<T>(
  localizedOrNonLocalizedFieldValue: T | LocalizedFieldValue<T>,
  field: Field,
  testFn: (locale: string | undefined, localeValue: T) => boolean,
): boolean;

async function someNormalizedFieldValuesAsync<T>(
  localizedOrNonLocalizedFieldValue: T | LocalizedFieldValue<T>,
  field: Field,
  testFn: (locale: string | undefined, localeValue: T) => Promise<boolean>,
): Promise<boolean>;
```

**Parameters:**

- `localizedOrNonLocalizedFieldValue`: The field value to test
- `field`: The DatoCMS field definition
- `testFn`: Predicate function

**Returns:** True if any value passes the test

</details>

#### everyNormalizedFieldValue() / everyNormalizedFieldValueAsync()

Check if all field values pass the test.

<details>
<summary>View details</summary>

**TypeScript Signatures:**

```typescript
function everyNormalizedFieldValue<T>(
  localizedOrNonLocalizedFieldValue: T | LocalizedFieldValue<T>,
  field: Field,
  testFn: (locale: string | undefined, localeValue: T) => boolean,
): boolean;

async function everyNormalizedFieldValueAsync<T>(
  localizedOrNonLocalizedFieldValue: T | LocalizedFieldValue<T>,
  field: Field,
  testFn: (locale: string | undefined, localeValue: T) => Promise<boolean>,
): Promise<boolean>;
```

**Parameters:**

- `localizedOrNonLocalizedFieldValue`: The field value to test
- `field`: The DatoCMS field definition
- `testFn`: Predicate function

**Returns:** True if all values pass the test

</details>

#### toNormalizedFieldValueEntries() / fromNormalizedFieldValueEntries()

Convert field values to/from a normalized entry format for uniform processing.

<details>
<summary>View details</summary>

**TypeScript Signatures:**

```typescript
function toNormalizedFieldValueEntries<T>(
  localizedOrNonLocalizedFieldValue: T | LocalizedFieldValue<T>,
  field: Field,
): NormalizedFieldValueEntry<T>[];

function fromNormalizedFieldValueEntries<T>(
  entries: NormalizedFieldValueEntry<T>[],
  field: Field,
): T | LocalizedFieldValue<T>;

type NormalizedFieldValueEntry<T> = {
  locale: string | undefined;
  value: T;
};
```

**Parameters:**

- `localizedOrNonLocalizedFieldValue`/`entries`: Value to convert from/to
- `field`: The DatoCMS field definition

**Returns:** Normalized entries array or reconstructed field value

**Usage Example:**

```typescript
// Convert to entries for processing
const entries = toNormalizedFieldValueEntries(fieldValue, field);

// Process entries uniformly
const processed = entries.map(({ locale, value }) => ({
  locale,
  value: processValue(value),
}));

// Convert back to field value format
const result = fromNormalizedFieldValueEntries(processed, field);
```

</details>

## SchemaRepository

The `SchemaRepository` class provides a lightweight, in-memory cache for DatoCMS schema entities (item types, fields, fieldsets, and plugins). It helps avoid redundant API calls when working across multiple functions or utilities that require schema lookups.

**Why use it?**

- **Cache once, reuse everywhere**: The first API call stores results in memory; all subsequent lookups are instant.
- **Efficient schema access**: Retrieve entities by ID, API key, or package name without re-fetching.
- **Optimized for block processing**: Essential for utilities like `mapBlocksInNonLocalizedFieldValue`.
- **Fewer API calls**: Dramatically speeds up bulk operations and complex traversals.

**Usage Example:**

<details>
<summary>View example</summary>

```typescript
const schemaRepository = new SchemaRepository(client);

// First call: fetches from API and caches result
const blogPost = await schemaRepository.getItemTypeByApiKey('blog_post');
const fields = await schemaRepository.getItemTypeFields(blogPost);

// Next calls: resolved instantly from cache (no API calls)
const sameBlogPost = await schemaRepository.getItemTypeByApiKey('blog_post');
const sameFields = await schemaRepository.getItemTypeFields(blogPost);

// Works seamlessly with block-processing utilities
await mapBlocksInNonLocalizedFieldValue(
  fieldValue,
  fieldType,
  schemaRepository, // share cached lookups
  async (block) => {
    // transform block here
  },
);
```

</details>

**When to Use**

- Traversing relationships that repeatedly query schema
- Bulk record processing scripts
- Block-processing utilities that need frequent lookups
- Any script where reducing API calls matters

**When Not to Use**

- Scripts that modify schema (models, fields, etc.)
- Long-running applications (cache never expires)
- Situations where the schema might change during execution

<details><summary><strong>Class signature</strong></summary>

```typescript
class SchemaRepository {
  constructor(client: GenericClient);

  // Item Type methods
  async getAllItemTypes(): Promise<ItemType[]>;
  async getAllModels(): Promise<ItemType[]>;
  async getAllBlockModels(): Promise<ItemType[]>;
  async getItemTypeByApiKey(apiKey: string): Promise<ItemType>;
  async getItemTypeById(id: string): Promise<ItemType>;

  // Field methods
  async getItemTypeFields(itemType: ItemType): Promise<Field[]>;
  async getItemTypeFieldsets(itemType: ItemType): Promise<Fieldset[]>;

  // Higher-level utilities
  async getModelsEmbeddingBlocks(blocks: ItemType[]): Promise<ItemType[]>;

  // Plugin methods
  async getAllPlugins(): Promise<Plugin[]>;
  async getPluginById(id: string): Promise<Plugin>;
  async getPluginByPackageName(packageName: string): Promise<Plugin>;

  // Raw variants (return API response format)
  async getAllRawItemTypes(): Promise<RawItemType[]>;
  async getRawItemTypeByApiKey(apiKey: string): Promise<RawItemType>;
  // ... and more raw variants
}
```

</details>

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/datocms/js-rest-api-clients. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

The package is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).

---

# @datocms/cda-client

A lightweight, TypeScript-ready package that offers various helpers around the native Fetch API to perform GraphQL requests towards DatoCMS [Content Delivery API](https://www.datocms.com/docs/content-delivery-api).

## TypeScript Support

This package is built with TypeScript and provides type definitions out of the box. It supports `TypedDocumentNode` for improved type inference when using [gql.tada](https://gql-tada.0no.co/), [GraphQL Code Generator](https://the-guild.dev/graphql/codegen) or similar tools.

## Examples

### Basic Query Execution

```typescript
import { executeQuery } from '@datocms/cda-client';

const query = `
  query {
    allArticles {
      id
      title
    }
  }
`;

const result = await executeQuery(query, {
  token: 'your-api-token-here',
});

console.log(result);
```

### Using with TypeScript and GraphQL Code Generator

```typescript
import { executeQuery } from '@datocms/cda-client';
import { AllArticlesQuery } from './generated/graphql';

const result = await executeQuery(AllArticlesQuery, {
  token: 'your-api-token-here',
  variables: {
    limit: 10,
  },
});

console.log(result.allArticles);
```

## Installation

```bash
npm install @datocms/cda-client
```

## Usage

This package provides several utility functions to help you interact with the DatoCMS Content Delivery API using GraphQL.

### `executeQuery`

The main function to execute a GraphQL query against the DatoCMS Content Delivery API.

```typescript
import { executeQuery } from '@datocms/cda-client';

const result = await executeQuery(query, options);
```

#### Parameters

- `query`: A GraphQL query string, `DocumentNode`, or `TypedDocumentNode`.
- `options`: An object containing execution options.

#### Options

| Option               | Type                   | Description                                                                                                                                                   |
| -------------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `token`              | `string`               | DatoCMS API token (required) [Read more](https://www.datocms.com/docs/content-delivery-api/authentication)                                                    |
| `includeDrafts`      | `boolean`              | If true, return draft versions of records [Read more](https://www.datocms.com/docs/content-delivery-api/api-endpoints#preview-mode-to-retrieve-draft-content) |
| `excludeInvalid`     | `boolean`              | If true, filter out invalid records [Read more](https://www.datocms.com/docs/content-delivery-api/api-endpoints#strict-mode-for-non-nullable-graphql-types)   |
| `environment`        | `string`               | Name of the DatoCMS environment for the query [Read more](https://www.datocms.com/docs/content-delivery-api/api-endpoints#specifying-an-environment)          |
| `contentLink`        | `'vercel-v1'`          | If true, embed metadata for Content Link [Read more](https://www.datocms.com/docs/content-delivery-api/api-endpoints#content-link)                            |
| `baseEditingUrl`     | `string`               | Base URL of your DatoCMS project [Read more](https://www.datocms.com/docs/content-delivery-api/api-endpoints#content-link)                                    |
| `returnCacheTags`    | `boolean`              | If true, receive Cache Tags associated with the query [Read more](https://www.datocms.com/docs/content-delivery-api/api-endpoints#cache-tags)                 |
| `variables`          | `object`               | Variables to be sent with the query                                                                                                                           |
| `fetchFn`            | `function`             | Custom fetch function (optional)                                                                                                                              |
| `requestInitOptions` | `Partial<RequestInit>` | Additional request initialization options (optional)                                                                                                          |
| `autoRetry`          | `boolean`              | Automatically retry on rate limit (default: true)                                                                                                             |

### `rawExecuteQuery`

Similar to `executeQuery`, but returns both the query result and the full response object. This can be handy when used together with returnCacheTags to actually retrieve the cache tags.

```typescript
import { rawExecuteQuery } from '@datocms/cda-client';

const [result, response] = await rawExecuteQuery(query, {
  token: 'your-api-token-here',
  returnCacheTags: true,
});
const cacheTags = response.headers.get('x-cache-tags');
```

### `executeQueryWithAutoPagination`

This function comes handy when the query contains a paginated collection: behind the scene,
`executeQueryWithAutoPagination` reworks the passed query and collects the results, so that
it's possible to get a collection of records that is longer than Content Delivery API's result limit.
That is done with a single API call, in a transparent way.

```typescript
import { executeQueryWithAutoPagination } from '@datocms/cda-client';

const result = await executeQueryWithAutoPagination(query, options);
```

#### Parameters

Parameters are the same available for `executeQuery`:

- `query`: A GraphQL query string, `DocumentNode`, or `TypedDocumentNode`.
- `options`: An object containing execution options with the same shape of options for `executeQuery`.

### How does it work?

Suppose you want to execute the following query:

```graphql
query BuildSitemapUrls {
  allBlogPosts {
    slug
  }

  entries: allSuccessStories(first: 500) {
    ...SuccessStoryUrlFragment
  }
}

fragment SuccessStoryUrlFragment on SuccessStoryRecord {
  slug
}
```

Well, that's a roadblock: DatoCMS CDA has limitations on the pagination page length (currently 500 items).

That means you should introduce a variable and execute the query multiple times, each time skipping the record
that have been returned by the previous query.

`executeQueryWithAutoPagination` does that on your behalf: the above query is analyzed and rewritten on the fly like this:

```graphql
query BuildSitemapUrls {
  allBlogPosts {
    slug
  }
  splitted_0_entries: allSuccessStories(first: 500, skip: 0) {
    ...SuccessStoryUrlFragment
  }
  splitted_500_entries: allSuccessStories(first: 500, skip: 500) {
    ...SuccessStoryUrlFragment
  }
  splitted_1000_entries: allSuccessStories(first: 500, skip: 1000) {
    ...SuccessStoryUrlFragment
  }
  splitted_1500_entries: allSuccessStories(first: 500, skip: 1500) {
    ...SuccessStoryUrlFragment
  }
  splitted_2000_entries: allSuccessStories(first: 500, skip: 2000) {
    ...SuccessStoryUrlFragment
  }
}

fragment SuccessStoryUrlFragment on SuccessStoryRecord {
  slug
}
```

Once executed, the results get collected and recomposed as if nothing happened.

#### Limitations

`executeQueryWithAutoPagination` works only when the query contains only one selection that has
an oversized `first:` argument (i.e. `first:` argument surpasses the Content Delivery API's result limit).
If two or more fields have oversiaed patination, the function triggers an error.

The rewritten query must still respect the [complexity cost](https://www.datocms.com/docs/content-delivery-api/complexity).

### `rawExecuteQueryWithAutoPagination`

As for `executeQuery`, also `executeQueryWithAutoPagination` has a pair raw version that returns both the query result and the full response object.
This can be handy when used together with returnCacheTags to actually retrieve the cache tags.

```typescript
import { rawExecuteQueryWithAutoPagination } from '@datocms/cda-client';

const [result, response] = await rawExecuteQueryWithAutoPagination(query, {
  token: 'your-api-token-here',
  returnCacheTags: true,
});
const cacheTags = response.headers.get('x-cache-tags');
```

### `buildRequestHeaders`

Builds request headers for a GraphQL query towards the DatoCMS Content Delivery API.

```typescript
import { buildRequestHeaders } from '@datocms/cda-client';

const headers = buildRequestHeaders(options);
```

#### Options

The `buildRequestHeaders` function accepts the same options as `executeQuery`, except for `variables`, `fetchFn`, and `autoRetry`.

### `buildRequestInit`

Builds the request initialization object for a GraphQL query towards the DatoCMS Content Delivery API.

```typescript
import { buildRequestInit } from '@datocms/cda-client';

const requestInit = buildRequestInit(query, options);
```

#### Parameters

- `query`: A GraphQL query string or `DocumentNode`.
- `options`: An object containing execution options (same as `executeQuery`).

## Error Handling

In case a query fails (either with an HTTP status code outside of the 2xx range, or for an error in the query), an `ApiError` exception will be thrown by the client. This error contains all the details of the request and response, allowing you to debug and handle errors effectively.

### Example

```typescript
import { executeQuery, ApiError } from '@datocms/cda-client';

const query = `
  query {
    allArticles {
      id
      title
    }
  }
`;

try {
  const result = await executeQuery(query, {
    token: 'your-api-token-here',
  });
  console.log(result);
} catch (e) {
  if (e instanceof ApiError) {
    // Information about the failed request
    console.log(e.query);
    console.log(e.options);

    // Information about the response
    console.log(e.response.status);
    console.log(e.response.statusText);
    console.log(e.response.headers);
    console.log(e.response.body);
  } else {
    // Handle other types of errors
    throw e;
  }
}
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

---

# DatoCMS CLI

DatoCMS CLI tool for managing DatoCMS projects, environments and schemas.

<!-- toc -->

- [DatoCMS CLI](#datocms-cli)
- [Usage](#usage)
- [Commands](#commands)
<!-- tocstop -->

<br /><br />
<a href="https://www.datocms.com/">
<img src="https://www.datocms.com/images/full_logo.svg" height="60">
</a>
<br /><br />

# Usage

```sh-session
$ npm install -g @datocms/cli

$ datocms COMMAND
running command...

$ datocms (--version)
@datocms/cli/0.1.6 darwin-x64 node-v16.20.0

$ datocms --help [COMMAND]
USAGE
  $ datocms COMMAND
...
```

# Commands

<!-- commands -->

- [`datocms autocomplete [SHELL]`](#datocms-autocomplete-shell)
- [`datocms environments:destroy ENVIRONMENT_ID`](#datocms-environmentsdestroy-environment_id)
- [`datocms environments:fork SOURCE_ENVIRONMENT_ID NEW_ENVIRONMENT_ID`](#datocms-environmentsfork-source_environment_id-new_environment_id)
- [`datocms environments:index`](#datocms-environmentsindex)
- [`datocms environments:list`](#datocms-environmentslist)
- [`datocms environments:primary`](#datocms-environmentsprimary)
- [`datocms environments:promote ENVIRONMENT_ID`](#datocms-environmentspromote-environment_id)
- [`datocms environments:rename ENVIRONMENT_ID NEW_ENVIRONMENT_ID`](#datocms-environmentsrename-environment_id-new_environment_id)
- [`datocms help [COMMAND]`](#datocms-help-command)
- [`datocms maintenance:off`](#datocms-maintenanceoff)
- [`datocms maintenance:on`](#datocms-maintenanceon)
- [`datocms migrations:new NAME`](#datocms-migrationsnew-name)
- [`datocms migrations:run`](#datocms-migrationsrun)
- [`datocms plugins`](#datocms-plugins)
- [`datocms plugins:add PLUGIN`](#datocms-pluginsadd-plugin)
- [`datocms plugins:available`](#datocms-pluginsavailable)
- [`datocms plugins:inspect PLUGIN...`](#datocms-pluginsinspect-plugin)
- [`datocms plugins:install PLUGIN`](#datocms-pluginsinstall-plugin)
- [`datocms plugins:link PATH`](#datocms-pluginslink-path)
- [`datocms plugins:remove [PLUGIN]`](#datocms-pluginsremove-plugin)
- [`datocms plugins:reset`](#datocms-pluginsreset)
- [`datocms plugins:uninstall [PLUGIN]`](#datocms-pluginsuninstall-plugin)
- [`datocms plugins:unlink [PLUGIN]`](#datocms-pluginsunlink-plugin)
- [`datocms plugins:update`](#datocms-pluginsupdate)
- [`datocms profile:remove PROFILE_ID`](#datocms-profileremove-profile_id)
- [`datocms profile:set PROFILE_ID`](#datocms-profileset-profile_id)
- [`datocms schema:generate FILENAME`](#datocms-schemagenerate-filename)

## `datocms autocomplete [SHELL]`

Display autocomplete installation instructions.

```
USAGE
  $ datocms autocomplete [SHELL] [-r]

ARGUMENTS
  SHELL  (zsh|bash|powershell) Shell type

FLAGS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

DESCRIPTION
  Display autocomplete installation instructions.

EXAMPLES
  $ datocms autocomplete

  $ datocms autocomplete bash

  $ datocms autocomplete zsh

  $ datocms autocomplete powershell

  $ datocms autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v3.2.34/src/commands/autocomplete/index.ts)_

## `datocms environments:destroy ENVIRONMENT_ID`

Destroys a sandbox environment

```
USAGE
  $ datocms environments:destroy ENVIRONMENT_ID [--json] [--config-file <value>] [--profile <value>] [--api-token <value>]
    [--log-level NONE|BASIC|BODY|BODY_AND_HEADERS] [--log-mode stdout|file|directory]

ARGUMENTS
  ENVIRONMENT_ID  The environment to destroy

GLOBAL FLAGS
  --api-token=<value>    Specify a custom API key to access a DatoCMS project
  --config-file=<value>  [default: ./datocms.config.json] Specify a custom config file path
  --json                 Format output as json.
  --log-level=<option>   Level of logging for performed API calls
                         <options: NONE|BASIC|BODY|BODY_AND_HEADERS>
  --log-mode=<option>    Where logged output should be written to
                         <options: stdout|file|directory>
  --profile=<value>      Use settings of profile in datocms.config.js

DESCRIPTION
  Destroys a sandbox environment
```

_See code: [src/commands/environments/destroy.ts](https://github.com/datocms/cli/blob/v3.1.7/packages/cli/src/commands/environments/destroy.ts)_

## `datocms environments:fork SOURCE_ENVIRONMENT_ID NEW_ENVIRONMENT_ID`

Creates a new sandbox environment by forking an existing one

```
USAGE
  $ datocms environments:fork SOURCE_ENVIRONMENT_ID NEW_ENVIRONMENT_ID [--json] [--config-file <value>] [--profile
    <value>] [--api-token <value>] [--log-level NONE|BASIC|BODY|BODY_AND_HEADERS] [--log-mode stdout|file|directory]
    [--force --fast]

ARGUMENTS
  SOURCE_ENVIRONMENT_ID  The environment to copy
  NEW_ENVIRONMENT_ID     The name of the new sandbox environment to generate

FLAGS
  --fast   Run a fast fork. A fast fork reduces processing time, but it also prevents writing to the source environment
           during the process
  --force  Forces the start of a fast fork, even there are users currently editing records in the environment to copy

GLOBAL FLAGS
  --api-token=<value>    Specify a custom API key to access a DatoCMS project
  --config-file=<value>  [default: ./datocms.config.json] Specify a custom config file path
  --json                 Format output as json.
  --log-level=<option>   Level of logging for performed API calls
                         <options: NONE|BASIC|BODY|BODY_AND_HEADERS>
  --log-mode=<option>    Where logged output should be written to
                         <options: stdout|file|directory>
  --profile=<value>      Use settings of profile in datocms.config.js

DESCRIPTION
  Creates a new sandbox environment by forking an existing one
```

_See code: [src/commands/environments/fork.ts](https://github.com/datocms/cli/blob/v3.1.7/packages/cli/src/commands/environments/fork.ts)_

## `datocms environments:index`

Lists primary/sandbox environments of a project

```
USAGE
  $ datocms environments:index [--json] [--config-file <value>] [--profile <value>] [--api-token <value>] [--log-level
    NONE|BASIC|BODY|BODY_AND_HEADERS] [--log-mode stdout|file|directory]

GLOBAL FLAGS
  --api-token=<value>    Specify a custom API key to access a DatoCMS project
  --config-file=<value>  [default: ./datocms.config.json] Specify a custom config file path
  --json                 Format output as json.
  --log-level=<option>   Level of logging for performed API calls
                         <options: NONE|BASIC|BODY|BODY_AND_HEADERS>
  --log-mode=<option>    Where logged output should be written to
                         <options: stdout|file|directory>
  --profile=<value>      Use settings of profile in datocms.config.js

DESCRIPTION
  Lists primary/sandbox environments of a project

ALIASES
  $ datocms environments:index
  $ datocms environments:list
```

## `datocms environments:list`

Lists primary/sandbox environments of a project

```
USAGE
  $ datocms environments:list [--json] [--config-file <value>] [--profile <value>] [--api-token <value>] [--log-level
    NONE|BASIC|BODY|BODY_AND_HEADERS] [--log-mode stdout|file|directory]

GLOBAL FLAGS
  --api-token=<value>    Specify a custom API key to access a DatoCMS project
  --config-file=<value>  [default: ./datocms.config.json] Specify a custom config file path
  --json                 Format output as json.
  --log-level=<option>   Level of logging for performed API calls
                         <options: NONE|BASIC|BODY|BODY_AND_HEADERS>
  --log-mode=<option>    Where logged output should be written to
                         <options: stdout|file|directory>
  --profile=<value>      Use settings of profile in datocms.config.js

DESCRIPTION
  Lists primary/sandbox environments of a project

ALIASES
  $ datocms environments:index
  $ datocms environments:list
```

_See code: [src/commands/environments/list.ts](https://github.com/datocms/cli/blob/v3.1.7/packages/cli/src/commands/environments/list.ts)_

## `datocms environments:primary`

Returns the name the primary environment of a project

```
USAGE
  $ datocms environments:primary [--json] [--config-file <value>] [--profile <value>] [--api-token <value>] [--log-level
    NONE|BASIC|BODY|BODY_AND_HEADERS] [--log-mode stdout|file|directory]

GLOBAL FLAGS
  --api-token=<value>    Specify a custom API key to access a DatoCMS project
  --config-file=<value>  [default: ./datocms.config.json] Specify a custom config file path
  --json                 Format output as json.
  --log-level=<option>   Level of logging for performed API calls
                         <options: NONE|BASIC|BODY|BODY_AND_HEADERS>
  --log-mode=<option>    Where logged output should be written to
                         <options: stdout|file|directory>
  --profile=<value>      Use settings of profile in datocms.config.js

DESCRIPTION
  Returns the name the primary environment of a project
```

_See code: [src/commands/environments/primary.ts](https://github.com/datocms/cli/blob/v3.1.7/packages/cli/src/commands/environments/primary.ts)_

## `datocms environments:promote ENVIRONMENT_ID`

Promotes a sandbox environment to primary

```
USAGE
  $ datocms environments:promote ENVIRONMENT_ID [--json] [--config-file <value>] [--profile <value>] [--api-token <value>]
    [--log-level NONE|BASIC|BODY|BODY_AND_HEADERS] [--log-mode stdout|file|directory]

ARGUMENTS
  ENVIRONMENT_ID  The environment to promote

GLOBAL FLAGS
  --api-token=<value>    Specify a custom API key to access a DatoCMS project
  --config-file=<value>  [default: ./datocms.config.json] Specify a custom config file path
  --json                 Format output as json.
  --log-level=<option>   Level of logging for performed API calls
                         <options: NONE|BASIC|BODY|BODY_AND_HEADERS>
  --log-mode=<option>    Where logged output should be written to
                         <options: stdout|file|directory>
  --profile=<value>      Use settings of profile in datocms.config.js

DESCRIPTION
  Promotes a sandbox environment to primary
```

_See code: [src/commands/environments/promote.ts](https://github.com/datocms/cli/blob/v3.1.7/packages/cli/src/commands/environments/promote.ts)_

## `datocms environments:rename ENVIRONMENT_ID NEW_ENVIRONMENT_ID`

Renames an environment

```
USAGE
  $ datocms environments:rename ENVIRONMENT_ID NEW_ENVIRONMENT_ID [--json] [--config-file <value>] [--profile <value>]
    [--api-token <value>] [--log-level NONE|BASIC|BODY|BODY_AND_HEADERS] [--log-mode stdout|file|directory]

ARGUMENTS
  ENVIRONMENT_ID      The environment to rename
  NEW_ENVIRONMENT_ID  The new environment ID

GLOBAL FLAGS
  --api-token=<value>    Specify a custom API key to access a DatoCMS project
  --config-file=<value>  [default: ./datocms.config.json] Specify a custom config file path
  --json                 Format output as json.
  --log-level=<option>   Level of logging for performed API calls
                         <options: NONE|BASIC|BODY|BODY_AND_HEADERS>
  --log-mode=<option>    Where logged output should be written to
                         <options: stdout|file|directory>
  --profile=<value>      Use settings of profile in datocms.config.js

DESCRIPTION
  Renames an environment
```

_See code: [src/commands/environments/rename.ts](https://github.com/datocms/cli/blob/v3.1.7/packages/cli/src/commands/environments/rename.ts)_

## `datocms help [COMMAND]`

Display help for datocms.

```
USAGE
  $ datocms help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for datocms.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.32/src/commands/help.ts)_

## `datocms maintenance:off`

Take a project out of maintenance mode

```
USAGE
  $ datocms maintenance:off [--json] [--config-file <value>] [--profile <value>] [--api-token <value>] [--log-level
    NONE|BASIC|BODY|BODY_AND_HEADERS] [--log-mode stdout|file|directory]

GLOBAL FLAGS
  --api-token=<value>    Specify a custom API key to access a DatoCMS project
  --config-file=<value>  [default: ./datocms.config.json] Specify a custom config file path
  --json                 Format output as json.
  --log-level=<option>   Level of logging for performed API calls
                         <options: NONE|BASIC|BODY|BODY_AND_HEADERS>
  --log-mode=<option>    Where logged output should be written to
                         <options: stdout|file|directory>
  --profile=<value>      Use settings of profile in datocms.config.js

DESCRIPTION
  Take a project out of maintenance mode
```

_See code: [src/commands/maintenance/off.ts](https://github.com/datocms/cli/blob/v3.1.7/packages/cli/src/commands/maintenance/off.ts)_

## `datocms maintenance:on`

Put a project in maintenance mode

```
USAGE
  $ datocms maintenance:on [--json] [--config-file <value>] [--profile <value>] [--api-token <value>] [--log-level
    NONE|BASIC|BODY|BODY_AND_HEADERS] [--log-mode stdout|file|directory] [--force]

FLAGS
  --force  Forces the activation of maintenance mode even there are users currently editing records

GLOBAL FLAGS
  --api-token=<value>    Specify a custom API key to access a DatoCMS project
  --config-file=<value>  [default: ./datocms.config.json] Specify a custom config file path
  --json                 Format output as json.
  --log-level=<option>   Level of logging for performed API calls
                         <options: NONE|BASIC|BODY|BODY_AND_HEADERS>
  --log-mode=<option>    Where logged output should be written to
                         <options: stdout|file|directory>
  --profile=<value>      Use settings of profile in datocms.config.js

DESCRIPTION
  Put a project in maintenance mode
```

_See code: [src/commands/maintenance/on.ts](https://github.com/datocms/cli/blob/v3.1.7/packages/cli/src/commands/maintenance/on.ts)_

## `datocms migrations:new NAME`

Create a new migration script

```
USAGE
  $ datocms migrations:new NAME [--json] [--config-file <value>] [--profile <value>] [--api-token <value>]
    [--log-level NONE|BASIC|BODY|BODY_AND_HEADERS] [--log-mode stdout|file|directory] [--ts | --js] [--template <value>
    | --autogenerate <value>] [--schema <value>]

ARGUMENTS
  NAME  The name to give to the script

FLAGS
  --autogenerate=<value>
      Auto-generates script by diffing the schema of two environments

      Examples:
      * --autogenerate=foo finds changes made to sandbox environment 'foo' and applies them to primary environment
      * --autogenerate=foo:bar finds changes made to environment 'foo' and applies them to environment 'bar'

  --js
      Forces the creation of a JavaScript migration file

  --schema=<value>
      Include schema definitions for models and blocks (TypeScript only). Use "all" for all item types, or specify
      comma-separated API keys for specific ones

  --template=<value>
      Start the migration script from a custom template

  --ts
      Forces the creation of a TypeScript migration file

GLOBAL FLAGS
  --api-token=<value>    Specify a custom API key to access a DatoCMS project
  --config-file=<value>  [default: ./datocms.config.json] Specify a custom config file path
  --json                 Format output as json.
  --log-level=<option>   Level of logging for performed API calls
                         <options: NONE|BASIC|BODY|BODY_AND_HEADERS>
  --log-mode=<option>    Where logged output should be written to
                         <options: stdout|file|directory>
  --profile=<value>      Use settings of profile in datocms.config.js

DESCRIPTION
  Create a new migration script
```

_See code: [src/commands/migrations/new.ts](https://github.com/datocms/cli/blob/v3.1.7/packages/cli/src/commands/migrations/new.ts)_

## `datocms migrations:run`

Run migration scripts that have not run yet

```
USAGE
  $ datocms migrations:run [--json] [--config-file <value>] [--profile <value>] [--api-token <value>] [--log-level
    NONE|BASIC|BODY|BODY_AND_HEADERS] [--log-mode stdout|file|directory] [--source <value>] [--dry-run] [--force
    [--fast-fork [--destination <value> | --in-place]]] [--migrations-dir <value>] [--migrations-model <value>]
    [--migrations-tsconfig <value>]

FLAGS
  --destination=<value>          Specify the name of the new forked environment
  --dry-run                      Simulate the execution of the migrations, without making any actual change
  --fast-fork                    Run a fast fork. A fast fork reduces processing time, but it also prevents writing to
                                 the source environment during the process
  --force                        Forces the start of a fast fork, even there are users currently editing records in the
                                 environment to copy
  --in-place                     Run the migrations in the --source environment, without forking
  --migrations-dir=<value>       Directory where script migrations are stored
  --migrations-model=<value>     API key of the DatoCMS model used to store migration data
  --migrations-tsconfig=<value>  Path of the tsconfig.json to use to run TS migrations scripts
  --source=<value>               Specify the environment to fork

GLOBAL FLAGS
  --api-token=<value>    Specify a custom API key to access a DatoCMS project
  --config-file=<value>  [default: ./datocms.config.json] Specify a custom config file path
  --json                 Format output as json.
  --log-level=<option>   Level of logging for performed API calls
                         <options: NONE|BASIC|BODY|BODY_AND_HEADERS>
  --log-mode=<option>    Where logged output should be written to
                         <options: stdout|file|directory>
  --profile=<value>      Use settings of profile in datocms.config.js

DESCRIPTION
  Run migration scripts that have not run yet
```

_See code: [src/commands/migrations/run.ts](https://github.com/datocms/cli/blob/v3.1.7/packages/cli/src/commands/migrations/run.ts)_

## `datocms plugins`

List installed plugins.

```
USAGE
  $ datocms plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ datocms plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.46/src/commands/plugins/index.ts)_

## `datocms plugins:add PLUGIN`

Installs a plugin into datocms.

```
USAGE
  $ datocms plugins:add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into datocms.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the DATOCMS_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the DATOCMS_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ datocms plugins:add

EXAMPLES
  Install a plugin from npm registry.

    $ datocms plugins:add myplugin

  Install a plugin from a github url.

    $ datocms plugins:add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ datocms plugins:add someuser/someplugin
```

## `datocms plugins:available`

Lists official DatoCMS CLI plugins

```
USAGE
  $ datocms plugins:available [--json]

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Lists official DatoCMS CLI plugins
```

_See code: [src/commands/plugins/available.ts](https://github.com/datocms/cli/blob/v3.1.7/packages/cli/src/commands/plugins/available.ts)_

## `datocms plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ datocms plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ datocms plugins:inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.46/src/commands/plugins/inspect.ts)_

## `datocms plugins:install PLUGIN`

Installs a plugin into datocms.

```
USAGE
  $ datocms plugins:install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into datocms.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the DATOCMS_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the DATOCMS_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ datocms plugins:add

EXAMPLES
  Install a plugin from npm registry.

    $ datocms plugins:install myplugin

  Install a plugin from a github url.

    $ datocms plugins:install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ datocms plugins:install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.46/src/commands/plugins/install.ts)_

## `datocms plugins:link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ datocms plugins:link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ datocms plugins:link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.46/src/commands/plugins/link.ts)_

## `datocms plugins:remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ datocms plugins:remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ datocms plugins:unlink
  $ datocms plugins:remove

EXAMPLES
  $ datocms plugins:remove myplugin
```

## `datocms plugins:reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ datocms plugins:reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.46/src/commands/plugins/reset.ts)_

## `datocms plugins:uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ datocms plugins:uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ datocms plugins:unlink
  $ datocms plugins:remove

EXAMPLES
  $ datocms plugins:uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.46/src/commands/plugins/uninstall.ts)_

## `datocms plugins:unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ datocms plugins:unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ datocms plugins:unlink
  $ datocms plugins:remove

EXAMPLES
  $ datocms plugins:unlink myplugin
```

## `datocms plugins:update`

Update installed plugins.

```
USAGE
  $ datocms plugins:update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.46/src/commands/plugins/update.ts)_

## `datocms profile:remove PROFILE_ID`

Remove a profile from DatoCMS config file

```
USAGE
  $ datocms profile:remove PROFILE_ID [--json] [--config-file <value>]

ARGUMENTS
  PROFILE_ID  The name of the profile

GLOBAL FLAGS
  --config-file=<value>  [default: ./datocms.config.json] Specify a custom config file path
  --json                 Format output as json.

DESCRIPTION
  Remove a profile from DatoCMS config file
```

_See code: [src/commands/profile/remove.ts](https://github.com/datocms/cli/blob/v3.1.7/packages/cli/src/commands/profile/remove.ts)_

## `datocms profile:set PROFILE_ID`

Add/update profile configuration in DatoCMS config file

```
USAGE
  $ datocms profile:set PROFILE_ID [--json] [--config-file <value>] [--log-level
    NONE|BASIC|BODY|BODY_AND_HEADERS] [--migrations-dir <value>] [--migrations-model <value>] [--migrations-template
    <value>] [--migrations-tsconfig <value>]

ARGUMENTS
  PROFILE_ID  [default: default] Name of the profile to create/update

FLAGS
  --log-level=<option>           Level of logging to use for the profile
                                 <options: NONE|BASIC|BODY|BODY_AND_HEADERS>
  --migrations-dir=<value>       Directory where script migrations will be stored
  --migrations-model=<value>     API key of the DatoCMS model used to store migration data
  --migrations-template=<value>  Path of the file to use as migration script template
  --migrations-tsconfig=<value>  Path of the tsconfig.json to use to run TS migration scripts

GLOBAL FLAGS
  --config-file=<value>  [default: ./datocms.config.json] Specify a custom config file path
  --json                 Format output as json.

DESCRIPTION
  Add/update profile configuration in DatoCMS config file
```

_See code: [src/commands/profile/set.ts](https://github.com/datocms/cli/blob/v3.1.7/packages/cli/src/commands/profile/set.ts)_

## `datocms schema:generate FILENAME`

Generate TypeScript definitions for the schema

```
USAGE
  $ datocms schema:generate FILENAME [--json] [--config-file <value>] [--profile <value>] [--api-token <value>]
    [--log-level NONE|BASIC|BODY|BODY_AND_HEADERS] [--log-mode stdout|file|directory] [-e <value>] [-t <value>]

ARGUMENTS
  FILENAME  Output filename for the generated TypeScript definitions

FLAGS
  -e, --environment=<value>  Environment to generate schema from
  -t, --item-types=<value>   Comma-separated list of item type API keys to include (includes dependencies)

GLOBAL FLAGS
  --api-token=<value>    Specify a custom API key to access a DatoCMS project
  --config-file=<value>  [default: ./datocms.config.json] Specify a custom config file path
  --json                 Format output as json.
  --log-level=<option>   Level of logging for performed API calls
                         <options: NONE|BASIC|BODY|BODY_AND_HEADERS>
  --log-mode=<option>    Where logged output should be written to
                         <options: stdout|file|directory>
  --profile=<value>      Use settings of profile in datocms.config.js

DESCRIPTION
  Generate TypeScript definitions for the schema
```

_See code: [src/commands/schema/generate.ts](https://github.com/datocms/cli/blob/v3.1.7/packages/cli/src/commands/schema/generate.ts)_

<!-- commandsstop -->

---

# DatoCMS Contentful Import CLI

DatoCMS CLI plugin to import a Contentful project into a DatoCMS project.
Read a more detailed documentation [on the website](https://www.datocms.com/docs/import-and-export/import-space-from-contentful)

<!-- toc -->

- [DatoCMS Contentful Import CLI](#datocms-contentful-import-cli)
- [Usage](#usage)
- [Commands](#commands)
- [Test](#test)
<!-- tocstop -->

<br /><br />
<a href="https://www.datocms.com/">
<img src="https://www.datocms.com/images/full_logo.svg" height="60">
</a>
<br /><br />

# Usage

```sh-session
$ npm install -g @datocms/cli
$ datocms plugins:install @datocms/cli-plugin-contentful
$ datocms contentful:import --help
```

# Commands

<!-- commands -->

- [`@datocms/cli-plugin-contentful contentful:import`](#datocmscli-plugin-contentful-contentfulimport)

## `@datocms/cli-plugin-contentful contentful:import`

Import a Contentful project into a DatoCMS project

```
USAGE
  $ @datocms/cli-plugin-contentful contentful:import [--json] [--config-file <value>] [--profile <value>] [--api-token
    <value>] [--log-level NONE|BASIC|BODY|BODY_AND_HEADERS] [--log-mode stdout|file|directory] [--contentful-token
    <value>] [--contentful-space-id <value>] [--contentful-environment <value>] [--autoconfirm] [--ignore-errors]
    [--skip-content] [--only-content-type <value>] [--concurrency <value>]

FLAGS
  --autoconfirm                     Automatically enter an affirmative response to all confirmation prompts, enabling
                                    the command to execute without waiting for user confirmation, like forcing the
                                    destroy of existing Contentful schema models.
  --concurrency=<value>             [default: 15] Specify the maximum number of operations to be run concurrently
  --contentful-environment=<value>  The environment you want to work with
  --contentful-space-id=<value>     Your Contentful project space ID
  --contentful-token=<value>        Your Contentful project read-only API token
  --ignore-errors                   Ignore errors encountered during import
  --only-content-type=<value>       Exclusively import the specified content types. Specify the content types you want
                                    to import with comma separated Contentful IDs - Example: blogPost,landingPage,author
  --skip-content                    Exclusively import the schema (models) and ignore records and assets

GLOBAL FLAGS
  --api-token=<value>    Specify a custom API key to access a DatoCMS project
  --config-file=<value>  [default: ./datocms.config.json] Specify a custom config file path
  --json                 Format output as json.
  --log-level=<option>   Level of logging for performed API calls
                         <options: NONE|BASIC|BODY|BODY_AND_HEADERS>
  --log-mode=<option>    Where logged output should be written to
                         <options: stdout|file|directory>
  --profile=<value>      Use settings of profile in datocms.config.js

DESCRIPTION
  Import a Contentful project into a DatoCMS project
```

_See code: [lib/commands/contentful/import.js](https://github.com/datocms/cli/blob/v3.1.7/packages/cli-plugin-contentful/lib/commands/contentful/import.js)_

<!-- commandsstop -->

# Test

Unfortunately Contentful management client only accepts read-write tokens, so we cannot make testing available for everybody.

To run the tests use this command:

```
CONTENTFUL_TOKEN=xxx npm run test
```

You can get the `CONTENTFUL_TOKEN` from the password management service

---

# DatoCMS WordPress Import CLI

DatoCMS CLI plugin to import a WordPress site into a DatoCMS project.

<!-- toc -->

- [DatoCMS WordPress Import CLI](#datocms-wordpress-import-cli)
- [Usage](#usage)
- [Commands](#commands)
- [Development](#development)
<!-- tocstop -->

<br /><br />
<a href="https://www.datocms.com/">
<img src="https://www.datocms.com/images/full_logo.svg" height="60">
</a>
<br /><br />

# Usage

```sh-session
$ npm install -g @datocms/cli
$ datocms plugins:install @datocms/cli-plugin-wordpress
$ datocms wordpress:import --help
```

# Commands

<!-- commands -->

- [`@datocms/cli-plugin-wordpress wordpress:import`](#datocmscli-plugin-wordpress-wordpressimport)

## `@datocms/cli-plugin-wordpress wordpress:import`

Imports a WordPress site into a DatoCMS project

```
USAGE
  $ @datocms/cli-plugin-wordpress wordpress:import --wp-username <value> --wp-password <value> [--json] [--config-file
    <value>] [--profile <value>] [--api-token <value>] [--log-level NONE|BASIC|BODY|BODY_AND_HEADERS] [--log-mode
    stdout|file|directory] [--wp-json-api-url <value> | --wp-url <value>] [--autoconfirm] [--ignore-errors]
    [--concurrency <value>]

FLAGS
  --autoconfirm              Automatically enters the affirmative response to all confirmation prompts, enabling the
                             command to execute without waiting for user confirmation. Forces the destroy of existing
                             "wp_*" models.
  --concurrency=<value>      [default: 15] Maximum number of operations to be run concurrently
  --ignore-errors            Try to ignore errors encountered during import
  --wp-json-api-url=<value>  The endpoint for your WordPress install (ex. https://www.wordpress-website.com/wp-json)
  --wp-password=<value>      (required) WordPress password
  --wp-url=<value>           A URL within a WordPress REST API-enabled site (ex. https://www.wordpress-website.com)
  --wp-username=<value>      (required) WordPress username

GLOBAL FLAGS
  --api-token=<value>    Specify a custom API key to access a DatoCMS project
  --config-file=<value>  [default: ./datocms.config.json] Specify a custom config file path
  --json                 Format output as json.
  --log-level=<option>   Level of logging for performed API calls
                         <options: NONE|BASIC|BODY|BODY_AND_HEADERS>
  --log-mode=<option>    Where logged output should be written to
                         <options: stdout|file|directory>
  --profile=<value>      Use settings of profile in datocms.config.js

DESCRIPTION
  Imports a WordPress site into a DatoCMS project
```

_See code: [lib/commands/wordpress/import.js](https://github.com/datocms/cli/blob/v3.1.7/packages/cli-plugin-wordpress/lib/commands/wordpress/import.js)_

<!-- commandsstop -->

# Development

Tests require a working WordPress instance with specific data in it, and will import content in a newly created DatoCMS project.

You can launch the WP instance with:

```
docker-compose up
```

You can then run tests with:

```
npm run test
```

To save a new dump:

```
docker-compose exec db mysqldump -uwordpress -pwordpress wordpress > wp_test_data/mysql/dump.sql
```

---

# DatoCMS plugins repository

This repository provides samples of DatoCMS plugins developed using the [Plugins SDK](https://www.datocms.com/docs/building-plugins/sdk-reference).

### List of examples

- [Star rating editor](https://github.com/datocms/plugins/tree/master/star-rating-editor/): A plugin that presents integer fields as star rating widgets
- [Yandex Translate](https://github.com/datocms/plugins/tree/master/yandex-translate/): Makes it easier to automatically translate your content into secondary languages
- [Sidebar Todos](https://github.com/datocms/plugins/tree/master/todo-list/): Add To-Do lists to your records sidebar
- [Tag editor](https://github.com/datocms/plugins/tree/master/tag-editor/): A plugin that transforms any string and JSON field into a tag editor
- [Lorem ipsum generator](https://github.com/datocms/plugins/tree/master/lorem-ipsum/): Makes it easier to automatically fill your textual fields with dummy content
- [Sidebar notes](https://github.com/datocms/plugins/tree/master/notes/): Add Post-it notes to your records sidebar
- [Conditional fields](https://github.com/datocms/plugins/tree/master/conditional-fields/): Show/hide fields when you toggle a checkbox boolean field
- [Shopify product](https://github.com/datocms/plugins/tree/master/shopify-product/): Allows users to search and select Shopify products
- [Commerce Layer](https://github.com/datocms/plugins/tree/master/commercelayer/): Allows users to search and select Commerce Layer SKUs
- [Field Anchor](https://github.com/datocms/plugins/tree/master/field-anchor-menu/): Creates a sidebar anchor menu that links to your fields
- [SEO Analysis](https://github.com/datocms/plugins/tree/master/seo-readability-analysis/): Runs SEO/Readability analysis using YoastSEO.js on your frontend everytime you make a change to the content of a record.
- [Rich Text TinyMCE](https://github.com/datocms/plugins/tree/master/tinymce-rich-text/): Custom TinyMCE configuration for multi-paragraph fields.
- [Table editor](https://github.com/datocms/plugins/tree/master/table-editor/): A plugin that transforms any JSON field into a table editor
- [Web Previews](https://github.com/datocms/plugins/tree/master/web-previews/): Shows links to the matching webpage previews on selected records

---

# react-datocms

![MIT](https://img.shields.io/npm/l/react-datocms?style=for-the-badge) ![MIT](https://img.shields.io/npm/v/react-datocms?style=for-the-badge) [![Build Status](https://img.shields.io/travis/datocms/react-datocms?style=for-the-badge)](https://travis-ci.org/datocms/react-datocms)

A set of components and utilities to work faster with [DatoCMS](https://www.datocms.com/) in React environments. Integrates seamlessy with DatoCMS's [GraphQL Content Delivery API](https://www.datocms.com/docs/content-delivery-api) and [Real-time Updates API](https://www.datocms.com/docs/real-time-updates-api).

# Installation

```
npm install react-datocms
```

# Documentation

This package offers different components and hooks. Please refer to one of the following pages to learn more about a specific area of interest:

- [`<SRCImage />` and `<Image />` components for responsive/progressive images](./docs/image.md)
- [`<StructuredText />` component](./docs/structured-text.md)
- [`<VideoPlayer />` component](./docs/video-player.md)
- [`useQuerySubscription()` hook for live, real-time updates of content](./docs/live-real-time-updates.md)
- [`useSiteSearch()` hook to render a DatoCMS Site Search form widget](./docs/site-search.md)
- [`renderMetaTags()` and other helpers to render social share, SEO and Favicon meta tags](./docs/meta-tags.md)

# Demos

For fully working examples take a look at our [examples directory](https://github.com/datocms/react-datocms/tree/master/examples).

Live demo: [https://react-datocms-example.netlify.app/](https://react-datocms-example.netlify.app/)

# Development

This repository contains a number of demos/examples. You can use them to locally test your changes.

```
cd examples
npm setup
npm run start
```

---

# Image components for progressive/responsive images

`<SRCImage />` and `<Image />` are React components specifically designed to work flawlessly with DatoCMS's [`responsiveImage` GraphQL query](https://www.datocms.com/docs/content-delivery-api/uploads#responsive-images) which optimizes image loading for your websites.

- TypeScript ready;
- CSS-in-JS ready;
- Usable both client and server side;
- Compatible with vanilla React, Next.js and pretty much any other React-based solution;

## Out-of-the-box features

- Offers optimized version of images for browsers that support WebP/AVIF format
- Generates multiple smaller images so smartphones and tablets don’t download desktop-sized images
- Efficiently lazy loads images to speed initial page load and save bandwidth
- Holds the image position so your page doesn’t jump while images load
- Uses either blur-up or background color techniques to show a preview of the image while it loads

![](docs/image-component.gif?raw=true)

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installation](#installation)
- [`<SRCImage />` vs `<Image />`](#srcimage--vs-image-)
- [Usage](#usage)
- [Example](#example)
  - [The `ResponsiveImage` object](#the-responsiveimage-object)
- [`<SRCImage>`](#srcimage)
  - [Props](#props)
- [`<Image>`](#image)
  - [Props](#props-1)
  - [Layout mode](#layout-mode)
  - [Changing `data`](#changing-data)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

```
npm install --save react-datocms
```

## `<SRCImage />` vs `<Image />`

Even though their purpose is the same, there are some significant differences between these two components. Depending on your specific needs, you can choose to use one or the other:

- `<SRCImage />` is a [React Server Component](https://nextjs.org/docs/app/building-your-application/rendering/server-components), so it can be rendered and optionally cached on the server. It doesn't create any JS footprint. It generates a single `<picture />` element and implements lazy-loading using the native [`loading="lazy"` attribute](https://web.dev/articles/browser-level-image-lazy-loading). The placeholder is set as the background to the image itself. Be careful: the placeholder is not removed when the image loads, so it's not recommended to use this component if you anticipate that the image may have an alpha channel with transparencies.
- `<Image />` is a [Client Component](https://nextjs.org/docs/app/building-your-application/rendering/client-components). Since it runs on the browser, it has the ability to set a cross-fade effect between the placeholder and the original image, but at the cost of generating more complex HTML output composed of multiple elements around the main `<picture />` element. It also implements lazy-loading through `IntersectionObserver`, which allows customization of the thresholds at which lazy loading occurs.

## Usage

1. Import `Image` or `SRCImage` from `react-datocms` and use it in place of a regular `<img />` tag
2. Write a GraphQL query to your DatoCMS project using the [`responsiveImage` query](https://www.datocms.com/docs/content-delivery-api/images-and-videos#responsive-images)

The GraphQL query returns multiple thumbnails with optimized compression. The image components automatically set up the “blur-up” effect as well as lazy loading of images further down the screen.

## Example

For a fully working example take a look at our [examples directory](https://github.com/datocms/react-datocms/tree/master/examples).

```jsx
import React from 'react';
import { Image, SRCImage } from 'react-datocms';

const Page = ({ data }) => (
  <div>
    <h1>{data.blogPost.title}</h1>
    {/* uses native loading="lazy" */}
    <SRCImage data={data.blogPost.cover.responsiveImage} />
    {/* custom lazy-loading via IntersectionObserver */}
    <Image data={data.blogPost.cover.responsiveImage} />
  </div>
);

const query = gql`
  query {
    blogPost {
      title
      cover {
        responsiveImage(
          imgixParams: { fit: crop, w: 300, h: 300, auto: format }
        ) {
          # always required
          src
          srcSet
          width
          height

          # not required, but strongly suggested!
          alt
          title

          # blur-up placeholder, JPEG format, base64-encoded, or...
          base64
          # background color placeholder
          bgColor

          # you can omit `sizes` if you explicitly pass the `sizes` prop to the image component
          sizes
        }
      }
    }
  }
`;

export default withQuery(query)(Page);
```

### The `ResponsiveImage` object

The `data` prop of both components expects an object with the same shape as the one returned by `responsiveImage` GraphQL call. It's up to you to make a GraphQL query that will return the properties you need for a specific use of the `<Image>` component.

- The minimum required properties for `data` are: `src`, `width` and `height`;
- `alt` and `title`, while not mandatory, are all highly suggested, so remember to use them!
- If you don't request `srcSet`, the component will auto-generate an `srcset` based on `src` + the `srcSetCandidates` prop (it can help reducing the GraphQL response size drammatically when many images are returned);
- We strongly to suggest to always specify [`{ auto: format }`](https://docs.imgix.com/apis/rendering/auto/auto#format) in your `imgixParams`, instead of requesting `webpSrcSet`, so that you can also take advantage of more performant optimizations (AVIF), without increasing GraphQL response size;
- If you request both the `bgColor` and `base64` property, the latter will take precedence, so just avoid querying both fields at the same time, as it will only make the GraphQL response bigger :wink:;
- You can avoid requesting `sizes` and directly pass a `sizes` prop to the component to reduce the GraphQL response size;

Here's a complete recap of what `responsiveImage` offers:

| property   | type    | required           | description                                                                                                                                                                                    |
| ---------- | ------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| src        | string  | :white_check_mark: | The `src` attribute for the image                                                                                                                                                              |
| width      | integer | :white_check_mark: | The width of the image                                                                                                                                                                         |
| height     | integer | :white_check_mark: | The height of the image                                                                                                                                                                        |
| alt        | string  | :x:                | Alternate text (`alt`) for the image (not required, but strongly suggested!)                                                                                                                   |
| title      | string  | :x:                | Title attribute (`title`) for the image (not required, but strongly suggested!)                                                                                                                |
| sizes      | string  | :x:                | The HTML5 `sizes` attribute for the image (omit it if you're already passing a `sizes` prop to the Image component)                                                                            |
| base64     | string  | :x:                | A base64-encoded thumbnail to offer during image loading                                                                                                                                       |
| bgColor    | string  | :x:                | The background color for the image placeholder (omit it if you're already requesting `base64`)                                                                                                 |
| srcSet     | string  | :x:                | The HTML5 `srcSet` attribute for the image (can be omitted, the Image component knows how to build it based on `src`)                                                                          |
| webpSrcSet | string  | :x:                | The HTML5 `srcSet` attribute for the image in WebP format (deprecated, it's better to use the [`auto=format`](https://docs.imgix.com/apis/rendering/auto/auto#format) Imgix transform instead) |

## `<SRCImage>`

### Props

| prop             | type                     | required                     | description                                                                                                                                          | default                                                                                                                                              |
| ---------------- | ------------------------ | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| data             | `ResponsiveImage` object | :white_check_mark:           | The actual response you get from a DatoCMS `responsiveImage` GraphQL query \*\*\*\*                                                                  |                                                                                                                                                      |
| pictureClassName | string                   | :x:                          | Additional className for the root `<picture>` tag                                                                                                    | null                                                                                                                                                 |
| pictureStyle     | CSS properties           | :x:                          | Additional CSS rules to add to the root `<picture>` tag                                                                                              | null                                                                                                                                                 |
| imgClassName     | string                   | :x:                          | Additional className for the `<img>` tag                                                                                                             | null                                                                                                                                                 |
| imgStyle         | CSS properties           | :x:                          | Additional CSS rules to add to the `<img>` tag                                                                                                       | null                                                                                                                                                 |
| priority         | Boolean                  | :x:                          | Disables lazy loading, and sets the image [fetchPriority](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/fetchPriority) to "high" | false                                                                                                                                                |
| sizes            | string                   | :x:                          | The HTML5 [`sizes`](https://web.dev/learn/design/responsive-images/#sizes) attribute for the image (will be used `data.sizes` as a fallback)         | undefined                                                                                                                                            |
| usePlaceholder   | Boolean                  | :x:                          | Whether the image should use a blurred image placeholder                                                                                             | true                                                                                                                                                 |
| srcSetCandidates | Array<number>            | :x:                          | If `data` does not contain `srcSet`, the candidates for the `srcset` attribute of the image will be auto-generated based on these width multipliers  | [0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4]                                                                                                                   |
| referrerPolicy   | string                   | `no-referrer-when-downgrade` | :x:                                                                                                                                                  | Defines which referrer is sent when fetching the image. Defaults to `no-referrer-when-downgrade` to give more useful stats in DatoCMS Project Usages |

## `<Image>`

### Props

| prop                  | type                                             | required                     | description                                                                                                                                                                                                                                                                                   | default                                                                                                                                              |
| --------------------- | ------------------------------------------------ | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| data                  | `ResponsiveImage` object                         | :white_check_mark:           | The actual response you get from a DatoCMS `responsiveImage` GraphQL query                                                                                                                                                                                                                    |                                                                                                                                                      |
| layout                | 'intrinsic' \| 'fixed' \| 'responsive' \| 'fill' | :x:                          | The layout behavior of the image as the viewport changes size                                                                                                                                                                                                                                 | "intrinsic"                                                                                                                                          |
| fadeInDuration        | integer                                          | :x:                          | Duration (in ms) of the fade-in transition effect upon image loading                                                                                                                                                                                                                          | 500                                                                                                                                                  |
| intersectionThreshold | float                                            | :x:                          | Indicate at what percentage of the placeholder visibility the loading of the image should be triggered. A value of 0 means that as soon as even one pixel is visible, the callback will be run. A value of 1.0 means that the threshold isn't considered passed until every pixel is visible. | 0                                                                                                                                                    |
| intersectionMargin    | string                                           | :x:                          | Margin around the placeholder. Can have values similar to the CSS margin property (top, right, bottom, left). The values can be percentages. This set of values serves to grow or shrink each side of the placeholder element's bounding box before computing intersections.                  | "0px 0px 0px 0px"                                                                                                                                    |
| priority              | Boolean                                          | :x:                          | Disables lazy loading, and sets the image [fetchPriority](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/fetchPriority) to "high"                                                                                                                                          | false                                                                                                                                                |
| sizes                 | string                                           | :x:                          | The HTML5 [`sizes`](https://web.dev/learn/design/responsive-images/#sizes) attribute for the image (will be used `data.sizes` as a fallback)                                                                                                                                                  | undefined                                                                                                                                            |
| onLoad                | () => void                                       | :x:                          | Function triggered when the image has finished loading                                                                                                                                                                                                                                        | undefined                                                                                                                                            |
| usePlaceholder        | Boolean                                          | :x:                          | Whether the component should use a blurred image placeholder                                                                                                                                                                                                                                  | true                                                                                                                                                 |
| srcSetCandidates      | Array<number>                                    | :x:                          | If `data` does not contain `srcSet`, the candidates for the `srcset` attribute of the image will be auto-generated based on these width multipliers                                                                                                                                           | [0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4]                                                                                                                   |
| className             | string                                           | :x:                          | Additional CSS className for root node                                                                                                                                                                                                                                                        | null                                                                                                                                                 |
| style                 | CSS properties                                   | :x:                          | Additional CSS rules to add to the root node                                                                                                                                                                                                                                                  | null                                                                                                                                                 |
| pictureClassName      | string                                           | :x:                          | Additional CSS class for the inner `<picture />` tag                                                                                                                                                                                                                                          | null                                                                                                                                                 |
| pictureStyle          | CSS properties                                   | :x:                          | Additional CSS rules to add to the inner `<picture />` tag                                                                                                                                                                                                                                    | null                                                                                                                                                 |
| imgClassName          | string                                           | :x:                          | Additional CSS class for the image inside the `<picture />` tag                                                                                                                                                                                                                               | null                                                                                                                                                 |
| imgStyle              | CSS properties                                   | :x:                          | Additional CSS rules to add to the image inside the `<picture />` tag                                                                                                                                                                                                                         | null                                                                                                                                                 |
| placeholderClassName  | string                                           | :x:                          | Additional CSS class for the placeholder image                                                                                                                                                                                                                                                | null                                                                                                                                                 |
| placeholderStyle      | CSS properties                                   | :x:                          | Additional CSS rules for the placeholder image                                                                                                                                                                                                                                                | null                                                                                                                                                 |
| referrerPolicy        | string                                           | `no-referrer-when-downgrade` | :x:                                                                                                                                                                                                                                                                                           | Defines which referrer is sent when fetching the image. Defaults to `no-referrer-when-downgrade` to give more useful stats in DatoCMS Project Usages |

### Layout mode

With the `layout` property, you can configure the behavior of the image as the viewport changes size:

- When `intrinsic` (default behaviour), the image will scale the dimensions down for smaller viewports, but maintain the original dimensions for larger viewports.
- When `fixed`, the image dimensions will not change as the viewport changes (no responsiveness) similar to the native `img` element.
- When `responsive`, the image will scale the dimensions down for smaller viewports and scale up for larger viewports.
- When `fill`, the image will stretch both width and height to the dimensions of the parent element, provided the parent element is relative.
  - This is usually paired with the `objectFit` and `objectPosition` properties.
  - Ensure the parent element has `position: relative` in their stylesheet.

Example for `layout="fill"` (useful also for background images):

```jsx
<div style={{ position: 'relative', width: 200, height: 500 }}>
  <Image data={imageData} layout="fill" objectFit="cover" objectPosition="50% 50%" />
</div>
```

### Changing `data`

If the `data` prop changes over time, this component works like a regular `<img />` in a browser: the new image won't appear until it loads, while the old image stays visible. If you want the old image to disappear while loading, you can use a `key=` so that React sees the changing image as a new `<img />` instead of just changing the src attribute:

```jsx
<Image key={imageData.src} data={imageData} />
```

---

# Structured text

`<StructuredText />` is a React component that you can use to render the value contained inside a DatoCMS [Structured Text field type](https://www.datocms.com/docs/structured-text/dast).

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installation](#installation)
- [Basic usage](#basic-usage)
- [Custom renderers for inline records, blocks, and links](#custom-renderers-for-inline-records-blocks-and-links)
- [Override default rendering of nodes](#override-default-rendering-of-nodes)
- [Props](#props)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

```
npm install --save react-datocms
```

## Basic usage

```js
import React from 'react';
import { StructuredText } from 'react-datocms';

const Page = ({ data }) => {
  // data.blogPost.content = {
  //   value: {
  //     schema: "dast",
  //     document: {
  //       type: "root",
  //       children: [
  //         {
  //           type: "heading",
  //           level: 1,
  //           children: [
  //             {
  //               type: "span",
  //               value: "Hello ",
  //             },
  //             {
  //               type: "span",
  //               marks: ["strong"],
  //               value: "world!",
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   },
  // }

  return (
    <div>
      <h1>{data.blogPost.title}</h1>
      <StructuredText data={data.blogPost.content} />
      {/* -> <h1>Hello <strong>world!</strong></h1> */}
    </div>
  );
};

const query = gql`
  query {
    blogPost {
      title
      content {
        value
      }
    }
  }
`;

export default withQuery(query)(Page);
```

## Custom renderers for inline records, blocks, and links

You can also pass custom renderers for special nodes (inline records, record links and blocks) as an optional parameter like so:

```js
import React from 'react';
import { StructuredText, Image } from 'react-datocms';

const Page = ({ data }) => {
  // data.blogPost.content ->
  // {
  //   value: {
  //     schema: "dast",
  //     document: {
  //       type: "root",
  //       children: [
  //         {
  //           type: "heading",
  //           level: 1,
  //           children: [
  //             { type: "span", value: "Welcome onboard " },
  //             { type: "inlineItem", item: "324321" },
  //           ],
  //         },
  //         {
  //           type: "paragraph",
  //           children: [
  //             { type: "span", value: "So happy to have " },
  //             {
  //               type: "itemLink",
  //               item: "324321",
  //               children: [
  //                 {
  //                   type: "span",
  //                   marks: ["strong"],
  //                   value: "this awesome humang being",
  //                 },
  //               ]
  //             },
  //             { type: "span", value: " in our team! We call him " },
  //             { type: "inlineBlock", item: "1984560" }
  //           ]
  //         },
  //         { type: "block", item: "1984559" }
  //       ],
  //     },
  //   },
  //   links: [
  //     {
  //       id: "324321",
  //       __typename: "TeamMemberRecord",
  //       firstName: "Mark",
  //       slug: "mark-smith",
  //     },
  //   ],
  //   blocks: [
  //     {
  //       id: "1984559",
  //       __typename: "CtaRecord",
  //       title: "Call to action",
  //       url: "https://google.com"
  //     },
  //   ],
  //   inlineBlocks: [
  //     {
  //       id: "1984560",
  //       __typename: "MentionRecord",
  //       username: "steffoz",
  //     },
  //   ],
  // }

  return (
    <div>
      <h1>{data.blogPost.title}</h1>
      <StructuredText
        data={data.blogPost.content}
        renderInlineRecord={({ record }) => {
          switch (record.__typename) {
            case 'TeamMemberRecord':
              return <a href={`/team/${record.slug}`}>{record.firstName}</a>;
            default:
              return null;
          }
        }}
        renderLinkToRecord={({ record, children, transformedMeta }) => {
          switch (record.__typename) {
            case 'TeamMemberRecord':
              return (
                <a {...transformedMeta} href={`/team/${record.slug}`}>
                  {children}
                </a>
              );
            default:
              return null;
          }
        }}
        renderBlock={({ record }) => {
          switch (record.__typename) {
            case 'CtaRecord':
              return (
                <a className="button" href={record.url}>
                  {record.title}
                </a>
              );
            default:
              return null;
          }
        }}
        renderInlineBlock={({ record }) => {
          switch (record.__typename) {
            case 'MentionRecord':
              return <code>@{record.username}</code>;
            default:
              return null;
          }
        }}
      />
      {/*
        Final result:

        <h1>Welcome onboard <a href="/team/mark-smith">Mark</a></h1>
        <p>So happy to have <a href="/team/mark-smith">this awesome humang being</a> in our team! We call him <code>@steffoz</code></p>
        <img src="https://www.datocms-assets.com/205/1597757278-austin-distel-wd1lrb9oeeo-unsplash.jpg" alt="Our team at work" />
      */}
    </div>
  );
};

const query = gql`
  query {
    blogPost {
      title
      content {
        value
        links {
          ... on RecordInterface {
            id
            __typename
          }
          ... on TeamMemberRecord {
            firstName
            slug
          }
        }
        blocks {
          ... on RecordInterface {
            id
            __typename
          }
          ... on CtaRecord {
            title
            url
          }
        }
        inlineBlocks {
          ... on RecordInterface {
            id
            __typename
          }
          ... on MentionRecord {
            username
          }
        }
      }
    }
  }
`;

export default withQuery(query)(Page);
```

## Override default rendering of nodes

This component automatically renders all nodes (except for `inlineItem`, `itemLink`, `block` and `inlineBlock`) using a set of default rules, but you might want to customize those. For example:

For example:

- For `heading` nodes, you might want to add an anchor;
- For `code` nodes, you might want to use a custom sytax highlighting component like [`prism-react-renderer`](https://github.com/FormidableLabs/prism-react-renderer);
- Apply different logic/formatting to a node based on what its parent node is (using the `ancestors` parameter)

- For all possible node types, refer to the [list of typeguard functions defined in the main `structured-text` package](https://github.com/datocms/structured-text/tree/main/packages/utils#typescript-type-guards). The [DAST format documentation](https://www.datocms.com/docs/structured-text/dast) has additional details.

In this case, you can easily override default rendering rules with the `customNodeRules` and `customMarkRules` props.

```jsx
import { renderNodeRule, renderMarkRule, StructuredText } from 'react-datocms';
import { isHeading, isCode } from 'datocms-structured-text-utils';
import { render as toPlainText } from 'datocms-structured-text-to-plain-text';
import SyntaxHighlight from 'components/SyntaxHighlight';

<StructuredText
  data={data.blogPost.content}
  customNodeRules={[
    // Add HTML anchors to heading levels for in-page navigation
    renderNodeRule(isHeading, ({ node, children, key }) => {
      const HeadingTag = `h${node.level}`;
      const anchor = toPlainText(node)
        .toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '');

      return (
        <HeadingTag key={key}>
          {children} <a id={anchor} />
          <a href={`#${anchor}`} />
        </HeadingTag>
      );
    }),

    // Use a custom syntax highlighter component for code blocks
    renderNodeRule(isCode, ({ node, key }) => {
      return (
        <SyntaxHighlight
          key={key}
          code={node.code}
          language={node.language}
          linesToBeHighlighted={node.highlight}
        />
      );
    }),

    // Apply different formatting to top-level paragraphs
    renderNodeRule(isParagraph, ({ adapter: { renderNode }, node, children, key, ancestors }) => {
      if (isRoot(ancestors[0])) {
        // If this paragraph node is a top-level one, give it a special class
        return renderNode(
          'p',
          { key, className: 'top-level-paragraph-container-example' },
          children,
        );
      } else {
        // Proceed with default paragraph rendering...
        // return renderNode('p', { key }, children);

        // Or even completely remove the paragraph and directly render the inner children:
        return <React.Fragment key={key}>{children}</React.Fragment>;
      }
    }),
  ]}
  customMarkRules={[
    // convert "strong" marks into <b> tags
    renderMarkRule('strong', ({ mark, children, key }) => {
      return <b key={key}>{children}</b>;
    }),
  ]}
/>;
```

Note: if you override the rules for `inlineItem`, `itemLink`, `block` or `inlineBlock` nodes, then the `renderInlineRecord`, `renderLinkToRecord`, `renderBlock` and `renderInlineBlock` props won't be considered!

## Props

| prop               | type                                                            | required                                               | description                                                                                      | default                                                                                                              |
| ------------------ | --------------------------------------------------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------- |
| data               | `StructuredTextGraphQlResponse \| DastNode`                     | :white_check_mark:                                     | The actual [field value](https://www.datocms.com/docs/structured-text/dast) you get from DatoCMS |                                                                                                                      |
| renderInlineRecord | `({ record }) => ReactElement \| null`                          | Only required if document contains `inlineItem` nodes  | Convert an `inlineItem` DAST node into React                                                     | `[]`                                                                                                                 |
| renderLinkToRecord | `({ record, children }) => ReactElement \| null`                | Only required if document contains `itemLink` nodes    | Convert an `itemLink` DAST node into React                                                       | `null`                                                                                                               |
| renderBlock        | `({ record }) => ReactElement \| null`                          | Only required if document contains `block` nodes       | Convert a `block` DAST node into React                                                           | `null`                                                                                                               |
| renderInlineBlock  | `({ record }) => ReactElement \| null`                          | Only required if document contains `inlineBlock` nodes | Convert an `inlineBlock` DAST node into React                                                    | `null`                                                                                                               |
| metaTransformer    | `({ node, meta }) => Object \| null`                            | :x:                                                    | Transform `link` and `itemLink` meta property into HTML props                                    | [See function](https://github.com/datocms/structured-text/blob/main/packages/generic-html-renderer/src/index.ts#L61) |
| customNodeRules    | `Array<RenderRule>`                                             | :x:                                                    | Customize how nodes are converted in JSX (use `renderNodeRule()` to generate rules)              | `null`                                                                                                               |
| customMarkRules    | `Array<RenderMarkRule>`                                         | :x:                                                    | Customize how marks are converted in JSX (use `renderMarkRule()` to generate rules)              | `null`                                                                                                               |
| renderText         | `(text: string, key: string) => ReactElement \| string \| null` | :x:                                                    | Convert a simple string text into React                                                          | `(text) => text`                                                                                                     |

---

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [`<VideoPlayer/>` component for easy video integration.](#videoplayer-component-for-easy-video-integration)
  - [Out-of-the-box features](#out-of-the-box-features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Example](#example)
  - [Props](#props)
  - [Advanced usage: the `useVideoPlayer` hook](#advanced-usage-the-usevideoplayer-hook)
    - [Example](#example-1)
  - [Opt-in Viewer Analytics](#opt-in-viewer-analytics)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# `<VideoPlayer/>` component for easy video integration.

`<VideoPlayer />` is a React component specially designed to work seamlessly with DatoCMS’s [`video` GraphQL query](https://www.datocms.com/docs/content-delivery-api/images-and-videos#videos) that optimizes video streaming for your sites.

To stream videos, DatoCMS partners with MUX, a video CDN that serves optimized streams to your users. Our component is a wrapper over MUX's video player for React. It takes care of the details for you, and this is our recommended way to serve optimal videos to your users.

## Out-of-the-box features

- Offers optimized streaming so smartphones and tablets don’t request desktop-sized videos
- Lazy loads the video component and the video to be played to speed initial page load and save bandwidth
- Holds the video position and size so your page doesn’t jump while the player loads
- Uses blur-up technique to show a placeholder of the video while it loads

## Installation

```
npm install --save react-datocms @mux/mux-player-react
```

`@mux/mux-player-react` is a [peer dependency](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#peerdependencies) for `react-datocms`: so you're expected to add it in your project.

## Usage

1. Import `VideoPlayer` from `react-datocms` and use it in your app
2. Write a GraphQL query to your DatoCMS project using the [`video` query](https://www.datocms.com/docs/content-delivery-api/images-and-videos#videos)

The GraphQL query returns data that the `VideoPlayer` component automatically uses to properly size the player, set up a “blur-up” placeholder as well as lazy loading the video.

## Example

For a fully working example take a look at our [examples directory](https://github.com/datocms/react-datocms/tree/master/examples).

```js
import React from 'react';
import { VideoPlayer } from 'react-datocms';

const Page = ({ data }) => (
  <div>
    <h1>{data.blogPost.title}</h1>
    <VideoPlayer data={data.blogPost.cover.video} />
  </div>
);

const query = gql`
  query {
    blogPost {
      title
      cover {
        video {
          # required: this field identifies the video to be played
          muxPlaybackId

          # all the other fields are not required but:

          # if provided, title is displayed in the upper left corner of the video
          title

          # if provided, width and height are used to define the aspect ratio of the
          # player, so to avoid layout jumps during the rendering.
          width
          height

          # if provided, it shows a blurred placeholder for the video
          blurUpThumb

          # you can include more data here: they will be ignored by the component
        }
      }
    }
  }
`;

export default withQuery(query)(Page);
```

## Props

The `<VideoPlayer />` components supports all [the properties made
available](https://github.com/muxinc/elements/blob/main/packages/mux-player-react/REFERENCE.md)
for `<MuxPlayer />` component from `@mux/mux-player-react` package plus `data`,
which is meant to receive data directly in the shape they are provided by
DatoCMS GraphQL API.

`<Video Player />` uses the `data` prop to generate a set of props for the inner
`<MuxPlayer />`. On this topic, also see the "Advanced usage" section below.

| prop | type           | required           | description                                                      | default |
| ---- | -------------- | ------------------ | ---------------------------------------------------------------- | ------- |
| data | `Video` object | :white_check_mark: | The actual response you get from a DatoCMS `video` GraphQL query |         |

Compared to the `<MuxPlayer />`, **some prop default values are different** on `<VideoPlayer />`

- `disableCookies` is normally true, unless you explicitly set the prop to `false`
- `disableTracking` is normally true, unless you explicitly set it to `false`
- `preload` defaults to `metadata`, for an optimal UX experience together with saved bandwidth
- the video height and width, when available in the `data` props, are used to set `{ aspectRatio: "[width] / [height]"}` for the `<MuxPlayer />`'s `style`

All the other props are forwarded to the `<MuxPlayer />` component that is used internally.

## Advanced usage: the `useVideoPlayer` hook

Even though we try our best to make the `<VideoPlayer />` suitable and easy to use for most normal use cases, there are situations where you may need to leverage the `<MuxPlayer />` directly (let's suppose you wrote your special wrapper component around the `<MuxPlayer />` and you need a bunch of props to pass). If that's the case, fill free to use the hook we provide: `useVideoPlayer`.

`useVideoPlayer` takes data coming in the shape they are produced from DatoCMS API and return props that you can pass to the `<MuxPlayer />` component. That's pretty much what the `<VideoPlayer />` does internally.

### Example

```
import { useVideoPlayer } from 'react-datocms';

const data = {
  muxPlaybackId: 'ip028MAXF026dU900bKiyNDttjonw7A1dFY',
  title: 'Title',
  width: 1080,
  height: 1920,
  blurUpThumb:
    'data:image/bmp;base64,Qk0eAAAAAAAAABoAAAAMAAAAAQABAAEAGAAAAP8A',
};

// `props` is the following object:
//
//     {
//        playbackId: 'ip028MAXF026dU900bKiyNDttjonw7A1dFY',
//        title: 'Title',
//        style: {
//          aspectRatio: '1080 / 1920',
//        },
//        placeholder:
//          'data:image/bmp;base64,Qk0eAAAAAAAAABoAAAAMAAAAAQABAAEAGAAAAP8A',
//      }
const props = useVideoPlayer({ data });

<MuxPlayer {...props} />
```

## Opt-in Viewer Analytics

This `<VideoPlayer/>` component can OPTIONALLY collect clientside [playback and engagement metrics](https://www.mux.com/data#TechSpecs) such as playback percentages, user agents, and geography.

These analytics are **disabled** by default. To enable them, you must opt in to [Mux Data](https://www.mux.com/data) integration by creating a Mux Data account (free) and providing its `envKey` to the component.

For details and setup instructions, please see our documentation on **[Streaming Video Analytics with Mux Data](https://www.datocms.com/docs/streaming-videos/streaming-video-analytics-with-mux-data)**.

---

# Live real-time updates

`useQuerySubscription` is a React hook that you can use to implement client-side updates of the page as soon as the content changes. It uses DatoCMS's [Real-time Updates API](https://www.datocms.com/docs/real-time-updates-api/api-reference) to receive the updated query results in real-time, and is able to reconnect in case of network failures.

Live updates are great both to get instant previews of your content while editing it inside DatoCMS, or to offer real-time updates of content to your visitors (ie. news site).

- TypeScript ready;
- Compatible with vanilla React, Next.js and pretty much any other React-based solution;

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installation](#installation)
- [Reference](#reference)
- [Initialization options](#initialization-options)
- [Connection status](#connection-status)
- [Error object](#error-object)
- [Example](#example)
- [The `fetcher` option](#the-fetcher-option)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

```
npm install --save react-datocms
```

## Reference

Import `useQuerySubscription` from `react-datocms` and use it inside your components like this:

```js
const {
  data: QueryResult | undefined,
  error: ChannelErrorData | null,
  status: ConnectionStatus,
} = useQuerySubscription(options: Options);
```

## Initialization options

| prop               | type                                                                                       | required           | description                                                                                      | default                              |
| ------------------ | ------------------------------------------------------------------------------------------ | ------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------ |
| enabled            | boolean                                                                                    | :x:                | Whether the subscription has to be performed or not                                              | true                                 |
| query              | string \| [`TypedDocumentNode`](https://github.com/dotansimha/graphql-typed-document-node) | :white_check_mark: | The GraphQL query to subscribe                                                                   |                                      |
| token              | string                                                                                     | :white_check_mark: | DatoCMS API token to use                                                                         |                                      |
| variables          | Object                                                                                     | :x:                | GraphQL variables for the query                                                                  |                                      |
| includeDrafts      | boolean                                                                                    | :x:                | If true, draft records will be returned                                                          |                                      |
| excludeInvalid     | boolean                                                                                    | :x:                | If true, invalid records will be filtered out                                                    |                                      |
| environment        | string                                                                                     | :x:                | The name of the DatoCMS environment where to perform the query (defaults to primary environment) |                                      |
| contentLink        | `'vercel-1'` or `undefined`                                                                | :x:                | If true, embed metadata that enable Content Link                                                 |                                      |
| baseEditingUrl     | string                                                                                     | :x:                | The base URL of the DatoCMS project                                                              |                                      |
| cacheTags          | boolean                                                                                    | :x:                | If true, receive the Cache Tags associated with the query                                        |                                      |
| initialData        | Object                                                                                     | :x:                | The initial data to use on the first render                                                      |                                      |
| reconnectionPeriod | number                                                                                     | :x:                | In case of network errors, the period (in ms) to wait to reconnect                               | 1000                                 |
| fetcher            | a [fetch-like function](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)        | :x:                | The fetch function to use to perform the registration query                                      | window.fetch                         |
| eventSourceClass   | an [EventSource-like](https://developer.mozilla.org/en-US/docs/Web/API/EventSource) class  | :x:                | The EventSource class to use to open up the SSE connection                                       | window.EventSource                   |
| baseUrl            | string                                                                                     | :x:                | The base URL to use to perform the query                                                         | `https://graphql-listen.datocms.com` |

## Connection status

The `status` property represents the state of the server-sent events connection. It can be one of the following:

- `connecting`: the subscription channel is trying to connect
- `connected`: the channel is open, we're receiving live updates
- `closed`: the channel has been permanently closed due to a fatal error (ie. an invalid query)

## Error object

| prop     | type   | description                                             |
| -------- | ------ | ------------------------------------------------------- |
| code     | string | The code of the error (ie. `INVALID_QUERY`)             |
| message  | string | An human friendly message explaining the error          |
| response | Object | The raw response returned by the endpoint, if available |

## Example

```js
import React from 'react';
import { useQuerySubscription } from 'react-datocms';

const App: React.FC = () => {
  const { status, error, data } = useQuerySubscription({
    enabled: true,
    query: `
      query AppQuery($first: IntType) {
        allBlogPosts {
          slug
          title
        }
      }`,
    variables: { first: 10 },
    token: 'YOUR_API_TOKEN',
  });

  const statusMessage = {
    connecting: 'Connecting to DatoCMS...',
    connected: 'Connected to DatoCMS, receiving live updates!',
    closed: 'Connection closed',
  };

  return (
    <div>
      <p>Connection status: {statusMessage[status]}</p>
      {error && (
        <div>
          <h1>Error: {error.code}</h1>
          <div>{error.message}</div>
          {error.response && (
            <pre>{JSON.stringify(error.response, null, 2)}</pre>
          )}
        </div>
      )}
      {data && (
        <ul>
          {data.allBlogPosts.map((blogPost) => (
            <li key={blogPost.slug}>{blogPost.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
```

## The `fetcher` option

Be careful with how you define the `fetcher` option: use a function that is
defined as a `const` outside of the lexical scope where you're using
`useQuerySubscription`.

If you don't, you could have an infinite render loop, because the function looks
like new at every render of the component. For more info, see
[use-deep-compare-effect](https://github.com/kentcdodds/use-deep-compare-effect?tab=readme-ov-file#usage)
documentation.

The following example is ok:

```js
const fetcher = (baseUrl, { headers, method, body }) => {
  return fetch(baseUrl, {
    headers: {
      ...headers,
      'X-Custom-Header': "that's needed for some reason",
    },
    method,
    body,
  });
};

export default function Home() {
  const { status, error, data } = useQuerySubscription({
    fetcher,
    // Other options here
  });

  return ...
}
```

**This one is not**, because the new function that is generated every time the component is rendered triggers another render:

```js
export default function Home() {
  const { status, error, data } = useQuerySubscription({
    fetcher: (baseUrl, { headers, method, body }) => {
      return fetch(baseUrl, {
        headers: {
          ...headers,
          'X-Custom-Header': "that's needed for some reason",
        },
        method,
        body,
      });
    },
    // Other options here
  });

  return ...
}
```

---

# Site Search hook

`useSiteSearch` is a React hook that you can use to render a [DatoCMS Site Search](https://www.datocms.com/docs/site-search) widget.
The hook only handles the form logic: you are in complete and full control of how your form renders down to the very last component, class or style.

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installation](#installation)
- [Reference](#reference)
- [Initialization options](#initialization-options)
- [Returned data](#returned-data)
- [Complete example](#complete-example)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

To perform the necessary API requests, this hook requires a [DatoCMS CMA Client](https://www.datocms.com/docs/content-management-api/using-the-nodejs-clients) instance, so make sure to also add the following package to your project:

```bash
npm install --save react-datocms @datocms/cma-client-browser
```

## Reference

Import `useSiteSearch` from `react-datocms` and use it inside your components like this:

```js
import { useSiteSearch } from 'react-datocms';
import { buildClient } from '@datocms/cma-client-browser';

const client = buildClient({ apiToken: 'YOUR_API_TOKEN' });

const { state, error, data } = useSiteSearch({
  client,
  buildTriggerId: '7497',
  // optional: by default fuzzy-search is not active
  fuzzySearch: true,
  // optional: you can omit it you only have one locale, or you want to find results in every locale
  initialState: { locale: 'en' },
  // optional: to configure how to present the part of page title/content that matches the query
  highlightMatch: (text, key, context) =>
    context === 'title' ? <strong key={key}>{text}</strong> : <mark key={key}>{text}</mark>,
  // optional: defaults to 8 search results per page
  resultsPerPage: 10,
});
```

For a complete walk-through, please refer to the [DatoCMS Site Search documentation](https://www.datocms.com/docs/site-search).

## Initialization options

| prop                | type                                                               | required           | description                                                                                                                                | default                                                    |
| ------------------- | ------------------------------------------------------------------ | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------- |
| client              | CMA Client instance                                                | :white_check_mark: | [DatoCMS CMA Client](https://www.datocms.com/docs/content-management-api/using-the-nodejs-clients) instance                                |                                                            |
| buildTriggerId      | string                                                             | :white_check_mark: | The [ID of the build trigger](https://www.datocms.com/docs/site-search/base-integration#performing-searches) to use to find search results |                                                            |
| fuzzySearch         | boolean                                                            | :x:                | Whether fuzzy-search is active or not. When active, it will also find strings that approximately match the query provided.                 | false                                                      |
| resultsPerPage      | number                                                             | :x:                | The number of search results to show per page                                                                                              | 8                                                          |
| highlightMatch      | (match, key, context: 'title' \| 'bodyExcerpt') => React.ReactNode | :x:                | A function specifying how to highlight the part of page title/content that matches the query                                               | (text, key) => (&lt;mark key={key}&gt;{text}&lt;/mark&gt;) |
| initialState.query  | string                                                             | :x:                | Initialize the form with a specific query                                                                                                  | ''                                                         |
| initialState.locale | string                                                             | :x:                | Initialize the form starting from a specific page                                                                                          | 0                                                          |
| initialState.page   | string                                                             | :x:                | Initialize the form with a specific locale selected                                                                                        | null                                                       |

## Returned data

The hook returns an object with the following shape:

```typescript
{
  state: {
    query: string;
    setQuery: (newQuery: string) => void;
    locale: string | undefined;
    setLocale: (newLocale: string) => void;
    page: number;
    setPage: (newPage: number) => void;
  },
  error?: string,
  data?: {
    pageResults: Array<{
      id: string;
      title: React.ReactNode;
      bodyExcerpt: React.ReactNode;
      url: string;
      raw: RawSearchResult;
    }>;
    totalResults: number;
    totalPages: number;
  },
}
```

- The `state` property reflects the current state of the form (the current `query`, `page`, and `locale`), and offers a number of functions to change the state itself. As soon as the state of the form changes, a new API request is made to fetch the new search results;
- The `error` property returns a string in case of failure of any API request;
- The `data` property returns all the information regarding the current search results to present to the user;

If both `error` and `data` are `null`, it means that the current state for the form is loading, and a spinner should be shown to the end user.

## Complete example

This example uses the [`react-paginate`](https://www.npmjs.com/package/react-paginate) npm package to simplify the handling of pagination:

```jsx
import { buildClient } from '@datocms/cma-client-browser';
import ReactPaginate from 'react-paginate';
import { useSiteSearch } from 'react-datocms';
import { useState } from 'react';

const client = buildClient({ apiToken: 'YOUR_API_TOKEN' });

function App() {
  const [query, setQuery] = useState('');

  const { state, error, data } = useSiteSearch({
    client,
    initialState: { locale: 'en' },
    highlightMatch: (text, key, context) =>
      context === 'title' ? <strong key={key}>{text}</strong> : <mark key={key}>{text}</mark>,
    buildTriggerId: '7497',
    resultsPerPage: 10,
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          state.setQuery(query);
        }}
      >
        <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} />
        <select
          value={state.locale}
          onChange={(e) => {
            state.setLocale(e.target.value);
          }}
        >
          <option value="en">English</option>
          <option value="it">Italian</option>
        </select>
      </form>
      {!data && !error && <p>Loading...</p>}
      {error && <p>Error! {error}</p>}
      {data && (
        <>
          {data.pageResults.map((result) => (
            <div key={result.id}>
              <a href={result.url}>{result.title}</a>
              <div>{result.bodyExcerpt}</div>
              <div>{result.url}</div>
            </div>
          ))}
          <p>Total results: {data.totalResults}</p>
          <ReactPaginate
            pageCount={data.totalPages}
            forcePage={state.page}
            onPageChange={({ selected }) => {
              state.setPage(selected);
            }}
            activeClassName="active"
            renderOnZeroPageCount={() => null}
          />
        </>
      )}
    </div>
  );
}
```

---

# Social share, SEO and Favicon meta tags

Just like for the [image component](./image.md) this package offers a number of utilities designed to work seamlessly with DatoCMS’s [`_seoMetaTags` and `faviconMetaTags` GraphQL queries](https://www.datocms.com/docs/content-delivery-api/seo) so that you can easily handle SEO, social shares and favicons in your pages.

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installation](#installation)
- [General usage](#general-usage)
- [`renderMetaTags()`](#rendermetatags)
- [`renderMetaTagsToString()`](#rendermetatagstostring)
- [`toRemixMeta()`](#toremixmeta)
  - [For Remix v1: `toRemixV1Meta()`](#for-remix-v1-toremixv1meta)
- [`toNextMetadata()`](#tonextmetadata)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

```
npm install --save react-datocms
```

## General usage

All the utilities take an array of `SeoOrFaviconTag`s in the exact form they're returned by the following [DatoCMS GraphQL API queries](https://www.datocms.com/docs/content-delivery-api/seo):

- `_seoMetaTags` (always available on any type of record)
- `faviconMetaTags` on the global `_site` object.

```graphql
query {
  page: homepage {
    title
    seo: _seoMetaTags {
      attributes
      content
      tag
    }
  }

  site: _site {
    favicon: faviconMetaTags {
      attributes
      content
      tag
    }
  }
}
```

You can then concat those two arrays of tags and pass them togheter to the function, ie:

```js
renderMetaTags([...data.page.seo, ...data.site.favicon]);
```

## `renderMetaTags()`

This function generates React `<meta>` and `<link />` elements, so it is compatible with React packages like [`react-helmet`](https://www.npmjs.com/package/react-helmet).

For a complete example take a look at our [examples directory](https://github.com/datocms/react-datocms/tree/master/examples).

```js
import React from 'react';
import { renderMetaTags } from 'react-datocms';

function Page({ data }) {
  return (
    <div>
      <Helmet>{renderMetaTags([...data.page.seo, ...data.site.favicon])}</Helmet>
    </div>
  );
}
```

## `renderMetaTagsToString()`

This function generates an HTML string containing `<meta>` and `<link />` tags, so it can be used server-side.

```js
import { renderMetaTagsToString } from 'react-datocms';

const someMoreComplexHtml = `
  <html>
    <head>
      ${renderMetaTagsToString([...data.page.seo, ...data.site.favicon])}
    </head>
  </html>
`;
```

## `toRemixMeta()`

This function generates an array of `MetaDescriptor` objects, compatibile with the [`meta`](https://remix.run/docs/en/2.8.1/route/meta) export of the Remix framework:

```js
import type { MetaFunction } from 'remix';
import { toRemixV1Meta } from 'react-datocms';

export const meta: MetaFunction = ({ data: { post } }) => {
  return toRemixV1Meta(post.seo);
};
```

Please note that the [`links`](https://remix.run/docs/en/v1.1.1/api/conventions#links) export [doesn't receive any loader data](https://github.com/remix-run/remix/issues/32), so you cannot use it to declare favicons meta tags!

The best way to render them is using the [`meta`](https://remix.run/docs/en/2.8.1/route/meta) export as the SEO meta tags, or (even better) using `renderMetaTags` in your root component:

```jsx
import { renderMetaTags } from 'react-datocms';

export const loader = () => {
  return request({
    query: `
        {
          site: _site {
            favicon: faviconMetaTags(variants: [icon, msApplication, appleTouchIcon]) {
              ...metaTagsFragment
            }
          }
        }
        ${metaTagsFragment}
      `,
  });
};

export default function App() {
  const { site } = useLoaderData();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        {renderMetaTags(site.favicon)}
      </head>
      <body>
        <Outlet />
        ...
      </body>
    </html>
  );
}
```

### For Remix v1: `toRemixV1Meta()`

If you're using Remix v1, you can use `toRemixV1Meta()` to generate an object compatible with the legacy [`meta`](https://remix.run/docs/en/v1.1.1/api/conventions#meta) export:

```js
import type { MetaFunction } from 'remix';
import { toRemixV1Meta } from 'react-datocms';

export const meta: MetaFunction = ({ data: { post } }) => {
  return toRemixV1Meta(post.seo);
};
```

## `toNextMetadata()`

This function generates a `Metadata` object, compatibile with the [`generateMetadata`](https://nextjs.org/docs/app/api-reference/functions/generate-metadata) export of the [Next](https://nextjs.org/) framework:

```js
export async function generateMetadata(): Promise<Metadata> {
  const { homepage } = await getHomepageContent()

  return toNextMetadata(homepage?._seoMetaTags || [])
}
```

---

# vue-datocms

[![MIT](https://img.shields.io/npm/l/vue-datocms?style=for-the-badge)](https://github.com/datocms/vue-datocms/blob/master/LICENSE) [![NPM](https://img.shields.io/npm/v/vue-datocms?style=for-the-badge)](https://www.npmjs.com/package/vue-datocms) [![Build Status](https://img.shields.io/github/actions/workflow/status/datocms/vue-datocms/node.js.yml?branch=master&style=for-the-badge)](https://github.com/datocms/vue-datocms/actions/workflows/node.js.yml)

A set of components and utilities to work faster with [DatoCMS](https://www.datocms.com/) in Vue.js environments. Integrates seamlessly with [DatoCMS's GraphQL Content Delivery API](https://www.datocms.com/docs/content-delivery-api).

- Works with Vue 3 (version 4 is maintained for compatibility with Vue 2);
- TypeScript ready;
- Compatible with any data-fetching library (axios, Apollo);
- Usable both client and server side;
- Compatible with vanilla Vue and pretty much any other Vue-based solution.

## Table of Contents

- [vue-datocms](#vue-datocms)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Installation](#installation)
  - [Development](#development)
- [What is DatoCMS?](#what-is-datocms)

## Features

`vue-datocms` contains Vue components ready to use, helpers functions and usage examples.

[Components](https://vuejs.org/guide/essentials/component-basics.html):

- [`<Image />` and `<NakedImage />`](src/components/Image)
- [`<VideoPlayer />`](src/components/VideoPlayer)
- [`<StructuredText />`](src/components/StructuredText)

[Composables](https://vuejs.org/guide/reusability/composables.html):

- [`useQuerySubscription`](src/composables/useQuerySubscription)
- [`useSiteSearch`](src/composables/useSiteSearch)
- [`useVideoPlayer`](src/composables/useVideoPlayer)

Helpers:

- [`toHead`](src/lib/toHead)

## Installation

```
# First, install Vue
npm install vue
# Then install vue-datocms
npm install vue-datocms

# Demos

For fully working examples take a look at our [examples directory](https://github.com/datocms/vue-datocms/tree/master/examples).

Live demo: [https://vue-datocms-example.netlify.com/](https://vue-datocms-example.netlify.com/)

```

## Development

This repository contains a number of demos/examples. You can use them to locally test your changes.

```bash
cd examples
npm setup
npm run dev
```

---

## Progressive/responsive images

`<datocms-image>` and `<datocms-naked-image>` are Vue components specially designed to work seamlessly with DatoCMS’s [`responsiveImage` GraphQL query](https://www.datocms.com/docs/content-delivery-api/uploads#responsive-images) which optimizes image loading for your websites.

- TypeScript ready;
- Usable both client and server side;
- Compatible with vanilla Vue, Nuxt and pretty much any other Vue-based solution;

### Out-of-the-box features

- Offers optimized version of images for browsers that support WebP/AVIF format
- Generates multiple smaller images so smartphones and tablets don’t download desktop-sized images
- Efficiently lazy loads images to speed initial page load and save bandwidth
- Holds the image position so your page doesn’t jump while images load
- Uses either blur-up or background color techniques to show a preview of the image while it loads

## Table of contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Setup](#setup)
- [`<datocms-image />` vs `<datocms-naked-image />`](#datocms-image--vs-datocms-naked-image-)
- [Usage](#usage)
- [Example](#example)
- [The `ResponsiveImage` object](#the-responsiveimage-object)
- [`<datocms-naked-image>`](#datocms-naked-image)
  - [Props](#props)
  - [Exposed public properties](#exposed-public-properties)
  - [Events](#events)
- [`<datocms-image>`](#datocms-image)
  - [Props](#props-1)
  - [Events](#events-1)
  - [Exposed public properties](#exposed-public-properties-1)
  - [Layout mode](#layout-mode)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Setup

You can register the components globally so they are available in your app:

```js
import Vue from 'vue';
import { DatocmsImagePlugin, DatocmsNakedImagePlugin } from 'vue-datocms';

Vue.use(DatocmsImagePlugin);
Vue.use(DatocmsNakedImagePlugin);
```

Or use it locally in any of your components:

```js
import { Image, NakedImage } from 'vue-datocms';

export default {
  components: {
    'datocms-image': Image,
    'datocms-naked-image': NakedImage,
  },
};
```

## `<datocms-image />` vs `<datocms-naked-image />`

Even though their purpose is the same, there are some significant differences between these two components. Depending on your specific needs, you can choose to use one or the other:

- `<datocms-naked-image />` generates minimum JS footprint, outputs a single `<picture />` element and implements lazy-loading using the native [`loading="lazy"` attribute](https://web.dev/articles/browser-level-image-lazy-loading). The placeholder is set as the background to the image itself.
- `<datocms-image />` has the ability to set a cross-fade effect between the placeholder and the original image, but at the cost of generating more complex HTML output composed of multiple elements around the main `<picture />` element. It also implements lazy-loading through `IntersectionObserver`, which allows customization of the thresholds at which lazy loading occurs.

## Usage

1. Use `<datocms-image>` or `<datocms-naked-image>` it in place of the regular `<img />` tag
2. Write a GraphQL query to your DatoCMS project using the [`responsiveImage` query](https://www.datocms.com/docs/content-delivery-api/images-and-videos#responsive-images)

The GraphQL query returns multiple thumbnails with optimized compression. The `<datocms-image>` component automatically sets up the "blur-up" effect as well as lazy loading of images further down the screen.

## Example

For a fully working example take a look at our [examples directory](https://github.com/datocms/vue-datocms/tree/master/examples).

```vue
<template>
  <article>
    <div v-if="data">
      <h1>{{ data.blogPost.title }}</h1>
      <datocms-image :data="data.blogPost.cover.responsiveImage" />
      <datocms-naked-image :data="data.blogPost.cover.responsiveImage" />
    </div>
  </article>
</template>

<script>
import { request } from './lib/datocms';
import { Image, NakedImage } from 'vue-datocms';

const query = gql`
  query {
    blogPost {
      title
      cover {
        responsiveImage(
          imgixParams: { fit: crop, w: 300, h: 300, auto: format }
        ) {
          # always required
          src
          width
          height
          # not required, but strongly suggested!
          alt
          title
          # blur-up placeholder, JPEG format, base64-encoded, or...
          base64
          # background color placeholder
          bgColor
          # you can omit `sizes` if you explicitly pass the `sizes` prop to the image component
          sizes
        }
      }
    }
  }
`;

export default {
  components: {
    'datocms-image': Image,
    'datocms-naked-image': NakedImage,
  },
  data() {
    return {
      data: null,
    };
  },
  async mounted() {
    this.data = await request({ query });
  },
};
</script>
```

## The `ResponsiveImage` object

The `data` prop of both components expects an object with the same shape as the one returned by `responsiveImage` GraphQL call. It's up to you to make a GraphQL query that will return the properties you need for a specific use of the `<datocms-image>` component.

- The minimum required properties for `data` are: `src`, `width` and `height`;
- `alt` and `title`, while not mandatory, are all highly suggested, so remember to use them!
- If you don't request `srcSet`, the component will auto-generate an `srcset` based on `src` + the `srcSetCandidates` prop (it can help reducing the GraphQL response size drammatically when many images are returned);
- We strongly to suggest to always specify [`{ auto: format }`](https://docs.imgix.com/apis/rendering/auto/auto#format) in your `imgixParams`, instead of requesting `webpSrcSet`, so that you can also take advantage of more performant optimizations (AVIF), without increasing GraphQL response size;
- If you request both the `bgColor` and `base64` property, the latter will take precedence, so just avoid querying both fields at the same time, as it will only make the GraphQL response bigger :wink:;
- You can avoid requesting `sizes` and directly pass a `sizes` prop to the component to reduce the GraphQL response size;
  Here's a complete recap of what `responsiveImage` offers:

| property    | type    | required           | description                                                                                                                                                                                    |
| ----------- | ------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| src         | string  | :white_check_mark: | The `src` attribute for the image                                                                                                                                                              |
| width       | integer | :white_check_mark: | The width of the image                                                                                                                                                                         |
| height      | integer | :white_check_mark: | The height of the image                                                                                                                                                                        |
| alt         | string  | :x:                | Alternate text (`alt`) for the image (not required, but strongly suggested!)                                                                                                                   |
| title       | string  | :x:                | Title attribute (`title`) for the image (not required, but strongly suggested!)                                                                                                                |
| sizes       | string  | :x:                | The HTML5 `sizes` attribute for the image (omit it if you're already passing a `sizes` prop to the Image component)                                                                            |
| base64      | string  | :x:                | A base64-encoded thumbnail to offer during image loading                                                                                                                                       |
| bgColor     | string  | :x:                | The background color for the image placeholder (omit it if you're already requesting `base64`)                                                                                                 |
| srcSet      | string  | :x:                | The HTML5 `srcSet` attribute for the image (can be omitted, the Image component knows how to build it based on `src`)                                                                          |
| webpSrcSet  | string  | :x:                | The HTML5 `srcSet` attribute for the image in WebP format (deprecated, it's better to use the [`auto=format`](https://docs.imgix.com/apis/rendering/auto/auto#format) Imgix transform instead) |
| aspectRatio | float   | :x:                | The aspect ratio (width/height) of the image                                                                                                                                                   |

## `<datocms-naked-image>`

### Props

| prop               | type                     | default                            | required           | description                                                                                                                                          |
| ------------------ | ------------------------ | ---------------------------------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| data               | `ResponsiveImage` object |                                    | :white_check_mark: | The actual response you get from a DatoCMS `responsiveImage` GraphQL query \*\*\*\*                                                                  |
| picture-class      | string                   | null                               | :x:                | Additional CSS class for the root `<picture>` tag                                                                                                    |
| picture-style      | CSS properties           | null                               | :x:                | Additional CSS rules to add to the root `<picture>` tag                                                                                              |
| img-class          | string                   | null                               | :x:                | Additional CSS class for the `<img>` tag                                                                                                             |
| img-style          | CSS properties           | null                               | :x:                | Additional CSS rules to add to the `<img>` tag                                                                                                       |
| priority           | Boolean                  | false                              | :x:                | Disables lazy loading, and sets the image [fetchPriority](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/fetchPriority) to "high" |
| sizes              | string                   | undefined                          | :x:                | The HTML5 [`sizes`](https://web.dev/learn/design/responsive-images/#sizes) attribute for the image (will be used `data.sizes` as a fallback)         |
| use-placeholder    | Boolean                  | true                               | :x:                | Whether the image should use a blurred image placeholder                                                                                             |
| src-set-candidates | Array<number>            | [0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4] | :x:                | If `data` does not contain `srcSet`, the candidates for the `srcset` attribute of the image will be auto-generated based on these width multipliers  |
| referrer-policy    | string                   | `no-referrer-when-downgrade`       | :x:                | Defines which referrer is sent when fetching the image. Defaults to `no-referrer-when-downgrade` to give more useful stats in DatoCMS Project Usages |

### Exposed public properties

| prop     | type               | description             |
| -------- | ------------------ | ----------------------- |
| imageRef | `HTMLImageElement` | `ref()` to the img node |

### Events

| prop  | description                                 |
| ----- | ------------------------------------------- |
| @load | Emitted when the image has finished loading |

## `<datocms-image>`

### Props

| prop                   | type                                             | required                     | description                                                                                                                                                                                                                                                                                   | default                                                                                                                                              |
| ---------------------- | ------------------------------------------------ | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| data                   | `ResponsiveImage` object                         | :white_check_mark:           | The actual response you get from a DatoCMS `responsiveImage` GraphQL query                                                                                                                                                                                                                    |                                                                                                                                                      |
| layout                 | 'intrinsic' \| 'fixed' \| 'responsive' \| 'fill' | :x:                          | The layout behavior of the image as the viewport changes size                                                                                                                                                                                                                                 | "intrinsic"                                                                                                                                          |
| fade-in-duration       | integer                                          | :x:                          | Duration (in ms) of the fade-in transition effect upon image loading                                                                                                                                                                                                                          | 500                                                                                                                                                  |
| intersection-threshold | float                                            | :x:                          | Indicate at what percentage of the placeholder visibility the loading of the image should be triggered. A value of 0 means that as soon as even one pixel is visible, the callback will be run. A value of 1.0 means that the threshold isn't considered passed until every pixel is visible. | 0                                                                                                                                                    |
| intersection-margin    | string                                           | :x:                          | Margin around the placeholder. Can have values similar to the CSS margin property (top, right, bottom, left). The values can be percentages. This set of values serves to grow or shrink each side of the placeholder element's bounding box before computing intersections.                  | "0px 0px 0px 0px"                                                                                                                                    |
| priority               | Boolean                                          | :x:                          | Disables lazy loading, and sets the image [fetchPriority](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/fetchPriority) to "high"                                                                                                                                          | false                                                                                                                                                |
| sizes                  | string                                           | :x:                          | The HTML5 [`sizes`](https://web.dev/learn/design/responsive-images/#sizes) attribute for the image (will be used `data.sizes` as a fallback)                                                                                                                                                  | undefined                                                                                                                                            |
| use-placeholder        | Boolean                                          | :x:                          | Whether the component should use a blurred image placeholder                                                                                                                                                                                                                                  | true                                                                                                                                                 |
| src-set-candidates     | Array<number>                                    | :x:                          | If `data` does not contain `srcSet`, the candidates for the `srcset` attribute of the image will be auto-generated based on these width multipliers                                                                                                                                           | [0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4]                                                                                                                   |
| class                  | string                                           | :x:                          | Additional CSS className for root node                                                                                                                                                                                                                                                        | null                                                                                                                                                 |
| style                  | CSS properties                                   | :x:                          | Additional CSS rules to add to the root node                                                                                                                                                                                                                                                  | null                                                                                                                                                 |
| picture-class          | string                                           | :x:                          | Additional CSS class for the inner `<picture />` tag                                                                                                                                                                                                                                          | null                                                                                                                                                 |
| picture-style          | CSS properties                                   | :x:                          | Additional CSS rules to add to the inner `<picture />` tag                                                                                                                                                                                                                                    | null                                                                                                                                                 |
| img-class              | string                                           | :x:                          | Additional CSS class for the image inside the `<picture />` tag                                                                                                                                                                                                                               | null                                                                                                                                                 |
| img-style              | CSS properties                                   | :x:                          | Additional CSS rules to add to the image inside the `<picture />` tag                                                                                                                                                                                                                         | null                                                                                                                                                 |
| placeholder-class      | string                                           | :x:                          | Additional CSS class for the placeholder image                                                                                                                                                                                                                                                | null                                                                                                                                                 |
| placeholder-style      | CSS properties                                   | :x:                          | Additional CSS rules for the placeholder image                                                                                                                                                                                                                                                | null                                                                                                                                                 |
| referrer-policy        | string                                           | `no-referrer-when-downgrade` | :x:                                                                                                                                                                                                                                                                                           | Defines which referrer is sent when fetching the image. Defaults to `no-referrer-when-downgrade` to give more useful stats in DatoCMS Project Usages |

### Events

| prop  | description                                 |
| ----- | ------------------------------------------- |
| @load | Emitted when the image has finished loading |

### Exposed public properties

| prop     | type               | description              |
| -------- | ------------------ | ------------------------ |
| rootRef  | `HTMLDivElement`   | `ref()` to the root node |
| imageRef | `HTMLImageElement` | `ref()` to the img node  |

### Layout mode

With the `layout` property, you can configure the behavior of the image as the viewport changes size:

- When `intrinsic`, the image will scale the dimensions down for smaller viewports, but maintain the original dimensions for larger viewports.
- When `fixed`, the image dimensions will not change as the viewport changes (no responsiveness) similar to the native `img` element.
- When `responsive` (default behaviour), the image will scale the dimensions down for smaller viewports and scale up for larger viewports.
- When `fill`, the image will stretch both width and height to the dimensions of the parent element, provided the parent element is relative.
  - This is usually paired with the `objectFit` and `objectPosition` properties.
  - Ensure the parent element has `position: relative` in their stylesheet.

---

# `<VideoPlayer/>` component for easy video integration.

`<VideoPlayer />` is a Vue component specially designed to work seamlessly with
DatoCMS’s [`video` GraphQL query][q]) that optimizes video streaming for your
sites.

[q]: https://www.datocms.com/docs/content-delivery-api/images-and-videos#videos

To stream videos, DatoCMS partners with MUX, a video CDN that serves optimized
streams to your users. Our component is a wrapper around
[MUX's video player][mvp] [web component][wc]. It takes care of the details for you, and this
is our recommended way to serve optimal videos to your users.

[mvp]: https://github.com/muxinc/elements/blob/main/packages/mux-player/README.md
[wc]: https://developer.mozilla.org/en-US/docs/Web/API/Web_components

## Out-of-the-box features

- Offers optimized streaming so smartphones and tablets don’t request desktop-sized videos
- Lazy loads the underlying video player web component and the video to be
  played to speed initial page load and save bandwidth
- Holds the video position so your page doesn’t jump while the player loads
- Uses blur-up technique to show a placeholder of the video while it loads

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

**Table of Contents**

- [Installation](#installation)
  - [Setup](#setup)
- [Usage](#usage)
- [Props](#props)
- [Opt-in Viewer Analytics](#opt-in-viewer-analytics)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

```sh
npm install --save vue-datocms @mux/mux-player
```

`@mux/mux-player` is a [peer dependency][pd] for `vue-datocms`: so you're
expected to add it to your project.

[pd]: https://docs.npmjs.com/cli/v10/configuring-npm/package-json#peerdependencies

### Setup

You can register the component globally so it's available in all your apps:

```js
import Vue from 'vue';
import { DatocmsVideoPlayerPlugin } from 'vue-datocms';

Vue.use(DatocmsVideoPlayerPlugin);
```

Or use it locally in any of your components:

```js
import { VideoPlayer } from 'vue-datocms';

export default {
  components: {
    'datocms-video-player': VideoPlayer,
  },
};
```

## Usage

```vue
<template>
  <article>
    <div v-if="data">
      <h1>{{ data.blogPost.title }}</h1>
      <datocms-video-player :data="data.blogPost.video" />
    </div>
  </article>
</template>

<script>
import { request } from './lib/datocms';
import { VideoPlayer } from 'vue-datocms';

// The GraphQL query returns data that the `VideoPlayer` component
// automatically uses to properly size the player, set up a “blur-up”
// placeholder as well as lazy loading the video.
const query = gql`
  query {
    blogPost {
      title
      cover {
        video {
          # required: this field identifies the video to be played
          muxPlaybackId

          # all the other fields are not required but:

          # if provided, title is displayed in the upper left corner of the video
          title

          # if provided, width and height are used to define the aspect ratio of the
          # player, so to avoid layout jumps during the rendering.
          width
          height

          # if provided, it shows a blurred placeholder for the video
          blurUpThumb

          # you can include more data here: they will be ignored by the component
        }
      }
    }
  }
`;

export default {
  components: {
    'datocms-video-player': VideoPlayer,
  },
  data() {
    return {
      data: null,
    };
  },
  async mounted() {
    this.data = await request({ query });
  },
};
</script>
```

## Props

The `<VideoPlayer />` component supports as props all the
[attributes][attributes] of the `<mux-player />` web component, plus `data`,
which is meant to receive data directly in the shape they are provided by
DatoCMS GraphQL API.

[attributes]: https://github.com/muxinc/elements/blob/main/packages/mux-player/REFERENCE.md

`<VideoPlayer />` uses the `data` prop to generate a set of attributes for the
inner `<mux-player />`.

| prop | type           | required           | description                                                      | default |
| ---- | -------------- | ------------------ | ---------------------------------------------------------------- | ------- |
| data | `Video` object | :white_check_mark: | The actual response you get from a DatoCMS `video` GraphQL query |         |

`<VideoPlayer />` generate some default attributes:

- when not declared, the `disable-cookies` prop is true, unless you explicitly
  set the prop to `false` (therefore it generates a `disable-cookies` attribute)
- when not declared, the `preload` prop defaults to `metadata`, for an optimal UX experience together with saved bandwidth
- the video height and width, when available in the `data` props, are used to
  set a default `aspect-ratio: [width] / [height];` for the `<mux-player />`'s
  `style` attribute

All the other props are forwarded to the `<mux-player />` web component that is used internally.

## Opt-in Viewer Analytics

This `<VideoPlayer/>` component can OPTIONALLY collect clientside [playback and engagement metrics](https://www.mux.com/data#TechSpecs) such as playback percentages, user agents, and geography.

These analytics are **disabled** by default. To enable them, you must opt in to [Mux Data](https://www.mux.com/data) integration by creating a Mux Data account (free) and providing its `envKey` to the component.

For details and setup instructions, please see our documentation on **[Streaming Video Analytics with Mux Data](https://www.datocms.com/docs/streaming-videos/streaming-video-analytics-with-mux-data)**.

---

# Structured text

`<datocms-structured-text />` is a Vue component that you can use to render the value contained inside a DatoCMS [Structured Text field type](https://www.datocms.com/docs/structured-text/dast).

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Setup](#setup)
- [Basic usage](#basic-usage)
- [Custom renderers](#custom-renderers)
- [Override default rendering of nodes](#override-default-rendering-of-nodes)
- [Props](#props)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Setup

You can register the component globally so it's available in all your apps:

```js
import Vue from 'vue';
import { DatocmsStructuredTextPlugin } from 'vue-datocms';

Vue.use(DatocmsStructuredTextPlugin);
```

Or use it locally in any of your components:

```js
import { StructuredText } from 'vue-datocms';

export default {
  components: {
    'datocms-structured-text': StructuredText,
  },
};
```

## Basic usage

```vue
<template>
  <article>
    <div v-if="data">
      <h1>{{ data.blogPost.title }}</h1>
      <datocms-structured-text :data="data.blogPost.content" />
      <!--
        Final result:
        <h1>Hello <strong>world!</strong></h1>
      -->
    </div>
  </article>
</template>

<script>
import { request } from './lib/datocms';
import { StructuredText } from 'vue-datocms';

const query = gql`
  query {
    blogPost {
      title
      content {
        value
      }
    }
  }
`;

export default {
  components: {
    'datocms-structured-text': StructuredText,
  },
  data() {
    return {
      data: null,
    };
  },
  async mounted() {
    this.data = await request({ query });
    // data.blogPost.content ->
    // {
    //   value: {
    //     schema: "dast",
    //     document: {
    //       type: "root",
    //       children: [
    //         {
    //           type: "heading",
    //           level: 1,
    //           children: [
    //             {
    //               type: "span",
    //               value: "Hello ",
    //             },
    //             {
    //               type: "span",
    //               marks: ["strong"],
    //               value: "world!",
    //             },
    //           ],
    //         },
    //       ],
    //     },
    //   },
    // }
  },
};
</script>
```

## Custom renderers

You can also pass custom renderers for special nodes (inline records, record links and blocks) as an optional parameter like so:

```vue
<template>
  <article>
    <div v-if="data">
      <h1>{{ data.blogPost.title }}</h1>
      <datocms-structured-text
        :data="data.blogPost.content"
        :renderInlineRecord="renderInlineRecord"
        :renderLinkToRecord="renderLinkToRecord"
        :renderBlock="renderBlock"
      />
      <!--
        Final result:

        <h1>Welcome onboard <a href="/team/mark-smith">Mark</a></h1>
        <p>
          So happy to have
          <a href="/team/mark-smith">this awesome humang being</a> in our team!
        </p>
        <img
          src="https://www.datocms-assets.com/205/1597757278-austin-distel-wd1lrb9oeeo-unsplash.jpg"
          alt="Our team at work"
        />
      -->
    </div>
  </article>
</template>

<script>
import { request } from './lib/datocms';
import { StructuredText, Image } from 'vue-datocms';
import { h } from 'vue';

const query = gql`
  query {
    blogPost {
      title
      content {
        value
        links {
          ... on RecordInterface {
            __typename
            id
          }
          ... on TeamMemberRecord {
            firstName
            slug
          }
        }
        blocks {
          ... on RecordInterface {
            __typename
            id
          }
          ... on ImageRecord {
            image {
              responsiveImage(imgixParams: { fit: crop, w: 300, h: 300, auto: format }) {
                srcSet
                webpSrcSet
                sizes
                src
                width
                height
                aspectRatio
                alt
                title
                base64
              }
            }
          }
        }
        inlineBlocks {
          ... on RecordInterface {
            __typename
            id
          }
          ... on MentionRecord {
            username
          }
        }
      }
    }
  }
`;

export default {
  components: {
    'datocms-structured-text': StructuredText,
    'datocms-image': Image,
  },
  data() {
    return {
      data: null,
    };
  },
  methods: {
    renderInlineRecord: ({ record }) => {
      switch (record.__typename) {
        case 'TeamMemberRecord':
          return h('a', { href: `/team/${record.slug}` }, record.firstName);
        default:
          return null;
      }
    },
    renderLinkToRecord: ({ record, children, transformedMeta }) => {
      switch (record.__typename) {
        case 'TeamMemberRecord':
          return h('a', { ...transformedMeta, href: `/team/${record.slug}` }, children);
        default:
          return null;
      }
    },
    renderBlock: ({ record }) => {
      switch (record.__typename) {
        case 'ImageRecord':
          return h('datocms-image', {
            data: record.image.responsiveImage,
          });
        default:
          return null;
      }
    },
    renderInlineBlock: ({ record }) => {
      switch (record.__typename) {
        case 'MentionRecord':
          return h('code', `@${record.username}`);
        default:
          return null;
      }
    },
  },
  async mounted() {
    this.data = await request({ query });
    // data.blogPost.content ->
    // {
    //   value: {
    //     schema: "dast",
    //     document: {
    //       type: "root",
    //       children: [
    //         {
    //           type: "heading",
    //           level: 1,
    //           children: [
    //             { type: "span", value: "Welcome onboard " },
    //             { type: "inlineItem", item: "324321" },
    //           ],
    //         },
    //         {
    //           type: "paragraph",
    //           children: [
    //             { type: "span", value: "So happy to have " },
    //             {
    //               type: "itemLink",
    //               item: "324321",
    //               children: [
    //                 {
    //                   type: "span",
    //                   marks: ["strong"],
    //                   value: "this awesome humang being",
    //                 },
    //               ]
    //             },
    //             { type: "span", value: " in our team! We call him" },
    //             { type: "inlineBlock", item: "1984560" },
    //           ]
    //         },
    //         { type: "block", item: "1984559" }
    //       ],
    //     },
    //   },
    //   links: [
    //     {
    //       id: "324321",
    //       __typename: "TeamMemberRecord",
    //       firstName: "Mark",
    //       slug: "mark-smith",
    //     },
    //   ],
    //   blocks: [
    //     {
    //       id: "1984559",
    //       __typename: "ImageRecord",
    //       image: {
    //         responsiveImage: { ... },
    //       },
    //     },
    //   ],
    //   inlineBlocks: [
    //     {
    //       id: "1984560",
    //       __typename: "MentionRecord",
    //       username: "steffoz"
    //     },
    //   ],
    // }
  },
};
</script>
```

## Override default rendering of nodes

This component automatically renders all nodes except for `inlineItem`, `itemLink`, `block` and `inlineBlock` using a set of default rules, but you might want to customize those. For example:

- For `heading` nodes, you might want to add an anchor;
- For `code` nodes, you might want to use a custom sytax highlighting component;

In this case, you can easily override default rendering rules with the `customNodeRules` and `customMarkRules` props.

```vue
<template>
  <datocms-structured-text
    :data="data.blogPost.content"
    :customNodeRules="customNodeRules"
    :customMarkRules="customMarkRules"
  />
</template>

<script>
import { StructuredText, renderNodeRule, renderMarkRule } from "vue-datocms";
import { isHeading, isCode } from "datocms-structured-text-utils";
import { render as toPlainText } from 'datocms-structured-text-to-plain-text';
import SyntaxHighlight from './components/SyntaxHighlight';

export default {
  components: {
    "datocms-structured-text": StructuredText,
    "syntax-highlight": SyntaxHighlight,
  },
  data() {
    return {
      data: /* ... */,
      customNodeRules: [
        renderNodeRule(isHeading, ({ adapter: { renderNode: h }, node, children, key }) => {
          const anchor = toPlainText(node)
            .toLowerCase()
            .replace(/ /g, '-')
            .replace(/[^\w-]+/g, '');

          return h(
            `h${node.level}`, { key }, [
              ...children,
              h('a', { attrs: { id: anchor } }, []),
              h('a', { attrs: { href: `#${anchor}` } }, []),
            ]
          );
        }),
        renderNodeRule(isCode, ({ adapter: { renderNode: h }, node, key }) => {
          return h('syntax-highlight', {
            key,
            code: node.code,
            language: node.language,
            linesToBeHighlighted: node.highlight,
          }, []);
        }),
      ],
      customMarkRules: [
        // convert "strong" marks into <b> tags
        renderMarkRule('strong', ({ adapter: { renderNode: h }, mark, children, key }) => {
          return h('b', {key}, children);
        }),
      ],
    };
  },
};
</script>
```

Note: if you override the rules for `inlineItem`, `itemLink`, `block` or `inlineBlock` nodes, then the `renderInlineRecord`, `renderLinkToRecord`, `renderBlock`, `renderInlineBlock` props won't be considered!

## Props

| prop               | type                                                       | required                                               | description                                                                                      | default                                                                                                              |
| ------------------ | ---------------------------------------------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------- |
| data               | `StructuredTextGraphQlResponse \| DastNode`                | :white_check_mark:                                     | The actual [field value](https://www.datocms.com/docs/structured-text/dast) you get from DatoCMS |                                                                                                                      |
| renderInlineRecord | `({ record }) => VNode \| null`                            | Only required if document contains `inlineItem` nodes  | Convert an `inlineItem` DAST node into a VNode                                                   | `[]`                                                                                                                 |
| renderLinkToRecord | `({ record, children, transformedMeta }) => VNode \| null` | Only required if document contains `itemLink` nodes    | Convert an `itemLink` DAST node into a VNode                                                     | `null`                                                                                                               |
| renderBlock        | `({ record }) => VNode \| null`                            | Only required if document contains `block` nodes       | Convert a `block` DAST node into a VNode                                                         | `null`                                                                                                               |
| renderInlineBlock  | `({ record }) => VNode \| null`                            | Only required if document contains `inlineBlock` nodes | Convert an `inlineBlock` DAST node into a VNode                                                  | `null`                                                                                                               |
| metaTransformer    | `({ node, meta }) => Object \| null`                       | :x:                                                    | Transform `link` and `itemLink` meta property into HTML props                                    | [See function](https://github.com/datocms/structured-text/blob/main/packages/generic-html-renderer/src/index.ts#L61) |
| customNodeRules    | `Array<RenderRule>`                                        | :x:                                                    | Customize how nodes are converted in JSX (use `renderNodeRule()` to generate)                    | `null`                                                                                                               |
| customMarkRules    | `Array<RenderMarkRule>`                                    | :x:                                                    | Customize how marks are converted in JSX (use `renderMarkRule()` to generate)                    | `null`                                                                                                               |
| renderText         | `(text: string, key: string) => VNode \| string \| null`   | :x:                                                    | Convert a simple string text into a VNode                                                        | `(text) => text`                                                                                                     |

---

# Live real-time updates

`useQuerySubscription` is a Vue composable that you can use to implement client-side updates of the page as soon as the content changes. It uses DatoCMS's [Real-time Updates API](https://www.datocms.com/docs/real-time-updates-api/api-reference) to receive the updated query results in real-time, and is able to reconnect in case of network failures.

Live updates are great both to get instant previews of your content while editing it inside DatoCMS, or to offer real-time updates of content to your visitors (ie. news site).

`useQuerySubscription` is based on the `subscribeToQuery` helper provided by the [datocms-listen](https://www.npmjs.com/package/datocms-listen) package that provide real-time updates for the page when the content changes. Please consult the [datocms-listen package documentation](https://www.npmjs.com/package/datocms-listen) to learn more about how to configure `subscribeToQuery`.

Live updates are great both to get instant previews of your content while editing it inside DatoCMS, or to offer real-time updates of content to your visitors (ie. news site).

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Reference](#reference)
- [Initialization options](#initialization-options)
- [Connection status](#connection-status)
- [Error object](#error-object)
- [Example](#example)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

```
npm install --save vue-datocms
```

## Reference

Import `useQuerySubscription` from `vue-datocms` and use it inside your components setup function like this:

```js
const {
  data: QueryResult | undefined,
  error: ChannelErrorData | null,
  status: ConnectionStatus,
} = useQuerySubscription(options: Options);
```

## Initialization options

| prop               | type                                                                                       | required           | description                                                                                      | default                              |
| ------------------ | ------------------------------------------------------------------------------------------ | ------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------ |
| enabled            | boolean                                                                                    | :x:                | Whether the subscription has to be performed or not                                              | true                                 |
| query              | string \| [`TypedDocumentNode`](https://github.com/dotansimha/graphql-typed-document-node) | :white_check_mark: | The GraphQL query to subscribe                                                                   |                                      |
| token              | string                                                                                     | :white_check_mark: | DatoCMS API token to use                                                                         |                                      |
| variables          | Object                                                                                     | :x:                | GraphQL variables for the query                                                                  |                                      |
| includeDrafts      | boolean                                                                                    | :x:                | If true, draft records will be returned                                                          |                                      |
| excludeInvalid     | boolean                                                                                    | :x:                | If true, invalid records will be filtered out                                                    |                                      |
| environment        | string                                                                                     | :x:                | The name of the DatoCMS environment where to perform the query (defaults to primary environment) |                                      |
| contentLink        | `'vercel-1'` or `undefined`                                                                | :x:                | If true, embed metadata that enable Content Link                                                 |                                      |
| baseEditingUrl     | string                                                                                     | :x:                | The base URL of the DatoCMS project                                                              |                                      |
| cacheTags          | boolean                                                                                    | :x:                | If true, receive the Cache Tags associated with the query                                        |                                      |
| initialData        | Object                                                                                     | :x:                | The initial data to use on the first render                                                      |                                      |
| reconnectionPeriod | number                                                                                     | :x:                | In case of network errors, the period (in ms) to wait to reconnect                               | 1000                                 |
| fetcher            | a [fetch-like function](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)        | :x:                | The fetch function to use to perform the registration query                                      | window.fetch                         |
| eventSourceClass   | an [EventSource-like](https://developer.mozilla.org/en-US/docs/Web/API/EventSource) class  | :x:                | The EventSource class to use to open up the SSE connection                                       | window.EventSource                   |
| baseUrl            | string                                                                                     | :x:                | The base URL to use to perform the query                                                         | `https://graphql-listen.datocms.com` |

## Connection status

The `status` property represents the state of the server-sent events connection. It can be one of the following:

- `connecting`: the subscription channel is trying to connect
- `connected`: the channel is open, we're receiving live updates
- `closed`: the channel has been permanently closed due to a fatal error (ie. an invalid query)

## Error object

| prop     | type   | description                                             |
| -------- | ------ | ------------------------------------------------------- |
| code     | string | The code of the error (ie. `INVALID_QUERY`)             |
| message  | string | An human friendly message explaining the error          |
| response | Object | The raw response returned by the endpoint, if available |

## Example

See the query-subscription [`App.vue`](/examples/query-subscription/src/App.vue) for a usage example.

---

# Site Search composable

`useSiteSearch` is a Vue composable that you can use to render a [DatoCMS Site Search](https://www.datocms.com/docs/site-search) widget.
The hook only handles the form logic: you are in complete and full control of how your form renders down to the very last component, class or style.

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Site Search composable](#site-search-composable)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Reference](#reference)
  - [Initialization options](#initialization-options)
  - [Returned data](#returned-data)
  - [Complete example](#complete-example)
  <!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

To perform the necessary API requests, this hook requires a [DatoCMS CMA Client](https://www.datocms.com/docs/content-management-api/using-the-nodejs-clients) instance, so make sure to also add the following package to your project:

```bash
npm install --save vue-datocms @datocms/cma-client-browser
```

## Reference

Import `useSiteSearch` from `vue-datocms` and use it inside your components like this:

```js
import { useSiteSearch } from 'vue-datocms';
import { buildClient } from '@datocms/cma-client-browser';

const client = buildClient({ apiToken: 'YOUR_API_TOKEN' });

const { state, error, data } = useSiteSearch({
  client,
  buildTriggerId: '7497',
  // optional: by default fuzzy-search is not active
  fuzzySearch: true,
  // optional: you can omit it you only have one locale, or you want to find results in every locale
  initialState: { locale: 'en' },
  // optional: defaults to 8 search results per page
  resultsPerPage: 10,
});
```

For a complete walk-through, please refer to the [DatoCMS Site Search documentation](https://www.datocms.com/docs/site-search).

## Initialization options

| prop                | type                | required           | description                                                                                                                                | default |
| ------------------- | ------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| client              | CMA Client instance | :white_check_mark: | [DatoCMS CMA Client](https://www.datocms.com/docs/content-management-api/using-the-nodejs-clients) instance                                |         |
| buildTriggerId      | string              | :white_check_mark: | The [ID of the build trigger](https://www.datocms.com/docs/site-search/base-integration#performing-searches) to use to find search results |         |
| fuzzySearch         | boolean             | :x:                | Whether fuzzy-search is active or not. When active, it will also find strings that approximately match the query provided.                 | false   |
| resultsPerPage      | number              | :x:                | The number of search results to show per page                                                                                              | 8       |
| initialState.query  | string              | :x:                | Initialize the form with a specific query                                                                                                  | ''      |
| initialState.locale | string              | :x:                | Initialize the form starting from a specific page                                                                                          | 0       |
| initialState.page   | string              | :x:                | Initialize the form with a specific locale selected                                                                                        | null    |

## Returned data

The hook returns an object with the following shape:

```typescript
{
  state: {
    query: string;
    locale: string | undefined;
    page: number;
  },
  error?: string,
  data?: {
    pageResults: Array<{
      id: string;
      title: string;
      titleHighlights: ResultHighlight[];
      bodyExcerpt: string;
      bodyHighlights: ResultHighlight[];
      url: string;
      raw: RawSearchResult;
    }>;
    totalResults: number;
    totalPages: number;
  },
}
```

`titleHighlights` and `bodyHighlights` have the following shape:

```typescript
type ResultHighlight = HighlightPiece[];

type HighlightPiece = {
  text: string;
  isMatch: boolean;
};
```

- The `state` property reflects the current state of the form (the current `query`, `page`, and `locale`), and offers a number of functions to change the state itself. As soon as the state of the form changes, a new API request is made to fetch the new search results;
- The `error` property returns a string in case of failure of any API request;
- The `data` property returns all the information regarding the current search results to present to the user;

## Complete example

See a more complete [`site search example`](/examples/src/SiteSearch/index.vue) for usage.

---

404: Not Found

---

# @datocms/astro

[![MIT](https://img.shields.io/npm/l/@datocms/astro?style=for-the-badge)](https://github.com/datocms/astro-datocms/blob/master/LICENSE) [![NPM](https://img.shields.io/npm/v/@datocms/astro?style=for-the-badge)](https://www.npmjs.com/package/@datocms/astro)

A set of TypeScript-ready components and utilities to work faster with [DatoCMS](https://www.datocms.com/) in Astro project. Integrates seamlessly with [DatoCMS's GraphQL Content Delivery API](https://www.datocms.com/docs/content-delivery-api).

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Features](#features)
- [Installation](#installation)
- [What is DatoCMS?](#what-is-datocms)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Features

`@datocms/astro` contains ready-to-use Astro components and helpers:

- [`<Image />`](src/Image)
- [`<Seo />`](src/Seo)
- [`<StructuredText />`](src/StructuredText)
- [`<QueryListener />`](src/QueryListener)

## Installation

```
npm install @datocms/astro
```

---

# Progressive responsive image

`<Image>` is a TypeScript-ready Astro component specially designed to work seamlessly with DatoCMS’s [`responsiveImage` GraphQL query](https://www.datocms.com/docs/content-delivery-api/uploads#responsive-images) which optimizes image loading for your websites.

### Out-of-the-box features

- Completely native, with no JavaScript footprint
- Offers optimized version of images for browsers that support WebP/AVIF format
- Generates multiple smaller images so smartphones and tablets don’t download desktop-sized images
- Efficiently lazy loads images to speed initial page load and save bandwidth
- Holds the image position so your page doesn’t jump while images load
- Uses either blur-up or background color techniques to show a preview of the image while it loads

### Table of contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Setup](#setup)
- [Usage](#usage)
- [Example](#example)
- [The `ResponsiveImage` object](#the-responsiveimage-object)
- [`<Image />`](#image-)
  - [Props](#props)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

### Setup

You can import the component like this:

```js
import { Image } from '@datocms/astro/Image';
```

## Usage

1. Use `<Image>` in place of the regular `<img />` tag
2. Write a GraphQL query to your DatoCMS project using the [`responsiveImage` query](https://www.datocms.com/docs/content-delivery-api/images-and-videos#responsive-images)

The GraphQL query returns multiple thumbnails with optimized compression. The components automatically set up the "blur-up" effect as well as lazy loading of images further down the screen.

## Example

Here is a minimal starting point:

```astro
---
import { Image } from '@datocms/astro/Image';
import { executeQuery } from '@datocms/cda-client';

const query = gql`
  query {
    blogPost {
      title
      cover {
        responsiveImage(imgixParams: { fit: crop, w: 300, h: 300, auto: format }) {
          # always required
          src
          width
          height
          # not required, but strongly suggested!
          alt
          title
          # blur-up placeholder, JPEG format, base64-encoded, or...
          base64
          # background color placeholder
          bgColor
          # you can omit sizes if you explicitly pass the sizes prop to the image component
          sizes
        }
      }
    }
  }
`;

const { blogPost } = await executeQuery(query, { token: '<YOUR-API-TOKEN>' });
---

<Image data={blogPost.cover.responsiveImage} />
```

## The `ResponsiveImage` object

The `data` prop of both components expects an object with the same shape as the one returned by `responsiveImage` GraphQL call. It's up to you to make a GraphQL query that will return the properties you need for a specific use of the `<Image>` component.

- The minimum required properties for `data` are: `src`, `width` and `height`;
- `alt` and `title`, while not mandatory, are all highly suggested, so remember to use them!
- If you don't request `srcSet`, the component will auto-generate an `srcset` based on `src` + the `srcSetCandidates` prop (it can help reducing the GraphQL response size drammatically when many images are returned);
- We strongly to suggest to always specify [`{ auto: format }`](https://docs.imgix.com/apis/rendering/auto/auto#format) in your `imgixParams`, instead of requesting `webpSrcSet`, so that you can also take advantage of more performant optimizations (AVIF), without increasing GraphQL response size;
- If you request both the `bgColor` and `base64` property, the latter will take precedence, so just avoid querying both fields at the same time, as it will only make the GraphQL response bigger :wink:;
- You can avoid requesting `sizes` and directly pass a `sizes` prop to the component to reduce the GraphQL response size;

Here's a complete recap of what `responsiveImage` offers:

| property    | type    | required           | description                                                                                                                                                                                    |
| ----------- | ------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| src         | string  | :white_check_mark: | The `src` attribute for the image                                                                                                                                                              |
| width       | integer | :white_check_mark: | The width of the image                                                                                                                                                                         |
| height      | integer | :white_check_mark: | The height of the image                                                                                                                                                                        |
| alt         | string  | :x:                | Alternate text (`alt`) for the image (not required, but strongly suggested!)                                                                                                                   |
| title       | string  | :x:                | Title attribute (`title`) for the image (not required, but strongly suggested!)                                                                                                                |
| sizes       | string  | :x:                | The HTML5 `sizes` attribute for the image (omit it if you're already passing a `sizes` prop to the Image component)                                                                            |
| base64      | string  | :x:                | A base64-encoded thumbnail to offer during image loading                                                                                                                                       |
| bgColor     | string  | :x:                | The background color for the image placeholder (omit it if you're already requesting `base64`)                                                                                                 |
| srcSet      | string  | :x:                | The HTML5 `srcSet` attribute for the image (can be omitted, the Image component knows how to build it based on `src`)                                                                          |
| webpSrcSet  | string  | :x:                | The HTML5 `srcSet` attribute for the image in WebP format (deprecated, it's better to use the [`auto=format`](https://docs.imgix.com/apis/rendering/auto/auto#format) Imgix transform instead) |
| aspectRatio | float   | :x:                | The aspect ratio (width/height) of the image                                                                                                                                                   |

## `<Image />`

### Props

| prop             | type                     | default                            | required           | description                                                                                                                                          |
| ---------------- | ------------------------ | ---------------------------------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| data             | `ResponsiveImage` object |                                    | :white_check_mark: | The actual response you get from a DatoCMS `responsiveImage` GraphQL query \*\*\*\*                                                                  |
| pictureClass     | string                   | null                               | :x:                | Additional CSS class for the root `<picture>` tag                                                                                                    |
| pictureStyle     | CSS properties           | null                               | :x:                | Additional CSS rules to add to the root `<picture>` tag                                                                                              |
| imgClass         | string                   | null                               | :x:                | Additional CSS class for the `<img>` tag                                                                                                             |
| imgStyle         | CSS properties           | null                               | :x:                | Additional CSS rules to add to the `<img>` tag                                                                                                       |
| priority         | Boolean                  | false                              | :x:                | Disables lazy loading, and sets the image [fetchPriority](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/fetchPriority) to "high" |
| sizes            | string                   | undefined                          | :x:                | The HTML5 [`sizes`](https://web.dev/learn/design/responsive-images/#sizes) attribute for the image (will be used `data.sizes` as a fallback)         |
| usePlaceholder   | Boolean                  | true                               | :x:                | Whether the image should use a blurred image placeholder                                                                                             |
| srcSetCandidates | Array<number>            | [0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4] | :x:                | If `data` does not contain `srcSet`, the candidates for the `srcset` attribute of the image will be auto-generated based on these width multipliers  |
| referrerPolicy   | string                   | `no-referrer-when-downgrade`       | :x:                | Defines which referrer is sent when fetching the image. Defaults to `no-referrer-when-downgrade` to give more useful stats in DatoCMS Project Usages |

---

# Social share, SEO and Favicon meta tags

Just like the image component, `<Seo />` is a component specially designed to work seamlessly with DatoCMS’s [`_seoMetaTags` and `faviconMetaTags` GraphQL queries](https://www.datocms.com/docs/content-delivery-api/seo) so that you can handle proper SEO in your pages.

You can use `<Seo />` in your pages, and it will inject title, meta and link tags in the document's `<head>` tag.

### Table of contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Usage](#usage)
- [Example](#example)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Usage

`<Seo />`'s `data` prop takes an array of `Tag`s in the exact form they're returned by the following [DatoCMS GraphQL API](https://www.datocms.com/docs/content-delivery-api/seo) queries:

- `_seoMetaTags` query on any record, or
- `faviconMetaTags` on the global `_site` object.

## Example

Here is an example:

```astro
---
import { Seo } from '@datocms/astro/Seo';
import { executeQuery } from '@datocms/cda-client';

const query = gql`
  query {
    page: homepage {
      title
      seo: _seoMetaTags {
        attributes
        content
        tag
      }
    }
    site: _site {
      favicon: faviconMetaTags {
        attributes
        content
        tag
      }
    }
  }
`;

const result = await executeQuery(query, { token: '<YOUR-API-TOKEN>' });
---

<Seo data={[...result.page.seo, ...result.site.favicon]} />
```

---

# Structured text

`<StructuredText />` is an Astro component that you can use to render the value contained inside a DatoCMS [Structured Text field type](https://www.datocms.com/docs/structured-text/dast).

### Table of contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Setup](#setup)
- [Basic usage](#basic-usage)
- [Customization](#customization)
  - [Custom components for blocks, inline blocks, inline records or links to records](#custom-components-for-blocks-inline-blocks-inline-records-or-links-to-records)
  - [Override default rendering of nodes](#override-default-rendering-of-nodes)
  - [Strict props type checking](#strict-props-type-checking)
- [Props](#props)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

### Setup

Import the component like this:

```js
import { StructuredText } from '@datocms/astro/StructuredText';
```

## Basic usage

```astro
---
import { StructuredText } from '@datocms/astro/StructuredText';
import { executeQuery } from '@datocms/cda-client';

const query = gql`
  query {
    blogPost {
      title
      content {
        value
      }
    }
  }
`;

const { blogPost } = await executeQuery(query, { token: '<YOUR-API-TOKEN>' });
---

<article>
  <h1>{data.blogPost.title}</h1>
  <StructuredText data={data.blogPost.content} />
</article>
```

## Customization

The `<StructuredText />` component comes with a set of default components that are use to render all the nodes present in [DatoCMS Dast trees](https://www.datocms.com/docs/structured-text/dast). These default components are enough to cover most of the simple cases.

You need to use custom components in the following cases:

- you have to render blocks, inline records or links to records: there's no conventional way of rendering theses nodes, so you must create and pass custom components;
- you need to render a conventional node differently (e.g. you may want a custom render for blockquotes)

### Custom components for blocks, inline blocks, inline records or links to records

- Astro components passed in `blockComponents` will be used to render blocks and will receive a `block` prop containing the actual block data.
- Astro components passed in `inlineBlockComponents` will be used to render inline blocks and will receive a `block` prop containing the actual block data.
- Astro components passed in `inlineRecordComponents` will be used to render inline records and will receive a `record` prop containing the actual record.
- Astro components passed in `linkToRecordComponents` will be used to render links to records and will receive the following props: `node` (the actual `'inlineItem'` node), `record` (the record linked to the node), and `attrs` (the custom attributes for the link specified by the node).

```astro
---
import { StructuredText } from '@datocms/astro/StructuredText';
import { executeQuery } from '@datocms/cda-client';

import Cta from '~/components/Cta/index.astro';
import NewsletterSignup from '~/components/NewsletterSignup/index.astro';

import InlineTeamMember from '~/components/InlineTeamMember/index.astro';
import LinkToTeamMember from '~/components/LinkToTeamMember/index.astro';

const query = gql`
  query {
    blogPost {
      title
      content {
        value
        blocks {
          ... on RecordInterface {
            id
            __typename
          }
          ... on CtaRecord {
            label
            url
          }
        }
        inlineBlocks {
          ... on RecordInterface {
            id
            __typename
          }
          ... on NewsletterSignupRecord {
            title
          }
        }
        links {
          ... on RecordInterface {
            id
            __typename
          }
          ... on TeamMemberRecord {
            firstName
            slug
          }
        }
      }
    }
  }
`;

const { blogPost } = await executeQuery(query, { token: '<YOUR-API-TOKEN>' });
---

<article>
  <h1>{blogPost.title}</h1>
  <StructuredText
    data={blogPost.content}
    blockComponents={{
      CtaRecord: Cta,
    }}
    inlineBlockComponents={{
      NewsletterSignupRecord: NewsletterSignup,
    }}
    inlineRecordComponents={{
      TeamMemberRecord: InlineTeamMember,
    }}
    linkToRecordComponents={{
      TeamMemberRecord: LinkToTeamMember,
    }}
  />
</article>gql.tada
```

### Override default rendering of nodes

`<StructuredText />` automatically renders all nodes (except for `inline_item`, `item_link` and `block`) using a set of default components, that you might want to customize. For example:

- For `heading` nodes, you might want to add an anchor;
- For `code` nodes, you might want to use a custom syntax highlighting component;

In this case, you can easily override default rendering rules with the `nodeOverrides` prop.

```astro
---
import { StructuredText } from '@datocms/astro/StructuredText';
import { isHeading } from 'datocms-structured-text-utils';
import HeadingWithAnchorLink from '~/components/HeadingWithAnchorLink/index.astro';
import Code from '~/components/Code/index.astro';
---

<StructuredText
  data={blogPost.content}
  nodeOverrides={{
    heading: HeadingWithAnchorLink,
    code: Code,
  }}
/>
```

### Strict props type checking

Since [Astro doesn't support generics-typed components](https://github.com/withastro/roadmap/discussions/601) yet, you can use `ensureValidStructuredTextProps()` to strictly validate that all possible block and linked record types are managed in your `blockComponents`, `inlineRecordComponents` and `linkToRecordComponents` props.

This is especially useful when working with tools like [gql.tada](https://gql-tada.0no.co/) that provide precise typing for your `data`:

```astro
---
import { StructuredText, ensureValidStructuredTextProps } from '@datocms/astro/StructuredText';
---

<StructuredText
  {...ensureValidStructuredTextProps({
    data: blogPost.content,
    blockComponents: {
      CtaRecord: Cta,
    },
    inlineBlockComponents: {
      NewsletterSignupRecord: NewsletterSignup,
    },
    inlineRecordComponents: {
      TeamMemberRecord: InlineTeamMember,
    },
    linkToRecordComponents: {
      TeamMemberRecord: LinkToTeamMember,
    },
  })}
/>
```

## Props

| prop                   | type                             | required           | description                                                                                                                   |
| ---------------------- | -------------------------------- | ------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| data                   | `StructuredText \| DastNode`     | :white_check_mark: | The actual [field value](https://www.datocms.com/docs/structured-text/dast) you get from DatoCMS                              |
| blockComponents        | `Record<string, AstroComponent>` |                    | An object in which the keys are the `__typename` of the blocks to be rendered, and the values are the Astro components        |
| inlineBlockComponents  | `Record<string, AstroComponent>` |                    | An object in which the keys are the `__typename` of the inline blocks to be rendered, and the values are the Astro components |
| linkToRecordComponents | `Record<string, AstroComponent>` |                    | An object in which the keys are the `__typename` of the records to be rendered, and the values are the Astro components       |
| inlineRecordComponents | `Record<string, AstroComponent>` |                    | An object in which the keys are the `__typename` of the records to be rendered, and the values are the Astro components       |
| nodeOverrides          | `Record<string, AstroComponent>` |                    | An object in which the keys are the types of DAST nodes to override, and the values are the Astro components                  |
| markOverrides          | `Record<string, AstroComponent>` |                    | An object in which the keys are the types of `span` node marks to override, and the values are the Astro components           |

---

# Live real-time updates

`<QueryListener />` is an Astro component that you can use to implement client-side reload of the page as soon as the content of a query changes. It uses DatoCMS's [Real-time Updates API](https://www.datocms.com/docs/real-time-updates-api/api-reference) to receive the updated query results in real-time, and is able to reconnect in case of network failures.

Live reloads are great to get instant previews of your content while editing it inside DatoCMS.

`<QueryListener />` is based on the `subscribeToQuery` helper provided by the [datocms-listen](https://www.npmjs.com/package/datocms-listen) package.

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installation](#installation)
- [Reference](#reference)
- [Initialization options](#initialization-options)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

```
npm install --save @datocms/astro
```

## Reference

Import `<QueryListener>` from `@datocms/astro` and use it inside your components setup function like this:

```astro
---
import { QueryListener } from '@datocms/astro/QueryListener';
import { executeQuery } from '@datocms/cda-client';

const query = gql`
  query {
    homepage {
      title
    }
  }
`;

const data = await executeQuery(query, { token: '<YOUR-API-TOKEN>' });
---

<h1>{data.homepage.title}</h1>

<QueryListener query={query} token="<YOUR-API-TOKEN>" />
```

## Initialization options

| prop               | type                                                                                       | required           | description                                                                                      | default                              |
| ------------------ | ------------------------------------------------------------------------------------------ | ------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------ |
| enabled            | boolean                                                                                    | :x:                | Whether the subscription has to be performed or not                                              | true                                 |
| query              | string \| [`TypedDocumentNode`](https://github.com/dotansimha/graphql-typed-document-node) | :white_check_mark: | The GraphQL query to subscribe                                                                   |                                      |
| token              | string                                                                                     | :white_check_mark: | DatoCMS API token to use                                                                         |                                      |
| variables          | Object                                                                                     | :x:                | GraphQL variables for the query                                                                  |                                      |
| includeDrafts      | boolean                                                                                    | :x:                | If true, draft records will be returned                                                          |                                      |
| excludeInvalid     | boolean                                                                                    | :x:                | If true, invalid records will be filtered out                                                    |                                      |
| environment        | string                                                                                     | :x:                | The name of the DatoCMS environment where to perform the query (defaults to primary environment) |                                      |
| contentLink        | `'vercel-1'` or `undefined`                                                                | :x:                | If true, embed metadata that enable Content Link                                                 |                                      |
| baseEditingUrl     | string                                                                                     | :x:                | The base URL of the DatoCMS project                                                              |                                      |
| cacheTags          | boolean                                                                                    | :x:                | If true, receive the Cache Tags associated with the query                                        |                                      |
| initialData        | Object                                                                                     | :x:                | The initial data to use on the first render                                                      |                                      |
| reconnectionPeriod | number                                                                                     | :x:                | In case of network errors, the period (in ms) to wait to reconnect                               | 1000                                 |
| baseUrl            | string                                                                                     | :x:                | The base URL to use to perform the query                                                         | `https://graphql-listen.datocms.com` |

---

# @datocms/svelte

![MIT](https://img.shields.io/npm/l/@datocms/svelte?style=for-the-badge) ![NPM](https://img.shields.io/npm/v/@datocms/svelte?style=for-the-badge) [![Build Status](https://img.shields.io/github/actions/workflow/status/datocms/datocms-svelte/node.js.yml?branch=main&style=for-the-badge)](https://github.com/datocms/datocms-svelte/actions/workflows/node.js.yml)

A set of components to work faster with [DatoCMS](https://www.datocms.com/) in Svelte projects.

- Works with Svelte and SvelteKit;
- Written in TypeScript;
- Usable both client and server side;

### Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Features](#features)
- [Installation](#installation)
- [Development](#development)
- [Building](#building)
- [What is DatoCMS?](#what-is-datocms)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Features

`@datocms/svelte` contains ready-to-use Svelte components and usage examples.

Components:

- [`<Image />` and `<NakedImage />`](src/lib/components/Image)
- [`<VideoPlayer />`](src/lib/components/VideoPlayer)
- [`<StructuredText />`](src/lib/components/StructuredText)
- [`<Head />`](src/lib/components/Head)

Stores:

- [`querySubscription`](src/lib/stores/querySubscription)

## Installation

```
npm install @datocms/svelte
```

## Development

This repository contains some examples in the `app/routes` folder. You can use them to locally test your changes to the package:

```bash
npm run dev
```

## Building

To create a production version of this library:

```bash
npm run build
```

---

# Progressive responsive image

`<Image>` and `<NakedImage />` are Svelte component specially designed to work seamlessly with DatoCMS’s [`responsiveImage` GraphQL query](https://www.datocms.com/docs/content-delivery-api/uploads#responsive-images) which optimizes image loading for your websites.

- TypeScript ready;
- Usable both client and server side;
- Compatible with vanilla Svelte and Sveltekit;

### Out-of-the-box features

- Offers optimized version of images for browsers that support WebP/AVIF format
- Generates multiple smaller images so smartphones and tablets don’t download desktop-sized images
- Efficiently lazy loads images to speed initial page load and save bandwidth
- Holds the image position so your page doesn’t jump while images load
- Uses either blur-up or background color techniques to show a preview of the image while it loads

### Table of contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Setup](#setup)
- [Usage](#usage)
- [`<Image />` vs `<NakedImage />`](#image--vs-nakedimage-)
- [Example](#example)
- [The `ResponsiveImage` object](#the-responsiveimage-object)
- [`<NakedImage />`](#nakedimage-)
  - [Props](#props)
  - [Events](#events)
- [`<Image />`](#image-)
  - [Props](#props-1)
  - [Events](#events-1)
  - [Layout mode](#layout-mode)
  - [Intersection Observer](#intersection-observer)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

### Setup

You can import the components like this:

```js
import { Image, NakedImage } from '@datocms/svelte';
```

## Usage

1. Use `<Image>` or `<NakedImage />` in place of the regular `<img />` tag
2. Write a GraphQL query to your DatoCMS project using the [`responsiveImage` query](https://www.datocms.com/docs/content-delivery-api/images-and-videos#responsive-images)

The GraphQL query returns multiple thumbnails with optimized compression. The components automatically set up the "blur-up" effect as well as lazy loading of images further down the screen.

## `<Image />` vs `<NakedImage />`

Even though their purpose is the same, there are some significant differences between these two components. Depending on your specific needs, you can choose to use one or the other:

- `<NakedImage />` generates minimum JS footprint, outputs a single `<picture />` element and implements lazy-loading using the native [`loading="lazy"` attribute](https://web.dev/articles/browser-level-image-lazy-loading). The placeholder is set as the background to the image itself.
- `<Image />` has the ability to set a cross-fade effect between the placeholder and the original image, but at the cost of generating more complex HTML output composed of multiple elements around the main `<picture />` element. It also implements lazy-loading through `IntersectionObserver`, which allows customization of the thresholds at which lazy loading occurs.

## Example

For a fully working example take a look at [`routes` directory](https://github.com/datocms/datocms-svelte/tree/main/src/routes/image/+page.svelte).

Here is a minimal starting point:

```svelte
<script>

import { onMount } from 'svelte';

import { Image, NakedImage } from '@datocms/svelte';

const query = gql`
  query {
    blogPost {
      title
      cover {
        responsiveImage(
          imgixParams: { fit: crop, w: 300, h: 300, auto: format }
        ) {
          # always required
          src
          width
          height
          # not required, but strongly suggested!
          alt
          title
          # blur-up placeholder, JPEG format, base64-encoded, or...
          base64
          # background color placeholder
          bgColor
          # you can omit `sizes` if you explicitly pass the `sizes` prop to the image component
          sizes
        }
      }
    }
  }
`;

export let data = null;

onMount(async () => {
  const response = await fetch('https://graphql.datocms.com/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: "Bearer AN_API_TOKEN",
    },
    body: JSON.stringify({ query })
  })

  const json = await response.json()

  data = json.data;
});

</script>

{#if data}
	<Image data={data.blogPost.cover.responsiveImage} />
	<NakedImage data={data.blogPost.cover.responsiveImage} />
{/if}
```

## The `ResponsiveImage` object

The `data` prop of both components expects an object with the same shape as the one returned by `responsiveImage` GraphQL call. It's up to you to make a GraphQL query that will return the properties you need for a specific use of the `<datocms-image>` component.

- The minimum required properties for `data` are: `src`, `width` and `height`;
- `alt` and `title`, while not mandatory, are all highly suggested, so remember to use them!
- If you don't request `srcSet`, the component will auto-generate an `srcset` based on `src` + the `srcSetCandidates` prop (it can help reducing the GraphQL response size drammatically when many images are returned);
- We strongly to suggest to always specify [`{ auto: format }`](https://docs.imgix.com/apis/rendering/auto/auto#format) in your `imgixParams`, instead of requesting `webpSrcSet`, so that you can also take advantage of more performant optimizations (AVIF), without increasing GraphQL response size;
- If you request both the `bgColor` and `base64` property, the latter will take precedence, so just avoid querying both fields at the same time, as it will only make the GraphQL response bigger :wink:;
- You can avoid requesting `sizes` and directly pass a `sizes` prop to the component to reduce the GraphQL response size;

Here's a complete recap of what `responsiveImage` offers:

| property    | type    | required           | description                                                                                                                                                                                    |
| ----------- | ------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| src         | string  | :white_check_mark: | The `src` attribute for the image                                                                                                                                                              |
| width       | integer | :white_check_mark: | The width of the image                                                                                                                                                                         |
| height      | integer | :white_check_mark: | The height of the image                                                                                                                                                                        |
| alt         | string  | :x:                | Alternate text (`alt`) for the image (not required, but strongly suggested!)                                                                                                                   |
| title       | string  | :x:                | Title attribute (`title`) for the image (not required, but strongly suggested!)                                                                                                                |
| sizes       | string  | :x:                | The HTML5 `sizes` attribute for the image (omit it if you're already passing a `sizes` prop to the Image component)                                                                            |
| base64      | string  | :x:                | A base64-encoded thumbnail to offer during image loading                                                                                                                                       |
| bgColor     | string  | :x:                | The background color for the image placeholder (omit it if you're already requesting `base64`)                                                                                                 |
| srcSet      | string  | :x:                | The HTML5 `srcSet` attribute for the image (can be omitted, the Image component knows how to build it based on `src`)                                                                          |
| webpSrcSet  | string  | :x:                | The HTML5 `srcSet` attribute for the image in WebP format (deprecated, it's better to use the [`auto=format`](https://docs.imgix.com/apis/rendering/auto/auto#format) Imgix transform instead) |
| aspectRatio | float   | :x:                | The aspect ratio (width/height) of the image                                                                                                                                                   |

## `<NakedImage />`

### Props

| prop             | type                     | default                            | required           | description                                                                                                                                          |
| ---------------- | ------------------------ | ---------------------------------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| data             | `ResponsiveImage` object |                                    | :white_check_mark: | The actual response you get from a DatoCMS `responsiveImage` GraphQL query \*\*\*\*                                                                  |
| pictureClass     | string                   | null                               | :x:                | Additional CSS class for the root `<picture>` tag                                                                                                    |
| pictureStyle     | CSS properties           | null                               | :x:                | Additional CSS rules to add to the root `<picture>` tag                                                                                              |
| imgClass         | string                   | null                               | :x:                | Additional CSS class for the `<img>` tag                                                                                                             |
| imgCtyle         | CSS properties           | null                               | :x:                | Additional CSS rules to add to the `<img>` tag                                                                                                       |
| priority         | Boolean                  | false                              | :x:                | Disables lazy loading, and sets the image [fetchPriority](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/fetchPriority) to "high" |
| sizes            | string                   | undefined                          | :x:                | The HTML5 [`sizes`](https://web.dev/learn/design/responsive-images/#sizes) attribute for the image (will be used `data.sizes` as a fallback)         |
| usePlaceholder   | Boolean                  | true                               | :x:                | Whether the image should use a blurred image placeholder                                                                                             |
| srcSetCandidates | Array<number>            | [0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4] | :x:                | If `data` does not contain `srcSet`, the candidates for the `srcset` attribute of the image will be auto-generated based on these width multipliers  |
| referrerPolicy   | string                   | `no-referrer-when-downgrade`       | :x:                | Defines which referrer is sent when fetching the image. Defaults to `no-referrer-when-downgrade` to give more useful stats in DatoCMS Project Usages |

### Events

| prop  | description                                 |
| ----- | ------------------------------------------- |
| @load | Emitted when the image has finished loading |

## `<Image />`

### Props

| prop                  | type                                             | default                            | required           | description                                                                                                                                                                                                                                                                                   |
| --------------------- | ------------------------------------------------ | ---------------------------------- | ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| data                  | `ResponsiveImage` object                         |                                    | :white_check_mark: | The actual response you get from a DatoCMS `responsiveImage` GraphQL query.                                                                                                                                                                                                                   |
| class                 | string                                           | null                               | :x:                | Additional CSS class of root node                                                                                                                                                                                                                                                             |
| style                 | string                                           | null                               | :x:                | Additional CSS rules to add to the root node                                                                                                                                                                                                                                                  |
| pictureClass          | string                                           | null                               | :x:                | Additional CSS class for the inner `<picture />` tag                                                                                                                                                                                                                                          |
| pictureStyle          | string                                           | null                               | :x:                | Additional CSS rules to add to the inner `<picture />` tag                                                                                                                                                                                                                                    |
| imgClass              | string                                           | null                               | :x:                | Additional CSS class for the image inside the `<picture />` tag                                                                                                                                                                                                                               |
| imgStyle              | string                                           | null                               | :x:                | Additional CSS rules to add to the image inside the `<picture />` tag                                                                                                                                                                                                                         |
| layout                | 'intrinsic' \| 'fixed' \| 'responsive' \| 'fill' | "intrinsic"                        | :x:                | The layout behavior of the image as the viewport changes size                                                                                                                                                                                                                                 |
| fadeInDuration        | integer                                          | 500                                | :x:                | Duration (in ms) of the fade-in transition effect upoad image loading                                                                                                                                                                                                                         |
| intersectionThreshold | float                                            | 0                                  | :x:                | Indicate at what percentage of the placeholder visibility the loading of the image should be triggered. A value of 0 means that as soon as even one pixel is visible, the callback will be run. A value of 1.0 means that the threshold isn't considered passed until every pixel is visible. |
| intersectionMargin    | string                                           | "0px 0px 0px 0px"                  | :x:                | Margin around the placeholder. Can have values similar to the CSS margin property (top, right, bottom, left). The values can be percentages. This set of values serves to grow or shrink each side of the placeholder element's bounding box before computing intersections.                  |
| lazyLoad              | Boolean                                          | true                               | :x:                | Wheter enable lazy loading or not                                                                                                                                                                                                                                                             |
| explicitWidth         | Boolean                                          | false                              | :x:                | Wheter the image wrapper should explicitely declare the width of the image or keep it fluid                                                                                                                                                                                                   |
| objectFit             | String                                           | null                               | :x:                | Defines how the image will fit into its parent container when using layout="fill"                                                                                                                                                                                                             |
| objectPosition        | String                                           | null                               | :x:                | Defines how the image is positioned within its parent element when using layout="fill".                                                                                                                                                                                                       |
| priority              | Boolean                                          | false                              | :x:                | Disables lazy loading, and sets the image [fetchPriority](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/fetchPriority) to "high"                                                                                                                                          |
| srcSetCandidates      | Array<number>                                    | [0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4] | :x:                | If `data` does not contain `srcSet`, the candidates for the `srcset` attribute of the image will be auto-generated based on these width multipliers                                                                                                                                           |
| sizes                 | string                                           | undefined                          | :x:                | The HTML5 [`sizes`](https://web.dev/learn/design/responsive-images/#sizes) attribute for the image (will be used `data.sizes` as a fallback)                                                                                                                                                  |
| onLoad                | () => void                                       | undefined                          | :x:                | Function triggered when the image has finished loading                                                                                                                                                                                                                                        |
| usePlaceholder        | Boolean                                          | true                               | :x:                | Whether the component should use a blurred image placeholder                                                                                                                                                                                                                                  |
| referrerPolicy        | string                                           | `no-referrer-when-downgrade`       | :x:                | Defines which referrer is sent when fetching the image. Defaults to `no-referrer-when-downgrade` to give more useful stats in DatoCMS Project Usages                                                                                                                                          |

### Events

| prop  | description                                 |
| ----- | ------------------------------------------- |
| @load | Emitted when the image has finished loading |

---

### Layout mode

With the `layout` property, you can configure the behavior of the image as the viewport changes size:

- When `intrinsic`, the image will scale the dimensions down for smaller viewports, but maintain the original dimensions for larger viewports.
- When `fixed`, the image dimensions will not change as the viewport changes (no responsiveness) similar to the native `img` element.
- When `responsive` (default behaviour), the image will scale the dimensions down for smaller viewports and scale up for larger viewports.
- When `fill`, the image will stretch both width and height to the dimensions of the parent element, provided the parent element is relative.
  - This is usually paired with the `objectFit` and `objectPosition` properties.
  - Ensure the parent element has `position: relative` in their stylesheet.

### Intersection Observer

`IntersectionObserver` is the API used to determine if the image is inside the viewport or not. [Browser support is really good](https://caniuse.com/intersectionobserver): with Safari adding support in 12.1, all major browsers now support `IntersectionObserver` natively.

If `IntersectionObserver` object is not available, the component treats the image as it's always visible in the viewport. Feel free to add a [polyfill](https://www.npmjs.com/package/intersection-observer) so that it will also 100% work on older versions of iOS and IE11.

---

# `<VideoPlayer/>` component for easy video integration.

`<VideoPlayer />` is a Svelte component specially designed to work seamlessly
with DatoCMS’s [`video` GraphQL
query](https://www.datocms.com/docs/content-delivery-api/images-and-videos#videos)
that optimizes video streaming for your sites.

To stream videos, DatoCMS partners with MUX, a video CDN that serves optimized
streams to your users. Our component is a wrapper around [MUX's video
player](https://github.com/muxinc/elements/blob/main/packages/mux-player/README.md)
[web
component](https://developer.mozilla.org/en-US/docs/Web/API/Web_components). It
takes care of the details for you, and this is our recommended way to serve
optimal videos to your users.

## Out-of-the-box features

- Offers optimized streaming so smartphones and tablets don’t request desktop-sized videos
- Lazy loads the underlying video player web component and the video to be
  played to speed initial page load and save bandwidth
- Holds the video position so your page doesn’t jump while the player loads
- Uses blur-up technique to show a placeholder of the video while it loads

### Table of contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installation](#installation)
- [Usage](#usage)
- [Example](#example)
- [Props](#props)
- [Opt-in Viewer Analytics](#opt-in-viewer-analytics)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

```sh {"id":"01HP46D8MDP5Y76HY788MWNDMX"}
npm install --save @datocms/svelte @mux/mux-player
```

`@mux/mux-player` is a [peer dependency](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#peerdependencies) for `@datocms/svelte`: so you're expected to add it to your project.

## Usage

1. Import `VideoPlayer` from `@datocms/svelte` and use it in your app
2. Write a GraphQL query to your DatoCMS project using the [`video` query](https://www.datocms.com/docs/content-delivery-api/images-and-videos#videos)

The GraphQL query returns data that the `VideoPlayer` component automatically uses to properly size the player, set up a “blur-up” placeholder as well as lazy loading the video.

## Example

```svelte {"id":"01HP46D8MDP5Y76HY78BNPWHB2"}
<script>

import { onMount } from 'svelte';

import { VideoPlayer } from '@datocms/svelte';

const query = gql`
  query {
    blogPost {
      title
      cover {
        video {
          # required: this field identifies the video to be played
          muxPlaybackId

          # all the other fields are not required but:

          # if provided, title is displayed in the upper left corner of the video
          title

          # if provided, width and height are used to define the aspect ratio of the
          # player, so to avoid layout jumps during the rendering.
          width
          height

          # if provided, it shows a blurred placeholder for the video
          blurUpThumb

          # you can include more data here: they will be ignored by the component
        }
      }
    }
  }
`;

export let data = null;

onMount(async () => {
  const response = await fetch('https://graphql.datocms.com/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: "Bearer AN_API_TOKEN",
    },
    body: JSON.stringify({ query })
  })

  const json = await response.json()

  data = json.data;
});

</script>

<article>
  {#if data}
    <h1>{{ data.blogPost.title }}</h1>
    <VideoPlayer data={data.blogPost.cover.video} />
  {/if}
</article>
```

## Props

The `<VideoPlayer />` component supports as props all the [attributes](https://github.com/muxinc/elements/blob/main/packages/mux-player/REFERENCE.md)
of the `<mux-player />` web component, plus
`data`, which is meant to receive data directly in the shape they are provided
by DatoCMS GraphQL API.

`<VideoPlayer />` uses the `data` prop to generate a set of attributes for the
inner `<mux-player />`.

| prop   | type           | required           | description                                                      | default |
| ------ | -------------- | ------------------ | ---------------------------------------------------------------- | ------- |
| data   | `Video` object | :white_check_mark: | The actual response you get from a DatoCMS `video` GraphQL query |         |
| paused | `boolean`      |                    | Control to play or pause the video                               |         |

`<VideoPlayer />` generate some default attributes:

- when not declared, the `disableCookies` prop is true, unless you explicitly
  set the prop to `false` (therefore it generates a `disable-cookies` attribute)
- when not declared, the `disableTracking` prop is true, unelss you explicitly
  set it to `false` (so, it normally generates a `disable-tracking` attribute)
- `preload` defaults to `metadata`, for an optimal UX experience together with saved bandwidth
- the video height and width, when available in the `data` props, are used to
  set a default `aspect-ratio: [width] / [height];` for the `<mux-player />`'s
  `style` attribute

All the other props are forwarded to the `<mux-player />` web component that is used internally.

## Opt-in Viewer Analytics

This `<VideoPlayer/>` component can OPTIONALLY collect clientside [playback and engagement metrics](https://www.mux.com/data#TechSpecs) such as playback percentages, user agents, and geography.

These analytics are **disabled** by default. To enable them, you must opt in to [Mux Data](https://www.mux.com/data) integration by creating a Mux Data account (free) and providing its `envKey` to the component.

For details and setup instructions, please see our documentation on **[Streaming Video Analytics with Mux Data](https://www.datocms.com/docs/streaming-videos/streaming-video-analytics-with-mux-data)**.

---

# Structured text

`StructuredText />` is a Svelte component that you can use to render the value contained inside a DatoCMS [Structured Text field type](https://www.datocms.com/docs/structured-text/dast).

### Table of contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Setup](#setup)
- [Basic usage](#basic-usage)
- [Customization](#customization)
  - [Custom components for blocks](#custom-components-for-blocks)
  - [Override default rendering of nodes](#override-default-rendering-of-nodes)
- [Props](#props)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

### Setup

Import the component like this:

```js
import { StructuredText } from '@datocms/svelte';
```

## Basic usage

```svelte
<script>

import { onMount } from 'svelte';

import { StructuredText } from '@datocms/svelte';

const query = `
  query {
    blogPost {
      title
      content {
        value
      }
    }
  }
`;

export let data = null;

onMount(async () => {
  const response = await fetch('https://graphql.datocms.com/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: "Bearer AN_API_TOKEN",
    },
    body: JSON.stringify({ query })
  })

  const json = await response.json()

  data = json.data;
});

</script>

<article>
  {#if data}
    <h1>{{ data.blogPost.title }}</h1>
    <StructuredText data={data.blogPost.content} />
  {/if}
</article>
```

## Customization

The `<StructuredText />` component comes with a set of default components that are use to render all the nodes present in [DatoCMS Dast trees](https://www.datocms.com/docs/structured-text/dast). These default components are enough to cover most of the simple cases.

You need to use custom components in the following cases:

- you have to render blocks, inline items or item links: there's no conventional way of rendering theses nodes, so you must create and pass custom components;
- you need to render a conventional node differently (e.g. you may want a custom render for blockquotes)

### Custom components for blocks

Here is an example using custom components for blocks, inline blocks, inline records and links to records. Take a look at the [test fixtures](https://github.com/datocms/datocms-svelte/tree/main/src/lib/components/StructuredText/__tests__/__fixtures__) to see examples on how to implement these components.

```svelte
<script>
import { onMount } from 'svelte';
import { executeQuery } from '@datocms/cda-client';

import { isBlock, isInlineItem, isItemLink } from 'datocms-structured-text-utils';

import { StructuredText } from '@datocms/svelte';

import Block from './Block.svelte';
import InlineItem from './InlineItem.svelte';
import ItemLink from './ItemLink.svelte';

const query = `
  query {
    blogPost {
      title
      content {
        value
        links {
          ... on RecordInterface {
            id
            __typename
          }
          ... on TeamMemberRecord {
            firstName
            slug
          }
        }
        blocks {
          ... on RecordInterface {
            id
            __typename
          }
          ... on CtaRecord {
            title
            url
          }
        }
        inlineBlocks {
          ... on RecordInterface {
            id
            __typename
          }
          ... on MentionRecord {
            username
          }
        }
      }
    }
  }
`;

export let data = null;

onMount(async () => {
  data = await executeQuery(query, { token: '<YOUR-API-TOKEN>' });
});

</script>

<article>
  {#if data}
    <h1>{{ data.blogPost.title }}</h1>
    <datocms-structured-text
      data={data.blogPost.content}
      components={[
        [isInlineItem, InlineItem],
        [isItemLink, ItemLink],
        [isBlock, Block]
        [isInlineBlock, InlineBlock]
      ]}
    />
  {/if}
</article>
```

### Override default rendering of nodes

`<StructuredText />` automatically renders all nodes (except for `inlineItem`, `itemLink`, `block` and `inlineBlock`) using a set of default components, that you might want to customize. For example:

- For `heading` nodes, you might want to add an anchor;
- For `code` nodes, you might want to use a custom syntax highlighting component;

In this case, you can easily override default rendering rules with the `components` props. See test fixtures for example implementations of custom components (e.g. [this special heading component](https://github.com/datocms/datocms-svelte/blob/main/src/lib/components/StructuredText/__tests__/__fixtures__/IncreasedLevelHeading.svelte)).

```svelte
<script>
	import { isHeading, isCode } from 'datocms-structured-text-utils';

	import Heading from './Heading.svelte';
	import Code from './Code.svelte';

	export let data;
</script>

<StructuredText
	data={data.blogPost.content}
	components={[
		[isHeading, Heading],
		[isCode, Code]
	]}
/>
```

## Props

| prop       | type                                                                                                        | required                                                                                | description                                                                                      | default |
| ---------- | ----------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ------- |
| data       | `StructuredText \| DastNode`                                                                                | :white_check_mark:                                                                      | The actual [field value](https://www.datocms.com/docs/structured-text/dast) you get from DatoCMS |         |
| components | [`PredicateComponentTuple[] \| null`](https://github.com/datocms/datocms-svelte/blob/main/src/lib/index.ts) | Only required if data contains `block`, `inlineBlock`, `inlineItem` or `itemLink` nodes | Array of tuples formed by a predicate function and custom component                              | `[]`    |

---

# Social share, SEO and Favicon meta tags

Just like the image component, `<Head />` is a component specially designed to work seamlessly with DatoCMS’s [`_seoMetaTags` and `faviconMetaTags` GraphQL queries](https://www.datocms.com/docs/content-delivery-api/seo) so that you can handle proper SEO in your pages.

You can use `<Head />` your components, and it will inject title, meta and link tags in the document's `<head></head>` tag.

### Table of contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Usage](#usage)
- [Example](#example)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Usage

`<Head />`'s `data` prop takes an array of `Tag`s in the exact form they're returned by the following [DatoCMS GraphQL API](https://www.datocms.com/docs/content-delivery-api/seo) queries:

- `_seoMetaTags` query on any record, or
- `faviconMetaTags` on the global `_site` object.

## Example

Here is an example:

```svelte
<script>
	import { onMount } from 'svelte';

	import { Head } from '@datocms/svelte';

	const query = `
    query {
      page: homepage {
        title
        seo: _seoMetaTags {
          attributes
          content
          tag
        }
      }
      site: _site {
        favicon: faviconMetaTags {
          attributes
          content
          tag
        }
      }
    }
  `;

	export let data = null;

	onMount(async () => {
		const response = await fetch('https://graphql.datocms.com/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer AN_API_TOKEN'
			},
			body: JSON.stringify({ query })
		});

		const json = await response.json();

		data = [...json.data.page.seo, ...json.data.site.favicon];
	});
</script>

<Head {data} />
```

---

# Live real-time updates

`querySubscription` returns a Svelte store that you can use to implement client-side updates of the page as soon as the content changes. It uses DatoCMS's [Real-time Updates API](https://www.datocms.com/docs/real-time-updates-api/api-reference) to receive the updated query results in real-time, and is able to reconnect in case of network failures.

Live updates are great both to get instant previews of your content while editing it inside DatoCMS, or to offer real-time updates of content to your visitors (ie. news site).

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Reference](#reference)
- [Initialization options](#initialization-options)
- [Connection status](#connection-status)
- [Error object](#error-object)
- [Example](#example)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Reference

Import `querySubscription` from `datocms-svelte` and use it inside your components like this:

```js
import { querySubscription } from '@datocms/svelte';

const subscription = querySubscription(options: Options);
```

## Initialization options

| prop               | type                                                                                       | required           | description                                                                                      | default                              |
| ------------------ | ------------------------------------------------------------------------------------------ | ------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------ |
| enabled            | boolean                                                                                    | :x:                | Whether the subscription has to be performed or not                                              | true                                 |
| query              | string \| [`TypedDocumentNode`](https://github.com/dotansimha/graphql-typed-document-node) | :white_check_mark: | The GraphQL query to subscribe                                                                   |                                      |
| token              | string                                                                                     | :white_check_mark: | DatoCMS API token to use                                                                         |                                      |
| variables          | Object                                                                                     | :x:                | GraphQL variables for the query                                                                  |                                      |
| includeDrafts      | boolean                                                                                    | :x:                | If true, draft records will be returned                                                          |                                      |
| excludeInvalid     | boolean                                                                                    | :x:                | If true, invalid records will be filtered out                                                    |                                      |
| environment        | string                                                                                     | :x:                | The name of the DatoCMS environment where to perform the query (defaults to primary environment) |                                      |
| contentLink        | `'vercel-1'` or `undefined`                                                                | :x:                | If true, embed metadata that enable Content Link                                                 |                                      |
| baseEditingUrl     | string                                                                                     | :x:                | The base URL of the DatoCMS project                                                              |                                      |
| cacheTags          | boolean                                                                                    | :x:                | If true, receive the Cache Tags associated with the query                                        |                                      |
| initialData        | Object                                                                                     | :x:                | The initial data to use on the first render                                                      |                                      |
| reconnectionPeriod | number                                                                                     | :x:                | In case of network errors, the period (in ms) to wait to reconnect                               | 1000                                 |
| fetcher            | a [fetch-like function](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)        | :x:                | The fetch function to use to perform the registration query                                      | window.fetch                         |
| eventSourceClass   | an [EventSource-like](https://developer.mozilla.org/en-US/docs/Web/API/EventSource) class  | :x:                | The EventSource class to use to open up the SSE connection                                       | window.EventSource                   |
| baseUrl            | string                                                                                     | :x:                | The base URL to use to perform the query                                                         | `https://graphql-listen.datocms.com` |

## Connection status

The `status` property represents the state of the server-sent events connection. It can be one of the following:

- `connecting`: the subscription channel is trying to connect
- `connected`: the channel is open, we're receiving live updates
- `closed`: the channel has been permanently closed due to a fatal error (ie. an invalid query)

## Error object

| prop     | type   | description                                             |
| -------- | ------ | ------------------------------------------------------- |
| code     | string | The code of the error (ie. `INVALID_QUERY`)             |
| message  | string | An human friendly message explaining the error          |
| response | Object | The raw response returned by the endpoint, if available |

## Example

```svelte
<script>
import { querySubscription } from 'react-datocms';

const subscription = useQuerySubscription({
  enabled: true,
  query: `
    query AppQuery($first: IntType) {
      allBlogPosts {
        slug
        title
      }
    }`,
  variables: { first: 10 },
  token: 'YOUR_API_TOKEN',
});

$: ({ data, error, status } = $subscription)

const statusMessage = {
  connecting: 'Connecting to DatoCMS...',
  connected: 'Connected to DatoCMS, receiving live updates!',
  closed: 'Connection closed',
};
</script>

<p>Connection status: {statusMessage[status]}</p>

{#if error}
  <h1>Error: {error.code}</h1>
  <p>{error.message}</p>
  {#if error.response}
    <pre>{JSON.stringify(error.response, null, 2)}</pre>
  {/if}
{/if}

{#if data}
  <ul>
    {#each data.allBlogPosts as blogPost (blogPost.slug)}
      <li>{blogPost.title}</li>
  </ul>
{/if}
```

---

# `datocms-structured-text-utils`

A set of Typescript types and helpers to work with DatoCMS Structured Text fields.

## Installation

Using [npm](http://npmjs.org/):

```sh
npm install datocms-structured-text-utils
```

Using [yarn](https://yarnpkg.com/):

```sh
yarn add datocms-structured-text-utils
```

## `dast` document validation

You can use the `validate()` function to check if an object is compatible with the [`dast` specification](https://www.datocms.com/docs/structured-text/dast):

```js
import { validate } from 'datocms-structured-text-utils';

const structuredText = {
  value: {
    schema: 'dast',
    document: {
      type: 'root',
      children: [
        {
          type: 'heading',
          level: 1,
          children: [
            {
              type: 'span',
              value: 'Hello!',
              marks: ['invalidmark'],
            },
          ],
        },
      ],
    },
  },
};

const result = validate(structuredText);

if (!result.valid) {
  console.error(result.message); // "span has an invalid mark "invalidmark"
}
```

## `dast` format specs

The package exports a number of constants that represents the rules of the [`dast` specification](https://www.datocms.com/docs/structured-text/dast).

Take a look a the [definitions.ts](https://github.com/datocms/structured-text/blob/main/packages/utils/src/definitions.ts) file for their definition:

```javascript
const blockquoteNodeType = 'blockquote';
const blockNodeType = 'block';
const codeNodeType = 'code';
const headingNodeType = 'heading';
const inlineItemNodeType = 'inlineItem';
const itemLinkNodeType = 'itemLink';
const linkNodeType = 'link';
const listItemNodeType = 'listItem';
const listNodeType = 'list';
const paragraphNodeType = 'paragraph';
const rootNodeType = 'root';
const spanNodeType = 'span';

const allowedNodeTypes = [
  'paragraph',
  'list',
  // ...
];

const allowedChildren = {
  paragraph: 'inlineNodes',
  list: ['listItem'],
  // ...
};

const inlineNodeTypes = [
  'span',
  'link',
  // ...
];

const allowedAttributes = {
  heading: ['level', 'children'],
  // ...
};

const allowedMarks = [
  'strong',
  'code',
  // ...
];
```

## Typescript Types

The package exports Typescript types for all the different nodes that a [`dast` document](https://www.datocms.com/docs/structured-text/dast) can contain.

Take a look a the [types.ts](https://github.com/datocms/structured-text/blob/main/packages/utils/src/types.ts) file for their definition:

```typescript
type Node
type BlockNode
type InlineNode
type RootType
type Root
type ParagraphType
type Paragraph
type HeadingType
type Heading
type ListType
type List
type ListItemType
type ListItem
type CodeType
type Code
type BlockquoteType
type Blockquote
type BlockType
type Block
type SpanType
type Mark
type Span
type LinkType
type Link
type ItemLinkType
type ItemLink
type InlineItemType
type InlineItem
type WithChildrenNode
type Document
type NodeType
type CdaStructuredTextValue
type Record
```

## Typescript Type guards

It also exports all a number of [type guards](https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards) that you can use to guarantees the type of a node in some scope.

Take a look a the [guards.ts](https://github.com/datocms/structured-text/blob/main/packages/utils/src/guards.ts) file for their definition:

```typescript
function hasChildren(node: Node): node is WithChildrenNode {}
function isInlineNode(node: Node): node is InlineNode {}
function isHeading(node: Node): node is Heading {}
function isSpan(node: Node): node is Span {}
function isRoot(node: Node): node is Root {}
function isParagraph(node: Node): node is Paragraph {}
function isList(node: Node): node is List {}
function isListItem(node: Node): node is ListItem {}
function isBlockquote(node: Node): node is Blockquote {}
function isBlock(node: Node): node is Block {}
function isCode(node: Node): node is Code {}
function isLink(node: Node): node is Link {}
function isItemLink(node: Node): node is ItemLink {}
function isInlineItem(node: Node): node is InlineItem {}
function isCdaStructuredTextValue(object: any): object is CdaStructuredTextValue {}
```

## Tree Manipulation Utilities

The package provides a comprehensive set of utilities for traversing, transforming, and querying structured text trees. All utilities support both synchronous and asynchronous operations, work with both document wrappers and plain nodes, and provide full TypeScript support with proper type narrowing.

### Visiting Nodes

| Function                                                                                                           | Description                                                           |
| ------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------- |
| [`forEachNode`](https://github.com/datocms/structured-text/blob/main/packages/utils/src/manipulation.ts#L109)      | Visit every node in the tree synchronously using pre-order traversal  |
| [`forEachNodeAsync`](https://github.com/datocms/structured-text/blob/main/packages/utils/src/manipulation.ts#L142) | Visit every node in the tree asynchronously using pre-order traversal |

Visit all nodes in the tree using pre-order traversal:

```javascript
import { forEachNode, forEachNodeAsync } from 'datocms-structured-text-utils';

// Synchronous traversal
forEachNode(structuredText, (node, parent, path) => {
  console.log(`Node type: ${node.type}, Path: ${path.join('.')}`);
});

// Asynchronous traversal
await forEachNodeAsync(structuredText, async (node, parent, path) => {
  await processNode(node);
});
```

### Transforming Trees

| Function                                                                                                        | Description                                                           |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [`mapNodes`](https://github.com/datocms/structured-text/blob/main/packages/utils/src/manipulation.ts#L176)      | Transform nodes in the tree synchronously while preserving structure  |
| [`mapNodesAsync`](https://github.com/datocms/structured-text/blob/main/packages/utils/src/manipulation.ts#L257) | Transform nodes in the tree asynchronously while preserving structure |

Transform nodes while preserving the tree structure:

```javascript
import { mapNodes, mapNodesAsync, isHeading, isSpan, isBlock } from 'datocms-structured-text-utils';

// Transform heading levels for better hierarchy
const enhanced = mapNodes(structuredText, (node) => {
  if (isHeading(node) && node.level === 1) {
    return { ...node, level: 2 };
  }
  return node;
});

// Async transformation with external API calls
const processed = await mapNodesAsync(structuredText, async (node) => {
  if (isSpan(node) && node.value.includes('TODO')) {
    const updatedText = await translateText(node.value);
    return { ...node, value: updatedText };
  }
  return node;
});
```

### Finding Nodes

| Function                                                                                                             | Description                                                  |
| -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| [`collectNodes`](https://github.com/datocms/structured-text/blob/main/packages/utils/src/manipulation.ts#L340)       | Collect all nodes that match a predicate function            |
| [`collectNodesAsync`](https://github.com/datocms/structured-text/blob/main/packages/utils/src/manipulation.ts#L398)  | Collect all nodes that match an async predicate function     |
| [`findFirstNode`](https://github.com/datocms/structured-text/blob/main/packages/utils/src/manipulation.ts#L437)      | Find the first node that matches a predicate function        |
| [`findFirstNodeAsync`](https://github.com/datocms/structured-text/blob/main/packages/utils/src/manipulation.ts#L515) | Find the first node that matches an async predicate function |

Find specific nodes using predicates or type guards:

```javascript
import {
  findFirstNode,
  findFirstNodeAsync,
  collectNodes,
  collectNodesAsync,
  isSpan,
  isHeading,
} from 'datocms-structured-text-utils';

// Find first node matching condition
const firstHeading = findFirstNode(structuredText, isHeading);
if (firstHeading) {
  console.log(`Found heading: ${firstHeading.node.level}`);
}

// Collect all nodes matching condition
const allSpans = collectNodes(structuredText, isSpan);
const textContent = allSpans.map(({ node }) => node.value).join('');

// Find nodes with specific attributes
const strongText = collectNodes(
  structuredText,
  (node) => isSpan(node) && node.marks?.includes('strong'),
);
```

### Filtering Trees

| Function                                                                                                           | Description                                             |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------- |
| [`filterNodes`](https://github.com/datocms/structured-text/blob/main/packages/utils/src/manipulation.ts#L564)      | Remove nodes that don't match a predicate synchronously |
| [`filterNodesAsync`](https://github.com/datocms/structured-text/blob/main/packages/utils/src/manipulation.ts#L647) | Remove nodes that don't match an async predicate        |

Remove nodes that don't match a predicate:

```javascript
import { filterNodes, filterNodesAsync, isCode, isBlock } from 'datocms-structured-text-utils';

// Remove all code blocks
const withoutCode = filterNodes(structuredText, (node) => !isCode(node));

// Async filtering with external validation
const validated = await filterNodesAsync(structuredText, async (node) => {
  if (isBlock(node)) {
    return await validateBlockItem(node.item);
  }
  return true;
});
```

### Reducing Trees

| Function                                                                                                           | Description                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------- |
| [`reduceNodes`](https://github.com/datocms/structured-text/blob/main/packages/utils/src/manipulation.ts#L734)      | Reduce the tree to a single value using a synchronous reducer function |
| [`reduceNodesAsync`](https://github.com/datocms/structured-text/blob/main/packages/utils/src/manipulation.ts#L779) | Reduce the tree to a single value using an async reducer function      |

Reduce the entire tree to a single value:

```javascript
import { reduceNodes, reduceNodesAsync } from 'datocms-structured-text-utils';

// Extract all text content
const textContent = reduceNodes(
  structuredText,
  (acc, node) => {
    if (isSpan(node)) {
      return acc + node.value;
    }
    return acc;
  },
  '',
);

// Count nodes by type
const nodeCounts = reduceNodes(
  structuredText,
  (acc, node) => {
    acc[node.type] = (acc[node.type] || 0) + 1;
    return acc;
  },
  {},
);
```

### Checking Conditions

| Function                                                                                                         | Description                                                                           |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| [`someNode`](https://github.com/datocms/structured-text/blob/main/packages/utils/src/manipulation.ts#L821)       | Check if any node in the tree matches a predicate (short-circuit evaluation)          |
| [`someNodeAsync`](https://github.com/datocms/structured-text/blob/main/packages/utils/src/manipulation.ts#L862)  | Check if any node in the tree matches an async predicate (short-circuit evaluation)   |
| [`everyNode`](https://github.com/datocms/structured-text/blob/main/packages/utils/src/manipulation.ts#L903)      | Check if every node in the tree matches a predicate (short-circuit evaluation)        |
| [`everyNodeAsync`](https://github.com/datocms/structured-text/blob/main/packages/utils/src/manipulation.ts#L934) | Check if every node in the tree matches an async predicate (short-circuit evaluation) |

Test if any or all nodes match a condition:

```javascript
import {
  someNode,
  everyNode,
  someNodeAsync,
  everyNodeAsync,
  isHeading,
  isSpan,
  isBlock,
} from 'datocms-structured-text-utils';

// Check if document contains any headings
const hasHeadings = someNode(structuredText, isHeading);

// Check if all spans have text content
const allSpansHaveText = everyNode(
  structuredText,
  (node) => !isSpan(node) || (node.value && node.value.length > 0),
);

// Async validation
const allBlocksValid = await everyNodeAsync(
  structuredText,
  async (node) => !isBlock(node) || (await validateBlock(node.item)),
);
```

### Type Safety and Path Information

All utilities provide full TypeScript support with type narrowing and path information:

```typescript
// Type guards automatically narrow types
const headings = collectNodes(structuredText, isHeading);
// headings is now Array<{ node: Heading; path: TreePath }>

headings.forEach(({ node, path }) => {
  // TypeScript knows node is Heading type
  console.log(`Level ${node.level} heading at ${path.join('.')}`);
});

// Custom type guards work too
const strongSpans = collectNodes(
  structuredText,
  (node): node is Span => isSpan(node) && node.marks?.includes('strong'),
);
// strongSpans is now Array<{ node: Span; path: TreePath }>
```

## Tree Visualization with Inspector

The package includes a powerful tree visualization utility that renders structured text documents as ASCII trees, making it easy to debug and understand document structure during development.

### Basic Usage

| Function                                                                                               | Description                                                |
| ------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------- |
| [`inspect`](https://github.com/datocms/structured-text/blob/main/packages/utils/src/inspector.ts#L202) | Render a structured text document or node as an ASCII tree |

```javascript
import { inspect } from 'datocms-structured-text-utils';

const structuredText = {
  schema: 'dast',
  document: {
    type: 'root',
    children: [
      {
        type: 'heading',
        level: 1,
        children: [{ type: 'span', value: 'Main Title' }],
      },
      {
        type: 'paragraph',
        children: [
          { type: 'span', value: 'This is a ' },
          { type: 'span', marks: ['strong'], value: 'bold' },
          { type: 'span', value: ' paragraph.' },
        ],
      },
      {
        type: 'block',
        item: 'block-123',
      },
    ],
  },
};

console.log(inspect(structuredText));
```

**Output:**

```
├ heading (level: 1)
│ └ span "Main Title"
├ paragraph
│ ├ span "This is a "
│ ├ span (marks: strong) "bold"
│ └ span " paragraph."
└ block (item: "block-123")
```

### Custom Block Formatting

The inspector supports custom formatting for block and inline block nodes, allowing you to display rich information about embedded content:

```javascript
import { inspect } from 'datocms-structured-text-utils';

// Example with block objects instead of just IDs
const blockObject = {
  id: 'block-456',
  type: 'item',
  attributes: {
    title: 'Hero Section',
    subtitle: 'Welcome to our site',
    buttonText: 'Get Started',
  },
};

// Simple formatter
const tree = inspect(document, {
  blockFormatter: (item, maxWidth) => {
    if (typeof item === 'string') return `ID: ${item}`;
    return `id: ${item.id}\ntitle: ${item.attributes.title}`;
  },
});

console.log(tree);
```

**Output:**

```
├ paragraph
│ └ span "Content before block"
├ block
│ id: 456
│ title: Hero Section
└ paragraph
  └ span "Content after block"
```

---

![Node.js CI](https://github.com/datocms/structured-text/workflows/Node.js%20CI/badge.svg)

# datocms-structured-text-to-plain-text

Plain text renderer for the Structured Text document.

## Installation

Using [npm](http://npmjs.org/):

```sh
npm install datocms-structured-text-to-plain-text
```

Using [yarn](https://yarnpkg.com/):

```sh
yarn add datocms-structured-text-to-plain-text
```

## Usage

```javascript
import { render } from 'datocms-structured-text-to-plain-text';

const structuredText = {
  value: {
    schema: 'dast',
    document: {
      type: 'root',
      children: [
        {
          type: 'heading',
          level: 1,
          children: [
            {
              type: 'span',
              value: 'This\nis a\ntitle!',
            },
          ],
        },
      ],
    },
  },
};

render(structuredText); // -> "This is a title!"
```

You can also pass custom renderers for `itemLink`, `inlineItem`, `block` as optional parameters like so:

```javascript
import { render } from 'datocms-structured-text-to-plain-text';

const graphqlResponse = {
  value: {
    schema: 'dast',
    document: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'span',
              value: 'A ',
            },
            {
              type: 'itemLink',
              item: '344312',
              children: [
                {
                  type: 'span',
                  value: 'record hyperlink',
                },
              ],
            },
            {
              type: 'span',
              value: ' and an inline record: ',
            },
            {
              type: 'inlineItem',
              item: '344312',
            },
          ],
        },
        {
          type: 'block',
          item: '812394',
        },
      ],
    },
  },
  blocks: [
    {
      id: '812394',
      image: { url: 'http://www.datocms-assets.com/1312/image.png' },
    },
  ],
  links: [{ id: '344312', title: 'Foo', slug: 'foo' }],
};

const options = {
  renderBlock({ record }) {
    return `[Image ${record.image.url}]`;
  },
  renderInlineRecord({ record, adapter: { renderNode } }) {
    return `[Inline ${record.slug}]${children}[/Inline]`;
  },
  renderLinkToRecord({ record, children, adapter: { renderNode } }) {
    return `[Link to ${record.slug}]${children}[/Link]`;
  },
};

render(document, options);
// -> A [Link to foo]record hyperlink[/Link] and an inline record: [Inline foo]Foo[/Inline]
//    [Image http://www.datocms-assets.com/1312/image.png]
```

---

![Node.js CI](https://github.com/datocms/structured-text/workflows/Node.js%20CI/badge.svg)

# datocms-structured-text-to-markdown

Markdown renderer for the DatoCMS Structured Text field type.

## Installation

Using [npm](http://npmjs.org/):

```sh
npm install datocms-structured-text-to-markdown
```

Using [yarn](https://yarnpkg.com/):

```sh
yarn add datocms-structured-text-to-markdown
```

## Usage

```javascript
import { render } from 'datocms-structured-text-to-markdown';

render({
  schema: 'dast',
  document: {
    type: 'root',
    children: [
      {
        type: 'heading',
        level: 1,
        children: [
          {
            type: 'span',
            value: 'Hello world!',
          },
        ],
      },
      {
        type: 'paragraph',
        children: [
          {
            type: 'span',
            value: 'This is a paragraph.',
          },
        ],
      },
    ],
  },
});
// -> # Hello world!
//
//    This is a paragraph.
```

## Supported Markdown Features

The renderer supports all DatoCMS Structured Text nodes and converts them to CommonMark-compatible Markdown:

### Block Nodes

- **Headings**: `# H1` through `###### H6`
- **Paragraphs**: Plain text with double newlines
- **Lists**: Both bulleted (`-`) and numbered (`1.`) lists with nested support
- **Blockquotes**: Lines prefixed with `>`
- **Code blocks**: Fenced code blocks with language support
- **Thematic breaks**: Horizontal rules (`---`)

### Inline Formatting

- **Strong**: `**bold**`
- **Emphasis**: `*italic*`
- **Code**: `` `code` ``
- **Strikethrough**: `~~text~~`
- **Highlight**: `==text==` (extended Markdown)
- **Underline**: `<u>text</u>` (HTML fallback, no native Markdown)

### Links

- **Regular links**: `[text](url)`
- **Record links**: Custom rendering via `renderLinkToRecord`

## Behavior Notes

- **Escaping strategy**: `renderText` escapes ``\`*_{}[]()#+|<>`` to avoid accidental formatting or unintended HTML. For bespoke sanitization, supply a custom `renderText` implementation.
- **Ordered list markers**: Every numbered list item is rendered as `1.`. CommonMark parsers expand these into the correct numeric sequence automatically and this keeps the output stable even when items are reordered.
- **Blockquote attribution**: When a blockquote contains an `attribution` field, the renderer appends a final line formatted as `— Author`. This mirrors the DOM renderer's output but is not part of the Markdown core spec.

## Error Handling

The renderer surfaces meaningful `RenderError` instances when required data is missing:

- `inlineItem` nodes throw if you provide `renderInlineRecord` but the requested record is not present in `.links`. Without the handler, the node is skipped.
- `itemLink` nodes behave the same way: supplying `renderLinkToRecord` without the matching record raises, while omitting the handler falls back to the plain link text.
- `block` and `inlineBlock` nodes require both a renderer and a matching record. Missing renderers make the node render as empty; missing records raise.

Handle these errors upstream by passing the complete GraphQL response or adjusting your custom render callbacks.

## Advanced Usage

### Custom Rendering

You can pass custom renderers for nodes and text:

```javascript
import { render, renderNodeRule } from 'datocms-structured-text-to-markdown';
import { isHeading } from 'datocms-structured-text-utils';

const options = {
  renderText: (text) => text.toUpperCase(),
  customNodeRules: [
    renderNodeRule(isHeading, ({ node, children, adapter: { renderFragment } }) => {
      // Custom heading with decoration
      return renderFragment([`${'='.repeat(node.level)} `, ...(children || []), '\n\n']);
    }),
  ],
};

render(document, options);
```

### Rendering DatoCMS records and blocks

You can pass custom renderers for `itemLink`, `inlineItem`, `block`, and `inlineBlock` nodes:

```javascript
import { render } from 'datocms-structured-text-to-markdown';

const graphqlResponse = {
  value: {
    schema: 'dast',
    document: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'span',
              value: 'Check out ',
            },
            {
              type: 'itemLink',
              item: '123',
              children: [
                {
                  type: 'span',
                  value: 'this article',
                },
              ],
            },
            {
              type: 'span',
              value: ' and ',
            },
            {
              type: 'inlineItem',
              item: '123',
            },
            {
              type: 'span',
              value: '!',
            },
          ],
        },
        {
          type: 'block',
          item: '456',
        },
      ],
    },
  },
  blocks: [
    {
      id: '456',
      __typename: 'CalloutRecord',
      style: 'positive',
      title: '🛠️ Block and Structured Text utilities',
      content:
        'We provide many utility functions to help you work with blocks and structured text nodes effectively.',
    },
  ],
  links: [
    {
      id: '123',
      __typename: 'BlogPostRecord',
      title: 'My First Post',
      slug: 'my-first-post',
    },
  ],
};

const options = {
  renderInlineRecord: ({ record }) => {
    switch (record.__typename) {
      case 'BlogPostRecord':
        return `[${record.title}](/blog/${record.slug})`;
      default:
        return null;
    }
  },
  renderLinkToRecord: ({ record, children }) => {
    switch (record.__typename) {
      case 'BlogPostRecord':
        return `[${children}](/blog/${record.slug})`;
      default:
        return null;
    }
  },
  renderBlock: ({ record }) => {
    switch (record.__typename) {
      case 'CalloutRecord': {
        // GitHub-flavored Markdown supports callout syntax
        const calloutType = record.style.toUpperCase();
        return `> [!${calloutType}] ${record.title}\n> ${record.content}\n\n`;
      }
      default:
        return null;
    }
  },
};

render(graphqlResponse, options);
// -> Check out [this article](/blog/my-first-post) and [My First Post](/blog/my-first-post)!
//
//    > [!POSITIVE] 🛠️ Block and Structured Text utilities
//    > We provide many utility functions to help you work with blocks and structured text nodes effectively.
```

## API

### `render(structuredText, options?)`

Converts a Structured Text document to a Markdown string.

#### Parameters

- `structuredText`: The Structured Text document (can be a full GraphQL response or a plain document)
- `options` (optional): Rendering options
  - `customNodeRules`: Array of custom node rendering rules
  - `customMarkRules`: Array of custom mark rendering rules
  - `renderInlineRecord`: Function to render `inlineItem` nodes
  - `renderLinkToRecord`: Function to render `itemLink` nodes
  - `renderBlock`: Function to render `block` nodes
  - `renderInlineBlock`: Function to render `inlineBlock` nodes
  - `renderText`: Function to customize text rendering
  - `renderNode`: Function to customize node rendering
  - `renderFragment`: Function to customize fragment rendering

#### Returns

A Markdown string, or `null` if the input is empty.

---

![Node.js CI](https://github.com/datocms/structured-text/workflows/Node.js%20CI/badge.svg)

# datocms-structured-text-to-html-string

HTML renderer for the DatoCMS Structured Text field type.

## Installation

Using [npm](http://npmjs.org/):

```sh
npm install datocms-structured-text-to-html-string
```

Using [yarn](https://yarnpkg.com/):

```sh
yarn add datocms-structured-text-to-html-string
```

## Usage

```javascript
import { render } from 'datocms-structured-text-to-html-string';

render({
  schema: 'dast',
  document: {
    type: 'root',
    children: [
      {
        type: 'paragraph',
        children: [
          {
            type: 'span',
            value: 'Hello world!',
          },
        ],
      },
    ],
  },
}); // -> <p>Hello world!</p>

render({
  type: 'root',
  children: [
    {
      type: 'paragraph',
      content: [
        {
          type: 'span',
          value: 'Hello',
          marks: ['strong'],
        },
        {
          type: 'span',
          value: ' world!',
          marks: ['underline'],
        },
      ],
    },
  ],
}); // -> <p><strong>Hello</strong><u> world!</u></p>
```

You can pass custom renderers for nodes and text as optional parameters like so:

```javascript
import { render, renderNodeRule } from 'datocms-structured-text-to-html-string';
import { isHeading } from 'datocms-structured-text-utils';

const structuredText = {
  type: 'root',
  children: [
    {
      type: 'heading',
      level: 1,
      content: [
        {
          type: 'span',
          value: 'Hello world!',
        },
      ],
    },
  ],
};

const options = {
  renderText: (text) => text.replace(/Hello/, 'Howdy'),
  customNodeRules: [
    renderNodeRule(isHeading, ({ adapter: { renderNode }, node, children, key }) => {
      return renderNode(`h${node.level + 1}`, { key }, children);
    }),
  ],
  customMarkRules: [
    renderMarkRule('strong', ({ adapter: { renderNode }, children, key }) => {
      return renderNode('b', { key }, children);
    }),
  ],
};

render(document, options);
// -> <h2>Howdy world!</h2>
```

Last, but not least, you can pass custom renderers for `itemLink`, `inlineItem`, `block` as optional parameters like so:

```javascript
import { render } from 'datocms-structured-text-to-html-string';

const graphqlResponse = {
  value: {
    schema: 'dast',
    document: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'span',
              value: 'A ',
            },
            {
              type: 'itemLink',
              item: '344312',
              children: [
                {
                  type: 'span',
                  value: 'record hyperlink',
                },
              ],
            },
            {
              type: 'span',
              value: ' and an inline record: ',
            },
            {
              type: 'inlineItem',
              item: '344312',
            },
          ],
        },
        {
          type: 'block',
          item: '812394',
        },
      ],
    },
  },
  blocks: [
    {
      id: '812394',
      image: { url: 'http://www.datocms-assets.com/1312/image.png' },
    },
  ],
  links: [{ id: '344312', title: 'Foo', slug: 'foo' }],
};

const options = {
  renderBlock({ record, adapter: { renderNode } }) {
    return renderNode('figure', {}, renderNode('img', { src: record.image.url }));
  },
  renderInlineRecord({ record, adapter: { renderNode } }) {
    return renderNode('a', { href: `/blog/${record.slug}` }, record.title);
  },
  renderLinkToRecord({ record, children, adapter: { renderNode } }) {
    return renderNode('a', { href: `/blog/${record.slug}` }, children);
  },
};

render(document, options);
// -> <p>A <a href="/blog/foo">record hyperlink</a> and an inline record: <a href="/blog/foo">Foo</a></p>
//    <figure><img src="http://www.datocms-assets.com/1312/image.png" /></figure>
```

---

![Node.js CI](https://github.com/datocms/structured-text/workflows/Node.js%20CI/badge.svg)

# datocms-structured-text-to-dom-nodes

DOM nodes renderer for the DatoCMS Structured Text field type. To be used inside the browser, as it uses `document.createElement`.

## Installation

Using [npm](http://npmjs.org/):

```sh
npm install datocms-structured-text-to-dom-nodes
```

Using [yarn](https://yarnpkg.com/):

```sh
yarn add datocms-structured-text-to-dom-nodes
```

## Usage

```javascript
import { render } from 'datocms-structured-text-to-dom-nodes';

let nodes = render({
  schema: 'dast',
  document: {
    type: 'root',
    children: [
      {
        type: 'paragraph',
        children: [
          {
            type: 'span',
            value: 'Hello world!',
          },
        ],
      },
    ],
  },
});

console.log(nodes.map((node) => node.outerHTML)); // -> ["<p>Hello world!</p>"]

nodes = render({
  type: 'root',
  children: [
    {
      type: 'paragraph',
      content: [
        {
          type: 'span',
          value: 'Hello',
          marks: ['strong'],
        },
        {
          type: 'span',
          value: ' world!',
          marks: ['underline'],
        },
      ],
    },
  ],
});

console.log(nodes.map((node) => node.outerHTML)); // -> ["<p><strong>Hello</strong><u> world!</u></p>"]
```

You can pass custom renderers for nodes and text as optional parameters like so:

```javascript
import { render, renderNodeRule } from 'datocms-structured-text-to-dom-nodes';
import { isHeading } from 'datocms-structured-text-utils';

const structuredText = {
  type: 'root',
  children: [
    {
      type: 'heading',
      level: 1,
      content: [
        {
          type: 'span',
          value: 'Hello world!',
        },
      ],
    },
  ],
};

const options = {
  renderText: (text) => text.replace(/Hello/, 'Howdy'),
  customNodeRules: [
    renderNodeRule(isHeading, ({ adapter: { renderNode }, node, children, key }) => {
      return renderNode(`h${node.level + 1}`, { key }, children);
    }),
  ],
  customMarkRules: [
    renderMarkRule('strong', ({ adapter: { renderNode }, children, key }) => {
      return renderNode('b', { key }, children);
    }),
  ],
};

render(document, options);
// -> [<h2>Howdy world!</h2>]
```

Last, but not least, you can pass custom renderers for `itemLink`, `inlineItem`, `block` as optional parameters like so:

```javascript
import { render } from 'datocms-structured-text-to-dom-nodes';

const graphqlResponse = {
  value: {
    schema: 'dast',
    document: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'span',
              value: 'A ',
            },
            {
              type: 'itemLink',
              item: '344312',
              children: [
                {
                  type: 'span',
                  value: 'record hyperlink',
                },
              ],
            },
            {
              type: 'span',
              value: ' and an inline record: ',
            },
            {
              type: 'inlineItem',
              item: '344312',
            },
          ],
        },
        {
          type: 'block',
          item: '812394',
        },
      ],
    },
  },
  blocks: [
    {
      id: '812394',
      image: { url: 'http://www.datocms-assets.com/1312/image.png' },
    },
  ],
  links: [{ id: '344312', title: 'Foo', slug: 'foo' }],
};

const options = {
  renderBlock({ record, adapter: { renderNode } }) {
    return renderNode('figure', {}, renderNode('img', { src: record.url }));
  },
  renderInlineRecord({ record, adapter: { renderNode } }) {
    return renderNode('a', { href: `/blog/${record.slug}` }, record.title);
  },
  renderLinkToRecord({ record, children, adapter: { renderNode } }) {
    return renderNode('a', { href: `/blog/${record.slug}` }, children);
  },
};

render(document, options);
// -> [
//      <p>A <a href="/blog/foo">record hyperlink</a> and an inline record: <a href="/blog/foo">Foo</a></p>,
//      <figure><img src="http://www.datocms-assets.com/1312/image.png" /></figure>
//    ]
```

---

# `datocms-html-to-structured-text`

This package contains utilities to convert HTML (or a [Hast](https://github.com/syntax-tree/hast) to a DatoCMS Structured Text `dast` (DatoCMS Abstract Syntax Tree) document.

Please refer to [the `dast` format docs](https://www.datocms.com/docs/structured-text/dast) to learn more about the syntax tree format and the available nodes.

## Usage

The main utility in this package is `htmlToStructuredText` which takes a string of HTML and transforms it into a valid `dast` document.

`htmlToStructuredText` returns a `Promise` that resolves with a Structured Text document.

```js
import { htmlToStructuredText } from 'datocms-html-to-structured-text';

const html = `
  <article>
    <h1>DatoCMS</h1>
    <p>The most complete, user-friendly and performant Headless CMS.</p>
  </article>
`;

htmlToStructuredText(html).then((structuredText) => {
  console.log(structuredText);
});
```

`htmlToStructuredText` is meant to be used in a browser environment.

In Node.js you can use the `parse5ToStructuredText` helper which instead takes a document generated with `parse5`.

```js
import parse5 from 'parse5';
import { parse5ToStructuredText } from 'datocms-html-to-structured-text';

parse5ToStructuredText(
  parse5.parse(html, {
    sourceCodeLocationInfo: true,
  }),
).then((structuredText) => {
  console.log(structuredText);
});
```

Internally, both utilities work on a [Hast](https://github.com/syntax-tree/hast). Should you have a `hast` already you can use a third utility called `hastToDast`.

## Validate `dast` documents

`dast` is a strict format for DatoCMS' Structured Text fields. As such the resulting document is generally a simplified, content-centric version of the input HTML.

When possible, the library relies on semantic HTML to generate a valid `dast` document.

The `datocms-structured-text-utils` package provides a `validate` utility to validate a value to make sure that the resulting tree is compatible with DatoCMS' Structured Text field.

```js
import { validate } from 'datocms-structured-text-utils';

// ...

htmlToStructuredText(html).then((structuredText) => {
  const { valid, message } = validate(structuredText);

  if (!valid) {
    throw new Error(message);
  }
});
```

We recommend to validate every `dast` to avoid errors later when creating records.

## Advanced Usage

### Options

All the `*ToStructuredText` utils accept an optional `options` object as second argument:

```js
type Options = Partial<{
  newlines: boolean,
  // Override existing `hast` node handlers or add new ones
  handlers: Record<string, CreateNodeFunction>,
  // Allows to tweak the `hast` tree before transforming it to a `dast` document
  preprocess: (hast: HastRootNode) => HastRootNode,
  // Array of allowed block nodes
  allowedBlocks: Array<
    BlockquoteType | CodeType | HeadingType | LinkType | ListType,
  >,
  // Array of allowed marks
  allowedMarks: Mark[],
  // Array of allowed heading levels for 'heading' nodes
  allowedHeadingLevels: Array<1 | 2 | 3 | 4 | 5 | 6>,
}>;
```

### Transforming Nodes

The utils in this library traverse a `hast` tree and transform supported nodes to `dast` nodes. The transformation is done by working on a `hast` node with a handler (async) function.

Handlers are associated to `hast` nodes by `tagName` or `type` when `node.type !== 'element'` and look as follow:

```js
import { visitChildren } from 'datocms-html-to-structured-text';

// Handler for the <p> tag.
async function p(createDastNode, hastNode, context) {
  return createDastNode('paragraph', {
    children: await visitChildren(createDastNode, hastNode, context),
  });
}
```

Handlers can return either a promise that resolves to a `dast` node, an array of `dast` Nodes or `undefined` to skip the current node.

To ensure that a valid `dast` is generated the default handlers also check that the current `hastNode` is a valid `dast` node for its parent and, if not, they ignore the current node and continue visiting its children.

Information about the parent `dast` node name is available in `context.parentNodeType`.

Please take a look at the [default handlers implementation](./handlers.ts) for examples.

The default handlers are available on `context.defaultHandlers`.

### context

Every handler receives a `context` object that includes the following information:

```js
export interface GlobalContext {
  // Whether the library has found a <base> tag or should not look further.
  // See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base
  baseUrlFound?: boolean;
  // <base> tag url. This is used for resolving relative URLs.
  baseUrl?: string;
}

export interface Context {
  // The current parent `dast` node type.
  parentNodeType: NodeType;
  // The parent `hast` node.
  parentNode: HastNode;
  // A reference to the current handlers - merged default + user handlers.
  handlers: Record<string, Handler<unknown>>;
  // A reference to the default handlers record (map).
  defaultHandlers: Record<string, Handler<unknown>>;
  // true if the content can include newlines, and false if not (such as in headings).
  wrapText: boolean;
  // Marks for span nodes.
  marks?: Mark[];
  // Prefix for language detection in code blocks.
  // Detection is done on a class name eg class="language-html"
  // Default is `language-`
  codePrefix?: string;
  // Array of allowed Block types.
  allowedBlocks: Array<
    BlockquoteType | CodeType | HeadingType | LinkType | ListType,
  >;
  // Array of allowed marks.
  allowedMarks: Mark[];
  // Properties in this object are available to every handler as Context
  // is not deeply cloned.
  global: GlobalContext;
}
```

### Custom Handlers

It is possible to register custom handlers and override the default behavior via options:

```js
import { paragraphHandler } from './customHandlers';

htmlToStructuredText(html, {
  handlers: {
    p: paragraphHandler,
  },
}).then((structuredText) => {
  console.log(structuredText);
});
```

It is **highly encouraged** to validate the `dast` when using custom handlers because handlers are responsible for dictating valid parent-children relationships and therefore generating a tree that is compliant with DatoCMS' Structured Text.

## preprocessing

Because of the strictness of the `dast` spec it is possible that some semantic or elements might be lost during the transformation.

To improve the final result, you might want to modify the `hast` before it is transformed to `dast` with the `preprocess` hook.

```js
import { findAll } from 'unist-utils-core';
const html = `
  <p>convert this to an h1</p>
`;

htmlToStructuredText(html, {
  preprocess: (tree) => {
    // Transform <p> to <h1>
    findAll(tree, (node) => {
      if (node.type === 'element' && node.tagName === 'p') {
        node.tagName = 'h1';
      }
    });
  },
}).then((structuredText) => {
  console.log(structuredText);
});
```

### Examples

<details>
  <summary>Split a node that contains an image.</summary>

In `dast` images can be presented as `Block` nodes but these are not allowed inside of `ListItem` nodes (ul/ol lists). In this example we will split the list in 3 pieces and lift up the image.

The same approach can be used to split other types of branches and lift up nodes to become root nodes.

```js
import { visit } from 'unist-utils-core';

const html = `
  <ul>
    <li>item 1</li>
    <li><div><img src="./img.png" alt></div></li>
    <li>item 2</li>
  </ul>
`;

const dast = await htmlToStructuredText(html, {
  preprocess: (tree) => {
    const liftedImages = new WeakSet();
    const body = find(tree, (node) => node.tagName === 'body');

    visit(body, (node, index, parents) => {
      if (
        !node ||
        node.tagName !== 'img' ||
        liftedImages.has(node) ||
        parents.length === 1 // is a top level img
      ) {
        return;
      }
      // remove image

      const imgParent = parents[parents.length - 1];
      imgParent.children.splice(index, 1);

      let i = parents.length;
      let splitChildrenIndex = index;
      let childrenAfterSplitPoint = [];

      while (--i > 0) {
        // Example: i == 2
        // [ 'body', 'div', 'h1' ]
        const /* h1 */ parent = parents[i];
        const /* div */ parentsParent = parents[i - 1];

        // Delete the siblings after the image and save them in a variable
        childrenAfterSplitPoint /* [ 'h1.2' ] */ = parent.children.splice(splitChildrenIndex);
        // parent.children is now == [ 'h1.1' ]

        // parentsParent.children = [ 'h1' ]
        splitChildrenIndex = parentsParent.children.indexOf(parent);
        // splitChildrenIndex = 0

        let nodeInserted = false;

        // If we reached the 'div' add the image's node
        if (i === 1) {
          splitChildrenIndex += 1;
          parentsParent.children.splice(splitChildrenIndex, 0, node);
          liftedImages.add(node);

          nodeInserted = true;
        }

        splitChildrenIndex += 1;
        // Create a new branch with childrenAfterSplitPoint if we have any i.e.
        // <h1>h1.2</h1>
        if (childrenAfterSplitPoint.length > 0) {
          parentsParent.children.splice(splitChildrenIndex, 0, {
            ...parent,
            children: childrenAfterSplitPoint,
          });
        }
        // Remove the parent if empty
        if (parent.children.length === 0) {
          splitChildrenIndex -= 1;
          parentsParent.children.splice(
            nodeInserted ? splitChildrenIndex - 1 : splitChildrenIndex,
            1,
          );
        }
      }
    });
  },
  handlers: {
    img: async (createNode, node, context) => {
      // In a real scenario you would upload the image to Dato and get back an id.
      const item = '123';
      return createNode('block', {
        item,
      });
    },
  },
});
```

</details>

<details>
  <summary>Lift up an image node</summary>

```js
import { visit, CONTINUE } from 'unist-utils-core';

const html = `
  <ul>
    <li>item 1</li>
    <li><div><img src="./img.png" alt>item 2</div></li>
    <li>item 3</li>
  </ul>
`;

const dast = await htmlToStructuredText(html, {
  preprocess: (tree) => {
    visit(tree, (node, index, parents) => {
      if (node.tagName === 'img' && parents.length > 1) {
        const parent = parents[parents.length - 1];
        tree.children.push(node);
        parent.children.splice(index, 1);
        return [CONTINUE, index];
      }
    });
  },
  handlers: {
    img: async (createNode, node, context) => {
      // In a real scenario you would upload the image to Dato and get back an id.
      const item = '123';
      return createNode('block', { item });
    },
  },
});
```

</details>

### Utilities

To work with `hast` and `dast` trees we recommend using the [unist-utils-core](https://www.npmjs.com/package/unist-utils-core) library.

## License

MIT

---

# `datocms-structured-text-slate-utils`

A set of Typescript types and helpers to convert Structured Text dast to Slate structures.

## Installation

Using [npm](http://npmjs.org/):

```sh
npm install datocms-structured-text-slate-utils
```

Using [yarn](https://yarnpkg.com/):

```sh
yarn add datocms-structured-text-slate-utils
```

---

# datocms-listen

![MIT](https://img.shields.io/npm/l/datocms-listen?style=for-the-badge) ![MIT](https://img.shields.io/npm/v/datocms-listen?style=for-the-badge) [![Build Status](https://img.shields.io/travis/datocms/datocms-listen?style=for-the-badge)](https://travis-ci.org/datocms/datocms-listen)

A lightweight, TypeScript-ready package that offers utilities to work with DatoCMS [Real-time Updates API](https://www.datocms.com/docs/real-time-updates-api) inside a browser.

## Installation

```
npm install datocms-listen
```

## Example

Import `subscribeToQuery` from `datocms-listen` and use it inside your components like this:

```js
import { subscribeToQuery } from 'datocms-listen';

const unsubscribe = await subscribeToQuery({
  query: `
    query BlogPosts($first: IntType!) {
      allBlogPosts(first: $first) {
        title
        nonExistingField
      }
    }
  `,
  variables: { first: 10 },
  token: 'YOUR_TOKEN',
  includeDrafts: true,
  onUpdate: (update) => {
    // response is the GraphQL response
    console.log(update.response.data);
  },
  onStatusChange: (status) => {
    // status can be "connected", "connecting" or "closed"
    console.log(status);
  },
  onChannelError: (error) => {
    // error will be something like:
    // {
    //   code: "INVALID_QUERY",
    //   message: "The query returned an erroneous response. Please consult the response details to understand the cause.",
    //   response: {
    //     errors: [
    //       {
    //         fields: ["query", "allBlogPosts", "nonExistingField"],
    //         locations: [{ column: 67, line: 1 }],
    //         message: "Field 'nonExistingField' doesn't exist on type 'BlogPostRecord'",
    //       },
    //     ],
    //   },
    // }
    console.error(error);
  },
  onError: (error) => {
    // error will be
    // {
    //   message: "ERROR MESSAGE"
    // }
    console.log(error.message);
  },
  onEvent: (event) => {
    // event will be
    // {
    //   status: "connected|connected|closed",
    //   channelUrl: "...",
    //   message: "MESSAGE",
    // }
  },
});
```

## Initialization options

| prop               | type                                                                                       | required           | description                                                                                      | default                              |
| ------------------ | ------------------------------------------------------------------------------------------ | ------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------ |
| query              | string \| [`TypedDocumentNode`](https://github.com/dotansimha/graphql-typed-document-node) | :white_check_mark: | The GraphQL query to subscribe                                                                   |                                      |
| token              | string                                                                                     | :white_check_mark: | DatoCMS API token to use                                                                         |                                      |
| onUpdate           | function                                                                                   | :white_check_mark: | Callback function to receive query update events                                                 |                                      |
| onChannelError     | function                                                                                   | :x:                | Callback function to receive channelError events                                                 |                                      |
| onStatusChange     | function                                                                                   | :x:                | Callback function to receive status change events                                                |                                      |
| onError            | function                                                                                   | :x:                | Callback function to receive error events                                                        |                                      |
| onEvent            | function                                                                                   | :x:                | Callback function to receive other events                                                        |                                      |
| variables          | Object                                                                                     | :x:                | GraphQL variables for the query                                                                  |                                      |
| includeDrafts      | boolean                                                                                    | :x:                | If true, draft records will be returned                                                          |                                      |
| excludeInvalid     | boolean                                                                                    | :x:                | If true, invalid records will be filtered out                                                    |                                      |
| environment        | string                                                                                     | :x:                | The name of the DatoCMS environment where to perform the query (defaults to primary environment) |                                      |
| contentLink        | `'vercel-1'` or `undefined`                                                                | :x:                | If true, embed metadata that enable Content Link                                                 |                                      |
| baseEditingUrl     | string                                                                                     | :x:                | The base URL of the DatoCMS project                                                              |                                      |
| cacheTags          | boolean                                                                                    | :x:                | If true, receive the Cache Tags associated with the query                                        |                                      |
| reconnectionPeriod | number                                                                                     | :x:                | In case of network errors, the period (in ms) to wait to reconnect                               | 1000                                 |
| fetcher            | a [fetch-like function](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)        | :x:                | The fetch function to use to perform the registration query                                      | window.fetch                         |
| eventSourceClass   | an [EventSource-like](https://developer.mozilla.org/en-US/docs/Web/API/EventSource) class  | :x:                | The EventSource class to use to open up the SSE connection                                       | window.EventSource                   |
| baseUrl            | string                                                                                     | :x:                | The base URL to use to perform the query                                                         | `https://graphql-listen.datocms.com` |

## Events

### `onUpdate(update: UpdateData<QueryResult>)`

This function will be called everytime the channel sends an updated query result. The `updateData` argument has the following properties:

| prop     | type   | description                  |
| -------- | ------ | ---------------------------- |
| response | Object | The GraphQL updated response |

### `onStatusChange(status: ConnectionStatus)`

The `status` argument represents the state of the server-sent events connection. It can be one of the following:

- `connecting`: the subscription channel is trying to connect
- `connected`: the channel is open, we're receiving live updates
- `closed`: the channel has been permanently closed due to a fatal error (ie. an invalid query)

### `onChannelError(errorData: ChannelErrorData)`

The `errorData` argument has the following properties:

| prop     | type   | description                                             |
| -------- | ------ | ------------------------------------------------------- |
| code     | string | The code of the error (ie. `INVALID_QUERY`)             |
| message  | string | An human friendly message explaining the error          |
| response | Object | The raw response returned by the endpoint, if available |

### `onError(error: ErrorData)`

This function is called when connection errors occur.

The `error` argument has the following properties:

| prop    | type   | description                                    |
| ------- | ------ | ---------------------------------------------- |
| message | string | An human friendly message explaining the error |

### `onEvent(event: EventData)`

This function is called then other events occur.

The `event` argument has the following properties:

| prop       | type   | description                                    |
| ---------- | ------ | ---------------------------------------------- |
| status     | string | The current connection status (see above)      |
| channelUrl | string | The current channel URL                        |
| message    | string | An human friendly message explaining the event |

## Return value

The function returns a `Promise<() => void>`. You can call the function to gracefully close the SSE channel.
