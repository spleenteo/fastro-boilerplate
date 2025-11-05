/**
 * GraphQL fragment colocated with the ButtonBlock component so the UI stays
 * aligned with the content model exported in `schema.ts`.
 */

export const ButtonBlockFragment = /* GraphQL */ `
  fragment ButtonBlockFragment on ButtonBlockRecord {
    label
    url
    primary
  }
`;

export interface ButtonBlockFragmentData {
  label?: string | null;
  url?: string | null;
  primary?: boolean | null;
}
