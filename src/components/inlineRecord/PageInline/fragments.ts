import type { StructuredTextGraphQlResponseRecord } from 'react-datocms';

/**
 * Fragment describing the data needed to render inline page references.
 */

export const PageInlineFragment = /* GraphQL */ `
  fragment PageInlineFragment on PageRecord {
    ... on RecordInterface {
      id
      __typename
    }
    ... on PageRecord {
      title
    }
  }
`;

export interface PageInlineFragmentData extends StructuredTextGraphQlResponseRecord {
  id: string;
  __typename: 'PageRecord';
  title?: string | null;
}
