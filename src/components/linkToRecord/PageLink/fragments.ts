import type { StructuredTextGraphQlResponseRecord } from 'react-datocms';

/**
 * Fragment describing the data needed to render links to pages.
 */

export const PageLinkFragment = /* GraphQL */ `
  fragment PageLinkFragment on PageRecord {
    ... on RecordInterface {
      id
      __typename
    }
    ... on PageRecord {
      title
    }
  }
`;

export interface PageLinkFragmentData extends StructuredTextGraphQlResponseRecord {
  id: string;
  __typename: 'PageRecord';
  title?: string | null;
}
