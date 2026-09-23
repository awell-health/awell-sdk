import { isNil } from 'lodash'
import { type Client, createClient } from './genql/generated'
import { createAwellFetcher, type ResponseInfo } from './idempotency/fetcher'
import {
  assertValidIdempotencyKey,
  formatIdempotencyKey,
  IDEMPOTENCY_KEY_HEADER,
} from './idempotency/key'
import { getApiUrl } from './lib'
import { type Environment } from './types/Environment'
import { verify } from './webhooks/verify'
import {
  awellFormResponseToHealthieFormAnswers,
  AwellFormResponseToFhirQuestionnaireResponseItems,
  AwellFormToFhirQuestionnaire,
  slateToEscapedJsString,
} from './lib/utils'

/**
 * A class representing the Awell SDK.
 */
export class AwellSdk {
  /**
   * The API key used to authenticate API requests.
   */
  readonly apiKey: string

  /**
   * The orchestration client that calls the orchestration API.
   */
  readonly orchestration: Client

  /**
   * The environment for which the SDK is configured (e.g., development, staging, production).
   * Setting the environment will make sure the correct API URL is called.
   */
  readonly environment?: Environment

  /**
   * The custom API URL to be used if provided.
   * Takes presedence over the "environment" when both are specified.
   */
  readonly apiUrl?: string

  /**
   * Creates an instance of the Awell SDK.
   *
   * @param {Object} opts - The options for configuring the SDK.
   * @param {Environment} [opts.environment] - The environment to use for the SDK.
   * @param {string} [opts.apiUrl] - The API URL. Takes presedence over the "environment" when both are specified.
   * @param {string} opts.apiKey - The API key to use for authentication.
   * @throws {Error} Will throw an error if both `environment` and `apiUrl` are not provided.
   */
  constructor(opts: {
    environment?: Environment
    apiKey: string
    apiUrl?: string
  }) {
    this.environment = opts.environment
    this.apiKey = opts.apiKey
    this.apiUrl = opts.apiUrl

    if (isNil(this.environment) && isNil(this.apiUrl)) {
      throw new Error(
        'Both "environment" and "apiUrl" are not provided. Provide one of the two to instantiate the SDK.',
      )
    }

    this.orchestration = this.createOrchestrationClient()
  }

  /**
   * An orchestration client whose every request carries the given `Idempotency-Key`, so a retry of
   * a mutation that already completed returns the original response instead of running again. Use
   * one key per logical request: a retry reuses it, a new request gets a new one. Format and
   * semantics: https://docs.awellhealth.com/api-reference/guides/idempotency
   *
   * @param key 1 to 255 printable ASCII characters, no whitespace (a UUID, for example). Quoted for
   *   the wire here; pass it bare. Throws on an invalid key before any request is made.
   * @param options.onResponse called with the HTTP status and whether the API served a stored
   *   (replayed) response, since a replay is otherwise indistinguishable from a fresh execution.
   *
   * @example
   * const client = sdk.withIdempotencyKey(`${eventId}:complete`)
   * await client.mutation({ completeExtensionActivity: { __args: { input }, success: true } })
   */
  public withIdempotencyKey(
    key: string,
    options: { onResponse?: (info: ResponseInfo) => void } = {},
  ): Client {
    assertValidIdempotencyKey(key)
    return this.createOrchestrationClient(
      { [IDEMPOTENCY_KEY_HEADER]: formatIdempotencyKey(key) },
      options.onResponse,
    )
  }

  private createOrchestrationClient(
    extraHeaders: Record<string, string> = {},
    onResponse?: (info: ResponseInfo) => void,
  ): Client {
    return createClient({
      fetcher: createAwellFetcher({
        // Defining the apiUrl takes precedence over setting the environment
        url: this.apiUrl ?? getApiUrl(this.environment),
        headers: { apikey: this.apiKey, ...extraHeaders },
        onResponse,
      }),
    })
  }

  /**
   * Webhooks SDK with utility functions
   */
  public webhooks = {
    /**
     * Verify that the incoming webhook has been sent by Awell and has not been tampered with.
     * @param {any} body the JSON body of the webhook.
     * @param {string} signature the base64 encoded signature taken from the `x-awell-signature` header.
     * @param {string} publicKey your public signing key available in Awell Studio.
     * @returns true if the signature is valid
     */
    verify,
  }

  /**
   * Utility functions for the SDK
   */
  public utils = {
    healthie: {
      awellFormResponseToHealthieFormAnswers,
    },
    fhir: {
      AwellFormToFhirQuestionnaire,
      AwellFormResponseToFhirQuestionnaireResponseItems,
    },
    awell: {
      slateToEscapedJsString,
    },
  }
}
