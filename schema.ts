import type { ItemTypeDefinition } from '@datocms/cma-client';
type EnvironmentSettings = {
  locales: 'it' | 'en';
};
export type MenuItem = ItemTypeDefinition<
  EnvironmentSettings,
  'Af5tRzXvRaS_Mw2kXhqTtA',
  {
    label: {
      type: 'string';
    };
    page: {
      type: 'link';
    };
  }
>;
export type ImageGalleryBlock = ItemTypeDefinition<
  EnvironmentSettings,
  'CoOdvsbUR8GLtGeuenXzMw',
  {
    assets: {
      type: 'gallery';
    };
  }
>;
export type HeroBlock = ItemTypeDefinition<
  EnvironmentSettings,
  'DBdGqinIQxWWocOQY0i4-Q',
  {
    display_options: {
      type: 'string';
    };
    hero_image: {
      type: 'file';
    };
    hero_title: {
      type: 'string';
    };
    hero_subtitle: {
      type: 'text';
    };
    buttons: {
      type: 'rich_text';
      blocks: ButtonBlock;
    };
  }
>;
export type MenuExternalItem = ItemTypeDefinition<
  EnvironmentSettings,
  'EANzV1QlRxeTpZ4g555PXg',
  {
    label: {
      type: 'string';
    };
    url: {
      type: 'string';
    };
  }
>;
export type SocialLink = ItemTypeDefinition<
  EnvironmentSettings,
  'Gpv6aBidTf2es2lojtCKcA',
  {
    platform: {
      type: 'string';
    };
    url: {
      type: 'string';
    };
    icon_name: {
      type: 'string';
    };
  }
>;
export type HomePage = ItemTypeDefinition<
  EnvironmentSettings,
  'JdG722SGTSG_jEB1Jx-0XA',
  {
    seo: {
      type: 'seo';
      localized: true;
    };
    title: {
      type: 'string';
      localized: true;
    };
    subtitle: {
      type: 'text';
      localized: true;
    };
    sections: {
      type: 'rich_text';
      blocks: HeroBlock;
    };
  }
>;
export type ButtonBlock = ItemTypeDefinition<
  EnvironmentSettings,
  'KfsEo0AXTj-DIGYAXawBzQ',
  {
    label: {
      type: 'string';
    };
    url: {
      type: 'string';
    };
    primary: {
      type: 'boolean';
    };
  }
>;
export type Page = ItemTypeDefinition<
  EnvironmentSettings,
  'K5xdS7TzTgaiD00HAEAm1w',
  {
    slug: {
      type: 'slug';
      localized: true;
    };
    seo_settings_social: {
      type: 'seo';
      localized: true;
    };
    title: {
      type: 'string';
      localized: true;
    };
    sections: {
      type: 'rich_text';
      blocks: HeroBlock;
      localized: true;
    };
    structured_text: {
      type: 'structured_text';
      blocks: ImageGalleryBlock | ImageBlock | VideoBlock;
      inline_blocks: HomePage;
      localized: true;
    };
  }
>;
export type MenuDropdown = ItemTypeDefinition<
  EnvironmentSettings,
  'S1dQWJ35QMCGFED-kqQccQ',
  {
    static_label: {
      type: 'string';
    };
    pages: {
      type: 'rich_text';
      blocks: MenuItem;
    };
  }
>;
export type Translation = ItemTypeDefinition<
  EnvironmentSettings,
  'TKfHJZJWSkaP6EjowCzGNw',
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
export type FooterMenuBlock = ItemTypeDefinition<
  EnvironmentSettings,
  'aWqpfWw5TweieoyNSxa-2Q',
  {
    widget_label: {
      type: 'string';
    };
    nav_links: {
      type: 'rich_text';
      blocks: MenuItem | MenuExternalItem;
    };
  }
>;
export type App = ItemTypeDefinition<
  EnvironmentSettings,
  'cnQATVHtQ7SNg4m1zNwmEA',
  {
    callout_background: {
      type: 'color';
    };
    footer_text: {
      type: 'structured_text';
    };
    nav_items: {
      type: 'rich_text';
      blocks: MenuItem | MenuExternalItem | MenuDropdown;
      localized: true;
    };
    callout_text: {
      type: 'text';
    };
    footer_links: {
      type: 'rich_text';
      blocks: FooterMenuBlock;
      localized: true;
    };
    social_links: {
      type: 'rich_text';
      blocks: SocialLink;
    };
    legal_text: {
      type: 'structured_text';
      localized: true;
    };
  }
>;
export type ImageBlock = ItemTypeDefinition<
  EnvironmentSettings,
  'dZOhbVOTSpeaaA-wQMgPCA',
  {
    asset: {
      type: 'file';
    };
  }
>;
export type VideoBlock = ItemTypeDefinition<
  EnvironmentSettings,
  'duRvS1PrT4u6QGJZUmyINA',
  {
    asset: {
      type: 'file';
    };
  }
>;
export type AnyBlock =
  | MenuItem
  | ImageGalleryBlock
  | HeroBlock
  | MenuExternalItem
  | SocialLink
  | ButtonBlock
  | MenuDropdown
  | FooterMenuBlock
  | ImageBlock
  | VideoBlock;
export type AnyModel = HomePage | Page | Translation | App;
export type AnyBlockOrModel = AnyBlock | AnyModel;
