import {
  VideoPlayerFragment,
  type VideoPlayerFragmentData,
} from '~/components/VideoPlayer/fragments';

/**
 * GraphQL fragment colocated with the VideoBlock component to keep the UI in
 * sync with the structure exported by `schema.ts`.
 */

export const VideoBlockFragment = /* GraphQL */ `
  fragment VideoBlockFragment on VideoBlockRecord {
    asset {
      title
      ...VideoPlayerFragment
    }
  }
  ${VideoPlayerFragment}
`;

export interface VideoBlockFragmentData {
  asset: {
    title?: string | null;
    video: VideoPlayerFragmentData['video'];
  };
}
