/*
 * This file lists a series of fragments not related to any specific component,
 * but necessary in various parts of the code.
 */

export const TagFragment = /* GraphQL */ `
  fragment TagFragment on Tag @_unmask {
    tag
    attributes
    content
  }
`;

export interface TagFragmentData {
  tag: string;
  attributes?: Record<string, string> | null;
  content?: string | null;
}
