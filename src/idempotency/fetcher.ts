import type { BaseFetcher } from '../genql/generated/runtime/createClient'
import type { ExecutionResult } from '../genql/generated/runtime/types'
import { AwellApiError, type GraphqlErrorLike } from './AwellApiError'
import { IDEMPOTENCY_REPLAYED_HEADER } from './key'

export interface ResponseInfo {
  /** The HTTP status the API answered with. */
  status: number
  /** True when the API served a stored response for an `Idempotency-Key` instead of executing. */
  replayed: boolean
}

/**
 * The HTTP layer under the generated client. Its default fetcher throws a plain `Error` on any
 * non-2xx status, before reading the body — which is where the API puts the GraphQL `errors` (and
 * their `extensions.code`) for every idempotency refusal. This one reads the body on any status and
 * throws {@link AwellApiError} when it carries errors, so callers can branch on `code` and `status`.
 */
export const createAwellFetcher = ({
  url,
  headers,
  onResponse,
}: {
  url: string
  headers: Record<string, string>
  onResponse?: (info: ResponseInfo) => void
}): BaseFetcher => {
  return async (operation) => {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...headers },
      body: JSON.stringify(operation),
    })
    const replayed = res.headers.get(IDEMPOTENCY_REPLAYED_HEADER) === 'true'
    onResponse?.({ status: res.status, replayed })

    const text = await res.text()
    const body = parseJson(text)
    // Batched operations come back as an array; the generated client inspects each item itself.
    if (Array.isArray(body)) return body as ExecutionResult[]
    const errors = Array.isArray(body?.errors)
      ? (body.errors as GraphqlErrorLike[])
      : []
    if (errors.length > 0 || !res.ok || body === undefined) {
      throw new AwellApiError({
        status: res.status,
        errors,
        data: body?.data,
        replayed,
        message:
          errors.length > 0
            ? undefined
            : `${res.status} ${res.statusText}: ${text.slice(0, 500)}`,
      })
    }
    return body as ExecutionResult
  }
}

const parseJson = (
  text: string,
): { errors?: unknown; data?: unknown } | undefined => {
  try {
    const parsed: unknown = JSON.parse(text)
    return parsed !== null && typeof parsed === 'object'
      ? (parsed as { errors?: unknown; data?: unknown })
      : undefined
  } catch {
    return undefined
  }
}
