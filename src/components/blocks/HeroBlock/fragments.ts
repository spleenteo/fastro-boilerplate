import {
  ResponsiveImageFragment,
  type ResponsiveImageFragmentData,
} from '~/components/ResponsiveImage/fragments';
import {
  ButtonBlockFragment,
  type ButtonBlockFragmentData,
} from '~/components/blocks/ButtonBlock/fragments';

export const HeroBlockFragment = /* GraphQL */ `
  fragment HeroBlockFragment on HeroBlockRecord {
    id
    displayOptions
    heroTitle
    heroSubtitle
    heroImage {
      responsiveImage(sizes: "(max-width: 900px) 100vw, 900px") {
        ...ResponsiveImageFragment
      }
    }
    buttons {
      id
      __typename
      ...ButtonBlockFragment
    }
  }
  ${ResponsiveImageFragment}
  ${ButtonBlockFragment}
`;

export interface HeroBlockFragmentData {
  id: string;
  displayOptions?: string | null;
  heroTitle?: string | null;
  heroSubtitle?: string | null;
  heroImage?: {
    responsiveImage: ResponsiveImageFragmentData;
  } | null;
  buttons?:
    | (ButtonBlockFragmentData & {
        id: string;
        __typename: 'ButtonBlockRecord';
      })[]
    | null;
}
