import { AwellApiError } from './AwellApiError'
import { createAwellFetcher, type FetchLike } from './fetcher'

const response = (
  status: number,
  body: unknown,
  headers: Record<string, string> = {},
): Awaited<ReturnType<FetchLike>> => ({
  ok: status >= 200 && status < 300,
  status,
  statusText: String(status),
  headers: { get: (name: string) => headers[name.toLowerCase()] ?? null },
  text: async () => (typeof body === 'string' ? body : JSON.stringify(body)),
})

const operation = { query: 'mutation { x }', variables: {} }

describe('createAwellFetcher', () => {
  test('sends a POST with the API key, the JSON content type, and the operation as body', async () => {
    const fetch = jest.fn(async () => response(200, { data: { x: 1 } }))
    const fetcher = createAwellFetcher({
      url: 'https://api.example/graphql',
      headers: { apikey: 'k', 'idempotency-key': '"key-1"' },
      fetch,
    })
    await expect(fetcher(operation)).resolves.toEqual({ data: { x: 1 } })
    expect(fetch).toHaveBeenCalledWith('https://api.example/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: 'k',
        'idempotency-key': '"key-1"',
      },
      body: JSON.stringify(operation),
    })
  })

  test('a 409 with GraphQL errors becomes an AwellApiError with status, code and problem details', async () => {
    const errors = [
      {
        message: 'A request is outstanding for this Idempotency-Key',
        extensions: {
          code: 'IDEMPOTENCY_KEY_IN_FLIGHT',
          statusCode: 409,
          problem: {
            title: 'A request is outstanding for this Idempotency-Key',
          },
        },
      },
    ]
    const fetcher = createAwellFetcher({
      url: 'u',
      headers: {},
      fetch: async () => response(409, { errors, data: null }),
    })
    const err = await fetcher(operation).catch((e: unknown) => e)
    expect(err).toBeInstanceOf(AwellApiError)
    const apiError = err as AwellApiError
    expect(apiError.status).toBe(409)
    expect(apiError.code).toBe('IDEMPOTENCY_KEY_IN_FLIGHT')
    expect(apiError.problem?.title).toBe(
      'A request is outstanding for this Idempotency-Key',
    )
    expect(apiError.message).toBe(
      'A request is outstanding for this Idempotency-Key',
    )
    expect(apiError.errors).toEqual(errors)
  })

  test('a 200 with GraphQL errors still throws, as the generated client did', async () => {
    const fetcher = createAwellFetcher({
      url: 'u',
      headers: {},
      fetch: async () =>
        response(200, {
          errors: [{ message: 'Not found', extensions: { code: 'NOT_FOUND' } }],
          data: null,
        }),
    })
    await expect(fetcher(operation)).rejects.toMatchObject({
      name: 'AwellApiError',
      status: 200,
      code: 'NOT_FOUND',
    })
  })

  test('a non-JSON failure keeps the status and the body text', async () => {
    const fetcher = createAwellFetcher({
      url: 'u',
      headers: {},
      fetch: async () => response(502, 'Bad Gateway'),
    })
    await expect(fetcher(operation)).rejects.toMatchObject({
      name: 'AwellApiError',
      status: 502,
      message: '502 502: Bad Gateway',
    })
  })

  test('reports the status and the Idempotency-Replayed header through onResponse', async () => {
    const onResponse = jest.fn()
    const fetcher = createAwellFetcher({
      url: 'u',
      headers: {},
      fetch: async () =>
        response(200, { data: { x: 1 } }, { 'idempotency-replayed': 'true' }),
      onResponse,
    })
    await fetcher(operation)
    expect(onResponse).toHaveBeenCalledWith({ status: 200, replayed: true })
  })

  test('marks an error thrown for a replayed response', async () => {
    const fetcher = createAwellFetcher({
      url: 'u',
      headers: {},
      fetch: async () =>
        response(
          200,
          {
            errors: [
              { message: 'stored failure', extensions: { code: 'NOT_FOUND' } },
            ],
          },
          { 'idempotency-replayed': 'true' },
        ),
    })
    await expect(fetcher(operation)).rejects.toMatchObject({ replayed: true })
  })
})
