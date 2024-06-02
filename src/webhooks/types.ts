export enum WebhookEvent {
  PATHWAY_STARTED = 'pathway.started',
  PATHWAY_COMPLETED = 'pathway.completed',
  ACTIVITY_CREATED = 'activity.created',
  ACTIVITY_COMPLETED = 'activity.completed',
  FORM_SUBMITTED = 'form.submitted',
  DATA_POINT_COLLECTED = 'data_point.collected',
  REMINDER_CREATED = 'reminder.created',
  SESSION_STARTED = 'session.started',
  SESSION_COMPLETED = 'session.completed',
  SESSION_EXPIRED = 'session.expired',
}

export type WebhookPayload = {
  event_type: string
  date?: string
  complete_date?: string
  start_date?: string
  activity_id?: string
  activity?: any
  session?: any
  pathway?: any
  data_point?: any
  reminder?: any
  form?: any
  response?: any
}
