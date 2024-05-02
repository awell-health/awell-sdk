import { isNil } from "lodash";
import { Client, createClient } from "./genql/generated";
import { getApiUrl } from "./lib";
import { Environment } from "./types";

/**
 * A class representing the Awell SDK.
 */
export class AwellSdk {
  /**
   * The API key used to authenticate API requests.
   */
  readonly apiKey: string;

  /**
   * The orchestration client that calls the orchestration API.
   */
  readonly orchestration: Client;

  /**
   * The environment for which the SDK is configured (e.g., development, staging, production).
   * Setting the environment will make sure the correct API URL is called.
   */
  readonly environment?: Environment;

  /**
   * The custom API URL to be used if provided.
   * Takes presedence over the "environment" when both are specified.
   */
  readonly apiUrl?: string;

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
    environment?: Environment;
    apiKey: string;
    apiUrl?: string;
  }) {
    this.environment = opts.environment;
    this.apiKey = opts.apiKey;
    this.apiUrl = opts.apiUrl;

    if (isNil(this.environment) && isNil(this.apiUrl)) {
      throw new Error(
        'Both "environment" and "apiUrl" are not provided. Provide one of the two to instantiate the SDK.',
      );
    }

    const orchestrationClient = createClient({
      // Defining the apiUrl takes precedence over setting the environment
      url: this.apiUrl ?? getApiUrl(this.environment),
      headers: {
        apikey: this.apiKey,
      },
    });

    this.orchestration = orchestrationClient;
  }
}
