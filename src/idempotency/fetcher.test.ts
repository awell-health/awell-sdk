import { AwellApiError } from './AwellApiError'
import { createAwellFetcher } from './fetcher'

const REASON: Record<number, string> = {
  200: 'OK',
  401: 'Unauthorized',
  409: 'Conflict',
  502: 'Bad Gateway',
}
const response = (
  status: number,
  body: unknown,
  headers: Record<string, string> = {},
  statusText: string = REASON[status] ?? '',
): Response =>
  new Response(typeof body === 'string' ? body : JSON.stringify(body), {
    status,
    statusText,
    headers,
  })

const operation = { query: 'mutation { x }', variables: {} }

const fetchMock = jest.fn()
const originalFetch = globalThis.fetch
beforeAll(() => {
  globalThis.fetch = fetchMock as unknown as typeof fetch
})
afterAll(() => {
  globalThis.fetch = originalFetch
})
beforeEach(() => {
  fetchMock.mockReset()
})

const fetcher = (
  onResponse?: jest.Mock,
): ReturnType<typeof createAwellFetcher> =>
  createAwellFetcher({
    url: 'https://api.example/graphql',
    headers: { apikey: 'k', 'idempotency-key': '"key-1"' },
    onResponse,
  })

describe('createAwellFetcher', () => {
  test('sends a POST with the API key, the JSON content type, and the operation as body', async () => {
    fetchMock.mockResolvedValue(response(200, { data: { x: 1 } }))
    await expect(fetcher()(operation)).resolves.toEqual({ data: { x: 1 } })
    expect(fetchMock).toHaveBeenCalledWith('https://api.example/graphql', {
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
    fetchMock.mockResolvedValue(response(409, { errors, data: null }))
    const err = await fetcher()(operation).catch((e: unknown) => e)
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
    fetchMock.mockResolvedValue(
      response(200, {
        errors: [{ message: 'Not found', extensions: { code: 'NOT_FOUND' } }],
        data: null,
      }),
    )
    await expect(fetcher()(operation)).rejects.toMatchObject({
      name: 'AwellApiError',
      status: 200,
      code: 'NOT_FOUND',
    })
  })

  test('a non-JSON failure keeps the status and the body text', async () => {
    fetchMock.mockResolvedValue(response(502, 'upstream down'))
    await expect(fetcher()(operation)).rejects.toMatchObject({
      name: 'AwellApiError',
      status: 502,
      message: 'HTTP 502 Bad Gateway: upstream down',
    })
  })

  test('a non-2xx JSON body without GraphQL errors is still an AwellApiError with the status', async () => {
    fetchMock.mockResolvedValue(response(401, { message: 'Unauthorized' }))
    await expect(fetcher()(operation)).rejects.toMatchObject({
      name: 'AwellApiError',
      status: 401,
      message: 'HTTP 401 Unauthorized: {"message":"Unauthorized"}',
    })
  })

  test('without a reason phrase (HTTP/2) the message still leads with the status', async () => {
    fetchMock.mockResolvedValue(response(503, 'try later', {}, ''))
    await expect(fetcher()(operation)).rejects.toMatchObject({
      status: 503,
      message: 'HTTP 503: try later',
    })
  })

  test('reports the status and the Idempotency-Replayed header through onResponse', async () => {
    fetchMock.mockResolvedValue(
      response(200, { data: { x: 1 } }, { 'idempotency-replayed': 'true' }),
    )
    const onResponse = jest.fn()
    await fetcher(onResponse)(operation)
    expect(onResponse).toHaveBeenCalledWith({ status: 200, replayed: true })
  })

  test('marks an error thrown for a replayed response', async () => {
    fetchMock.mockResolvedValue(
      response(
        200,
        {
          errors: [
            { message: 'stored failure', extensions: { code: 'NOT_FOUND' } },
          ],
        },
        { 'idempotency-replayed': 'true' },
      ),
    )
    await expect(fetcher()(operation)).rejects.toMatchObject({ replayed: true })
  })
})
