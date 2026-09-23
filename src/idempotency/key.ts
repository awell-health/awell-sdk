/**
 * The request header a caller sets to ask the Orchestration API for replay protection, per the IETF
 * HTTPAPI draft `Idempotency-Key`. Lower-case, the way header maps hold it.
 */
export const IDEMPOTENCY_KEY_HEADER = 'idempotency-key'

/** Set to `true` on a response the API served from its store instead of executing. */
export const IDEMPOTENCY_REPLAYED_HEADER = 'idempotency-replayed'

/**
 * Awell's published key format: 1 to 255 printable ASCII characters, no whitespace. A UUID fits.
 * The same rule the API enforces, checked here so a bad key fails in your code, not as a 400.
 */
const KEY_PATTERN = /^[\x21-\x7E]{1,255}$/

export const isValidIdempotencyKey = (key: string): boolean =>
  KEY_PATTERN.test(key)

export const assertValidIdempotencyKey = (key: string): void => {
  if (!isValidIdempotencyKey(key)) {
    throw new Error(
      'Invalid idempotency key: use 1 to 255 printable ASCII characters with no whitespace (a UUID, for example).',
    )
  }
}

/**
 * Serialize a key as the RFC 8941 String the header carries: double-quoted, with `"` and `\`
 * escaped. The API accepts only this form.
 */
export const formatIdempotencyKey = (key: string): string =>
  `"${key.replace(/(["\\])/g, '\\$1')}"`
