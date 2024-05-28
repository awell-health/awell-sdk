# Awell SDK

The Awell SDK provides convenient access to Awell's APIs from applications written in server-side JavaScript.

## Powered by GenQL

The SDK is built using [GenQL](https://genql.dev/), making it easier to call Awell's API if you're using a JavaScript stack. The SDK translates JavaScript code into GraphQL queries, providing auto-completion and validation for your queries.

## Installation

Install the package with:

```
npm install @awell-health/awell-sdk
# or
yarn add @awell-health/awell-sdk
```

## Usage

Learn more about GenQL and its syntax [here](https://genql.dev/docs).

Remember to always call the SDK on the server to keep your API key secure.

```javascript
import { AwellSdk } from '@awell-health/awell-sdk'

// Create the SDK
const sdk = new AwellSdk({
  environment: 'production-eu',
  apiKey: 'YOUR_API_KEY',
})

// Perform your query our mutation
const result = await sdk.orchestration.query({
  publishedPathwayDefinitions: {
    publishedPathwayDefinitions: {
      id: true,
      title: true,
      version: true,
      release_id: true,
    },
  },
})

const definitions =
  result.publishedPathwayDefinitions.publishedPathwayDefinitions
```

## Configuration

The SDK can be initialized with the following options:

```javascript
const sdk = new AwellSdk({
  environment: 'sandbox',
  apiUrl: 'https://api.sandbox.awellhealth.com/orchestration/m2m/graphql',
  apiKey: 'YOUR_API_KEY',
})
```

| Option      | Required | Description                                                                                                                                                                                                                                                        |
|-------------|----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| environment | No*      | The Awell environment to use for the SDK. The SDK will automatically target the correct endpoint for the environment you specified. Following options are allowed: `development` \| `staging` \| `sandbox` \| `production-eu` \| `production-us` \| `production-uk`|
| apiUrl      | No*      | The API URL. Takes presedence over the "environment" when both are specified.                                                                                                                                                                                      |
| apiKey      | Yes      | The API key to use for authentication.                                                                                                                                                                                                                             |

\* The SDK will throw an error if neither environment nor apiUrl is provided.

## More information

You can browse our [Developer Hub](https://developers.awellhealth.com/awell-orchestration/api-reference/overview/graphql-api) to learn more about all queries and mutations. Everything documented on the Developer Hub is available through the SDK.

### Example

The [Get patient query](https://developers.awellhealth.com/awell-orchestration/api-reference/queries/get-patient) as documented on the Developer Hub can be used as follows:

```javascript
const res = await sdk.orchestration.query({
  patient: {
    __args: {
      id: 'some_patient_id', // Variable
    },
    patient: {
      id: true,
      profile: {
        __scalar: true, // get all unnested scalar fields
        identifier: {
          __scalar: true, // get all scalar fields within identifier object
        },
        address: {
          street: true,
          city: true,
          zip: true,
          state: true,
          country: true,
        },
      },
    },
  },
})
```
