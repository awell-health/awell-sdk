# Awell SDK

An SDK built with https://genql.dev/. The SDK is auto-generated and should make calling Awell's API easier if if you are on a JavaScript stack.

The SDK can translates JavaScript code into GraphQL queries, enabling **auto completion** and **validation** for the GraphQL queries. Additional benefits:

- Type safe
- Only generate the client once, only when the schema changes and not every time a query is changed
- No runtime dependencies (not even graphql)

## For Awell

### Todo

- Review
- Create NPM package (see ""Installation)" so the package can be used as desribed in "Usage"
- Add prettier
- Add eslint

### Generate the SDK client

Run `yarn generate-sdk`

Note: make sure environment variables in `.env` are set.

## For users

### Installation

```bash
yarn add @awell-health/sdk-js
```

### Usage

Learn more [here](https://genql.dev/docs).

Remember to always call the SDK on the server to keep your API key secure.

```javascript
import { AwellSdk } from "@awell-health/sdk-js";

// Create the SDK
const sdk = new AwellSdk({
  environment: "production-eu",
  apiKey: "YOUR_API_KEY",
});

// Perform your query our mutation
sdk.orchestration.query({
  publishedPathwayDefinitions: {
    publishedPathwayDefinitions: {
      id: true,
      title: true,
      version: true,
      release_id: true,
    },
  },
});
```
