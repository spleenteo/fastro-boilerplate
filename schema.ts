import type { ItemTypeDefinition } from '@datocms/cma-client';
type EnvironmentSettings = {
  locales: 'en';
};
export type TextImageBlock = ItemTypeDefinition<
  EnvironmentSettings,
  'BRbU6VwTRgmG5SbwUs0rBg',
  {
    text: {
      type: 'structured_text';
      blocks: ActionBlock | ImageBlock | VideoEmbedBlock | TableBlock;
      inline_blocks: File | Page | HomePage;
    };
    image: {
      type: 'file';
    };
    layout: {
      type: 'string';
    };
  }
>;
export type GroupingItem = ItemTypeDefinition<
  EnvironmentSettings,
  'BeM4dW2OQYWKc9iBZUyMeg',
  {
    title: {
      type: 'string';
    };
    blocks: {
      type: 'rich_text';
      blocks:
        | TextImageBlock
        | ActionBlock
        | TextBlock
        | VideoBlock
        | ImageBlock
        | VideoEmbedBlock
        | TableBlock;
    };
  }
>;
export type PhoneLink = ItemTypeDefinition<
  EnvironmentSettings,
  'C5fWG5CYRJ69oqaP6CjYdA',
  {
    title: {
      type: 'string';
    };
    phone_number: {
      type: 'string';
    };
    action: {
      type: 'string';
    };
    text: {
      type: 'text';
    };
    style: {
      type: 'string';
    };
  }
>;
export type PagePartial = ItemTypeDefinition<
  EnvironmentSettings,
  'DAdmJVaoTZKumF9GYBZDfQ',
  {
    title: {
      type: 'string';
      localized: true;
    };
    blocks: {
      type: 'rich_text';
      blocks:
        | TextImageBlock
        | ActionBlock
        | TextBlock
        | VideoBlock
        | GroupingBlock
        | ImageBlock
        | VideoEmbedBlock
        | TableBlock;
      localized: true;
    };
  }
>;
export type MenuItemInternal = ItemTypeDefinition<
  EnvironmentSettings,
  'FmR0GklXRq-7Ix8-5MaJjw',
  {
    title: {
      type: 'string';
    };
    link: {
      type: 'link';
    };
  }
>;
export type ActionBlock = ItemTypeDefinition<
  EnvironmentSettings,
  'F60ZY1wFSW2qbvh99poj3g',
  {
    items: {
      type: 'rich_text';
      blocks: PhoneLink | InternalLink | ExternalLink | EmailLink;
    };
  }
>;
export type InternalLink = ItemTypeDefinition<
  EnvironmentSettings,
  'GWnhoQDqQoGJj4-sQTVttw',
  {
    title: {
      type: 'string';
    };
    link: {
      type: 'link';
    };
    style: {
      type: 'string';
    };
  }
>;
export type File = ItemTypeDefinition<
  EnvironmentSettings,
  'GjWw8t-hTFaYYWyc53FeIg',
  {
    file: {
      type: 'file';
    };
    locale: {
      type: 'string';
    };
    path: {
      type: 'string';
    };
    title: {
      type: 'string';
    };
  }
>;
export type TextBlock = ItemTypeDefinition<
  EnvironmentSettings,
  'PAk40zGjQJCcDXXPgygUrA',
  {
    text: {
      type: 'structured_text';
      blocks:
        | ActionBlock
        | VideoBlock
        | ImageBlock
        | VideoEmbedBlock
        | TableBlock;
      inline_blocks: File | Page | HomePage;
    };
  }
>;
export type VideoBlock = ItemTypeDefinition<
  EnvironmentSettings,
  'QYfZyBzIRWKxA1MinIR0aQ',
  {
    video_asset: {
      type: 'file';
    };
    title: {
      type: 'string';
    };
    autoplay: {
      type: 'boolean';
    };
    mute: {
      type: 'boolean';
    };
    loop: {
      type: 'boolean';
    };
    tracks: {
      type: 'links';
    };
  }
>;
export type Translation = ItemTypeDefinition<
  EnvironmentSettings,
  'SioauP1GQg2C4U3aVd-FXw',
  {
    key: {
      type: 'string';
    };
    value: {
      type: 'string';
      localized: true;
    };
  }
>;
export type GroupingBlock = ItemTypeDefinition<
  EnvironmentSettings,
  'TBuD6qQOSDy6i9dM3T_XEA',
  {
    layout: {
      type: 'string';
    };
    items: {
      type: 'rich_text';
      blocks: GroupingItem;
    };
  }
>;
export type VideoTextTrack = ItemTypeDefinition<
  EnvironmentSettings,
  'Us90isT5SgeXHuetcEj8eA',
  {
    title: {
      type: 'string';
    };
    locale: {
      type: 'string';
    };
    kind: {
      type: 'string';
    };
    file: {
      type: 'file';
    };
  }
>;
export type EmbedBlock = ItemTypeDefinition<
  EnvironmentSettings,
  'VZvVfu52RZK81WG0Dxp-FQ',
  {
    url: {
      type: 'string';
    };
    data: {
      type: 'json';
    };
  }
>;
export type PagePartialBlock = ItemTypeDefinition<
  EnvironmentSettings,
  'V80liDVtRC-UYgd3Sm-dXg',
  {
    items: {
      type: 'links';
    };
    layout: {
      type: 'string';
    };
  }
