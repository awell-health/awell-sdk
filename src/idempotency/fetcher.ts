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

export type FetchLike = (
  url: string,
  init: { method: string; headers: Record<string, string>; body: string },
) => Promise<{
  ok: boolean
  status: number
  statusText: string
  headers: { get: (name: string) => string | null }
  text: () => Promise<string>
}>

/**
 * The HTTP layer under the generated client.
 *
 * The generated fetcher throws a plain `Error` on any non-2xx status, which loses the GraphQL
 * `errors` (and their `extensions.code`) the API put in the body — every idempotency refusal (400,
 * 409, 422) arrives that way. This one reads the body on any status and throws {@link AwellApiError}
 * when it carries errors, so callers can branch on `code` and `status`.
 */
export const createAwellFetcher = ({
  url,
  headers,
  fetch: fetchImpl,
  onResponse,
}: {
  url: string
  headers: Record<string, string>
  fetch?: FetchLike
  onResponse?: (info: ResponseInfo) => void
}): BaseFetcher => {
  return async (operation) => {
    const doFetch = fetchImpl ?? resolveGlobalFetch()
    const res = await doFetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...headers },
      body: JSON.stringify(operation),
    })
    const replayed = res.headers.get(IDEMPOTENCY_REPLAYED_HEADER) === 'true'
    onResponse?.({ status: res.status, replayed })

    const text = await res.text()
    const json: unknown = parseJson(text)
    if (json === undefined || json === null || typeof json !== 'object') {
      throw new AwellApiError({
        status: res.status,
        errors: [],
        replayed,
        message: `${res.status} ${res.statusText}: ${text.slice(0, 500)}`,
      })
    }
    // Batched operations come back as an array; the generated client inspects each item itself.
    if (Array.isArray(json)) return json as ExecutionResult[]
    const result = json as ExecutionResult & { errors?: unknown }
    const errors = errorsOf(result)
    if (errors.length > 0) {
      throw new AwellApiError({
        status: res.status,
        errors,
        data: result.data,
        replayed,
      })
    }
    if (!res.ok) {
      throw new AwellApiError({
        status: res.status,
        errors: [],
        replayed,
        message: `${res.status} ${res.statusText}: ${text.slice(0, 500)}`,
      })
    }
    return result
  }
}

const parseJson = (text: string): unknown => {
  if (text === '') return undefined
  try {
    return JSON.parse(text)
  } catch {
    return undefined
  }
}

const errorsOf = (json: { errors?: unknown }): GraphqlErrorLike[] =>
  Array.isArray(json.errors) ? (json.errors as GraphqlErrorLike[]) : []

const resolveGlobalFetch = (): FetchLike => {
  if (typeof fetch === 'undefined') {
    throw new Error(
      'Global `fetch` is not available in this runtime; use Node 18 or newer.',
    )
  }
  return fetch as unknown as FetchLike
}
