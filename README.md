# Awell SDK

The Awell SDK provides convenient access to Awell's APIs and webhooks from applications written in server-side JavaScript. The SDK also exports all of our GraphQL types.

## Installation

Install the package with:

```
npm install @awell-health/awell-sdk
# or
yarn add @awell-health/awell-sdk
```

## Usage

Learn more about the syntax of the SDK [here](https://genql.dev/docs).

Remember to **always call the SDK on the server** to keep your API key secure.

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

### Batching requests

You can minimize network requests and server load fetching queries that are near in time using batching.

```typescript
const sdk = new AwellSdk({
  apiUrl: process.env.AWELL_API_URL,
  apiKey: process.env.AWELL_API_KEY,
})

// These queries will trigger only one network request
const res = await Promise.all([
  sdk.orchestration.query({
    pathway: {
      __args: {
        id: 'pathway-1',
      },
      success: true,
      pathway: {
        __scalar: true
      },
    },
  }),
  sdk.orchestration.query({
    pathway: {
      __args: {
        id: 'pathway-2',
      },
      success: true,
      pathway: {
        __scalar: true
      },
    },
  }),
])
```

### Types

Browse all types [here](https://github.com/awell-health/awell-sdk/blob/main/src/genql/generated/schema.ts) or use our [GraphQL playground](https://developers.awellhealth.com/awell-orchestration/developer-tools/api/schema) to browse the GraphQL schema.

Types can be imported as follows:

```javascript
import { type Pathway, type Form } from '@awell-health/awell-sdk'
```

### Webhooks

```javascript
import {
  AwellSdk,
  type WebhookEvent,
  type WebhookPayload
} from '@awell-health/awell-sdk'

const PUBLIC_KEY = 'your_public_key' // Available in Awell Studio

app.post(
  '/awell-webhook-listener',
  express.json({ type: 'application/json' }),
  (request, response) => {
    // Needed if you want to verify the incoming webhook
    const signature = req.headers['x-awell-signature'] as string;

    const requestBody = request.body as WebhookPayload

    const sdk = new AwellSdk({
      environment: 'production-eu',
      apiKey: 'YOUR_API_KEY',
    })

    /**
     * Verify that the incoming webhook has been sent
     * by Awell and has not been tampered with
     */
    const isValid = sdk.webhooks.verify(
      requestBody,
      signature,
      PUBLIC_KEY,
    )

    // If webhook you received is legitimate, you can process it
    if (isValid) {
      const { event } = requestBody

      // Handle the event
      switch (event.event_type) {
        case WebhookEvent.PATHWAY_STARTED: {
          const pathway = event?.pathway
          console.log(pathway)
          // Your code
          break
        }
        default:
          console.log(`Unhandled event type ${event.event_type}`)
      }
    }

    // Return a response to acknowledge receipt of the event
    response.json({ received: true })
  },
)
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

| Option      | Required | Description                                                                                                                                                                                                                                                         |
| ----------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| environment | No\*     | The Awell environment to use for the SDK. The SDK will automatically target the correct endpoint for the environment you specified. Following options are allowed: `development` \| `staging` \| `sandbox` \| `production-eu` \| `production-us` \| `production-uk` |
| apiUrl      | No\*     | The API URL. Takes presedence over the "environment" when both are specified.                                                                                                                                                                                       |
| apiKey      | Yes      | The API key to use for authentication.                                                                                                                                                                                                                              |

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
