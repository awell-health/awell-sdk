import { AwellSdk } from './AwellSdk'

describe('AwellSdk.withIdempotencyKey', () => {
  const originalFetch = globalThis.fetch
  const fetchMock = jest.fn()

  beforeEach(() => {
    fetchMock.mockReset()
    fetchMock.mockResolvedValue({
      ok: true,
      status: 200,
      statusText: 'OK',
      headers: { get: () => null },
      text: async () =>
        JSON.stringify({ data: { startPathway: { pathway_id: 'p1' } } }),
    })
    globalThis.fetch = fetchMock as unknown as typeof fetch
  })

  afterAll(() => {
    globalThis.fetch = originalFetch
  })

  const sdk = new AwellSdk({
    apiUrl: 'https://api.example/graphql',
    apiKey: 'secret',
  })

  test('sends the key quoted under idempotency-key, next to the API key, and leaves the default client alone', async () => {
    const client = sdk.withIdempotencyKey('evt-1:start')
    await client.mutation({
      startPathway: {
        __args: { input: { pathway_definition_id: 'd', patient_id: 'p' } },
        pathway_id: true,
      },
    })
    expect(fetchMock).toHaveBeenCalledTimes(1)
    const [, init] = fetchMock.mock.calls[0]
    expect(init.headers).toMatchObject({
      apikey: 'secret',
      'idempotency-key': '"evt-1:start"',
    })

    await sdk.orchestration.query({
      pathway: { __args: { id: 'p1' }, success: true },
    })
    const [, plainInit] = fetchMock.mock.calls[1]
    expect(plainInit.headers).toMatchObject({ apikey: 'secret' })
    expect(plainInit.headers['idempotency-key']).toBeUndefined()
  })

  test.each(['', 'has space', 'x'.repeat(256)])(
    'rejects an invalid key (%p) before any request is made',
    (key) => {
      expect(() => sdk.withIdempotencyKey(key)).toThrow(
        'Invalid idempotency key',
      )
      expect(fetchMock).not.toHaveBeenCalled()
    },
  )

  test('onResponse reports a replay', async () => {
    fetchMock.mockResolvedValue({
      ok: true,
      status: 200,
      statusText: 'OK',
      headers: {
        get: (name: string) =>
          name === 'idempotency-replayed' ? 'true' : null,
      },
      text: async () =>
        JSON.stringify({ data: { startPathway: { pathway_id: 'p1' } } }),
    })
    const onResponse = jest.fn()
    await sdk
      .withIdempotencyKey('evt-1:start', { onResponse })
      .mutation({
        startPathway: {
          __args: { input: { pathway_definition_id: 'd', patient_id: 'p' } },
          pathway_id: true,
        },
      })
    expect(onResponse).toHaveBeenCalledWith({ status: 200, replayed: true })
  })
})
