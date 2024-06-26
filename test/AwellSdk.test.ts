import { AwellSdk } from '../src'

describe('AwellSdk', () => {
  test('Orchestration client', async () => {
    const sdk = new AwellSdk({
      environment: 'sandbox',
      apiKey: 'YOUR_API_KEY',
    })

    /**
     * Test throw an error because no API key is specified.
     * We need to write some tests later but it works when there's a valid API key
     */
    await expect(
      sdk.orchestration.query({
        publishedPathwayDefinitions: {
          success: true,
          publishedPathwayDefinitions: {
            id: true,
            title: true,
            version: true,
            release_id: true,
          },
        },
      }),
    ).rejects.toThrow('Unauthorized')
  })
})
