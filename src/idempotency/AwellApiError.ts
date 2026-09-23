import { GenqlError } from '../genql/generated/runtime/error'

export interface GraphqlErrorLike {
  message: string
  extensions?: Record<string, unknown>
}

/** RFC 9457 problem details, as the API attaches them to idempotency refusals. */
export interface ProblemDetails {
  type?: string
  title?: string
  detail?: string
}

/**
 * What the SDK throws when the Orchestration API answers with GraphQL errors, on any HTTP status.
 *
 * Extends the generated client's `GenqlError`, so existing `catch` code keeps working, and adds what
 * a caller needs to branch on: the HTTP `status`, the first error's `code` (for example
 * `IDEMPOTENCY_KEY_IN_FLIGHT`, `IDEMPOTENCY_KEY_REUSED`), its `problem` details when present, and
 * whether the response was a `replayed` one. Before this class, a non-2xx response surfaced as a plain
 * `Error` whose message was the status text plus the raw body.
 */
export class AwellApiError extends GenqlError {
  readonly status: number
  readonly code?: string
  readonly problem?: ProblemDetails
  readonly replayed: boolean

  constructor({
    status,
    errors,
    data,
    replayed = false,
    message,
  }: {
    status: number
    errors: GraphqlErrorLike[]
    data?: unknown
    replayed?: boolean
    /** Overrides the message derived from `errors`; for failures with no GraphQL body. */
    message?: string
  }) {
    super(errors, data)
    this.name = 'AwellApiError'
    if (message !== undefined) this.message = message
    this.status = status
    this.replayed = replayed
    const extensions = errors[0]?.extensions
    const code = extensions?.code
    this.code = typeof code === 'string' ? code : undefined
    const problem = extensions?.problem
    this.problem =
      problem !== null && typeof problem === 'object'
        ? (problem as ProblemDetails)
        : undefined
  }
}
