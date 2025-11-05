/**
 * GraphQL fragment required to render responsive images across the project.
 * Keeping fragments colocated with components simplifies maintenance and
 * mirrors the content model defined in `schema.ts`.
 */

export const ResponsiveImageFragment = /* GraphQL */ `
  fragment ResponsiveImageFragment on ResponsiveImage {
    src
    srcSet
    width
    height
    alt
    title
    base64
    sizes
  }
`;

export interface ResponsiveImageFragmentData {
  src: string;
  srcSet: string;
  width: number;
  height: number;
  alt?: string | null;
  title?: string | null;
  base64?: string | null;
  sizes?: string | null;
}
