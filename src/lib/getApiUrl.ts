import { type Environment } from '../types/Environment'

/**
 * Returns the appropriate API URL based on the specified environment.
 *
 * @param {Environment} [environment] - The environment to use for determining the API URL.
 *    Possible values include:
 *      - "development": Development environment URL
 *      - "staging": Staging environment URL
 *      - "sandbox": Sandbox environment URL
 *      - "production-eu": Production (EU) environment URL
 *      - "production-us": Production (US) environment URL
 *      - "production-uk": Production (UK) environment URL
 * @returns {string} The appropriate API URL for the given environment, the default API URL is Sandbox.
 */
export const getApiUrl = (environment?: Environment): string => {
  const DEFAULT_API_URL =
    'https://api.sandbox.awellhealth.com/orchestration/m2m/graphql'

  switch (environment) {
    case 'development':
      return 'https://api.development.awellhealth.com/orchestration/m2m/graphql'
    case 'staging':
      return 'https://api.staging.awellhealth.com/orchestration/m2m/graphql'
    case 'sandbox':
      return 'https://api.sandbox.awellhealth.com/orchestration/m2m/graphql'
    case 'production-eu':
      return 'https://api.awellhealth.com/orchestration/m2m/graphql'
    case 'production-us':
      return 'https://api.us.awellhealth.com/orchestration/m2m/graphql'
    case 'production-uk':
      return 'https://api.uk.awellhealth.com/orchestration/m2m/graphql'
    default:
      return DEFAULT_API_URL
  }
}
