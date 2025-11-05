import {
  ResponsiveImageFragment,
  type ResponsiveImageFragmentData,
} from '~/components/ResponsiveImage/fragments';

/**
 * GraphQL fragment colocated with the ImageGalleryBlock component so data
 * requirements evolve in step with the model described in `schema.ts`.
 */

export const ImageGalleryBlockFragment = /* GraphQL */ `
  fragment ImageGalleryBlockFragment on ImageGalleryBlockRecord {
    assets {
      id
      title
      responsiveImage(imgixParams: { w: 300 }, sizes: "300px") {
        ...ResponsiveImageFragment
      }
    }
  }
  ${ResponsiveImageFragment}
`;

export interface ImageGalleryBlockFragmentData {
  assets: Array<{
    id: string;
    title?: string | null;
    responsiveImage: ResponsiveImageFragmentData;
  }>;
}
