/**
 * Fragment describing the payload required by the video player component.
 */

export const VideoPlayerFragment = /* GraphQL */ `
  fragment VideoPlayerFragment on VideoFileField {
    video {
      muxPlaybackId
      title
      width
      height
      blurUpThumb
    }
  }
`;

export interface VideoPlayerFragmentData {
  video: {
    muxPlaybackId: string;
    title?: string | null;
    width?: number | null;
    height?: number | null;
    blurUpThumb?: string | null;
  } | null;
}
