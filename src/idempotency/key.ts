/*
 * The header names, the key rule and the quoting below mirror `@awell-health/extensions-core`
 * (`src/idempotency/types.ts`), which is the authority on them: it also owns the parser the
 * Orchestration API uses. This package cannot depend on extensions-core (it is extensions-core's
 * peer, and the customer-facing client), so the three are repeated here. Change them there first;
 * a drift surfaces as a 400 on every keyed SDK call, since the API enforces the rule.
 */

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
