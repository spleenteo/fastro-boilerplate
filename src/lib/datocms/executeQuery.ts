import { executeQuery as libExecuteQuery } from '@datocms/cda-client';
import {
  DATOCMS_DRAFT_CONTENT_CDA_TOKEN,
  DATOCMS_PUBLISHED_CONTENT_CDA_TOKEN,
} from 'astro:env/server';

/**
 * Executes a GraphQL query using the DatoCMS Content Delivery API, using a
 * different API token depending on whether we want to fetch draft content or
 * published.
 */
export async function executeQuery<Result, Variables = Record<string, never>>(
  query: string,
  options?: ExecuteQueryOptions<Variables>,
) {
  const result = await libExecuteQuery<Result, Variables>(query, {
    ...options,
    variables: options?.variables,
    excludeInvalid: true,
    includeDrafts: options?.includeDrafts,
    token: options?.includeDrafts
      ? DATOCMS_DRAFT_CONTENT_CDA_TOKEN
      : DATOCMS_PUBLISHED_CONTENT_CDA_TOKEN,
  });

  return result;
}

type ExecuteQueryOptions<Variables> = {
  variables?: Variables;
  includeDrafts?: boolean;
};