>;
export type SchemaMigration = ItemTypeDefinition<
  EnvironmentSettings,
  'XX0mY71SR5OY1mRZUu6jCg',
  {
    name: {
      type: 'string';
    };
  }
>;
export type NotFoundPage = ItemTypeDefinition<
  EnvironmentSettings,
  'X1J3dzBwQXOKTQWRxRaNfA',
  {
    title: {
      type: 'string';
      localized: true;
    };
    body_blocks: {
      type: 'rich_text';
      blocks:
        | TextImageBlock
        | ActionBlock
        | TextBlock
        | VideoBlock
        | EmbedBlock
        | PagePartialBlock
        | ImageBlock
        | VideoEmbedBlock
        | TableBlock;
      localized: true;
    };
  }
>;
export type ExternalLink = ItemTypeDefinition<
  EnvironmentSettings,
  'Yk1ge9eTTf25Iwph1Dx3_g',
  {
    title: {
      type: 'string';
    };
    url: {
      type: 'string';
    };
    open_in_new_tab: {
      type: 'boolean';
    };
    style: {
      type: 'string';
    };
  }
>;
export type ImageBlock = ItemTypeDefinition<
  EnvironmentSettings,
  'ZdBokLsWRgKKjHrKeJzdpw',
  {
    image: {
      type: 'file';
    };
  }
>;
export type App = ItemTypeDefinition<
  EnvironmentSettings,
  'Zrs1dDxCTXKDS0pdgh1yCw',
  {
    menu_items: {
      type: 'rich_text';
      blocks: MenuItemInternal;
      localized: true;
    };
    allow_ai_bots: {
      type: 'boolean';
    };
  }
>;
export type EmailLink = ItemTypeDefinition<
  EnvironmentSettings,
  'b90_c2zeS6auRELEzZHNcA',
  {
    title: {
      type: 'string';
    };
    email_address: {
      type: 'string';
    };
    email_subject: {
      type: 'string';
    };
    email_body: {
      type: 'text';
    };
    style: {
      type: 'string';
    };
  }
>;
export type RedirectRule = ItemTypeDefinition<
  EnvironmentSettings,
  'c0S4sIyiRK-EewRhFEFPLA',
  {
    from: {
      type: 'string';
    };
    to: {
      type: 'string';
    };
    status_code: {
      type: 'string';
    };
    position: {
      type: 'integer';
    };
  }
>;
export type Page = ItemTypeDefinition<
  EnvironmentSettings,
  'dKQteXkGQKSNL4V4BDpFFg',
  {
    title: {
      type: 'string';
      localized: true;
    };
    slug: {
      type: 'slug';
      localized: true;
    };
    parent_page: {
      type: 'link';
    };
    seo: {
      type: 'seo';
      localized: true;
    };
    body_blocks: {
      type: 'rich_text';
      blocks:
        | TextImageBlock
        | ActionBlock
        | TextBlock
        | VideoBlock
        | GroupingBlock
        | EmbedBlock
        | PagePartialBlock
        | ImageBlock
        | VideoEmbedBlock
        | TableBlock;
      localized: true;
    };
  }
>;
export type HomePage = ItemTypeDefinition<
  EnvironmentSettings,
  'e980daKCQPe26oECP5XT8w',
  {
    title: {
      type: 'string';
      localized: true;
    };
    seo: {
      type: 'seo';
      localized: true;
    };
    body_blocks: {
      type: 'rich_text';
      blocks:
        | TextImageBlock
        | ActionBlock
        | TextBlock
        | VideoBlock
        | GroupingBlock
        | EmbedBlock
        | PagePartialBlock
        | ImageBlock
        | VideoEmbedBlock
        | TableBlock;
      localized: true;
    };
  }
>;
export type VideoEmbedBlock = ItemTypeDefinition<
  EnvironmentSettings,
  'gezG9nO7SfaiWcWnp-HNqw',
  {
    video: {
      type: 'video';
    };
    title: {
      type: 'string';
    };
    autoplay: {
      type: 'boolean';
    };
    mute: {
      type: 'boolean';
    };
    loop: {
      type: 'boolean';
    };
  }
>;
export type TableBlock = ItemTypeDefinition<
  EnvironmentSettings,
  '0SxYNS2CR1it_5LHYWuEQg',
  {
    title: {
      type: 'string';
    };
    table: {
      type: 'json';
    };
    has_header_row: {
      type: 'boolean';
    };
    has_header_column: {
      type: 'boolean';
    };
  }
>;
export type AnyBlock =
  | TextImageBlock
  | GroupingItem
  | PhoneLink
  | MenuItemInternal
  | ActionBlock
  | InternalLink
  | TextBlock
  | VideoBlock
  | GroupingBlock
  | EmbedBlock
  | PagePartialBlock
  | ExternalLink
  | ImageBlock
  | EmailLink
  | VideoEmbedBlock
  | TableBlock;
export type AnyModel =
  | PagePartial
  | File
  | Translation
  | VideoTextTrack
  | SchemaMigration
  | NotFoundPage
  | App
  | RedirectRule
  | Page
  | HomePage;
export type AnyBlockOrModel = AnyBlock | AnyModel;
