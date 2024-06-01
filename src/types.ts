export * from './genql/generated/schema'
export * from './webhooks/types'

export type Environment =
  | 'development'
  | 'staging'
  | 'sandbox'
  | 'production-eu'
  | 'production-us'
  | 'production-uk'
