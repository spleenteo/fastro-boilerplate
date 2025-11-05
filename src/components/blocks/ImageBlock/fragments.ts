import {
  ResponsiveImageFragment,
  type ResponsiveImageFragmentData,
} from '~/components/ResponsiveImage/fragments';

/**
 * GraphQL fragment colocated with the ImageBlock component to keep the data
 * requirements aligned with the content model described in `schema.ts`.
 */

export const ImageBlockFragment = /* GraphQL */ `
  fragment ImageBlockFragment on ImageBlockRecord {
    asset {
      title
      responsiveImage(sizes: "(max-width: 700px) 100vw, 700px") {
        ...ResponsiveImageFragment
      }
    }
  }
  ${ResponsiveImageFragment}
`;

export interface ImageBlockFragmentData {
  asset: {
    title?: string | null;
    responsiveImage: ResponsiveImageFragmentData;
  };
}
