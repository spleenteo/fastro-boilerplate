# What is DatoCMS?

DatoCMS is a cloud-based headless CMS designed to work with websites, mobile apps, and server-side applications of any kind. Freelancers, agencies, and startups use DatoCMS to empower non-technical clients and team members to manage the content of their digital products within a web-based CMS.

#### What does "headless CMS" mean?

A headless CMS clearly separates the actual content from the display layer and the front-end user experience.

The headless CMS concept stems from the demands of the digital era and a business’s need to engage customers with personalized content via multiple channels at all stages of the customer journey.

As the content in a headless CMS is considered *pure* (because it has no presentation layer attached), just one instance of it can be used for display on any device: websites (both desktop and mobile), apps, smartwatches, digital signage, Internet of Things devices, etc.

To learn more, you can read our [Introduction to Headless CMS](https://www.datocms.com/academy/headless-cms/introduction-to-headless-cms.md) over at the DatoCMS academy.

#### API-first

DatoCMS provides a content infrastructure that comprises different APIs for working with your content. Each of these APIs serves a different purpose, so which one to use depends on what you want to do:

-   To obtain content for presentation to users on a website or app, it is recommended that you utilize either the [Content Delivery API](/docs/content-delivery-api.md) or the [Real-time Updates API](/docs/real-time-updates-api.md). The latter is preferable if you require dynamic content that can be updated in real-time, delivering events as they happen.
    
-   If you want to programmatically create or update content items, or make any other change to your project/schema, use the [Content Management API](/docs/content-management-api.md).
    

#### One account, multiple projects

Once you sign up to DatoCMS and create your account, you'll be able to create an arbitrary number of different projects. For each project you'll be given an administrative area at a specific domain (i.e., https://\[my-project\].admin.datocms.com) from which you'll be able to invite collaborators to manage its specific content. All the projects you create will be completely isolated from each other.

### New to DatoCMS?

If you want to get started with DatoCMS and learn the basics, check out these video tutorials for beginners!

[

(Image content)

A gentle overview of all the features of DatoCMS

Play video »

](https://www.youtube.com/watch?v=ALHwdztg0UQ)

[

(Image content)

Creating a localized blog using Next.js

Play video »

](https://youtu.be/3tBeOwdVuwo)

[

(Image content)

Next.js + DatoCMS tutorial for beginners

Play video »

](https://www.youtube.com/watch?v=_VIF1if-dNA)

---

# Organizations and accounts

When you create a new account with DatoCMS, you are creating a **personal account**. A personal account is your own individual account, registered with the DatoCMS platform. It can hold personal projects and billing information.

## Organizations

Projects on DatoCMS can also be tied to an organization. **Organizations are useful for sharing the ownership of projects with other accounts.**

Similar to personal accounts, organizations can also purchase paid plans and hold separate billing information.

There's no limit to the number of organizations you can create or be invited to.

## Creating an organization

You can create an organization by clicking on the scope selector in the top left of the nav bar. When you create a new organization, you will be prompted to give that team a name. This is the name your organization will have on your dashboard, and what other members will use to access your organization.

(Video content)

##### Converting a Personal Account into a new organization

At any time, you can move all projects, your plan, credit card and billing information linked to your personal account to a new organization. This can be especially useful for all those personal accounts created before organizations were available in DatoCMS.

To convert your personal account into an organization, go to the **Edit Account** tab, and select the option "Move projects and billing information to a new organization".

(Video content)

Your personal account will be switched to a free Developer plan, and the new organization will hold all of your existing projects and billing information.

You will also become the first owner of the newly created organization.

> [!PROTIP] Pro tip: Customize your CMS domain
> To help your editors find the CMS URL or to provide a more white-labeled solution, you can **customize the URL of your project’s CMS**.
> 
> To do so, first ensure that the CNAME record of your chosen domain points to admin.datocms.com. Then, go to your dashboard, click on your project, and select “Add custom domain” in the Custom domain section.

## Organization members

Organizations are made up of members, and each member of an organization can be assigned a role. These roles define what you can and cannot do within an organization on DatoCMS.

DatoCMS currently offers two roles for your organization members. Let's review them:

**Owners** have full access privileges to the entire organization. An owner can manage billing, change subscription plan, invite other members to the organization, manage all projects' settings, and enter every project with full privileges. They are also the only members who can destroy the organization.

> [!POSITIVE] Organizations can have more than one owner!
> To maintain ownership continuity for your organization, you should have at least two people with owner permissions. Adding additional owners will not remove any existing ownership.

**Viewers** cannot perform any action, but have complete read-only access to the organization. This role can be useful for people on your team who deal with finance/invoices/administration, so that they can download invoices and track costs, without making accidental changes to existing projects, or the organization itself.

The table below summarizes the available authorizations for each role:

| Permission | Owner | Viewer |
| --- | --- | --- |

| Read-only access to everything | ✅ | ✅ |
| Enter all projects with full proviledges | ✅ |  |
| Create/edit/delete projects | ✅ |  |
| Transfer projects | ✅ |  |
| Manage members/roles | ✅ |  |
| Manage plan and billing | ✅ |  |
| Rename/delete organization | ✅ |  |

### Organizational email notifications

Organization **owners** will also receive email notifications for important events, like account payment issues and subscription deactivations/reactivations. Org **viewers** and project **collaborators** will *not* receive these emails.

Please see details at: [Payment failures and billing notifications](/docs/plans-pricing-and-billing/payment-failures-and-billing-notifications.md)

> [!POSITIVE] Partner specific roles
> Organizations that have been accepted through our [partner program](https://www.datocms.com/partner-program.md) have access to additional roles to manage their projects across clients, as you can check out [here](/docs/agency-partner-program/partners-dashboard.md#developer-and-projects-manager-roles)

### Inviting new members

To invite new members to your organization, select the organization from the scope selector, then open the **Members** tab. Enter the email address of the person you would like to invite, select their role, and click the "Invite" button.

(Video content)

As the organization Owner, you can add new members, remove existing members, and change their roles. Members who have accepted an invitation to the team will be displayed as members with their assigned roles.

### Entering a project: Project owners vs. Collaborators

Let's recap the ways in which one can enter a DatoCMS project.

##### If the project is inside a personal account

-   The owner account always enters the project with full privileges.
    
-   Accounts invited as [collaborators](/docs/general-concepts/roles-and-permission-system.md) within the project enter with the permissions of the specific role they have been given.
    

##### If the project is inside an organization

-   Members of the organization with the Owner role enter the project with full privileges.
    
-   Accounts invited as [collaborators](/docs/general-concepts/roles-and-permission-system.md) within the project, enter with the permissions of the specific role they have been assigned.
    

> [!WARNING] Collaborators take precedence over organization memberships
> Within an organization, there is a further possibility worth emphasizing: if a member of the organization has also been invited as a collaborator, **the role as collaborator takes precedence**: they do not enter with full privileges, but with the permissions of the specific role they have been assigned as collaborator.

Take, for instance, a case in which someone is responsible for billing matters but will not interact with content. In this case, it would be reasonable for them to be an organization owner (so as to modify billing information) but to also be invited to the project as collaborator using a role with few privileges — probably read-only.

Also consider a user who is totally in charge of a marketing website, but should not have power within the organization itself. This user should be invited as collaborator with full privileges to the project, but should be a simple Viewer at the organization level, if they are even to belong to the organization at all.

### Leaving an organization

To leave an organization, select the organization from the scope selector, then open the Members tab. Find your account in the list of members, and then press the "Leave the organization" button.

(Video content)

> [!WARNING] At least one member must be owner!
> You can't leave an organization if you are the last remaining owner. To leave an organization, first assign the owner role to at least one organization member.
> 
> If you are the only remaining member, you should delete the team instead.

### Losing Access to Your Two-Factor Authentication

If you find yourself unable to access your account due to issues with two-factor authentication (2FA), there are immediate steps you can take to regain access.

You have two options:

1.  Locate your One-Time Password (OTP) backup codes that were provided at the time you set up 2FA. These codes can be used in place of the 2FA code to log into your account.
    
2.  If you have lost your OTP backup codes as well, or have used them all, please [contact our support team](https://www.datocms.com/support.md?topics=account-access/account-login-and-recovery) for assistance.
    

#### Asking your organization owners for a 2FA reset

Alternatively, if you do not have any personal projects and your account belongs to only one organization (meaning you are either a member of the organization or a collaborator on one of its projects), you may request a 2FA reset through your organization.

To start this process, at the Authentication Code prompt, click on "Lost access to two-factor authentication." Then, select "Request 2FA reset."

(Video content)

The owners of your organization will be notified by email and within the Dashboard, where they can either accept or refuse your request.

(Video content)

After one of the organization's owners approves your request, you will be notified via email that 2FA has been disabled on your account . This will allow you to log back into the Dashboard and set up 2FA from scratch for projects that require it.

(Video content)

---

# Project collaborators, roles and permissions

In addition to the [account(s) owner of the project](/docs/general-concepts/organizations-and-accounts.md#entering-a-project-project-owners-vs-collaborators), who always enters the project with full privileges, it is also possible to invite further users to a project, giving them more refined permissions.

These additional users in DatoCMS are called **Collaborators**, and for them DatoCMS offers a thorough roles and permissions system to precisely specify what actions they can perform (ie., “read-only permission on every content, except for articles which can be freely created/updated but cannot be deleted or published online”).

[(Image content)](https://www.datocms-assets.com/205/1712593612-screenshot-2024-04-08-at-18-26-28.png?auto=format&fit=max&w=2000)

The permissions given to a collaborator is managed separately and independently in each DatoCMS project: ie. Jack can have full privileges in project A, but can be just a proofreader in project B.

### Default roles

Every DatoCMS project is automatically populated with the following roles, but you are free to create as many roles as you want, and assign them both to collaborators and API tokens:

-   **Admin:** Can do everything, including work with records, create and update models, configure project settings and work with API keys.
    
-   **Editor:** Can work with records, does not have access to models, API keys or project settings.
    

For each role, you can specify what the user is allowed and not allowed to do.

### Project-wide permissions

Roles can grant/deny the ability to access and configure the project's administrative settings, including:

-   Models, fields and navigation bar;
    
-   Project's languages, deployment, time zones and SSO settings;
    
-   Roles and invite/remove collaborators;
    
-   Webhooks;
    
-   API tokens;
    
-   Shared filters.
    

[(Image content)](https://www.datocms-assets.com/205/1712593686-screenshot-2024-04-08-at-18-27-47.png?auto=format&fit=max&w=2000)

### Control access to environments

Roles specify *access-level permissions* to [environments](/docs/general-concepts/primary-and-sandbox-environments.md). You can allow users to access:

-   All environments (useful for developers)
    
-   Only the primary environment (useful for content editors)
    
-   Only the sandbox environments (mostly useful for API tokens used in CI systems)
    

[(Image content)](https://www.datocms-assets.com/205/1712593743-screenshot-2024-04-08-at-18-28-38.png?auto=format&fit=max&w=2000)

This setting is very useful because it allows you to pre-configure the content-level permissions (which records a user can create/update/delete/etc.) on sandbox environments without letting editors actually enter the environment and make changes until it gets [promoted to primary](/docs/general-concepts/primary-and-sandbox-environments.md#promotion-of-sandbox-environments).

In other words, the permission to access the environments takes precedence over the content-level permissions set inside a specific environment!

### Content-level permissions

For each environment, you can specify different permissions on actions that can be performed on records. Rules can be additive or subtractive, and are defined by:

-   **The action:**
    
    -   View
        
    -   Create/duplicate
        
    -   Edit
        
    -   Publish/unpublish
        
    -   Delete
        
    -   Take over
        
    -   Move to stage (for [workflows](/docs/general-concepts/workflows.md))
        
-   **The model:** i.e., it's possible to give full access (everything allowed) to the model `meal`, but give zero access (can't even read) to the model `drink`.
    
-   **The creator:** i.e., it's possible to edit only the content which the user has created themselves (or users with its same role), and deny opening content created by other users.
    

The most important aspect is that **everything which is not explicitly allowed is denied**. Here's an example: if you've granted a user the permission to edit some records, you also need to give them permissions to *view* them, or they won't be able to open the record and make the changes.

Even though it might feel counter-intuitive, this way of handling access rights helps to prevent unsolicited access: when you set up everything explicitly, there is no chance of accidentally giving someone access to something they shouldn't have.

#### Translator role, and locales permissions

On an Enterprise plan, your project and models can have locale-specific permissions. For each translator role, you can define the specific locale(s) they have access to, limiting their ability to view/add/edit/remove records to just those languages. This can be applied either globally across your whole project, or more granularly defined on a per-model basis.

Need locale-specific permissions? [Talk to our Sales team about an Enterprise plan](https://www.datocms.com/contact.md).

[(Image content)](https://www.datocms-assets.com/205/1713802032-screenshot-2024-04-22-at-18-06-51.png?auto=format&fit=max&w=2000)

Every role can customize which locales can be edited

#### Workflows permissions

If some of your models are under a [Workflow](/docs/general-concepts/workflows.md), you can also define which actions are allowed depending on the specific stage a record is in. You can learn more in the [appropriate section](/docs/general-concepts/workflows.md#how-to-configure-workflows) of the documentation.

#### Forking the environments

When [forking an environment](/docs/general-concepts/primary-and-sandbox-environments.md#creating-a-new-sandbox-environment), for each existing role, DatoCMS duplicates the content-level permissions you had on the original environment to the copy.

### Asset permissions

Together with the actions that you can perform on the records, similarly you can apply the following permissions on assets:

-   **The action:**
    
    -   View
        
    -   Create/duplicate
        
    -   Edit metadata/replace asset
        
    -   Delete
        
    -   Edit creator
        
-   **The creator:** i.e., it's possible to edit only the assets which the user has created themselves (or users with its same role), and deny using assets created by other users.
    

## Putting everything together with an example

To better exemplify, let’s consider a project that:

-   has only one environment (the primary one), and
    
-   has a *Blog Editor* role that:
    
    -   **Access-level permission:** only gives access to the primary environment, and...
        
    -   **Content-level permission**: …only allows to manage records of type `article`.
        

If I fork the primary environment to a new one called `foobar`, the content-level permissions get duplicated (that is, blog editors can only manage records of type `article` also inside the `foobar` environment). **But** **they will only be able to do so when the** **`foobar`** **environment gets promoted to primary**, since the access-level permission doesn't give them access to sandbox environments.

This allows to safely test and experiment changes to permissions on the roles without affecting the work of your collaborators on the primary environment, and without giving them privileges to edit sandbox environments.

## Roles inheritance

As your project grows and evolves, permissions on each role can become quite complex. To allow greater modularity, simplicity and clarity, you can organize your roles in hierarchies. In this way, users with greater rights automatically inherit all the permissions of roles lower in the hierarchy, without having to duplicate permissions assignments for multiple different roles.

[(Image content)](https://www.datocms-assets.com/205/1633425870-roles-inheritance-cover.png?auto=format&fit=max&w=2000)

An example of what you can accomplish with inherited roles

You can configure the hierarchy using the “Inherits permissions from” field in the Edit role form:

(Image content)

Every role can specify the list of roles to inherit permissions from

#### Learn more about roles and permissions

Get a hands-on learning experience with our tutorial videos:

[

(Image content)

Intro to Settings & Configurations

Play video »

](https://www.datocms.com/user-guides/the-basics/intro-to-settings-configurations.md)

[

(Image content)

Using Roles for Content Governance

Play video »

](https://youtu.be/_5bwi9SsGss)

---

# The content schema

DatoCMS can be seen as an editor-friendly interface on top of a database, so the first step is to build the actual schema upon which users will generate the website content.

#### Models

The way you define the kind of content you can edit inside each different administrative area involves the concept of models, which are like database tables.

Each administrative area can specify a number of different models, and they represent blueprints upon which users will store the website content.

For example, a website project can define different models for articles, products, categories, and so on.

#### Fields

Each model consists of a set of fields that you define (strings, numbers, uploads, videos, relationships between objects). Each field has a name and additional metadata, such as validations or particular configurations to better present the field to the editor.

Fields in DatoCMS can also be localized if you need to accept different values based on language.

#### Records

DatoCMS stores the individual pieces of content you create from a model as records, which are like table rows in a database.

[

(Image content)

Intro to the Schema Builder

Play video »

](https://www.datocms.com/user-guides/the-basics/intro-to-the-schema-builder.md)

[

(Image content)

Intro to Models in DatoCMS

Play video »

](https://www.datocms.com/user-guides/content-modeling/intro-to-models-in-datocms.md)

[

(Image content)

Intro to Fields in DatoCMS

Play video »

](https://www.datocms.com/user-guides/content-modeling/intro-to-fields-in-datocms.md)

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
    <p>Details: cache-dub4379-DUB 1762214503 1361756828</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

# Record versioning

DatoCMS produces a snapshot of a record each time it gets saved.

Record versioning allows DatoCMS users to view previously published versions of the record, find out who published a record, compare previous snapshots to the current version, and — when necessary — restore the content to the earlier state.

(Video content)

DatoCMS stores all the content found in the record — including localized content and references to other records and uploads. However, it does not create or store snapshots of linked entities. Therefore, if you restore a record to the earlier version containing a reference to a deleted upload, the image field will be empty.

It is also important to remember that the version comparison only displays current locales and values. If your record was translated into Italian in the past, but later the Italian locale was removed from the model, the Italian text will no longer be visible or restorable.

The same logic goes for deleted fields: any content that was stored within these fields in the past will no longer be displayed.

To know more about how versioning on DatoCMS works, check out this video tutorial:

[

(Image content)

Content Records, Publishing, Scheduling, and Versioning

Play video »

](https://www.datocms.com/user-guides/content-management/content-records-publishing-scheduling-and-versioning.md)

[

(Image content)

Working with entry & asset versions

Play video »

](https://youtu.be/qJhobECFQYk)

---

# Draft/published system

You can decide to activate the draft/published system on a per-model basis:

(Video content)

If you do so:

-   When you create a new record, it will be put into a *Draft* status. This means that the record is still not published: you can continue making changes and saving the record without having to worry about showing unfinished content to your end users.
    
-   Once you're satisfied with the changes, you can click on the *Publish* button: the latest revision of your record will be marked as the *Published version*, and it will be instantly available in the DatoCMS APIs:
    
    -   With the [Content Delivery API](/docs/content-delivery-api.md) and the [Realtime Updates API](/docs/real-time-updates-api.md), the default is to return only the published record, but you can request to consider the draft with the header [`X-Include-Drafts: true`](/docs/content-delivery-api/api-endpoints.md#preview-mode-to-retrieve-draft-contenthttps://www.datocms.com/docs/content-delivery-api/api-endpoints#preview-mode-to-retrieve-draft-content).
        
    -   With the [Content Management API](/docs/content-management-api.md), you can request to consider the published or draft versions of records with the parameter [`?version=current`](/docs/content-management-api/resources/item/instances.md) or [`?version=published`](/docs/content-management-api/resources/item/instances.md).
        
-   If you make a change to a published record, its status will be become **Updated**. Again, those changes won't be visible to end users and published until you explicitly click on the *Publish* button again.
    

> [!POSITIVE]
> For more information on how the system manages the draft/published status, you can refer to this in-depth guide: [Data consistency: key concepts and implications](/docs/content-modelling/data-migration.md).

### Saving Invalid Drafts

In some instances you may need to create posts via the UI or the API that may not have all validations in place (for instance, bulk creating records missing a specific required field like a title).

In these cases, if you have the Draft/Published flow enabled, you can also choose to allow saving records on a draft stage without passing all validations.

The feature affects the CMS and, of course, the CMA (Content Management API). When draft saving is active, it's possible to POST/PUT invalid records to CMA and have them saved: the endpoints respond with a 200, and the record just saved as a payload.

(Video content)

However, validations will take effect when the record is published. If the record is not valid, publication fails, and editors need to fix the content to ensure all rules are handled before proceeding to move the record into the Published stage.

### Finer grain control on linked records

In case of linked records you can decide which behaviour to have when a record gets published. For example, you can determine if all the linked records should be published as well or if you want to emit a validation error. The same goes for unpublishing and deleting.

In the field validation you can pick the option that you prefer:

(Video content)

To know more about how DatoCMS saves versions, check out this video tutorial:

[

(Image content)

Working with entry & asset versions

Play video »

](https://youtu.be/qJhobECFQYk)

---

# Scheduled publishing

Combined with the draft/published system, you can schedule **future publications or unpublications**.

You can access this feature using the calendar icon in the dropdown menu for the "Publish" button:

(Image content)

This will automatically change the state of your record on the specified date.

If you are using build triggers, you can **set them to automatically trigger a build** when the scheduled publication/unpublication is done.

You can find this setting in the build trigger settings:

(Image content)

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
    <p>Details: cache-dub4325-DUB 1762214490 87839071</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

# Localization

Each administrative area in DatoCMS supports multiple locales, which are defined by the short ISO locale codes (i.e. `en` or `de`). You can add or remove locales within the *Admin area > Site settings* section:

(Video content)

## Field-specific localization

Each field is localized individually, so you can pick and choose which specific content needs to be translated and which does not:

(Video content)

As soon as a localized field is present within a model, the form to edit its records will present one tab for each locale:

[(Image content)](https://www.datocms-assets.com/205/1713799975-screenshot-2024-04-22-at-17-26-20.png?auto=format&fit=max&w=2000)

## Adding new locales along the way

With DatoCMS you are free to add new locales at any time; just be aware that, once a new locale is added, if some validations are present on your fields, those validations will be enforced for every locale. Records already created will therefore be marked as “invalid”, and you won't be able to update your records until all the validations are satisfied for all the locales. For more information, take a look at the [Data migration](/docs/content-modelling/data-migration.md) chapter.

> [!PROTIP] Pro tip: Build a multi-language website with Next.js
> Our blog has a full walkthrough on [how to set up a multi-language site](https://www.datocms.com/blog/how-to-build-a-multi-language-website-with-next-js-i18n.md) from scratch using Next.js, which provides robust built-in support for internationalization.

## Optional/required locales

You can configure a certain model so that your editors are not forced to insert content for every language your project supports, but just for some of them, on a per-record basis.

This allows use cases such as multi-language blogs, where some articles can be written only in English, other only in Italian and others in both languages.

To require all locales to be always present on every record of a specific model, you can check the *All locales required?* option in your model settings:

(Video content)

## Locale-based publishing

By enabling the optional locales settings, teams have the flexibility to publish content for specific locales within their project, regardless of the status of other locales.

For instance, imagine a project with locales for Germany, Switzerland, Great Britain, and Belgium. With this feature, teams can focus on creating and finalizing content for Germany without the need to manage content for other locales. If the team has the capacity to work on additional locales, they can save the content as drafts without publishing it. This enables multiple team members to independently create content for different locales, aligning with their respective timelines and priorities.

When a team member is prepared to publish content for a specific locale they have permission for, they can simply select the "Only publish specific content" option.

A convenient popup window will then appear, allowing them to choose which locale(s) to publish, with the ability to select multiple locales if desired:

(Video content)

You can also selectively unpublish one (or multiple) locales:

(Video content)

Locale-based publishing also works on scheduled publications/unpublishing:

(Video content)

## Translator roles, and locales permissions

Our roles/permissions system allows specifying which locales each collaborator can add/edit/remove on any record. For each role you can define both global rules, which will be applied to all models in your project, and specific per-model rules, giving maximum flexibility:

[(Image content)](https://www.datocms-assets.com/205/1713802032-screenshot-2024-04-22-at-18-06-51.png?auto=format&fit=max&w=2000)

Every role can customize which locales can be edited

## Localized CMS interface

By default, the CMS interface will pick the default browser's language and, if available, will show the interface localized.

If you prefer to manually pick one, you can do it like this:

(Video content)

If you don't find the translation that you need, and you are looking into contributing, read [this blog post](https://www.datocms.com/blog/backend-community-translation.md) to learn more and get involved.

#### Learn more about localization with DatoCMS

DatoCMS allows a great deal of customization when dealing with localization. Check out these tutorial videos for a hands-on approach:

[

(Image content)

Localizing Content in DatoCMS

Play video »

](https://youtu.be/166gt1Qg-d4)

[

(Image content)

Creating a localized blog using Next.js

Play video »

](https://youtu.be/3tBeOwdVuwo)

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
    <p>Details: cache-dub4350-DUB 1762214501 1194920253</p>
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
    <p>Details: cache-dub4376-DUB 1762214506 978012492</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

# Webhooks

If you need to know when data has changed in one of your projects, you can create customized webhooks to get HTTP notifications as soon as the events occur.

For example, you might use webhooks as the basis to:

-   Integrate/sync DatoCMS data with third-party systems (Snipcart, Shopify, Algolia, etc.);
    
-   Get Slack/email notifications;
    
-   Automatically post an update on Facebook/Twitter;
    
-   Produce an automatic deploy on your staging environment;
    

You can connect DatoCMS webhooks to any endpoint you like — for example, some custom AWS lambda function.

> [!PROTIP] Pro tip: DatoCMS + Zapier: no-code management of webhooks!
> If you prefer not to write code, you can use [Zapier Webhooks](https://zapier.com/page/webhooks/) to connect a DatoCMS event with hundreds of different external services, creating any kind of complex automation workflow.

## Setting up a webhook

You can set up a new webhook under the *Project Settings > Webhooks* section of your administrative area. You can enter any URL as the destination for calls, add HTTP basic authentication and custom HTTP headers:

[(Image content)](https://www.datocms-assets.com/205/1725965489-screenshot-2024-09-10-alle-12-50-20.png?auto=format&fit=max&w=2000)

DatoCMS needs to get a status code `2XX` reply from the configured URL to confirm that the notification sent via HTTP POST has been successfully delivered. If any webhook returns a different status code or times out, DatoCMS will set the status as "Failed".

### Webhook triggers

Webhook triggers let you specify under which circumstances an HTTP call will be performed towards your endpoint:

[(Image content)](https://www.datocms-assets.com/205/1714998211-screenshot-2024-05-06-at-14-23-23.png?auto=format&fit=max&w=2000)

You can add as many triggers as you want to a single webhook. DatoCMS supports events for the following objects:

| Entity | Available events | Additional notes |
| --- | --- | --- |

| Record | `create`, `update`, `delete`, `publish`, `unpublish` | You can trigger the webhook only for specific records or records belonging to specific models.  
  
See the "Record Lifecycle Events" section for details. |
| Model | `create`, `update`, `delete`, | You can trigger the webhook only for specific models. Changes made to a model's field will trigger a call as well. |
| Upload | `create`, `update`, `delete` |  |
| Build trigger | `deploy_started`, `deploy_succeeded`, `deploy_failed` |  |
| Environment | `deploy_started`, `deploy_succeeded`, `deploy_failed` |  |
| Maintenance Mode | `change` | Triggers whenever an admin activates or deactivates the maintenance mode. |
| SSO User | `create` | Triggers when an SSO User is added to a project as a collaborator. |
| CDA Cache Tags | `invalidate` | Triggers when CDA Cache Tags need to be invalidated. |

Visit the [Data consistency: key concepts and implications](/docs/content-modelling/data-migration.md) section for more details on when the webhooks related to the records will be triggered.

## The HTTP Payload

DatoCMS will perform an HTTP POST request towards the specified endpoint. The HTTP body will be in JSON format, and will contain all the information relevant to the event just happened.

The body will contain the following information:

| Payload property | Description |
| --- | --- |

| `site_id` | ID of the project where the event occurred. |
| `webhook_id` | ID of the webhook that triggered the delivery. |
| `environment` | ID of the environment where the entity resides. |
| `is_environment_primary` | Whether the environment where the event occurred is the primary environment. |
| `webhook_call_id` | ID of the specific webhook event that triggered. |
| `event_triggered_at` | Date when the event originally occurred. |
| `attempted_auto_retries_count` | If auto-retry is on for the webhook, this field displays the number of the current attempt. |
| `entity_type` | The type of entity that triggered the webhook (ie. item, item\_type...) |
| `event_type` | The type of event that triggered the webhook (i.e.: create, update, delete...) |
| `entity` | The full payload of the entity serialized according to our Content Management API schema. |
| `previous_entity` | Only present if the event type is "Record > Update". It represents the serialized record BEFORE the update (useful to know what changed). |
| `related_entities` | An array containing all serialized entities specified in the entity's relationships. |

As an example, in the case of a *Record > Update* event, you can access the record state both before the update operation (`previous_entity`) and after (`entity`), making it easier to make a diff and see exactly what fields in the record changed:

```json
{
  "site_id": "example-site-id",
  "webhook_id": "123",
  "environment": "foo-bar",
  "is_environment_primary": true,
  "webhook_call_id": "456",
  "event_triggered_at": "2024-08-26T14:30:00Z",
  "attempted_auto_retries_count": 3,
  "entity_type": "item",
  "event_type": "update",
  "entity": {
    "id": "39830648",
    "type": "item",
    "attributes": {
      "name": "Mark Smith"
    },
    "relationships": {
      "item_type": {
        "data": {
          "id": "810928",
          "type": "item_type"
        }
      },
      "creator": {
        "data": {
          "id": "42011",
          "type": "account"
        }
      }
    },
    "meta": {
      "created_at": "2018-10-28T18:44:32.776+01:00",
      "updated_at": "2021-08-17T09:11:56.145+02:00",
      "published_at": "2021-08-17T09:11:56.143+02:00",
      "first_published_at": "2018-10-28T18:44:32.789+01:00",
      "status": "published",
      "current_version": "117626080"
    }
  },
  "previous_entity": {
    "id": "39830648",
    "type": "item",
    "attributes": {
      "name": "John Smith"
    },
    "relationships": {
      "item_type": {
        "data": {
          "id": "810928",
          "type": "item_type"
        }
      },
      "creator": {
        "data": {
          "id": "42011",
          "type": "account"
        }
      }
    },
    "meta": {
      "created_at": "2018-10-28T18:44:32.776+01:00",
      "updated_at": "2021-08-17T09:11:53.371+02:00",
      "published_at": "2021-08-17T09:11:53.367+02:00",
      "first_published_at": "2018-10-28T18:44:32.789+01:00",
      "status": "published",
      "current_version": "117626079"
    }
  },
  "related_entities": [
    {
      "id":"810928",
      "type": "item_type",
      "attributes": {
        "name": "Author",
        "api_key": "author",
        ...
      },
      "relationships": { ... }
    }
  ]
}
```

### Customize the URL or HTTP payload

If you want, you can also customize the HTTP body of the outgoing requests. To do that, hit the *Send a custom payload?* switch and provide the new payload.

You can use the [Mustache language](https://mustache.github.io/) to make the payload dynamic. The original payload we would send is used as source for the template. You can experiment with the Mustache language in their [sandbox](https://mustache.github.io/#demo), or read their [docs](https://mustache.github.io/mustache.5.html).

As an example, this custom payload template:

```json
{
  "message": "{{event_type}} event triggered on {{entity_type}}!",
  "entity_id": "{{#entity}}{{id}}{{/entity}}"
}
```

Will be converted into the following HTTP body:

```json
{
  "message": "update event triggered on item!",
  "entity_id": "123213"
}
```

You are not limited to send JSON payloads: just make sure that if the payload is not in JSON format, you configure the proper `Content-Type` header.

Similarly, you can also insert Mustache tags in the webhook URL.

## Automatic Retries

Optionally, you can activate the **Automatic Retry** option in your webhook settings, so that in case of delivery failure, DatoCMS will attempt to resend the request up to 7 times, with increasing intervals between each attempt.

(Video content)

Each retry will use the most recent webhook settings, and the retry schedule is as follows:

| Retry | Time |
| --- | --- |

| 1 | 2 minutes after the failure |
| 2 | 6 minutes after the previous retry |
| 3 | 30 minutes after the previous retry |
| 4 | 1 hour after the previous retry |
| 5 | 5 hours after the previous retry |
| 6 | 1 day after the previous retry |
| 7 | 2 days after the previous retry |

## Understanding webhook statuses

Webhook calls can have different statuses to indicate the outcome of the delivery attempt:

| Status | Description |
| --- | --- |

| Pending | The webhook call is currently being executed. |
| Success | The webhook call was successfully delivered to the specified endpoint, and the server responded with an HTTP status code in the 2xx range. |
| Failed | The webhook call could not be successfully delivered. This may be due to issues such as server errors, invalid endpoints, network problems or an HTTP status code not in the 2xx range. |
| Rescheduled | The webhook delivery failed, but is scheduled to be retried automatically based on the webhook automatic retries setting. |

## Debug and keep track of webhooks activity

You can browse webhook activity under the Project Settings > *Webhooks activity log* section of your project, or [using our API](/docs/content-management-api.md#webhook_call-0). In both cases, you can filter/order webhook calls to refine your search based on various criteria, such as status, type of event, date, etc:

[(Image content)](https://www.datocms-assets.com/205/1725965994-screenshot-2024-09-10-alle-12-57-59.png?auto=format&fit=max&w=2000)

## Manually Resend Webhook Event

At any time you have the option to resend a webhook manually. To do so, click on the "Details" link and then on "Resend now"

[(Image content)](https://www.datocms-assets.com/205/1725966963-screenshot-2024-09-10-alle-13-14-53.png?auto=format&fit=max&w=2000)

When you choose to manually resend a webhook call, the system will repeat the exact same call with the updated webhook settings. If auto-retries are enabled:

-   a successful manual resend will stop further auto-retry attempts,
    
-   a failed manual resend won't add to the count of automatic retries.
    

## Webhook Timeouts

DatoCMS enforces two timeout limits for webhook integrations:

-   **Connection Timeout: 2 seconds**  
    This is the maximum time allowed to establish the initial connection to the webhook's HTTP server.
    
-   **Total Execution Timeout: 8 seconds**  
    This is the maximum time allowed for the entire webhook process to complete.
    

If your service exceeds either of these timeouts, DatoCMS will terminate the connection. The delivery attempt will then be marked as either Failed — or Rescheduled, if Automatic Retries are enabled.

> [!PROTIP] Pro tip: Prefer asynchronous over synchronous
> Due to the unpredictable nature of service completion times, it's recommended to handle the bulk of your processing in background jobs. This approach helps manage DatoCMS's timeout constraints effectively. Consider using job queue libraries such as Resque (Ruby), RQ (Python), or RabbitMQ (Java).
> 
> The pattern we suggest is to perform the initial validation checks of the payload quickly and synchronously before starting the background jobs. This allows you to potentially respond with a status code other than `2XX` to the webhook, thereby notifying DatoCMS of the issue.

### Webhook events for record lifecycle changes

This section clarifies how webhooks are fired on record lifecycle changes (such as publication or deletion). The behavior will be different if the model has the [draft/publish system](/docs/general-concepts/draft-published.md) enabled. See the following tables for details.

##### With draft/publish system enabled

| When a record is... | These events will be sent | `entity.meta.status` |
| --- | --- | --- |

| Saved for the first time | `create` | `draft` |
| Modified & saved again without publishing | `update` | `draft` |
| Published | `publish` | `published` |
| Modified & saved after publishing | `update` | `updated` |
| Selectively published  
  
(e.g., one locale gets selectively published, but there is still saved-but-unpublished data in other locales) | `publish` | `updated` |
| Scheduled to publish / unpublish | `update` | `updated` |
| Unpublished | `unpublish` | `draft` |
| Deleted from `draft` status | `delete` | `draft` (even though record is gone) |
| Deleted from `published` status | `unpublish`  
`delete` | `published` (even though record is gone) |

##### With draft/pub system disabled

When draft/publish system is **disabled** on a model, the `publish` and `unpublish` events will still be sent as they're implicit with record creation, update and deletion.

This will result in multiple events sent for each user action on a record, with the benefit of having a uniform way to listen for record changes via webhooks, regardless of the model draft/pub preference:

| When a record is... | These events will be sent | `entity.meta.status` |
| --- | --- | --- |

| Saved for the first time | `create`  
`publish` | `published` |
| Updated | `update`  
`publish` | `published` |
| Deleted | `unpublish`  
`delete` | `published` (even though the record is gone) |

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
    <p>Details: cache-dub4362-DUB 1762214508 1826852266</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

# DatoCMS Site Search

DatoCMS Site Search is a way to **deliver tailored search results to your website visitors**. You can think of it as a replacement for the now discontinued Google Site Search.

(Image content)

There are many third-party services out there that fill this need (like [SwiftType](https://swiftype.com/), [Algolia](https://www.algolia.com/), and [Cludo](https://www.cludo.com/)). Our solution seeks to be a great option for plenty of websites:

-   Extremely easy to integrate with your static website
    
-   Completely customizable in terms of look & feel
    
-   Minimal configuration needed
    
-   Handles multilingual websites nicely
    
-   included in the price of DatoCMS with no additional charges
    

#### How it works

-   Every time your website finishes being deployed, **we'll crawl it to fetch updated content.**
    
-   From your frontend, you can [**make AJAX requests to our Content Management API**](/docs/site-search/base-integration.md#performing-searches) **to present relevant results to your visitors**. We also provide [**React**](/docs/site-search/widget.md) **and** [**Vue**](/docs/site-search/vue-search-widget.md) **search widgets** that simplify the process.
    

> [!PROTIP] Pro tip: Integrating Algolia and DatoCMS
> If you prefer to integrate a search provider like Algolia, [this guide](https://www.datocms.com/blog/algolia-nextjs-how-to-add-algolia-instantsearch.md) demonstrates setting up a Next.js project, configuring Algolia, and creating custom search components. While the guide focuses on Algolia Intellisearch, the process for setting up other third-party services like Meilisearch, Typesense, or ElasticSearch should be relatively similar.

#### Enabling Site Search for a project

To get started, please see [Configuring DatoCMS Site Search](/docs/site-search/configuration.md).

---

# Project Templates

DatoCMS allows you to turn an existing project into a ready-to-clone public template project allowing anyone to bootstrap a new project based off of yours.

In this guide you will learn how to make a project public and how to create and configure a clone and deploy link or button to share your project.

## Turn a project into a public template

Since projects might contain sensitive information they are all private by default. To make a project public, head to the project main page in the DatoCMS dashboard and switch on the **Public template** project option in the *Danger Zone* section.

**Important**: From now on anyone will be able to clone the project, so make sure it doesn't contain any sensitive information!

(Image content)

Once you've set your project to be a public template, you can then generate:

-   A "Clone project" button to perform a complete clone of an existing DatoCMS project, or
    
-   A "Project starter" button, to clone a project AND deploy a frontend capable of reading the content coming from the project itself.
    

## Generate a "Clone project" button

The "Clone project" button helps users perform a complete clone of an existing DatoCMS project. Once clicked, they will see the following dialog, and at the end of the process a copy of the original project will be available on their dashboard:

(Image content)

The "Clone project" dialog

Use the form below to generate a ready-to-use clone button (the project ID can be retrieved [inside the details page of the project](/docs/general-concepts/project-starters-and-templates.md#project-id)):

Project ID \* 

Project Name \* 

Use the following code to share the button on your README file or documentation:

###### URL

###### Markdown

###### HTML

###### Button Preview

(Image content)

## Generate a "Project Starter" button

Most of the time, a DatoCMS project is associated with a frontend project (website, application, etc.) that knows how to query for its content, and renders the result in a pleasant way to users. The "Project starter" button helps users deploy new sites from templates with one single click, performing the following actions for them:

1.  Clone a DatoCMS template project and put the copy inside the user account;
    
2.  Fork a Git repository containing the frontend project inside the Github account of the user;
    
3.  Build and publish the frontend online using a free hosting solution (Netlify, Vercel, Heroku, etc.)
    

Check out our [Marketplace](https://www.datocms.com/marketplace/starters.md) to see a fine selection of Project Starters.

(Image content)

The dialog that your users will see once they click on a Project Starter button

Project Starters are composed of a [DatoCMS template project](/docs/general-concepts/project-starters-and-templates.md#turn-a-project-into-a-public-template), plus a Git repository containing a `datocms.json` configuration file that specifies both presentational metadata (name, preview image, URL of an example of a successful deployment) and the information necessary for creating a new project.

You can use the form below to generate a `datocms.json` configuration file and a button to share the starter with the world:

Project starter name

Description

Frontend preview screenshot

URL of an example of a successful deployment

Github repository that will be copied

DatoCMS Project ID that will be duplicated

How the project can be built and deployed?Please select one...Simply make a copy of the template repositoryIt can be deployed to any static hosting (Vercel, Netlify)It can be deployed only to VercelIt can be deployed only to NetlifyIt can be deployed only to Heroku

##### Result

Copy the following code and add it to your Git repository in a file called `datocms.json`:

{
  "name": "THIS FIELD IS MANDATORY. PLEASE PROVIDE A VALUE!",
  "description": "THIS FIELD IS MANDATORY. PLEASE PROVIDE A VALUE!",
  "previewImage": "THIS FIELD IS MANDATORY. PLEASE PROVIDE A VALUE!",
  "datocmsProjectId": "THIS FIELD IS MANDATORY. PLEASE PROVIDE A VALUE!",
  "deploymentType": "copyRepo",
  "environmentVariables": {}
}

Use the following code to share the button on your README file or documentation:

MarkdownHTMLURLButton Preview

\[!\[Clone DatoCMS project\](https://dashboard.datocms.com/clone/button.svg)\](https://dashboard.datocms.com/deploy?repo=YOUR-GITHUB-REPO)

##### Project ID

The project ID can be retrieved inside the details page of the project in your Dashboard:

(Image content)

You can find your project ID in your dashboard

##### Supported deployment methods

The `deploymentType` setting allows you to configure what deployment target can be used during the cloning process. By setting this value to `copyRepo`, DatoCMS will clone the template on a repository in the user org or account.

Additionally, DatoCMS supports the following deployment types:

-   `vercel`
    
-   `netlify`
    
-   `static` (user can choose between Vercel and Netlify)
    
-   `heroku`
    

When one of these is chosen, users will be asked to authenticate on the service and therefore they need an active and valid account. Once authorized, the DatoCMS integration will deploy the template repository to the service.

##### Build command

When the deployment type is either `static`, `vercel`, `netlify` or `heroku`, you must specify the build command that will be run during the deployment of the frontend repository. DatoCMS will forward the `buildCommand` to the deployment service which will use it to build the application.

##### Environment variables

When the deployment type is either `static`, `vercel`, `netlify` or `heroku`, you can specify a number of environment variables that will be configured on the hosting platform, before building the actual frontend. The value of each environment variable can be either:

-   A custom string
    
-   The URL of the cloned DatoCMS project (ie. `https://<YOUR_PROJECT>.admin.datocms.com/`)
    
-   One of the DatoCMS API tokens present in the template project (you need to specify the name of the API token, ie. "Read-only API token")
    

##### Post-deploy install URL

When the deployment type is either `static`, `vercel`, or `netlify`, you can call a custom hook present in the frontend to add more complex configuration steps.

The hook must support CORS for the https://dashboard.datocms.com `Origin`, and will receive a POST request.

If the frontend is deployed to Netlify, the HTTP request body will be the following:

```json
{
  "datocmsApiToken": <DATOCMS_READWRITE_API_TOKEN>,
  "integrationInfo": {
    "adapter": "netlify",
    "netlifySiteId": <NETLIFY_API_TOKEN>,
    "netlifyToken": <NETLIFY_API_TOKEN>,
  },
}
```

If the frontend is deployed to Vercel, the HTTP request body will be the following:

```json
{
  "datocmsApiToken": <DATOCMS_READWRITE_API_TOKEN>,
  "integrationInfo": {
    "adapter": "vercel",
    "vercelApiToken": <VERCEL_API_TOKEN>,
    "vercelTeamId": <VERCEL_TEAM_ID>,
    "vercelProjectId": <VERCEL_PROJECT_ID>,
  },
}
```

---

# How to deploy

Once you are all set with DatoCMS and your site is successfully pulling content on your local development machine, your next step is to deploy the site and then give your editors some control and visibility over the deploy process.

The job of building and deploying your static website is not performed directly by DatoCMS, but is delegated to an external Continuous Deployment/Continuous Integration service.

To integrate DatoCMS with these tools, you can use what we call **build triggers**.

Essentially, they are a set of webhooks that you can manually trigger to launch your build process on your preferred continuous integration or continuous deployment platform.

We offer out-of-the-box integrations with all the most popular solutions out there (most of them have a free plan available):

-   [Netlify](https://www.datocms.com/marketplace/hosting/netlify.md)
    
-   [Vercel](https://www.datocms.com/marketplace/hosting/vercel.md)
    
-   [Travis CI](https://www.datocms.com/marketplace/hosting/travis-ci.md)
    
-   [Gitlab CI](https://www.datocms.com/marketplace/hosting/gitlab.md)
    
-   [CircleCI](https://www.datocms.com/marketplace/hosting/circleci.md)
    

If you need to use another CI tool, we also offer a [custom webhook](https://www.datocms.com/marketplace/hosting/custom-webhook.md) that you can use to connect DatoCMS to your custom deployment solution.

Regardless of the external service that you intend to use, your CI build script needs to perform three steps:

-   Run the `dato dump` command to fetch all the DatoCMS content and transform it into local files. Alternatively, you can fetch content using the [GraphQL CDA](/docs/content-delivery-api.md);
    
-   Run the build command of your static website generator to produce the actual static website (e.g., `jekyll build` for Jekyll);
    
-   Upload the files of your static website to S3, or any other hosting solution you want to use.
    

Once everything is set up, in the top navigation bar of the DatoCMS interface, you will find a "**Publish changes"** button: your editors will be able to request a new publication of the static website whenever they like.

If you have multiple build triggers, you'll be able to trigger builds independently and manage permissions and logs for each environment.

Have a look at this quick demo to see how things work:

(Video content)

Check the Marketplace for all the available [Hosting and CI building](https://www.datocms.com/marketplace/hosting.md) options.

---

# Primary and sandbox environments

Traditional CMSs often treat content as a one-off effort, which makes content management difficult to fit into existing development lifecycles.

Content environments make it easier for your development team to **manage and maintain the content structure once your content has been published**. Think of environments as code branches: they're great for testing, development and pre-production.

In short, environments ensure quick turnaround times and flexibility for developers — without interrupting the editorial workflow.

### What's an environment?

By default, every project has one environment, called the **primary environment**, which is meant to be used for the regular editorial workflow. Additionally, developers can create multiple **sandbox environments** to safely test and experiment with changes in the content.

[(Image content)](https://www.datocms-assets.com/205/1598878277-envs.png?auto=format&fit=max&w=2000)

Sandbox environments start out as **exact copies of one of the existing environments** (i.e., the primary one). The process of creating a new sandbox from an existing environment is called **forking**.

Each environment is identified by a name (e.g., `master`) and stores the following information:

-   Models
    
-   Records
    
-   Uploads
    
-   Plugins
    
-   The content navigation bar
    
-   Configuration (locales, timezone settings, appearance, SEO preferences)
    

When making changes to any of the aforementioned entities in any environment, including the primary environment, **the data in all other environments remains unaffected**.

### Creating a new sandbox environment

To manage all your project's environments, head over to the *Project Settings > Environments* section. To create a new sandbox starting from an existing environment, click on the contextual menu > **Fork**, and choose a name for the new environment.

(Video content)

DatoCMS will perform a deep copy of all the information contained inside the source and transfer it to the new sandbox.

Once there's at least one sandbox environment, developers will be able to **switch environments using the top bar panel**.

Editors will never see this panel due to a reduced set of permissions and will continue their editorial workflow in the primary environment as usual.

(Video content)

### Promotion of sandbox environments

At any time, you can **promote a sandbox environment to become the new primary environment**. The old primary environment will be demoted to a sandbox environment, and content editors will immediately see the interface refresh. From that moment, they will only be able to see and make changes to the new primary environment.

To be updated when a sandbox gets promoted, you can [set up a webhook](/docs/general-concepts/webhooks.md#webhook-triggers) listening to the "Environment Promote" event.

### Renaming environments

At any time, you can change the name of an existing environment. This change won't impact those working on the CMS:

(Video content)

To be updated when a sandbox gets renamed, you can [set up a webhook](/docs/general-concepts/webhooks.md#webhook-triggers) listening to the "Environment Update" event.

### Forcing use of sandbox environments

Changes to a primary environment can be potentially disruptive, so we give you the ability to **block any user from editing the primary schema or configuration.**

You can do this by going to Project settings > Global properties and enabling "**Force the use of sandbox environments".** If enabled, no user can edit the primary environment and make changes to its schema and configuration, regardless of their role.

---

# Project usages

On DatoCMS, usage quotas are tracked per account or per project. Let's see what they are, the differences between them, and where you can monitor them.

### Per-account resources

**Each account has quotas that are shared among all projects**. In particular, the shared resources are:

-   Records
    
-   File storage
    
-   API calls
    
-   Bandwidth
    
-   Video encoding
    
-   Video streaming
    

These resources can be monitored from your dashboard, [in the plan details](https://dashboard.datocms.com/plan-billing), where you can monitor how your resources are used across different projects, so you can better understand which ones you should optimize, or which of your clients should be billed more for their usage.

### Per-site resources

In each project you can drill down into the traffic, API calls and video streamed:

[(Image content)](https://www.datocms-assets.com/205/1714999115-screenshot-2024-05-06-at-14-38-23.png?auto=format&fit=max&w=2000)

And you can change the reports, using this dropdown:

[(Image content)](https://www.datocms-assets.com/205/1714999155-screenshot-2024-05-06-at-14-39-06.png?auto=format&fit=max&w=2000)

This helps you better understand where the traffic is coming from and how to best optimize the use of resources in your project.

---

# Audit Logs

The Audit Logs functionality is for monitoring audit events happening in an Enterprise project and ensure continued compliance, safeguarding against any inappropriate system access, and allowing you to audit suspicious behavior within your enterprise.

The idea is to give Enterprise organization owners the ability to query user actions in a project. With Audit Logs, you can:

-   Automatically feed DatoCMS access data into a SIEM or other auditing tool
    
-   Proactively monitor for potential security issues
    
-   Write custom apps to gain insight into how your organization uses DatoCMS
    

An audit log provides insight into audit events that are actually happening across a DatoCMS project, and is therefore read-only and immutable.

You can filter for specific actions or actors to see who made changes on specific resources in the app using a very powerful SQL-like language. Actors can include both logged-in users as well as access tokens.

You can either browse and filter audit log events via the interface or through [API calls](/docs/content-management-api/resources/audit-log-event/query.md), and the retention window is fully customizable. By default, Audit Logs have a Time-to-Live (TTL) of two months from the date of writing. However, it is possible to customize the TTL for individual projects. To make such customizations, please contact [our support team](https://www.datocms.com/support.md), and we will be happy to assist you.

If you're interested in trying out Audit Logs for your projects, [contact our Sales team](https://www.datocms.com/contact.md) to set up a free trial.

---

# Introduction to Content Modeling

DatoCMS can be seen as an editor-friendly interface over a database, so the first step is to build the actual schema upon which users will generate the actual website content.

The way you define the kind of content you can edit inside each different administrative area passes through the concept of models, which are much like database tables.

Each administrative area can specify a number of different models, and they represent blueprints upon which users will store the website content. For example, a site can define different models for articles, products, categories, and so on.

You can create new models in the *Settings > Models* section of your project:

[(Image content)](https://www.datocms-assets.com/205/1715001508-screenshot-2024-05-06-at-15-18-16.png?auto=format&fit=max&w=2000)

Each model consists of a set of fields that you define. Fields can be one of the following:

-   **Single-line string**: Ideal for titles, headings, etc.
    
-   **Multiple-paragraph text**: For simple Markdown, HTML or plain text.
    
-   [**Modular content**](/docs/content-modelling/modular-content.md): To define dynamic layouts for ie. landing-pages and give the content writers the choice between different template options.
    
-   [**Structured text**](/docs/content-modelling/structured-text.md): To store rich-text content, complete with images/videos/custom blocks using a portable JSON format.
    
-   **Asset gallery**: To store one or more files (for sliders, carousels, etc.).
    
-   **Single asset**: To store any kind of document (images, PDFs, ZIPs, videos, etc.).
    
-   **Video**: To reference to an external YouTube/Vimeo video.
    
-   **Date** and **DateTime**: A timestamp value for storing dates and times (i.e. an event start, office opening hours).
    
-   **Integer** and **Floating-point number**: For storing integer SKUs, quantities, prices, etc.
    
-   **Boolean**: For storing values that have two states, e.g., yes or no, true or false etc.
    
-   **Geolocation**: Coordinate values for storing the latitude and longitude of a physical location.
    
-   **Color**: For storing colors (with or without alpha channel).
    
-   **SEO meta tags**: To manage a page meta title, meta description, OpenGraph cards, etc.
    
-   [**Slug**](/docs/content-modelling/slug-permalinks.md): To generate a page permalink based on another textual field of the model.
    
-   [**Single and multiple links**](/docs/content-modelling/links.md): To model relationships between content, including other models. For example, linking a blog to a category.
    
-   **JSON**: For storing JSON objects.
    

[(Image content)](https://www.datocms-assets.com/205/1715001535-screenshot-2024-05-06-at-15-18-46.png?auto=format&fit=max&w=2000)

Field type selection modal

Each field has a name and additional metadata, like validations, or particular configurations to better present the field to the editor (hints, etc.):

[(Image content)](https://www.datocms-assets.com/205/1715001566-screenshot-2024-05-06-at-15-19-15.png?auto=format&fit=max&w=2000)

Validations tab in Field settings

[(Image content)](https://www.datocms-assets.com/205/1715001596-screenshot-2024-05-06-at-15-19-47.png?auto=format&fit=max&w=2000)

Presentation tab in Field settings

Fields in DatoCMS can also be [localized](/docs/general-concepts/localization.md), if you need to accept different values based on language.

DatoCMS stores the individual pieces of content you create from a model as records, which are much like table rows in a database. You (and your editors) can create new records of a certain model within the *Content* tab of your administrative area:

[(Image content)](https://www.datocms-assets.com/205/1715001641-screenshot-2024-05-06-at-15-20-30.png?auto=format&fit=max&w=2000)

#### New to DatoCMS?

If you want to get started with DatoCMS and learn the basics, check out these video tutorials for beginners!

[

(Image content)

Intro to the Schema Builder

Play video »

](https://www.datocms.com/user-guides/the-basics/intro-to-the-schema-builder.md)

[

(Image content)

Intro to Models in DatoCMS

Play video »

](https://www.datocms.com/user-guides/content-modeling/intro-to-models-in-datocms.md)

[

(Image content)

Intro to Fields in DatoCMS

Play video »

](https://www.datocms.com/user-guides/content-modeling/intro-to-fields-in-datocms.md)

---

# Single instance models

Real-world websites have often pages which don't resemble any other (eg. the *About us* page, or even the homepage).

If you want to allow the editors to change their content, you can create a Single-instance model:

[(Image content)](https://www.datocms-assets.com/205/1715001694-screenshot-2024-05-06-at-15-21-28.png?auto=format&fit=max&w=2000)

While *collection* models enable the creation of multiple records, *single-instance* models allow just a single item to be edited in the administrative area.

---

# Record ordering

The record collections can be ordered in different ways:

-   By the records that were last updated first (default ordering)
    
-   By one specified field, in ascending or descending order
    
-   In a tree-like structure
    
-   By drag and drop reordering
    

The default ordering should be quite self-explanatory.

The same goes for ordering by specified field. You can select the field and the ordering direction in the model settings:

(Image content)

The tree-like structure has [its own documentation page](/docs/content-modelling/hierarchical-sorting.md) where you can see it in action.

Last but not least, we have drag and drop reordering. In this case, once you select the appropriate choice from the usual dropdown, you will have the option of dragging and dropping the records in the collection list.

In case you need to move a record across pages, you can enter the record and change the position attribute in the right sidebar:

(Image content)

### Caveat

One thing to note about the drag and drop reordering and the tree-like structure reordering is that as soon as you change the position of a record, it's updated in the API, even for published records. This means you cannot have separate draft/published states for the position attribute.

---

# Hierarchical sorting (Tree-like collections)

> [!NOTE] Tree-like Collections are renamed to Hierarchical Sorting
> In 2025, we changed the name of this feature for better clarity. The underlying functionality is still the same.

Taxonomies, product categories, navigation bars... websites are full of hierarchical data. DatoCMS is the only headless CMS that supports tree-like data structures out-of-the-box, offering a delightful editing experience for your editors and marketers.

If you want to arrange a model collection as a hierarchy or tree, you need to select "Hierarchical sorting" in the model's Presentation settings, in the "Default collection ordering" field.

(Image content)

Hierarchical sorting, much like other models, is also presentable in a compact or a tabular view, depending on which appearance best suits your workflows.

(Video content)

Additionally, both the tabular and the compact view are paginated, and records are incrementally shown as they are loaded.

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
    <p>Details: cache-dub4326-DUB 1762214585 2691209171</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

# Modular content fields

The **Modular Content** field is used to define a dynamic area for richer page layouts. 

For example, in a landing page, defining a Modular Content field allows the writer to choose between adding a text section, a carousel, or a call-to-action. This gives the writer the freedom to compose a landing page by alternating and ordering as many of these choices as needed.

(Video content)

You can use Modular content to define dynamic layouts in any of your models: blog posts, landing pages, case studies, tutorials, or any place you want to give content writers a choice between different template options.

Developers are in charge of defining which elements writers can use to compose content for a specific modular content field. You can think of those as "low-level" models, called *Block models*. Authors, to compose their dynamic content, will be able to add and reorder these blocks as they prefer.

## How to build a Modular content editor

Suppose we have an *Article* model, and we want to add a modular content field to manage its content. The first step is to decide the different kinds of basic blocks you want your authors to alternate. In this case, we want our content to be a flexible composition of:

-   Text
    
-   Quotes
    
-   Videos
    
-   Text + Image blocks
    

To achieve this result, first, we create the Article model, and add a Modular content field to it:

[(Image content)](https://www.datocms-assets.com/205/1715786906-add-modular-content.png?auto=format&fit=max&w=2000)

In the*Validations* tab, you can choose which blocks will populate your modular content field. Let's add the Quote block:

[(Image content)](https://www.datocms-assets.com/205/1715865820-add-blocks-to-modular-content.png?auto=format&fit=max&w=2000)

## Create and edit a block

If you go to the *Blocks* tab in the Schema area, you will see all the blocks that you have already created, and you can create a new one:

[(Image content)](https://www.datocms-assets.com/205/1715866821-blocks-library.png?auto=format&fit=max&w=2000)

Blocks are just a composition of fields, just like ordinary models. In our case, we want the *Quote Block* to be made of two fields: one containing the actual quote, and another containing the author.

You can click on the "Create new block" button on the bottom left to create a new block. In this case, we'll add a multi-paragraph text field to contain the text of the quote, and a single-line string text to display the name of the quote's author. If this block is used in one of your Models, you will see a notice. For example, we see that our *Quote* block is used in the *Product* modular content field, which is part of the *Article* model.

[(Image content)](https://www.datocms-assets.com/205/1715867014-block-used-in-content.png?auto=format&fit=max&w=2000)

If you go to your Content area now, you should see a new option called "Quote" in the modular content field's dropdown.

[(Image content)](https://www.datocms-assets.com/205/1715867362-add-block-in-modular-content-part-of-a-model.png?auto=format&fit=max&w=2000)

## Bulk Actions

Managing Modular Content is efficient with common Bulk Actions. You can easily select multiple Modular Content items and perform actions all at once from the action bar.

(Video content)

Each Modular Content Block includes a checkbox for easy selection, and you can perform bulk actions such as:

-   Select All / Invert Selection
    
-   Expand / Collapse selected blocks
    
-   Copy multiple blocks
    
-   Delete selected items
    

(Video content)

The contextual submenu makes managing blocks in the UI equally simple, with an improved flow to:

-   Copy & Paste
    
-   Duplicate
    
-   Move
    
-   Delete, and
    
-   Add Blocks
    

## Reusing block models

With these building blocks, you can start to design and develop a modular template that matches models and modular blocks in DatoCMS' schema.

Once you have set up the different blocks, you can reuse them across different models.

This means that the exact same block structure is reused across modular contents and models. If you modify the block in one place, the changes will be reflected across all modular contents.

This will effectively enable you to develop a modular template that will allow editors to build complex pages just by creating new records in the CMS.

## Single vs Multiple blocks

In your schema, there are two flavors of a Modular Content field you can opt for: Single Block and Multiple Blocks:

[(Image content)](https://www.datocms-assets.com/205/1704206138-screenshot-2024-01-02-at-15-35-35.png?auto=format&fit=max&w=2000)

The Single Block allows authors to slot in just one block within the field, while the Multiple Blocks provides the flexibility to insert several. Hence, when you're fetching the value tied to modular content, you're either looking at an array of blocks or a single block.

In the case of Single Block, you can still allow the author to insert different types of blocks depending on the context, but always one at a time.

## Reusing fields across models with "Frameless" Single-block

As a project's complexity scales up, we frequently encounter the need to reuse subsets of fields across various models. Redundantly duplicating these fields or manually keeping them in sync isn't an appealing approach.

Let's say you have different content types like "Blog Post," "News Article," and "Product Review." Each of these models may have common fields like title, author, and tags. However, they will also have specific fields like "Body" for blog posts, "Summary" for news articles, and "Rating" for product reviews. Despite the differences, they all share a common structure with some overlapping fields.

In these scenarios, we can effectively leverage the reusability of block models coupled with the "frameless" display mode of the Modular Content (Single Block) field to achieve our goal.

First, let's create a new type of block model. Let's call it "Bloggable", and define all the shared fields within it:

(Image content)

At this point, in all the "Blog Post," "News Article," and "Product Review" models, we should incorporate a Modular Content (Single block) field. The field should be arranged as follows:

-   It should only have "Bloggable" as its associated block model;
    
-   It should have the Required validation active;
    
-   The "Frameless" presentation mode should be active.
    

(Video content)

The "Frameless" presentation mode will conceal the Modular Content field from the authoring interface, and only show the fields of the block model **as if they're an intrinsic part of the model itself**:

(Video content)

## Tutorials

If you're curious to see the full power of Modular Content fields in action, take a look at this video tutorials which covers everything you need to build a customizable landing page made of different reusable blocks.

[

(Image content)

Intro to the Modular Content Field

Play video »

](https://www.datocms.com/user-guides/content-modeling/intro-to-the-modular-content-field.md)

[

(Image content)

Building Pages and Deep Dive into Modular Content

Play video »

](https://www.datocms.com/user-guides/content-management/building-pages-and-deep-dive-into-modular-content.md)

[

(Image content)

Working Together - Creating Our First Case Study

Play video »

](https://www.datocms.com/user-guides/content-management/working-together-creating-our-first-case-study.md)

[

(Image content)

Build a dynamic landing page with Next.js and Tailwind CSS

Play video »

](https://www.youtube.com/watch?v=it5nNneptgM)

---

# Structured text fields

Structured Text is a field type that enables authors to **create rich text content**.

-   It offers a beautiful, Notion-like editor **designed for focus**, with slash commands, a full editing toolbar, markdown/keyboard shortcuts, and drag & drop functionality. Forget the mouse, and just start typing;
    
-   It allows you to create hyperlinks to other records in your project, and **intersperse textual content with custom blocks** - which can represent galleries, videos, embeds, call-to-actions, etc.
    
-   It stores the content in a safe, semantic, and readable **JSON format**, representing a tree of well-defined nodes.
    

## Backstory

Everyone hates HTML editors: developers know they produce dirty code, designers fear the introduction of unwanted styling, and editors struggle to use them. Markdown is better for designers, as it allows less freedom for editors from a formatting standpoint (at least until you start inserting HTML code), but it's not user friendly for editors, and it's an inflexible format for developers.

Sure, DatoCMS provides both an HTML and a Markdown editor, because there are situations where they're unavoidable, but often, when a project needs rich-text, **it is advisable to use Structured Text fields** instead.

## Preview of the editor

We designed the Structured Text editor to offer one of the best writing experiences on the market. It supports Slash commands, Markdown shortcuts, and full-screen focus mode. Here's a quick video of it:

(Video content)

For editors, familiarity with various content creation workflows is supported within the Structured Text field. In addition to slash commands, the floating formatting toolbar, and markdown support, the field also offers a full formatting toolbar visible when the field is in an active state.

(Video content)

The toolbar allows for advanced formatting options, as well as complete customisation with custom icons for plugins. Here is a brief look into all the available options to editors.

(Video content)

## Customizing the editor

A key aspect of Structured Text is the ability to customize the field so that authors are only exposed to relevant formatting options. For example, you can have fields with only certain header tags or limit the kinds of entries that can be hyperlinked or embedded:

[(Image content)](https://www.datocms-assets.com/205/1715873098-structured-text-presentation-options.png?auto=format&fit=max&w=2000)

To add custom blocks to the field, follow this short video:

(Video content)

Furthermore, you can enhance the field by adding custom icons into the Structured Text toolbar to interact with plugins and other customizations.

## Structured text on the API

Structured Text content is stored as a JSON object. We chose [unist](https://github.com/syntax-tree/unist) as our base format to benefit from its ecosystem of utilities for working with compliant syntax trees.

The `dast` format clearly specifies:

-   which nodes are usable within the document;
    
-   for each node, which are the possible `children` that it can contain;
    
-   any additional attribute that characterize each node.
    

Take a look at the [**DatoCMS Abstract Syntax Tree specs**](/docs/structured-text/dast.md) to learn all the details.

### Linking records

Structured Text allows hyperlinking DatoCMS records in the flow of text. This allows the following scenarios:

-   Using custom link functions, like React Router links, to a DatoCMS record.
    
-   Rendering a widget such as an image gallery, a product description box, a sign up form, an annotation window, or basically anything else.
    

The following example demonstrates an hyperlinked record and an inline record:

(Video content)

### Embedding blocks

Similarly to [Modular Content](/docs/content-modelling/modular-content.md) fields, you can also embed block records into Structured Text.

Blocks and records can be embedded either using slash commands or the toolbar. Here's a demonstration:

(Video content)

Just like with the Modular content field, when a record is deleted, the blocks contained inside its Structured Text fields are also deleted, without leaving orphans in the process.

### Next steps

-   [Structured Text format](/docs/structured-text/dast.md)
    
-   [Migrating to Structured Text](/docs/structured-text/migrating-content-to-structured-text.md)
    
-   [Creating Structured Text fields using the CMA](/docs/content-management-api/resources/field/create.md#creating-structured-text-fields)
    
-   [Creating records with Structured Text fields using the CMA](/docs/content-management-api/resources/item/create.md#structured-text-fields)
    
-   [Fetching Structured Text using the GraphQL CDA](/docs/content-delivery-api/structured-text-fields.md)
    

### Video tutorials

[

(Image content)

Intro to String (Text) Fields

Play video »

](https://www.datocms.com/user-guides/content-modeling/intro-to-string-text-fields.md)

[

(Image content)

Deep Dive into Structured Text in DatoCMS

Play video »

](https://www.datocms.com/user-guides/content-management/deep-dive-into-structured-text-in-datocms.md)

[

(Image content)

Working Together - Creating Our First Blog Post

Play video »

](https://www.datocms.com/user-guides/content-management/working-together-creating-our-first-blog-post.md)

---

# Link fields

Links are a powerful way to model relationships between content. Models can have link fields which point to other records, for example:

-   An article linking to its category (singular relationship).
    
-   An article linking to related articles (plural relationship).
    

In DatoCMS, you don't need to define a field for the reverse relationship (i.e., the category linking to its articles): during the integration with your website, you can easily perform reverse reference lookups with just a couple of lines of code.

When you add a new field of type **Link** (or **Links**) to a model, DatoCMS requires you to specify within the *Validations* tab the models that can be referenced by the field itself.

To let editors select one (or more) records to link, DatoCMS will present a dropdown with auto-completion turned on:

(Video content)

### Expanded view

If you prefer, you can switch any link field to **Expanded view** mode, to provide your editors with a nicer, more meaningful preview of the linked records:

[(Image content)](https://www.datocms-assets.com/205/1715002826-screenshot-2024-05-06-at-15-40-13.png?auto=format&fit=max&w=2000)

As with any other field, this setting can be found under the *Presentation* tab of your field:

[(Image content)](https://www.datocms-assets.com/205/1715002859-screenshot-2024-05-06-at-15-40-48.png?auto=format&fit=max&w=2000)

[

(Image content)

Intro to the Link Field

Play video »

](https://www.datocms.com/user-guides/content-modeling/intro-to-the-link-field.md)

---

# SEO fields

If you are building a website, you need to think about SEO and provide special content for search engines and social networks.

To help content editors and marketers optimize your website, you can find a special "SEO and Social" type of field that lets you specify a custom title, description, image, and Twitter (X) card format, and gives a nice preview of how the result will look like on Google Search and Social Networks.

Here's how it works:

(Video content)

These are all the available fields:

-   **Title:** Customize the SEO title for your content.
    
-   **Description:** Craft a unique meta description to enhance search engine visibility.
    
-   **Image:** Set the featured image to be displayed in social previews.
    
-   **No Index:** Control whether the page should be indexed by search engines.
    
-   **Twitter (X) Card:** Fine-tune the appearance of shared content on X.
    

> [!PROTIP] Pro tip: Set SEO fallback
> You can set up fallback options for the SEO title and description for your models in case you don’t add SEO fields to a model or if your editors do not fill in the SEO fields. Just go to the Content area and click “SEO Preferences” in the sidebar.

## Customizing SEO Fields and Social Link Previews

#### SEO Fields Customization

By navigating to *Edit field > Presentation*, you can tailor the SEO fields that are displayed to editors, by selecting from the options. Select the fields that align with your editorial needs, providing a more focused and efficient editing environment.

#### Social Link Previews Customization

By navigating to *Edit field > Presentation*, you can choose which social link previews to show your editors, ensuring your shared content looks compelling and engaging across various platforms. You can choose to display link previews for Google Search, X (Twitter), Facebook, Slack, Telegram and WhatsApp.

## Global SEO preferences

Also, globally, you can define a favicon for your site and a set of fallback meta for the site title, image, and description:

(Video content)

## API helpers

When fetching records from our GraphQL API, you'll find a `_seoMetaTags` helper which contains all the meta tags we offer, with the data already merged with the global SEO preferences and fallbacks.

You can read all the details in the relevant [section of the CDA docs](/docs/content-delivery-api/seo-and-favicon.md).

Want to know more about SEO customization in DatoCMS? Check out this video tutorials:

[

(Image content)

Understanding SEO in DatoCMS

Play video »

](https://www.datocms.com/user-guides/content-management/understanding-seo-in-datocms.md)

[

(Image content)

Intro to the SEO Fields

Play video »

](https://www.datocms.com/user-guides/content-modeling/intro-to-the-seo-fields.md)

[

(Image content)

Working with and customizing SEO Fields

Play video »

](https://youtu.be/WjF10isSjS0)

---

# Slugs and permalinks

In DatoCMS, you can add a special field type called "Slug" to your models to let your editors specify the URL permalink of a record.

A slug field is linked to another single-line string field of the same model, usually the title. As soon as the editor begins to type the title, the slug field will be filled with an URL-friendly version of the same string:

(Image content)

The nice thing about slug fields is that, if the editor subsequently updates the record's title, the slug won't change, preserving all the SEO benefits.

### How to add a slug field to a model

Say you have a "Blog post" model; start by adding a "Title" field, then you can add an automatically-generating Slug field (you can find it under the *SEO* group) by selecting the Title field as its reference, under the *Validations* tab.

(Video content)

---

# External video field

One of the fields that you can use in DatoCMS is the **external video field**, that allows you to reference an external YouTube, Vimeo or Facebook video.

Via [oEmbed](https://oembed.com/) we'll fetch and store the thumbnail image, the title and the dimensions of the video. All information that you can then retrieve via the APIs.

### How to publish a scheduled YouTube video

Unfortunately, oEmbed information can only be fetched from public videos, and not private videos with a scheduled publication date. This YouTube feature is very useful together with the [scheduled publication](https://www.datocms.com/blog/scheduled-publishing-during-christmas.md) of DatoCMS's records.

But how can you make the two work together?

There's a little trick that you can use, it's not super handy but will do the job:

-   set the video to unlisted, unfortunately you cannot schedule an unlisted video to be listed
    
-   add the video to DatoCMS
    
-   set the video to private again and schedule the publication
    
-   schedule the publication of DatoCMS record together with the YouTube video
    

That's it! A bit hackish, but it's a way to work around the limitations of the system.

---

# Validations

Validations are a powerful tool to enforce a sound structure of your content.

They can help in different ways both editors and developers.

### For editors

If you have an editorial team with different people working on content, you need to explain to everyone what are the rules they have to respect for the final page to look good and make sense. Also sometimes developers need to enforce some content rules to make everything work together.

With DatoCMS **you can enforce all these rules on a per model/field basis**, preventing editors to save content that would break pages or make poor content.

For example, you can make certain fields as required, enforce certain text lengths and much more.

Enabling the "**Allow saving invalid drafts?**" flag on a per-model basis also allows editors to save invalid draft versions of records. In this case, validations will be enforced just right before publishing a record: if the record is not valid, it can't be published.

### For developers

When you work with complex structured or semi-structured data structures often you need to write frontend code that deals with all the possible combinations of existing/non-existing code or more in general you need to double check if content matches certain rules.

You end up with code that is much more complex than necessary, with lots of if-statements to protect you from unfinished content and parse and validate other parts to be sure you are getting what you need.

With DatoCMS you can simplify your code and be more productive. **By enforcing the right validations you'll always get the data that you need, in the format that you expect.**

Remember that **validations are normally enforced on every version of the record, even on saving a draft**. This means that if you won't be able to save a record that is not satisfying all the validations. So be careful adding only what you really need.

On each model, you can enable the "**Allow saving invalid drafts?" flag to postpone the enforcement of validations when publishing records. In this case, invalid records can be saved as drafts if the "draft/published" system is enabled.**

On the code side, using validations ensures that records are always published with the expected structure and format.

### Field validations

Let's see together all the validations available on DatoCMS for each field.

#### Single line text

-   *Required*: field must be present
    
-   *Unique*: every record of the same model must have different content
    
-   *Limit character count*: you can specify the number of characters in different ways, i.e. at least 10, between 10 and 20, no more than 20, exactly 20
    
-   *Match a specific pattern*: text must be a valid URL, email address or match a specified regular expression
    
-   *Accept only specified values*: you can specify a list of values. **If you do that, the field will display as a dropdown for the editor**
    

#### Multiple-paragraph text

-   *Required*: field must be present
    
-   *Limit character count*: you can specify the number of characters in different ways, e.g. at least 10, between 10 and 20, no more than 20, exactly 20
    
-   *Match a specific pattern*: text must be a valid URL, email address or match a specified regular expression
    

#### Modular content field

-   *Accept only a specified number of records*: you can specify the number of records part of the modular content in different ways, e.g. at least 10, between 10 and 20, no more than 20, exactly 20. Moreover you can specify if the number of records must be multiple of a number
    

#### Single asset field

-   *Required*: field must be present
    
-   *Accept only specified file size*: enforce a certain asset size in different ways, e.g. between 500KB and 1MB, no more than 10MB, at least 1MB
    
-   *Accept only specified extensions*: allow only images, videos, documents or custom file extensions
    
-   *Accept only specified image dimensions*: enforce dimensions for image assets, e.g. between 500x500px and 1000x1000px or no more than 2000x2000px or at least 500x500px
    
-   *Require alt and/or title*: you can enforce presence of alt and/or title fields
    

#### Asset gallery field

-   *Accept only a specified number of records*: you can specify the number of records part of the asset gallery in different ways, e.g. at least 10, between 10 and 20, no more than 20, exactly 20. Moreover you can specify if the number of records must be multiple of a number
    
-   *Accept only specified file size*: enforce a certain asset size in different ways, e.g. between 500KB and 1MB, no more than 10MB, at least 1MB
    
-   *Accept only specified extensions*: allow only images, videos, documents or custom file extensions
    
-   *Accept only specified image dimensions*: enforce dimensions for image assets, e.g. between 500x500px and 1000x1000px or no more than 2000x2000px or at least 500x500px
    
-   *Require alt and/or title*: you can enforce presence of alt and/or title fields
    

#### External video field

-   *Required*: field must be present
    

#### Date field

-   *Required*: field must be present
    
-   *Accept only specified date range*: the specified date must be in a specified range, e.g. at least 30 March 2020, no more than 21 March 2020, between 21 and 30 March 2020
    

#### DateTime field

-   *Required*: field must be present
    
-   *Accept only specified date range*: the specified date must be in a specified range, e.g. at least 30 March 2020 12:00, no more than 21 March 2020 18:00, between 21 12:00 and 30 March 2020 18:00
    

#### Integer number field

-   *Required*: field must be present
    
-   *Range*: number must be within specified range, e.g. between 1 and 10, at least 5, no more than 10
    

#### Boolean field

No validations available

#### Geolocation field

-   *Required*: field must be present
    

#### Color field

-   *Required*: field must be present
    

#### Slug field

-   *Reference field*: pick a field from which the slug is automatically pre-filled
    
-   *Required*: field must be present
    
-   *Unique*: every record of the same model must have different content
    
-   *Limit character count*: you can specify the number of characters in different ways, i.e. at least 10, between 10 and 20, no more than 20, exactly 20
    

#### SEO meta tags field

-   *Required*: field must be present
    
-   *Accept only specified file size*: enforce a certain asset size in different ways, e.g. between 500KB and 1MB, no more than 10MB, at least 1MB
    
-   *Accept only specified image dimensions*: enforce dimensions for image assets, e.g. between 500x500px and 1000x1000px or no more than 2000x2000px or at least 500x500px
    

#### Single link field

-   *Accept only specified model*: pick one or more models from which you are allowed to pick links
    
-   *Required*: field must be present
    
-   *Unique*: every record of the same model must have different content
    

#### Multiple links field

-   *Accept only specified model*: pick one or more models from which you are allowed to pick links
    
-   *Accept only a specified number of records*: you can specify the number of links in different ways, e.g. at least 10, between 10 and 20, no more than 20, exactly 20. Moreover you can specify if the number of records must be multiple of a number
    

#### JSON field

-   *Required*: field must be present

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
    <p>Details: cache-dub4366-DUB 1762214574 151246475</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

# Overview of DatoCMS APIs

DatoCMS offers several different APIs, each optimized for a particular use case.

## Fetching & Serving Content for your Frontend

-   **Start here:** Our [**Content** **Delivery** **API**](/docs/content-delivery-api.md) (CDA) is our recommended way to connect DatoCMS to your frontend. It lets you retrieve only the records and fields you need, using a simple query language called [GraphQL](https://graphql.org/). This is a fast and safe read-only API that makes it easy to use our headless system with any frontend framework.
    
-   Our [**Site Search API**](/docs/site-search.md) lets you easily add full-text search to your website.
    
-   Our [**Real-Time Updates API**](/docs/real-time-updates-api.md) allows you to push live updates to your visitors for real-time blogging or other live events. It is also highly beneficial for previewing draft content to your editors as they compose.
    

## Serving Images & Videos

-   Our [**Images API**](/docs/asset-api/images.md) serves your images through a CDN and enables powerful URL-based transformations ([cropping, resizing, format conversion, and more](https://docs.imgix.com/apis/rendering/overview)). We partner with Imgix for this system.
    
-   Our [**Videos API**](/docs/asset-api/videos.md) uses the Mux video CDN to [ensure efficient video streaming](/docs/streaming-videos/how-to-stream-videos-efficiently.md) for users with different devices and connection speeds.
    

## Editing & Managing Your Data

Our [**Content Management API**](/docs/content-management-api.md) (CMA) is a traditional REST API that lets your developers create, edit, export, and import your data and schema.

This is also the API that lets you manage other aspects of your account and projects, such as roles & permissions, environments, collaborators, and more.

## Extending DatoCMS

The [**DatoCMS Plugins SDK**](/docs/plugin-sdk/introduction.md) (and associated API methods) let your developers customize the DatoCMS UI itself, extending functionality for your editors by easily integrating third-party services or adding special logic for your specific business needs.

See [DatoCMS Community Plugins](https://www.datocms.com/marketplace/plugins.md) for some examples, often open-source, built by our wonderful community.

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
    <p>Details: cache-dub4333-DUB 1762214452 2539032513</p>
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
    <p>Details: cache-dub4336-DUB 1762214451 710123896</p>
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
> -   The Images API (this page) lets you apply image transformations directly via URL parameters, which is good for testing and directly fetching images.
>     
> -   But most production frontends use our GraphQL-based Content Delivery API (CDA) instead. And in that API, you can directly specify Imgix parameters right inside your query, and our GraphQL will automatically generate the correct Image API URL parameters for you. For more details, please see Content Delivery API: [Images and videos](/docs/content-delivery-api/images-and-videos.md)

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

-   crops the image to be 800x500px, centering around the second face it recognizes inside the picture;
    
-   desaturates the image;
    
-   adds a copyright caption at the bottom;
    
-   transforms the format to be a PNG;
    

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

# Video API

DatoCMS natively supports video encoding and streaming, thanks to the integration with [Mux](https://mux.com/), the fastest and most advanced cloud encoding platform for on-demand streaming video.

Every video you upload to your DatoCMS project will be instantly available for streaming. We can ingest almost every available codec, including those for broadcast and professional applications like H.264, H.265, VP9, and Apple ProRes.

Thanks to HLS Adaptive Bitrate (ABR) streaming, every viewer will always download the right video size for their device and connection speed from the nearest CDN node.

> [!NOTE] Prefer using YouTube streaming instead?
> No problem! We also support integrations with embedded videos from YouTube/Vimeo/Facebook as a special field type you can add to your models and blocks.

### Uploading videos

You can upload videos in the same way you upload regular assets. Through the interface, you can access some metadata related to the video, and you'll have the ability to preview it instantly:

[(Image content)](https://www.datocms-assets.com/205/1714997210-screenshot-2024-05-06-at-14-06-36.png?auto=format&fit=max&w=2000)

You can add a video to your models using the *Single Asset* or *Asset Gallery* fields.

### What gets exposed via API

From your application, you can obtain everything you need to generate a video player through the API, as well as any thumbnails and other metadata. Take a look at the documentation of our [Content Delivery API](/docs/content-delivery-api/images-and-videos.md#videos) for all the details.

DatoCMS also offers `<VideoPlayer />` components for [React](https://github.com/datocms/react-datocms/blob/master/docs/video-player.md), [Vue](https://github.com/datocms/vue-datocms/tree/master/src/components/VideoPlayer), and [Svelte](https://github.com/datocms/datocms-svelte/tree/main/src/lib/components/VideoPlayer), making it easy to display a fully-featured video with captions, multiple audio tracks, and timeline hover previews using data retrieved from the API.

### Subtitles, closed captions, additional audio tracks

With every video you upload, you can make your content more accessible and reach a global audience with subtitles, closed captions, and extra audio tracks.

After you've uploaded a video, and it's been processed correctly (i.e. you see the thumbnail and can play the preview), head over to the "Additional audio tracks and subtitles" section to upload both alternate audio tracks (in M4A, MP3, or WAV format) and subtitles (in SRT or VTT format).

(Video content)

### Auto-generated captions

We offer the option to automatically generate closed captions for your video directly from its audio using speech recognition and machine learning. All you need to provide is the language of your video and the description to display in the player.

(Video content)

The transcription quality is usually pretty good, but since it's machine-generated, we recommend double-checking the results, particularly when used with suboptimal audio recordings.

If you want to make adjustments, you can download the generated subtitles in .vtt format by clicking on the icon next to the subtitles name, make your changes, and then re-upload the file.

(Image content)

> [!WARNING] Feature limited to recently added videos
> The option to automatically generate captions is only available for videos uploaded in the last 7 days.

### Stream videos in 4K

> [!NOTE] Available only on Enterprise plans
> As of today, 4K video streaming is only available upon request for Enterprise plans. If you want it enabled for your account, you'll need to [reach out to our team](https://www.datocms.com/support.md).

If you upload a video with a resolution that exceeds 1080p, and have the "4K Video Streaming" feature enabled on your plan, the video player will be able to serve higher resolution streaming for your viewers (2K/1440p or 4k/2160p). The video player selects the best video resolution based both on the density of the screen and the actual size of the player in the page, so it will only serve these higher resolutions when supported.

In case you want to limit this case, you can stop providing streaming for a video above a certain resolution by using a `max_resolution` query parameter to the regular Playback URL. This modifies the resolution options available for the player to select from:

```none
https://stream.mux.com/{PLAYBACK_ID}.m3u8?max_resolution=1080p
```

The `max_resolution` parameter can be set to `720p`, `1080p`, `1440p`, or `2160p`.

### Pricing and availability

Integration with Mux is offered across all DatoCMS packages, each incorporating a generous amount of encoding/streaming minutes into the cost.

If you're subscribed to a paid plan and exceed your quota, your website will not experience any service disruption. At the end of the month, we'll bill you for any additional usage.

If your plan has 4K video streaming enabled, it will have an additional cost - actual seconds of videos delivered in a resolution higher than 1080p will be charged with a 3x multiplier on DatoCMS due to the higher costs that Mux applies in this case ([read more](/docs/plans-pricing-and-billing/overcharges-on-api-and-bandwidth.md#4k-video-streaming)).

### What happens if you downgrade or cancel your subscription?

Videos will be kept for 60 days after the subscription ends. After that, we'll delete the videos. If you then change your mind and reactivate the project, you will need to re-upload the videos.

This behavior is particular to videos, as they can be very big and expensive to retain. This does not apply to other assets or data in general.

### Explore more!

To gain a comprehensive understanding of videos and video optimization in DatoCMS, take a look at this video tutorial:

[

(Image content)

Videos and Video Optimizations

Play video »

](https://www.datocms.com/user-guides/media-management/videos-and-video-optimizations.md)

---

# Asset CDN Settings

## Accessing Asset CDN Settings

Advanced Asset Settings are located within your "Project settings", under the "Asset CDN settings" section. Here, administrators with the appropriate permissions can set default parameters that will apply to all assets of a project.

[(Image content)](https://www.datocms-assets.com/205/1709640012-datocms-assets-cdn-settings.png?auto=format&fit=max&w=2000)

## Automatic Image Optimization

DatoCMS offers a set of customizable parameters that can significantly boost your project's performance by leveraging the robust image optimizations and transformations of Imgix, our image CDN partner.

We strongly recommend you read the following documentation thoroughly before implementing changes. For a more technical reference about how these parameters work, please see the [Imgix Rendering API documentation](https://docs.imgix.com/apis/rendering/overview).

> [!NOTE] How are automatic optimization settings applied?
> The default Automatic Image Optimization settings that you define here will be **combined** with any additional ones you explicitly specify in the URL. For instance, if you have your defaults set to `?auto=format&q=50` (via "Custom settings"), then:
> 
> -   Adding `?w=40` to the URL of an image will make the final parameters equal to `auto=format&q=50&w=40`. Even though the default parameters are not explicitly visible, they are still implicitly applied.
>     
> -   Applying `?auto=enhance` to the URL will behave as `?auto=enhance&q=50`, because the same parameter (`auto`) specified again at the URL level will override the previously set default.
>     
> 
> If you ever want to bypass the defaults, you can skip automatic optimization by using the URL parameter `?skip-default-optimizations=true` (or using the argument `skipDefaultOptimizations: true` in your CDA requests).
> 
> Therefore, `?auto=enhance&skip-default-optimizations=true` will simply behave as `?auto=enhance`, with no additional parameters (`q=50` will be skipped even though it was specified in the defaults). But please be careful when using the `skip-default-optimizations` parameter, as it could significantly increase your bandwidth costs.

### Option 1: DatoCMS presets (recommended)

This is the default setting for newly-created DatoCMS projects.

This presets applies the `auto=format` parameter to your images, and is our recommended approach for basic image optimization. This preset has been carefully selected to intelligently optimize images, selecting the best format for efficient compression without compromising visual quality.

[Learn more about what `auto=format` does in the Imgix documentation](https://docs.imgix.com/apis/rendering/automatic#format).

### Option 2: Custom settings

For more control, you can also choose to specify custom defaults for three Imgix settings: `auto`, quality (`q`), and color space (`cs`):

[(Image content)](https://www.datocms-assets.com/205/1727389844-custom-settings.png?auto=format&fit=max&w=2000)

#### Automatic (`auto`) parameter

The [`auto` parameter](https://docs.imgix.com/apis/rendering/auto/auto) simplifies the optimization process automated across your image repository. It offers four distinct settings, which might also be combined:

`auto=compress`

-   Reduces image size through best-effort techniques, applying aggressive compression.
    
-   Serves images in AVIF format, with fallbacks to WebP or JPEG based on browser support.
    
-   Overrides `fm` parameter for non-animated assets when used with `auto=compress`.
    

`auto=enhance`

-   Improves image quality by enhancing highlights, midtones, and shadows across all RGB channels.
    
-   Gives images a vibrant appeareance, which is ideal for editorial, stock, and user-generated content.
    

`auto=true`

-   Automatically adjusts images by applying additional parameters, starting with `auto=enhance`.
    
-   If `crop=faces` is set, `auto=true` will triggers `auto=redeye` for red-eye removal.
    

`auto=format`

-   Determines the optimal image format through automatic content negotiation.
    
-   Attempts to serve images in AVIF, falling back to WebP, JPEG, or PNG based on browser support.
    
-   Can be combined with `auto=compress` and/or `fm` to customize fallback logic.
    

`auto=redeye`

-   Automatically removes red-eye from detected faces, enhancing image quality.
    

For more details, refer to the [imgix documentation on `auto` parameter](https://docs.imgix.com/apis/rendering/auto/auto).

#### Output Quality `q` parameter

The [`q` parameter](https://docs.imgix.com/apis/rendering/format/q) controls the output quality of lossy file formats like jpg, webp, avif, or jxr. Key points include:

-   Values range from 0 to 100, with 75 set as the default - higher values increase image file size.
    
-   Quality can often be set lower than default, especially for high-DPR (Device Pixel Ratio) images.
    
-   When auto=compress is applied, the default is automatically set to 45, unless overridden.
    

Explore more about the [q parameter in `imgix` documentation](https://docs.imgix.com/apis/rendering/format/q).

#### Color Space ( `cs` ) parameter

The [`cs` parameter](https://docs.imgix.com/apis/rendering/format/cs) specifies the color space of the output image. Options include:

-   **sRGB**: Default value, standard web color representation.
    
-   **Adobe RGB (1998)**: Provides accurate color reproduction from digital screens to print.
    
-   **TinysRGB**: Reduced color space metadata, potentially resulting in a slight color shift.
    
-   **Strip**: Removes color space for maximum size reduction.
    

Learn more about the [cs parameter in `imgix` documentation](https://docs.imgix.com/apis/rendering/format/cs).

## Option 3: No settings

No automatic image optimizations will be applied. This option is not typically recommended, because bypassing `auto=format` will result in significant bandwidth usage, especially if you're serving large .PNG files. Nonetheless, it can be useful if you prefer to use URL queries or GraphQL parameters to more precisely optimize your images on your frontend.

## Video optimization

### Block Serving Raw Videos

This is enabled by default for newly-created DatoCMS projects, and we recommend leaving it on unless you have a special use case for raw videos. By "raw", we mean that you are serving the video file (typically a .MP4, sometimes a .MOV or .AVI or other file type) directly from `datocms-assets.com`, without any optimizations for different connection speeds or devices. This can result in an inferior user experience.

Instead of serving the files directly, we generally recommend using HLS (HTTP Live Streaming) to serve videos to your visitors, because this improves performance and user experience for them, and minimizes bandwidth charges for you. Please see our documentation on [How to stream videos efficiently](/docs/streaming-videos/how-to-stream-videos-efficiently.md) for more information on how this works.

This setting allows project administrators to completely block raw video files from being served from your project, enforcing the use of HLS and Mux instead. This can help prevent human error (editors or developers accidentally linking to a raw .MP4) causing severe slowdowns for your visitors and excessive bandwidth use in your project.

Enabling this feature means that accessing a video's raw URL will result in a 422 error. This policy supports our standard best practice of [utilizing Mux for video delivery](/docs/asset-api/videos.md), optimizing video streaming and ensuring consistency across the platform.

[

(Image content)

Images and Image Optimization

Play video »

](https://www.datocms.com/user-guides/media-management/images-and-image-optimization.md)

[

(Image content)

Videos and Video Optimizations

Play video »

](https://www.datocms.com/user-guides/media-management/videos-and-video-optimizations.md)

---

# Real-Time Updates API Overview

The Real-time Updates API allows clients to **listen for content changes using a stable connection that streams events as they occur**. It supports the exact same GraphQL queries available in the [Content Delivery API](/docs/content-delivery-api.md), but returns a streaming channel implementing the [Server-Sent Events protocol](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events), which is natively supported by modern browsers.

### Use cases

Live updates can be **extremely useful for content editors** to preview draft content on the real website as it gets authored, without needing a page refresh or additional staging servers:

(Video content)

Live updates **can also be pushed to regular visitors**, so that thay can immediately see new content as it gets published by editors, allowing all kinds of real-time interactions with your website/app.

Imagine a real-time updated event coverage liveblog, for example:

(Video content)

### Examples and API reference

We recommend using our [client libraries](/docs/real-time-updates-api/listening-to-queries.md) to listen for updates, as they will set-up the streaming channel for you.

If you need to implement the streaming logic on other environments than the browser, then read the [low-level reference](/docs/real-time-updates-api/api-reference.md) of the underlying endpoints.

---

# How to use it

If you want to use real-time updates on the browser, the easiest way is to use one of our libraries. They will handle all the hard-wiring for you, including reconnecting to a new subscription channel in case of network errors.

### Next.js

Please take a look at our [Next.js integration guide](/docs/next-js/real-time-updates.md) to learn how you can use the Real-time Updates API to produce instant refresh of content as soon as it gets saved into DatoCMS.

We have also prepared a [step-by-step tutorial](https://www.datocms.com/blog/live-preview-with-next-js.md) that shows how to get to live-previews of draft content, so be sure to check that out!

You can also deploy and play with the code of one of our Next.js project starters, as they both support real-time updates:

[

(Image content)

Next.js Event Coverage Liveblog

Try this demo »

](https://www.datocms.com/marketplace/starters/next-js-event-coverage-liveblog.md)[

(Image content)

Next.js Blog

Try this demo »

](https://www.datocms.com/marketplace/starters/nextjs-template-blog.md)

### React

If you're in a React project the [`react-datocms`](https://github.com/datocms/react-datocms#live-real-time-updates) package exposes a `useQuerySubscription` hook that makes it trivial to make any webpage updated in real-time.

For more info on all the available options, please refer to its [documentation on Github](https://github.com/datocms/react-datocms#live-real-time-updates):

```jsx
import React from "react";
import { useQuerySubscription } from "react-datocms";

const App: React.FC = () => {
  const { status, error, data } = useQuerySubscription({
    query: `
      query AppQuery($first: IntType) {
        allBlogPosts {
          slug
          title
        }
      }`,
    variables: { first: 10 },
    token: "YOUR_API_TOKEN",
  });

  const statusMessage = {
    connecting: "Connecting to DatoCMS...",
    connected: "Connected to DatoCMS, receiving live updates!",
    closed: "Connection closed",
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

### Vanilla JS

On any other JS environment you can use the [`datocms-listen`](https://github.com/datocms/datocms-listen) package which exposes a generic `subscribeToQuery` function that encapsulates all the connection logic.

For more info on all the available options, please refer to its [documentation on Github](https://github.com/datocms/datocms-listen):

```javascript
import { subscribeToQuery } from "datocms-listen";

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
  token: "YOUR_TOKEN",
  includeDrafts: true,
  onUpdate: (response) => {
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
});
```

---

# API reference

The Real-time Content API is built upon and extends the capabilities of the GraphQL [Content Delivery API](/docs/content-delivery-api.md): theyboth support exactly the same [authentication method](/docs/content-delivery-api/authentication.md), [endpoints](/docs/content-delivery-api/api-endpoints.md) and [GraphQL queries](/docs/content-delivery-api/how-to-fetch-records.md).

What's different is the domain you use to perform the POST request:

-   Content Delivery API: `https://graphql.datocms.com`
    
-   **Real-time Content API:** `https://graphql-listen.datocms.com`
    

And of course the response you'll receive:

-   a call to the Content Delivery API simply returns a JSON with the response to the requested query, whereas
    
-   the same call to the Real-time Content API **returns the URL of a persistent channel** implementing the [Server-Sent Events protocol](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events).
    

Here's a diagram representing the differences between the two:

(Image content)

In the following video, you can see how how easy it is to interact with the API simply using `curl`:

(Video content)

## Obtaining the URL of the channel

Using the same headers, API token and endpoint you use with the [Content Delivery API](/docs/content-delivery-api.md), you can perform a request to `https://graphql-listen.datocms.com` and get back the URL of a Server-Sent Events channel that streams events as they occur:

Terminal window

```bash


# Content Delivery API call

~() curl https://graphql.datocms.com/ \
        -H 'Authorization: Bearer YOUR_TOKEN' \
        -H 'X-Include-Drafts: true' \
        -d '{"query":"{ blogPost{ id } }"}'

{ "data": { "blogPost": { "id": "9721019" } } }

# Real-time Content API call

~() curl https://graphql-listen.datocms.com/preview \
        -H 'Authorization: Bearer YOUR_TOKEN' \
        -d '{"query":"{ blogPost{ id } }"}'

{ "url": "https://graphql-listen.datocms.com/channels/e4dae1a0-146e-4956-90e6-076ca9123eeb" }
```

The channel URL is ephemeral: after 15 seconds you will no longer be able to access it, so be sure to connect to it within a few seconds, or you will need to make a new call to get a new URL.

## Receiving the events

Once you obtain the URL of a subscription channel, you can connect to it and stream events as they occur.

All modern browsers offer a native interface to connect to Server-Sent Events channels called `EventSource`:

```javascript
const eventSource = new EventSource(
  "https://graphql-listen.datocms.com/channels/e4dae1a0-146e-4956-90e6-076ca9123eeb"
);

eventSource.addEventListener("open", () => {
  console.log("connected to channel!");
});
```

Immediately after the connection, the channel will send an `update` event with the result of the GraphQL query. The same event will then be sent every time the result of the query changes due to a change of the underlying content:

```javascript
eventSource.addEventListener("update", (event) => {
  const result = JSON.parse(event.data);

  // result will be something like:  { data: { blogPost: { id: "9721019" } } }
  console.log("updated graphql result: ", result);
});
```

When something goes wrong, the channel can also send `channelError` events. The cause for the error could be an invalid GraphQL query for example:

```javascript
eventSource.addEventListener("channelError", (event) => {
  const error = JSON.parse(event.data);

  // error will be something like:
  // {
  //   code: "INVALID_QUERY",
  //   message: "The query returned an erroneous response. Please consult the response details to understand the cause.",
  //   fatal: true,
  //   response: {
  //     errors: [
  //       {
  //         fields: ["query", "blogPost", "coverImage", "url", "wrongParameter"],
  //         locations: [{ column: 99, line: 1 }],
  //         message: "Field 'url' doesn't accept argument 'wrongParameter'",
  //       },
  //     ],
  //   },
  // }

  if (error.fatal) {
    eventSource.close();
  }
});
```

The `fatal` field in the error object is useful to know if the error is temporary (ie. connectivity/network problems) and therefore it is possible that additional `update`\-type events are sent, or if the error is fatal (ie. invalid query) so you need to close the channel permanently.

## Closed channels

An SSE channel stays open as long as possible, but it is perfectly normal that it closes after some time. The channel closure may be due to an automatic re-scaling of our servers to cope with an increase in requests, for example.

The official clients we have released handle this case transparently, and reconnect automatically if the channel closes. If you don't use one of our libraries, you'll have to make sure to reopen a new channel yourself in case the event happens.

---

# Limits and pricing

The Real-time Updates API is capable of supporting hundreds of thousands of concurrent connections.

Every plan comes with a **technical limit of a maximum of 500 concurrent connections per project**. This means, at the same time, that there can be a maximum of 500 open SSE connections to the same project. If you need more, please [contact us](https://www.datocms.com/support.md?topics=technical-support/general-request) so we can discuss your needs and see how we can help you scale.

### Pricing

Even though the Real-time Updates API is not billed per se, it uses the [Content Delivery API](/docs/content-delivery-api.md) to function, so it contributes to the number of API calls to it.

Generally, the number of requests made to the Content Delivery API is equal to the number of [update events](/docs/real-time-updates-api/api-reference.md#receiving-the-events) received on a channel. However, **the count of requests is largely independent of the number of connected clients**, as long as they are all connected to exactly the same GraphQL query, with the same API token, on the same environment and draft/published version.

```plaintext
Requests made to CDA/minute = Rate of updates/minute * N
```

Where `N` is proportional to the overall number of open connections (the greater the number of connections, the higher it will be), but **is generally between 2 and 10**.

#### Example

Let's illustrate the count by using an example:

-   the home page of a site makes a connection to the Real-time Updates API;
    
-   the GraphQL query and API token are hard-coded in the code of the webpage, so they're the same for all;
    
-   the content of the page is modified by editors approx. once every 30 seconds;
    
-   a total of 500 users is connected at the same time to the homepage in question.
    

The number of API calls made to the Content Delivery API every minute will be between 4 and 20.

---

# Introduction to Environments & Migrations

Traditional CMSs often treat content as a one-off effort, which makes content management difficult to fit into existing development lifecycles.

Content environments make it easier for your development team to **manage and maintain the content structure once your content has been published**. Think of environments as code branches: they're great for testing, development and pre-production.

In short, environments ensure quick turnaround times and flexibility for developers — without interrupting the editorial workflow.

### What's an environment?

By default, every project has one environment, called the **primary environment**, which is meant to be used for the regular editorial workflow. Additionally, developers can create multiple **sandbox environments** to safely test and experiment with changes in the content.

[(Image content)](https://www.datocms-assets.com/205/1598878277-envs.png?auto=format&fit=max&w=2000)

Sandbox environments start out as **exact copies of one of the existing environments** (i.e., the primary one). The process of creating a new sandbox from an existing environment is called **forking**.

Each environment is identified by a name (e.g., `master`) and stores the following information:

-   Models
    
-   Records
    
-   Uploads
    
-   Plugins
    
-   The content navigation bar
    
-   Configuration (locales, timezone settings, appearance, SEO preferences)
    

When making changes to any of the aforementioned entities in any environment, including the primary environment, **the data in all other environments remains unaffected**.

### Creating a new sandbox environment

To manage all your project's environments, head over to the *Project Settings > Environments* section. To create a new sandbox starting from an existing environment, click on the contextual menu > **Fork**, and choose a name for the new environment.

(Video content)

DatoCMS will perform a deep copy of all the information contained inside the source and transfer it to the new sandbox.

Once there's at least one sandbox environment, developers will be able to **switch environments using the top bar panel**.

Editors will never see this panel due to a reduced set of permissions and will continue their editorial workflow in the primary environment as usual.

(Video content)

### Promotion of sandbox environments

At any time, you can **promote a sandbox environment to become the new primary environment**. The old primary environment will be demoted to a sandbox environment, and content editors will immediately see the interface refresh. From that moment, they will only be able to see and make changes to the new primary environment.

To be updated when a sandbox gets promoted, you can [set up a webhook](/docs/general-concepts/webhooks.md#webhook-triggers) listening to the "Environment Promote" event.

### Renaming environments

At any time, you can change the name of an existing environment. This change won't impact those working on the CMS:

(Video content)

To be updated when a sandbox gets renamed, you can [set up a webhook](/docs/general-concepts/webhooks.md#webhook-triggers) listening to the "Environment Update" event.

### Forcing use of sandbox environments

Changes to a primary environment can be potentially disruptive, so we give you the ability to **block any user from editing the primary schema or configuration.**

You can do this by going to Project settings > Global properties and enabling "**Force the use of sandbox environments".** If enabled, no user can edit the primary environment and make changes to its schema and configuration, regardless of their role.

---

# Safe iterations using environments

## What not do do

A developer who needs to work on a new feature **should never make direct changes to the schema (models/fields/etc.) in the primary environment**.

There are multiple reasons for this:

-   the changes might **severely interfere with the work of the editors** working on the live website;
    
-   the changes might modify the format of some API call responses that are required by the live website, and **break the experience for end users**;
    
-   the changes could be accidentally wrong, and **produce significant loss of data**.
    

## Safely working on a change to the content schema

Using environments, you can instead follow this safe workflow:

1.  **Create a new sandbox environment,** forking the primary one. From now on, exclusively work inside the sandbox — this will safeguard you from all the problems just mentioned above!
    
2.  Create a branch in the Git repository of your website/app, and inside it, start **reading content from the sandbox environment** instead of the primary environment;
    
3.  **Manually write a migration script (or** [**auto-generate it**](/docs/scripting-migrations/scripting-migrations-with-the-datocms-cli.md#option-2-autogenerate-a-migration-script)**).** As we'll cover thoroughly in the next sections, a [migration script](/docs/scripting-migrations/scripting-migrations-with-the-datocms-cli.md) is just a sequence of API calls to the [Content Management API](/docs/content-management-api.md) that produces changes to the schema of an environment;
    
4.  **Run the migration script** on the sandbox environment to apply the changes;
    
5.  **Adapt the code of your website/app** to the changes.
    

If you make any changes to the migration script after running it, you can re-test it by simply repeating steps 1, 3, and 4.

> [!POSITIVE] Environments enable teamwork!
> Just like Git branches, environments let multiple development teams work simultaneously on different changes to the content schema, without interfering with each other. Everyone has their own copy of the schema, and can test/iterate freely.

### Why migration scripts are important?

As long as you are working in a sandbox environment, you may not even need a migration script, you can just make your changes to models/fields using the interface... but eventually the time will come to merge your work and changes into production.

The primary environment at this point, however, may have changed significantly; we can't just promote our sandbox environment to primary, because it is stuck at a past snapshot of the primary environment made at the time of the fork, and we would lose all the work done in the primary environment from that point forward.

Having an explicit migration script **makes your changes reproducible**. It allows the *exact same steps* tested in the sandbox environment to be performed on the primary environment itself!

Let's see exactly *how* in the next section.

> [!POSITIVE] Migration scripts can be auto-generated!
> By writing migration scripts by hand, you lose one of the core strengths of DatoCMS: the convenience of a graphical interface for editing your content schema.
> 
> Fortunately, you can also [auto-generate migration scripts](/docs/scripting-migrations/scripting-migrations-with-the-datocms-cli.md#option-2-autogenerate-a-migration-script)! In this case, you can make the necessary changes to the schema via the UI, and get back a migration script with a sequence of API calls that produce the same results.

## Safely merging a change to the content schema

Once everything is ready to be shipped in production, follow this process — of course, it can be adapted to your specific deployment workflow:

1.  **Turn on** [**Maintenance Mode**](/docs/scripting-migrations/apply-migrations-to-primary-environment.md#step-1-turn-on-maintenance-mode-to-prevent-changes-to-the-primary-environment), so that during the deployment process no one can write new data on the primary environment. Before enabling maintenance mode, DatoCMS will warn you if other collaborators are currently working on some content, so you can decide to postpone the deployment and contact the editors.
    
2.  **Merge the Git feature branch** containing the adaptation of your website/app code to the new changes;
    
3.  **Fork the primary environment into a new sandbox environment**, and re-run the migration script on it;
    
4.  **Promote the sandbox environment to be the new primary**. The old primary environment will in turn become a sandbox, ready to be promoted again **as an instant rollback** in case of errors you might find later on in production. We put no expiration dates on sandbox environments, which means that development teams can potentially create multiple restore points;
    
5.  **Deploy your website/app** with the merged changes;
    
6.  **Test that everything works** on your live website/app;
    
7.  **Turn off maintenance mode** to allow content editors to get back to their regular work on the new primary.
    

To learn more, visit the [Apply migrations to primary environment](/docs/scripting-migrations/apply-migrations-to-primary-environment.md) guide.

## Using sandbox environments on CI/automated testing

If the team relies heavily on automated testing, **environments can be created programmatically and just for the duration of a test**. Once it has successfully passed, the environment can be programmatically deleted.

Environments enable continuous integration by allowing you to create a “template environment” to use during tests. This template maintains the exact state you need to run your tests. Because environments are meant to be used as temporary entities for isolation, you don’t need to run any clean-up tasks.

Instead, just delete and recreate a new environment for every test.

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
    <p>Details: cache-dub4376-DUB 1762214576 978247899</p>
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
    <p>Details: cache-dub4323-DUB 1762214580 2161776469</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

# Apply migrations to primary environment

Once we're done [writing and testing our migrations](/docs/scripting-migrations/scripting-migrations-with-the-datocms-cli.md), we need to apply them to the primary environment.

The first solution that comes to mind would be to simply promote the sandbox environment we were using to test our migrations to primary, but this can be a very dangerous operation, as **the primary environment might have diverged from your sandbox environment**. That is, some users or webhooks you've set up might have made changes to either the content or the schema of the primary environment after the fork.

This is instead the safe workflow that we suggest for applying migrations to the primary environment.

### Step 1: Turn on maintenance mode to prevent changes to the primary environment

The first thing to do is turn on maintenance mode, so that **during the process, no one can write new data to the primary environment**.

You can do so either from the DatoCMS interface:

(Video content)

Or using the CLI:

Terminal window

```bash
$ npx datocms maintenance:on

Activating maintenance mode... done
```

If some users are in the process of editing any record when you launch the command, DatoCMS will warn you and fail the execution of the command. You can force the activation using the `--force` flag:

Terminal window

```bash
$ npx datocms maintenance:on

Activating maintenance mode... !
 ›   Error: Cannot activate maintenance mode as some users are currently editing records
 ›   Try this: To proceed anyway, use the --force flag
```

### Step 2: Run the migrations on a newly forked sandbox environment

You can now call the `datocms migrations:run` command to make a new copy of the primary environment, and run all the pending migrations:

Terminal window

```bash
$ npx datocms migrations:run --destination=new-main --fast-fork

Migrations will be run in "new-main" sandbox environment

Creating a fork of "main" environment called "new-main"... done
Creating "schema_migration" model... done
Running migration "1653061497_createArticleModel.js"... done
Running migration "1653062813_addAuthors.js"... done

Successfully run 2 migration scripts
```

Notice that, since we're already in Maintenance Mode, we can safely use the `--fast-fork` flag to [run a fast fork](/docs/scripting-migrations/scripting-migrations-with-the-datocms-cli.md#using-fast-fork-option-for-large-environments), which can be up to 20x faster than the regular fork.

### Step 3: Test your apps pointing them to the new sandbox

Before promoting the new sandbox as primary, **make sure that your website/app is working correctly**. All of our integrations offer a way to point to a sandbox instead of the primary environment.

As an example, if you're using our GraphQL Content Delivery API, you can explicitly [read data from a specific environment](/docs/content-delivery-api/api-endpoints.md#specifying-an-environment) using one of the following endpoints instead of the regular ones:

```plaintext
https://graphql.datocms.com/environments/{ENVIRONMENT-NAME}
https://graphql.datocms.com/environments/{ENVIRONMENT-NAME}/preview
```

### Step 4: Promote the sandbox and turn off maintenance mode

Once everything is ready, you can safely promote the sandbox to be the new primary environment. The old primary environment will be demoted to sandbox, and content editors will immediately see a refresh in the interface. From that moment, they will only be able to see and make changes to the new primary environment.

From the interface:

(Video content)

You can also promote an environment to primary via CLI:

Terminal window

```bash
$ npx datocms environments:promote <SANDBOX-ENVIRONMENT-NAME>
```

When you're ready, you can turn off maintenance mode to allow content editors to return to their regular editorial workflow:

Terminal window

```bash
$ npx datocms maintenance:off

Deactivating maintenance mode... done
```

## Handling rollbacks

In the unfortunate event you deploy some bad code, you can rollback to a prior, known good version of your project simply **re-promoting your old primary environment** and re-deploying your frontend/apps to the previous state. The effect is immediate, no re-compilation is required.

#### Learn more about data migrations

Check out this tutorial on how to migrate your content schema using scripts:

[

(Image content)

Using scripts to migrate DatoCMS content schema

Play video »

](https://youtu.be/AzeUU7bjDco)

---

# Running legacy migration scripts

If you have migration scripts written for the old `datocms-client` package, you don't need to convert them to the latest `@datocms/cma-client` package.

You can simply move them to a `legacyClient` directory:

Terminal window

```bash
mkdir migrations/legacyClient
mv migrations/*.js migrations/legacyClient
```

The CLI will take care of passing those migration scripts to the old API client, while all the new migration scripts will be written directly in the `migrations` directory, and will use the new API client.

---

# Keeping multiple DatoCMS projects in sync

If you're an agency or developer looking to streamline your development process, this guide will provide you with the necessary steps to efficiently manage multiple projects within DatoCMS.

### Why is it useful?

Managing multiple projects can be time-consuming and error-prone, especially when each project requires similar configurations and updates. However, with the ability to create a blueprint project in DatoCMS and duplicate it for each client, you can significantly reduce development time and ensure consistency across your projects.

By following the techniques outlined in this guide, you will be able to:

1.  **Save time and effort:** Rather than starting each project from scratch, you can create a blueprint project with all the necessary configurations, models, and settings. This allows you to duplicate and then customize the blueprint for each client, minimizing the time spent on repetitive tasks.
    
2.  **Ensure consistency:** Keeping multiple projects in sync ensures that any updates or improvements made to the blueprint project can be easily propagated to all the client projects. This guarantees consistency in design, functionality, and content management across your portfolio.
    
3.  **Maintain scalability:** As your agency grows and takes on more clients, the ability to efficiently manage multiple projects becomes crucial. By adopting a synchronized approach, you can handle a higher workload without sacrificing quality or increasing development time.
    

In the following sections, we will explore various use cases and provide step-by-step instructions on how to keep your DatoCMS projects in sync. Let's dive in and discover how you can optimize your development workflow!

### Creating a blueprint project

Creating a blueprint project in DatoCMS is a great way to streamline your development process:

1.  Start by setting up a new project in DatoCMS that will serve as your blueprint. Configure it with all the necessary models, fields, plugins, and settings that you want to replicate across your client projects.
    
2.  In parallel to your DatoCMS project, also create a frontend project associated with the blueprint. Use your favorite technology (ie. Next, SvelteKit). Make sure to parameterize the DatoCMS API token using environment variables!
    
3.  Once your blueprint project is ready, make sure to thoroughly test it and ensure that everything is working as expected.
    

### Duplicating your blueprint project

Now that you have your blueprint project set up, it's time to duplicate it for each client project.

Open your DatoCMS dashboard, enter the blueprint project, and under the "Danger zone" section click on "Duplicate project". Make sure to check the "Duplicate only models and fields" option, so that any sample content present in the blueprint won't be copied.

> [!POSITIVE] Different projects, same IDs
> By duplicating a project, DatoCMS keeps exactly the same IDs for all the entities. As we'll see in the next section, this is vital to keep your projects synced over time.

Open your Netlify/Vercel account, and create a new project, pointing to the Git repo of your blueprint frontend. In the project settings, make sure to specify the API token of the cloned project as an environment variable.

You can repeat these steps for each client.

### Propagating updates across client projects

Keeping your projects in sync is crucial for maintaining consistency and efficiency. Using migrations, you can easily make changes to your blueprint project, and propagate them to every client project programmatically.

##### Step 1: Setup the CLI

In your blueprint frontend repo, install our CLI:

Terminal window

```bash
npm install --save-dev @datocms/cli
```

Create one profile called `blueprint` for your blueprint DatoCMS project:

Terminal window

```bash
npx datocms profile:set blueprint --migrations-dir=migrations
```

This will create a `datocms.config.json` file. Similarly, create one profile for each of your client projects:

Terminal window

```bash
npx datocms profile:set <client_name> --migrations-dir=migrations
```

Create a `.env` file to store the read/write API token of each DatoCMS project as environment variables. If the profile name you chose for a client project was `foo_bar`, its API token must be stored in an env variable called `DATOCMS_BLUE_PRINT_PROFILE_API_TOKEN`:

```json
DATOCMS_BLUEPRINT_PROFILE_API_TOKEN=...
DATOCMS_FOO_PROFILE_API_TOKEN=...
DATOCMS_BAR_PROFILE_API_TOKEN=...
```

Add the `.env` file to your `.gitignore` to avoid publishing it inadvertently:

```plaintext
echo '.env' >> .gitignore
```

##### Step 2: Generate a migration script

Follow the [Write and test migration scripts](/docs/scripting-migrations/scripting-migrations-with-the-datocms-cli.md) guide to generate a migration with the changes you want to make to every project. Make sure to add the `--profile=blueprint` flag to every command you launch, so that in this phase you will always work on your blueprint project.

##### Step 3: Run the migration in every project

Now that we have a migration script, we can easily apply the same set of changes to every project by following the steps listed in the [Apply migrations to primary environment](/docs/scripting-migrations/apply-migrations-to-primary-environment.md) guide.

Here is a sample Bash script that you can use to automate the process:

```bash
#!/bin/bash

# Put the names of the profiles associated to your DatoCMS projects here:
profiles=("blueprint" "foo" "bar" "qux")

# Get current date
current_date=$(date +%Y-%m-%d)

# Generate the name of the new primary environment, using current date
destination="new-main-$current_date"

# Iterate over each profile
for profile in "${profiles[@]}"
do
    echo "Running commands for profile: $profile"

    # Enable maintenance mode
    npx datocms maintenance:on --force --profile="$profile"

    # Fork primary environment, run migrations in the new destination
    npx datocms migrations:run --destination="$destination" --fast-fork --profile="$profile"

    # Promote environment
    npx datocms environments:promote "$destination" --profile="$profile"

    # Disable maintenance mode
    npx datocms maintenance:off --profile="$profile"

    echo "Commands completed for profile: $profile"
done
```

---

# Structured Text and \`dast\` format

Structured Text content is stored as a JSON object consisting of two mandatory keys:

-   `document`: the content, expressed as a [`unist`](https://github.com/syntax-tree/unist) tree;
    
-   `schema`: a string that specifies the unist dialect used inside the `document` itself.
    

```json
{
  "schema": "dast",
  "document": {
    "type": "root",
    "children": [...]
  }
}
```

Generally speaking, you want to set the `schema` key to the `dast` dialect (which stands for **D**atoCMS **A**bstract **S**yntax **T**ree), so that:

-   you can take advantage of the default **Structured Text** editor that DatoCMS offers;
    
-   you can reinforce a number of additional validations to ensure consistency within the document.
    

If you would like to to use a custom [unist](https://github.com/syntax-tree/unist) format rather than `dast`, please [let us know!](https://www.datocms.com/support.md?topics=feature-request)

### DatoCMS Abstract Syntax Tree (`dast`) specification

The `dast` specification adheres to the [Unified](https://unifiedjs.com/) collective, which offers a large ecosystem of utilities to parse, transform, manipulate, convert, and serialize content of any kind.

Unified is implemented and used as foundation by several popular libraries, such as [rehype](https://github.com/rehypejs/rehype) (HTML parser), [remark](https://github.com/remarkjs/remark) (Markdown parser) and the [MDX project](https://mdxjs.com/). All these different projects are able to integrate with each other due to the fact that, to describe the content they treat, they all use the same common JSON format called [`unist`](https://github.com/syntax-tree/unist).

[(Image content)](https://www.datocms-assets.com/205/1612866826-unified.svg?auto=format&fit=max&w=2000)

Just like HTML, a `dast` document is composed of nodes within nodes:

-   Each node has a type attributed called `type`
    
-   The top-level node in the `dast` specification must be of type `root`
    
-   Most nodes have a `children` attribute to specify the nodes it contains
    
-   The leaves of the tree are nodes of type `span`, which do not offer a `children` attribute but store the final text as a string in their `value` attribute
    
-   The specs define exactly which attributes and children each node permits.
    

Let's look at an example:

```json
{
  "type": "root",
  "children": [
    {
      "type": "heading",
      "level": 1,
      "children": [
        {
          "type": "span",
          "marks": [],
          "value": "This is a title!"
        }
      ]
    },
    {
      "type": "paragraph",
      "children": [
        {
          "type": "span",
          "value": "This is a "
        }
        {
          "type": "span",
          "marks": ["strong"],
          "value": "paragraph!"
        }
      ]
    },
    {
      "type": "list",
      "style": "bulleted",
      "children": [
        {
          "type": "listItem",
          {
            "type": "paragraph",
            "children": [
              {
                "type": "span",
                "value": "And this is a list!"
              }
            ]
          },
        }
      ]
    }
  ]
}
```

### Working with `dast` documents

The package [`datocms-structured-text-utils`](https://github.com/datocms/structured-text/tree/main/packages/utils) offers JavaScript nodes definitions, Typescript types and type guards and many tree manipulation utilities.

Additionally, you can take advantage of [several `unist` utilities](https://github.com/syntax-tree/unist#list-of-utilities) to work with nodes in a `dast` document. For example, you can compose and assemble a document with [`unist-builder`](https://github.com/syntax-tree/unist-builder), select nodes with a CSS-like syntax using [`unist-util-select`](https://github.com/syntax-tree/unist-util-select) or have a compact representation of the document via [`unist-util-inspect`](https://github.com/syntax-tree/unist-util-inspect):

```javascript
import u from 'unist-builder';
import inspect from 'unist-util-inspect';

const document =
  u('root', [
    u('heading', { level: 1}, [
      u('span', 'This is the title!')
    ]),
    u('paragraph', [
      u('span', 'And '),
      u('span', { marks: ['strong'] }, 'this'),
      u('span', ' is a paragraph!')
    ])
  ]);

console.log(inspect(document));

root[2]
├─0 heading[1]
│   │ level: 1
│   └─0 span "This is the title!"
└─1 paragraph[3]
    ├─0 span "And "
    ├─1 span "this"
    │     marks: ["strong"]
    └─2 span " is a paragraph!"
```

### Converting HTML to Structured Text and vice versa

**Conversion utilities**

-   [`datocms-html-to-structured-text`](https://github.com/datocms/structured-text/tree/main/packages/html-to-structured-text) — Convert HTML/Markdown into Structured Text
    

**Rendering utilities**

-   [`datocms-structured-text-to-plain-text`](https://github.com/datocms/structured-text/tree/main/packages/to-plain-text) — Render Structured Text as plain text
    
-   [`datocms-structured-text-to-markdown`](https://github.com/datocms/structured-text/tree/main/packages/to-markdown) — Render Structured Text as Markdown
    
-   [`datocms-structured-text-to-html-string`](https://github.com/datocms/structured-text/tree/main/packages/to-html-string) — Render Structured Text as an HTML string
    
-   [`datocms-structured-text-to-dom-nodes`](https://github.com/datocms/structured-text/tree/main/packages/to-dom-nodes) — Transform Structured Text into a list of DOM nodes
    

**Framework components**

-   **React** → [`<StructuredText />`](https://github.com/datocms/react-datocms#structured-text)
    
-   **Vue** → [`<datocms-structured-text />`](https://github.com/datocms/vue-datocms#structured-text)
    
-   **Svelte / SvelteKit** → [`<StructuredText />`](https://github.com/datocms/datocms-svelte/tree/main/src/lib/components/StructuredText)
    
-   **Astro** → [`<StructuredText />`](https://github.com/datocms/astro-datocms/tree/main/src/StructuredText)
    

### JSON Schema for `dast`

The latest `dast` format specification is always available at the following URL:

[https://site-api.datocms.com/docs/dast-schema.json](https://site-api.datocms.com/docs/dast-schema.json)

### `root`

Every `dast` document MUST start with a `root` node.

It allows the following children nodes: [`paragraph`](/docs/structured-text/dast.md#paragraph), [`heading`](/docs/structured-text/dast.md#heading), [`list`](/docs/structured-text/dast.md#list), [`code`](/docs/structured-text/dast.md#code), [`blockquote`](/docs/structured-text/dast.md#blockquote), [`block`](/docs/structured-text/dast.md#block) and [`thematicBreak`](/docs/structured-text/dast.md#thematicBreak).

```json
{
  "type": "root",
  "children": [
    {
      "type": "heading",
      "level": 1,
      "children": [
        {
          "type": "span",
          "value": "Title"
        }
      ]
    },
    {
      "type": "paragraph",
      "children": [
        {
          "type": "span",
          "value": "A simple paragraph!"
        }
      ]
    }
  ]
}
```

### `paragraph`

A `paragraph` node represents a unit of textual content.

It allows the following children nodes: [`span`](/docs/structured-text/dast.md#span), [`link`](/docs/structured-text/dast.md#link), [`itemLink`](/docs/structured-text/dast.md#itemLink), [`inlineItem`](/docs/structured-text/dast.md#inlineItem) and [`inlineBlock`](/docs/structured-text/dast.md#inlineBlock).

```json
{
  "type": "paragraph",
  "children": [
    {
      "type": "span",
      "value": "A simple paragraph!"
    }
  ]
}
```

### `span`

A `span` node represents a text node. It might optionally contain decorators called `marks`. It is worth mentioning that you can use the `\n` newline character to express line breaks.

It does not allow children nodes.

```json
{
  "type": "span",
  "marks": ["highlight", "emphasis"],
  "value": "Some random text here, move on!"
}
```

### `link`

A `link` node represents a normal hyperlink. It might optionally contain a number of additional custom information under the `meta` key. You can also link to DatoCMS records using the [`itemLink`](/docs/structured-text/dast.md#itemLink) node.

It allows the following children nodes: [`span`](/docs/structured-text/dast.md#span).

```json
{
  "type": "link",
  "url": "https://www.datocms.com/",
  "meta": [
    { "id": "rel", "value": "nofollow" },
    { "id": "target", "value": "_blank" }
  ],
  "children": [
    {
      "type": "span",
      "value": "The best CMS in town"
    }
  ]
}
```

### `itemLink`

An `itemLink` node is similar to a [`link`](/docs/structured-text/dast.md#link) node node, but instead of linking a portion of text to a URL, it links the document to another record present in the same DatoCMS project.

It might optionally contain a number of additional custom information under the `meta` key.

If you want to link to a DatoCMS record without having to specify some inner content, then please use the [`inlineItem`](/docs/structured-text/dast.md#inlineItem) node.

It allows the following children nodes: [`span`](/docs/structured-text/dast.md#span).

```json
{
  "type": "itemLink",
  "item": "38945648",
  "meta": [
    { "id": "rel", "value": "nofollow" },
    { "id": "target", "value": "_blank" }
  ],
  "children": [
    {
      "type": "span",
      "value": "Matteo Giaccone"
    }
  ]
}
```

### `inlineItem`

An `inlineItem`, similarly to [`itemLink`](/docs/structured-text/dast.md#itemLink), links the document to another record but does not specify any inner content (children).

It can be used in situations where it is up to the frontend to decide how to present the record (ie. a widget, or an `<a>` tag pointing to the URL of the record with a text that is the title of the linked record).

It does not allow children nodes.

```json
{
  "type": "inlineItem",
  "item": "74619345"
}
```

### `inlineBlock`

It does not allow children nodes.

```json
{
  "type": "inlineBlock",
  "item": "1238455312"
}
```

### `heading`

An `heading` node represents a heading of a section. Using the `level` attribute you can control the rank of the heading.

It allows the following children nodes: [`span`](/docs/structured-text/dast.md#span), [`link`](/docs/structured-text/dast.md#link), [`itemLink`](/docs/structured-text/dast.md#itemLink), [`inlineItem`](/docs/structured-text/dast.md#inlineItem) and [`inlineBlock`](/docs/structured-text/dast.md#inlineBlock).

```json
{
  "type": "heading",
  "level": 2,
  "children": [
    {
      "type": "span",
      "value": "An h2 heading!"
    }
  ]
}
```

### `list`

A `list` node represents a list of items. Unordered lists must have its `style` field set to `bulleted`, while ordered lists, instead, have its `style` field set to `numbered`.

It allows the following children nodes: [`listItem`](/docs/structured-text/dast.md#listItem).

```json
{
  "type": "list",
  "style": "bulleted",
  "children": [
    {
      "type": "listItem",
      "children": [
        {
          "type": "paragraph",
          "children": [
            {
              "type": "span",
              "value": "This is a list item!"
            }
          ]
        }
      ]
    }
  ]
}
```

### `listItem`

A `listItem` node represents an item in a list.

It allows the following children nodes: [`paragraph`](/docs/structured-text/dast.md#paragraph) and [`list`](/docs/structured-text/dast.md#list).

```json
{
  "type": "listItem",
  "children": [
    {
      "type": "paragraph",
      "children": [
        {
          "type": "span",
          "value": "This is a list item!"
        }
      ]
    }
  ]
}
```

### `code`

A `code` node represents a block of preformatted text, such as computer code.

It does not allow children nodes.

```json
{
  "type": "code",
  "language": "javascript",
  "highlight": [1],
  "code": "function greetings() {\n  console.log('Hi!');\n}"
}
```

### `blockquote`

A `blockquote` node is a containter that represents text which is an extended quotation.

It allows the following children nodes: [`paragraph`](/docs/structured-text/dast.md#paragraph).

```json
{
  "type": "blockquote",
  "attribution": "Oscar Wilde",
  "children": [
    {
      "type": "paragraph",
      "children": [
        {
          "type": "span",
          "value": "Be yourself; everyone else is taken."
        }
      ]
    }
  ]
}
```

### `block`

Similarly to [Modular Content](/docs/content-modelling/modular-content.md) fields, you can also embed block records into Structured Text. A `block` node stores a reference to a DatoCMS block record embedded inside the `dast` document.

This type of node can only be put as a direct child of the [`root`](/docs/structured-text/dast.md#root) node.

It does not allow children nodes.

```json
{
  "type": "block",
  "item": "1238455312"
}
```

### `thematicBreak`

A `thematicBreak` node represents a thematic break between paragraph-level elements: for example, a change of scene in a story, or a shift of topic within a section.

It does not allow children nodes.

```json
{
  "type": "thematicBreak"
}
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
    <p>Details: cache-dub4393-DUB 1762214602 2049529908</p>
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

-   **Use ready-made plugins** from the DatoCMS Marketplace designed for manually exporting your data or managing offline backups/restore functionality, like [(Image content)Project Exporter](https://www.datocms.com/marketplace/plugins/i/datocms-plugin-project-exporter.md) or [(Image content)Export To Google Docs](https://www.datocms.com/marketplace/plugins/i/datocms-plugin-export-to-google-docs.md)
    
-   **Write a script using our REST API** ( [Content Management API Overview](/docs/content-management-api.md) ) to programmatically export your data
    
-   **Enterprise customers** can access a [**periodic export feature**](/docs/import-and-export/datocms-site-export-feature.md) managed by DatoCMS, which automatically exports project data to an external cloud provider storage.
    

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
| --- | --- | --- |

| Ease of setup | Very easy and quick to implement | More complex; requires external tools or scripts |
| Data storage location | Within DatoCMS infrastructure | Stored outside DatoCMS (e.g., cloud storage, local) |
| Ease of data restoration | Restore is immediate: a single button click or API call | Complex to restore |
| Risk factors | Pointless if you aim to protect against DatoCMS-related failures | Very safe from DatoCMS failures |
| Automation | Possible through the Automatic Environment Backups plugin or periodic API calls | Possible via existing plugins or custom scripts |
| Management complexity | Low — handled entirely within DatoCMS | High — requires managing storage, automation, and restoration |
| Cost | Creating backup environments will raise the overall number of records in your project, possibly incurring extra costs. | Depends on the strategy: custom export scripts can increase the number of API calls per month, while Project Exports is an additional Enterprise feature |
| Best for... | Users who trust DatoCMS but need a safety net for human errors | Users who want full control and protection from DatoCMS-related failures |

---

# Enterprise Project Exports

The **Project Export** feature allows **Enterprise customers** to export all content and assets from their DatoCMS project to their own **AWS S3 bucket**. This export provides a structured snapshot of your data in JSON format, along with all uploaded assets.

> [!POSITIVE] Security and integrity of your data is our top priority!
> Our [ISO 27001 certification](https://www-draft.datocms.com/blog/iso-27001) ensures that our architecture incorporates internal backups, delivering a dependable safeguard against data loss. In other words, you can be confident that we adhere to best practices for keeping your data secure.
> 
> This Enterprise functionality serves as an additional layer of protection to ensure your safety and should be utilized as a last resort.

### Key Points to Consider

-   **Enterprise Only**: This feature is available exclusively to Enterprise customers.
    
-   **Not a Backup Solution**: The export does not offer a one-click restoration process.
    
-   **Primary Environment Only**: Only the primary project environment is included in the export.
    
-   **Automated and Scheduled**: Exports occur on a predefined schedule, with a minimum frequency of **once per month** and a maximum of **once per day**.
    
-   **AWS S3 Storage Required**: Customers must configure their own S3 bucket to receive the exported data.
    

## What is Included in the Export?

The exported data includes:

-   **Schema Models**: Fields and fieldsets.
    
-   **Schema Blocks**: Block definitions and fields.
    
-   **Records**: Current and published versions, including block records.
    
-   **Uploads**: Metadata and references for uploaded assets.
    
-   **Project Settings**: Locales, SEO settings, workflows, and installed plugins.
    
-   **Asset Files**: All uploaded files from the media area.
    

### JSON Snapshots vs. Asset Syncing

While JSON snapshots are periodic and remain unchanged once created, assets are simply synced to their latest versions in the same directory every time. This is why **bucket versioning is recommended**—if an asset is removed from the project, it will also be deleted from the bucket. However, with versioning enabled, you can still retrieve previous versions of deleted assets.

## What is NOT Included?

The export **does not** include:

-   Record revision history
    
-   API tokens, webhooks, and build triggers
    
-   Collaborators, roles, and permissions
    
-   Audit logs and usage statistics
    
-   SSO settings and user accounts
    
-   Any additional metadata not explicitly listed
    

## How to enable Project Export

This feature **cannot be enabled by customers directly**. To set up an export, you must [**contact DatoCMS support**](https://www.datocms.com/support.md?topics=business-partnerships%2Fgeneral-requests) and provide the following AWS S3 details:

-   **S3 Bucket Name**
    
-   **AWS Region**
    
-   **S3 Access Key ID**
    
-   **S3 Secret Access Key**
    

Additionally, you must configure your AWS S3 bucket with:

-   **Public access blocked** (mandatory for security)
    
-   **Bucket versioning enabled** (recommended for data recovery)
    
-   **Lifecycle rules** (optional, for automatic cleanup of old snapshots)
    

Our support team will give you detailed instructions on how to setup everything correctly.

## Export structure

Once configured, each export generates a timestamped snapshot in your S3 bucket. The structure is as follows:

```plaintext
assets/
  project_<ID>/
    file1.png
    file2.mp4

content/
  project_<ID>/
    snapshot_<TIMESTAMP>/
      models/
      records/
      uploads/
      workflows/
      site.json
```

The presence of a `canary.txt` file in a snapshot directory confirms that the export was completed successfully.

## JSON files format

JSON files in the snapshots are similar to the JSON content you can fetch from our [Content Management API](/docs/content-management-api.md), with some changes to reduce scattering across multiple files.

### Schema

For each schema model/block model, a file following this path is present in the bucket:

`content/project_<ID>/snapshot_<TIMESTAMP>/models/<api_key>.json`

For instance:

`content/project_999/snapshot_1721033044/models/article.json`

The `data` key contains the `item_type` resource. `Fields` and `fieldsets` are referenced by their IDs, and their full payload is present in the `included` key.

```json5
{
  "data": {
    "id": "UVP2y5QPToWPXqJbMszyFg",
    "type": "item_type",
    "attributes": {
      "api_key": "article",
      "name": "Article",
      // ... the rest of item_type attributes
    },
    "relationships": {
      "fields": {
        "data": [
          { "id": "InMbgf7BSo2TDG4HYGb2Ug", "type": "field" }
        ]
      },
      "fieldsets": {
        "data": [
          { "id": "bwk17lanRYCOvXKztPp5PA", "type": "fieldset" }
        ]
      },
      "workflow": {
        "data": { "id": "MQLtfJv4Q22nKUoHEQ3b9A", "type": "workflow" }
      }
    },
    "meta": { "has_singleton_item": false }
  },
  "included": [
    {
      "id": "InMbgf7BSo2TDG4HYGb2Ug",
      "type": "field",
      "attributes": {
        "label": "Content",
        // ... the rest of field attributes
      },
      "relationships": {
        "item_type": {
          "data": { "id": "UVP2y5QPToWPXqJbMszyFg", "type": "item_type" }
        },
        "fieldset": {
          "data": { "id": "bwk17lanRYCOvXKztPp5PA", "type": "fieldset" }
        }
      }
    },
    {
      "id": "bwk17lanRYCOvXKztPp5PA",
      "type": "fieldset",
      "attributes": {
        "title": "Group 1",
        // ... the rest of fieldset attributes
      },
      "relationships": {
        "item_type": {
          "data": { "id": "UVP2y5QPToWPXqJbMszyFg", "type": "item_type" }
        }
      }
    }
  ]
}
```

### Records

For each schema model, multiple files following this template are present in the bucket:

```plaintext
content/project_<ID>/snapshot_<TIMESTAMP>/records/<schema_model_api_key>/current/batch_<batch_increment_number>.json
content/project_<ID>/snapshot_<TIMESTAMP>/records/<schema_model_api_key>/published/batch_<batch_increment_number>.json
```

For instance:

```plaintext
content/project_999/snapshot_1721033044/records/article/current/batch_000.json
content/project_999/snapshot_1721033044/records/article/current/batch_001.json
content/project_999/snapshot_1721033044/records/article/published/batch_000.json
content/project_999/snapshot_1721033044/records/article/published/batch_001.json
```

The `current` prefix contains the records' current versions (the latest version available, as seen in the admin interface). The `published` prefix contains records' published versions.

The same record ID can be present in both trees (`current` and `published`) if it has both a current and a published version. The same version can be present in both trees if it's at the same time the current and published version of the record.

Versions include their block records, similar to using the `nested=true` query parameter in our Content Management API.

Each `batch_XXX.json` contains several versions under the `data` key and their order is not predictable.

```json5
{
  "data": [
    {
      "id": "ZrKQnn5AQBiZ4CTX8eyu8Q",
      "type": "item",
      "attributes": {
        "title": "A trip to Florence!",
        "content": {
          "en": [
            {
              "type": "item",
              "attributes": {
                "text": "Beautiful!"
                // ... the rest of block record attributes
              },
              "relationships": {
                "item_type": {
                  "data": {
                    "id": "JfkKRx-FRJONbco_hHOS5Q",
                    "type": "item_type"
                  }
                }
              },
              "id": "afzDcUT0RHOduJbr8L_ZmA"
            }
          ]
        }
        // ... the rest of record attributes
      },
      "relationships": {
        "item_type": {
          "data": { "id": "UVP2y5QPToWPXqJbMszyFg", "type": "item_type" }
        },
        "creator": { "data": { "id": "24527", "type": "account" } }
      },
      "meta": {
        // ...
      }
    },
    {
      // .. other current versions
    }
  ]
}
```

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

**Your Contentful Space ID:** you can find it under *Settings > General settings*:

[(Image content)](https://www.datocms-assets.com/205/1716220233-contentful-space-id.png?auto=format&fit=max&w=2000)

A **Contentful content management token**: you can create one under *Settings > API keys* and then clicking the *Add API key* button:

[(Image content)](https://www.datocms-assets.com/205/1716220432-contentful-add-api-key.png?auto=format&fit=max&w=2000)

Your **DatoCMS full-access API token**: first create a new project, then go to *Project settings > API tokens*, click on **"Add a new access token"**, and choose or create a **role** with read-write permissions. You can select the default *Admin* role, or create a more granular one, depending on your needs.

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

-   DatoCMS doesn't provide an array of strings field, so data of this kind will be converted in a single string field with comma separated values;
    
-   Contentful API doesn't expose presentation settings for fields, so all text fields will be set as Markdown editors (you will be able to change the presentation mode later from the DatoCMS interface);
    
-   DatoCMS doesn't allow a multi-paragraph text field to be the Model title, so if that's the case, no title field will be set;
    
-   While Contentful's reference field allows not specifying the list of content types that can be referenced, DatoCMS instead requires an explicit list. Therefore, in these cases, the task will set the entire catalog of models as the explicit list.

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
    
3.  Your DatoCMS full-access API token: first create a new project, then go to *Project settings > API tokens*, click on **"Add a new API token"**, and choose or create a **role** with read-write permissions. You can select the default *Admin* role, or create a more granular one, depending on your needs.
    

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

-   Our importer only copies pages and posts: custom post types won't be imported;
    
-   There are many different plugins to manage localizations in WordPress-land. For now, if you have a multi-lingual website, we’ll currently only import the content created for the main language.
    
-   Same thing goes for SEO, sliders and other web elements managed by plugins. They won’t be imported.

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
    <p>Details: cache-dub4321-DUB 1762214524 1942861991</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

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

-   adding custom field editors to improve the editor experience;
    
-   managing content versions for running A/B tests on structured content using personalization tools;
    
-   tailoring the default entry editor to suit your specific needs;
    
-   seamlessly integrating DatoCMS with third-party software and services.
    

For some real-world examples, you can take a look at our [Marketplace](https://www.datocms.com/marketplace/plugins.md), which already offers 100+ open-source plugins.

### How plugins work

The way in which plugins modify the default DatoCMS interface is through the concept of **hooks**.

The SDK provides a set of locations where plugins can intervene by adding functionality (ie. custom pages, sidebar panels, etc.), and for each of these locations a set of hooks are provided.

Hooks serve three main purposes:

-   **Declare the plugin intentions** (e.g., "I want to add a tab in the top navigation bar of DatoCMS that points to a custom page X").
    
-   **Render the content for the** `**iframe**` associated with the declared custom locations (e.g., "when the user enters custom page X, let me render my stuff")
    
-   **Intercept specific events** happening on the interface, and execute custom code, or change the way the regular interface behaves.
    

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

-   You'll need the latest LTS version of [Node.js](https://nodejs.org/en/) installed on your machine. If you don't have `Node.js` installed, you can download it [here](https://nodejs.org/en/download/).
    
-   You should be comfortable using your computer’s command line and text editor.
    
-   You’ll need to be able to read and write HTML, CSS, and JavaScript.
    
-   You should be familiar with installing software using [NPM](https://www.npmjs.com/).
    
-   You'll need a free DatoCMS account and a project. You can sign up [here](https://dashboard.datocms.com/signup).
    
-   You'll need either Firefox or Chrome. Safari currently does not work due to a limitation in how it handles insecure iframes pointing to `localhost`.
    

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

-   Provide a name and (optionally) a description for your plugin. This can be whatever you want; we chose **Record Metrics** for this tutorial.
    
-   Enter the *Entry point URL*. This is the URL where our app is running. Since we are running our app locally during development, the URL is `http://localhost:5173`. (Later, once you [deploy](/docs/plugin-sdk/build-your-first-plugin.md#deployment) your plugin, you can change the entry point to another location.)
    
-   Specify any [special permission](/docs/plugin-sdk/additional-permissions.md) you want to grant to the plugin. For this tutorial, we don't need any of them.
    

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

-   The `ctx.fields` object holds all the currently loaded fields for the current project;
    
-   The `ctx.itemType` object holds the model for the current record;
    
-   The `ctx.formValues` object holds the current values present in the record form;
    

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

  const allText = textFields
    .map((field) => ctx.formValues[field.attributes.api_key])
    .join(' ');

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

# Real-world examples

To understand how all the pieces fit together, many developers find useful to read the complete source code of an already published plugin.

Luckily, most of the plugins published in the [Marketplace](https://www.datocms.com/marketplace/plugins.md) are 100% open source: you can easily open their GitHub repository and inspect their code from the “Visit homepage” button present in their details page:

(Image content)

> [!WARNING] Be careful what you read!
> Be careful, because some of the plugins in the Marketplace may have been built using a legacy version of the SDK, **so they might not be a good example to follow!**
> 
> Always check in the `package.json` that they're requiring the `datocms-plugin-sdk` NPM package, and not the legacy one (which is called `datocms-plugins-sdk`, with `plugins` in plural form).

## Always up-to-date official plugins

We personally take care of keeping a number of plugins in the Marketplace up to date, so you can always be sure they run on the most up-to-date version of the SDK. It might be a good idea to start studying with one of them!

They are all stored in a single GitHub monorepo:

💻 **Official plugins monorepo:** [https://github.com/datocms/plugins](https://github.com/datocms/plugins)

If you'd like to have more examples, don't be afraid to ask, we are here to help you!

[

(Image content)

Intro to the Plugin Ecosystem

Play video »

](https://www.datocms.com/user-guides/the-basics/intro-to-the-plugin-ecosystem.md)

[

(Image content)

Exploring DatoCMS Plugins that help authors

Play video »

](https://youtu.be/PDLCgSFjrac)

---

# What hooks are

Hooks are nothing but named JS functions that plugins can implement within their code.

A number of different hooks are made available by the SDK, each with a specific purpose and function. **By implementing hooks, plugins can add functionalities or tweak the interface** of a project in a controlled and safe way.

### What can plugins do?

You can read in detail about all the hooks in the following sections of the guide, but to give an overall view, a plugin can implement hooks to:

-   [Manage their config screen and user settings](/docs/plugin-sdk/config-screen.md)
    
-   [Render custom pages and link them from the DatoCMS navigation bars](/docs/plugin-sdk/custom-pages.md)
    
-   [Show custom sidebar panels when editing a record](/docs/plugin-sdk/sidebar-panels.md)
    
-   [Tweak/enhance the way fields can be edited](/docs/plugin-sdk/field-extensions.md)
    
-   [Open custom modals](/docs/plugin-sdk/modals.md)
    
-   [Intercept specific events happening on the interface, and execute custom code, or change the way the regular interface behaves.](/docs/plugin-sdk/event-hooks.md)
    

Other hooks will be made available in future versions of the SDK, to let plugins intervene in other places of the DatoCMS interface.

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
    <p>Details: cache-dub4372-DUB 1762214544 4097443796</p>
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
    <p>Details: cache-dub4382-DUB 1762214544 1765006056</p>
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
    <p>Details: cache-dub4375-DUB 1762214547 2717228819</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

# Outlets

Through plugins, it's possible to customize various areas of the DatoCMS interface. We call these customizable areas "outlets".

Outlets are essentially iframes where plugin developers can render custom content, providing enhanced functionality and user experiences within the DatoCMS ecosystem.

Outlets offer the ability to:

-   Access information related to records, projects, or logged-in users
    
-   Make calls to DatoCMS to produce various effects and interact with the main application (e.g., changing values, navigating, triggering notifications, opening modals)
    
-   Customize the user interface to fit specific workflow needs
    

If you prefer, a form outlet can also be completely hidden from the interface (setting his height to zero), and work under the cover to tweak the default behaviour of DatoCMS.

##### Types of Outlets

DatoCMS allows you to configure outlets in various areas of the interface.

# Record Form Outlets

Record form outlets allow you to add custom areas above the record editing form:

[(Image content)](https://www.datocms-assets.com/205/1717085446-outlet-edited.png?auto=format&fit=max&w=2000)

#### Implementing a Record Form Outlet

The first step is to implement the [`itemFormOutlets`](/docs/plugin-sdk/form-outlets.md#itemFormOutlets) hook, to declare our intent to add the outlet to the form:

```typescript
import { connect, ItemFormOutletsCtx } from 'datocms-plugin-sdk';

connect({
  itemFormOutlets(model, ctx: ItemFormOutletsCtx) {
    return [
      {
        id: 'myOutlet',
        initialHeight: 100,
      },
    ];
  },
});
```

The `initialHeight` property sets the initial height of the frame, while the plugin itself is loading. It can also be useful to completely hide the outlet, by passing the value zero to it.

The code above will add the outlet to the form of every record in our project, but you can also [add some settings to the plugin](/docs/plugin-sdk/config-screen.md) to ie. let the final user pick only some specific models:

```typescript
itemFormOutlets(model, ctx: ItemFormOutletsCtx) {
  const { modelApiKeys } = ctx.plugin.attributes.parameters;

  if (!modelApiKeys.includes(model.attributes.api_key)) {
    // Don't add the outlet!
    return [];
  }

  // Add the outlet!
}
```

The final step is to actually render the outlet itself by implementing the [`renderItemFormOutlet`](/docs/plugin-sdk/form-outlets.md#renderItemFormOutlet) hook.

Inside of this hook we can initialize React and render a custom component, passing down as a prop the second `ctx` argument, which provides a series of information and methods for interacting with the main application:

```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { connect, RenderItemFormOutletCtx, ItemFormOutletsCtx } from 'datocms-plugin-sdk';

connect({
  itemFormOutlets(model, ctx: ItemFormOutletsCtx) { ... },
  renderItemFormOutlet(
    outletId,
    ctx: RenderItemFormOutletCtx,
  ) {
    ReactDOM.render(
      <React.StrictMode>
        <MyCustomOutlet ctx={ctx} />
      </React.StrictMode>,
      document.getElementById('root'),
    );
  },
});
```

A plugin might render different types of form outlets, so we can use the `outletId` argument to know which one we are requested to render, and write a specific React component for each of them.

```tsx
import { Canvas } from 'datocms-react-ui';

function MyCustomOutlet({ ctx }) {
  return (
    <Canvas ctx={ctx}>
      Hello from the record form outlet!
    </Canvas>
  );
}
```

> [!WARNING] Always use the canvas!
> If you want to render something inside the outlet, it is important to wrap the content inside the `Canvas` component, so that the iframe will continuously auto-adjust its size based on the content we're rendering, and to give our app the look and feel of the DatoCMS web app.
> 
> If you want the outlet to be hidden from the interface, just return `null` and set an `initialHeight: 0` in the `itemFormOutlets` hook.

# Record Collection Outlets

Record collection outlets allow you to add custom areas to the page that displays a collection of records for a specific model.

[(Image content)](https://www.datocms-assets.com/205/1728551253-screenshot-2024-10-10-at-11-04-52.png?auto=format&fit=max&w=2000)

[(Image content)](https://www.datocms-assets.com/205/1728551308-screenshot-2024-10-10-at-11-05-25.png?auto=format&fit=max&w=2000)

The implementation is exactly the same as the one we just saw for the Record Form Outlets. The only thing that changes is the hooks to be used:

-   To declare the intention to offer Record Collection Outlets, use [`itemCollectionOutlets`](/docs/plugin-sdk/form-outlets.md#itemCollectionOutlets);
    
-   To actually render the outlets, use [`renderItemCollectionOutlet`](/docs/plugin-sdk/form-outlets.md#renderItemCollectionOutlet).
    

Here's a full example:

```typescript
import React from 'react';
import ReactDOM from 'react-dom';
import { connect, ItemCollectionOutletsCtx, RenderItemCollectionOutletCtx } from 'datocms-plugin-sdk';
import { Canvas, Button } from 'datocms-react-ui';

connect({
  itemCollectionOutlets(model, ctx: ItemCollectionOutletsCtx) {
    // Optional: Add conditions to show the outlet only for specific models
    const { modelApiKeys } = ctx.plugin.attributes.parameters;
    if (!modelApiKeys.includes(model.attributes.api_key)) {
      return [];
    }

    return [
      {
        id: 'myCollectionOutlet',
        initialHeight: 100,
      },
    ];
  },
  renderItemCollectionOutlet(outletId, ctx: RenderItemCollectionOutletCtx) {
    render(<MyCustomCollectionOutlet ctx={ctx} />);
  },
});

function MyCustomCollectionOutlet({ ctx }) {
  return (
    <Canvas ctx={ctx}>
      <h3>Custom Collection Outlet</h3>
      <p>This outlet appears above the record listing for {ctx.itemType.attributes.name}.</p>
    </Canvas>
  );
}
```

#### `itemCollectionOutlets(itemType: ItemType, ctx)`

Use this function to declare custom outlets to be shown at the top of a collection of records of a particular model.

##### Return value

The function must return: `ItemCollectionOutlet[]`.

##### Context object

The following properties and methods are available in the `ctx` argument:

#### `renderItemCollectionOutlet(itemCollectionOutletId: string, ctx)`

This function will be called when the plugin needs to render an outlet defined by the `itemCollectionOutlets()` hook.

##### Context object

The following properties and methods are available in the `ctx` argument:

<details>
<summary>Hook-specific properties and methods</summary>

This hook exposes additional information and operations specific to the context in which it operates.

<details>
<summary>ctx.itemCollectionOutletId: string</summary>

The ID of the outlet that needs to be rendered.

[View on Github](https://github.com/datocms/plugins-sdk/blob/master/packages/sdk/src/hooks/renderItemCollectionOutlet.ts#L24)

</details>

<details>
<summary>ctx.itemType: ItemType</summary>

The model for which the outlet is being rendered.

[View on Github](https://github.com/datocms/plugins-sdk/blob/master/packages/sdk/src/hooks/renderItemCollectionOutlet.ts#L26)

</details>

</details>

#### `itemFormOutlets(itemType: ItemType, ctx)`

Use this function to declare custom outlets to be shown at the top of the record's editing page.

##### Return value

The function must return: `ItemFormOutlet[]`.

##### Context object

The following properties and methods are available in the `ctx` argument:

#### `renderItemFormOutlet(itemFormOutletId: string, ctx)`

This function will be called when the plugin needs to render an outlet defined by the `itemFormOutlets()` hook.

##### Context object

The following properties and methods are available in the `ctx` argument:

<details>
<summary>Hook-specific properties and methods</summary>

This hook exposes additional information and operations specific to the context in which it operates.

<details>
<summary>Item form additional methods</summary>

These methods can be used to interact with the form that's being shown to the end-user to edit a record.

<details>
<summary>ctx.toggleField(path: string, show: boolean) => Promise<void></summary>

Hides/shows a specific field in the form. Please be aware that when a field is hidden, the field editor for that field will be removed from the DOM itself, including any associated plugins. When it is shown again, its plugins will be reinitialized.

[View on Github](https://github.com/datocms/plugins-sdk/blob/master/packages/sdk/src/ctx/commonExtras/itemForm.ts#L68)

```ts
const fieldPath = prompt(
  'Please insert the path of a field in the form',
  ctx.fieldPath,
);

await ctx.toggleField(fieldPath, true);
```

</details>
<details>
<summary>ctx.disableField(path: string, disable: boolean) => Promise<void></summary>

Disables/re-enables a specific field in the form.

[View on Github](https://github.com/datocms/plugins-sdk/blob/master/packages/sdk/src/ctx/commonExtras/itemForm.ts#L83)

```ts
const fieldPath = prompt(
  'Please insert the path of a field in the form',
  ctx.fieldPath,
);

await ctx.disableField(fieldPath, true);
```

</details>
<details>
<summary>ctx.scrollToField(path: string, locale?: string) => Promise<void></summary>

Smoothly navigates to a specific field in the form. If the field is localized it will switch language tab and then navigate to the chosen field.

[View on Github](https://github.com/datocms/plugins-sdk/blob/master/packages/sdk/src/ctx/commonExtras/itemForm.ts#L100)

```ts
const fieldPath = prompt(
  'Please insert the path of a field in the form',
  ctx.fieldPath,
);

await ctx.scrollToField(fieldPath);
```

</details>
<details>
<summary>ctx.setFieldValue(path: string, value: unknown) => Promise<void></summary>

Changes a specific path of the `formValues` object.

[View on Github](https://github.com/datocms/plugins-sdk/blob/master/packages/sdk/src/ctx/commonExtras/itemForm.ts#L115)

```ts
const fieldPath = prompt(
  'Please insert the path of a field in the form',
  ctx.fieldPath,
);

await ctx.setFieldValue(fieldPath, 'new value');
```

</details>
<details>
<summary>ctx.formValuesToItem(...)</summary>

Takes the internal form state, and transforms it into an Item entity compatible with DatoCMS API.

When `skipUnchangedFields`, only the fields that changed value will be serialized.

If the required nested blocks are still not loaded, this method will return `undefined`.

[View on Github](https://github.com/datocms/plugins-sdk/blob/master/packages/sdk/src/ctx/commonExtras/itemForm.ts#L132)

```ts
await ctx.formValuesToItem(ctx.formValues, false);
```

</details>
<details>
<summary>ctx.itemToFormValues(...)</summary>

Takes an Item entity, and converts it into the internal form state.

[View on Github](https://github.com/datocms/plugins-sdk/blob/master/packages/sdk/src/ctx/commonExtras/itemForm.ts#L145)

```ts
await ctx.itemToFormValues(ctx.item);
```

</details>
<details>
<summary>ctx.saveCurrentItem(showToast?: boolean) => Promise<void></summary>

Triggers a submit form for current record.

[View on Github](https://github.com/datocms/plugins-sdk/blob/master/packages/sdk/src/ctx/commonExtras/itemForm.ts#L157)

```ts
await ctx.saveCurrentItem();
```

</details>

</details>

<details>
<summary>Item form additional properties</summary>

These information describe the current state of the form that's being shown to the end-user to edit a record.

<details>
<summary>ctx.locale: string</summary>

The currently active locale for the record.

[View on Github](https://github.com/datocms/plugins-sdk/blob/master/packages/sdk/src/ctx/commonExtras/itemForm.ts#L12)

</details>

<details>
<summary>ctx.item: Item | null</summary>

If an already persisted record is being edited, returns the full record entity.

[View on Github](https://github.com/datocms/plugins-sdk/blob/master/packages/sdk/src/ctx/commonExtras/itemForm.ts#L17)

</details>

<details>
<summary>ctx.itemType: ItemType</summary>

The model for the record being edited.

[View on Github](https://github.com/datocms/plugins-sdk/blob/master/packages/sdk/src/ctx/commonExtras/itemForm.ts#L19)

</details>

<details>
<summary>ctx.formValues: Record<string, unknown></summary>

The complete internal form state.

[View on Github](https://github.com/datocms/plugins-sdk/blob/master/packages/sdk/src/ctx/commonExtras/itemForm.ts#L21)

</details>

<details>
<summary>ctx.itemStatus: 'new' | 'draft' | 'updated' | 'published'</summary>

The current status of the record being edited.

[View on Github](https://github.com/datocms/plugins-sdk/blob/master/packages/sdk/src/ctx/commonExtras/itemForm.ts#L23)

</details>

<details>
<summary>ctx.isSubmitting: boolean</summary>

Whether the form is currently submitting itself or not.

[View on Github](https://github.com/datocms/plugins-sdk/blob/master/packages/sdk/src/ctx/commonExtras/itemForm.ts#L25)

</details>

<details>
<summary>ctx.isFormDirty: boolean</summary>

Whether the form has some non-persisted changes or not.

[View on Github](https://github.com/datocms/plugins-sdk/blob/master/packages/sdk/src/ctx/commonExtras/itemForm.ts#L27)

</details>

<details>
<summary>ctx.blocksAnalysis: BlocksAnalysis</summary>

Provides information on how many blocks are currently present in the form.

[View on Github](https://github.com/datocms/plugins-sdk/blob/master/packages/sdk/src/ctx/commonExtras/itemForm.ts#L29)

</details>

</details>

<details>
<summary>Properties and methods</summary>

<details>
<summary>ctx.itemFormOutletId: string</summary>

The ID of the outlet that needs to be rendered.

[View on Github](https://github.com/datocms/plugins-sdk/blob/master/packages/sdk/src/hooks/renderItemFormOutlet.ts#L25)

</details>

</details>

</details>

---

# Field extensions

By creating what we call 'field extensions', plugins can change the way in which the fields of a record are presented to the final editor, going beyond the appearance configurations that DatoCMS offers by default.

There are different types of field extensions that can be created, depending on requirements:

#### "Field editor" extensions

They operate on top of a particular field, replacing the default field editor that DatoCMS provides with custom code:

(Image content)

The use cases are varied, and many examples are already on our marketplace, ready to be installed on your project:

-   The Shopify product plugin can be hooked into string fields and completely changes the interface to allow you to browse the products in your Shopify store, then save the ID of the selected product in the string field itself;
    
-   The Hidden field plugin simply hides a specific field from the editor's eyes, while the Conditional fields plugin shows/hides a number of fields when you toggle a particular checkbox field.
    

###### Field editors as sidebar panels

It is also possible to move editor extensions to the right-hand sidebar, giving it the appearance of a collapsible panel. The difference between this mode and a [sidebar panel](/docs/plugin-sdk/sidebar-panels.md) is that this controls a specific field of the record and can use it as a "storage unit" to save internal information, while a sidebar panel is not associated with any particular field.

As an example, the Sidebar notes plugin uses this mode to turn a JSON field into a kind of notepad where you can add virtual post-it notes.

#### "Field addon" field extensions

As the name suggests, addons do not change the way a field is edited, but they add functionality, or provide additional information, directly below the field editor. While only one editor can be set up for each field, it is possible to have several addons per field, each providing its own different functionality:

(Image content)

As examples of use, Yandex Translate adds a button below your localisable text/string fields to automatically translate its content from one locale to another, while Sanitize HTML allows you to clean up the HTML code present in a text field according to various preferences.

> [!POSITIVE] Two sides of the same coin
> Editors and addons are both field extensions, so they have access to exactly the same methods and information. The difference between the two is simply semantics: editors are for editing the field, while addons offer extra functionality.

### How to hook field extensions to a field

The SDK provides an [`overrideFieldExtensions`](/docs/plugin-sdk/field-extensions.md#overrideFieldExtensions) hook that can be implemented to declare the intention to take part in the rendering of any field within the form, either by setting its editor, or by adding some addons, or both.

In this example, we are forcing the use of a custom `starRating` editor for all integer fields that have an ID of `rating`:

```typescript
import { connect, Field, FieldIntentCtx } from 'datocms-plugin-sdk';

connect({
  overrideFieldExtensions(field: Field, ctx: FieldIntentCtx) {
    if (
      field.attributes.field_type === 'integer' &&
      field.attributes.api_key === 'rating'
    ) {
      return {
        editor: { id: 'starRating' },
      };
    }
  },
});
```

Similarly, we can also add an addon extension called `loremIpsumGenerator` below all the text fields:

```typescript
overrideFieldExtensions(field: Field, ctx: FieldIntentCtx) {
  if (field.attributes.field_type === 'text') {
    return {
      addons: [
        { id: 'loremIpsumGenerator' },
      ],
    };
  }
}
```

### Rendering the field extension

At this point, we need to actually render the field extensions by implementing the [`renderFieldExtension`](/docs/plugin-sdk/field-extensions.md#renderFieldExtension) hook.

Inside of this hook we can implement a simple "router" that will present a different React component depending on the field extension that we've requested to render inside the `iframe`.

We also make sure to pass down as a prop the second `ctx` argument, which provides a series of information and methods for interacting with the main application:

```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { connect, RenderFieldExtensionCtx } from 'datocms-plugin-sdk';

function render(component: React.ReactNode) {
  ReactDOM.render(
    <React.StrictMode>{component}</React.StrictMode>,
    document.getElementById('root'),
  );
}

connect({
  renderFieldExtension(fieldExtensionId: string, ctx: RenderFieldExtensionCtx) {
    switch (fieldExtensionId) {
      case 'starRating':
        return render(<StarRatingEditor ctx={ctx} />);
      case 'loremIpsumGenerator':
        return render(<LoremIpsumGenerator ctx={ctx} />);
    }
  },
});
```

The implementation of the Lorem Ipsum component is pretty straightforward: we simply use the `ctx.setFieldValue` function to change the value of the field into a randomly generated string:

```tsx
import { Canvas, Button } from 'datocms-react-ui';
import { loremIpsum } from 'lorem-ipsum';

type PropTypes = {
  ctx: RenderFieldExtensionCtx;
};

function LoremIpsumGenerator({ ctx }: PropTypes) {
  const insertLoremIpsum = () => {
    ctx.setFieldValue(ctx.fieldPath, loremIpsum({ format: 'plain' }));
  };

  return (
    <Canvas ctx={ctx}>
      <Button type="button" onClick={insertLoremIpsum} buttonSize="xxs">
        Add lorem ipsum
      </Button>
    </Canvas>
  );
}
```

It is important to wrap the content inside the `Canvas` component, so that the iframe will continuously auto-adjust its size based on the content we're rendering, and to give our app the look and feel of the DatoCMS web app.

The Star Rating component is quite similar. We get the current field value from `ctx.formValues` and the disabled state from `ctx.disabled`. When the user interacts with the component and changes its value, we call `ctx.setFieldValue` to propagate the change to the main DatoCMS application:

```tsx
import ReactStars from 'react-rating-stars-component';
import get from 'lodash/get';
import { Canvas } from 'datocms-react-ui';
import { RenderFieldExtensionCtx } from 'datocms-plugin-sdk';

type PropTypes = {
  ctx: RenderFieldExtensionCtx;
};

function StarRatingEditor({ ctx }: PropTypes) {
  const currentValue = get(ctx.formValues, ctx.fieldPath);
  const handleChange = (newValue: number) => {
    ctx.setFieldValue(ctx.fieldPath, newValue);
  };
  return (
    <Canvas ctx={ctx}>
      <ReactStars
        size={32}
        isHalf={false}
        edit={!ctx.disabled}
        value={currentValue || 0}
        onChange={handleChange}
      />
    </Canvas>
  );
}
```

Here's the final result:

(Video content)

### Adding user-defined settings into the mix

You might have noticed that our plugin is currently hardcoding some choices, namely:

-   the rules that decide when to apply both our "star rating" and "lorem ipsum" extensions;
    
-   the maximum number of stars to show;
    
-   the length of the "lorem ipsum" text we're generating;
    

If we want, we could make these settings configurable by the user, either by implementing some [global plugin settings](/docs/plugin-sdk/config-screen.md), or by transforming our field extensions into ["manual" extensions](https://www.datocms.com/docs/plugin-sdk/manual-field-extensions.md "/docs/plugin-sdk/sdk/manual-field-extensions").

When to use one strategy or the other is completely up to you, and each has its own advantages/disadvanges.

-   Manual field extensions are, well, manually hooked by the end-user on each field, and for each installation different configuration options can be specified. Given that our star rating extension will most likely be used in a few specific places rather than in all integer fields of the project, manual fields might be the best choice.
    
-   On the other hand, our Lorem Ipsum generator may be convenient in all text fields, so requiring the end user to manually install it everywhere would be unnecessarily tedious. In this case, the choice to force the addon on all fields with the [`overrideFieldExtensions`](/docs/plugin-sdk/field-extensions.md#overrideFieldExtensions) hook is probably the right one.
    

In the [next section](/docs/plugin-sdk/manual-field-extensions.md) we're going to take a much more detailed look at manual field extensions, and we're going to convert our star rating editor into a manual extension.

### Reference Table: Field Types & Internal Names

This table lists the internal names of different DatoCMS field types. It is useful for limiting your field extensions only to specific field types. If you're using TypeScript, you can also get this from the type `FieldAttributes['field_type']` [exported from our CMA client](https://github.com/datocms/js-rest-api-clients/blob/v3.4.1/packages/cma-client/src/generated/SimpleSchemaTypes.ts#L6280-L6308).

For more details on the different DatoCMS field types, please see the [CMA documentation on Fields](/docs/content-management-api/resources/field.md#available-field-types).

| Field Type | Internal Name (for `attributes.field_type`) |
| --- | --- |

| Single-line string | `string` |
| Multi-line text | `text` |
| Boolean | `boolean` |
| Integer | `integer` |
| Float | `float` |
| Date | `date` |
| Date & Time | `date_time` |
| Color | `color` |
| JSON | `json` |
| Location | `lat_lon` |
| SEO and Social | `seo` |
| Slug | `slug` |
| External Video | `video` |
| Single Asset | `file` |
| Asset Gallery | `gallery` |
| Single Link (to another record) | `link` |
| Multiple Links (to other records) | `links` |
| Modular Content | `rich_text` |
| Single Block | `single_block` |
| Structured Text | `structured_text` |

### Side note: `ctx` updates and React useEffect

**This section is only relevant if your plugin has** `**useEffects**` **triggered by context changes.**

Because plugins live inside an iframe, record updates may sometimes cause the `ctx` (context) object to be recreated and passed through the iframe again, triggering a React `useEffect` unexpectedly even if the values appear the same. This is because `useEffect` compares objects by reference, not value equality. A re-created `ctx` object with the same values will still cause React to believe it's changed.

For example, if you update some field values in the CMS (outside your plugin), `ctx.formValues` will update as expected, because those values are different. However, React will also think `ctx.fields` has changed, even though its values remain the same.

Generally this shouldn't be a problem, but if you specifically need to make sure a `useEffect` only runs on actual value changes, we recommend a [custom hook like useDeepCompareEffect()](https://github.com/kentcdodds/use-deep-compare-effect).

#### `overrideFieldExtensions(field: Field, ctx)`

Use this function to automatically force one or more field extensions to a particular field.

##### Return value

The function must return: `FieldExtensionOverride | undefined`.

##### Context object

The following properties and methods are available in the `ctx` argument:

<details>
<summary>Hook-specific properties and methods</summary>

This hook exposes additional information and operations specific to the context in which it operates.

<details>
<summary>ctx.itemType: ItemType</summary>

[View on Github](https://github.com/datocms/plugins-sdk/blob/master/packages/sdk/src/hooks/overrideFieldExtensions.ts#L31)

</details>

</details>

#### `renderFieldExtension(fieldExtensionId: string, ctx)`

This function will be called when the plugin needs to render a field extension (see the `manualFieldExtensions` and `overrideFieldExtensions` functions).

##### Context object

The following properties and methods are available in the `ctx` argument:

<details>
<summary>Hook-specific properties and methods</summary>

This hook exposes additional information and operations specific to the context in which it operates.

<details>
<summary>Field additional properties</summary>

These information describe the current state of the field where this plugin is applied to.

<details>
<summary>ctx.disabled: boolean</summary>

Whether the field is currently disabled or not.

[View on Github](https://github.com/datocms/plugins-sdk/blob/master/packages/sdk/src/ctx/commonExtras/field.ts#L12)

</details>

<details>
<summary>ctx.fieldPath: string</summary>

The path in the `formValues` object where to find the current value for the field.

[View on Github](https://github.com/datocms/plugins-sdk/blob/master/packages/sdk/src/ctx/commonExtras/field.ts#L17)

</details>

<details>
<summary>ctx.field: Field</summary>

The field where the field extension is installed to.

[View on Github](https://github.com/datocms/plugins-sdk/blob/master/packages/sdk/src/ctx/commonExtras/field.ts#L19)

</details>

<details>
<summary>ctx.parentField: Field | undefined</summary>

If the field extension is installed in a field of a block, returns the top level Modular Content/Structured Text field containing the block itself.

[View on Github](https://github.com/datocms/plugins-sdk/blob/master/packages/sdk/src/ctx/commonExtras/field.ts#L24)

</details>

<details>
<summary>ctx.block</summary>

If the field extension is installed in a field of a block, returns the ID of the block — or `undefined` if the block is still not persisted — and the block model.

[View on Github](https://github.com/datocms/plugins-sdk/blob/master/packages/sdk/src/ctx/commonExtras/field.ts#L30)

</details>

</details>

<details>
<summary>Item form additional methods</summary>

These methods can be used to interact with the form that's being shown to the end-user to edit a record.

<details>
<summary>ctx.toggleField(path: string, show: boolean) => Promise<void></summary>

Hides/shows a specific field in the form. Please be aware that when a field is hidden, the field editor for that field will be removed from the DOM itself, including any associated plugins. When it is shown again, its plugins will be reinitialized.

[View on Github](https://github.com/datocms/plugins-sdk/blob/master/packages/sdk/src/ctx/commonExtras/itemForm.ts#L68)

```ts
const fieldPath = prompt(
  'Please insert the path of a field in the form',
  ctx.fieldPath,
);

await ctx.toggleField(fieldPath, true);
```

</details>
<details>
<summary>ctx.disableField(path: string, disable: boolean) => Promise<void></summary>

Disables/re-enables a specific field in the form.

[View on Github](https://github.com/datocms/plugins-sdk/blob/master/packages/sdk/src/ctx/commonExtras/itemForm.ts#L83)

```ts
const fieldPath = prompt(
  'Please insert the path of a field in the form',
  ctx.fieldPath,
);

await ctx.disableField(fieldPath, true);
```

</details>
<details>
<summary>ctx.scrollToField(path: string, locale?: string) => Promise<void></summary>

Smoothly navigates to a specific field in the form. If the field is localized it will switch language tab and then navigate to the chosen field.

[View on Github](https://github.com/datocms/plugins-sdk/blob/master/packages/sdk/src/ctx/commonExtras/itemForm.ts#L100)

```ts
const fieldPath = prompt(
  'Please insert the path of a field in the form',
  ctx.fieldPath,
);

await ctx.scrollToField(fieldPath);
```

</details>
<details>
<summary>ctx.setFieldValue(path: string, value: unknown) => Promise<void></summary>

Changes a specific path of the `formValues` object.

[View on Github](https://github.com/datocms/plugins-sdk/blob/master/packages/sdk/src/ctx/commonExtras/itemForm.ts#L115)

```ts
const fieldPath = prompt(
  'Please insert the path of a field in the form',
  ctx.fieldPath,
);

await ctx.setFieldValue(fieldPath, 'new value');
```

</details>
<details>
<summary>ctx.formValuesToItem(...)</summary>

Takes the internal form state, and transforms it into an Item entity compatible with DatoCMS API.

When `skipUnchangedFields`, only the fields that changed value will be serialized.

If the required nested blocks are still not loaded, this method will return `undefined`.

[View on Github](https://github.com/datocms/plugins-sdk/blob/master/packages/sdk/src/ctx/commonExtras/itemForm.ts#L132)

```ts
await ctx.formValuesToItem(ctx.formValues, false);
```

</details>
<details>
<summary>ctx.itemToFormValues(...)</summary>

Takes an Item entity, and converts it into the internal form state.

[View on Github](https://github.com/datocms/plugins-sdk/blob/master/packages/sdk/src/ctx/commonExtras/itemForm.ts#L145)

```ts
await ctx.itemToFormValues(ctx.item);
```

</details>
<details>
<summary>ctx.saveCurrentItem(showToast?: boolean) => Promise<void></summary>

Triggers a submit form for current record.

[View on Github](https://github.com/datocms/plugins-sdk/blob/master/packages/sdk/src/ctx/commonExtras/itemForm.ts#L157)

```ts
await ctx.saveCurrentItem();
```

</details>

</details>

<details>
<summary>Item form additional properties</summary>

These information describe the current state of the form that's being shown to the end-user to edit a record.

<details>
<summary>ctx.locale: string</summary>

The currently active locale for the record.

[View on Github](https://github.com/datocms/plugins-sdk/blob/master/packages/sdk/src/ctx/commonExtras/itemForm.ts#L12)

</details>

<details>
<summary>ctx.item: Item | null</summary>

If an already persisted record is being edited, returns the full record entity.

[View on Github](https://github.com/datocms/plugins-sdk/blob/master/packages/sdk/src/ctx/commonExtras/itemForm.ts#L17)

</details>

<details>
<summary>ctx.itemType: ItemType</summary>

The model for the record being edited.

[View on Github](https://github.com/datocms/plugins-sdk/blob/master/packages/sdk/src/ctx/commonExtras/itemForm.ts#L19)

</details>

<details>
<summary>ctx.formValues: Record<string, unknown></summary>

The complete internal form state.

[View on Github](https://github.com/datocms/plugins-sdk/blob/master/packages/sdk/src/ctx/commonExtras/itemForm.ts#L21)

</details>

<details>
<summary>ctx.itemStatus: 'new' | 'draft' | 'updated' | 'published'</summary>

The current status of the record being edited.

[View on Github](https://github.com/datocms/plugins-sdk/blob/master/packages/sdk/src/ctx/commonExtras/itemForm.ts#L23)

</details>

<details>
<summary>ctx.isSubmitting: boolean</summary>

Whether the form is currently submitting itself or not.

[View on Github](https://github.com/datocms/plugins-sdk/blob/master/packages/sdk/src/ctx/commonExtras/itemForm.ts#L25)

</details>

<details>
<summary>ctx.isFormDirty: boolean</summary>

Whether the form has some non-persisted changes or not.

[View on Github](https://github.com/datocms/plugins-sdk/blob/master/packages/sdk/src/ctx/commonExtras/itemForm.ts#L27)

</details>

<details>
<summary>ctx.blocksAnalysis: BlocksAnalysis</summary>

Provides information on how many blocks are currently present in the form.

[View on Github](https://github.com/datocms/plugins-sdk/blob/master/packages/sdk/src/ctx/commonExtras/itemForm.ts#L29)

</details>

</details>

<details>
<summary>Properties and methods</summary>

<details>
<summary>ctx.fieldExtensionId: string</summary>

The ID of the field extension that needs to be rendered.

[View on Github](https://github.com/datocms/plugins-sdk/blob/master/packages/sdk/src/hooks/renderFieldExtension.ts#L29)

</details>

<details>
<summary>ctx.parameters: Record<string, unknown></summary>

The arbitrary `parameters` of the field extension.

[View on Github](https://github.com/datocms/plugins-sdk/blob/master/packages/sdk/src/hooks/renderFieldExtension.ts#L31)

</details>

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
    <p>Details: cache-dub4371-DUB 1762214533 3160809062</p>
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
    <p>Details: cache-dub4358-DUB 1762214540 1734875079</p>
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
    <p>Details: cache-dub4327-DUB 1762214548 4098279546</p>
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
    <p>Details: cache-dub4335-DUB 1762214555 2931058100</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

# Opening modals

Within all the `renderXXX` hooks — that is, those that have the task of presenting a custom interface part to the user — it is possible to open custom modal dialogs to "get out" of the reduced space that the `iframe` provides, and get more room to build more complex interfaces.

Suppose our plugin implements a [custom page](/docs/plugin-sdk/custom-pages.md) accessible from the top navigation bar:

```typescript
import React from 'react';
import ReactDOM from 'react-dom';
import { connect, MainNavigationTabsCtx, RenderPageCtx } from 'datocms-plugin-sdk';
import { Canvas } from 'datocms-react-ui';

function render(component: React.ReactNode) {
  ReactDOM.render(
    <React.StrictMode>{component}</React.StrictMode>,
    document.getElementById('root'),
  );
}

connect({
  mainNavigationTabs(ctx: MainNavigationTabsCtx) {
    return [
      {
        label: 'Welcome',
        icon: 'igloo',
        pointsTo: {
          pageId: 'welcome',
        },
      },
    ];
  },
  renderPage(pageId, ctx: RenderPageCtx) {
    switch (pageId) {
      case 'welcome':
        return render(<WelcomePage ctx={ctx} />);
    }
  },
});

type PropTypes = {
  ctx: RenderPageCtx;
};

function WelcomePage({ ctx }: PropTypes) {
  return <Canvas ctx={ctx}>Hi!</Canvas>;
}
```

Within the `ctx` argument you can find the function `openModal()`, which triggers the opening of a modal:

```typescript
import { Canvas, Button } from 'datocms-react-ui';

function WelcomePage({ ctx }: PropTypes) {
  const handleOpenModal = async () => {
    const result = await ctx.openModal({
      id: 'customModal',
      title: 'Custom title!',
      width: 'l',
      parameters: { name: 'Mark' },
    });
    ctx.notice(result);
  };

  return (
    <Canvas ctx={ctx}>
      <Button type="button" onClick={handleOpenModal}>
        Open modal!
      </Button>
    </Canvas>
  );
}
```

The `openModal()` function offers various rendering options, for example you can set its size and title. Interestingly, the function returns a promise, which will be resolved when the modal is closed by the user.

You can specify what to render inside the modal by implementing a new hook called [`renderModal`](/docs/plugin-sdk/modals.md#renderModal) which, similarly to what we did with custom pages, initializes React with a custom component:

```typescript
connect({
  renderModal(modalId: string, ctx: RenderModalCtx) {
    switch (modalId) {
      case 'customModal':
        return render(<CustomModal ctx={ctx} />);
    }
  },
});
```

You are free to fill the modal with the information you want, and you can access the parameters specified when opening the modal through `ctx.parameters`:

```typescript
import { Canvas } from 'datocms-react-ui';

type PropTypes = {
  ctx: RenderModalCtx;
};

function CustomModal({ ctx }: PropTypes) {
  return (
    <Canvas ctx={ctx}>
      <div style={{ fontSize: 'var(--font-size-xxxl)', fontWeight: '500' }}>
        Hello {ctx.parameters.name}!
      </div>
    </Canvas>
  );
}
```

As with any other hook, it is important to wrap the content inside the `Canvas` component, so that the iframe will continuously auto-adjust its size based on the content we're rendering, and to give our app the look and feel of the DatoCMS web app.

### Closing the modal

If the modal will be closed through the close button provided by the interface, the promise `openModal()` will be resolved with value `null`.

You can also decide not to show a "close" button:

```typescript
const result = await sdk.openModal({
  id: 'customModal',
  // ...
  closeDisabled: true,
});
```

In this case the user will only be able to close the modal via an interaction of your choice (custom buttons, for example):

```typescript
import { Canvas, Button } from 'datocms-react-ui';

function CustomModal({ ctx }: PropTypes) {
  const handleClose = (returnValue: string) => {
    ctx.resolve(returnValue);
  };

  return (
    <Canvas ctx={ctx}>
      Hello {ctx.parameters.name}!
      <Button type="button" onClick={handleClose.bind(null, 'a')}>Close A</Button>
      <Button type="button" onClick={handleClose.bind(null, 'b')}>Close B</Button>
    </Canvas>;
}
```

The `ctx.resolve()` function will close the modal, and resolve the original `openModal()` promise with the value you passed.

#### `renderModal(modalId: string, ctx)`

This function will be called when the plugin requested to open a modal (see the `openModal` hook).

##### Context object

The following properties and methods are available in the `ctx` argument:

<details>
<summary>Hook-specific properties and methods</summary>

This hook exposes additional information and operations specific to the context in which it operates.

<details>
<summary>ctx.modalId: string</summary>

The ID of the modal that needs to be rendered.

[View on Github](https://github.com/datocms/plugins-sdk/blob/master/packages/sdk/src/hooks/renderModal.ts#L17)

</details>

<details>
<summary>ctx.parameters: Record<string, unknown></summary>

The arbitrary `parameters` of the modal declared in the `openModal` function.

[View on Github](https://github.com/datocms/plugins-sdk/blob/master/packages/sdk/src/hooks/renderModal.ts#L22)

</details>

<details>
<summary>ctx.resolve(returnValue: unknown) => Promise<void></summary>

A function to be called by the plugin to close the modal. The `openModal` call will be resolved with the passed return value.

[View on Github](https://github.com/datocms/plugins-sdk/blob/master/packages/sdk/src/hooks/renderModal.ts#L40)

```ts
const returnValue = prompt(
  'Please specify the value to return to the caller:',
  'success',
);

await ctx.resolve(returnValue);
```

</details>

</details>

---

# Event hooks

In addition to all the `render<LOCATION>` hooks, the SDK also exposes a number of hooks that can be useful to intercept specific events happening on the interface, and execute custom code, or change the way the regular interface behaves.

All these event hooks follow the same `on<EVENT>` naming convention.

### Execute custom code when the plugin loads up

There are situations where a plugin needs to execute code as soon as the DatoCMS interface is loaded. For example, a plugin may need to contact third party systems to verify some information, or maybe notify the user in some way.

In these scenarios you can use the [`onBoot`](/docs/plugin-sdk/event-hooks.md#onBoot) hook, and have the guarantee that it will be called as soon as the main DatoCMS application is loaded:

```tsx
import { connect } from 'datocms-plugin-sdk';

connect({
  async onBoot(ctx) {
    ctx.notice('Hi there!');
  }
});
```

Inside this hook there is no point in rendering anything, because it won't be displayed anywhere. For a concrete use case of this hook, please have a look at the chapter [Releasing new plugin versions](/docs/plugin-sdk/releasing-new-plugin-versions.md).

### Intercept actions on records

Another useful group of event hooks can be used to intercept when the user wants to perform a specific action on one (or multiple) records:

-   [`onBeforeItemUpsert`](/docs/plugin-sdk/event-hooks.md#onBeforeItemUpsert): called when the user wants to save a record (both creation or update);
    
-   [`onBeforeItemsDestroy`](/docs/plugin-sdk/event-hooks.md#onBeforeItemsDestroy): called when the user wants to delete one (or more) records;
    
-   [`onBeforeItemsPublish`](/docs/plugin-sdk/event-hooks.md#onBeforeItemsPublish): called when the user wants to publish one (or more) records;
    
-   [`onBeforeItemsUnpublish`](/docs/plugin-sdk/event-hooks.md#onBeforeItemsUnpublish): called when the user wants to unpublish one (or more) records;
    

All these hooks can return the value `false` to stop the relative action from happening.

In the following example we're using the `onBeforeItemUpsert` hook to check if the user is saving articles with the "highlighted" flag turned on, and if that's the case we show them an additional confirmation, to make sure they know what they're doing:

```tsx
import { connect } from 'datocms-plugin-sdk';

connect({
  async onBeforeItemUpsert(createOrUpdateItemPayload, ctx) {
    const item = createOrUpdateItemPayload.data;

    // get the ID of the Article model
    const articleItemTypeId = Object.values(ctx.itemTypes).find(itemType => itemType.attributes.api_key === 'article').id;

    // fast return for any record that's not an Article
    if (item.relationships.item_type.data.id !== articleItemTypeId) {
      return;
    }

    // fast return if the article is not highlighted
    if (!item.attributes.highlighted) {
      return;
    }

    const confirmation = await ctx.openConfirm({
      title: 'Mark Article as highlighted?',
      content: 'Highlighted articles are displayed on the homepage of the site!',
      cancel: { label: 'Cancel', value: false },
      choices: [
        { label: 'Yes, save as highlighted', value: true, intent: 'negative' },
      ],
    });

    if (!confirmation) {
      ctx.notice('The article has not been saved, you can unflag the "highlighted" field.');
      // returning false blocks the action
      return false;
    }
  }
});
```

We can also do something similar to confirm if the user really wants to publish a record. The `onBeforeItemsPublish` hook is also called when the user is selecting multiple records from the collection page, and applying a batch publish operation:

```tsx
import { connect } from 'datocms-plugin-sdk';

connect({
  async onBeforeItemsPublish(items, ctx) {
    return await ctx.openConfirm({
      title: `Publish ${items.length} records?`,
      content: `This action will make the records visibile on the public website!`,
      cancel: { label: 'Cancel', value: false },
      choices: [{ label: 'Yes, publish', value: true }],
    });
  }
});
```

#### `onBoot(ctx)`

This function will be called once at boot time and can be used to perform ie. some initial integrity checks on the configuration.

##### Context object

The following properties and methods are available in the `ctx` argument:

#### `onBeforeItemsDestroy(items: Item[], ctx)`

This function will be called before destroying records. You can stop the action by returning `false`.

##### Return value

The function must return: `MaybePromise<boolean>`.

##### Context object

The following properties and methods are available in the `ctx` argument:

#### `onBeforeItemsPublish(items: Item[], ctx)`

This function will be called before publishing records. You can stop the action by returning `false`.

##### Return value

The function must return: `MaybePromise<boolean>`.

##### Context object

The following properties and methods are available in the `ctx` argument:

#### `onBeforeItemsUnpublish(items: Item[], ctx)`

This function will be called before unpublishing records. You can stop the action by returning `false`.

##### Return value

The function must return: `MaybePromise<boolean>`.

##### Context object

The following properties and methods are available in the `ctx` argument:

#### `onBeforeItemUpsert(createOrUpdateItemPayload: ItemUpdateSchema | ItemCreateSchema, ctx)`

This hook is called when the user attempts to save a record. You can use it to block record saving.

If you return `false`, the record will NOT be saved. A small on-page error will say "A plugin blocked the action". However, for better UX, consider also using `ctx.alert()` to better explain to the user why their save was blocked.

If you return `true`, the save will proceed as normal.

This hook runs BEFORE serverside validation. You can use it to do your own additional validation before returning. Clientside validations are not affected by this hook, since those occur on individual fields' `onBlur()` events.

##### Return value

The function must return: `MaybePromise<boolean>`.

##### Context object

The following properties and methods are available in the `ctx` argument:

<details>
<summary>Hook-specific properties and methods</summary>

This hook exposes additional information and operations specific to the context in which it operates.

<details>
<summary>ctx.scrollToField(path: string, locale?: string) => Promise<void></summary>

Smoothly navigates to a specific field in the form. If the field is localized it will switch language tab and then navigate to the chosen field.

[View on Github](https://github.com/datocms/plugins-sdk/blob/master/packages/sdk/src/hooks/onBeforeItemUpsert.ts#L47)

```ts
const fieldPath = prompt(
  'Please insert the path of a field in the form',
  ctx.fieldPath,
);

await ctx.scrollToField(fieldPath);
```

</details>

</details>

---

# Customize record presentation

When viewing a collection of items, the records will normally show their title and possibly an image preview (as defined in the model's presentation settings). In this example, the record previews come from the record's `Name` field:

[(Image content)](https://www.datocms-assets.com/205/1739917684-screenshot-001058.png?auto=format&fit=max&w=2000)

But sometimes you may want more advanced control over the presentation of your collections. For example, you might want to make the title dynamically change based on another field in the record or an external API query.

### Basic Example: Data from another field

Maybe you want to show an emoji next to the product name based on its product type:

[(Image content)](https://www.datocms-assets.com/205/1739919444-valencia-product-collection-content-builditeminfo-datocms-2025-02-18-02-57-06-pm.png?auto=format&fit=max&w=2000)

This change is purely cosmetic & superficial, affecting only what your editors see in the collection. It does NOT change the actual data in the record, only its *presentation* inside the DatoCMS UI.

How does it work? We used the [`buildItemPresentationInfo`](/docs/plugin-sdk/customize-presentation.md#buildItemPresentationInfo) hook:

```typescript
import {type BuildItemPresentationInfoCtx, connect, Item} from "datocms-plugin-sdk";

// A schema for our basic example
type ProductRecord = Item & {
  attributes: {
    name: 'string'
    product_type?: 'apple' | 'orange'
  }
}

// This checks to make sure an item is a product based on its API key, and if it is, assert that it is a ProductRecord
function isProductRecord(item: Item, ctx: BuildItemPresentationInfoCtx): item is ProductRecord {
  return ctx.itemTypes[item.relationships.item_type.data.id]?.attributes.api_key === 'product';
}

connect({
  async buildItemPresentationInfo(item: Item, ctx: BuildItemPresentationInfoCtx) {

    // We only want to override records in the `product` model
    if (!isProductRecord(item, ctx)) {
      return undefined; // Return undefined to let the record use its default values
    }

    // Get the record fields
    const {attributes: {product_type, name}} = item

    const fruitEmoji = {
      'apple': '🍎',
      'orange': '🍊',
      'unknown': '❓'
    }

    return {
      title: `${product_type ? fruitEmoji[product_type] : fruitEmoji['unknown']} ${name}`,
    }
  },
});
```

This level of flexibility empowers you to create a unique and tailored user experience that aligns with your goals.

The `buildItemPresentationInfo` hook can be used in numerous ways. For example, you can:

-   Combine multiple fields to present a record
    
-   Generate a preview image on the fly
    
-   Perform asynchronous API requests to third parties to compose the presentation
    

These are just a few examples of what you can do with the `buildItemPresentationInfo` hook. The possibilities are limitless, and you can use this hook to create the exact presentation you need.

The `buildItemPresentationInfo` hook is called every time a record needs to be presented, and it can return an object with `title` and/or `imageUrl` attributes, or `undefined`, if the plugin does not want to interfere with the default presentation at all.

> [!NOTE] imageUrl can also be a Data URL
> While the `imageUrl` attribute normally is a normal URL starting with `https://`, you can also pass a [Data URL](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs). Data URLs can be useful to generate an image on-the-fly in JavaScript (for example, [using canvases](https://davidwalsh.name/convert-image-data-uri-javascript)).

### Advanced Example: Data from an async fetch

Suppose that one of the models in a DatoCMS project is used to represent products in a ecommerce frontend, and that each product record in DatoCMS is linked to a particular Shopify product via its handle.

Shopify holds information like inventory availability, prices and variant images. We don't want to replicate the same information in DatoCMS, but it would be nice to show them inside the DatoCMS interface.

Since the `buildItemPresentationInfo` hook can be an async function, we can make a `fetch` call to the [Shopify Storefront API](https://shopify.dev/docs/api/storefront) (or any other API) and use its response in our collection display.

We'll modify our previous example to show use the result of this fetch instead, based on a new field `shopify_product_handle` (which holds an external ID) and a fake function `fetchShopifyProduct()` (simulating an external fetch):

(Image content)

```typescript
// Updated schema
type ProductRecord = Item & {
  attributes: {
    name: 'string'
    shopify_product_handle: string // A new required field
    // product_type?: 'apple' | 'orange' // No longer needed in the modified example
  }
}

// Updated hook
connect({
  async buildItemPresentationInfo(item: Item, ctx: BuildItemPresentationInfoCtx) {

    // Same function as before
    if (!isProductRecord(item, ctx)) {
      return undefined;
    }

    // Get the new field
    const {attributes: {name, shopify_product_handle}} = item

    // Just an example. In a real use case this would be an awaited fetch.
    const shopifyData = await fetchShopifyProduct(shopify_product_handle);

    const { imageUrl, availableForSale } = shopifyData;

    return {
      title: `${name} (${availableForSale ? '🛍️' : '🚫'})`,
      imageUrl,
    }
  },
})
```

The above is a simplified example using a fake fetch function. In a real project, to perform the actual API call to Shopify, we would need to implement a real fetch function using a real API token and the Shopify store domain. Both can be specified by the final user by [adding some settings to the plugin](/docs/plugin-sdk/config-screen.md).

A more realistic `fetchShopifyProduct` function might be something like this:

```typescript
import { Plugin } from "datocms-plugin-sdk";

type PluginParameters = {
  shopifyDomain: string;
  shopifyAccessToken: string;
}

async function fetchShopifyProduct(handle: string, plugin: Plugin) {
  const parameters = plugin.attributes.parameters as PluginParameters;

  const res = await fetch(
    `https://${parameters.shopifyDomain}.myshopify.com/api/graphql`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': `${parameters.shopifyAccessToken}`,
      },
      body: JSON.stringify({
        query: `query getProduct($handle: String!) {
          product: productByHandle(handle: $handle) {
            title
            availableForSale
            images(first: 1) {
              edges {
                node {
                  src: transformedSrc(crop: CENTER, maxWidth: 200, maxHeight: 200)
                }
              }
            }
          }
        }`,
        variables: { handle },
      }),
    },
  );

  const body = await res.json();

  return {
    title: body.data.product.title,
    availableForSale: body.data.product.availableForSale,
    imageUrl: body.data.product.images.edges[0].node.src,
  };
}
```

#### `buildItemPresentationInfo(item: Item, ctx)`

Use this function to customize the presentation of a record in records collections and "Single link" or "Multiple links" field.

##### Return value

The function must return: `MaybePromise<ItemPresentationInfo | undefined>`.

##### Context object

The following properties and methods are available in the `ctx` argument:

---

# React UI Components

If you're using React to build your plugin, you can take advantage of the `datocms-react-ui` package to get a library of ready-to-use components that are consistent with the UI of the main DatoCMS application. Using this library, you can create a custom interface for your plugin in a very short time.

### Wrap everything in Canvas!

When using the package it is required to wrap the content of your components in a `Canvas` component to apply the styling, and import the `styles.css` stylesheet:

```jsx
import { Canvas } from 'datocms-react-ui';
import 'datocms-react-ui/styles.css';

const MyComponent = ({ ctx }) => {
  return (
    <Canvas ctx={ctx}>
      Place your content here!
    </Canvas>
  );
}
```

The `Canvas` component needs the `ctx` object that is passed as an argument to all the hooks.

If you have a number of nested components below `MyComponent`, you don't need to pass the `ctx` around via props, as any component below `<Canvas>` can use the `useCtx` hook to retrieve it:

```jsx
import { Canvas, useCtx } from 'datocms-react-ui';

const MyComponent = ({ ctx }) => {
  return (
    <Canvas ctx={ctx}>
      <Inner />
    </Canvas>
  );
}

const Inner = () => {
  const ctx = useCtx();

  return (
    <div>Hi!</div>
  );
}
```

# Color palette CSS variables

Within the `Canvas` component, a color palette is made available as a set of CSS variables, allowing you to conform to the theme of the current environment:

###### Preview

###### Code

```js
<Canvas ctx={ctx}>
  <Section title="Text colors">
    <table>
      <tbody>
        <tr>
          <td>
            <code>--base-body-color</code>
          </td>
          <td width="30%">
            <div
              style={{
                width: '30px',
                height: '30px',
                background: 'var(--base-body-color)',
              }}
            />
          </td>
        </tr>
        <tr>
          <td>
            <code>--light-body-color</code>
          </td>
          <td width="30%">
            <div
              style={{
                width: '30px',
                height: '30px',
                background: 'var(--light-body-color)',
              }}
            />
          </td>
        </tr>
        <tr>
          <td>
            <code>--placeholder-body-color</code>
          </td>
          <td width="30%">
            <div
              style={{
                width: '30px',
                height: '30px',
                background: 'var(--placeholder-body-color)',
              }}
            />
          </td>
        </tr>
      </tbody>
    </table>
  </Section>
  <Section title="UI colors">
    <table>
      <tbody>
        <tr>
          <td>
            <code>--light-bg-color</code>
          </td>
          <td width="30%">
            <div
              style={{
                width: '30px',
                height: '30px',
                background: 'var(--light-bg-color)',
              }}
            />
          </td>
        </tr>
        <tr>
          <td>
            <code>--lighter-bg-color</code>
          </td>
          <td width="30%">
            <div
              style={{
                width: '30px',
                height: '30px',
                background: 'var(--lighter-bg-color)',
              }}
            />
          </td>
        </tr>
        <tr>
          <td>
            <code>--disabled-bg-color</code>
          </td>
          <td width="30%">
            <div
              style={{
                width: '30px',
                height: '30px',
                background: 'var(--disabled-bg-color)',
              }}
            />
          </td>
        </tr>
        <tr>
          <td>
            <code>--border-color</code>
          </td>
          <td width="30%">
            <div
              style={{
                width: '30px',
                height: '30px',
                background: 'var(--border-color)',
              }}
            />
          </td>
        </tr>
        <tr>
          <td>
            <code>--darker-border-color</code>
          </td>
          <td width="30%">
            <div
              style={{
                width: '30px',
                height: '30px',
                background: 'var(--darker-border-color)',
              }}
            />
          </td>
        </tr>
        <tr>
          <td>
            <code>--alert-color</code>
          </td>
          <td width="30%">
            <div
              style={{
                width: '30px',
                height: '30px',
                background: 'var(--alert-color)',
              }}
            />
          </td>
        </tr>
        <tr>
          <td>
            <code>--warning-color</code>
          </td>
          <td width="30%">
            <div
              style={{
                width: '30px',
                height: '30px',
                background: 'var(--warning-color)',
              }}
            />
          </td>
        </tr>
        <tr>
          <td>
            <code>--notice-color</code>
          </td>
          <td width="30%">
            <div
              style={{
                width: '30px',
                height: '30px',
                background: 'var(--notice-color)',
              }}
            />
          </td>
        </tr>
        <tr>
          <td>
            <code>--warning-bg-color</code>
          </td>
          <td width="30%">
            <div
              style={{
                width: '30px',
                height: '30px',
                background: 'var(--warning-bg-color)',
              }}
            />
          </td>
        </tr>
        <tr>
          <td>
            <code>--add-color</code>
          </td>
          <td width="30%">
            <div
              style={{
                width: '30px',
                height: '30px',
                background: 'var(--add-color)',
              }}
            />
          </td>
        </tr>
        <tr>
          <td>
            <code>--remove-color</code>
          </td>
          <td width="30%">
            <div
              style={{
                width: '30px',
                height: '30px',
                background: 'var(--remove-color)',
              }}
            />
          </td>
        </tr>
      </tbody>
    </table>
  </Section>
  <Section title="Project-specific colors">
    <table>
      <tbody>
        <tr>
          <td>
            <code>--accent-color</code>
          </td>
          <td width="30%">
            <div
              style={{
                width: '30px',
                height: '30px',
                background: 'var(--accent-color)',
              }}
            />
          </td>
        </tr>
        <tr>
          <td>
            <code>--primary-color</code>
          </td>
          <td width="30%">
            <div
              style={{
                width: '30px',
                height: '30px',
                background: 'var(--primary-color)',
              }}
            />
          </td>
        </tr>
        <tr>
          <td>
            <code>--light-color</code>
          </td>
          <td width="30%">
            <div
              style={{
                width: '30px',
                height: '30px',
                background: 'var(--light-color)',
              }}
            />
          </td>
        </tr>
        <tr>
          <td>
            <code>--dark-color</code>
          </td>
          <td width="30%">
            <div
              style={{
                width: '30px',
                height: '30px',
                background: 'var(--dark-color)',
              }}
            />
          </td>
        </tr>
      </tbody>
    </table>
  </Section>
</Canvas>
```

# Typography CSS variables

Typography is a foundational element in UI design. Good typography establishes a strong, cohesive visual hierarchy and presents content clearly and efficiently to users. Within the `Canvas` component, a set of CSS variables is available allowing your plugin to conform to the overall look&feel of DatoCMS:

###### Preview

###### Code

```js
<Canvas ctx={ctx}>
  <table>
    <tbody>
      <tr>
        <td>
          <code>--font-size-xxs</code>
        </td>
        <td>
          <div style={{ fontSize: 'var(--font-size-xxs)' }}>
            Size XXS
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <code>--font-size-xs</code>
        </td>
        <td>
          <div style={{ fontSize: 'var(--font-size-xs)' }}>Size XS</div>
        </td>
      </tr>
      <tr>
        <td>
          <code>--font-size-s</code>
        </td>
        <td>
          <div style={{ fontSize: 'var(--font-size-s)' }}>Size S</div>
        </td>
      </tr>
      <tr>
        <td>
          <code>--font-size-m</code>
        </td>
        <td>
          <div style={{ fontSize: 'var(--font-size-m)' }}>Size M</div>
        </td>
      </tr>
      <tr>
        <td>
          <code>--font-size-l</code>
        </td>
        <td>
          <div
            style={{
              fontSize: 'var(--font-size-l)',
              fontWeight: 'var(--font-weight-bold)',
            }}
          >
            Size L
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <code>--font-size-xl</code>
        </td>
        <td>
          <div
            style={{
              fontSize: 'var(--font-size-xl)',
              fontWeight: 'var(--font-weight-bold)',
            }}
          >
            Size XL
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <code>--font-size-xxl</code>
        </td>
        <td>
          <div
            style={{
              fontSize: 'var(--font-size-xxl)',
              fontWeight: 'var(--font-weight-bold)',
            }}
          >
            Size XXL
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <code>--font-size-xxxl</code>
        </td>
        <td>
          <div
            style={{
              fontSize: 'var(--font-size-xxxl)',
              fontWeight: 'var(--font-weight-bold)',
            }}
          >
            Size XXXL
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</Canvas>
```

# Spacing CSS variables

The following CSS variables are available as well, to mimick the spacing between elements used by the main DatoCMS application. Negative spacing variables are available too (`--negative-spacing-<SIZE>`).

###### Preview

###### Code

```js
<Canvas ctx={ctx}>
  <table>
    <tbody>
      <tr>
        <td>
          <code>--spacing-s</code>
        </td>
        <td>
          <div
            style={{
              background: 'var(--accent-color)',
              width: 'var(--spacing-s)',
              height: 'var(--spacing-s)',
            }}
          />
        </td>
      </tr>
      <tr>
        <td>
          <code>--spacing-m</code>
        </td>
        <td>
          <div
            style={{
              background: 'var(--accent-color)',
              width: 'var(--spacing-m)',
              height: 'var(--spacing-m)',
            }}
          />
        </td>
      </tr>
      <tr>
        <td>
          <code>--spacing-l</code>
        </td>
        <td>
          <div
            style={{
              background: 'var(--accent-color)',
              width: 'var(--spacing-l)',
              height: 'var(--spacing-l)',
            }}
          />
        </td>
      </tr>
      <tr>
        <td>
          <code>--spacing-xl</code>
        </td>
        <td>
          <div
            style={{
              background: 'var(--accent-color)',
              width: 'var(--spacing-xl)',
              height: 'var(--spacing-xl)',
            }}
          />
        </td>
      </tr>
      <tr>
        <td>
          <code>--spacing-xxl</code>
        </td>
        <td>
          <div
            style={{
              background: 'var(--accent-color)',
              width: 'var(--spacing-xxl)',
              height: 'var(--spacing-xxl)',
            }}
          />
        </td>
      </tr>
      <tr>
        <td>
          <code>--spacing-xxxl</code>
        </td>
        <td>
          <div
            style={{
              background: 'var(--accent-color)',
              width: 'var(--spacing-xxxl)',
              height: 'var(--spacing-xxxl)',
            }}
          />
        </td>
      </tr>
    </tbody>
  </table>
</Canvas>
```

---

# Button

Buttons communicate the action that will occur when the user clicks them. They communicate calls to action to the user and allow users to interact with pages in a variety of ways. They contain a text label to describe the action, and an icon if appropriate.

Available variations:

-   **Primary**: used for the most important actions in any scenario. Don’t use more than one primary button in a section or screen to avoid overwhelming users
    
-   **Muted**: used for a secondary actions, the most commonly used button type
    
-   **Negative**: for destructive actions - when something can't be undone. For example, deleting entities
    

# Button types

###### Preview

###### Code

```js
<Canvas ctx={ctx}>
  <div style={{ marginBottom: 'var(--spacing-m)' }}>
    <Button buttonType="muted">Submit</Button>{' '}
    <Button buttonType="primary">Submit</Button>{' '}
    <Button buttonType="negative">Submit</Button>
  </div>
  <div>
    <Button buttonType="muted" disabled>
      Submit
    </Button>{' '}
    <Button buttonType="primary" disabled>
      Submit
    </Button>{' '}
    <Button buttonType="negative" disabled>
      Submit
    </Button>
  </div>
</Canvas>
```

# Full-width

###### Preview

###### Code

```js
<Canvas ctx={ctx}>
  <Button fullWidth>Submit</Button>
</Canvas>
```

# Sizing

###### Preview

###### Code

```js
<Canvas ctx={ctx}>
  <Button buttonSize="xxs">Submit</Button>{' '}
  <Button buttonSize="xs">Submit</Button>{' '}
  <Button buttonSize="s">Submit</Button>{' '}
  <Button buttonSize="m">Submit</Button>{' '}
  <Button buttonSize="l">Submit</Button>{' '}
  <Button buttonSize="xl">Submit</Button>{' '}
</Canvas>
```

# Icons

###### Preview

###### Code

```js
<Canvas ctx={ctx}>
  <div style={{ marginBottom: 'var(--spacing-m)' }}>
    <Button leftIcon={<PlusIcon />}>Submit</Button>
  </div>
  <div style={{ marginBottom: 'var(--spacing-m)' }}>
    <Button rightIcon={<ChevronDownIcon />}>Options</Button>
  </div>
  <div>
    <Button leftIcon={<PlusIcon />} />
  </div>
</Canvas>
```

---

# Button group

# Basic example

###### Preview

###### Code

```js
<Canvas ctx={ctx}>
  <ButtonGroup>
    <ButtonGroupButton>First</ButtonGroupButton>
    <ButtonGroupButton selected>Second</ButtonGroupButton>
    <ButtonGroupButton>Third</ButtonGroupButton>
    <ButtonGroupButton disabled>Fourth</ButtonGroupButton>
  </ButtonGroup>
</Canvas>
```

---

# Dropdown

# Basic example

###### Preview

###### Code

```js
<Canvas ctx={ctx}>
  <Dropdown
    renderTrigger={({ open, onClick }) => (
      <Button
        onClick={onClick}
        rightIcon={open ? <CaretUpIcon /> : <CaretDownIcon />}
      >
        Options
      </Button>
    )}
  >
    <DropdownMenu>
      <DropdownOption onClick={() => {}}>Edit</DropdownOption>
      <DropdownOption disabled onClick={() => {}}>
        Duplicate
      </DropdownOption>
      <DropdownSeparator />
      <DropdownOption red onClick={() => {}}>
        Delete
      </DropdownOption>
    </DropdownMenu>
  </Dropdown>
</Canvas>
```

# Option actions

###### Preview

###### Code

```js
<Canvas ctx={ctx}>
  <Dropdown
    renderTrigger={({ open, onClick }) => (
      <Button
        onClick={onClick}
        rightIcon={open ? <CaretUpIcon /> : <CaretDownIcon />}
      >
        Fields
      </Button>
    )}
  >
    <DropdownMenu>
      <DropdownOption>
        First option
        <DropdownOptionAction icon={<PlusIcon />} onClick={() => {}} />
        <DropdownOptionAction
          red
          icon={<TrashIcon />}
          onClick={() => {}}
        />
      </DropdownOption>
      <DropdownOption>
        Second option
        <DropdownOptionAction icon={<PlusIcon />} onClick={() => {}} />
        <DropdownOptionAction
          red
          icon={<TrashIcon />}
          onClick={() => {}}
        />
      </DropdownOption>
    </DropdownMenu>
  </Dropdown>
</Canvas>
```

# Option groups

###### Preview

###### Code

```js
<Canvas ctx={ctx}>
  <Dropdown
    renderTrigger={({ open, onClick }) => (
      <Button
        onClick={onClick}
        rightIcon={open ? <CaretUpIcon /> : <CaretDownIcon />}
      >
        Fields
      </Button>
    )}
  >
    <DropdownMenu>
      <DropdownGroup name="Group 1">
        <DropdownOption>Foo</DropdownOption>
        <DropdownOption>Bar</DropdownOption>
        <DropdownOption>Qux</DropdownOption>
      </DropdownGroup>
      <DropdownGroup name="Group 2">
        <DropdownOption>Foo</DropdownOption>
        <DropdownOption>Bar</DropdownOption>
        <DropdownOption>Qux</DropdownOption>
      </DropdownGroup>
      <DropdownGroup name="Group 3">
        <DropdownOption>Foo</DropdownOption>
        <DropdownOption>Bar</DropdownOption>
        <DropdownOption>Qux</DropdownOption>
      </DropdownGroup>
    </DropdownMenu>
  </Dropdown>
</Canvas>
```

---

# Form

The `Form` component should wrap `FieldGroup` components to apply consistent layouts. All the fields are controlled inputs, so you need to provide both `value` and `onChange` props to make it work.

The `onChange` prop of all field components always returns the new value as first parameter, so you don't need to inspect the `event` object to get it.

# Full example

###### Preview

###### Code

```js
<Canvas ctx={ctx}>
  <Form onSubmit={() => console.log('onSubmit')}>
    <FieldGroup>
      <TextField
        required
        name="name"
        id="name"
        label="Name"
        value="Mark Smith"
        placeholder="Enter full name"
        hint="Provide a full name"
        onChange={(newValue) => console.log(newValue)}
      />
      <TextField
        required
        name="email"
        id="email"
        label="Email"
        type="email"
        value=""
        placeholder="your@email.com"
        error="Please enter an email!"
        hint="Enter email address"
        onChange={(newValue) => console.log(newValue)}
      />
      <TextField
        required
        name="apiToken"
        id="apiToken"
        label="API Token"
        value="XXXYYY123"
        hint="Enter a valid API token"
        textInputProps={{ monospaced: true }}
        onChange={(newValue) => console.log(newValue)}
      />
      <TextareaField
        required
        name="longText"
        id="longText"
        label="Long text"
        value="Lorem ipsum dolor sit amet, consectetur adipiscing elit.."
        hint="Enter some text"
        onChange={(newValue) => console.log(newValue)}
      />
      <SelectField
        name="option"
        id="option"
        label="Option"
        hint="Select one of the options"
        value={{ label: 'Option 1', value: 'option1' }}
        selectInputProps={{
          options: [
            { label: 'Option 1', value: 'option1' },
            { label: 'Option 2', value: 'option2' },
            { label: 'Option 3', value: 'option3' },
          ],
        }}
        onChange={(newValue) => console.log(newValue)}
      />
      <SelectField
        name="multipleOption"
        id="multipleOption"
        label="Multiple options"
        hint="Select one of the options"
        value={[
          { label: 'Option 1', value: 'option1' },
          { label: 'Option 2', value: 'option2' },
        ]}
        selectInputProps={{
          isMulti: true,
          options: [
            { label: 'Option 1', value: 'option1' },
            { label: 'Option 2', value: 'option2' },
            { label: 'Option 3', value: 'option3' },
          ],
        }}
        onChange={(newValue) => console.log(newValue)}
      />
      <SwitchField
        name="debugMode"
        id="debugMode"
        label="Debug mode active?"
        hint="Logs messages to console"
        value={true}
        onChange={(newValue) => console.log(newValue)}
      />
    </FieldGroup>
    <FieldGroup>
      <Button fullWidth buttonType="primary">
        Submit
      </Button>
    </FieldGroup>
  </Form>
</Canvas>
```

---

# Section

# Basic usage

###### Preview

###### Code

```js
<Canvas ctx={ctx}>
  <Section title="Section title">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat.
  </Section>
</Canvas>
```

# Highlighted

###### Preview

###### Code

```js
<Canvas ctx={ctx}>
  <Section title="Section title" highlighted>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat.
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
      <Section
        title="Section title"
        collapsible={{ isOpen, onToggle: () => setOpen((v) => !v) }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat.
      </Section>
    )}
  </StateManager>
</Canvas>
```

---

# Sidebar panel

# Basic example

###### Preview

###### Code

```js
<Canvas ctx={ctx}>
  <div style={{ display: 'flex' }}>
    <div
      style={{
        width: '300px',
        borderRight: '1px solid var(--border-color)',
      }}
    >
      <SidebarPanel title="Default">Content</SidebarPanel>
      <SidebarPanel title="Start open" startOpen>
        Content
      </SidebarPanel>
      <SidebarPanel title="Content with no padding" noPadding>
        Content
      </SidebarPanel>
    </div>
    <div
      style={{
        flex: '1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'var(--light-bg-color)',
      }}
    >
      Main content
    </div>
  </div>
</Canvas>
```

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

# Toolbar

# Basic example

###### Preview

###### Code

```js
<Canvas ctx={ctx}>
  <Toolbar>
    <ToolbarStack stackSize="l">
      <ToolbarTitle>Media Area</ToolbarTitle>
    </ToolbarStack>
  </Toolbar>
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'var(--light-bg-color)',
      height: '150px',
    }}
  >
    Main content
  </div>
</Canvas>
```

# Buttons and actions

###### Preview

###### Code

```js
<Canvas ctx={ctx}>
  <Toolbar>
    <ToolbarButton>
      <BackIcon />
    </ToolbarButton>
    <ToolbarStack stackSize="l">
      <ToolbarTitle>Media Area</ToolbarTitle>
      <div style={{ flex: '1' }} />
      <Button buttonType="primary">Action</Button>
    </ToolbarStack>
    <ToolbarButton>
      <SidebarLeftArrowIcon />
    </ToolbarButton>
  </Toolbar>
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'var(--light-bg-color)',
      height: '150px',
    }}
  >
    Main content
  </div>
</Canvas>
```

# With button group

###### Preview

###### Code

```js
<Canvas ctx={ctx}>
  <Toolbar>
    <ToolbarStack stackSize="l">
      <ToolbarTitle>Media Area</ToolbarTitle>
      <div style={{ flex: '1' }} />
      <ButtonGroup>
        <ButtonGroupButton>First</ButtonGroupButton>
        <ButtonGroupButton selected>Second</ButtonGroupButton>
        <ButtonGroupButton>Third</ButtonGroupButton>
      </ButtonGroup>
    </ToolbarStack>
  </Toolbar>
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'var(--light-bg-color)',
      height: '150px',
    }}
  >
    Main content
  </div>
</Canvas>
```

---

# Sidebars and split views

# Resizable, left primary panel

###### Preview

###### Code

```js
<Canvas ctx={ctx}>
  <div style={{ height: 500, position: 'relative' }}>
    <VerticalSplit primaryPane="left" size="25%" minSize={220}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Toolbar>
          <ToolbarStack stackSize="l">
            <ToolbarTitle>Primary</ToolbarTitle>
          </ToolbarStack>
        </Toolbar>
        <div
          style={{
            flex: '1',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '150px',
          }}
        >
          Main content
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', borderLeft: '1px solid var(--border-color)' }}>
        <Toolbar>
          <ToolbarStack stackSize="l">
            <ToolbarTitle>Secondary</ToolbarTitle>
          </ToolbarStack>
        </Toolbar>
        <div
          style={{
            flex: '1',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '150px',
          }}
        >
          Sidebar
        </div>
      </div>
    </VerticalSplit>
  </div>
</Canvas>
```

# Resizable, right primary panel

###### Preview

###### Code

```js
<Canvas ctx={ctx}>
  <div style={{ height: 500, position: 'relative' }}>
    <VerticalSplit primaryPane="right" size="25%" minSize={220}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Toolbar>
          <ToolbarStack stackSize="l">
            <ToolbarTitle>Secondary</ToolbarTitle>
          </ToolbarStack>
        </Toolbar>
        <div
          style={{
            flex: '1',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '150px',
          }}
        >
          Sidebar
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', borderLeft: '1px solid var(--border-color)' }}>
        <Toolbar>
          <ToolbarStack stackSize="l">
            <ToolbarTitle>Primary</ToolbarTitle>
          </ToolbarStack>
        </Toolbar>
        <div
          style={{
            flex: '1',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '150px',
          }}
        >
          Main content
        </div>
      </div>
    </VerticalSplit>
  </div>
</Canvas>
```

# Collapsible

###### Preview

###### Code

```js
  <Canvas ctx={ctx}>
   <div style={{ height: 500, position: 'relative' }}>
     <StateManager initial={true}>
       {(isCollapsed, setCollapsed) => (
         <VerticalSplit
           primaryPane="left"
           size="25%"
           minSize={220}
           isSecondaryCollapsed={isCollapsed}
           onSecondaryToggle={setCollapsed}
         >
           <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
             <Toolbar>
               <ToolbarStack stackSize="l">
                 <ToolbarTitle>Primary</ToolbarTitle>
               </ToolbarStack>
             </Toolbar>
             <div
               style={{
                 flex: '1',
                 display: 'flex',
                 justifyContent: 'center',
                 alignItems: 'center',
                 height: '150px',
               }}
             >
               Main content
             </div>
           </div>
           <div
             style={{
               display: 'flex',
               flexDirection: 'column',
               height: '100%',
               borderLeft: '1px solid var(--border-color)',
             }}
           >
             <Toolbar>
               <ToolbarStack stackSize="l">
                 <ToolbarTitle>Secondary</ToolbarTitle>
               </ToolbarStack>
             </Toolbar>
             <div
               style={{
                 flex: '1',
                 display: 'flex',
                 justifyContent: 'center',
                 alignItems: 'center',
                 height: '150px',
               }}
             >
               Sidebar
             </div>
           </div>
         </VerticalSplit>
       )}
     </StateManager>
   </div>
 </Canvas>
```

# Overlay mode

###### Preview

###### Code

```js
  <Canvas ctx={ctx}>
   <div style={{ height: 500, position: 'relative' }}>
     <StateManager initial={true}>
       {(isCollapsed, setCollapsed) => (
         <VerticalSplit
           mode="overlay"
           primaryPane="left"
           size="25%"
           minSize={220}
           isSecondaryCollapsed={isCollapsed}
           onSecondaryToggle={setCollapsed}
         >
           <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
             <Toolbar>
               <ToolbarStack stackSize="l">
                 <ToolbarTitle>Primary</ToolbarTitle>
               </ToolbarStack>
             </Toolbar>
             <div
               style={{
                 flex: '1',
                 display: 'flex',
                 justifyContent: 'center',
                 alignItems: 'center',
                 height: '150px',
               }}
             >
               Main content
             </div>
           </div>
           <div
             style={{
               display: 'flex',
               flexDirection: 'column',
               height: '100%',
               borderLeft: '1px solid var(--border-color)',
             }}
           >
             <Toolbar>
               <ToolbarStack stackSize="l">
                 <ToolbarTitle>Secondary</ToolbarTitle>
               </ToolbarStack>
             </Toolbar>
             <div
               style={{
                 flex: '1',
                 display: 'flex',
                 justifyContent: 'center',
                 alignItems: 'center',
                 height: '150px',
               }}
             >
               Sidebar
             </div>
           </div>
         </VerticalSplit>
       )}
     </StateManager>
   </div>
 </Canvas>
```

---

# Additional permissions

Some methods and properties available within the hooks require special permissions to be accessed, as they may cause security issues.

If a plugin wants to access these additional features, it must request specific permissions. When installing the plugin, the user must explicitly grant these permissions, otherwise the installation process will be aborted:

[(Image content)](https://www.datocms-assets.com/205/1637622525-screenshot-2021-11-23-at-00-08-26.png?auto=format&fit=max&w=2000)

# Available permissions

At the moment, only one special permit is available, but in the future more may be added.

### `currentUserAccessToken`

This permission makes the `ctx.currentUserAccessToken` property available. This token represents the currently logged in user, and you can use it to make API calls to the [Content Management API](/docs/content-management-api/using-the-nodejs-clients.md) on behalf of that user.

```jsx
import { SiteClient } from 'datocms-client';
import { useMemo, useEffect } from 'react';

connect({
  renderPage(pageId, { ctx }) {
    const client = useMemo(() => {
      return new SiteClient(
        ctx.currentUserAccessToken,
        { environment: ctx.environment },
      );
    }, [ctx.currentUserAccessToken]);

    useEffect(async () => {
      const someRecords = await client.items.all();
    }, []);

    // ...
  },
});
```

## Specifying additional permissions

#### Private plugins

During the creation of a plugin, it is possible to specify the additional permissions the plugin requires:

(Video content)

#### Marketplace plugins

Public plugins must declare their additional permissions inside the `datocmsPlugin.permission` key in their `package.json` file:

```json
{
  "name": "datocms-plugin-foobar",
  "version": "0.1.0",
  "dependencies": {
    // ...
  },
  "datoCmsPlugin": {
    "title": "Foobar",
    // ...
    "permissions": ["currentUserAccessToken"]
  }
}
```

For more information regarding how to publish a plugin in the Marketplace, see [here](/docs/plugin-sdk/publishing-to-marketplace.md).

---

# Working with form values

Inside of [Sidebar panels](/docs/plugin-sdk/sidebar-panels.md) and [Field extensions](/docs/plugin-sdk/field-extensions.md) you have access to `ctx.formValues`, which contains the complete internal form state for the record that the current user is editing. With that, you can access its work-in-progress changes, and react to them.

The structure of `ctx.formValues` is heavily dependent on the fields of its model. In fact, the keys of this object are the model's field IDs:

```json
{
  "title": "Foo bar",
  "cover_image": {
    "upload_id": "32943530"
    "alt": null,
    "title": null,
    "focal_point": null,
    "custom_data": {},
  },
  "author": "39832254",
  "seo": {
    "image": "16229550",
    "title": "Hugo",
    "description": "With Hugo, you can build amazing static projects",
    "twitter_card": "summary"
  },
}
```

If you want to change the value of some field, you can use the `ctx.setFieldValue` method:

```typescript
await ctx.setFieldValue('title', 'new value');
```

Most of the field values you'll find are 100% identical to their respective Content Management API formats (see the section ["Field type values"](/docs/content-management-api/resources/item/create.md)), even tough there are a couple of important exceptions we'll cover below.

## Localized fields

If a field is localized, the format of `ctx.formValues` will slightly change, similarly to what happens on the Content Management API (see the section ["Localized fields"](/docs/content-management-api/resources/item/create.md)):

```json
{
  "title": {
    "en": "Foo bar",
    "it": "Antani"
  }
}
```

In this case, to change the field value in English, you need to pass the complete field path to `ctx.setFieldValue`:

```typescript
await ctx.setFieldValue('title.en', 'new value');
```

## Modular Content fields

As you know, modular content fields contain [blocks](/docs/content-modelling/blocks.md), which are complex structures composed of multiple inner fields. If you inspect the value of a modular content field from `ctx.formValues`, you'll see something like this:

```json
[
  {
    "itemId": "39830695",
    "itemTypeId": "810886",
    "social": "twitter",
    "url": "https://twitter.com/datocms",
  },
  {
    "itemId": "39830696",
    "itemTypeId": "810886",
    "social": "linkedin",
    "url": "https://www.linkedin.com/company/35537033"
  }
]
```

Every block contains the `itemId` (ID of the block) and `itemTypeId` (ID of the block model) attributes, while all the other attributes depend on the actual fields of the block model.

You can edit the value of a Modular Content field just like any other field. Following the example above, you could ie. reorder the existing blocks by social using the `ctx.setFieldValue` method:

```typescript
const currentValue = ctx.formValues['my_modular_content'];

await ctx.setFieldValue(
  'my_modular_content',
  currentValue.sort((a, b) => a.social.localeCompare(b.social),
);
```

But you can also remove some blocks:

```typescript
await ctx.setFieldValue(
  'my_modular_content',
  currentValue.filter(block => block.social !== 'linkedin'),
);
```

Or even add new blocks to the field:

```typescript
await ctx.setFieldValue(
  'my_modular_content',
  [
    ...currentValue,
    {
      "itemTypeId": "810886",
      "social": "twitter",
      "url": "https://twitter.com/datocms",
    },
  ],
);
```

Pay attention to the missing `itemId` attribute here: when the record will be eventually saved, a new `itemId` will be generated by the DatoCMS API.

> [!WARNING] Avoid creating Editor field extensions for Modular Content fields!
> While it's perfectly fine — and as we just saw, quite straightforward — to develop Addon field extensions for Modular Content fields, overriding the regular editor DatoCMS offers for this field type is generally not a good idea, as you'll need to handle the rendering and update of all the fields and blocks it contains. Not an easy task.

## Field extensions on block fields

If a Field Extension is installed on a field belonging to a block, nothing really changes. You can get the value of the specific field of the block using `ctx.fieldPath`:

```typescript
import get from 'lodash-es/get';

// ctx.fieldPath for a block field will be something
// like "my_modular_content.1.title"
get(ctx.formValues, ctx.fieldPath);
```

## Structured Text fields

If you inspect the value of a Structured Text field from `ctx.formValues`, you'll see something like this:

```json
{
  "my_structured_text_field": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Meet "
        },
        {
          "text": "the best way",
          "highlight": true
        },
        {
          "text": " to manage content with Hugo"
        }
      ]
    }
  ]
}
```

Even with this tiny one-paragraph example, you'll notice that this format is quite different from the [`dast` format](/docs/structured-text/dast.md) that both CMA and CDA offers:

-   There's no [`root`](/docs/structured-text/dast.md#root) node: the value is directly an array of root children;
    
-   Nodes of type [`span`](/docs/structured-text/dast.md#span) have no `type` attribute, the `value` attribute is called `text`, and `marks` are applied as boolean keys directly on the node itself.
    

To offer a comparison, this would be the `dast` version of the same content:

```json
{
  "my_structured_text_field": {
    "schema": "dast",
    "document": {
      "type": "root",
      "children": [
        {
          "type": "paragraph",
          "children": [
            {
              "type": "span",
              "value": "Meet "
            },
            {
              "type": "span",
              "marks": [
                "highlight"
              ],
              "value": "the best way"
            },
            {
              "type": "span",
              "value": " to manage content with Hugo"
            }
          ]
        }
      ]
    }
  }
}
```

Why is that? Because to power Structured Text fields, under the hood, the DatoCMS application uses the (awesome) [Slate Editor](https://github.com/ianstormtaylor/slate) library. Its [internal representation format](https://docs.slatejs.org/concepts/02-nodes) is somewhat different from `dast`, and continuously converting back-and-forth from the two formats on every key stroke was infeasible from a performance point of view.

So, how can you overcome this constraint?

If your plugin just needs to read Structured Text fields, without ever changing their value, you can use the `slateToDast` function exposed by the `datocms-structured-text-slate-utils` package to convert the internal Slate format into regular `dast`, and then do your reading on its result:

```typescript
import { slateToDast } from 'datocms-structured-text-slate-utils';
import groupBy from 'lodash-es/groupBy';

const allFieldsByItemTypeId = groupBy(
  Object.values(ctx.fields), field => field.relationships.item_type.data.id
);

const dast = slateToDast(
  ctx.formValues['my_structured_text_field'],
  allFieldsByItemTypeId,
);

// result will be something like:
//
// {
//    schema: 'dast',
//    document: { type: 'root', children: [...] },
//  }
```

If you want to read AND write the content of a Structured Text field, then the `datocms-structured-text-slate-utils` package offers [complete Typescript types](https://github.com/datocms/structured-text/blob/main/packages/slate-utils/src/types.ts#L267) and [type guards](https://github.com/datocms/structured-text/blob/main/packages/slate-utils/src/guards.ts) for the Slate format, so you know what you can expect to read and write in there.

In this example, we're building a function that removes every link present in the content:

```typescript
import { Node, isLink, isNonTextNode, NonTextNode } from 'datocms-structured-text-slate-utils';
import clone from 'clone-deep';

function visit(
  tree: Node | Node[],
  callback: (node: Node, index: number, parents: Node[]) => void,
) {
  const all = (nodes: Node[], parents: Node[]) =>
    nodes.forEach((node, index) => one(node, index, parents));

  const one = (node: Node, index: number, parents: Node[]) => {
    if ('children' in node) {
      all(node.children, [node, ...parents]);
    }
    callback(node, index, parents);
  };

  if (Array.isArray(tree)) {
    all(tree, []);
  } else {
    one(tree, 0, []);
  }
}

function removeLinks(slateValue: Node[]) {
  const value = clone(slateValue);

  visit(value, (node, index, parents) => {
    if (!isNonTextNode(node) || !isLink(node)) {
      return;
    }

    const parent = parents[0] as NonTextNode;
    parent.children.splice(index, 1, ...node.children);
  });

  return value;
}

ctx.setFieldValue(
  'my_structured_text_field',
  removeLinks(ctx.formValues['my_structured_text_field'] as Node[]),
);
```

Structured text fields can contain both references to other records via its [`itemLink`](/docs/structured-text/dast.md#itemLink) and [`inlineItem`](/docs/structured-text/dast.md#inlineItem) nodes, and blocks via its [`block`](/docs/structured-text/dast.md#block) nodes. The Slate representation for them is similar to the following:

```json
[
  {
    "type": "paragraph",
    "children": [
      {
        "text": "This is a "
      },
      {
        "type": "itemLink",
        "item": "78722383",
        "itemTypeId": "810907",
        "children": [
          {
            "text": "link to a record"
          }
        ]
      },
      {
        "text": " and this is an inline record: "
      },
      {
        "type": "inlineItem",
        "item": "69045807",
        "itemTypeId": "810907",
        "children": [{ "text": "" }]
      }
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "text": "This is a block:"
      }
    ]
  },
  {
    "type": "block",
    "id": "87031498",
    "blockModelId": "810933",
    "children": [{ "text": "" }],
    "title": "Foobar"
  }
]
```

As you can see:

-   Both `itemLink` and `inlineItem` nodes have `item` and `itemTypeId` attributes that point to the referenced record;
    
-   Both `inlineItem` and `block` nodes need to have a `children` attribute always containing an empty span;
    
-   Blocks have the `blockModelId` attribute containing to the ID of the block model and the `id` attribute with the ID of the block, while all the other attributes depend on the actual fields of the block model itself.
    

You can create/remove/change these nodes like any other one by keeping their formats correct. In this example, we're adding a new block node at the end of the content:

```typescript
ctx.setFieldValue(
  'my_structured_text_field',
  [
    ...ctx.formValues['my_structured_text_field'],
    {
      type: 'block',
      key: `${new Date().getTime()}`,
      blockModelId: '810933',
      title: 'Foobar',
      children: [{ text: '' }],
    },
  ]
);
```

Pay attention to the `key` attribute here: to create new block nodes, you need to fill it with an unique string. When the record will be eventually saved, a new ID will be generated by the DatoCMS API, the `id` attribute will appear in the node, and the `key` attribute will be removed.

> [!WARNING] Avoid creating Editor field extensions for Structured Text fields!
> While it's perfectly fine to develop Addon field extensions for Structured Text fields, overriding the regular editor DatoCMS offers for this field type is generally not a good idea, as it requires a lot of effort to re-create a convincing editing experience.

---

# Publishing to Marketplace

If you've created a new plugin, we strongly encourage you to share it with the community as an [NPM](https://www.npmjs.com/) package, so that it will become available in our [Marketplace](https://www.datocms.com/marketplace/plugins.md) and installable on every DatoCMS project in one click!

### Tweaking the `package.json`

To release a plugin, you need to make sure to fill the `package.json` with these information:

```json
{
  "name": "datocms-plugin-foobar",
  "version": "0.0.1",
  "homepage": "https://github.com/mark/foobar#readme",
  "description": "Add a small description for the plugin here",
  "keywords": ["datocms-plugin"],
  "datoCmsPlugin": {
    "title": "Plugin title",
    "coverImage": "docs/cover.png",
    "previewImage": "docs/preview.mp4",
    "entryPoint": "build/index.html",
    "permissions": [],
  },
  "devDependencies": { ... },
  "dependencies": { ... }
}
```

The following table describes the properties that can be set on the file:

-   `name` (required): NPM package name
    
-   `version` (required): Plugin version
    
-   `description` (required): Short description of what the plugin does
    
-   `keywords` (required): Plugin keywords, useful to help users find your plugin
    
-   `homepage`: URL of the plugin homepage, will be shown in the Marketplace
    
-   `datoCmsPlugin.title` (required): Plugin title
    
-   `datoCmsPlugin.entryPoint` (required): Relative path to the plugin entry point
    
-   `datoCmsPlugin.previewImage`: Relative path to a video/image showing the plugin in action (better if it's a MP4 video)
    
-   `datoCmsPlugin.coverImage`: Relative path to a cover image that will be used in the [Marketplace](https://www.datocms.com/marketplace/plugins.md)
    
-   `datoCmsPlugin.permissions` (required): [Additional permissions](/docs/plugin-sdk/additional-permissions.md) your plugin needs to work
    

Make sure to strictly follow these rules, otherwise the plugin won't be visible in the Marketplace:

-   `name` MUST start with `datocms-plugin-`;
    
-   `entryPoint`, `previewImage` and `coverImage` MUST be files contained in the package, and need to be defined as paths relative to the package root (ie. `docs/image.png`);
    
-   `keywords` MUST contain the `datocms-plugin` keyword;
    

### Publishing the plugin

It is now time to publish your plugin as an NPM package. Inside your project, run the following command:

Terminal window

```bash
npm publish
```

Once published, the plugin will automatically be added in the Marketplace within one hour. The same applies also to new version releases.

> [!WARNING] Not showing up in the Marketplace?
> If you plugin is not showing up after 3 hours then please triple check that you've followed all the rules above in your `package.json`, then contact support.

### Plugin upgrades

To release a new version of your plugin, follow the [specific guide](/docs/plugin-sdk/releasing-new-plugin-versions.md). Once you publish a new version, projects who have installed it will receive a notification asking them to upgrade:

[(Image content)](https://www.datocms-assets.com/205/1637622931-screenshot-2021-11-23-at-00-15-17.png?auto=format&fit=max&w=2000)

Make sure in the new versions to [handle legacy configuration options properly](/docs/plugin-sdk/event-hooks.md)!

### A word about external JS/CSS files required by the iframe

If your plugin is called `datocms-plugin-foobar` and the entry point specified in the `package.json` is `build/index.html`, the URL that will be loaded as an iframe will be:

```plaintext
https://plugins-cdn.datocms.com/datocms-plugin-tag-editor@0.1.2/build/index.html
```

This means that if the page requires a JS file with an absolute path like `/js/bundle.js` then it won't work, as the final URL will be `https://plugins-cdn.datocms.com/js/bundle.js`, which will be non-existent.

In general, make sure that any external resource you require is expressed as a relative path to the HTML page!

---

# Releasing new plugin versions

If you already have published a plugin on the DatoCMS Marketplace, here is what you need to do in order to release a new version.

## Developing a new version of a published plugin

To test a new local version of a plugin that has already been published, make sure to [create a new sandbox environment](/docs/scripting-migrations/introduction.md#creating-a-new-sandbox-environment), then enter the "Developer zone" settings, and specify a local entry point URL for the plugin.

(Video content)

This way, all the settings you already entered for the plugin and all the fields where you installed its manual field extensions will remain untouched, but you'll be able to test new code.

## Releasing a canary version

[Following the usual NPM convention](https://docs.npmjs.com/cli/v8/commands/npm-dist-tag#purpose), other users will see the upgrade notification for your plugin **only when a new package version is tagged as** **`latest`**. This means that you can release a canary version of your plugin that only you can test by publishing it to any other NPM `dist-tag`.

In this example, we'll use the `next` tag:

Terminal window

```bash
npm publish --tag next
```

Once the new version is published, open the "Developer zone" section and click on "Upgrade to canary release". A prompt will appear asking the exact canary version you want to install.

## Releasing an official new version

Once you made sure the canary release works as expected, you can publish a new version on the `latest` NPM tag:

Terminal window

```bash
npm publish
```

Once published, all the projects where the plugin is installed will receive a notification asking them to upgrade to the latest version:

[(Image content)](https://www.datocms-assets.com/205/1637622931-screenshot-2021-11-23-at-00-15-17.png?auto=format&fit=max&w=2000)

## Migrating old global plugin settings

The new version might need to store different settings than the previous ones. This can happen both for [global settings](/docs/plugin-sdk/config-screen.md), or the settings associated to a particular use of a [manual extension](/docs/plugin-sdk/manual-field-extensions.md) inside a field.

If the end-user decides to upgrade to the latest version of the plugin, DatoCMS keeps the old settings saved. This means that **plugins have to somehow manage configuration objects in older formats** too.

Let's concentrate on global plugin settings first, `ctx.plugin.attributes.parameters`. We can easily build some Typescript types and [type guard functions](https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards) to properly describe all the possibile formats in which settings might be stored:

```typescript
// ctx.plugin.attributes.parameters can be in one of these formats:
type Config = EmptyConfig | V1Config | V2Config;

// As soon as the plugin is installed, config is an empty object:
type EmptyConfig = {};

// Plugin v1 version saves config in this format:
type V1Config = {
  someOption: 'yes' | 'no';
}

// Current version changes the format for `someOption`, and adds `newOption`:
type V2Config = {
  someOption: boolean;
  newOption: string;
}

const isEmptyConfig = (parameters: Config): parameters is EmptyConfig => {
  return Object.keys(parameters).length === 0;
}

const isV1Config = (parameters: Config): parameters is V1Config => {
  return 'someOption' in parameters;
}

const isV2Config = (parameters: Config): parameters is V1Config => {
  return 'newOption' in parameters;
}
```

In this example, new and old config formats are somewhat compatible, so we can use the [`onBoot`](/docs/plugin-sdk/event-hooks.md) hook — which gets called as soon as the DatoCMS application loads, or the plugin is installed for the first time — to silently update the plugin configuration to the new format or, if it's the first installation for the plugin, to provide some default configuration:

```typescript
function normalizeConfig(parameters: Config): V2Config {
  if (isEmptyConfig(parameters)) {
    return { someOption: true, newOption: 'foobar' };
  }

  if (isV1Config(parameters)) {
    return { someOption: parameters.someOption === 'yes', newOption: 'foobar' };
  }

  return parameters;
}

connect({
  onBoot(ctx: OnBootCtx) {
    if (isV2Config(ctx.plugin.attributes.parameters as Config)) {
      return;
    }

    if (ctx.currentRole.meta.final_permissions.can_edit_schema) {
      ctx.updatePluginParameters(
        normalizeConfig(ctx.plugin.attributes.parameters as Config),
      );
    }
  },
  renderPage(pageId, ctx) {
    const parameters = normalizeConfig(ctx.plugin.attributes.parameters as Config);
    // ...use the normalized config from now on
  },
});
```

#### What if new config format is not compatible with older ones?

Unfortunately, it can also happen to introduce changes in a newer version that are not backward compatible. In this case, our approach will slighly change, as we need one of the project admins to manually change the settings in the config screen:

```typescript
connect({
  async onBoot(ctx: OnBootCtx) {
    if (isConfigValid(ctx.plugin.attributes.parameters as Config)) {
      return;
    }

    if (!ctx.currentRole.meta.final_permissions.can_edit_schema) {
      ctx.customToast({
        type: 'warning',
        message:
          'Invalid settings. Please ask your administrators to fix the issue!',
      });

      return;
    }

    const result = await ctx.customToast({
      type: 'warning',
      message:
        'Invalid settings. Please fix them to make the plugin work again!',
      cta: {
        label: 'Go to plugin settings',
        value: 'settings',
      },
    });

    if (result === 'settings') {
      ctx.navigateTo(`/admin/plugins/${ctx.plugin.id}/edit`);
    }
  },
  renderPage(pageId, ctx) {
    // fast return
    if (!isConfigValid(ctx.plugin.attributes.parameters as Config)) {
      return <div>Functionality disabled until settings are fixed!</div>;
    }
  },
});
```

Let's review what this code is doing:

-   every hook that needs to read the configuration object (`renderPage` in this example) can use the `isConfigValid()` function to test if it can execute normally, or it needs to fast return to avoid errors due to incompatible settings;
    
-   the `onBoot` hook shows a notification to the end user telling that the configuration needs to be manually fixed, or the plugin won't work.
    

## Migrating old manual Field Extension settings

A very similar approach can also be used to handle changes in manual field extension settings between versions.

If the new configuration is compatible with the old one:

-   the `renderFieldExtension` hook uses a `normalizeParameters()` function to convert older configuration objects into the latest format;
    
-   the `onBoot` hook first needs to determine if it needs to do the migration: to do that, it can look into `ctx.plugin.attributes.parameters` and see if ie. global settings have already some flag. Then it fetches all the fields that are hooked to our plugin using `ctx.loadFieldsUsingPlugin()`, and for each of them it uses the `ctx.updateFieldAppearance()` function to silently update the field extension to the new format.
    

```typescript
connect({
  async onBoot(ctx: OnBootCtx) {
    if (
      ctx.plugin.attributes.parameters.version !== '2' ||
      !ctx.currentRole.meta.final_permissions.can_edit_schema
    ) {
      return;
    }

    const fields = await ctx.loadFieldsUsingPlugin();

    await Promise.all(
      fields.map(async (field) => {
        const { appearance } = field.attributes;
        const changes: FieldAppearanceChange[] = [];

        if (
          appearance.editor === ctx.plugin.id &&
          appearance.field_extension === 'oldFieldEditorName'
        ) {
          changes.push({
            operation: 'updateEditor',
            newFieldExtensionId: 'newFieldEditorName',
            newFieldExtensionParameters: normalizeConfig(appearance.parameters),
          });
        }

        if (changes.length > 0) {
          await ctx.updateFieldAppearance(field.id, changes);
        }
      }),
    );
  },
  renderFieldExtension(fieldExtensionId, ctx) {
    const parameters = normalizeConfig(ctx.parameters);
    // ...use the normalized config from now on
  },
});
```

If old versions and new versions are incompatible, just like with the global settings before, all we can do is warning the user that manual field extensions need to be manually reconfigured. The Config screen can then offer some kind of UI to help users migrate manual field extensions in batch by providing some options:

```typescript
connect({
  async onBoot(ctx: OnBootCtx) {
    if (ctx.plugin.attributes.parameters.version === '2') {
      return;
    }

    if (!ctx.currentRole.meta.final_permissions.can_edit_schema) {
      ctx.customToast({
        type: 'warning',
        message:
          'Invalid settings. Please ask your administrators to fix the issue!',
      });

      return;
    }

    const result = await ctx.customToast({
      type: 'warning',
      message:
        'Invalid settings. Please fix them to make the plugin work again!',
      cta: {
        label: 'Go to plugin settings',
        value: 'settings',
      },
    });

    if (result === 'settings') {
      ctx.navigateTo(`/admin/plugins/${ctx.plugin.id}/edit`);
    }
  },
  renderFieldExtension(fieldExtensionId, ctx) {
    if (ctx.plugin.attributes.parameters.version !== '2') {
      return <div>Functionality disabled until settings are fixed!</div>;
    }

    // ...
  },
});
```

---

# Migrating from legacy plugins

A completely revamped plugin SDK was released in November 2021. Plugins leveraging the legacy SDK will continue to work indefinitely, but are much more limited in their possibilities, as they can only manage what in the new SKD are called [manual field extensions](/docs/plugin-sdk/manual-field-extensions.md). All the other extension points are not available.

> [!WARNING] Legacy SDK docs
> If you're looking for the Legacy SDK documentation, it is still available [here](/docs/legacy-plugins.md).

If you are interested in migrating to the new SDK, please note the following points:

## Global configuration parameters

Global parameters no longer need to be declared in the `package.json`, but are configurable through the [config-screen hooks](/docs/plugin-sdk/config-screen.md).

The data storage format is now also completely custom, as well as the interface that is shown to end users.

## Manual extensions

The old options:

-   "Type of plugin" (field editor, field add-on or sidebar widget), and
    
-   "Types of field" (specifying where it's possible to use the legacy plugin)
    

do not have to be declared in the `package.json` anymore, but are configurable through the [`manualFieldExtensions` hook](/docs/plugin-sdk/manual-field-extensions.md). The old "sidebar widget" plugin type is nothing but an additional `asSidebarPanel` option you can pass to the new `ManualFieldExtension` type:

```typescript
import { connect, Field, InitCtx } from 'datocms-plugins-sdk';

connect({
  manualFieldExtensions(ctx: InitCtx) {
    return [
      {
        id: 'sidebarWidget',
        name: 'My sidebar widget',
        type: 'editor',
        fieldTypes: ['integer'],
        asSidebarPanel: true,
      },
    ];
  },
  renderFieldExtension(id, ctx) {
    // ...
  },
});
```

## Instance configuration options

Instance parameters no longer need to be declared in the `package.json`, but are now completely arbitrary, as well as the interface that is shown to end users. Take a look at this part of the [documentation](/docs/plugin-sdk/manual-field-extensions.md#add-per-field-configuration-options-to-manual-field-extensions).

## `plugin.xxx` methods and properties

All methods and information previously available through `plugin.xxx` calls is now available through the `ctx` argument of the [`renderFieldExtension` hook](/docs/plugin-sdk/field-extensions.md#rendering-the-field-extension).

## Migrating appearance on associated fields

Since new plugins can expose multiple manual field extensions, you need to implement an [`onBoot` hook](/docs/plugin-sdk/event-hooks.md) to properly set the `fieldExtensionId` attribute on each field that was previously hooked with the plugin.

##### Example to migrate old field editors or sidebar widgets

```tsx
connect({
  // plugin exposes a `myExtension` manual field extension
  manualFieldExtensions(ctx: InitCtx) {
    return [
      {
        id: 'myExtension',
        name: 'Foo bar',
        type: 'editor',
        fieldTypes: ['integer'],
      },
    ];
  },
  async onBoot(ctx: OnBootCtx) {
    // if we already performed the migration, skip
    if (ctx.plugin.attributes.parameters.migratedFromLegacyPlugin) {
      return;
    }

    // if the current user cannot edit fields' settings, skip
    if (!ctx.currentRole.meta.final_permissions.can_edit_schema) {
      return;
    }

    // get all the fields currently associated to the plugin...
    const fields = await ctx.loadFieldsUsingPlugin();

    // ... and for each of them...
    await Promise.all(
      fields.map(async (field) => {
        // set the fieldExtensionId to be the new one
        await ctx.updateFieldAppearance(field.id, [{
          operation: 'updateEditor',
          newFieldExtensionId: 'myExtension',
        }]);
      }),
    );

    // save in configuration the fact that we already performed the migration
    ctx.updatePluginParameters({
      ...ctx.plugin.attributes.parameters,
      migratedFromLegacyPlugin: true,
    });
  },
});
```

##### Example to migrate old field addons

```tsx
connect({
  // plugin exposes a `myExtension` manual field extension
  manualFieldExtensions(ctx: InitCtx) {
    return [
      {
        id: 'myExtension',
        name: 'Foo bar',
        type: 'addon',
        fieldTypes: ['integer'],
      },
    ];
  },
  async onBoot(ctx: OnBootCtx) {
    // if we already performed the migration, skip
    if (ctx.plugin.attributes.parameters.migratedFromLegacyPlugin) {
      return;
    }

    // if the current user cannot edit fields' settings, skip
    if (!ctx.currentRole.meta.final_permissions.can_edit_schema) {
      return;
    }

    // get all the fields currently associated to the plugin...
    const fields = await ctx.loadFieldsUsingPlugin();

    // ... and for each of them...
    await Promise.all(
      fields.map(async (field) => {
        const { appearance } = field.attributes;
        const changes: FieldAppearanceChange[] = [];

        // find where our plugin is used...
        appearance.addons.forEach((addon, index) => {
          // set the fieldExtensionId to be the new one
          changes.push({
            operation: 'updateAddon',
            index,
            newFieldExtensionId: 'myExtension',
          });
        });

        await ctx.updateFieldAppearance(field.id, changes);
      }),
    );

    // save in configuration the fact that we already performed the migration
    ctx.updatePluginParameters({
      ...ctx.plugin.attributes.parameters,
      migratedFromLegacyPlugin: true,
    });
  },
});
```

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

-   [React/Next.js/Remix](/docs/next-js/displaying-videos.md)
    
-   [Vue, Nuxt](/docs/nuxt.md)
    
-   [Svelte/SvelteKit](/docs/svelte/displaying-videos.md)
    

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

-   **Streaming Minutes**: This section shows the total time your videos have been streamed using HLS.
    

(Image content)

-   **Bandwidth**: This section details the data transferred for videos served directly via MP4. You can check the **top assets by traffic**, as well as the **top referrers for assets**, while the graph highlights in purple all the traffic generated by your projects' assets.
    

(Image content)

### Troubleshooting

#### Reducing overages

If you notice a spike in your overages and usage metrics, it’s essential to investigate and address the root cause. A common issue is high bandwidth usage due to serving MP4 videos directly. To troubleshoot this:

-   Audit your site for `<video>` tags and switch them to HLS streaming if they are currently set to serve MP4 files directly.
    
-   Use the network tab in your browser’s developer tools to ensure videos are being served from `stream.mux.com` and not `datocms-assets.com`
    

#### Looping auto-play background videos

Here are some suggestions for optimizing the scenario where you want to use a looping video as a background in your page layout:

-   **Use Short Clips**: Keep the video short enough to fit within the browser’s memory cache (typically less than 10 seconds). This prevents Mux from re-downloading the video each time it loops, reducing streaming costs.
    
-   **Optimize Quality and Size**: Balance video quality with file size to minimize data usage without sacrificing user experience. In some cases, using a lower resolution MP4 might be more cost-effective than HLS streaming if the browser can reliably cache it.
    
-   **Alternative Hosting**: Consider hosting the video on a third-party CDN if their bandwidth costs are lower. This approach can bypass both Mux and DatoCMS CDNs, potentially reducing expenses further, especially if you have a preexisting contract with them that includes high amounts of bandwidth. You would be billed separately by the third-party host.
    
-   **Static Asset on Your Frontend**: If your file is small enough and you have a sufficient plan with your frontend's current host & CDN, consider adding the file to your frontend repo and serving directly from there, alongside your favicons, decorative images, fonts, etc. This is similar to the previous option of hosting the video on an alternative host, but this saves you the trouble of needing a seperate account & plan just for hosting these videos. Please check with your frontend host to see how this would affect your billing.

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

-   [<VideoPlayer/> component for React & Next.js](/docs/next-js/displaying-videos.md)
    
-   [<VideoPlayer/> component for Vue & Nuxt](/docs/nuxt/displaying-videos.md)
    
-   [<VideoPlayer/> component for Svelte & SvelteKit](/docs/svelte/displaying-videos.md)
    

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

*See also:* [*Mux Player API Reference*](https://www.mux.com/docs/guides/player-api-reference) *for a list of all accepted parameters*

##### Viewing your Mux Data Analytics

If the setup succeeded, try viewing your video for a few seconds. Analytics should start trickling into Mux Data. Now, just return to the Mux dashboard (`dashboard.mux.com`) and choose your environment again. You should start seeing analytics!

[(Image content)](https://www.datocms-assets.com/205/1758837383-mux-data-dashboard.png?auto=format&fit=max&w=2000)

Mux Data Dashboard

If you enabled `debug={true}`, you'll also see these logging attempts in the browser console as they're sent, which can be especially useful if the analytics *aren't* showing up as expected (probably because of adblock; see the troubleshooting section below).

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

-   **Text fields** (both Single-line Strings and Multi-paragraph Text) that are not empty and with no format validation: the metadata will be appended at the end of the original string;
    
-   **Structured Text fields**: the metadata will be appended at the end of the [last `span` node](/docs/structured-text/dast.md#span) contained in the first [`paragraph`](/docs/structured-text/dast.md#paragraph), [`heading`](/docs/structured-text/dast.md#heading), [`list`](/docs/structured-text/dast.md#list), [`code`](/docs/structured-text/dast.md#code) or [`blockquote`](/docs/structured-text/dast.md#blockquote) node found in the document;
    
-   **The** `**alt**` **field of any** `**Upload**` **referenced in the response:** the metadata will be appended at the end of the original string;
    

We've been conservative in deciding in which cases to embed hidden metadata, so your website should not break when enabling Content Link, but still, it's crucial that you test it thoroughly. If you encounter any problem, please refer to the **Troubleshooting** section of this guide.

## Enabling Content Link

To leverage the powerful capabilities of Content Link, you can follow these straightforward steps to ensure its seamless integration into your workflow.

#### Step 1: Request activation of Content Link

If you're an Enterprise customer of DatoCMS and a paid customer of Vercel, please contact us at [support@datocms.com](mailto:support@datocms.com). By providing the ID of the project where you want to enable Content Link, we'll be able to switch on the feature.

#### Step 2: Add the Content Link headers to your GraphQL API calls

To communicate to DatoCMS's Content Delivery API that you want Content Link metadata included in your responses, **you must add two headers to your API requests**:

-   `X-Visual-Editing` is the header that enables the feature, and it must be set to `vercel-v1`;
    
-   `X-Base-Editing-Url` is required to generate the right link to your DatoCMS project: it's the base URL of the project on the CMS, and unless you're using a custom domain, it looks like `https://example-project.admin.datocms.com`
    

Here is an example of how to add the headers when using the standard `fetch` API. In this case, we're going to enable Content Link on every preview deployment of the website:

```javascript
const visualEditingHeaders = process.env.VERCEL_ENV === "preview" ? {
  "X-Visual-Editing": "vercel-v1",
  "X-Base-Editing-Url": "https://<YOUR-PROJECT-NAME>.admin.datocms.com"
} : {}

const response = await fetch(
  "https://graphql-staging.datocms.com/",
  {
    method: "POST",
    headers: {
      "Authorization": "Bearer <API-KEY>",
      ...visualEditingHeaders,
  },
  body: JSON.stringify({
    query, variables
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

# Site Search Overview

DatoCMS Site Search is a way to **deliver tailored search results to your website visitors**. You can think of it as a replacement for the now discontinued Google Site Search.

(Image content)

There are many third-party services out there that fill this need (like [SwiftType](https://swiftype.com/), [Algolia](https://www.algolia.com/), and [Cludo](https://www.cludo.com/)). Our solution seeks to be a great option for plenty of websites:

-   Extremely easy to integrate with your static website
    
-   Completely customizable in terms of look & feel
    
-   Minimal configuration needed
    
-   Handles multilingual websites nicely
    
-   included in the price of DatoCMS with no additional charges
    

#### How it works

-   Every time your website finishes being deployed, **we'll crawl it to fetch updated content.**
    
-   From your frontend, you can [**make AJAX requests to our Content Management API**](/docs/site-search/base-integration.md#performing-searches) **to present relevant results to your visitors**. We also provide [**React**](/docs/site-search/widget.md) **and** [**Vue**](/docs/site-search/vue-search-widget.md) **search widgets** that simplify the process.
    

> [!PROTIP] Pro tip: Integrating Algolia and DatoCMS
> If you prefer to integrate a search provider like Algolia, [this guide](https://www.datocms.com/blog/algolia-nextjs-how-to-add-algolia-instantsearch.md) demonstrates setting up a Next.js project, configuring Algolia, and creating custom search components. While the guide focuses on Algolia Intellisearch, the process for setting up other third-party services like Meilisearch, Typesense, or ElasticSearch should be relatively similar.

#### Enabling Site Search for a project

To get started, please see [Configuring DatoCMS Site Search](/docs/site-search/configuration.md).

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
    <p>Details: cache-dub4388-DUB 1762214604 440757556</p>
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
    <p>Details: cache-dub4371-DUB 1762214622 3161075080</p>
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
    <p>Details: cache-dub4322-DUB 1762214622 1900247285</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

# React search widget

In addition to the [low-level API request](/docs/site-search/base-integration.md) presented in the previous section, our [`react-datocms`](https://github.com/datocms/react-datocms/blob/master/docs/site-search.md) package also includes a **React hook** that you can use to render a full-featured Site Search widget on your website.

> [!POSITIVE] You're in charge of the UI!
> The hook only handles the form logic: you are in complete and full control of how your form renders down to the very last component, class or style.

### Setup

First of all, install the required npm packages in your React project:

Terminal window

```bash
npm install --save @datocms/cma-client-browser
```

You can then use the `useSiteSearch` hook like this:

```jsx
import { useSiteSearch } from 'react-datocms';
import { buildClient } from '@datocms/cma-client-browser';

const client = buildClient({ apiToken: 'YOUR_API_TOKEN' });

const { state, error, data } = useSiteSearch({
  client,
  buildTriggerId: '7497',
  // optional: you can omit it you only have one locale, or you want to find results in every locale
  initialState: { locale: 'en' },
  // optional: to configure how to present the part of page title/content that matches the query
  highlightMatch: (text, key, context) =>
    context === 'title' ? (
      <strong key={key}>{text}</strong>
    ) : (
      <mark key={key}>{text}</mark>
    ),
  // optional: defaults to 8 search results per page
  resultsPerPage: 10,
});
```

Please follow the `react-datocms` documentation to read more about at the [configuration options](https://github.com/datocms/react-datocms/blob/master/docs/site-search.md#initialization-options) and the [data returned by the hook](https://github.com/datocms/react-datocms/blob/master/docs/site-search.md#returned-data).

### Complete example

The following example uses the [`react-paginate`](https://www.npmjs.com/package/react-paginate) npm package to simplify the handling of pagination. You can build your own pagination using the `data.totalPages` property to get the total number of pages, `state.page` to get the current page, and `state.setPage(page)` to trigger a page change.

```jsx
import { useState } from 'react';
import { buildClient } from '@datocms/cma-client-browser';
import ReactPaginate from 'react-paginate';
import { useSiteSearch } from 'react-datocms';

const client = buildClient({ apiToken: 'YOUR_API_TOKEN' });

function App() {
  const [query, setQuery] = useState('');

  const { state, error, data } = useSiteSearch({
    client,
    initialState: { locale: 'en' },
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
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
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
    <p>Details: cache-dub4396-DUB 1762214618 889713699</p>
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

-   Cloud storage costs with an external provider
    
-   An Imgix premium plan with custom SSL
    
-   Bandwidth charges to/from the cloud storage (their ingress/egress fees)
    
-   Bandwidth charges from Imgix to your visitors (depending on your plan with them)
    

#### Additional Info

-   At this time, we cannot provide custom domain names for assets on our own cloud storage. You must use one of the external storage options and an Imgix premium plan. Please see [Requirements](/docs/custom-asset-domains.md#requirements) above for details.
    
-   Your editors' user experience inside the media area should not change. This is a backend configuration change only.
    
-   If you already have existing assets (uploaded files) in your media area, we can help you migrate them over to a new storage service.
    
-   Nearly all [Imgix URL parameters](https://docs.imgix.com/en-US/apis/rendering/overview) will continue to work as before, with the notable exception of the [DatoCMS-specific `skip-default-optimizations` parameter](/docs/asset-api/asset-cdn-settings.md#automatic-image-optimization). Instead, you can [specify your own default parameters](https://docs.imgix.com/en-US/getting-started/setup/creating-sources/advanced-settings#default-parameters) on your Imgix source.
    

### Next steps: Enabling Custom Domains

1.  If you're not already on an Enterprise plan, please see our [pricing page](https://www.datocms.com/pricing.md) for details and then [contact our Sales team](https://www.datocms.com/contact.md) to sign up.
    
2.  Then, please choose a cloud storage provider and follow instructions below to set it up as your new Imgix asset source:
    
    -   [AWS S3 bucket](https://www.datocms.com/marketplace/enterprise/aws-s3.md)
        
    -   [Azure Blob](https://www.datocms.com/marketplace/enterprise/azure-blob-storage.md)
        
    -   [Google Cloud Storage](https://www.datocms.com/marketplace/enterprise/google-cloud-storage.md)
        
    -   [Cloudflare R2](https://www.datocms.com/marketplace/enterprise/cloudflare-r2.md)
        
3.  Once step 2 is complete, please email [support@datocms.com](mailto:support@datocms.com) so we can help you finalize the setup.
    

### **Questions?**

If anything is unclear, please reach out to us at [support@datocms.com](mailto:support@datocms.com) for technical assistance. You can also [contact our Sales team](https://www.datocms.com/contact.md) for inquiries about Enterprise pricing.

---

# Next.js + DatoCMS Overview

Next.js is an exceptional tool for building modern, universal frontend applications with the power of React. It lets you get started without having to write much boilerplate code and with a set of sane defaults upon which you can build.

[Vercel](https://vercel.com/solutions/nextjs) is the easiest way to deploy a production-ready, highly available Next.js website, with static assets being served through the CDN automatically and built-in support for Next.js’ automatic static optimization and API routes.

DatoCMS is the perfect companion to Next.js since it offers content, images and videos on a globally-distributed CDN, much like Vercel does for the static assets of your website. With this combo, you can have an **infinitely scalable website, ready to handle prime-time TV traffic spikes, at a fraction of the regular cost.**

> [!NOTE] Still using the old Pages Router?
> If you're still using the [Pages Router](https://nextjs.org/docs/pages) — that is, the features available under `/pages` — please follow [this documentation](/docs/legacy-next-js-documentation.md) instead.

#### Project starters

Our [marketplace](https://www.datocms.com/marketplace/starters.md) features different demo projects on Next, so you can learn and get started easily:

[

(Image content)

Next.js Starter Kit

Try this demo »

](https://www.datocms.com/marketplace/starters/next-js-starter-kit.md)[

(Image content)

Marketing Website

Try this demo »

](https://www.datocms.com/marketplace/starters/marketing-website.md)[

(Image content)

Ecommerce Website

Try this demo »

](https://www.datocms.com/marketplace/starters/ecommerce-website.md)

#### Tutorials

Our Community has also created many great video tutorials you can follow:

[

(Image content)

Next.js + DatoCMS tutorial for beginners

Play video »

](https://www.youtube.com/watch?v=_VIF1if-dNA)

[

(Image content)

Build a dynamic landing page with Next.js and Tailwind CSS

Play video »

](https://www.youtube.com/watch?v=it5nNneptgM)

[

(Image content)

How to use Next.js On-Demand ISR with DatoCMS webhooks

Play video »

](https://www.youtube.com/watch?v=Wh3P-sS1w0I)

## Quick start

First, create a new Next.js application using create-next-app, which sets up everything automatically for you.

To create a project, run the following command and follow the wizard:

Terminal window

```bash
npx create-next-app@latest
```

Then enter the project directory and start the development server:

Terminal window

```bash
cd my-app
npm run dev
```

### Fetching content from DatoCMS

When it comes to fetching data, Next recommends the following:

-   [perform the fetch on the Server](https://nextjs.org/docs/app/building-your-application/data-fetching#fetching-data-on-the-server), to reduce the back-and-forth communication between client and server;
    
-   [use Next.js `fetch` API](https://nextjs.org/docs/app/building-your-application/data-fetching#the-fetch-api), and call it whenever you need it, be it a layout, a page or a specific component.
    

Let's start by installing `@datocms/cda-client`, a lightweight, TypeScript-ready package that offers various helpers around the native Fetch API to perform GraphQL requests towards [DatoCMS Content Delivery API](/docs/content-delivery-api/api-endpoints.md):

Terminal window

```bash
npm install --save @datocms/cda-client
```

We can now create a function we can use in all of our components that need to fetch content from DatoCMS: Create a new directory called `lib`, and inside of it, add a file called `datocms.js`:

lib/datocms.js

```jsx
import { executeQuery } from '@datocms/cda-client';

export const performRequest = (query, options) => {
  return executeQuery(query, {
    ...options,
    token: process.env.NEXT_DATOCMS_API_TOKEN,
    environment: process.env.NEXT_DATOCMS_ENVIRONMENT,
  });
}
```

> [!WARNING] Enhanced Data Fetching
> While the above function works for simple cases, we strongly suggest to take a look at the next section, where we cover more details about data fetching, and [introduce a more flexible and optimized `performRequest()`.](/docs/next-js/optimizing-calls-with-react-cache-function.md#our-improved-performrequest)

You can see that to build the right authentication header, we're using an environment variable prefixed by `NEXT_` . To create the API token for a DatoCMS project, go in the "Settings > API Tokens" section, making sure you only give it permission to access the **Content Delivery API** and the **Content Delivery API with draft content:**

(Video content)

Next, go to `app/page.js` — that is, the component that renders the homepage of our project — define the GraphQL query to be executed, and in the component use the `performRequest()` function to perform the request:

```jsx
import { performRequest } from 'lib/datocms';

const PAGE_CONTENT_QUERY = `
  query Home {
    homepage {
      title
      description {
        value
      }
    }
  }`;

export default async function Home() {
  const { homepage } = await performRequest(PAGE_CONTENT_QUERY);

  // [...]
}
```

The `PAGE_CONTENT_QUERY` is the GraphQL query, and of course, it depends on the models available in your specific DatoCMS project.

You can learn everything you need regarding how to build GraphQL queries on our [Content Delivery API documentation](/docs/content-delivery-api.md).

---

# Optimizing calls to DatoCMS

Although the Next.js `fetch` API has (almost) the same interface as the regular `fetch` available on the browser, it is important to **highlight some key differences**, which might cause some surprise.

### Next.js automatically does static fetches

By default, Next.js [automatically does static fetches](https://nextjs.org/docs/app/building-your-application/data-fetching#static-and-dynamic-data-fetching):

-   For `fetch` calls happening in Server Components, this means that the data will be **fetched at build time, cached, and reused indefinitely on each request until your next deploy.**
    
-   For `fetch` calls happening in Client Components, the cache **lasts the duration of a session** (which could include multiple client-side re-renders) before a full page reload.
    

Caching requests is generally a good idea, as it minimizes the number of requests made to DatoCMS. However, if you want to always fetch the latest data, you can mark requests as *dynamic* and fetch data on each request without caching.

### GraphQL calls need to be manually deduped

It's quite common that multiple elements in the hierarchy of "things" that gets evaluated by Next.js to build a server response — layouts, pages, server components and `generateMetadata`/`generateStaticParams` functions — need to perform the same query.

Next.js automatically handles [request deduping](https://nextjs.org/docs/app/building-your-application/data-fetching#automatic-fetch-request-deduping) on `GET` requests — making sure that only one request is sent to the server — but since GraphQL requests use a `POST` HTTP action, we need to manually handle the case ourselves.

For this purpose, we can use a useful helper that React offers called `cache`, which memoizes the result of the passed function.

### Our improved `performRequest`

Based on what we have just learned, we can refine our `performRequest` function, and make it more flexible and optimized:

```jsx
import { executeQuery } from '@datocms/cda-client';
import { cache } from 'react';

const dedupedPerformRequest = cache(async (serializedArgs) => {
  return executeQuery(...JSON.parse(serializedArgs));
})

export function performRequest(query, options) {
  return dedupedPerformRequest(JSON.stringify([
    query,
    {
      ...options,
      token: process.env.NEXT_DATOCMS_API_TOKEN,
      environment: process.env.NEXT_DATOCMS_ENVIRONMENT,
    },
  ]);
}
```

This new version dedupes requests, supports all [CDA header modes](/docs/content-delivery-api/api-endpoints.md), and lets you control if — and for how long — you want to cache the result of the query with the [`revalidate` option](https://nextjs.org/docs/app/api-reference/functions/fetch#optionsnextrevalidate):

```jsx
// cache the query result indefinitely (until next deploy)
await performRequest(query);

// cache the query result for a maximum of 60 seconds
await performRequest(query, requestInitOptions: { next: { revalidate: 60 } });
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
    <p>Details: cache-dub4341-DUB 1762214620 128711306</p>
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
    <p>Details: cache-dub4357-DUB 1762214633 3815966158</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

# Structured Text fields

Rich text in DatoCMS is stored in [**Structured Text**](/docs/content-modelling/structured-text.md) **fields**, which lets us use it in many different contexts, from HTML in the browser to speech fulfillments in voice interfaces, if that's what you want.

There's a lot to be said about Structured Text and the extensibility of it, but for now let's just say that it returns content in a particular [JSON format called `dast`](/docs/structured-text/dast.md) which will resemble this example:

```json
{
  "schema": "dast",
  "document": {
    "type": "root",
    "children": [
      {
        "type": "heading",
        "level": 1,
        "children": [
          {
            "type": "span",
            "marks": [],
            "value": "Hello world!"
          }
        ]
      }
    ]
  }
}
```

To make it easy to convert this format in HTML inside your Next.js projects, we released a package called [`react-datocms`](https://github.com/datocms/react-datocms) that exposes a `<StructuredText />` component that does all the heavy lifting for you.

To take advantage of it, install the [`react-datocms`](https://github.com/datocms/react-datocms) package if you haven't already:

Terminal window

```bash
npm install react-datocms
```

Then, inside your page, make a [GraphQL query to fetch a Structured Text field](/docs/content-delivery-api/structured-text-fields.md), and feed the result to the `data` prop of a `<StructuredText />` component:

```jsx
import { StructuredText } from "react-datocms";
import { performRequest } from 'lib/datocms';

const PAGE_CONTENT_QUERY = `
  query HomePage($limit: IntType) {
    allBlogPosts(first: $limit) {
      id
      title
      content {
        value
      }
    }
  }`;

export default async function Home() {
  const pageContent = await performRequest(PAGE_CONTENT_QUERY, {
    variables: { limit: 10 }
  });

  return (
    <div>
      {data.allBlogPosts.map(blogPost => (
        <article key={blogPost.id}>
          <h2>{blogPost.title}</h2>
          <StructuredText data={blogPost.content} />
        </article>
      ))}
    </div>
  );
}
```

## Rendering special nodes

Other than "regular" formatting nodes (paragraphs, lists, etc.), Structured Text documents can contain three special types of node:

-   [`itemLink` nodes](/docs/structured-text/dast.md#itemLink) are just like regular HTML hyperlinks, but point to other records instead of URLs;
    
-   [`inlineItem` nodes](/docs/structured-text/dast.md#inlineItem) lets you directly embed a reference to a record in-between regular text;
    
-   [`block` nodes](/docs/structured-text/dast.md#block) lets you embed a DatoCMS block record in-between regular paragraphs;
    
-   [`inlineBlock` nodes](/docs/structured-text/dast.md#block) lets you embed a DatoCMS block record in-between regular text;
    

If a Structured Text document contains one of these nodes, then we need to change the GraphQL query, so that we also fetch all the records and blocks it references. As an example, if the field can link to other Blog posts, and can embed blocks of type "Image block" and "Mention block", then the query should change like this:

```jsx
const HOMEPAGE_QUERY = `query HomePage($limit: IntType) {
  allBlogPosts(first: $limit) {
    id
    title
    content {
      value
      blocks {
        ... on RecordInterface {
          id
          __typename
        }
        ... on ImageBlockRecord {
          image { url alt }
        }
      }
      inlineBlocks {
        ... on RecordInterface {
          id
          __typename
        }
        ... on MentionBlockRecord {
          username
        }
      }
      links {
        ... on RecordInterface {
          id
          __typename
        }
        ... on BlogPostRecord {
          slug
          title
        }
      }
    }
  }
}`;
```

We also need to tell `<StructuredText />` how you want such nodes to be rendered:

```jsx
return (
  <StructuredText
    data={blogPost.content}
    renderInlineRecord={({ record }) => {
      switch (record.__typename) {
        case "BlogPostRecord":
          return <a href={`/blog/${record.slug}`}>{record.title}</a>;
        default:
          return null;
      }
    }}
    renderLinkToRecord={({ record, children }) => {
      switch (record.__typename) {
        case "BlogPostRecord":
          return <a href={`/blog/${record.slug}`}>{children}</a>;
        default:
          return null;
      }
    }}
    renderBlock={({ record }) => {
      switch (record.__typename) {
        case "ImageBlockRecord":
          return <img src={record.image.url} alt={record.image.alt} />;
        default:
          return null;
      }
    }}
    renderInlineBlock={({ record }) => {
      switch (record.__typename) {
        case "MentionBlockRecord":
          return <code>@{record.username}</code>;
        default:
          return null;
      }
    }}
  />
);
```

To see structured text in action with Next.js, check out this tutorial:

[

(Image content)

How to use Structured Text fields with Next.js

Play video »

](https://www.youtube.com/watch?v=aKZJnqLialw)

---

# Adding SEO to pages

Similarly to what we offer with [responsive images](/docs/next-js/managing-images.md), our GraphQL API also offers a way to fetch [**pre-computed SEO meta tags**](/docs/content-delivery-api/seo-and-favicon.md) **based on the content you insert inside DatoCMS**.

You can easily use this information inside your Next app with the help of our [`react-datocms`](https://github.com/datocms/react-datocms) package.

Here's a sample of the meta tags you can automatically generate:

```html
<title>DatoCMS Blog - DatoCMS</title>
<meta property="og:title" content="DatoCMS Blog" />
<meta name="twitter:title" content="DatoCMS Blog" />
<meta name="description" content="Lorem ipsum..." />
<meta property="og:description" content="Lorem ipsum..." />
<meta name="twitter:description" content="Lorem ipsum..." />
<meta property="og:image" content="https://www.datocms-assets.com/..." />
<meta property="og:image:width" content="2482" />
<meta property="og:image:height" content="1572" />
<meta name="twitter:image" content="https://www.datocms-assets.com/..." />
<meta property="og:locale" content="en" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="DatoCMS" />
<meta property="article:modified_time" content="2020-03-06T15:07:14Z" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:site" content="@datocms" />
<link sizes="16x16" type="image/png" rel="icon" href="https://www.datocms-assets.com/..." />
<link sizes="32x32" type="image/png" rel="icon" href="https://www.datocms-assets.com/..." />
<link sizes="96x96" type="image/png" rel="icon" href="https://www.datocms-assets.com/..." />
<link sizes="192x192" type="image/png" rel="icon" href="https://www.datocms-assets.com/..." />
```

To use this feature, install the [`react-datocms`](https://github.com/datocms/react-datocms) package:

Terminal window

```bash
npm install react-datocms
```

Then, inside your page, feed content coming from a `faviconMetaTags` or `_seoMetaTags` query directly into the `toNextMetadata` function:

```jsx
import { toNextMetadata } from "react-datocms";
import { performRequest } from 'lib/datocms';

import Head from "next/head";

const PAGE_CONTENT_QUERY = `{
  site: _site {
    favicon: faviconMetaTags {
      attributes
      content
      tag
    }
  }
  blog {
    seo: _seoMetaTags {
      attributes
      content
      tag
    }
    title
  }
}`;

function fetchContent() {
  return performRequest(PAGE_CONTENT_QUERY, {
    variables: { limit: 10 }
  });
}

export async function generateMetadata() {
  const { site, blog } = await fetchContent();

  return toNextMetadata([ ...site.favicon, ..blog.seo ])
}

export default function Home() {
  const { blog } = await fetchContent();

  // [...]
}
```

Want to know more about SEO customization in DatoCMS? Check out this video tutorial:

[

(Image content)

Working with and customizing SEO Fields

Play video »

](https://youtu.be/WjF10isSjS0)

---

# Setting up Next.js Draft Mode

Static rendering is useful when your pages fetch data from a headless CMS. However, it’s not ideal when you’re [writing a draft on DatoCMS](/docs/general-concepts/draft-published.md) and want to view the draft immediately on your page.

Next.js has a feature called [Draft Mode](https://nextjs.org/docs/app/building-your-application/configuring/draft-mode) , which solves this problem. Here’s a guide on how to use it.

#### Step1: Create a draft mode API route

First, create a preview API route. It can have any name — e.g. `app/api/draft/route.ts`. In this API route, you must call `draftMode().enable()` to enable draft mode.

app/api/draft/route.js

```javascript
import { draftMode } from 'next/headers';

export async function GET(request) {
  draftMode().enable();
  redirect('/');
}
```

You can manually test this route by accessing it via a browser at `http://localhost:3000/api/draft`. You’ll notice that you'll be redirected to the homepage, and the `__prerender_bypass` cookie will be set.

#### Step 2: Conditionally include draft records

Once draft mode is setup, your pages can check whether it is active or not with the `draftMode().isEnabled` property, and use this information to tweak the call to `performRequest` so that the `includeDrafts` flag is turned on.

This will instruct DatoCMS to [return records at their latest version available](/docs/content-delivery-api/api-endpoints.md#include-drafts) instead of the currently published one:

```jsx
import { draftMode } from 'next/headers';

export default async function Page() {
  const { isEnabled } = draftMode();

  const { data: { homepage } } = await performRequest(PAGE_CONTENT_QUERY, {
    includeDrafts: isEnabled,
  });

  // [...]
}
```

You can read more details regarding draft mode on [Next.js docs page](https://nextjs.org/docs/app/building-your-application/configuring/draft-mode).

---

# Real-time updates

Live updates can be extremely useful both for content editors and regular visitors of your app/website:

-   Content-editors in Draft Mode can **see their work-in-progress directly in the production website**, without having to refresh the page;
    
-   Visitors can **immediately see new content as it gets published**, allowing all kinds of real-time interactions with your website/app (e.g., live-news coverage).
    

(Video content)

### How to use the `useQuerySubscription` hook

The [`react-datocms`](https://github.com/datocms/react-datocms#live-real-time-updates) package exposes a `useQuerySubscription` hook that uses our [Real-time Updates API](/docs/real-time-updates-api.md) to make any Next.js page update in real-time.

We'll start with the following example, and modify it to **activate real-time updates for any visitor** of your website:

```jsx
const PAGE_CONTENT_QUERY = `{
  allBlogPosts { id title }
  site: _site {
    favicon: faviconMetaTags { attributes content tag }
  }
}`;

export default async function Page() {
  const data = await performRequest(PAGE_CONTENT_QUERY);

  return <LatestBlogPosts data={data} />
}
```

The first step is to build a `<RealtimeLatestBlogPosts />` Client component, utilizing the `useQuerySubscription` hook:

```jsx
'use client';

import { useQuerySubscription } from 'react-datocms';

function RealtimeLatestBlogPosts({ subscription }) {
  const { data, error, status } = useQuerySubscription(subscription);

  return <LatestBlogPosts data={data} error={error} status={status} />;
}
```

Then, in our page component, we can replace the `<LatestBlogPosts />` component with `<RealtimeLatestBlogPosts />`:

```jsx
export default async function Page() {
  const data = await fetchContent();

  return (
    <RealtimeLatestBlogPosts
      subscription={{
        query: PAGE_CONTENT_QUERY,
        initialData: data,
        token: process.env.NEXT_DATOCMS_API_TOKEN,
      }}
    />
  );
}
```

### Draft Mode + `useQuerySubscription`

Perhaps a more common scenario is activating real-time updates not for every visitor, **but only for content editors** in [Draft Mode](/docs/next-js/setting-up-next-js-draft-mode.md), and also showing records in draft:

(Video content)

In this case, the page component will change a bit, as we need to check draft mode activation and either render `<RealtimeLatestBlogPosts />` or `<LatestBlogPosts />`:

```jsx
function fetchContent({ includeDrafts }) {
  return ;
}

export default async function Page() {
  const { isEnabled } = draftMode();

  const data = await performRequest(PAGE_CONTENT_QUERY, { includeDrafts: isEnabled });

  if (isEnabled) {
    return (
      <RealtimeLatestBlogPosts
        subscription={{
          query: PAGE_CONTENT_QUERY,
          initialData: data,
          environment: process.env.NEXT_DATOCMS_ENVIRONMENT,
          token: process.env.NEXT_DATOCMS_API_TOKEN,
        }}
      />
    );
  }

  return <LatestBlogPosts data={data} />
}
```

In summary, the pattern to follow on every page is this:

1.  Do not place the actual content of the page directly inside the `Page` component, but in a secondary component (ie. `<Content />`);
    
2.  Create a real-time wrapper component (ie. `<Realtime />`) that utilizes the `useQuerySubscription` hook, and then renders the `<Content />`;
    
3.  Create the actual Page component and have it return either `<Realtime />`, or `<Content />` based on whether draft mode is active or not.
    

### DRYing everything up

Repeating this pattern for each page can become repetitive and prone to errors, but it is possible to make the code extremely compact and DRY (Don't Repeat Yourself) by using helper functions that generate both the `<Page />` and `<Realtime />` components for you. This way, you can focus solely on the `<Content />` component, which is what actually contains the content of your page.

To see an example of these helper functions, we recommend you take a look at the code of one of our Next.js Starter Kit — for instance, [this is a page component](https://github.com/datocms/nextjs-starter-kit/blob/main/src/app/\(base-layout\)/real-time-updates/page.tsx), [this is a real-time component](https://github.com/datocms/nextjs-starter-kit/blob/main/src/app/\(base-layout\)/real-time-updates/RealTime.tsx), while [this is the actual content](https://github.com/datocms/nextjs-starter-kit/blob/main/src/app/\(base-layout\)/real-time-updates/Content.tsx) — but of course, you can customize them as you prefer to best fit them into your project.

If, however, you want to directly see the end result and the experience for editors, we recommend launching the starter from here:

Next.js Starter Kit

(Image content)

Next.js Starter Kit

Publish this demo online with just three clicks in a matter of minutes.

[Deploy the demo project](https://dashboard.datocms.com/deploy?repo=datocms/nextjs-starter-kit:main) (Image content)

---

# Using DatoCMS Cache Tags

Using [Next.js Cache Tags](https://nextjs.org/docs/app/building-your-application/caching#fetch-optionsnexttags-and-revalidatetag), you can build pages that respond as pre-rendered content, with the ability to invalidate them later, when the data changes. The idea itself is rather powerful, but as it often happens in computer science, the challenge isn't so much with caching but more about knowing when to invalidate that cache. This is where things get tricky.

Fortunately, we have a solution: [DatoCMS Cache Tags](/docs/content-delivery-api/cache-tags.md) have been designed to **simplify the notoriously difficult problem of caching for developers!**

## **Preamble:** How do Next.js cache tags work?

This diagram provides a summary of the essential steps for understanding [On-Demand Revalidation](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#on-demand-revalidation) in Next.js through cache tags:

(Image content)

When the browser requests a page, Next.js by default, responds with a `Cache-Control: public, max-age=0, must-revalidate` header. This tells the browser to always verify from the server if a newer version of the page is available. If there's no change, the server responds with the status  [304](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/304), therefore saving bandwidth and time. This is referred to as the "revalidate" pattern.

The first time the browser requests a page, both the **Full route cache** and the **Data cache** will be empty, resulting in two `MISS` answers that trigger the `fetch()` requests contained in your routes. The results of those `fetch()` calls will be stored and tagged in Next.js Data Cache. After that, the entire page will be stored in the Next.js Full Route Cache, and marked with the same set of cache tags.

Once the cache has been created, Next.js will be able to answer the following requests with the pre-rendered result and no execution of code, until a [`revalidateTag()`](https://nextjs.org/docs/app/api-reference/functions/revalidateTag) is invoked (for instance, due to a route handler connected to a webhook). In this case, the cache will be cleared and the process will restart from the beginning.

## How to implement DatoCMS Cache Tags with Next.js

Given that Next.js implements cache tags, and DatoCMS provides cache tags... well, the first strategy that comes to mind is to use the Cache Tags of DatoCMS directly as the [`next.tags` option](https://nextjs.org/docs/app/building-your-application/caching#fetch-optionsnexttags-and-revalidatetag) in the `fetch()` calls of your own Next.js project, right?

Unfortunately, this is not possible, because [Next.js can only associate up to a maximum of 64 tags for each `fetch()` request](https://nextjs.org/docs/app/api-reference/functions/fetch#optionsnexttagshttps://nextjs.org/docs/app/api-reference/functions/fetch#optionsnexttags), while DatoCMS can return more than 64 tags per query.

To circumvent the problem, there is an alternative solution, which however requires the use of some type of persistent database. Great options are [Turso](https://turso.tech/) or [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres).

### The idea

Before we delve into the details, let's focus on the pattern we're aiming for:

-   Implement a function — i.e., `executeQuery()` — responsible for executing a GraphQL query using the DatoCMS Content Delivery API, and caching the result.
    
    1.  To be able to invalidate this request later, the `fetch()` needs to tag the request. We'll use a single tag and call it "Query ID", as it will be unique for each query.
        
    2.  Before returning the result of the query, `executeQuery()` needs to read the `X-Cache-Tags` header in the response, and save the "Query ID to DatoCMS Cache Tags" mappings in the DB.
        
-   Implement a route handler listening for ["Cache Tag Invalidation" events](/docs/content-delivery-api/cache-tags.md#step-3-implement-the-invalidate-cache-tag-webhook). The route needs to:
    
    1.  Take from the webhook payload the DatoCMS Cache Tags that need to be invalidated;
        
    2.  Search the DB for all the Query IDs linked to these cache tags;
        
    3.  Use [`revalidateTag()`](https://nextjs.org/docs/app/api-reference/functions/revalidateTag) to invalidate all the identified Query IDs.
        
-   In each route that uses `executeQuery()`, set up `dynamic = 'force-static'` as [Route Segment Config](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config).
    

### The actual code

We have prepared a [Next.js project perfectly configured to integrate with DatoCMS Cache Tags](https://github.com/datocms/nextjs-with-cache-tags-starter). Every part of the code is thoroughly commented to assist you in understanding.

We recommend starting from the ["Useful resources to navigate the code"](https://github.com/datocms/nextjs-with-cache-tags-starter?tab=readme-ov-file#useful-resources-to-navigate-the-code) section of the README for a general overview, and links to the most important parts of the code in the repo.

---

# Nuxt + DatoCMS Overview

Nuxt is an approachable tool for building projects based on Vue.js. It includes file-system routing, minimal configuration, and a set of meaningful conventions: it's the right tool to start a Vue.js application without reinventing the wheel each time.

DatoCMS is the perfect companion to Nuxt since it offers content, images and videos on a globally-distributed CDN. With this combo, you can have an **infinitely scalable website, ready to handle prime-time TV traffic spikes, at a fraction of the regular cost.**

> [!PROTIP] Pro tip: Build a Blog With Nuxt and DatoCMS
> For a step-by-step tutorial on integrating DatoCMS into a Nuxt blog, [check out this guide](https://www.datocms.com/blog/how-to-build-a-nuxt-blog.md). It covers creating content models, adding and retrieving blog posts, handling dynamic routing, and offers tips on styling your blog for a polished look.

Our [marketplace](https://www.datocms.com/marketplace/starters.md) features different demo projects on Nuxt, so you can learn and get started easily:

[

(Image content)

Nuxt Starter Kit

Try this demo »

](https://www.datocms.com/marketplace/starters/nuxt-starter-kit.md)

### Fetching contents from our GraphQL API

First, create a new Nuxt application, which sets up a basic Nuxt application for you. To create a project, run the following command:

Terminal window

```bash
npx nuxi init nuxt-app
```

Then enter inside the project directory, install the dependencies, and start the development server:

Terminal window

```bash
cd nuxt-app
npm run dev
```

We also need the [`@datocms/cda-client` package](https://github.com/datocms/cda-client), which provides a series of convenient utilities for making calls to the Content Delivery API:

Terminal window

```bash
npm i --save @datocms/cda-client
```

Nuxt comes with a [set of methods](https://v3.nuxtjs.org/getting-started/data-fetching) for fetching data from any API. The best way to retrieve data from Dato's GraphQL API is building a custom composable relying on `useFetch`:

```javascript
import { buildRequestInit } from '@datocms/cda-client';

export function useQuery(query, options) {
  const config = useRuntimeConfig();

  const optionsWithToken = {
    ...options,
    token: config.datocmsApiToken,
  };

  return useFetch('https://graphql.datocms.com/', {
    ...buildRequestInit(query, optionsWithToken),
    key: hash([query, optionsWithToken]),
    transform: ({ data, errors }) => {
      if (errors)
        throw new Error(
          `Something went wrong while executing the query: ${JSON.stringify(errors)}`,
        );

      return data;
    },
  });
}
```

The DatoCMS API token can be stored in an [environment variable](https://v3.nuxtjs.org/getting-started/configuration#environment-variables-and-private-tokens) and provided to Nuxt application via the `nuxt.config.ts` file:

```javascript
export default defineNuxtConfig({
  runtimeConfig: {
    // set by NUXT_DATOCMS_API_TOKEN env variable
    datocmsApiToken: '',
  }
})
```

To create an API token for a DatoCMS project, go in the "Settings > API Tokens" section, making sure you only give it permission to access the (read-only) Content Delivery API.

(Video content)

Finally, you'll need to set up a `.env` file to store the DatoCMS token:

```plaintext
DATO_CMS_TOKEN=<THE_TOKEN_YOU_JUST_CREATED>
```

You can then use the composable in your pages and layouts:

```javascript
<script setup>
const QUERY = `
  query {
    blog {
      title
    }
  }
`;

const { data, error } = useQuery(QUERY);
</script>

<template>
  <p v-if="error">Something bad happened!</p>
  <p v-else>Data: <code>{{ JSON.stringify(data) }}</code></p>
</template>
```

The `QUERY` is the GraphQL query, and of course, it depends on the models available in your specific DatoCMS project. You can learn everything you need regarding how to build GraphQL queries on our [Content Delivery API documentation](/docs/content-delivery-api.md).

---

# Include draft contents

While you're working on a Nuxt website, it may be useful to include draft contents from DatoCMS: this way, you can preview how the site will look in the end before actually publishing any record.

To do that, you need to tell our GraphQL API to include draft records when executing the queries. The `X-Include-Drafts` is one of many headers you can use to shape up the behavior of the Content Delivery API. Check out the other [available headers in the Content Delivery API](/docs/content-delivery-api/api-endpoints.md).

If you want a preview of the contents while working on the site in development mode, we can do as follow.

First, change the `nuxt.config.ts` file to expose the current environment:

```javascript
// In the nuxt.config.ts

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      env: process.env.NODE_ENV
    }
  }
})
```

Then, in the pages you can check the environment to decide to include draft records or not:

```javascript
<script setup>
const QUERY = `
  {
    blog { title }
  }
`;

const config = useRuntimeConfig()

const { data, error } = await useQuery(QUERY, {
  includeDrafts: config.env !== 'production'
});
</script>
```

---

# Responsive images

One of the advantages of using DatoCMS is its [`responsiveImage` query](/docs/content-delivery-api/images-and-videos.md#responsive-images), which will return **pre-computed image attributes that will help you setting up responsive images in your frontend without any additional manipulation**.

To make it even easier to use, we offer a Vue component ready to use to render responsive, progressive images on your projects. The package called [`vue-datocms`](https://github.com/datocms/vue-datocms) exposes an `<Image />` component and pairs perfectly with the `responsiveImage` query.

Our solution offers similar advantages of using [NuxtImage](https://image.nuxtjs.org/), with the benefit of having beautiful low-quality image placeholders (LQIP) in base64 format embedded directly within the page and responsive images optimized for the user browser and resolution. Images are managed directly via the DatoCMS Media section:

(Video content)

To take advantage of it, install the [`vue-datocms`](https://github.com/datocms/vue-datocms) package:

Terminal window

```bash
yarn add vue-datocms
```

Then, inside your Nuxt page, feed content coming from a [`responsiveImage` query](/docs/content-delivery-api/images-and-videos.md#responsive-images) directly into the `<Image />` component:

```html
<script setup>
import { Image as DatocmsImage } from "vue-datocms";

const QUERY = `query HomePage($limit: IntType) {
  allBlogPosts(first: $limit) {
    id
    title
    coverImage {
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
}`;

const { data, error } = await useQuery(QUERY);
</script>

<template>
  <div>
    <article v-for="blogPost in data.allBlogPosts" :key="blogPost.id">
      <DatocmsImage :data="blogPost.coverImage.responsiveImage" />
      <h1>{{ blogPost.title }}</h1>
    </article>
  </div>
</template>
```

The `vue-datocms` package also offer a `<NakedImage />` component which generates minimum JS footprint, outputs a single `<picture />` element and implements lazy-loading using the native [`loading="lazy"` attribute](https://web.dev/articles/browser-level-image-lazy-loading). You can refer to the package [README](https://github.com/datocms/vue-datocms/tree/master/src/components/Image) to learn more.

---

# Displaying videos

One of the advantages of using DatoCMS instead of other content management systems is its `video` query, which will return **pre-computed video attributes that will help you display videos in your frontend without any additional manipulation**.

To make it easy to offer optimized, progressive videos on your projects, we offer a package called [`vue-datocms`](https://github.com/datocms/vue-datocms) that exposes a `<VideoPlayer />` component and pairs perfectly with the video query.

To take advantage of it, install the vue-datocms package:

Terminal window

```bash
npm install vue-datocms
```

Then, inside your page, feed content coming from a `video` query directly into the `<VideoPlayer />` component:

```html
<script setup>
import { VideoPlayer } from "vue-datocms";

const QUERY = `query HomePage($limit: IntType) {
  allBlogPosts(first: $limit) {
    id
    title
    coverVideo {
      video {
        muxPlaybackId
        title
        width
        height
        blurUpThumb
      }
    }
  }
}`;

const { data } = await useQuery(QUERY);
</script>

<template>
  <div v-if="data">
    <article v-for="blogPost of data.allBlogPosts" v-bind:key="blogPost.id">
      <h6>{{blogPost.title}}</h6>
      <VideoPlayer :data="blogPost.coverVideo.video" />
    </article>
  </div>
</template>
```

---

# Structured Text fields

Rich text in DatoCMS is stored in [Structured Text](/docs/content-modelling/structured-text.md) fields, which lets us use it in many different contexts, from HTML in the browser to speech fulfillments in voice interfaces, if that's what you want.

There's a lot to be said about Structured Text and the extensibility of it, but for now let's just say that it returns content in a particular [JSON format called `dast`](/docs/structured-text/dast.md) which will resemble this example:

```json
{
  "schema": "dast",
  "document": {
    "type": "root",
    "children": [
      {
        "type": "heading",
        "level": 1,
        "children": [
          {
            "type": "span",
            "marks": [],
            "value": "Hello world!"
          }
        ]
      }
    ]
  }
}
```

To make it easy to convert this format in HTML inside your Nuxt projects, we provide a package called [`vue-datocms`](https://github.com/datocms/vue-datocms) that exposes a `<StructuredText />` component that does all the tedious work for you.

To take advantage of it, install the [`vue-datocms`](https://github.com/datocms/vue-datocms) package if you haven't already:

Terminal window

```bash
yarn add vue-datocms
```

Then, inside your page, make a [GraphQL query to fetch a Structured Text field](/docs/content-delivery-api/structured-text-fields.md), and feed the result to the `data` prop of a `<StructuredText />` component:

```html
<script setup>
import { StructuredText as DatocmsStructuredText } from "vue-datocms";

const QUERY = `query HomePage($limit: IntType) {
  allBlogPosts(first: $limit) {
    id
    title
    content {
      value
    }
  }
}`;

const { data } = await useQuery(QUERY);
</script>

<template>
  <div>
    <article v-for="blogPost in data.allBlogPosts" :key="blogPost.id">
      <h1>{{ blogPost.title }}</h1>
      <DatocmsStructuredText :data="blogPost.content" />
    </article>
  </div>
</template>
```

## Rendering special nodes

Other than "regular" formatting nodes (paragraphs, lists, etc.), Structured Text documents can contain three particular types of nodes:

-   [`itemLink` nodes](/docs/structured-text/dast.md#itemLink) are just like regular HTML hyperlinks, but point to other records instead of URLs;
    
-   [`inlineItem` nodes](/docs/structured-text/dast.md#inlineItem) lets you directly embed a reference to a record in-between regular text;
    
-   [`block` nodes](/docs/structured-text/dast.md#block) lets you embed a DatoCMS block record in-between regular paragraphs;
    
-   [`inlineBlock` nodes](/docs/structured-text/dast.md#block) lets you embed a DatoCMS block record in-between regular text;
    

If a Structured Text document contains one of these nodes, then we need to change the GraphQL query, so that we also fetch all the records and blocks it references. As an example, if the field can link to other Blog posts, and can embed blocks of type "Image block" and "Mention block", then the query should change like this:

```jsx
const HOMEPAGE_QUERY = `query HomePage($limit: IntType) {
  allBlogPosts(first: $limit) {
    id
    title
    content {
      value
      blocks {
        __typename
        ... on ImageBlockRecord {
          id
          image { url alt }
        }
      }
      inlineBlocks {
        ... on RecordInterface {
          id
          __typename
        }
        ... on MentionBlockRecord {
          username
        }
      }
      links {
        __typename
        ... on BlogPostRecord {
          id
          slug
          title
        }
      }
    }
  }
}`;
```

We also need to tell `<StructuredText />` how you want such nodes to be rendered:

```html
<script setup>
import { h } from 'vue'

const renderInlineRecord = ({ record }) => {
  if (record.__typename === 'BlogPostRecord') {
    return h('a', { href: `/blog/${record.slug}` }, [record.title]);
  }
  return null;
};

const renderLinkToRecord = ({ record, children }) => {
  if (record.__typename === 'BlogPostRecord') {
    return h('a', { href: `/blog/${record.slug}` }, children);
  }
  return null;
};

const renderBlock = ({ record, key }) => {
  if (record.__typename === 'ImageBlockRecord') {
    return h(DatocmsImage, { key, props: { data: record.image.responsiveImage } });
  }
  return null;
};

const renderInlineBlock = ({ record, key }) => {
  if (record.__typename === 'MentionBlockRecord') {
    return h('code', { key }, `@${record.username}`);
  }
  return null;
};

// ...
</script>

<template>
  <div>
    <article v-for="blogPost of data.allBlogPosts" :key="blogPost.id">
      <h1>{{ blogPost.title }}</h1>
      <datocms-structured-text
        :data="blogPost.content"
        :render-inline-record="renderInlineRecord"
        :render-link-to-record="renderLinkToRecord"
        :render-block="renderBlock"
        :render-inline-block="renderInlineBlock"
      />
    </article>
  </div>
</template>
```

---

# Adding SEO to Nuxt pages

Similarly to what we offer with [responsive images](/docs/nuxt/managing-images.md), our GraphQL API also offers a way to fetch [**pre-computed SEO meta tags**](/docs/content-delivery-api/seo-and-favicon.md) **based on the content you insert inside DatoCMS**.

You can easily use this information inside your Nuxt app with the help of our [`vue-datocms`](https://github.com/datocms/vue-datocms) package.

Here's a sample of the meta tags you can automatically generate:

```html
<title>DatoCMS Blog - DatoCMS</title>
<meta property="og:title" content="DatoCMS Blog" />
<meta name="twitter:title" content="DatoCMS Blog" />
<meta name="description" content="Lorem ipsum..." />
<meta property="og:description" content="Lorem ipsum..." />
<meta name="twitter:description" content="Lorem ipsum..." />
<meta property="og:image" content="https://www.datocms-assets.com/..." />
<meta property="og:image:width" content="2482" />
<meta property="og:image:height" content="1572" />
<meta name="twitter:image" content="https://www.datocms-assets.com/..." />
<meta property="og:locale" content="en" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="DatoCMS" />
<meta property="article:modified_time" content="2020-03-06T15:07:14Z" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:site" content="@datocms" />
<link sizes="16x16" type="image/png" rel="icon" href="https://www.datocms-assets.com/..." />
<link sizes="32x32" type="image/png" rel="icon" href="https://www.datocms-assets.com/..." />
<link sizes="96x96" type="image/png" rel="icon" href="https://www.datocms-assets.com/..." />
<link sizes="192x192" type="image/png" rel="icon" href="https://www.datocms-assets.com/..." />
```

To do that, install the [`vue-datocms`](https://github.com/datocms/vue-datocms) package:

Terminal window

```bash
yarn add vue-datocms
```

Then, inside your page, feed content coming from a `faviconMetaTags` or `_seoMetaTags` query into the `toHead` function and combine that with the [`useHead`](https://v3.nuxtjs.org/api/composables/use-head) composable:

```html
<script setup>
import { toHead } from "vue-datocms";

const QUERY = `query {
  site: _site {
    favicon: faviconMetaTags {
      attributes
      content
      tag
    }
  }
  blog {
    seo: _seoMetaTags {
      attributes
      content
      tag
    }
  }
}`;

const { data } = await useQuery(QUERY);

useHead(() => {
  if (!data.value) return {}

  return toHead(data.value.blog.seo, data.value.site.favicon)
})
</script>
```

Want to know more about SEO customization in DatoCMS? Check out this video tutorial:

[

(Image content)

Working with and customizing SEO Fields

Play video »

](https://youtu.be/WjF10isSjS0)

---

# Real-time updates

Live updates are useful both for content editors and the regular visitors of your app/website:

-   Content-editors in can **see drafts directly in the website**, without having to refresh the page;
    
-   Visitors can **immediately see new content as it gets published**, allowing all kinds of real-time interactions with your website/app (ie. live-news coverage).
    

(Video content)

Nuxt and [`vue-datocms`](https://github.com/datocms/vue-datocms) together make it easy to use our [Real-time Updates API](/docs/real-time-updates-api.md) to perform such changes, as it only involves adding a composable to your pages.

### How to use the `useQuerySubscription` composable

The [`vue-datocms`](https://github.com/datocms/vue-datocms) package exposes a [`useQuerySubscription`](https://github.com/datocms/vue-datocms/tree/master/src/composables/useQuerySubscription) function that makes it trivial to make any Nuxt page updated in real-time. The composable works by streaming any changes to the GraphQL response to the browser.

The following code shows a complete example that **activates real-time updates for any visitor** of your website:

```html
<script setup>
import { useQuerySubscription } from "vue-datocms";

const statusMessage = {
  connecting: 'Connecting to DatoCMS...',
  connected: 'Connected to DatoCMS, receiving live updates!',
  closed: 'Connection closed',
};

const runtimeConfig = useRuntimeConfig();

const QUERY = `
  query {
    blogPost {
      title
    }
  }
`;

const { status, error, data } = useQuerySubscription({
  query: QUERY,
  token: config.datocmsApiToken
});
</script>

<template>
  <div>
    <p>Connection status: {{ statusMessage[status] }}</p>
    <div v-if="error">
      <h1>Error: {{ error.code }}</h1>
      <div>{{ error.message }}</div>
      <pre v-if="error.response">{{ JSON.stringify(error.response, null, 2) }}</pre>
    </div>
    <div v-if="data">{{ JSON.stringify(data, null, 2) }}</div>
  </div>
</template>
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
    <p>Details: cache-dub4376-DUB 1762214483 977936957</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

# Astro + DatoCMS Overview

Astro is a modern static site generator and web framework that allows developers to build fast, **content-focused websites** using multiple frontend frameworks simultaneously. Its key differentiator is its "partial hydration" approach, which only sends JavaScript to the browser when necessary, resulting in extremely lightweight and fast-loading pages - making it particularly well-suited for content-heavy sites like blogs, documentation, and marketing pages where performance is crucial.

DatoCMS is the perfect companion to Astro.js since it offers content, images and videos on a globally-distributed CDN. With this combo, you can have an **infinitely scalable website, ready to handle prime-time TV traffic spikes at a fraction of the regular cost.**

In the next paragraphs, will see how easy it is to combine Astro with DatoCMS.

### Fetching content from our GraphQL API

Let's start by installing `@datocms/cda-client`, a lightweight, TypeScript-ready package that offers various helpers around the native Fetch API to perform GraphQL requests towards [DatoCMS Content Delivery API](/docs/content-delivery-api/api-endpoints.md):

Terminal window

```bash
npm install --save @datocms/cda-client
```

We can now create a function we can use in all of our pages and components that need to fetch content from DatoCMS.

Create a new directory called `lib`, and inside of it, add a file called `datocms.js`:

```javascript
import { executeQuery as libExecuteQuery } from "@datocms/cda-client";
import { DATOCMS_CDA_TOKEN } from "astro:env/server";

export async function executeQuery(query, options) {
  return await libExecuteQuery(query, {
    ...options,
    token: DATOCMS_CDA_TOKEN,
  });
}
```

Make sure you set `DATOCMS_CDA_TOKEN` as an actual API token of your DatoCMS project. You can create a new one under "Settings > API Tokens".

(Video content)

We can now effortlessly build our first Astro page, using data from DatoCMS:

src/pages/index.astro

```javascript
---
const query = `
  query HomeQuery {
    blogPost { title }
  }
`;

const data = await executeQuery(query);
---

<article>
  <h1>{data.blogPost.title}</h1>
</article>
```

You can learn everything you need regarding how to build GraphQL queries on our [Content Delivery API documentation](/docs/content-delivery-api.md).

---

# Accessing draft/updated content

If you have [draft/published mode](/docs/general-concepts/draft-published.md) enabled on some of your models, you can use [the `X-Include-Drafts` header](/docs/content-delivery-api/api-endpoints.md#include-drafts) to **access records at their latest version available** instead of the currently published one

Pages and layouts can utilize the `includeDrafts` option of the `executeQuery` function in their server load functions:

src/pages/index.astro

```javascript
---
const query = `
  query HomeQuery {
    blogPost { title }
  }
`;

const data = await executeQuery(query, { includeDrafts: true });
---

<article>
  <h1>{data.blogPost.title}</h1>
</article>
```

The `X-Include-Drafts` is one of many headers you can use to shape up the behavior of the Content Delivery API. Check out the other [available headers in the Content Delivery API](/docs/content-delivery-api/api-endpoints.md).

---

# Managing images

One of the major advantages of using DatoCMS instead of any other content management systems is its [`responsiveImage` query](/docs/content-delivery-api/images-and-videos.md#responsive-images), which will return pre-computed image attributes that will help you setting up responsive images in your frontend without any additional manipulation.

To make it even easier to offer responsive, progressive, lazy-loaded images on your projects, we offer a package called [`@datocms/astro`](https://github.com/datocms/astro-datocms) that exposes an `<Image />` component and pairs perfectly with the `responsiveImage` query:

(Video content)

To take advantage of it, install the [`@datocms/astro`](https://github.com/datocms/astro-datocms) package:

Terminal window

```bash
yarn add @datocms/astro
```

Before using the image component, it is necessary to obtain the necessary data by running a GraphQL query using [`responsiveImage`](/docs/content-delivery-api/images-and-videos.md#responsive-images).

Then, inside your Astro component or page, feed content coming from a `responsiveImage` query directly into the `<Image />` component:

src/pages/index.astro

```javascript
---
import { Image } from '@datocms/astro';

const query = `
  query HomeQuery {
    blogPost {
    title
    cover {
      responsiveImage(imgixParams: { fit: crop, w: 300, h: 300, auto: format }) {
        # always required
        src
        srcSet
        width
        height

        # not required, but strongly suggested!
        alt
        title

        # LQIP (base64-encoded)
        base64

        # you can omit 'sizes' if you explicitly pass the 'sizes' prop to the image component
        sizes
      }
    }
  }
`;
const data = await executeQuery(query);
---

<article>
  <h1>{data.blogPost.title}</h1>
  <Image data={data.blogPost.cover.responsiveImage} />
</article>
```

The image component creates zero JS footprint, produces a single <picture /> element, and implements lazy-loading using the native [`loading="lazy"` attribute](https://web.dev/articles/browser-level-image-lazy-loading). You can refer to the package [README](https://github.com/datocms/astro-datocms/tree/main/src/Image) to learn more.

---

# Displaying videos

One of the advantages of using DatoCMS instead of other content management systems is its [`video`](/docs/content-delivery-api/images-and-videos.md#videos) query, which will return **pre-computed video attributes that will help you display videos in your frontend without any additional manipulation**.

Let's begin by defining our GraphQL query, which is necessary to retrieve data for the video player:

src/pages/index.astro

```javascript
---
const query = `
  query HomeQuery {
    blogPost {
    title
    coverVideo {
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
      }
    }
  }
`;
const data = await executeQuery(query);
---

<article>
  <h1>{data.blogPost.title}</h1>
  ...
```

The video player will be an [Astro Island](https://docs.astro.build/en/concepts/islands/), pre-rendered on the server, and then re-hydrated on the client using [client directives](https://docs.astro.build/en/reference/directives-reference/#client-directives).

The [UI framework](https://docs.astro.build/en/guides/framework-components/) for this island can be any among [React](https://github.com/datocms/react-datocms/blob/master/docs/video-player.md), [Vue](https://github.com/datocms/vue-datocms/tree/master/src/components/VideoPlayer), or [SvelteKit](https://github.com/datocms/datocms-svelte/tree/main/src/lib/components/VideoPlayer), since we have developed a `<VideoPlayer />` component for each of these choices. Choose based on your personal preferences.

For the purposes of this guide, we will choose React, and therefore we will install the [`react-datocms`](https://github.com/datocms/react-datocms) package:

```plaintext
npm install react-datocms
```

Now you can feed content coming from a `video` query directly into the `<VideoPlayer />` component:

src/pages/index.astro

```jsx
---
import { VideoPlayer } from '@datocms/react';

const query = `...`;

const data = await executeQuery(query);
---

<VideoPlayer data={data.blogPost.coverVideo.video} client:visible />
```

The `client:visible` prop is used to ensure that the component loads and hydrates once the component has entered the user’s viewport. However, you can choose any among the other [client directives](https://docs.astro.build/en/reference/directives-reference/#client-directives) made available by Astro.

---

# Structured Text fields

Rich text in DatoCMS is stored in [Structured Text](/docs/content-modelling/structured-text.md) fields, which lets us use it in many different contexts, from HTML in the browser to speech fulfillments in voice interfaces, if that's what you want.

There's a lot to be said about Structured Text and the extensibility of it, but for now let's just say that it returns content in a particular [JSON format called `dast`](/docs/structured-text/dast.md) which will resemble this example:

```json
{
  "schema": "dast",
  "document": {
    "type": "root",
    "children": [
      {
        "type": "heading",
        "level": 1,
        "children": [
          {
            "type": "span",
            "marks": [],
            "value": "Hello world!"
          }
        ]
      }
    ]
  }
}
```

To make it easy to convert this format in HTML inside your Astro projects, we released a package called [`@datocms/astro`](https://github.com/datocms/astro-datocms) that exposes a `<StructuredText />` component that does all the tedious work for you.

To take advantage of it, install the [`@datocms/astro`](https://github.com/datocms/astro-datocms) package if you haven't already:

Terminal window

```bash
yarn add @datocms/astro
```

Now let's make a [GraphQL query to fetch a Structured Text field](/docs/content-delivery-api/structured-text-fields.md) and feed the result to the `data` prop of a `<StructuredText />` component:

src/pages/index.astro

```javascript
---
import { StructuredText } from '@datocms/astro';

const query = `
  query HomeQuery {
    blogPost {
      title
      content {
        value
      }
    }
  }
`;
const data = await executeQuery(query);
---

<StructuredText data={data.blogPost.content} />
```

## Rendering special nodes

Other than "regular" formatting nodes (paragraphs, lists, etc.), Structured Text documents can contain three special types of node:

-   [`itemLink` nodes](/docs/structured-text/dast.md#itemLink) are just like regular HTML hyperlinks, but point to other records instead of URLs;
    
-   [`inlineItem` nodes](/docs/structured-text/dast.md#inlineItem) lets you directly embed a reference to a record in-between regular text;
    
-   [`block` nodes](/docs/structured-text/dast.md#block) lets you embed a DatoCMS block record in-between regular paragraphs;
    
-   [`inlineBlock` nodes](/docs/structured-text/dast.md#block) lets you embed a DatoCMS block record in-between regular text;
    

If a Structured Text document contains one of these nodes, then we need to change the GraphQL query, so that we also fetch all the records and blocks it references. As an example, if the field can link to other Blog posts, and can embed blocks of type "Image block" and "Mention block", then the query should change like this:

```javascript
const query = `query HomeQuery {
  blogPostfirst {
    id
    title
    content {
      value
      blocks {
        ... on RecordInterface {
          id
          __typename
        }
        ... on ImageBlockRecord {
          image { url alt }
        }
      }
      inlineBlocks {
        ... on RecordInterface {
          id
          __typename
        }
        ... on MentionBlockRecord {
          username
        }
      }
      links {
        ... on RecordInterface {
          id
          __typename
        }
        ... on BlogPostRecord {
          slug
          title
        }
      }
    }
  }
}`;
```

You also need to instruct `<StructuredText />` on how to display these nodes. This can be done by using the `blockComponents`, `inlineRecordComponents`, and `linkToRecordComponents` props to specify the Astro component to render the node.

src/pages/index.astro

```jsx
---
import { StructuredText } from '@datocms/astro';

import ImageBlock from '~/components/ImageBlock/index.astro';
import MentionBlock from '~/components/MentionBlock/index.astro';
import InlineBlogPost from '~/components/InlineBlogPost/index.astro';
import LinkToBlogPost from '~/components/LinkToBlogPost/index.astro';
---

<StructuredText
  data={blogPost.content}
  blockComponents={{
    ImageBlockRecord: ImageBlock,
  }}
  inlineBlockComponents={{
    MentionBlockRecord: MentionBlock,
  }}
  inlineRecordComponents={{
    BlogPostRecord: InlineBlogPost,
  }}
  linkToRecordComponents={{
    BlogPostRecord: LinkToBlogPost,
  }}
/>
```

The following rules will apply:

-   Astro components passed in `blockComponents` and `inlineBlockComponents` will be used to render blocks and will receive a `block` prop containing the actual block data.
    
-   Astro components passed in `inlineRecordComponents` will be used to render inline records and will receive a `record` prop containing the actual record.
    
-   Astro components passed in `linkToRecordComponents` will be used to render links to records and will receive the following props: `node` (the actual `'inlineItem'` node), `record` (the record linked to the node), and `attrs` (the custom attributes for the link specified by the node).

---

<html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
</body>
</html>

---

<html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
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
}
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
    <p>Details: cache-dub4342-DUB 1762214665 2012089627</p>
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
    <p>Details: cache-dub4384-DUB 1762214671 1326789933</p>
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
    <p>Details: cache-dub4344-DUB 1762214673 693913230</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

# Adding SEO to pages

Similarly to what we offer with [responsive images](/docs/next-js/managing-images.md), our GraphQL API also offers a way to fetch [**pre-computed meta tags**](/docs/content-delivery-api/seo-and-favicon.md) **based on the content you insert inside DatoCMS**.

Here's a sample of the meta tags you can automatically generate. It includes meta tags for SEO, social share and website favicons:

```html
<title>DatoCMS Blog - DatoCMS</title>
<meta property="og:title" content="DatoCMS Blog" />
<meta name="twitter:title" content="DatoCMS Blog" />
<meta name="description" content="Lorem ipsum..." />
<meta property="og:description" content="Lorem ipsum..." />
<meta name="twitter:description" content="Lorem ipsum..." />
<meta property="og:image" content="https://www.datocms-assets.com/..." />
<meta property="og:image:width" content="2482" />
<meta property="og:image:height" content="1572" />
<meta name="twitter:image" content="https://www.datocms-assets.com/..." />
<meta property="og:locale" content="en" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="DatoCMS" />
<meta property="article:modified_time" content="2020-03-06T15:07:14Z" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:site" content="@datocms" />
<link sizes="16x16" type="image/png" rel="icon" href="https://www.datocms-assets.com/..." />
<link sizes="32x32" type="image/png" rel="icon" href="https://www.datocms-assets.com/..." />
<link sizes="96x96" type="image/png" rel="icon" href="https://www.datocms-assets.com/..." />
<link sizes="192x192" type="image/png" rel="icon" href="https://www.datocms-assets.com/..." />
```

You can easily include all this information inside your Remix app with the help of our [`react-datocms`](https://github.com/datocms/react-datocms) package, so make sure to install it, if you've not already done it:

Terminal window

```bash
npm i --save react-datocms
```

### Adding SEO and social share meta tags

With Remix, you can specify meta tags for a page using the [`meta` export](https://remix.run/docs/en/v1/api/conventions#meta):

```javascript
export function meta({ data }) {
    title: "Something cool",
    description: "This becomes the nice preview on search results."
  };
};
```

With DatoCMS you can feed content coming from a [`_seoMetaTags` query](/docs/content-delivery-api/seo-and-favicon.md) directly into Remix by using the `toRemixMeta` function, which generates a compatible object for Remix's `meta` function:

```jsx
import { request } from "../lib/datocms";
import { toRemixMeta } from "react-datocms";
import { useLoaderData } from "remix";

const HOMEPAGE_QUERY = `
  {
    blog {
      seo: _seoMetaTags {
        attributes
        content
        tag
      }
    }
  }`;

export async function loader() {
  return request(HOMEPAGE_QUERY, {
    variables: { limit: 10 }
  });
}

export function meta({ data }) {
  return toRemixMeta(data.blog.seo);
};

export default function Home() {
  // ...
}
```

### Adding favicon links and meta tags

If you want to add all the `link` and `meta` tags needed to generate favicons for your website, you can use the `renderMetaTags` helper along with the `faviconMetaTags` GraphQL query:

> [!WARNING] Why not using the links export?
> Remix offers a [`links`](https://remix.run/docs/en/v1.1.1/api/conventions#links) export to define which `<link>` elements to add to the page, but for performance reasons [it doesn't receive any loader data](https://github.com/remix-run/remix/issues/32), so you cannot use it to render favicons meta tags! The best way to render them is using `renderMetaTags` in your root component, like in the example.

```jsx
import {
  Links,
  LiveReload,
  Meta,
  Form,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from 'remix';
import { renderMetaTags } from 'react-datocms';
import { load } from '~/lib/datocms';

export const loader = async ({ request }) => {
  return load(`
    {
      site: _site {
        favicon: faviconMetaTags(variants: [icon, msApplication, appleTouchIcon]) {
          attributes
          content
          tag
        }
      }
    }
  `);
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
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}
```

Want to know more about SEO customization in DatoCMS? Check out this video tutorial:

[

(Image content)

Working with and customizing SEO Fields

Play video »

](https://youtu.be/WjF10isSjS0)

---

<html>
<head><title>502 Bad Gateway</title></head>
<body>
<center><h1>502 Bad Gateway</h1></center>
</body>
</html>

---

# Real-time updates

Live updates can be extremely useful both for content editors and the regular visitors of your app/website:

-   Content-editors in Preview Mode can **see drafts directly in the production website**, without having to refresh the page;
    
-   Visitors can **immediately see new content as it gets published**, allowing all kinds of real-time interactions with your website/app (ie. live-news coverage).
    

(Video content)

Inside a Remix project, it's extremely easy to use our [Real-time Updates API](/docs/real-time-updates-api.md) to perform such changes, as it only involves adding a React hook to your page components.

### How to use the `useQuerySubscription` hook

The [`react-datocms`](https://github.com/datocms/react-datocms#live-real-time-updates) package exposes a [`useQuerySubscription` hook](https://github.com/datocms/react-datocms#live-real-time-updates) that makes it trivial to update any Remix page in real-time.

The hook works by streaming any changes present to the response of a GraphQL query directly to the browser, and it a `loader` responsibility to prepare an object compatible with the options of the hook itself.

The following code shows a complete example that **activates real-time updates for any visitor** of your website:

```jsx
import { useQuerySubscription } from "react-datocms";
import { load } from '~/lib/datocms';

const BLOG_POST_QUERY = `query HomePage {
  blogPost {
    title
  }
}`;

export async function loader() {
  return {
    subscription: {
      query: BLOG_POST_QUERY,
      initialData: await load(BLOG_POST_QUERY),
      token: process.env.DATOCMS_READONLY_TOKEN,
      environment: process.env.DATOCMS_ENVIRONMENT,
    },
  };
}

export default function Home({ subscription }) {
  const { data, error, status } = useQuerySubscription(subscription);

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
        <div>{JSON.stringify(data, null, 2)}</div>
      )}
    </div>
  );
}
```

### Preview Mode + `useQuerySubscription`

Another common scenario is being able to activate real-time updates of draft content **only for content editors** that are signed-in to the website via [Preview Mode](/docs/remix/setting-up-a-preview-mode-with-remix.md):

(Video content)

In this case, you don't want to expose your API token or pass down additional arguments to regular users, so:

-   Make sure to pass the `includeDrafts: true` option only if Preview Mode is active (that is, if `context.preview` is true), so that only content editors [will see draft content;](/docs/content-delivery-api/api-endpoints.md)
    
-   If Preview Mode is off, fill in the `subscription` prop with just `initialData` and `enabled: false` options, without any additional clutter.
    

Here's an example snippet:

```jsx
import { load } from '~/lib/datocms';

const BLOG_POST_QUERY = `
  query HomePage {
    blogPost {
      title
    }
  }
`;

export async function loader({ request }) {
  const session = await getSession(request.headers.get('Cookie'));
  const previewModeActive = session.has('preview');

  const initialData = await load(BLOG_POST_QUERY, {
    includeDrafts: previewModeActive,
  });

  return {
    subscription: previewModeActive
      ? {
          query: BLOG_POST_QUERY,
          initialData,
          token: process.env.DATOCMS_READONLY_TOKEN,
          environment: process.env.DATOCMS_ENVIRONMENT,
          includeDrafts: true,
        }
      : {
        enabled: false,
        initialData,
      };
  };
}
```

If you want to directly see the final result, we've prepared a [fully working Next.js blog](https://next-event-coverage-liveblog.vercel.app/), with real-time updates of draft content in Preview Mode:

Remix Blog

(Image content)

Remix Blog

Publish this demo online with just three clicks in a matter of minutes.

[Deploy the demo project](https://dashboard.datocms.com/deploy?repo=datocms/remix-example:main) (Image content)

---

# Using DatoCMS Cache Tags

DatoCMS and Remix make the perfect couple to provide a great user experience: using DatoCMS [Cache Tags](/docs/content-delivery-api/cache-tags.md), you can build websites, cache pages on a CDN for maximum performance, and don't worry about cache invalidation!

> [!WARNING]
> To take advantage of this technique, it is necessary to pair your Remix application with a [CDN capable of managing caching via tags](/docs/content-delivery-api/cache-tags.md#what-is-tag-based-cache-invalidation)! The CDN should be positioned above your Remix application, directly serving the visitors.

The whole recipe is made of two parts:

-   Obtain cache tags from DatoCMS and use them to instruct the CDN;
    
-   Invalidate cache entries through the use of a webhook.
    

## Step 1: Retrieve and apply cache tags

By adding a `X-Cache-Tags: true` header into your usual Content Delivery API GraphQL queries, the response will include a set of related cache tags in the `X-Cache-Tags` header:

```plaintext
$ curl 'https://graphql.datocms.com/' \
    -H 'Authorization: YOUR-API-TOKEN' \
    -H 'Content-Type: application/json' \
    -H 'Accept: application/json' \
    -H 'X-Cache-Tags: true' \
    --include \
    --data-binary '{ "query": "query { allPosts { title } }" }'

HTTP/2 200
...
X-Cache-Tags: BQD?* 2.a*q f7e N*r;L 6-KZ@ t#k[uP t#k[ub t#k[uU
...

{
  "data": {
    ...
  }
}
```

> [!POSITIVE] Cache tags are not readable, and that's a good thing!
> DatoCMS provides cache tags that are intentionally opaque, to prevent misinterpretation and misuse on your end. Cache invalidation is a complicated process with a high possibility of errors and overlooking specific edge-cases. Our cache tags help us handle these complexities for you.  Their non-transparent nature also allows us the flexibility to improve our tagging strategies in the future, without necessitating changes on your frontend.

The actual code to use to perform your queries should be something like this:

```javascript
import { rawExecuteQuery } from '@datocms/cda-client';

export async function executeQuery(query, options) {
  const [data, response] = await rawExecuteQuery(
    query,
    {
      ...options,
      returnCacheTags: true,
    },
  );

  const cacheTags = response.headers.get("x-cache-tags");

  return { data, cacheTags };
}
```

We've highlighted two elements in the code above:

-   with `returnCacheTags`, we set `X-Cache-Tags: true` instructing DatoCMS to return cache tags;
    
-   once the API responds, we retrieve cache tags with `response.headers.get("x-cache-tags")`.
    

Then, we return the data from the GraphQL query and the cache tags string.

Once we have this function to fetch content from DatoCMS, we need to export two functions from the Remix route files where we want to support cache tags, `loader()` and `headers()`:

```javascript
import { json } from "@remix-run/node";
import { executeQuery } from "lib/fetch-contents";

export const loader = async () => {
  const { data, cacheTags } = await executeQuery(SOME_GRAQHQL_QUERY);

  return json(
    { data },
    {
      headers: cacheTags
        ? {
            "Surrogate-Key": cacheTags,
            "Surrogate-Control": "max-age=31536000",
          }
        : {},
    }
  );
};

export const headers = ({ loaderHeaders }) => {
  const headers = new Headers();

  for (const header of ["surrogate-key", "surrogate-control"]) {
    const value = loaderHeaders.get(header);

    if (value) {
      headers.set(header, value);
    }
  }

  return headers;
};
```

The `loader()` function instructs Remix on how to fetch the data required to generate a page: we utilize the `json()` helper to return the result of our query so that it's available in our React component, but most importantly, we pass the headers options to configure how this data will be cached by the CDN (in our case, Fastly):

1.  `Surrogate-Control` instructs Fastly to cache this data for a year;
    
2.  `Surrogate-Key` instructs Fastly to mark this response with the tags coming from DatoCMS.
    

The `headers()` function is used to specify the headers that will be associated not with the data, but with the actual page. Instead of repeating a new query to DatoCMS, we take the headers we just returned from the loader, and set them as part of the response.

> [!WARNING] Headers can change depending on your CDN!
> Different CDNs use different names for the same concepts.
> 
> What we call *cache tags* are *surrogate keys* among some providers (like for Fastly, which we're using in this example) ; instead of *invalidate*, many use *purge*. Examples: [Netlify](https://docs.netlify.com/platform/caching/#purge-by-cache-tag), [Cloudflare](https://developers.cloudflare.com/cache/how-to/purge-cache/purge-by-tags/), [Fastly](https://docs.fastly.com/en/guides/purging-with-surrogate-keys).
> 
> Similarly, the names of the headers, or the format of the associated value, change from service to service: be sure to check the exact header name in the provider's documentation. Some examples:
> 
> -   [Fastly](https://docs.fastly.com/en/guides/working-with-surrogate-keys) uses `Surrogate-Key` with a space-separated list of tags;
>     
> -   [CloudFlare](https://developers.cloudflare.com/cache/how-to/purge-cache/purge-by-tags/#add-cache-tag-http-response-headers) uses the `Cache-Tag` header with comma-separated tags;
>     
> -   [Netlify](https://docs.netlify.com/platform/caching/#add-cache-tags) has Netlify-Cache-Tag with a comma-separated tag string.
>     
> 
> Also, be mindful of potential constraints regarding the length of the header. We strive to minimize tags as much as we can (for instance, we utilize an alphabet of 83 symbols), but the quantity and size of tags are contingent on the query.

## Step 2: Implement the "Invalidate cache tag" webhook

After tagging the responses, it's time to see how you can invalidate the cache when editors change content. First, inside your DatoCMS project Settings, create a new webhook and set as trigger the "Invalidate" event of the "Content Delivery API Cache Tags" entity:

(Video content)

When editors change content, DatoCMS will send a webhook containing all the cache tags that must be invalidated. The webhook request looks like this:

```json
POST /your/invalidation/endpoint HTTP/1.1
Content-Type: application/json

{
  "entity_type": "cda_cache_tags",
  "event_type": "invalidate",
  "entity": {
    "id": "cda_cache_tags",
    "type": "cda_cache_tags",
    "attributes": {
      "tags": ["N*r;L", "6-KZ@", "t#k[uP"]
    }
  },
  "related_entities": []
}
```

To process this request, you need to add an API endpoint in Remix that receives it and calls the CDN to request the invalidation of the cache associated with the tags:

```typescript
import { json } from "@remix-run/node";

async function invalidateFastlySurrogateKeys(serviceId, fastlyKey, keys) {
  return fetch(`https://api.fastly.com/service/${serviceId}/purge`, {
    method: "POST",
    headers: {
      "fastly-key": fastlyKey,
      "content-type": "application/json",
    },
    body: JSON.stringify({ surrogate_keys: keys }),
  });
}

export const action = async ({ request }) => {
  if (request.method !== "POST") {
    return json({ success: false }, 404);
  }

  if (
    request.headers.get("authorization") !==
    `Bearer ${process.env.CACHE_INVALIDATION_WEBHOOK_TOKEN}`
  ) {
    return json({ success: false }, 401);
  }

  const body = await request.json();

  const { tags } = body.entity.attributes;

  const response = await invalidateFastlySurrogateKeys(
    process.env.FASTLY_SERVICE_ID,
    process.env.FASTLY_KEY,
    tags
  );

  if (!response.ok) {
    const responseBody = await response.json();

    return json(responseBody, response.status);
  }

  return json({ success: true }, response.status);
};
```

> [!WARNING] The method of invalidating the cache varies depending on your CDN!
> The example above is again based on Fastly: depending on the service you're using, you'll have to use a slightly different method for invalidating the cache. Some examples:
> 
> -   [How to purge via surrogate keys on Fastly](https://docs.fastly.com/en/guides/purging-with-surrogate-keys)
>     
> -   [Cloudflare approach](https://developers.cloudflare.com/api/operations/zone-purge)
>     
> -   [Netlify's way](https://docs.netlify.com/platform/caching/#purge-by-cache-tag)

#### Invalidating on deploy

Even though it's not specifically related to the use of our Cache Tags, it's important to remember that when there's a cache layer above your application, you need to worry about invalidating this cache not only when incoming content from DatoCMS changes — as we did during this tutorial — but also when a new version of your application is deployed!

Fortunately, this usually happens much less frequently compared to a content change, and therefore it is often sufficient to handle this situation with a complete invalidation of the CDN cache at each deployment.

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
    <p>Details: cache-dub4366-DUB 1762214485 150927615</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

# Pricing Overview

All projects on DatoCMS start from the free plan and can be upgraded to a paid plan directly from the [Account dashboard](https://dashboard.datocms.com/).

The differences between plans, including features and all the available resources, are listed in detail on the [pricing page](https://www.datocms.com/pricing.md).

Limits, features, and resources of public paid plans may change in the future, but active subscriptions will remain on the plan you chose unless you decide to switch to a newer plan yourself. Free plan usage limits and resources may change unilaterally instead.

We don't want to trick anyone into buying more expensive plans that they have planned for, so if you are about to buy and plans changed meanwhile, please [contact support](https://www.datocms.com/support.md) and we'll help you out.

### Changing plans

Plan changes can be performed at any time, and take effect immediately.

We prorate the price when you change plans, so you are only billed for the cost of the new plan less the remaining unused amount from your current plan.

In case of a downgrade, prorated credits will be created, with a part used to pay the new invoice, and the remaining credit balance will be available for future use.

All plans have access to the bulk of DatoCMS features, with the Enterprise plan having additional features, dedicated to larger teams that need a higher focus on security and volumes. You can see all the features [in our dedicated page](https://www.datocms.com/features.md).

---

# Billing and pricing

When you enroll in a monthly plan, you are billed for the first month up-front and then again on the same date each month moving forward until you cancel. When you enroll in an annual plan, you are billed for the first year up-front and then again on the same date each year moving forward until you cancel.

Projects in monthly plans follow the completion date of the billing profile. You can view this information from your dashboard. These projects are invoiced and charged along with any overage accrued during the previous month.

### Overage billing

While your subscription renewal follows a monthly or yearly schedule from the date in which you started, the overages are reset on the 1st day of the month. Going over the monthly quota of resources incur an overage charge as outlined in your plan. Overages are not invoiced immediately though. To leave some room for manual intervention we issue invoices on the second working day of the month, so we can still do manual adjustments or check if necessary. Also we have some rules in place to minimize the number of payments that we process and documents that we generate. The rules are:

-   overages are billed only if they are more than €100, otherwise they will be added as "unbilled charges" that you might see in your dashboard
    
-   unbilled charges are then added automatically to the following subscription invoice, or they are billed when they go over the above threshold
    
-   on the invoice that you will receive for the overages, we'll show the date in which the overages are computed, which is always on the month following the one on which the overages are computed. For example if you see Oct 2nd it refers to the overages of September.
    
-   if you have existing credit, for example due to a plan change that generates credit, and the overages are fully paid by the credits, then the invoice is generated immediately even if below the €100 threshold
    

### Plan adjustments

When you go over the plan limits for features like models, collaborators or others that you have control over (e.g. not traffic, API calls, video), then we don't immediately issue an invoice for that.

The changes are computed every 60 minutes to avoid having multiple transactions and documents when changing limits. Say for example that you are adding two collaborators one after the other, we try to do a single plan change instead of two.

Similarly to what happens for overages, if the payment is covered by existing credit, then the change is done immediately, otherwise we add the amount to the unbilled charges until it reaches the €100 threshold or a new subscription invoice is generated.

---

# Payment failures and billing notifications

In case of payment failures, we will notify you by email, and automatically retry the payment **4 times over the next 21 days**. If payment still has not gone through after these attempts, and you have not contacted us, the project will be **temporarily deactivated** until you are able to complete payment. At any time, you can log in to your dashboard, enter new payment information, and tell our system to retry billing.

Project deactivation will only happen if the subscription payment itself fails, not if an overage payment fails. This is done to prevent unexpected overages from blocking your account. This is especially helpful for customers on an annual subscription, whose credit cards might've expired halfway through a subscription term.

### Notification types & recipients

In detail, this is how we handle notifications:

-   **Invoices**: All invoices are sent exclusively to the **billing email** associated with the account or organization.
    
-   **Failed Overage Payments**: Notifications regarding failed payments for overage charges are also sent solely to the **billing email**. Failed overage payments will not cause project deactivation.
    
-   **Critical Payment Issues**: If there is a payment issue with the subscription plan (not overages) that could lead to the **cancellation of your subscription and project deactivation**, we send notifications to the **billing email** and **project/organization owners**\*. These are sent as soon as payment fails, giving you time to resolve the issue before service is impacted.
    
-   **Subscription Deactivation & Reactivation**: If critical payment issues are not resolved in a timely manner, our system will automatically pause the subscription and deactivate your projects. These deactivation confirmation emails are sent to the **billing email** and **project/organization owners**\*. They will also get another email once billing is resolved and projects are reactivated.
    

| Notification Type | Billing Email | Project & Org Owner(s)\* | Org Viewers | Collaborators in Projects |
| --- | --- | --- | --- | --- |

| Invoices | ✅ | ❌ | ❌ | ❌ |
| Failed Overage Payments | ✅ | ❌ | ❌ | ❌ |
| Critical Payment Issues | ✅ | ✅ | ❌ | ❌ |
| Subscription Deactivation & Reactivation | ✅ | ✅ | ❌ | ❌ |

\*In larger organizations, only the first 50 owners (to join the org) will receive email notifications.

---

# Cancellations and refunds

You may cancel at any time during your billing cycle at no cost. To cancel a subscription you can either downgrade your subscription to the free plan or simply delete the account or organization holding the subscription. To downgrade you might need to delete or reduce the usages of your projects.

When cancelling the subscription any overage is tallied and charged immediately.

You can request a refund for a plan within 15 days of purchase. Refunds are issued to the card that was originally charged and may take up to 10 business days to process.

If you are not sure how long do you need the subscription for, then use the monthly subscription, it's normally more expensive but you get more flexibility to cancel.

---

# Credit card change

If your card expires, or if you need to change the credit card attached to your billing profile for any other reason, go to your billing profile page:

(Image content)

and then click on the "Change credit card" button.

(Image content)

By doing this, you won't need to transfer your project to a separate account, and you will not need to start a new billing cycle. This will simply start charging a different card and keep everything else unchanged.

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
    <p>Details: cache-dub4327-DUB 1762214669 4098636892</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>

---

# Transfer project

Let's have a look at the *Danger zone* that you'll find at the bottom of the project description in your dashboard if you are the project owner:

(Image content)

We'll focusing on the transfer ownership section. The duplicate and delete will be covered in the next section of the guide.

### Transfer project ownership

Transferring a project is useful **when you want to start a new billing cycle** under a different account. In this case you can go ahead and click "Transfer".

This will let you input the email address of the destination account.

Conversely, the receiving account will receive an email and find a popup at the top of their dashboard:

(Image content)

On accepting the project you'll be charged for the extra project if you are exceeding the limits of the free "Developer" plan.

If the former owner is left with any unused credit it will show in their billing profile and those will be used automatically on any new invoice.

**Credit cannot be transferred from one billing profile to another.**

### Change ownership retaining the billing cycle

If you don't need to start a new billing cycle, as for example you need to change ownership of the project inside the same company, you don't need to use the project transfer feature.

The best way to achieve this is by simply changing the email address of the account owner.

If the destination email is already a DatoCMS user, the destination account needs to change email address too, or delete the account first as email cannot be duplicated.

### Transfer of a project on a legacy per-site pricing

In case you need to transfer a project that is still on a legacy per-site pricing, you can safely migrate it to an account or organization that is on the new pricing structure.

If you instead need to transfer the project to another account still on a per-site pricing, [please contact support](https://www.datocms.com/support.md).

---

# Duplicate or delete project

In the *Danger zone* that you can find at the bottom of the project description in your dashboard if you are the project owner, you'll see the actions to duplicate or delete a project.

(Image content)

### Duplicate project

When duplicating a project you'll be asked if you want to duplicate the schema only or also the data by using this toggle:

(Image content)

### Delete project

When deleting the project we immediately delete all your content from our database. We have a small window of time in which we can retrieve backups, but after that all is gone, so be extremely careful when performing this action.

---

# Migrating to a new pricing

If you are on a discontinued pricing plan and you want to switch to the current Professional plan, these are the steps that you should take:

-   change the email address of your current account to a variation such as *email+old@yourdomain.com.*
    
-   create a new account with your primary email, which is *email@yourdomain.com.*
    
-   buy the new Professional plan.
    
-   transfer your projects from your old account to the new one.
    
-   [get in touch](https://www.datocms.com/support.md) with us to refund the remaining credit of your old account.
    

As in the previous model you could have multiple billing accounts per project we cannot transfer the credits automatically, so we'll need to go through this process.

If you have any doubts don't hesitate to [be in touch with our support](https://www.datocms.com/support.md).

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
import type { LatLonFieldValue, LatLonFieldValidators, LatLonFieldAppearance } from '@datocms/cma-client';

// Field value type - object with latitude/longitude or null
const value: LatLonFieldValue = { latitude: 45.4642, longitude: 9.1900 };

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
  isGalleryFieldValueInRequest
} from '@datocms/cma-client';

// API Response format - all metadata fields present with defaults
const fileResponse: FileFieldValue = {
  upload_id: "12345",
  alt: null,           // Always present (default: null)
  title: null,         // Always present (default: null)
  custom_data: {},     // Always present (default: {})
  focal_point: null    // Always present (default: null)
};

// API Request format - metadata fields are optional
const fileRequest: FileFieldValueInRequest = {
  upload_id: "12345"
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
  isStructuredTextFieldValueInNestedResponse
} from '@datocms/cma-client';

// Regular response - blocks as string IDs
const standard: StructuredTextFieldValue = {
  document: {
    type: "root",
    children: [
      {
        type: "block",
        // String ID reference
        item: "IdMLV2GJTXyQ0Bfns7R4IQ"
      }
    ]
  }
};

// Nested Mode response (?nested=true) - blocks as full objects
const nested: StructuredTextFieldValueInNestedResponse = {
  document: {
    type: "root",
    children: [
      {
        type: "block",
        // Always full block object
        item: {
          id: "IdMLV2GJTXyQ0Bfns7R4IQ",
          type: "item",
          attributes: { /* ... */ },
          relationships: { /* ... */ }
        }
      }
    ]
  }
};

// Request format - flexible block representation
const request: StructuredTextFieldValueInRequest = {
  document: {
    type: "root",
    children: [
      {
        type: "block",
        // Can be string ID, to keep block unchanged...
        item: "FicV5CxCSQ6yOrgfwRoiKA"
      },
      {
        type: "block",
        // ...or full block object (to create new blocks or update existing ones)
        item: {
          type: "item",
          attributes: { /* ... */ },
          relationships: { /* ... */ }
        }
      }
    ]
  }
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
    type: "root",
    children: [/* ... */]
  }
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
function inspectItem(
  item: Item,
  options?: InspectItemOptions
): string

type InspectItemOptions = {
  maxWidth?: number; // Maximum width for text fields before truncation (default: 80)
}
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
  body: ItemUpdateSchema<ToItemDefinitionInRequest<D>>
): NewBlockInRequest<ToItemDefinitionInRequest<D>>
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
  schemaRepository: SchemaRepository
): Promise<NewBlockInRequest<ToItemDefinitionInRequest<D>>>
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
): Promise<void>
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
): Promise<unknown>
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
): Promise<unknown>
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
  (block) => block.relationships.item_type.data.id !== 'video_block'
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
): Promise<Array<{ item: BlockInRequest; path: TreePath }>>
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
): Promise<R>
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
): Promise<boolean>
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
): Promise<boolean>
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
  mapFn: (locale: string | undefined, localeValue: TInput) => TOutput
): TOutput | LocalizedFieldValue<TOutput>

async function mapNormalizedFieldValuesAsync<TInput, TOutput>(
  localizedOrNonLocalizedFieldValue: TInput | LocalizedFieldValue<TInput>,
  field: Field,
  mapFn: (locale: string | undefined, localeValue: TInput) => Promise<TOutput>
): Promise<TOutput | LocalizedFieldValue<TOutput>>
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
  filterFn: (locale: string | undefined, localeValue: T) => boolean
): T | LocalizedFieldValue<T> | undefined

async function filterNormalizedFieldValuesAsync<T>(
  localizedOrNonLocalizedFieldValue: T | LocalizedFieldValue<T>,
  field: Field,
  filterFn: (locale: string | undefined, localeValue: T) => Promise<boolean>
): Promise<T | LocalizedFieldValue<T> | undefined>
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
  visitFn: (locale: string | undefined, localeValue: T) => void
): void

async function visitNormalizedFieldValuesAsync<T>(
  localizedOrNonLocalizedFieldValue: T | LocalizedFieldValue<T>,
  field: Field,
  visitFn: (locale: string | undefined, localeValue: T) => Promise<void>
): Promise<void>
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
  testFn: (locale: string | undefined, localeValue: T) => boolean
): boolean

async function someNormalizedFieldValuesAsync<T>(
  localizedOrNonLocalizedFieldValue: T | LocalizedFieldValue<T>,
  field: Field,
  testFn: (locale: string | undefined, localeValue: T) => Promise<boolean>
): Promise<boolean>
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
  testFn: (locale: string | undefined, localeValue: T) => boolean
): boolean

async function everyNormalizedFieldValueAsync<T>(
  localizedOrNonLocalizedFieldValue: T | LocalizedFieldValue<T>,
  field: Field,
  testFn: (locale: string | undefined, localeValue: T) => Promise<boolean>
): Promise<boolean>
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
  field: Field
): NormalizedFieldValueEntry<T>[]

function fromNormalizedFieldValueEntries<T>(
  entries: NormalizedFieldValueEntry<T>[],
  field: Field
): T | LocalizedFieldValue<T>

type NormalizedFieldValueEntry<T> = {
  locale: string | undefined;
  value: T;
}
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
  value: processValue(value)
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
  schemaRepository,  // share cached lookups
  async (block) => {
    // transform block here
  }
);
```
</details>

**When to Use**

* Traversing relationships that repeatedly query schema
* Bulk record processing scripts
* Block-processing utilities that need frequent lookups
* Any script where reducing API calls matters

**When Not to Use**

* Scripts that modify schema (models, fields, etc.)
* Long-running applications (cache never expires)
* Situations where the schema might change during execution

<details><summary><strong>Class signature</strong></summary>

```typescript
class SchemaRepository {
  constructor(client: GenericClient)

  // Item Type methods
  async getAllItemTypes(): Promise<ItemType[]>
  async getAllModels(): Promise<ItemType[]>
  async getAllBlockModels(): Promise<ItemType[]>
  async getItemTypeByApiKey(apiKey: string): Promise<ItemType>
  async getItemTypeById(id: string): Promise<ItemType>

  // Field methods
  async getItemTypeFields(itemType: ItemType): Promise<Field[]>
  async getItemTypeFieldsets(itemType: ItemType): Promise<Fieldset[]>

  // Higher-level utilities
  async getModelsEmbeddingBlocks(blocks: ItemType[]): Promise<ItemType[]>

  // Plugin methods
  async getAllPlugins(): Promise<Plugin[]>
  async getPluginById(id: string): Promise<Plugin>
  async getPluginByPackageName(packageName: string): Promise<Plugin>

  // Raw variants (return API response format)
  async getAllRawItemTypes(): Promise<RawItemType[]>
  async getRawItemTypeByApiKey(apiKey: string): Promise<RawItemType>
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
import { executeQuery } from "@datocms/cda-client";

const query = `
  query {
    allArticles {
      id
      title
    }
  }
`;

const result = await executeQuery(query, {
  token: "your-api-token-here",
});

console.log(result);
```

### Using with TypeScript and GraphQL Code Generator

```typescript
import { executeQuery } from "@datocms/cda-client";
import { AllArticlesQuery } from "./generated/graphql";

const result = await executeQuery(AllArticlesQuery, {
  token: "your-api-token-here",
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
import { executeQuery } from "@datocms/cda-client";

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
import { rawExecuteQuery } from "@datocms/cda-client";

const [result, response] = await rawExecuteQuery(query, {
  token: "your-api-token-here",
  returnCacheTags: true,
});
const cacheTags = response.headers.get("x-cache-tags");
```

### `executeQueryWithAutoPagination`

This function comes handy when the query contains a paginated collection: behind the scene,
`executeQueryWithAutoPagination` reworks the passed query and collects the results, so that
it's possible to get a collection of records that is longer than Content Delivery API's result limit.
That is done with a single API call, in a transparent way.

```typescript
import { executeQueryWithAutoPagination } from "@datocms/cda-client";

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
import { rawExecuteQueryWithAutoPagination } from "@datocms/cda-client";

const [result, response] = await rawExecuteQueryWithAutoPagination(query, {
  token: "your-api-token-here",
  returnCacheTags: true,
});
const cacheTags = response.headers.get("x-cache-tags");
```

### `buildRequestHeaders`

Builds request headers for a GraphQL query towards the DatoCMS Content Delivery API.

```typescript
import { buildRequestHeaders } from "@datocms/cda-client";

const headers = buildRequestHeaders(options);
```

#### Options

The `buildRequestHeaders` function accepts the same options as `executeQuery`, except for `variables`, `fetchFn`, and `autoRetry`.

### `buildRequestInit`

Builds the request initialization object for a GraphQL query towards the DatoCMS Content Delivery API.

```typescript
import { buildRequestInit } from "@datocms/cda-client";

const requestInit = buildRequestInit(query, options);
```

#### Parameters

- `query`: A GraphQL query string or `DocumentNode`.
- `options`: An object containing execution options (same as `executeQuery`).

## Error Handling

In case a query fails (either with an HTTP status code outside of the 2xx range, or for an error in the query), an `ApiError` exception will be thrown by the client. This error contains all the details of the request and response, allowing you to debug and handle errors effectively.

### Example

```typescript
import { executeQuery, ApiError } from "@datocms/cda-client";

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
    token: "your-api-token-here",
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
* [DatoCMS CLI](#datocms-cli)
* [Usage](#usage)
* [Commands](#commands)
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
* [`datocms autocomplete [SHELL]`](#datocms-autocomplete-shell)
* [`datocms environments:destroy ENVIRONMENT_ID`](#datocms-environmentsdestroy-environment_id)
* [`datocms environments:fork SOURCE_ENVIRONMENT_ID NEW_ENVIRONMENT_ID`](#datocms-environmentsfork-source_environment_id-new_environment_id)
* [`datocms environments:index`](#datocms-environmentsindex)
* [`datocms environments:list`](#datocms-environmentslist)
* [`datocms environments:primary`](#datocms-environmentsprimary)
* [`datocms environments:promote ENVIRONMENT_ID`](#datocms-environmentspromote-environment_id)
* [`datocms environments:rename ENVIRONMENT_ID NEW_ENVIRONMENT_ID`](#datocms-environmentsrename-environment_id-new_environment_id)
* [`datocms help [COMMAND]`](#datocms-help-command)
* [`datocms maintenance:off`](#datocms-maintenanceoff)
* [`datocms maintenance:on`](#datocms-maintenanceon)
* [`datocms migrations:new NAME`](#datocms-migrationsnew-name)
* [`datocms migrations:run`](#datocms-migrationsrun)
* [`datocms plugins`](#datocms-plugins)
* [`datocms plugins:add PLUGIN`](#datocms-pluginsadd-plugin)
* [`datocms plugins:available`](#datocms-pluginsavailable)
* [`datocms plugins:inspect PLUGIN...`](#datocms-pluginsinspect-plugin)
* [`datocms plugins:install PLUGIN`](#datocms-pluginsinstall-plugin)
* [`datocms plugins:link PATH`](#datocms-pluginslink-path)
* [`datocms plugins:remove [PLUGIN]`](#datocms-pluginsremove-plugin)
* [`datocms plugins:reset`](#datocms-pluginsreset)
* [`datocms plugins:uninstall [PLUGIN]`](#datocms-pluginsuninstall-plugin)
* [`datocms plugins:unlink [PLUGIN]`](#datocms-pluginsunlink-plugin)
* [`datocms plugins:update`](#datocms-pluginsupdate)
* [`datocms profile:remove PROFILE_ID`](#datocms-profileremove-profile_id)
* [`datocms profile:set PROFILE_ID`](#datocms-profileset-profile_id)
* [`datocms schema:generate FILENAME`](#datocms-schemagenerate-filename)

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
* [DatoCMS Contentful Import CLI](#datocms-contentful-import-cli)
* [Usage](#usage)
* [Commands](#commands)
* [Test](#test)
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
* [`@datocms/cli-plugin-contentful contentful:import`](#datocmscli-plugin-contentful-contentfulimport)

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
* [DatoCMS WordPress Import CLI](#datocms-wordpress-import-cli)
* [Usage](#usage)
* [Commands](#commands)
* [Development](#development)
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
* [`@datocms/cli-plugin-wordpress wordpress:import`](#datocmscli-plugin-wordpress-wordpressimport)

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

* [`<SRCImage />` and `<Image />` components for responsive/progressive images](./docs/image.md)
* [`<StructuredText />` component](./docs/structured-text.md)
* [`<VideoPlayer />` component](./docs/video-player.md)
* [`useQuerySubscription()` hook for live, real-time updates of content](./docs/live-real-time-updates.md)
* [`useSiteSearch()` hook to render a DatoCMS Site Search form widget](./docs/site-search.md)
* [`renderMetaTags()` and other helpers to render social share, SEO and Favicon meta tags](./docs/meta-tags.md)

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

* `<SRCImage />` is a [React Server Component](https://nextjs.org/docs/app/building-your-application/rendering/server-components), so it can be rendered and optionally cached on the server. It doesn't create any JS footprint. It generates a single `<picture />` element and implements lazy-loading using the native [`loading="lazy"` attribute](https://web.dev/articles/browser-level-image-lazy-loading). The placeholder is set as the background to the image itself. Be careful: the placeholder is not removed when the image loads, so it's not recommended to use this component if you anticipate that the image may have an alpha channel with transparencies.
* `<Image />` is a [Client Component](https://nextjs.org/docs/app/building-your-application/rendering/client-components). Since it runs on the browser, it has the ability to set a cross-fade effect between the placeholder and the original image, but at the cost of generating more complex HTML output composed of multiple elements around the main `<picture />` element. It also implements lazy-loading through `IntersectionObserver`, which allows customization of the thresholds at which lazy loading occurs.


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
| data             | `ResponsiveImage` object | :white_check_mark:           | The actual response you get from a DatoCMS `responsiveImage` GraphQL query                            ****                                           |                                                                                                                                                      |
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
  <Image
    data={imageData}
    layout="fill"
    objectFit="cover"
    objectPosition="50% 50%"
  />
</div>
```

### Changing `data`

If the `data` prop changes over time, this component works like a regular `<img />` in a browser: the new image won't appear until it loads, while the old image stays visible. If you want the old image to disappear while loading, you can use a `key=` so that React sees the changing image as a new `<img />` instead of just changing the src attribute:

```jsx
<Image
  key={imageData.src}
  data={imageData}
/>
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
              return (
                <code>
                  @{record.username}
                </code>
              );
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
    renderNodeRule(
      isParagraph,
      ({ adapter: { renderNode }, node, children, key, ancestors }) => {
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
      },
    ),
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
    context === 'title' ? (
      <strong key={key}>{text}</strong>
    ) : (
      <mark key={key}>{text}</mark>
    ),
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
      context === 'title' ? (
        <strong key={key}>{text}</strong>
      ) : (
        <mark key={key}>{text}</mark>
      ),
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
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
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
      <Helmet>
        {renderMetaTags([...data.page.seo, ...data.site.favicon])}
      </Helmet>
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

* `<datocms-naked-image />` generates minimum JS footprint, outputs a single `<picture />` element and implements lazy-loading using the native [`loading="lazy"` attribute](https://web.dev/articles/browser-level-image-lazy-loading). The placeholder is set as the background to the image itself.
* `<datocms-image />` has the ability to set a cross-fade effect between the placeholder and the original image, but at the cost of generating more complex HTML output composed of multiple elements around the main `<picture />` element. It also implements lazy-loading through `IntersectionObserver`, which allows customization of the thresholds at which lazy loading occurs.


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
| data               | `ResponsiveImage` object |                                    | :white_check_mark: | The actual response you get from a DatoCMS `responsiveImage` GraphQL query                            ****                                           |
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
              responsiveImage(
                imgixParams: { fit: crop, w: 300, h: 300, auto: format }
              ) {
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
          return h(
            'a',
            { ...transformedMeta, href: `/team/${record.slug}` },
            children,
          );
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
type ResultHighlight = HighlightPiece[]

type HighlightPiece = {
  text: string;
  isMatch: boolean;
}
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
function isCdaStructuredTextValue(
  object: any,
): object is CdaStructuredTextValue {}
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
import {
  mapNodes,
  mapNodesAsync,
  isHeading,
  isSpan,
  isBlock,
} from 'datocms-structured-text-utils';

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
import {
  filterNodes,
  filterNodesAsync,
  isCode,
  isBlock,
} from 'datocms-structured-text-utils';

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

- **Escaping strategy**: `renderText` escapes `` \`*_{}[]()#+|<> `` to avoid accidental formatting or unintended HTML. For bespoke sanitization, supply a custom `renderText` implementation.
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
    renderNodeRule(
      isHeading,
      ({ node, children, adapter: { renderFragment } }) => {
        // Custom heading with decoration
        return renderFragment([
          `${'='.repeat(node.level)} `,
          ...(children || []),
          '\n\n',
        ]);
      },
    ),
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
    renderNodeRule(
      isHeading,
      ({ adapter: { renderNode }, node, children, key }) => {
        return renderNode(`h${node.level + 1}`, { key }, children);
      },
    ),
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
    renderNodeRule(
      isHeading,
      ({ adapter: { renderNode }, node, children, key }) => {
        return renderNode(`h${node.level + 1}`, { key }, children);
      },
    ),
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
        childrenAfterSplitPoint /* [ 'h1.2' ] */ = parent.children.splice(
          splitChildrenIndex,
        );
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
import { subscribeToQuery } from "datocms-listen";

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
  token: "YOUR_TOKEN",
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

