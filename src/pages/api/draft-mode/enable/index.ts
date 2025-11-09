import type { APIRoute } from 'astro';
import { PASSWORD_FOR_DRAFT } from 'astro:env/server';
import { timingSafeEqual } from 'node:crypto';

import { enableDraftMode } from '~/lib/draftMode';
import { handleUnexpectedError, invalidRequestResponse, isRelativeUrl } from '../../utils';

export const prerender = false;

const encoder = new TextEncoder();

/**
 * This route handler enables Draft Mode and redirects to the given URL.
 */
export const GET: APIRoute = (event) => {
  const { url } = event;

  // Parse query string parameters
  const token = url.searchParams.get('token');
  const redirectUrl = url.searchParams.get('url') || '/';

  try {
    const normalizedSecret = PASSWORD_FOR_DRAFT.trim();
    const normalizedToken = token?.trim();

    if (!normalizedToken) {
      return invalidRequestResponse('Missing token', 401);
    }

    const secretBytes = encoder.encode(normalizedSecret);
    const tokenBytes = encoder.encode(normalizedToken);

    const isValidToken =
      secretBytes.length === tokenBytes.length && timingSafeEqual(secretBytes, tokenBytes);

    // Ensure that the request is coming from a trusted source
    if (!isValidToken) {
      if (import.meta.env.DEV) {
        console.debug('[draft-mode] Invalid token', {
          expectedLength: normalizedSecret.length,
          providedLength: normalizedToken.length,
        });
      }

      return invalidRequestResponse('Invalid token', 401);
    }

    // Avoid open redirect vulnerabilities
    if (!isRelativeUrl(redirectUrl)) {
      return invalidRequestResponse('URL must be relative!', 422);
    }

    enableDraftMode(event);
  } catch (error) {
    return handleUnexpectedError(error);
  }

  return event.redirect(redirectUrl, 307);
};
