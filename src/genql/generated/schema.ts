// @ts-nocheck
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Scalars = {
    String: string,
    Boolean: boolean,
    ID: string,
    Float: number,
    Int: number,
    SafeDate: any,
}

export interface Query {
    scheduledTracksForPathway: ScheduledTracksPayload
    patientPathways: PatientPathwaysPayload
    baselineInfo: BaselineInfoPayload
    myPendingActivities: ActivitiesPayload
    myActivities: ActivitiesPayload
    pathwayActivities: ActivitiesPayload
    activities: ActivitiesPayload
    pathwayStepActivities: ActivitiesPayload
    apiCall: ApiCallPayload
    apiCalls: ApiCallsPayload
    calculationAction: ActionPayload
    calculationResults: CalculationResultsPayload
    checklist: ChecklistPayload
    clinicalNote: ClinicalNotePayload
    pathwayElements: ElementsPayload
    emrReport: EmrReportPayload
    extensionActivityRecord: ExtensionActivityRecordPayload
    form: FormPayload
    forms: FormsPayload
    formResponse: FormResponsePayload
    hostedSessionActivities: HostedSessionActivitiesPayload
    hostedSession: HostedSessionPayload
    message: MessagePayload
    pathwayFacts: OrchestrationFactsPayload
    pathwayDataPointDefinitions: PathwayDataPointDefinitionsPayload
    pathway: PathwayPayload
    myPathways: PathwaysPayload
    pathways: PathwaysPayload
    patientDemographicsQueryConfiguration: PatientDemographicsQueryConfigurationPayload
    patient: PatientPayload
    patients: PatientsPayload
    patientByIdentifier: PatientPayload
    publishedPathwayDefinitions: PublishedPathwayDefinitionsPayload
    publishedPathwayDefinitionsDashboard: PublishedPathwayDefinitionsPayload
    getStatusForPublishedPathwayDefinitions: PublishedPathwayDefinitionsPayload
    scheduledSteps: ScheduledStepsPayload
    searchPatientsByPatientCode: SearchPatientsPayload
    searchPatientsByNationalRegistryNumber: SearchPatientsPayload
    filterStakeholders: StakeholdersPayload
    stakeholdersByPathwayDefinitionIds: StakeholdersPayload
    stakeholdersByReleaseIds: StakeholdersPayload
    stakeholdersByDefinitionIds: StakeholdersPayload
    adHocTracksByPathway: TracksPayload
    adHocTracksByRelease: TracksPayload
    whoami: CurrentUserPayload
    webhookCall: WebhookCallPayload
    webhookCalls: WebhookCallsPayload
    webhookCallsForTenant: WebhookCallsPayload
    webhookCallsForPathwayDefinition: WebhookCallsPayload
    getOrchestrationFactsFromPrompt: OrchestrationFactsPromptPayload
    hostedPagesLink: HostedPagesLinkPayload
    __typename: 'Query'
}

export interface ScheduledTracksPayload {
    code: Scalars['String']
    success: Scalars['Boolean']
    scheduled_tracks: ScheduledTrack[]
    __typename: 'ScheduledTracksPayload'
}

export type Payload = (ScheduledTracksPayload | PatientPathwaysPayload | BaselineInfoPayload | ApiCallPayload | ApiCallsPayload | ActionPayload | CalculationResultsPayload | ChecklistPayload | ClinicalNotePayload | ElementsPayload | EmrReportPayload | ExtensionActivityRecordPayload | FormPayload | FormsPayload | FormResponsePayload | HostedSessionActivitiesPayload | HostedSessionPayload | MessagePayload | PathwayDataPointDefinitionsPayload | PathwayPayload | PatientPayload | ScheduledStepsPayload | SearchPatientsPayload | StakeholdersPayload | TracksPayload | CurrentUserPayload | WebhookCallPayload | WebhookCallsPayload | OrchestrationFactsPromptPayload | HostedPagesLinkPayload | AddIdentifierToPatientPayload | AddTrackPayload | CancelScheduledTracksPayload | CompleteExtensionActivityPayload | CreatePatientPayload | EmptyPayload | EvaluateFormRulesPayload | MarkMessageAsReadPayload | PatientDemographicsPayload | RetryApiCallPayload | RetryWebhookCallPayload | ScheduleTrackPayload | StartHostedActivitySessionPayload | StartHostedPathwaySessionFromLinkPayload | StartHostedPathwaySessionPayload | StartPathwayPayload | StartPathwayWithPatientIdentifierPayload | StopTrackPayload | SubmitChecklistPayload | SubmitFormResponsePayload | UpdatePatientPayload | UpdatePatientDemographicsQueryPayload | UpdatePatientLanguagePayload) & { __isUnion?: true }

export interface ScheduledTrack {
    id: Scalars['ID']
    pathway_id: Scalars['String']
    track_definition_id: Scalars['String']
    release_id: Scalars['String']
    tenant_id: Scalars['String']
    created_by_user_id: Scalars['String']
    created_date: Scalars['String']
    modified_date: (Scalars['String'] | null)
    scheduled_date: Scalars['String']
    status: Scalars['String']
    title: Scalars['String']
    __typename: 'ScheduledTrack'
}

export interface PatientPathwaysPayload {
    code: Scalars['String']
    success: Scalars['Boolean']
    patientPathways: PatientPathway[]
    __typename: 'PatientPathwaysPayload'
}

export interface PatientPathway {
    id: Scalars['ID']
    title: Scalars['String']
    status: PathwayStatus
    status_explanation: (Scalars['String'] | null)
    pathway_definition_id: Scalars['String']
    complete_date: (Scalars['String'] | null)
    stop_date: (Scalars['String'] | null)
    release_id: Scalars['String']
    version: (Scalars['Float'] | null)
    total_activities: (Scalars['Float'] | null)
    active_activities: (Scalars['Float'] | null)
    failed_activities: (Scalars['Float'] | null)
    latest_activity_date: (Scalars['String'] | null)
    latest_activity_title: (Scalars['String'] | null)
    latest_activity_type: (Scalars['String'] | null)
    baseline_info: (BaselineDataPoint[] | null)
    __typename: 'PatientPathway'
}

export type PathwayStatus = 'starting' | 'active' | 'stopped' | 'completed' | 'missing_baseline_info'

export interface BaselineDataPoint {
    definition: DataPointDefinition
    value: (Scalars['String'] | null)
    __typename: 'BaselineDataPoint'
}

export interface DataPointDefinition {
    id: Scalars['ID']
    key: Scalars['String']
    title: Scalars['String']
    category: DataPointSourceType
    valueType: DataPointValueType
    source_definition_id: Scalars['String']
    possibleValues: (DataPointPossibleValue[] | null)
    range: (Range | null)
    unit: (Scalars['String'] | null)
    optional: (Scalars['Boolean'] | null)
    /** Personally identifiable information */
    pii: (Scalars['Boolean'] | null)
    /** Additional context on data point */
    metadata: (DataPointMetaDataItem[] | null)
    __typename: 'DataPointDefinition'
}

export type DataPointSourceType = 'PATHWAY' | 'STEP' | 'TRACK' | 'FORM' | 'CALCULATION' | 'PATIENT_PROFILE' | 'PATIENT_IDENTIFIER' | 'API_CALL' | 'API_CALL_STATUS' | 'EXTENSION_WEBHOOK' | 'EXTENSION_ACTION' | 'DATA_POINT'

export type DataPointValueType = 'BOOLEAN' | 'DATE' | 'NUMBER' | 'STRING' | 'NUMBERS_ARRAY' | 'STRINGS_ARRAY' | 'TELEPHONE' | 'JSON'

export interface DataPointPossibleValue {
    value: Scalars['String']
    label: (Scalars['String'] | null)
    __typename: 'DataPointPossibleValue'
}

export interface Range {
    min: (Scalars['Float'] | null)
    max: (Scalars['Float'] | null)
    __typename: 'Range'
}

export interface DataPointMetaDataItem {
    value: Scalars['String']
    key: Scalars['String']
    __typename: 'DataPointMetaDataItem'
}

export interface BaselineInfoPayload {
    code: Scalars['String']
    success: Scalars['Boolean']
    baselineDataPoints: BaselineDataPoint[]
    __typename: 'BaselineInfoPayload'
}

export interface ActivitiesPayload {
    code: Scalars['String']
    success: Scalars['Boolean']
    pagination: (PaginationOutput | null)
    sorting: (SortingOutput | null)
    activities: Activity[]
    metadata: (ActivityMetadata | null)
    __typename: 'ActivitiesPayload'
}

export type PaginationAndSortingPayload = (ActivitiesPayload | OrchestrationFactsPayload | PathwaysPayload | PatientsPayload | PublishedPathwayDefinitionsPayload) & { __isUnion?: true }

export interface PaginationOutput {
    offset: (Scalars['Int'] | null)
    count: (Scalars['Int'] | null)
    total_count: (Scalars['Int'] | null)
    __typename: 'PaginationOutput'
}

export interface SortingOutput {
    field: Scalars['String']
    direction: Scalars['String']
    __typename: 'SortingOutput'
}

export interface Activity {
    id: Scalars['ID']
    stream_id: Scalars['String']
    date: Scalars['String']
    subject: ActivitySubject
    action: ActivityAction
    object: ActivityObject
    indirect_object: (ActivityObject | null)
    status: ActivityStatus
    resolution: (ActivityResolution | null)
    reference_id: Scalars['String']
    container_name: (Scalars['String'] | null)
    track: (ActivityTrack | null)
    label: (ActivityLabel | null)
    sub_activities: SubActivity[]
    isUserActivity: Scalars['Boolean']
    public: (Scalars['Boolean'] | null)
    context: (PathwayContext | null)
    session_id: (Scalars['String'] | null)
    stakeholders: (ActivityObject[] | null)
    /** Url for icon, only used by extensions custom actions */
    icon_url: (Scalars['String'] | null)
    /** Form display mode can either be conversational (1 question at a time) or regular (all questions at once). Only used in hosted pages for now. */
    form_display_mode: (FormDisplayMode | null)
    form: (Form | null)
    __typename: 'Activity'
}

export interface ActivitySubject {
    id: (Scalars['String'] | null)
    type: ActivitySubjectType
    name: Scalars['String']
    __typename: 'ActivitySubject'
}

export type ActivitySubjectType = 'AWELL' | 'STAKEHOLDER' | 'USER' | 'PLUGIN' | 'API_CALL'

export type ActivityAction = 'ADDED' | 'ACTIVATE' | 'COMPLETE' | 'DISCARDED' | 'SEND' | 'REMIND' | 'DELIVER' | 'COMPUTED' | 'FAILED' | 'FAILED_TO_SEND' | 'SUBMITTED' | 'ASSIGNED' | 'READ' | 'STOPPED' | 'PROCESSED' | 'SCHEDULED' | 'IS_WAITING_ON' | 'POSTPONED' | 'DELEGATED' | 'GENERATED' | 'SKIPPED' | 'REPORTED' | 'EXPIRED'

export interface ActivityObject {
    type: ActivityObjectType
    id: Scalars['String']
    name: Scalars['String']
    email: (Scalars['String'] | null)
    preferred_language: (Scalars['String'] | null)
    __typename: 'ActivityObject'
}

export type ActivityObjectType = 'ACTION' | 'API_CALL' | 'CALCULATION' | 'CHECKLIST' | 'CLINICAL_NOTE' | 'EVALUATED_RULE' | 'EMR_REPORT' | 'FORM' | 'MESSAGE' | 'PATHWAY' | 'PATIENT' | 'REMINDER' | 'STAKEHOLDER' | 'STEP' | 'USER' | 'EMR_REQUEST' | 'TRACK' | 'PLUGIN' | 'PLUGIN_ACTION'

export type ActivityStatus = 'ACTIVE' | 'DONE' | 'FAILED' | 'CANCELED' | 'EXPIRED'

export type ActivityResolution = 'FAILURE' | 'SUCCESS' | 'EXPIRED'

export interface ActivityTrack {
    id: (Scalars['String'] | null)
    title: Scalars['String']
    __typename: 'ActivityTrack'
}

export interface ActivityLabel {
    id: (Scalars['String'] | null)
    color: Scalars['String']
    text: Scalars['String']
    __typename: 'ActivityLabel'
}

export interface SubActivity {
    id: Scalars['String']
    date: Scalars['String']
    subject: ActivitySubject
    action: ActivityAction
    error: (Scalars['String'] | null)
    error_category: (Scalars['String'] | null)
    object: (ActivityObject | null)
    text: (TranslatedText | null)
    __typename: 'SubActivity'
}

export interface TranslatedText {
    en: (Scalars['String'] | null)
    __typename: 'TranslatedText'
}

export interface PathwayContext {
    instance_id: Scalars['String']
    pathway_id: Scalars['String']
    track_id: (Scalars['String'] | null)
    step_id: (Scalars['String'] | null)
    action_id: (Scalars['String'] | null)
    __typename: 'PathwayContext'
}

export type FormDisplayMode = 'CONVERSATIONAL' | 'REGULAR'

export interface Form {
    release_id: Scalars['String']
    key: Scalars['String']
    definition_id: Scalars['String']
    id: Scalars['ID']
    title: Scalars['String']
    trademark: (Scalars['String'] | null)
    metadata: (Scalars['String'] | null)
    questions: Question[]
    previous_answers: (PreviousAnswers[] | null)
    __typename: 'Form'
}

export interface Question {
    key: Scalars['String']
    id: Scalars['ID']
    definition_id: Scalars['String']
    title: Scalars['String']
    dataPointValueType: (DataPointValueType | null)
    options: (Option[] | null)
    questionType: (QuestionType | null)
    userQuestionType: (UserQuestionType | null)
    questionConfig: (QuestionConfig | null)
    rule: (Rule | null)
    metadata: (Scalars['String'] | null)
    __typename: 'Question'
}

export interface Option {
    id: Scalars['ID']
    value: Scalars['Float']
    value_string: Scalars['String']
    label: Scalars['String']
    __typename: 'Option'
}

export type QuestionType = 'MULTIPLE_CHOICE' | 'INPUT' | 'NO_INPUT'

export type UserQuestionType = 'MULTIPLE_SELECT' | 'MULTIPLE_CHOICE' | 'NUMBER' | 'YES_NO' | 'DATE' | 'SHORT_TEXT' | 'LONG_TEXT' | 'SLIDER' | 'DESCRIPTION' | 'MULTIPLE_CHOICE_GRID' | 'SIGNATURE' | 'TELEPHONE'

export interface QuestionConfig {
    recode_enabled: (Scalars['Boolean'] | null)
    mandatory: Scalars['Boolean']
    use_select: (Scalars['Boolean'] | null)
    slider: (SliderConfig | null)
    phone: (PhoneConfig | null)
    number: (NumberConfig | null)
    multiple_select: (MultipleSelectConfig | null)
    date: (DateConfig | null)
    __typename: 'QuestionConfig'
}

export interface SliderConfig {
    min: Scalars['Float']
    max: Scalars['Float']
    step_value: Scalars['Float']
    min_label: Scalars['String']
    max_label: Scalars['String']
    is_value_tooltip_on: Scalars['Boolean']
    display_marks: Scalars['Boolean']
    show_min_max_values: Scalars['Boolean']
    __typename: 'SliderConfig'
}

export interface PhoneConfig {
    default_country: (Scalars['String'] | null)
    available_countries: (Scalars['String'][] | null)
    __typename: 'PhoneConfig'
}

export interface NumberConfig {
    range: (RangeConfig | null)
    __typename: 'NumberConfig'
}

export interface RangeConfig {
    min: (Scalars['Float'] | null)
    max: (Scalars['Float'] | null)
    enabled: (Scalars['Boolean'] | null)
    __typename: 'RangeConfig'
}

export interface MultipleSelectConfig {
    range: (ChoiceRangeConfig | null)
    exclusive_option: (ExclusiveOptionConfig | null)
    __typename: 'MultipleSelectConfig'
}

export interface ChoiceRangeConfig {
    enabled: (Scalars['Boolean'] | null)
    min: (Scalars['Float'] | null)
    max: (Scalars['Float'] | null)
    __typename: 'ChoiceRangeConfig'
}

export interface ExclusiveOptionConfig {
    enabled: (Scalars['Boolean'] | null)
    option_id: (Scalars['String'] | null)
    __typename: 'ExclusiveOptionConfig'
}

export interface DateConfig {
    allowed_dates: (AllowedDatesOptions | null)
    include_date_of_response: (Scalars['Boolean'] | null)
    __typename: 'DateConfig'
}

export type AllowedDatesOptions = 'PAST' | 'FUTURE' | 'ALL'

export interface Rule {
    id: Scalars['ID']
    definition_id: (Scalars['String'] | null)
    boolean_operator: BooleanOperator
    conditions: Condition[]
    __typename: 'Rule'
}

export type BooleanOperator = 'AND' | 'OR'

export interface Condition {
    id: Scalars['ID']
    reference: (Scalars['String'] | null)
    reference_key: (Scalars['String'] | null)
    operator: (ConditionOperator | null)
    operand: (Operand | null)
    __typename: 'Condition'
}

export type ConditionOperator = 'IS_EQUAL_TO' | 'IS_NOT_EQUAL_TO' | 'IS_GREATER_THAN' | 'IS_LESS_THAN' | 'IS_GREATER_THAN_OR_EQUAL_TO' | 'IS_LESS_THAN_OR_EQUAL_TO' | 'CONTAINS' | 'DOES_NOT_CONTAIN' | 'IS_TRUE' | 'IS_NOT_TRUE' | 'IS_IN_RANGE' | 'IS_ANY_OF' | 'IS_NONE_OF' | 'IS_EMPTY' | 'IS_NOT_EMPTY' | 'IS_TODAY'

export interface Operand {
    type: ConditionOperandType
    value: Scalars['String']
    __typename: 'Operand'
}

export type ConditionOperandType = 'DATA_SOURCE' | 'STRING' | 'NUMBER' | 'BOOLEAN' | 'NUMBERS_ARRAY' | 'STRINGS_ARRAY' | 'DATA_POINT'

export interface PreviousAnswers {
    activity_id: Scalars['ID']
    date: Scalars['String']
    answers: Answer[]
    __typename: 'PreviousAnswers'
}

export interface Answer {
    question_id: Scalars['String']
    value: Scalars['String']
    label: (Scalars['String'] | null)
    value_type: DataPointValueType
    __typename: 'Answer'
}

export interface ActivityMetadata {
    stakeholders: (ActivityObject[] | null)
    __typename: 'ActivityMetadata'
}

export interface ApiCallPayload {
    code: Scalars['String']
    success: Scalars['Boolean']
    api_call: ApiCall
    __typename: 'ApiCallPayload'
}

export interface ApiCall {
    id: Scalars['ID']
    request: ApiCallRequest
    responses: ApiCallResponse[]
    created_at: Scalars['String']
    status: ApiCallStatus
    title: Scalars['String']
    __typename: 'ApiCall'
}

export interface ApiCallRequest {
    method: ApiCallRequestMethod
    endpoint: Scalars['String']
    headers: ApiCallHeader[]
    body: (Scalars['String'] | null)
    __typename: 'ApiCallRequest'
}

export type ApiCallRequestMethod = 'GET' | 'POST'

export interface ApiCallHeader {
    key: Scalars['String']
    value: Scalars['String']
    __typename: 'ApiCallHeader'
}

export interface ApiCallResponse {
    status: Scalars['Float']
    body: Scalars['String']
    date: Scalars['String']
    __typename: 'ApiCallResponse'
}

export type ApiCallStatus = 'InProgress' | 'Failed' | 'PermanentlyFailed' | 'Success' | 'Skipped' | 'Pending'

export interface ApiCallsPayload {
    code: Scalars['String']
    success: Scalars['Boolean']
    api_calls: ApiCall[]
    __typename: 'ApiCallsPayload'
}

export interface ActionPayload {
    code: Scalars['String']
    success: Scalars['Boolean']
    calculationId: Scalars['String']
    __typename: 'ActionPayload'
}

export interface CalculationResultsPayload {
    code: Scalars['String']
    success: Scalars['Boolean']
    result: SingleCalculationResult[]
    __typename: 'CalculationResultsPayload'
}

export interface SingleCalculationResult {
    subresult_id: Scalars['String']
    value: Scalars['String']
    value_type: (DataPointValueType | null)
    unit: (Scalars['String'] | null)
    status: (Scalars['String'] | null)
    __typename: 'SingleCalculationResult'
}

export interface ChecklistPayload {
    code: Scalars['String']
    success: Scalars['Boolean']
    checklist: (Checklist | null)
    __typename: 'ChecklistPayload'
}

export interface Checklist {
    title: Scalars['String']
    items: Scalars['String'][]
    __typename: 'Checklist'
}

export interface ClinicalNotePayload {
    code: Scalars['String']
    success: Scalars['Boolean']
    clinical_note: GeneratedClinicalNote
    __typename: 'ClinicalNotePayload'
}

export interface GeneratedClinicalNote {
    id: Scalars['ID']
    narratives: GeneratedClinicalNoteNarrative[]
    context: GeneratedClinicalNoteContextField[]
    __typename: 'GeneratedClinicalNote'
}

export interface GeneratedClinicalNoteNarrative {
    id: Scalars['ID']
    key: Scalars['String']
    title: Scalars['String']
    body: Scalars['String']
    __typename: 'GeneratedClinicalNoteNarrative'
}

export interface GeneratedClinicalNoteContextField {
    key: Scalars['String']
    value: Scalars['String']
    __typename: 'GeneratedClinicalNoteContextField'
}

export interface ElementsPayload {
    code: Scalars['String']
    success: Scalars['Boolean']
    elements: Element[]
    __typename: 'ElementsPayload'
}

export interface Element {
    id: Scalars['ID']
    parent_id: (Scalars['ID'] | null)
    name: Scalars['String']
    type: ElementType
    start_date: Scalars['String']
    end_date: (Scalars['String'] | null)
    label: (ActivityLabel | null)
    activity_type: (ActionType | null)
    status: ElementStatus
    context: PathwayContext
    stakeholders: ElementStakeholder[]
    __typename: 'Element'
}

export type ElementType = 'PATHWAY' | 'TRACK' | 'STEP' | 'ACTION' | 'TRIGGER'

export type ActionType = 'API_CALL' | 'API_CALL_GRAPHQL' | 'CALCULATION' | 'CHECKLIST' | 'CLINICAL_NOTE' | 'FORM' | 'MESSAGE' | 'PUSH_TO_EMR' | 'PLUGIN'

export type ElementStatus = 'ACTIVE' | 'DONE' | 'SCHEDULED' | 'STOPPED' | 'DISCARDED' | 'POSTPONED'

export interface ElementStakeholder {
    id: Scalars['ID']
    name: (Scalars['String'] | null)
    __typename: 'ElementStakeholder'
}

export interface EmrReportPayload {
    code: Scalars['String']
    success: Scalars['Boolean']
    report: (EmrReport | null)
    __typename: 'EmrReportPayload'
}

export interface EmrReport {
    id: Scalars['ID']
    message_html: Scalars['String']
    metadata: (EmrReportMetadataField[] | null)
    __typename: 'EmrReport'
}

export interface EmrReportMetadataField {
    id: Scalars['ID']
    label: Scalars['String']
    value: (Scalars['String'] | null)
    __typename: 'EmrReportMetadataField'
}

export interface ExtensionActivityRecordPayload {
    code: Scalars['String']
    success: Scalars['Boolean']
    record: ExtensionActivityRecord
    __typename: 'ExtensionActivityRecordPayload'
}

export interface ExtensionActivityRecord {
    id: Scalars['ID']
    activity_id: Scalars['String']
    pathway_id: Scalars['String']
    plugin_key: Scalars['String']
    plugin_action_key: Scalars['String']
    fields: ExtensionActionField[]
    date: Scalars['String']
    settings: (PluginActionSettingsProperty[] | null)
    data_points: ExtensionDataPoint[]
    __typename: 'ExtensionActivityRecord'
}

export interface ExtensionActionField {
    id: Scalars['ID']
    type: ExtensionActionFieldType
    label: Scalars['String']
    value: Scalars['String']
    __typename: 'ExtensionActionField'
}

export type ExtensionActionFieldType = 'HTML' | 'JSON' | 'STRING' | 'TEXT' | 'NUMERIC' | 'BOOLEAN' | 'DATE' | 'NUMERIC_ARRAY' | 'STRING_ARRAY'

export interface PluginActionSettingsProperty {
    key: Scalars['String']
    label: Scalars['String']
    value: Scalars['String']
    __typename: 'PluginActionSettingsProperty'
}

export interface ExtensionDataPoint {
    label: Scalars['String']
    value: Scalars['String']
    __typename: 'ExtensionDataPoint'
}

export interface FormPayload {
    code: Scalars['String']
    success: Scalars['Boolean']
    form: (Form | null)
    __typename: 'FormPayload'
}

export interface FormsPayload {
    code: Scalars['String']
    success: Scalars['Boolean']
    forms: (Form[] | null)
    __typename: 'FormsPayload'
}

export interface FormResponsePayload {
    code: Scalars['String']
    success: Scalars['Boolean']
    response: FormResponse
    __typename: 'FormResponsePayload'
}

export interface FormResponse {
    answers: Answer[]
    __typename: 'FormResponse'
}

export interface HostedSessionActivitiesPayload {
    code: Scalars['String']
    success: Scalars['Boolean']
    activities: Activity[]
    __typename: 'HostedSessionActivitiesPayload'
}

export interface HostedSessionPayload {
    code: Scalars['String']
    success: Scalars['Boolean']
    session: HostedSession
    branding: (BrandingSettings | null)
    __typename: 'HostedSessionPayload'
}

export interface HostedSession {
    id: Scalars['ID']
    pathway_id: Scalars['String']
    success_url: (Scalars['String'] | null)
    cancel_url: (Scalars['String'] | null)
    status: HostedSessionStatus
    stakeholder: HostedSessionStakeholder
    __typename: 'HostedSession'
}

export type HostedSessionStatus = 'ACTIVE' | 'EXPIRED' | 'COMPLETED'

export interface HostedSessionStakeholder {
    id: Scalars['ID']
    type: HostedSessionStakeholderType
    name: Scalars['String']
    __typename: 'HostedSessionStakeholder'
}

export type HostedSessionStakeholderType = 'PATIENT' | 'STAKEHOLDER'

export interface BrandingSettings {
    accent_color: (Scalars['String'] | null)
    logo_url: (Scalars['String'] | null)
    hosted_page_title: (Scalars['String'] | null)
    /** Auto progress to the next question when using the conversational display mode in Hosted Pages. */
    hosted_page_auto_progress: (Scalars['Boolean'] | null)
    /** Automatically save question answers locally in Hosted Pages */
    hosted_page_autosave: (Scalars['Boolean'] | null)
    custom_theme: (Scalars['String'] | null)
    __typename: 'BrandingSettings'
}

export interface MessagePayload {
    code: Scalars['String']
    success: Scalars['Boolean']
    message: (Message | null)
    __typename: 'MessagePayload'
}

export interface Message {
    id: Scalars['ID']
    subject: (Scalars['String'] | null)
    body: Scalars['String']
    format: MessageFormat
    attachments: (MessageAttachment[] | null)
    __typename: 'Message'
}

export type MessageFormat = 'SLATE' | 'HTML'

export interface MessageAttachment {
    id: Scalars['ID']
    name: Scalars['String']
    url: Scalars['String']
    type: MessageAttachmentType
    __typename: 'MessageAttachment'
}

export type MessageAttachmentType = 'FILE' | 'VIDEO' | 'LINK'

export interface OrchestrationFactsPayload {
    code: Scalars['String']
    success: Scalars['Boolean']
    pagination: (PaginationOutput | null)
    sorting: (SortingOutput | null)
    facts: OrchestrationFact[]
    __typename: 'OrchestrationFactsPayload'
}

export interface OrchestrationFact {
    date: Scalars['String']
    level: Scalars['String']
    pathway_id: Scalars['String']
    content: Scalars['String'][]
    __typename: 'OrchestrationFact'
}

export interface PathwayDataPointDefinitionsPayload {
    code: Scalars['String']
    success: Scalars['Boolean']
    data_point_definitions: DataPointDefinition[]
    __typename: 'PathwayDataPointDefinitionsPayload'
}

export interface PathwayPayload {
    code: Scalars['String']
    success: Scalars['Boolean']
    pathway: (Pathway | null)
    __typename: 'PathwayPayload'
}

export interface Pathway {
    pathway_definition_id: Scalars['String']
    release_id: Scalars['String']
    id: Scalars['ID']
    patient_id: Scalars['String']
    version: (Scalars['Float'] | null)
    title: Scalars['String']
    start_date: (Scalars['SafeDate'] | null)
    stop_date: (Scalars['SafeDate'] | null)
    complete_date: (Scalars['SafeDate'] | null)
    /**
     * @deprecated use latestActivities instead. Limited to most recent 1000 activities
     * Deprecated. Please use latestActivities.
     */
    activities: (Activity[] | null)
    /** Activities, sorted by date in descending order. For larger care flows, only the most recent 1000 activities are included. To see a complete list of activities, please use the `activity` query and appropriate filters. */
    latestActivities: Activity[]
    swimlanes: Swimlanes
    status: PathwayStatus
    status_explanation: (Scalars['String'] | null)
    tracks: Track[]
    dashboards: (PathwayDashboard | null)
    patient: User
    __typename: 'Pathway'
}

export interface Swimlanes {
    lanes: Swimlane[]
    items: SwimlaneItem[]
    links: SwimlaneLink[]
    __typename: 'Swimlanes'
}

export interface Swimlane {
    id: Scalars['ID']
    title: Scalars['String']
    __typename: 'Swimlane'
}

export interface SwimlaneItem {
    id: Scalars['ID']
    lane_id: Scalars['ID']
    row_index: Scalars['Float']
    column_index: Scalars['Float']
    title: Scalars['String']
    info: (Scalars['String'] | null)
    date: (Scalars['SafeDate'] | null)
    category: SwimlaneItemCategory
    type: SwimlaneItemType
    documentation: (FormattedText | null)
    track_id: (Scalars['ID'] | null)
    __typename: 'SwimlaneItem'
}

export type SwimlaneItemCategory = 'ACTION' | 'STEP' | 'TRACK' | 'TRACK_START' | 'TRACK_END' | 'PATHWAY_START' | 'PATHWAY_END'

export type SwimlaneItemType = 'active' | 'completed' | 'pending' | 'possible'

export interface FormattedText {
    content: TranslatedText
    format: Scalars['String']
    __typename: 'FormattedText'
}

export interface SwimlaneLink {
    id: Scalars['ID']
    origin_id: Scalars['ID']
    destination_id: Scalars['ID']
    __typename: 'SwimlaneLink'
}

export interface Track {
    /** The definition ID of the Track, can be used for adding or scheduling */
    id: Scalars['ID']
    title: Scalars['String']
    release_id: (Scalars['String'] | null)
    /** Whether the track can be triggered manually (i.e. via addTrack or scheduleTrack mutations) */
    can_trigger_manually: (Scalars['Boolean'] | null)
    __typename: 'Track'
}

export interface PathwayDashboard {
    dashboard_ids: Scalars['String'][]
    cumulio_auth_id: Scalars['String']
    cumulio_auth_token: Scalars['String']
    __typename: 'PathwayDashboard'
}

export interface User {
    id: Scalars['ID']
    tenant_id: Scalars['String']
    profile: (UserProfile | null)
    __typename: 'User'
}

export interface UserProfile {
    email: (Scalars['String'] | null)
    first_name: (Scalars['String'] | null)
    last_name: (Scalars['String'] | null)
    name: (Scalars['String'] | null)
    birth_date: (Scalars['String'] | null)
    preferred_language: (Scalars['String'] | null)
    /** Sex code as defined by ISO standard IEC_5218, 0 - NOT_KNOWN, 1 - MALE, 2 - FEMALE */
    sex: (Sex | null)
    national_registry_number: (Scalars['String'] | null)
    patient_code: (Scalars['String'] | null)
    phone: (Scalars['String'] | null)
    mobile_phone: (Scalars['String'] | null)
    address: (Address | null)
    identifier: (Identifier[] | null)
    __typename: 'UserProfile'
}

export type Sex = 'NOT_KNOWN' | 'MALE' | 'FEMALE'

export interface Address {
    street: (Scalars['String'] | null)
    city: (Scalars['String'] | null)
    zip: (Scalars['String'] | null)
    state: (Scalars['String'] | null)
    country: (Scalars['String'] | null)
    __typename: 'Address'
}

export interface Identifier {
    system: Scalars['String']
    value: Scalars['String']
    __typename: 'Identifier'
}

export interface PathwaysPayload {
    code: Scalars['String']
    success: Scalars['Boolean']
    pagination: (PaginationOutput | null)
    sorting: (SortingOutput | null)
    pathways: PathwaySummary[]
    __typename: 'PathwaysPayload'
}

export interface PathwaySummary {
    pathway_definition_id: (Scalars['String'] | null)
    id: Scalars['ID']
    title: Scalars['String']
    status: PathwayStatus
    status_explanation: (Scalars['String'] | null)
    patient_id: (Scalars['String'] | null)
    start_date: (Scalars['SafeDate'] | null)
    stop_date: (Scalars['SafeDate'] | null)
    complete_date: (Scalars['SafeDate'] | null)
    version: (Scalars['Float'] | null)
    __typename: 'PathwaySummary'
}

export interface PatientDemographicsQueryConfigurationPayload {
    is_enabled: Scalars['Boolean']
    input_box_text: (Scalars['String'] | null)
    __typename: 'PatientDemographicsQueryConfigurationPayload'
}

export interface PatientPayload {
    code: Scalars['String']
    success: Scalars['Boolean']
    patient: (User | null)
    __typename: 'PatientPayload'
}

export interface PatientsPayload {
    code: Scalars['String']
    success: Scalars['Boolean']
    pagination: (PaginationOutput | null)
    sorting: (SortingOutput | null)
    patients: User[]
    __typename: 'PatientsPayload'
}

export interface PublishedPathwayDefinitionsPayload {
    code: Scalars['String']
    success: Scalars['Boolean']
    pagination: (PaginationOutput | null)
    sorting: (SortingOutput | null)
    publishedPathwayDefinitions: PublishedPathwayDefinition[]
    __typename: 'PublishedPathwayDefinitionsPayload'
}

export interface PublishedPathwayDefinition {
    id: Scalars['ID']
    title: Scalars['String']
    version: (Scalars['Float'] | null)
    release_id: (Scalars['String'] | null)
    release_date: (Scalars['String'] | null)
    created: (AuditTrail | null)
    last_updated: (AuditTrail | null)
    /** Details about all pathway definitions */
    latest: (PathwayDefinitionDetails | null)
    /** Details about the latest pathway definition */
    all: (PathwayDefinitionDetails | null)
    total_activities: (Scalars['Float'] | null)
    active_activities: (Scalars['Float'] | null)
    failed_activities: (Scalars['Float'] | null)
    cancelled_activities: (Scalars['Float'] | null)
    total_stakeholders: (Scalars['Float'] | null)
    stakeholders_with_pending_activities_list: (Scalars['String'][] | null)
    total_patients: (Scalars['Float'] | null)
    patients_with_pending_activities: (Scalars['Float'] | null)
    /**
     * @deprecated Use data_point_definitions instead
     * Starting/baseline data point definitions for the pathway
     */
    dataPointDefinitions: DataPointDefinition[]
    /** Starting/baseline data point definitions for the pathway */
    data_point_definitions: (DataPointDefinition[] | null)
    /** Tracks for the pathway */
    track_definitions: (Track[] | null)
    __typename: 'PublishedPathwayDefinition'
}

export interface AuditTrail {
    user_id: Scalars['String']
    user_email: (Scalars['String'] | null)
    date: Scalars['SafeDate']
    __typename: 'AuditTrail'
}

export interface PathwayDefinitionDetails {
    total_careflows: (Scalars['Float'] | null)
    active_careflows: (Scalars['Float'] | null)
    stopped_careflows: (Scalars['Float'] | null)
    completed_careflows: (Scalars['Float'] | null)
    total_patients: (Scalars['Float'] | null)
    __typename: 'PathwayDefinitionDetails'
}

export interface ScheduledStepsPayload {
    code: Scalars['String']
    success: Scalars['Boolean']
    steps: Element[]
    __typename: 'ScheduledStepsPayload'
}

export interface SearchPatientsPayload {
    code: Scalars['String']
    success: Scalars['Boolean']
    patients: User[]
    __typename: 'SearchPatientsPayload'
}

export interface StakeholdersPayload {
    code: Scalars['String']
    success: Scalars['Boolean']
    stakeholders: Stakeholder[]
    __typename: 'StakeholdersPayload'
}

export interface Stakeholder {
    id: Scalars['ID']
    definition_id: Scalars['String']
    label: StakeholderLabel
    clinical_app_role: StakeholderClinicalAppRole
    release_id: Scalars['String']
    version: Scalars['Float']
    __typename: 'Stakeholder'
}

export interface StakeholderLabel {
    en: Scalars['String']
    __typename: 'StakeholderLabel'
}

export type StakeholderClinicalAppRole = 'PATIENT' | 'PHYSICIAN' | 'CAREGIVER'

export interface TracksPayload {
    code: Scalars['String']
    success: Scalars['Boolean']
    tracks: Track[]
    __typename: 'TracksPayload'
}

export interface CurrentUserPayload {
    code: Scalars['String']
    success: Scalars['Boolean']
    user: CurrentUser
    __typename: 'CurrentUserPayload'
}

export interface CurrentUser {
    id: Scalars['ID']
    tenant_id: Scalars['String']
    profile: (UserProfile | null)
    tenant: Tenant
    __typename: 'CurrentUser'
}

export interface Tenant {
    name: Scalars['String']
    logo_path: Scalars['String']
    accent_color: Scalars['String']
    hosted_page_title: Scalars['String']
    is_default: Scalars['Boolean']
    identifier_systems: (IdentifierSystem[] | null)
    __typename: 'Tenant'
}

export interface IdentifierSystem {
    name: Scalars['String']
    display_name: Scalars['String']
    system: Scalars['String']
    __typename: 'IdentifierSystem'
}

export interface WebhookCallPayload {
    code: Scalars['String']
    success: Scalars['Boolean']
    webhook_call: WebhookCall
    __typename: 'WebhookCallPayload'
}

export interface WebhookCall {
    id: Scalars['ID']
    request: WebhookCallRequest
    responses: WebhookCallResponse[]
    status: Scalars['String']
    webhook_id: Scalars['String']
    webhook_name: Scalars['String']
    event_type: Scalars['String']
    created_at: Scalars['String']
    pathway: (ApiPathwayContext | null)
    __typename: 'WebhookCall'
}

export interface WebhookCallRequest {
    endpoint: Scalars['String']
    headers: WebhookCallHeader[]
    body: Scalars['String']
    method: Scalars['String']
    __typename: 'WebhookCallRequest'
}

export interface WebhookCallHeader {
    key: Scalars['String']
    value: Scalars['String']
    __typename: 'WebhookCallHeader'
}

export interface WebhookCallResponse {
    status: Scalars['Float']
    body: Scalars['String']
    date: Scalars['String']
    __typename: 'WebhookCallResponse'
}

export interface ApiPathwayContext {
    id: Scalars['String']
    start_date: (Scalars['String'] | null)
    pathway_definition_id: Scalars['String']
    patient_id: (Scalars['String'] | null)
    __typename: 'ApiPathwayContext'
}

export interface WebhookCallsPayload {
    code: Scalars['String']
    success: Scalars['Boolean']
    webhook_calls: WebhookCall[]
    __typename: 'WebhookCallsPayload'
}

export interface OrchestrationFactsPromptPayload {
    code: Scalars['String']
    success: Scalars['Boolean']
    response: Scalars['String']
    __typename: 'OrchestrationFactsPromptPayload'
}

export interface HostedPagesLinkPayload {
    code: Scalars['String']
    success: Scalars['Boolean']
    /** The hosted pages link for the stakeholder. If there is no activity for the stakeholder in the care flow, this link will be null. */
    hosted_pages_link: (HostedPagesLink | null)
    __typename: 'HostedPagesLinkPayload'
}

export interface HostedPagesLink {
    id: Scalars['ID']
    pathway_id: Scalars['String']
    stakeholder_id: (Scalars['String'] | null)
    url: (Scalars['String'] | null)
    __typename: 'HostedPagesLink'
}

export interface Mutation {
    addIdentifierToPatient: AddIdentifierToPatientPayload
    addTrack: AddTrackPayload
    unscheduleTracks: CancelScheduledTracksPayload
    completeExtensionActivity: CompleteExtensionActivityPayload
    createPatient: CreatePatientPayload
    deletePathway: EmptyPayload
    deletePatient: EmptyPayload
    evaluateFormRules: EvaluateFormRulesPayload
    markMessageAsRead: MarkMessageAsReadPayload
    /** Retrieve patient demographics from an external system */
    requestPatientDemographics: PatientDemographicsPayload
    retryActivity: EmptyPayload
    retryAllApiCalls: EmptyPayload
    retryAllFailedApiCalls: EmptyPayload
    retryAllFailedWebhookCalls: EmptyPayload
    retryAllFailedWebhookCallsForPathwayDefinition: EmptyPayload
    retryAllWebhookCalls: EmptyPayload
    retryApiCall: RetryApiCallPayload
    retryPushToEmr: EmptyPayload
    retryWebhookCall: RetryWebhookCallPayload
    /** @deprecated We will be deactivating this endpoint in the future. */
    saveBaselineInfo: EmptyPayload
    scheduleTrack: ScheduleTrackPayload
    startHostedActivitySession: StartHostedActivitySessionPayload
    startHostedPathwaySessionFromLink: StartHostedPathwaySessionFromLinkPayload
    startHostedActivitySessionViaHostedPagesLink: StartHostedActivitySessionPayload
    /** Start a hosted pathway session for a patient uniquely identified by patient_id or patient_identifier. If neither patient_id or patient_identifier is provided, a new anonymous patient will be created. */
    startHostedPathwaySession: StartHostedPathwaySessionPayload
    startPathway: StartPathwayPayload
    startPathwayWithPatientIdentifier: StartPathwayWithPatientIdentifierPayload
    stopPathway: EmptyPayload
    stopTrack: StopTrackPayload
    submitChecklist: SubmitChecklistPayload
    submitFormResponse: SubmitFormResponsePayload
    updateBaselineInfo: EmptyPayload
    updatePatient: UpdatePatientPayload
    /** Update which patient was created after import request for logging purposes */
    updatePatientDemographicsQuery: UpdatePatientDemographicsQueryPayload
    updatePatientLanguage: UpdatePatientLanguagePayload
    __typename: 'Mutation'
}

export interface AddIdentifierToPatientPayload {
    code: Scalars['String']
    success: Scalars['Boolean']
    patient: (User | null)
    __typename: 'AddIdentifierToPatientPayload'
}

export interface AddTrackPayload {
    code: Scalars['String']
    success: Scalars['Boolean']
    __typename: 'AddTrackPayload'
}

export interface CancelScheduledTracksPayload {
    code: Scalars['String']
    success: Scalars['Boolean']
    unscheduled_ids: Scalars['String'][]
    __typename: 'CancelScheduledTracksPayload'
}

export interface CompleteExtensionActivityPayload {
    code: Scalars['String']
    success: Scalars['Boolean']
    activity: Activity
    __typename: 'CompleteExtensionActivityPayload'
}

export interface CreatePatientPayload {
    code: Scalars['String']
    success: Scalars['Boolean']
    patient: (User | null)
    __typename: 'CreatePatientPayload'
}

export interface EmptyPayload {
    code: Scalars['String']
    success: Scalars['Boolean']
    __typename: 'EmptyPayload'
}

export interface EvaluateFormRulesPayload {
    code: Scalars['String']
    success: Scalars['Boolean']
    results: QuestionRuleResult[]
    __typename: 'EvaluateFormRulesPayload'
}

export interface QuestionRuleResult {
    question_id: Scalars['String']
    rule_id: Scalars['String']
    satisfied: Scalars['Boolean']
    __typename: 'QuestionRuleResult'
}

export interface MarkMessageAsReadPayload {
    code: Scalars['String']
    success: Scalars['Boolean']
    activity: Activity
    __typename: 'MarkMessageAsReadPayload'
}

export interface PatientDemographicsPayload {
    code: Scalars['String']
    success: Scalars['Boolean']
    query_id: Scalars['String']
    status: Scalars['String']
    total: (Scalars['Float'] | null)
    entry: (UserProfile[] | null)
    __typename: 'PatientDemographicsPayload'
}

export interface RetryApiCallPayload {
    code: Scalars['String']
    success: Scalars['Boolean']
    api_call: ApiCall
    __typename: 'RetryApiCallPayload'
}

export interface RetryWebhookCallPayload {
    code: Scalars['String']
    success: Scalars['Boolean']
    webhook_call: WebhookCall
    __typename: 'RetryWebhookCallPayload'
}

export interface ScheduleTrackPayload {
    code: Scalars['String']
    success: Scalars['Boolean']
    id: Scalars['String']
    __typename: 'ScheduleTrackPayload'
}

export interface StartHostedActivitySessionPayload {
    code: Scalars['String']
    success: Scalars['Boolean']
    session_id: Scalars['String']
    session_url: Scalars['String']
    language: (Scalars['String'] | null)
    __typename: 'StartHostedActivitySessionPayload'
}

export interface StartHostedPathwaySessionFromLinkPayload {
    code: Scalars['String']
    success: Scalars['Boolean']
    session_url: Scalars['String']
    __typename: 'StartHostedPathwaySessionFromLinkPayload'
}

export interface StartHostedPathwaySessionPayload {
    code: Scalars['String']
    success: Scalars['Boolean']
    session_id: Scalars['String']
    session_url: Scalars['String']
    pathway_id: Scalars['String']
    stakeholder: HostedSessionStakeholder
    __typename: 'StartHostedPathwaySessionPayload'
}

export interface StartPathwayPayload {
    code: Scalars['String']
    success: Scalars['Boolean']
    pathway_id: Scalars['String']
    stakeholders: Stakeholder[]
    __typename: 'StartPathwayPayload'
}

export interface StartPathwayWithPatientIdentifierPayload {
    code: Scalars['String']
    success: Scalars['Boolean']
    pathway_id: Scalars['String']
    patient_id: Scalars['String']
    stakeholders: Stakeholder[]
    __typename: 'StartPathwayWithPatientIdentifierPayload'
}

export interface StopTrackPayload {
    code: Scalars['String']
    success: Scalars['Boolean']
    track: Element
    __typename: 'StopTrackPayload'
}

export interface SubmitChecklistPayload {
    code: Scalars['String']
    success: Scalars['Boolean']
    activity: Activity
    __typename: 'SubmitChecklistPayload'
}

export interface SubmitFormResponsePayload {
    code: Scalars['String']
    success: Scalars['Boolean']
    activity: Activity
    __typename: 'SubmitFormResponsePayload'
}

export interface UpdatePatientPayload {
    code: Scalars['String']
    success: Scalars['Boolean']
    patient: (User | null)
    __typename: 'UpdatePatientPayload'
}

export interface UpdatePatientDemographicsQueryPayload {
    code: Scalars['String']
    success: Scalars['Boolean']
    created_patient_entry_index: Scalars['Float']
    created_patient_id: Scalars['String']
    __typename: 'UpdatePatientDemographicsQueryPayload'
}

export interface UpdatePatientLanguagePayload {
    code: Scalars['String']
    success: Scalars['Boolean']
    user: (User | null)
    __typename: 'UpdatePatientLanguagePayload'
}

export interface Subscription {
    activityCreated: Activity
    activityUpdated: Activity
    activityCompleted: Activity
    activityExpired: Activity
    apiCallCreated: ApiCall
    apiCallUpdated: ApiCall
    elementCreated: Element
    elementCompleted: Element
    elementUpdated: Element
    sessionActivityCreated: Activity
    sessionActivityUpdated: Activity
    sessionActivityCompleted: Activity
    sessionActivityExpired: Activity
    sessionExpired: HostedSession
    sessionCompleted: HostedSession
    pathwayUpdated: Pathway
    webhookCallCreated: WebhookCall
    webhookCallUpdated: WebhookCall
    __typename: 'Subscription'
}

export interface QueryGenqlSelection{
    scheduledTracksForPathway?: (ScheduledTracksPayloadGenqlSelection & { __args: {pathway_id: Scalars['String']} })
    patientPathways?: (PatientPathwaysPayloadGenqlSelection & { __args: {patient_id: Scalars['String'], filters?: (FilterPatientPathways | null)} })
    baselineInfo?: (BaselineInfoPayloadGenqlSelection & { __args: {pathway_id: Scalars['String']} })
    myPendingActivities?: ActivitiesPayloadGenqlSelection
    myActivities?: (ActivitiesPayloadGenqlSelection & { __args: {pagination?: (PaginationParams | null), sorting?: (SortingParams | null), pathway_id: Scalars['String']} })
    pathwayActivities?: (ActivitiesPayloadGenqlSelection & { __args: {pagination?: (PaginationParams | null), sorting?: (SortingParams | null), pathway_id: Scalars['String']} })
    activities?: (ActivitiesPayloadGenqlSelection & { __args?: {pagination?: (PaginationParams | null), sorting?: (SortingParams | null), filters?: (FilterActivitiesParams | null)} })
    pathwayStepActivities?: (ActivitiesPayloadGenqlSelection & { __args: {pathway_id: Scalars['String'], step_id: Scalars['String']} })
    apiCall?: (ApiCallPayloadGenqlSelection & { __args: {id: Scalars['String']} })
    apiCalls?: (ApiCallsPayloadGenqlSelection & { __args: {pathway_id: Scalars['String']} })
    calculationAction?: (ActionPayloadGenqlSelection & { __args: {id: Scalars['String']} })
    calculationResults?: (CalculationResultsPayloadGenqlSelection & { __args: {pathway_id: Scalars['String'], activity_id: Scalars['String']} })
    checklist?: (ChecklistPayloadGenqlSelection & { __args: {id: Scalars['String']} })
    clinicalNote?: (ClinicalNotePayloadGenqlSelection & { __args: {id: Scalars['String']} })
    pathwayElements?: (ElementsPayloadGenqlSelection & { __args: {pathway_id: Scalars['String']} })
    emrReport?: (EmrReportPayloadGenqlSelection & { __args: {id: Scalars['String']} })
    extensionActivityRecord?: (ExtensionActivityRecordPayloadGenqlSelection & { __args: {id: Scalars['String']} })
    form?: (FormPayloadGenqlSelection & { __args: {id: Scalars['String']} })
    forms?: (FormsPayloadGenqlSelection & { __args: {pathway_definition_id: Scalars['String'], release_id?: (Scalars['String'] | null)} })
    formResponse?: (FormResponsePayloadGenqlSelection & { __args: {pathway_id: Scalars['String'], activity_id: Scalars['String']} })
    hostedSessionActivities?: (HostedSessionActivitiesPayloadGenqlSelection & { __args?: {only_stakeholder_activities?: (Scalars['Boolean'] | null)} })
    hostedSession?: HostedSessionPayloadGenqlSelection
    message?: (MessagePayloadGenqlSelection & { __args: {id: Scalars['String']} })
    pathwayFacts?: (OrchestrationFactsPayloadGenqlSelection & { __args: {pagination?: (PaginationParams | null), sorting?: (SortingParams | null), filters: PathwayFactsFilters} })
    pathwayDataPointDefinitions?: (PathwayDataPointDefinitionsPayloadGenqlSelection & { __args: {pathway_definition_id?: (Scalars['String'] | null), release_id: Scalars['String'], filters?: (FilterPathwayDataPointDefinitionsParams | null)} })
    pathway?: (PathwayPayloadGenqlSelection & { __args: {id: Scalars['String']} })
    myPathways?: PathwaysPayloadGenqlSelection
    pathways?: (PathwaysPayloadGenqlSelection & { __args?: {pagination?: (PaginationParams | null), sorting?: (SortingParams | null), filters?: (FilterPathways | null)} })
    patientDemographicsQueryConfiguration?: PatientDemographicsQueryConfigurationPayloadGenqlSelection
    patient?: (PatientPayloadGenqlSelection & { __args: {id: Scalars['String']} })
    patients?: (PatientsPayloadGenqlSelection & { __args?: {pagination?: (PaginationParams | null), sorting?: (SortingParams | null), filters?: (FilterPatients | null)} })
    patientByIdentifier?: (PatientPayloadGenqlSelection & { __args: {system: Scalars['String'], value: Scalars['String']} })
    publishedPathwayDefinitions?: PublishedPathwayDefinitionsPayloadGenqlSelection
    publishedPathwayDefinitionsDashboard?: (PublishedPathwayDefinitionsPayloadGenqlSelection & { __args?: {pagination?: (PaginationParams | null), sorting?: (SortingParams | null), filters?: (FilterPathwayDefinitionsParams | null)} })
    getStatusForPublishedPathwayDefinitions?: PublishedPathwayDefinitionsPayloadGenqlSelection
    scheduledSteps?: (ScheduledStepsPayloadGenqlSelection & { __args: {pathway_id: Scalars['String']} })
    searchPatientsByPatientCode?: (SearchPatientsPayloadGenqlSelection & { __args: {patient_code: Scalars['String']} })
    searchPatientsByNationalRegistryNumber?: (SearchPatientsPayloadGenqlSelection & { __args: {national_registry_number: Scalars['String']} })
    filterStakeholders?: (StakeholdersPayloadGenqlSelection & { __args?: {pathway_definition_ids?: (Scalars['String'][] | null), release_ids?: (Scalars['String'][] | null), stakeholder_definition_ids?: (Scalars['String'][] | null)} })
    stakeholdersByPathwayDefinitionIds?: (StakeholdersPayloadGenqlSelection & { __args: {pathway_definition_ids: Scalars['String'][]} })
    stakeholdersByReleaseIds?: (StakeholdersPayloadGenqlSelection & { __args: {release_ids: Scalars['String'][]} })
    stakeholdersByDefinitionIds?: (StakeholdersPayloadGenqlSelection & { __args: {stakeholder_definition_ids: Scalars['String'][]} })
    adHocTracksByPathway?: (TracksPayloadGenqlSelection & { __args: {pathway_id: Scalars['String']} })
    adHocTracksByRelease?: (TracksPayloadGenqlSelection & { __args: {release_id: Scalars['String']} })
    whoami?: CurrentUserPayloadGenqlSelection
    webhookCall?: (WebhookCallPayloadGenqlSelection & { __args: {webhook_call_id: Scalars['String']} })
    webhookCalls?: (WebhookCallsPayloadGenqlSelection & { __args: {pathway_id: Scalars['String']} })
    webhookCallsForTenant?: WebhookCallsPayloadGenqlSelection
    webhookCallsForPathwayDefinition?: (WebhookCallsPayloadGenqlSelection & { __args: {pathway_definition_id: Scalars['String']} })
    getOrchestrationFactsFromPrompt?: (OrchestrationFactsPromptPayloadGenqlSelection & { __args: {pathway_id: Scalars['String'], prompt: Scalars['String']} })
    hostedPagesLink?: (HostedPagesLinkPayloadGenqlSelection & { __args: {pathway_id: Scalars['String'], stakeholder_id: Scalars['String']} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ScheduledTracksPayloadGenqlSelection{
    code?: boolean | number
    success?: boolean | number
    scheduled_tracks?: ScheduledTrackGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PayloadGenqlSelection{
    code?: boolean | number
    success?: boolean | number
    on_ScheduledTracksPayload?: ScheduledTracksPayloadGenqlSelection
    on_PatientPathwaysPayload?: PatientPathwaysPayloadGenqlSelection
    on_BaselineInfoPayload?: BaselineInfoPayloadGenqlSelection
    on_ApiCallPayload?: ApiCallPayloadGenqlSelection
    on_ApiCallsPayload?: ApiCallsPayloadGenqlSelection
    on_ActionPayload?: ActionPayloadGenqlSelection
    on_CalculationResultsPayload?: CalculationResultsPayloadGenqlSelection
    on_ChecklistPayload?: ChecklistPayloadGenqlSelection
    on_ClinicalNotePayload?: ClinicalNotePayloadGenqlSelection
    on_ElementsPayload?: ElementsPayloadGenqlSelection
    on_EmrReportPayload?: EmrReportPayloadGenqlSelection
    on_ExtensionActivityRecordPayload?: ExtensionActivityRecordPayloadGenqlSelection
    on_FormPayload?: FormPayloadGenqlSelection
    on_FormsPayload?: FormsPayloadGenqlSelection
    on_FormResponsePayload?: FormResponsePayloadGenqlSelection
    on_HostedSessionActivitiesPayload?: HostedSessionActivitiesPayloadGenqlSelection
    on_HostedSessionPayload?: HostedSessionPayloadGenqlSelection
    on_MessagePayload?: MessagePayloadGenqlSelection
    on_PathwayDataPointDefinitionsPayload?: PathwayDataPointDefinitionsPayloadGenqlSelection
    on_PathwayPayload?: PathwayPayloadGenqlSelection
    on_PatientPayload?: PatientPayloadGenqlSelection
    on_ScheduledStepsPayload?: ScheduledStepsPayloadGenqlSelection
    on_SearchPatientsPayload?: SearchPatientsPayloadGenqlSelection
    on_StakeholdersPayload?: StakeholdersPayloadGenqlSelection
    on_TracksPayload?: TracksPayloadGenqlSelection
    on_CurrentUserPayload?: CurrentUserPayloadGenqlSelection
    on_WebhookCallPayload?: WebhookCallPayloadGenqlSelection
    on_WebhookCallsPayload?: WebhookCallsPayloadGenqlSelection
    on_OrchestrationFactsPromptPayload?: OrchestrationFactsPromptPayloadGenqlSelection
    on_HostedPagesLinkPayload?: HostedPagesLinkPayloadGenqlSelection
    on_AddIdentifierToPatientPayload?: AddIdentifierToPatientPayloadGenqlSelection
    on_AddTrackPayload?: AddTrackPayloadGenqlSelection
    on_CancelScheduledTracksPayload?: CancelScheduledTracksPayloadGenqlSelection
    on_CompleteExtensionActivityPayload?: CompleteExtensionActivityPayloadGenqlSelection
    on_CreatePatientPayload?: CreatePatientPayloadGenqlSelection
    on_EmptyPayload?: EmptyPayloadGenqlSelection
    on_EvaluateFormRulesPayload?: EvaluateFormRulesPayloadGenqlSelection
    on_MarkMessageAsReadPayload?: MarkMessageAsReadPayloadGenqlSelection
    on_PatientDemographicsPayload?: PatientDemographicsPayloadGenqlSelection
    on_RetryApiCallPayload?: RetryApiCallPayloadGenqlSelection
    on_RetryWebhookCallPayload?: RetryWebhookCallPayloadGenqlSelection
    on_ScheduleTrackPayload?: ScheduleTrackPayloadGenqlSelection
    on_StartHostedActivitySessionPayload?: StartHostedActivitySessionPayloadGenqlSelection
    on_StartHostedPathwaySessionFromLinkPayload?: StartHostedPathwaySessionFromLinkPayloadGenqlSelection
    on_StartHostedPathwaySessionPayload?: StartHostedPathwaySessionPayloadGenqlSelection
    on_StartPathwayPayload?: StartPathwayPayloadGenqlSelection
    on_StartPathwayWithPatientIdentifierPayload?: StartPathwayWithPatientIdentifierPayloadGenqlSelection
    on_StopTrackPayload?: StopTrackPayloadGenqlSelection
    on_SubmitChecklistPayload?: SubmitChecklistPayloadGenqlSelection
    on_SubmitFormResponsePayload?: SubmitFormResponsePayloadGenqlSelection
    on_UpdatePatientPayload?: UpdatePatientPayloadGenqlSelection
    on_UpdatePatientDemographicsQueryPayload?: UpdatePatientDemographicsQueryPayloadGenqlSelection
    on_UpdatePatientLanguagePayload?: UpdatePatientLanguagePayloadGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ScheduledTrackGenqlSelection{
    id?: boolean | number
    pathway_id?: boolean | number
    track_definition_id?: boolean | number
    release_id?: boolean | number
    tenant_id?: boolean | number
    created_by_user_id?: boolean | number
    created_date?: boolean | number
    modified_date?: boolean | number
    scheduled_date?: boolean | number
    status?: boolean | number
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PatientPathwaysPayloadGenqlSelection{
    code?: boolean | number
    success?: boolean | number
    patientPathways?: PatientPathwayGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PatientPathwayGenqlSelection{
    id?: boolean | number
    title?: boolean | number
    status?: boolean | number
    status_explanation?: boolean | number
    pathway_definition_id?: boolean | number
    complete_date?: boolean | number
    stop_date?: boolean | number
    release_id?: boolean | number
    version?: boolean | number
    total_activities?: boolean | number
    active_activities?: boolean | number
    failed_activities?: boolean | number
    latest_activity_date?: boolean | number
    latest_activity_title?: boolean | number
    latest_activity_type?: boolean | number
    baseline_info?: BaselineDataPointGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BaselineDataPointGenqlSelection{
    definition?: DataPointDefinitionGenqlSelection
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DataPointDefinitionGenqlSelection{
    id?: boolean | number
    key?: boolean | number
    title?: boolean | number
    category?: boolean | number
    valueType?: boolean | number
    source_definition_id?: boolean | number
    possibleValues?: DataPointPossibleValueGenqlSelection
    range?: RangeGenqlSelection
    unit?: boolean | number
    optional?: boolean | number
    /** Personally identifiable information */
    pii?: boolean | number
    /** Additional context on data point */
    metadata?: DataPointMetaDataItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DataPointPossibleValueGenqlSelection{
    value?: boolean | number
    label?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RangeGenqlSelection{
    min?: boolean | number
    max?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DataPointMetaDataItemGenqlSelection{
    value?: boolean | number
    key?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FilterPatientPathways {status: StringArrayFilter}

export interface StringArrayFilter {in?: (Scalars['String'][] | null)}

export interface BaselineInfoPayloadGenqlSelection{
    code?: boolean | number
    success?: boolean | number
    baselineDataPoints?: BaselineDataPointGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ActivitiesPayloadGenqlSelection{
    code?: boolean | number
    success?: boolean | number
    pagination?: PaginationOutputGenqlSelection
    sorting?: SortingOutputGenqlSelection
    activities?: ActivityGenqlSelection
    metadata?: ActivityMetadataGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PaginationAndSortingPayloadGenqlSelection{
    code?: boolean | number
    success?: boolean | number
    pagination?: PaginationOutputGenqlSelection
    sorting?: SortingOutputGenqlSelection
    on_ActivitiesPayload?: ActivitiesPayloadGenqlSelection
    on_OrchestrationFactsPayload?: OrchestrationFactsPayloadGenqlSelection
    on_PathwaysPayload?: PathwaysPayloadGenqlSelection
    on_PatientsPayload?: PatientsPayloadGenqlSelection
    on_PublishedPathwayDefinitionsPayload?: PublishedPathwayDefinitionsPayloadGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PaginationOutputGenqlSelection{
    offset?: boolean | number
    count?: boolean | number
    total_count?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SortingOutputGenqlSelection{
    field?: boolean | number
    direction?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ActivityGenqlSelection{
    id?: boolean | number
    stream_id?: boolean | number
    date?: boolean | number
    subject?: ActivitySubjectGenqlSelection
    action?: boolean | number
    object?: ActivityObjectGenqlSelection
    indirect_object?: ActivityObjectGenqlSelection
    status?: boolean | number
    resolution?: boolean | number
    reference_id?: boolean | number
    container_name?: boolean | number
    track?: ActivityTrackGenqlSelection
    label?: ActivityLabelGenqlSelection
    sub_activities?: SubActivityGenqlSelection
    isUserActivity?: boolean | number
    public?: boolean | number
    context?: PathwayContextGenqlSelection
    session_id?: boolean | number
    stakeholders?: ActivityObjectGenqlSelection
    /** Url for icon, only used by extensions custom actions */
    icon_url?: boolean | number
    /** Form display mode can either be conversational (1 question at a time) or regular (all questions at once). Only used in hosted pages for now. */
    form_display_mode?: boolean | number
    form?: FormGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ActivitySubjectGenqlSelection{
    id?: boolean | number
    type?: boolean | number
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ActivityObjectGenqlSelection{
    type?: boolean | number
    id?: boolean | number
    name?: boolean | number
    email?: boolean | number
    preferred_language?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ActivityTrackGenqlSelection{
    id?: boolean | number
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ActivityLabelGenqlSelection{
    id?: boolean | number
    color?: boolean | number
    text?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SubActivityGenqlSelection{
    id?: boolean | number
    date?: boolean | number
    subject?: ActivitySubjectGenqlSelection
    action?: boolean | number
    error?: boolean | number
    error_category?: boolean | number
    object?: ActivityObjectGenqlSelection
    text?: TranslatedTextGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TranslatedTextGenqlSelection{
    en?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PathwayContextGenqlSelection{
    instance_id?: boolean | number
    pathway_id?: boolean | number
    track_id?: boolean | number
    step_id?: boolean | number
    action_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FormGenqlSelection{
    release_id?: boolean | number
    key?: boolean | number
    definition_id?: boolean | number
    id?: boolean | number
    title?: boolean | number
    trademark?: boolean | number
    metadata?: boolean | number
    questions?: QuestionGenqlSelection
    previous_answers?: (PreviousAnswersGenqlSelection & { __args: {pathway_id: Scalars['String']} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QuestionGenqlSelection{
    key?: boolean | number
    id?: boolean | number
    definition_id?: boolean | number
    title?: boolean | number
    dataPointValueType?: boolean | number
    options?: OptionGenqlSelection
    questionType?: boolean | number
    userQuestionType?: boolean | number
    questionConfig?: QuestionConfigGenqlSelection
    rule?: RuleGenqlSelection
    metadata?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface OptionGenqlSelection{
    id?: boolean | number
    value?: boolean | number
    value_string?: boolean | number
    label?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QuestionConfigGenqlSelection{
    recode_enabled?: boolean | number
    mandatory?: boolean | number
    use_select?: boolean | number
    slider?: SliderConfigGenqlSelection
    phone?: PhoneConfigGenqlSelection
    number?: NumberConfigGenqlSelection
    multiple_select?: MultipleSelectConfigGenqlSelection
    date?: DateConfigGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SliderConfigGenqlSelection{
    min?: boolean | number
    max?: boolean | number
    step_value?: boolean | number
    min_label?: boolean | number
    max_label?: boolean | number
    is_value_tooltip_on?: boolean | number
    display_marks?: boolean | number
    show_min_max_values?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PhoneConfigGenqlSelection{
    default_country?: boolean | number
    available_countries?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface NumberConfigGenqlSelection{
    range?: RangeConfigGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RangeConfigGenqlSelection{
    min?: boolean | number
    max?: boolean | number
    enabled?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MultipleSelectConfigGenqlSelection{
    range?: ChoiceRangeConfigGenqlSelection
    exclusive_option?: ExclusiveOptionConfigGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ChoiceRangeConfigGenqlSelection{
    enabled?: boolean | number
    min?: boolean | number
    max?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ExclusiveOptionConfigGenqlSelection{
    enabled?: boolean | number
    option_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DateConfigGenqlSelection{
    allowed_dates?: boolean | number
    include_date_of_response?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RuleGenqlSelection{
    id?: boolean | number
    definition_id?: boolean | number
    boolean_operator?: boolean | number
    conditions?: ConditionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ConditionGenqlSelection{
    id?: boolean | number
    reference?: boolean | number
    reference_key?: boolean | number
    operator?: boolean | number
    operand?: OperandGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface OperandGenqlSelection{
    type?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PreviousAnswersGenqlSelection{
    activity_id?: boolean | number
    date?: boolean | number
    answers?: AnswerGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AnswerGenqlSelection{
    question_id?: boolean | number
    value?: boolean | number
    label?: boolean | number
    value_type?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ActivityMetadataGenqlSelection{
    stakeholders?: ActivityObjectGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PaginationParams {offset: Scalars['Int'],count: Scalars['Int']}

export interface SortingParams {field: Scalars['String'],direction: Scalars['String']}

export interface FilterActivitiesParams {action?: (StringArrayFilter | null),activity_status?: (StringArrayFilter | null),pathway_definition_id?: (StringArrayFilter | null),patient_id?: (TextFilterEquals | null),activity_type?: (StringArrayFilter | null),stakeholders?: (StringArrayFilter | null),pathway_status?: (StringArrayFilter | null)}

export interface TextFilterEquals {eq?: (Scalars['String'] | null)}

export interface ApiCallPayloadGenqlSelection{
    code?: boolean | number
    success?: boolean | number
    api_call?: ApiCallGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ApiCallGenqlSelection{
    id?: boolean | number
    request?: ApiCallRequestGenqlSelection
    responses?: ApiCallResponseGenqlSelection
    created_at?: boolean | number
    status?: boolean | number
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ApiCallRequestGenqlSelection{
    method?: boolean | number
    endpoint?: boolean | number
    headers?: ApiCallHeaderGenqlSelection
    body?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ApiCallHeaderGenqlSelection{
    key?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ApiCallResponseGenqlSelection{
    status?: boolean | number
    body?: boolean | number
    date?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ApiCallsPayloadGenqlSelection{
    code?: boolean | number
    success?: boolean | number
    api_calls?: ApiCallGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ActionPayloadGenqlSelection{
    code?: boolean | number
    success?: boolean | number
    calculationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CalculationResultsPayloadGenqlSelection{
    code?: boolean | number
    success?: boolean | number
    result?: SingleCalculationResultGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SingleCalculationResultGenqlSelection{
    subresult_id?: boolean | number
    value?: boolean | number
    value_type?: boolean | number
    unit?: boolean | number
    status?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ChecklistPayloadGenqlSelection{
    code?: boolean | number
    success?: boolean | number
    checklist?: ChecklistGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ChecklistGenqlSelection{
    title?: boolean | number
    items?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ClinicalNotePayloadGenqlSelection{
    code?: boolean | number
    success?: boolean | number
    clinical_note?: GeneratedClinicalNoteGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GeneratedClinicalNoteGenqlSelection{
    id?: boolean | number
    narratives?: GeneratedClinicalNoteNarrativeGenqlSelection
    context?: GeneratedClinicalNoteContextFieldGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GeneratedClinicalNoteNarrativeGenqlSelection{
    id?: boolean | number
    key?: boolean | number
    title?: boolean | number
    body?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GeneratedClinicalNoteContextFieldGenqlSelection{
    key?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ElementsPayloadGenqlSelection{
    code?: boolean | number
    success?: boolean | number
    elements?: ElementGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ElementGenqlSelection{
    id?: boolean | number
    parent_id?: boolean | number
    name?: boolean | number
    type?: boolean | number
    start_date?: boolean | number
    end_date?: boolean | number
    label?: ActivityLabelGenqlSelection
    activity_type?: boolean | number
    status?: boolean | number
    context?: PathwayContextGenqlSelection
    stakeholders?: ElementStakeholderGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ElementStakeholderGenqlSelection{
    id?: boolean | number
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EmrReportPayloadGenqlSelection{
    code?: boolean | number
    success?: boolean | number
    report?: EmrReportGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EmrReportGenqlSelection{
    id?: boolean | number
    message_html?: boolean | number
    metadata?: EmrReportMetadataFieldGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EmrReportMetadataFieldGenqlSelection{
    id?: boolean | number
    label?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ExtensionActivityRecordPayloadGenqlSelection{
    code?: boolean | number
    success?: boolean | number
    record?: ExtensionActivityRecordGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ExtensionActivityRecordGenqlSelection{
    id?: boolean | number
    activity_id?: boolean | number
    pathway_id?: boolean | number
    plugin_key?: boolean | number
    plugin_action_key?: boolean | number
    fields?: ExtensionActionFieldGenqlSelection
    date?: boolean | number
    settings?: PluginActionSettingsPropertyGenqlSelection
    data_points?: ExtensionDataPointGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ExtensionActionFieldGenqlSelection{
    id?: boolean | number
    type?: boolean | number
    label?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PluginActionSettingsPropertyGenqlSelection{
    key?: boolean | number
    label?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ExtensionDataPointGenqlSelection{
    label?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FormPayloadGenqlSelection{
    code?: boolean | number
    success?: boolean | number
    form?: FormGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FormsPayloadGenqlSelection{
    code?: boolean | number
    success?: boolean | number
    forms?: FormGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FormResponsePayloadGenqlSelection{
    code?: boolean | number
    success?: boolean | number
    response?: FormResponseGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FormResponseGenqlSelection{
    answers?: AnswerGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface HostedSessionActivitiesPayloadGenqlSelection{
    code?: boolean | number
    success?: boolean | number
    activities?: ActivityGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface HostedSessionPayloadGenqlSelection{
    code?: boolean | number
    success?: boolean | number
    session?: HostedSessionGenqlSelection
    branding?: BrandingSettingsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface HostedSessionGenqlSelection{
    id?: boolean | number
    pathway_id?: boolean | number
    success_url?: boolean | number
    cancel_url?: boolean | number
    status?: boolean | number
    stakeholder?: HostedSessionStakeholderGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface HostedSessionStakeholderGenqlSelection{
    id?: boolean | number
    type?: boolean | number
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BrandingSettingsGenqlSelection{
    accent_color?: boolean | number
    logo_url?: boolean | number
    hosted_page_title?: boolean | number
    /** Auto progress to the next question when using the conversational display mode in Hosted Pages. */
    hosted_page_auto_progress?: boolean | number
    /** Automatically save question answers locally in Hosted Pages */
    hosted_page_autosave?: boolean | number
    custom_theme?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MessagePayloadGenqlSelection{
    code?: boolean | number
    success?: boolean | number
    message?: MessageGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MessageGenqlSelection{
    id?: boolean | number
    subject?: boolean | number
    body?: boolean | number
    format?: boolean | number
    attachments?: MessageAttachmentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MessageAttachmentGenqlSelection{
    id?: boolean | number
    name?: boolean | number
    url?: boolean | number
    type?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface OrchestrationFactsPayloadGenqlSelection{
    code?: boolean | number
    success?: boolean | number
    pagination?: PaginationOutputGenqlSelection
    sorting?: SortingOutputGenqlSelection
    facts?: OrchestrationFactGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface OrchestrationFactGenqlSelection{
    date?: boolean | number
    level?: boolean | number
    pathway_id?: boolean | number
    content?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PathwayFactsFilters {pathway_id: Scalars['String'],date?: (DateFilter | null),keyword?: (Scalars['String'] | null)}

export interface DateFilter {gte?: (Scalars['String'] | null),lte?: (Scalars['String'] | null)}

export interface PathwayDataPointDefinitionsPayloadGenqlSelection{
    code?: boolean | number
    success?: boolean | number
    data_point_definitions?: DataPointDefinitionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FilterPathwayDataPointDefinitionsParams {category?: (StringArrayFilter | null),value_type?: (StringArrayFilter | null)}

export interface PathwayPayloadGenqlSelection{
    code?: boolean | number
    success?: boolean | number
    pathway?: PathwayGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PathwayGenqlSelection{
    pathway_definition_id?: boolean | number
    release_id?: boolean | number
    id?: boolean | number
    patient_id?: boolean | number
    version?: boolean | number
    title?: boolean | number
    start_date?: boolean | number
    stop_date?: boolean | number
    complete_date?: boolean | number
    /**
     * @deprecated use latestActivities instead. Limited to most recent 1000 activities
     * Deprecated. Please use latestActivities.
     */
    activities?: ActivityGenqlSelection
    /** Activities, sorted by date in descending order. For larger care flows, only the most recent 1000 activities are included. To see a complete list of activities, please use the `activity` query and appropriate filters. */
    latestActivities?: ActivityGenqlSelection
    swimlanes?: SwimlanesGenqlSelection
    status?: boolean | number
    status_explanation?: boolean | number
    tracks?: TrackGenqlSelection
    dashboards?: PathwayDashboardGenqlSelection
    patient?: UserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SwimlanesGenqlSelection{
    lanes?: SwimlaneGenqlSelection
    items?: SwimlaneItemGenqlSelection
    links?: SwimlaneLinkGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SwimlaneGenqlSelection{
    id?: boolean | number
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SwimlaneItemGenqlSelection{
    id?: boolean | number
    lane_id?: boolean | number
    row_index?: boolean | number
    column_index?: boolean | number
    title?: boolean | number
    info?: boolean | number
    date?: boolean | number
    category?: boolean | number
    type?: boolean | number
    documentation?: FormattedTextGenqlSelection
    track_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FormattedTextGenqlSelection{
    content?: TranslatedTextGenqlSelection
    format?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SwimlaneLinkGenqlSelection{
    id?: boolean | number
    origin_id?: boolean | number
    destination_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TrackGenqlSelection{
    /** The definition ID of the Track, can be used for adding or scheduling */
    id?: boolean | number
    title?: boolean | number
    release_id?: boolean | number
    /** Whether the track can be triggered manually (i.e. via addTrack or scheduleTrack mutations) */
    can_trigger_manually?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PathwayDashboardGenqlSelection{
    dashboard_ids?: boolean | number
    cumulio_auth_id?: boolean | number
    cumulio_auth_token?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserGenqlSelection{
    id?: boolean | number
    tenant_id?: boolean | number
    profile?: UserProfileGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserProfileGenqlSelection{
    email?: boolean | number
    first_name?: boolean | number
    last_name?: boolean | number
    name?: boolean | number
    birth_date?: boolean | number
    preferred_language?: boolean | number
    /** Sex code as defined by ISO standard IEC_5218, 0 - NOT_KNOWN, 1 - MALE, 2 - FEMALE */
    sex?: boolean | number
    national_registry_number?: boolean | number
    patient_code?: boolean | number
    phone?: boolean | number
    mobile_phone?: boolean | number
    address?: AddressGenqlSelection
    identifier?: IdentifierGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AddressGenqlSelection{
    street?: boolean | number
    city?: boolean | number
    zip?: boolean | number
    state?: boolean | number
    country?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface IdentifierGenqlSelection{
    system?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PathwaysPayloadGenqlSelection{
    code?: boolean | number
    success?: boolean | number
    pagination?: PaginationOutputGenqlSelection
    sorting?: SortingOutputGenqlSelection
    pathways?: PathwaySummaryGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PathwaySummaryGenqlSelection{
    pathway_definition_id?: boolean | number
    id?: boolean | number
    title?: boolean | number
    status?: boolean | number
    status_explanation?: boolean | number
    patient_id?: boolean | number
    start_date?: boolean | number
    stop_date?: boolean | number
    complete_date?: boolean | number
    version?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FilterPathways {pathway_definition_id?: (IdFilter | null),status?: (StringArrayFilter | null),patient_id?: (StringArrayFilter | null),version?: (NumberArrayFilter | null),release_id?: (StringArrayFilter | null),start_date?: (DateFilter | null)}

export interface IdFilter {eq?: (Scalars['String'] | null)}

export interface NumberArrayFilter {in?: (Scalars['Float'][] | null)}

export interface PatientDemographicsQueryConfigurationPayloadGenqlSelection{
    is_enabled?: boolean | number
    input_box_text?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PatientPayloadGenqlSelection{
    code?: boolean | number
    success?: boolean | number
    patient?: UserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PatientsPayloadGenqlSelection{
    code?: boolean | number
    success?: boolean | number
    pagination?: PaginationOutputGenqlSelection
    sorting?: SortingOutputGenqlSelection
    patients?: UserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FilterPatients {profile_id?: (StringArrayFilter | null),patient_code?: (TextFilterEquals | null),national_registry_number?: (TextFilterEquals | null),name?: (TextFilter | null),search?: (TextFilterContains | null)}

export interface TextFilter {eq?: (Scalars['String'] | null),contains?: (Scalars['String'] | null)}

export interface TextFilterContains {contains?: (Scalars['String'] | null)}

export interface PublishedPathwayDefinitionsPayloadGenqlSelection{
    code?: boolean | number
    success?: boolean | number
    pagination?: PaginationOutputGenqlSelection
    sorting?: SortingOutputGenqlSelection
    publishedPathwayDefinitions?: PublishedPathwayDefinitionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PublishedPathwayDefinitionGenqlSelection{
    id?: boolean | number
    title?: boolean | number
    version?: boolean | number
    release_id?: boolean | number
    release_date?: boolean | number
    created?: AuditTrailGenqlSelection
    last_updated?: AuditTrailGenqlSelection
    /** Details about all pathway definitions */
    latest?: PathwayDefinitionDetailsGenqlSelection
    /** Details about the latest pathway definition */
    all?: PathwayDefinitionDetailsGenqlSelection
    total_activities?: boolean | number
    active_activities?: boolean | number
    failed_activities?: boolean | number
    cancelled_activities?: boolean | number
    total_stakeholders?: boolean | number
    stakeholders_with_pending_activities_list?: boolean | number
    total_patients?: boolean | number
    patients_with_pending_activities?: boolean | number
    /**
     * @deprecated Use data_point_definitions instead
     * Starting/baseline data point definitions for the pathway
     */
    dataPointDefinitions?: DataPointDefinitionGenqlSelection
    /** Starting/baseline data point definitions for the pathway */
    data_point_definitions?: DataPointDefinitionGenqlSelection
    /** Tracks for the pathway */
    track_definitions?: TrackGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AuditTrailGenqlSelection{
    user_id?: boolean | number
    user_email?: boolean | number
    date?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PathwayDefinitionDetailsGenqlSelection{
    total_careflows?: boolean | number
    active_careflows?: boolean | number
    stopped_careflows?: boolean | number
    completed_careflows?: boolean | number
    total_patients?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FilterPathwayDefinitionsParams {search?: (TextFilterContains | null)}

export interface ScheduledStepsPayloadGenqlSelection{
    code?: boolean | number
    success?: boolean | number
    steps?: ElementGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SearchPatientsPayloadGenqlSelection{
    code?: boolean | number
    success?: boolean | number
    patients?: UserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface StakeholdersPayloadGenqlSelection{
    code?: boolean | number
    success?: boolean | number
    stakeholders?: StakeholderGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface StakeholderGenqlSelection{
    id?: boolean | number
    definition_id?: boolean | number
    label?: StakeholderLabelGenqlSelection
    clinical_app_role?: boolean | number
    release_id?: boolean | number
    version?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface StakeholderLabelGenqlSelection{
    en?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TracksPayloadGenqlSelection{
    code?: boolean | number
    success?: boolean | number
    tracks?: TrackGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CurrentUserPayloadGenqlSelection{
    code?: boolean | number
    success?: boolean | number
    user?: CurrentUserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CurrentUserGenqlSelection{
    id?: boolean | number
    tenant_id?: boolean | number
    profile?: UserProfileGenqlSelection
    tenant?: TenantGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TenantGenqlSelection{
    name?: boolean | number
    logo_path?: boolean | number
    accent_color?: boolean | number
    hosted_page_title?: boolean | number
    is_default?: boolean | number
    identifier_systems?: IdentifierSystemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface IdentifierSystemGenqlSelection{
    name?: boolean | number
    display_name?: boolean | number
    system?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface WebhookCallPayloadGenqlSelection{
    code?: boolean | number
    success?: boolean | number
    webhook_call?: WebhookCallGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface WebhookCallGenqlSelection{
    id?: boolean | number
    request?: WebhookCallRequestGenqlSelection
    responses?: WebhookCallResponseGenqlSelection
    status?: boolean | number
    webhook_id?: boolean | number
    webhook_name?: boolean | number
    event_type?: boolean | number
    created_at?: boolean | number
    pathway?: ApiPathwayContextGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface WebhookCallRequestGenqlSelection{
    endpoint?: boolean | number
    headers?: WebhookCallHeaderGenqlSelection
    body?: boolean | number
    method?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface WebhookCallHeaderGenqlSelection{
    key?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface WebhookCallResponseGenqlSelection{
    status?: boolean | number
    body?: boolean | number
    date?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ApiPathwayContextGenqlSelection{
    id?: boolean | number
    start_date?: boolean | number
    pathway_definition_id?: boolean | number
    patient_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface WebhookCallsPayloadGenqlSelection{
    code?: boolean | number
    success?: boolean | number
    webhook_calls?: WebhookCallGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface OrchestrationFactsPromptPayloadGenqlSelection{
    code?: boolean | number
    success?: boolean | number
    response?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface HostedPagesLinkPayloadGenqlSelection{
    code?: boolean | number
    success?: boolean | number
    /** The hosted pages link for the stakeholder. If there is no activity for the stakeholder in the care flow, this link will be null. */
    hosted_pages_link?: HostedPagesLinkGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface HostedPagesLinkGenqlSelection{
    id?: boolean | number
    pathway_id?: boolean | number
    stakeholder_id?: boolean | number
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MutationGenqlSelection{
    addIdentifierToPatient?: (AddIdentifierToPatientPayloadGenqlSelection & { __args: {input: AddIdentifierToPatientInput} })
    addTrack?: (AddTrackPayloadGenqlSelection & { __args: {input: AddTrackInput} })
    unscheduleTracks?: (CancelScheduledTracksPayloadGenqlSelection & { __args: {input: CancelScheduledTracksInput} })
    completeExtensionActivity?: (CompleteExtensionActivityPayloadGenqlSelection & { __args: {input: CompleteExtensionActivityInput} })
    createPatient?: (CreatePatientPayloadGenqlSelection & { __args?: {mycare?: (MyCareOptions | null), input?: (CreatePatientInput | null)} })
    deletePathway?: (EmptyPayloadGenqlSelection & { __args: {input: DeletePathwayInput} })
    deletePatient?: (EmptyPayloadGenqlSelection & { __args: {input: DeletePatientInput} })
    evaluateFormRules?: (EvaluateFormRulesPayloadGenqlSelection & { __args: {input: EvaluateFormRulesInput} })
    markMessageAsRead?: (MarkMessageAsReadPayloadGenqlSelection & { __args: {input: MarkMessageAsReadInput} })
    /** Retrieve patient demographics from an external system */
    requestPatientDemographics?: (PatientDemographicsPayloadGenqlSelection & { __args: {input: PatientDemographicsInput} })
    retryActivity?: (EmptyPayloadGenqlSelection & { __args: {input: RetryActivityInput} })
    retryAllApiCalls?: (EmptyPayloadGenqlSelection & { __args: {input: RetryAllApiCallsInput} })
    retryAllFailedApiCalls?: (EmptyPayloadGenqlSelection & { __args: {input: RetryAllFailedApiCallsInput} })
    retryAllFailedWebhookCalls?: (EmptyPayloadGenqlSelection & { __args: {input: RetryAllFailedWebhookCallsInput} })
    retryAllFailedWebhookCallsForPathwayDefinition?: (EmptyPayloadGenqlSelection & { __args: {input: RetryAllFailedWebhookCallsForPathwayDefinitionInput} })
    retryAllWebhookCalls?: (EmptyPayloadGenqlSelection & { __args: {input: RetryAllWebhookCallsInput} })
    retryApiCall?: (RetryApiCallPayloadGenqlSelection & { __args: {input: RetryApiCallInput} })
    retryPushToEmr?: (EmptyPayloadGenqlSelection & { __args: {input: RetryPushToEmrInput} })
    retryWebhookCall?: (RetryWebhookCallPayloadGenqlSelection & { __args: {input: RetryWebhookCallInput} })
    /** @deprecated We will be deactivating this endpoint in the future. */
    saveBaselineInfo?: (EmptyPayloadGenqlSelection & { __args: {input: SaveBaselineInfoInput} })
    scheduleTrack?: (ScheduleTrackPayloadGenqlSelection & { __args: {input: ScheduleTrackInput} })
    startHostedActivitySession?: (StartHostedActivitySessionPayloadGenqlSelection & { __args: {input: StartHostedActivitySessionInput} })
    startHostedPathwaySessionFromLink?: (StartHostedPathwaySessionFromLinkPayloadGenqlSelection & { __args: {input: StartHostedPathwaySessionFromLinkInput} })
    startHostedActivitySessionViaHostedPagesLink?: (StartHostedActivitySessionPayloadGenqlSelection & { __args: {input: StartHostedActivitySessionViaHostedPagesLinkInput} })
    /** Start a hosted pathway session for a patient uniquely identified by patient_id or patient_identifier. If neither patient_id or patient_identifier is provided, a new anonymous patient will be created. */
    startHostedPathwaySession?: (StartHostedPathwaySessionPayloadGenqlSelection & { __args: {input: StartHostedPathwaySessionInput} })
    startPathway?: (StartPathwayPayloadGenqlSelection & { __args: {input: StartPathwayInput} })
    startPathwayWithPatientIdentifier?: (StartPathwayWithPatientIdentifierPayloadGenqlSelection & { __args: {input: StartPathwayWithPatientIdentifierInput} })
    stopPathway?: (EmptyPayloadGenqlSelection & { __args: {input: StopPathwayInput} })
    stopTrack?: (StopTrackPayloadGenqlSelection & { __args: {input: StopTrackInput} })
    submitChecklist?: (SubmitChecklistPayloadGenqlSelection & { __args: {input: SubmitChecklistInput} })
    submitFormResponse?: (SubmitFormResponsePayloadGenqlSelection & { __args: {input: SubmitFormResponseInput} })
    updateBaselineInfo?: (EmptyPayloadGenqlSelection & { __args: {input: UpdateBaselineInfoInput} })
    updatePatient?: (UpdatePatientPayloadGenqlSelection & { __args: {input: UpdatePatientInput} })
    /** Update which patient was created after import request for logging purposes */
    updatePatientDemographicsQuery?: (UpdatePatientDemographicsQueryPayloadGenqlSelection & { __args: {input: UpdatePatientDemographicsQueryInput} })
    updatePatientLanguage?: (UpdatePatientLanguagePayloadGenqlSelection & { __args: {input: UpdatePatientLanguageInput} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AddIdentifierToPatientPayloadGenqlSelection{
    code?: boolean | number
    success?: boolean | number
    patient?: UserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AddIdentifierToPatientInput {patient_id: Scalars['String'],identifier: IdentifierInput}

export interface IdentifierInput {system: Scalars['String'],value: Scalars['String']}

export interface AddTrackPayloadGenqlSelection{
    code?: boolean | number
    success?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AddTrackInput {pathway_id: Scalars['String'],track_id: Scalars['String']}

export interface CancelScheduledTracksPayloadGenqlSelection{
    code?: boolean | number
    success?: boolean | number
    unscheduled_ids?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CancelScheduledTracksInput {ids: Scalars['String'][]}

export interface CompleteExtensionActivityPayloadGenqlSelection{
    code?: boolean | number
    success?: boolean | number
    activity?: ActivityGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CompleteExtensionActivityInput {activity_id: Scalars['String'],data_points: ExtensionDataPointInput[]}

export interface ExtensionDataPointInput {key: Scalars['String'],value: Scalars['String']}

export interface CreatePatientPayloadGenqlSelection{
    code?: boolean | number
    success?: boolean | number
    patient?: UserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MyCareOptions {password?: (Scalars['String'] | null)}

export interface CreatePatientInput {email?: (Scalars['String'] | null),first_name?: (Scalars['String'] | null),last_name?: (Scalars['String'] | null),birth_date?: (Scalars['String'] | null),
/** ISO 639-1 shortcode */
preferred_language?: (Scalars['String'] | null),
/** Sex code as defined by ISO standard IEC_5218, 0 - NOT_KNOWN, 1 - MALE, 2 - FEMALE */
sex?: (Sex | null),national_registry_number?: (Scalars['String'] | null),patient_code?: (Scalars['String'] | null),
/** Must be in valid E164 telephone number format */
phone?: (Scalars['String'] | null),
/** Must be in valid E164 telephone number format */
mobile_phone?: (Scalars['String'] | null),address?: (AddressInput | null),identifier?: (IdentifierInput[] | null)}

export interface AddressInput {street?: (Scalars['String'] | null),city?: (Scalars['String'] | null),zip?: (Scalars['String'] | null),state?: (Scalars['String'] | null),country?: (Scalars['String'] | null)}

export interface EmptyPayloadGenqlSelection{
    code?: boolean | number
    success?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DeletePathwayInput {pathway_id: Scalars['String']}

export interface DeletePatientInput {patient_id: Scalars['String']}

export interface EvaluateFormRulesPayloadGenqlSelection{
    code?: boolean | number
    success?: boolean | number
    results?: QuestionRuleResultGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QuestionRuleResultGenqlSelection{
    question_id?: boolean | number
    rule_id?: boolean | number
    satisfied?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EvaluateFormRulesInput {form_id: Scalars['String'],answers: AnswerInput[]}

export interface AnswerInput {question_id: Scalars['String'],value: Scalars['String']}

export interface MarkMessageAsReadPayloadGenqlSelection{
    code?: boolean | number
    success?: boolean | number
    activity?: ActivityGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MarkMessageAsReadInput {activity_id: Scalars['String']}

export interface PatientDemographicsPayloadGenqlSelection{
    code?: boolean | number
    success?: boolean | number
    query_id?: boolean | number
    status?: boolean | number
    total?: boolean | number
    entry?: UserProfileGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PatientDemographicsInput {patient_identifier: Scalars['String']}

export interface RetryActivityInput {activity_id: Scalars['String']}

export interface RetryAllApiCallsInput {pathway_id: Scalars['String']}

export interface RetryAllFailedApiCallsInput {pathway_id: Scalars['String']}

export interface RetryAllFailedWebhookCallsInput {pathway_id: Scalars['String']}

export interface RetryAllFailedWebhookCallsForPathwayDefinitionInput {pathway_definition_id: Scalars['String']}

export interface RetryAllWebhookCallsInput {pathway_id: Scalars['String']}

export interface RetryApiCallPayloadGenqlSelection{
    code?: boolean | number
    success?: boolean | number
    api_call?: ApiCallGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RetryApiCallInput {api_call_id: Scalars['String']}

export interface RetryPushToEmrInput {activity_id: Scalars['String']}

export interface RetryWebhookCallPayloadGenqlSelection{
    code?: boolean | number
    success?: boolean | number
    webhook_call?: WebhookCallGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RetryWebhookCallInput {webhook_call_id: Scalars['String']}

export interface SaveBaselineInfoInput {pathway_id: Scalars['String'],baseline_info: BaselineInfoInput[]}

export interface BaselineInfoInput {data_point_definition_id: Scalars['String'],value: Scalars['String']}

export interface ScheduleTrackPayloadGenqlSelection{
    code?: boolean | number
    success?: boolean | number
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ScheduleTrackInput {pathway_id: Scalars['String'],track_id: Scalars['String'],scheduled_date: Scalars['String'],cancel_any_scheduled?: (Scalars['Boolean'] | null)}

export interface StartHostedActivitySessionPayloadGenqlSelection{
    code?: boolean | number
    success?: boolean | number
    session_id?: boolean | number
    session_url?: boolean | number
    language?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface StartHostedActivitySessionInput {pathway_id: Scalars['String'],success_url?: (Scalars['String'] | null),cancel_url?: (Scalars['String'] | null),stakeholder_id: Scalars['String'],
/** ISO 639-1 shortcode */
language?: (Scalars['String'] | null)}

export interface StartHostedPathwaySessionFromLinkPayloadGenqlSelection{
    code?: boolean | number
    success?: boolean | number
    session_url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface StartHostedPathwaySessionFromLinkInput {id: Scalars['String'],patient_identifier?: (IdentifierInput | null)}

export interface StartHostedActivitySessionViaHostedPagesLinkInput {hosted_pages_link_id: Scalars['String']}

export interface StartHostedPathwaySessionPayloadGenqlSelection{
    code?: boolean | number
    success?: boolean | number
    session_id?: boolean | number
    session_url?: boolean | number
    pathway_id?: boolean | number
    stakeholder?: HostedSessionStakeholderGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface StartHostedPathwaySessionInput {pathway_definition_id: Scalars['String'],success_url?: (Scalars['String'] | null),cancel_url?: (Scalars['String'] | null),
/** Unique id of the patient in Awell, if not provided, patient identifier will be tried to uniquely identify the patient. */
patient_id?: (Scalars['String'] | null),data_points?: (DataPointInput[] | null),
/** ISO 639-1 shortcode */
language?: (Scalars['String'] | null),
/** If no patient_id is provided this field will be used to uniquely identify the patient. */
patient_identifier?: (IdentifierInput | null),
/** Time-to-live of the session in seconds. This defaults to the maximal value of 3600 seconds (one hour). */
ttl?: (Scalars['Float'] | null)}

export interface DataPointInput {data_point_definition_id: Scalars['String'],value: Scalars['String']}

export interface StartPathwayPayloadGenqlSelection{
    code?: boolean | number
    success?: boolean | number
    pathway_id?: boolean | number
    stakeholders?: StakeholderGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface StartPathwayInput {patient_id: Scalars['String'],pathway_definition_id: Scalars['String'],data_points?: (DataPointInput[] | null),release_id?: (Scalars['String'] | null)}

export interface StartPathwayWithPatientIdentifierPayloadGenqlSelection{
    code?: boolean | number
    success?: boolean | number
    pathway_id?: boolean | number
    patient_id?: boolean | number
    stakeholders?: StakeholderGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface StartPathwayWithPatientIdentifierInput {patient_identifier: IdentifierInput,pathway_definition_id: Scalars['String'],data_points?: (DataPointInput[] | null),release_id?: (Scalars['String'] | null)}

export interface StopPathwayInput {pathway_id: Scalars['String'],reason?: (Scalars['String'] | null)}

export interface StopTrackPayloadGenqlSelection{
    code?: boolean | number
    success?: boolean | number
    track?: ElementGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface StopTrackInput {pathway_id: Scalars['String'],track_id: Scalars['String']}

export interface SubmitChecklistPayloadGenqlSelection{
    code?: boolean | number
    success?: boolean | number
    activity?: ActivityGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SubmitChecklistInput {activity_id: Scalars['String']}

export interface SubmitFormResponsePayloadGenqlSelection{
    code?: boolean | number
    success?: boolean | number
    activity?: ActivityGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SubmitFormResponseInput {activity_id: Scalars['String'],response: QuestionResponseInput[]}

export interface QuestionResponseInput {question_id: Scalars['String'],value: Scalars['String']}

export interface UpdateBaselineInfoInput {pathway_id: Scalars['String'],baseline_info: BaselineInfoInput[]}

export interface UpdatePatientPayloadGenqlSelection{
    code?: boolean | number
    success?: boolean | number
    patient?: UserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UpdatePatientInput {patient_id: Scalars['String'],profile: PatientProfileInput}

export interface PatientProfileInput {first_name?: (Scalars['String'] | null),last_name?: (Scalars['String'] | null),birth_date?: (Scalars['String'] | null),
/** ISO 639-1 shortcode */
preferred_language?: (Scalars['String'] | null),
/** Sex code as defined by ISO standard IEC_5218, 0 - NOT_KNOWN, 1 - MALE, 2 - FEMALE */
sex?: (Sex | null),national_registry_number?: (Scalars['String'] | null),patient_code?: (Scalars['String'] | null),email?: (Scalars['String'] | null),
/** Must be in valid E164 telephone number format */
phone?: (Scalars['String'] | null),
/** Must be in valid E164 telephone number format */
mobile_phone?: (Scalars['String'] | null),address?: (AddressInput | null),identifier?: (IdentifierInput[] | null)}

export interface UpdatePatientDemographicsQueryPayloadGenqlSelection{
    code?: boolean | number
    success?: boolean | number
    created_patient_entry_index?: boolean | number
    created_patient_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UpdatePatientDemographicsQueryInput {
/** Patient ID of the created patient in Awell */
created_patient_id: Scalars['String'],
/** Index from the array returned from the PDQ response, which was used to create the patient */
created_patient_entry_index: Scalars['Float'],query_id: Scalars['String']}

export interface UpdatePatientLanguagePayloadGenqlSelection{
    code?: boolean | number
    success?: boolean | number
    user?: UserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UpdatePatientLanguageInput {
/** ISO 639-1 shortcode */
preferred_language: Scalars['String']}

export interface SubscriptionGenqlSelection{
    activityCreated?: (ActivityGenqlSelection & { __args?: {pathway_id?: (Scalars['String'] | null), only_patient_activities?: (Scalars['Boolean'] | null)} })
    activityUpdated?: (ActivityGenqlSelection & { __args?: {pathway_id?: (Scalars['String'] | null), only_patient_activities?: (Scalars['Boolean'] | null)} })
    activityCompleted?: (ActivityGenqlSelection & { __args?: {pathway_id?: (Scalars['String'] | null), only_patient_activities?: (Scalars['Boolean'] | null)} })
    activityExpired?: (ActivityGenqlSelection & { __args?: {pathway_id?: (Scalars['String'] | null), only_patient_activities?: (Scalars['Boolean'] | null)} })
    apiCallCreated?: (ApiCallGenqlSelection & { __args: {pathway_id: Scalars['String']} })
    apiCallUpdated?: (ApiCallGenqlSelection & { __args: {pathway_id: Scalars['String']} })
    elementCreated?: (ElementGenqlSelection & { __args: {pathway_id: Scalars['String'], element_type?: (ElementType | null)} })
    elementCompleted?: (ElementGenqlSelection & { __args: {pathway_id: Scalars['String'], element_type?: (ElementType | null)} })
    elementUpdated?: (ElementGenqlSelection & { __args: {pathway_id: Scalars['String'], element_type?: (ElementType | null)} })
    sessionActivityCreated?: (ActivityGenqlSelection & { __args?: {only_stakeholder_activities?: (Scalars['Boolean'] | null)} })
    sessionActivityUpdated?: (ActivityGenqlSelection & { __args?: {only_stakeholder_activities?: (Scalars['Boolean'] | null)} })
    sessionActivityCompleted?: (ActivityGenqlSelection & { __args?: {only_stakeholder_activities?: (Scalars['Boolean'] | null)} })
    sessionActivityExpired?: (ActivityGenqlSelection & { __args?: {only_stakeholder_activities?: (Scalars['Boolean'] | null)} })
    sessionExpired?: HostedSessionGenqlSelection
    sessionCompleted?: HostedSessionGenqlSelection
    pathwayUpdated?: (PathwayGenqlSelection & { __args: {id: Scalars['ID']} })
    webhookCallCreated?: (WebhookCallGenqlSelection & { __args: {pathway_id: Scalars['String']} })
    webhookCallUpdated?: (WebhookCallGenqlSelection & { __args: {pathway_id: Scalars['String']} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


    const Query_possibleTypes: string[] = ['Query']
    export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
      return Query_possibleTypes.includes(obj.__typename)
    }
    


    const ScheduledTracksPayload_possibleTypes: string[] = ['ScheduledTracksPayload']
    export const isScheduledTracksPayload = (obj?: { __typename?: any } | null): obj is ScheduledTracksPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isScheduledTracksPayload"')
      return ScheduledTracksPayload_possibleTypes.includes(obj.__typename)
    }
    


    const Payload_possibleTypes: string[] = ['ScheduledTracksPayload','PatientPathwaysPayload','BaselineInfoPayload','ApiCallPayload','ApiCallsPayload','ActionPayload','CalculationResultsPayload','ChecklistPayload','ClinicalNotePayload','ElementsPayload','EmrReportPayload','ExtensionActivityRecordPayload','FormPayload','FormsPayload','FormResponsePayload','HostedSessionActivitiesPayload','HostedSessionPayload','MessagePayload','PathwayDataPointDefinitionsPayload','PathwayPayload','PatientPayload','ScheduledStepsPayload','SearchPatientsPayload','StakeholdersPayload','TracksPayload','CurrentUserPayload','WebhookCallPayload','WebhookCallsPayload','OrchestrationFactsPromptPayload','HostedPagesLinkPayload','AddIdentifierToPatientPayload','AddTrackPayload','CancelScheduledTracksPayload','CompleteExtensionActivityPayload','CreatePatientPayload','EmptyPayload','EvaluateFormRulesPayload','MarkMessageAsReadPayload','PatientDemographicsPayload','RetryApiCallPayload','RetryWebhookCallPayload','ScheduleTrackPayload','StartHostedActivitySessionPayload','StartHostedPathwaySessionFromLinkPayload','StartHostedPathwaySessionPayload','StartPathwayPayload','StartPathwayWithPatientIdentifierPayload','StopTrackPayload','SubmitChecklistPayload','SubmitFormResponsePayload','UpdatePatientPayload','UpdatePatientDemographicsQueryPayload','UpdatePatientLanguagePayload']
    export const isPayload = (obj?: { __typename?: any } | null): obj is Payload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPayload"')
      return Payload_possibleTypes.includes(obj.__typename)
    }
    


    const ScheduledTrack_possibleTypes: string[] = ['ScheduledTrack']
    export const isScheduledTrack = (obj?: { __typename?: any } | null): obj is ScheduledTrack => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isScheduledTrack"')
      return ScheduledTrack_possibleTypes.includes(obj.__typename)
    }
    


    const PatientPathwaysPayload_possibleTypes: string[] = ['PatientPathwaysPayload']
    export const isPatientPathwaysPayload = (obj?: { __typename?: any } | null): obj is PatientPathwaysPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPatientPathwaysPayload"')
      return PatientPathwaysPayload_possibleTypes.includes(obj.__typename)
    }
    


    const PatientPathway_possibleTypes: string[] = ['PatientPathway']
    export const isPatientPathway = (obj?: { __typename?: any } | null): obj is PatientPathway => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPatientPathway"')
      return PatientPathway_possibleTypes.includes(obj.__typename)
    }
    


    const BaselineDataPoint_possibleTypes: string[] = ['BaselineDataPoint']
    export const isBaselineDataPoint = (obj?: { __typename?: any } | null): obj is BaselineDataPoint => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBaselineDataPoint"')
      return BaselineDataPoint_possibleTypes.includes(obj.__typename)
    }
    


    const DataPointDefinition_possibleTypes: string[] = ['DataPointDefinition']
    export const isDataPointDefinition = (obj?: { __typename?: any } | null): obj is DataPointDefinition => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDataPointDefinition"')
      return DataPointDefinition_possibleTypes.includes(obj.__typename)
    }
    


    const DataPointPossibleValue_possibleTypes: string[] = ['DataPointPossibleValue']
    export const isDataPointPossibleValue = (obj?: { __typename?: any } | null): obj is DataPointPossibleValue => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDataPointPossibleValue"')
      return DataPointPossibleValue_possibleTypes.includes(obj.__typename)
    }
    


    const Range_possibleTypes: string[] = ['Range']
    export const isRange = (obj?: { __typename?: any } | null): obj is Range => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRange"')
      return Range_possibleTypes.includes(obj.__typename)
    }
    


    const DataPointMetaDataItem_possibleTypes: string[] = ['DataPointMetaDataItem']
    export const isDataPointMetaDataItem = (obj?: { __typename?: any } | null): obj is DataPointMetaDataItem => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDataPointMetaDataItem"')
      return DataPointMetaDataItem_possibleTypes.includes(obj.__typename)
    }
    


    const BaselineInfoPayload_possibleTypes: string[] = ['BaselineInfoPayload']
    export const isBaselineInfoPayload = (obj?: { __typename?: any } | null): obj is BaselineInfoPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBaselineInfoPayload"')
      return BaselineInfoPayload_possibleTypes.includes(obj.__typename)
    }
    


    const ActivitiesPayload_possibleTypes: string[] = ['ActivitiesPayload']
    export const isActivitiesPayload = (obj?: { __typename?: any } | null): obj is ActivitiesPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isActivitiesPayload"')
      return ActivitiesPayload_possibleTypes.includes(obj.__typename)
    }
    


    const PaginationAndSortingPayload_possibleTypes: string[] = ['ActivitiesPayload','OrchestrationFactsPayload','PathwaysPayload','PatientsPayload','PublishedPathwayDefinitionsPayload']
    export const isPaginationAndSortingPayload = (obj?: { __typename?: any } | null): obj is PaginationAndSortingPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPaginationAndSortingPayload"')
      return PaginationAndSortingPayload_possibleTypes.includes(obj.__typename)
    }
    


    const PaginationOutput_possibleTypes: string[] = ['PaginationOutput']
    export const isPaginationOutput = (obj?: { __typename?: any } | null): obj is PaginationOutput => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPaginationOutput"')
      return PaginationOutput_possibleTypes.includes(obj.__typename)
    }
    


    const SortingOutput_possibleTypes: string[] = ['SortingOutput']
    export const isSortingOutput = (obj?: { __typename?: any } | null): obj is SortingOutput => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSortingOutput"')
      return SortingOutput_possibleTypes.includes(obj.__typename)
    }
    


    const Activity_possibleTypes: string[] = ['Activity']
    export const isActivity = (obj?: { __typename?: any } | null): obj is Activity => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isActivity"')
      return Activity_possibleTypes.includes(obj.__typename)
    }
    


    const ActivitySubject_possibleTypes: string[] = ['ActivitySubject']
    export const isActivitySubject = (obj?: { __typename?: any } | null): obj is ActivitySubject => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isActivitySubject"')
      return ActivitySubject_possibleTypes.includes(obj.__typename)
    }
    


    const ActivityObject_possibleTypes: string[] = ['ActivityObject']
    export const isActivityObject = (obj?: { __typename?: any } | null): obj is ActivityObject => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isActivityObject"')
      return ActivityObject_possibleTypes.includes(obj.__typename)
    }
    


    const ActivityTrack_possibleTypes: string[] = ['ActivityTrack']
    export const isActivityTrack = (obj?: { __typename?: any } | null): obj is ActivityTrack => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isActivityTrack"')
      return ActivityTrack_possibleTypes.includes(obj.__typename)
    }
    


    const ActivityLabel_possibleTypes: string[] = ['ActivityLabel']
    export const isActivityLabel = (obj?: { __typename?: any } | null): obj is ActivityLabel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isActivityLabel"')
      return ActivityLabel_possibleTypes.includes(obj.__typename)
    }
    


    const SubActivity_possibleTypes: string[] = ['SubActivity']
    export const isSubActivity = (obj?: { __typename?: any } | null): obj is SubActivity => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSubActivity"')
      return SubActivity_possibleTypes.includes(obj.__typename)
    }
    


    const TranslatedText_possibleTypes: string[] = ['TranslatedText']
    export const isTranslatedText = (obj?: { __typename?: any } | null): obj is TranslatedText => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTranslatedText"')
      return TranslatedText_possibleTypes.includes(obj.__typename)
    }
    


    const PathwayContext_possibleTypes: string[] = ['PathwayContext']
    export const isPathwayContext = (obj?: { __typename?: any } | null): obj is PathwayContext => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPathwayContext"')
      return PathwayContext_possibleTypes.includes(obj.__typename)
    }
    


    const Form_possibleTypes: string[] = ['Form']
    export const isForm = (obj?: { __typename?: any } | null): obj is Form => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isForm"')
      return Form_possibleTypes.includes(obj.__typename)
    }
    


    const Question_possibleTypes: string[] = ['Question']
    export const isQuestion = (obj?: { __typename?: any } | null): obj is Question => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQuestion"')
      return Question_possibleTypes.includes(obj.__typename)
    }
    


    const Option_possibleTypes: string[] = ['Option']
    export const isOption = (obj?: { __typename?: any } | null): obj is Option => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOption"')
      return Option_possibleTypes.includes(obj.__typename)
    }
    


    const QuestionConfig_possibleTypes: string[] = ['QuestionConfig']
    export const isQuestionConfig = (obj?: { __typename?: any } | null): obj is QuestionConfig => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQuestionConfig"')
      return QuestionConfig_possibleTypes.includes(obj.__typename)
    }
    


    const SliderConfig_possibleTypes: string[] = ['SliderConfig']
    export const isSliderConfig = (obj?: { __typename?: any } | null): obj is SliderConfig => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSliderConfig"')
      return SliderConfig_possibleTypes.includes(obj.__typename)
    }
    


    const PhoneConfig_possibleTypes: string[] = ['PhoneConfig']
    export const isPhoneConfig = (obj?: { __typename?: any } | null): obj is PhoneConfig => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPhoneConfig"')
      return PhoneConfig_possibleTypes.includes(obj.__typename)
    }
    


    const NumberConfig_possibleTypes: string[] = ['NumberConfig']
    export const isNumberConfig = (obj?: { __typename?: any } | null): obj is NumberConfig => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNumberConfig"')
      return NumberConfig_possibleTypes.includes(obj.__typename)
    }
    


    const RangeConfig_possibleTypes: string[] = ['RangeConfig']
    export const isRangeConfig = (obj?: { __typename?: any } | null): obj is RangeConfig => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRangeConfig"')
      return RangeConfig_possibleTypes.includes(obj.__typename)
    }
    


    const MultipleSelectConfig_possibleTypes: string[] = ['MultipleSelectConfig']
    export const isMultipleSelectConfig = (obj?: { __typename?: any } | null): obj is MultipleSelectConfig => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMultipleSelectConfig"')
      return MultipleSelectConfig_possibleTypes.includes(obj.__typename)
    }
    


    const ChoiceRangeConfig_possibleTypes: string[] = ['ChoiceRangeConfig']
    export const isChoiceRangeConfig = (obj?: { __typename?: any } | null): obj is ChoiceRangeConfig => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isChoiceRangeConfig"')
      return ChoiceRangeConfig_possibleTypes.includes(obj.__typename)
    }
    


    const ExclusiveOptionConfig_possibleTypes: string[] = ['ExclusiveOptionConfig']
    export const isExclusiveOptionConfig = (obj?: { __typename?: any } | null): obj is ExclusiveOptionConfig => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isExclusiveOptionConfig"')
      return ExclusiveOptionConfig_possibleTypes.includes(obj.__typename)
    }
    


    const DateConfig_possibleTypes: string[] = ['DateConfig']
    export const isDateConfig = (obj?: { __typename?: any } | null): obj is DateConfig => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDateConfig"')
      return DateConfig_possibleTypes.includes(obj.__typename)
    }
    


    const Rule_possibleTypes: string[] = ['Rule']
    export const isRule = (obj?: { __typename?: any } | null): obj is Rule => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRule"')
      return Rule_possibleTypes.includes(obj.__typename)
    }
    


    const Condition_possibleTypes: string[] = ['Condition']
    export const isCondition = (obj?: { __typename?: any } | null): obj is Condition => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCondition"')
      return Condition_possibleTypes.includes(obj.__typename)
    }
    


    const Operand_possibleTypes: string[] = ['Operand']
    export const isOperand = (obj?: { __typename?: any } | null): obj is Operand => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOperand"')
      return Operand_possibleTypes.includes(obj.__typename)
    }
    


    const PreviousAnswers_possibleTypes: string[] = ['PreviousAnswers']
    export const isPreviousAnswers = (obj?: { __typename?: any } | null): obj is PreviousAnswers => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPreviousAnswers"')
      return PreviousAnswers_possibleTypes.includes(obj.__typename)
    }
    


    const Answer_possibleTypes: string[] = ['Answer']
    export const isAnswer = (obj?: { __typename?: any } | null): obj is Answer => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAnswer"')
      return Answer_possibleTypes.includes(obj.__typename)
    }
    


    const ActivityMetadata_possibleTypes: string[] = ['ActivityMetadata']
    export const isActivityMetadata = (obj?: { __typename?: any } | null): obj is ActivityMetadata => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isActivityMetadata"')
      return ActivityMetadata_possibleTypes.includes(obj.__typename)
    }
    


    const ApiCallPayload_possibleTypes: string[] = ['ApiCallPayload']
    export const isApiCallPayload = (obj?: { __typename?: any } | null): obj is ApiCallPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isApiCallPayload"')
      return ApiCallPayload_possibleTypes.includes(obj.__typename)
    }
    


    const ApiCall_possibleTypes: string[] = ['ApiCall']
    export const isApiCall = (obj?: { __typename?: any } | null): obj is ApiCall => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isApiCall"')
      return ApiCall_possibleTypes.includes(obj.__typename)
    }
    


    const ApiCallRequest_possibleTypes: string[] = ['ApiCallRequest']
    export const isApiCallRequest = (obj?: { __typename?: any } | null): obj is ApiCallRequest => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isApiCallRequest"')
      return ApiCallRequest_possibleTypes.includes(obj.__typename)
    }
    


    const ApiCallHeader_possibleTypes: string[] = ['ApiCallHeader']
    export const isApiCallHeader = (obj?: { __typename?: any } | null): obj is ApiCallHeader => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isApiCallHeader"')
      return ApiCallHeader_possibleTypes.includes(obj.__typename)
    }
    


    const ApiCallResponse_possibleTypes: string[] = ['ApiCallResponse']
    export const isApiCallResponse = (obj?: { __typename?: any } | null): obj is ApiCallResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isApiCallResponse"')
      return ApiCallResponse_possibleTypes.includes(obj.__typename)
    }
    


    const ApiCallsPayload_possibleTypes: string[] = ['ApiCallsPayload']
    export const isApiCallsPayload = (obj?: { __typename?: any } | null): obj is ApiCallsPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isApiCallsPayload"')
      return ApiCallsPayload_possibleTypes.includes(obj.__typename)
    }
    


    const ActionPayload_possibleTypes: string[] = ['ActionPayload']
    export const isActionPayload = (obj?: { __typename?: any } | null): obj is ActionPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isActionPayload"')
      return ActionPayload_possibleTypes.includes(obj.__typename)
    }
    


    const CalculationResultsPayload_possibleTypes: string[] = ['CalculationResultsPayload']
    export const isCalculationResultsPayload = (obj?: { __typename?: any } | null): obj is CalculationResultsPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCalculationResultsPayload"')
      return CalculationResultsPayload_possibleTypes.includes(obj.__typename)
    }
    


    const SingleCalculationResult_possibleTypes: string[] = ['SingleCalculationResult']
    export const isSingleCalculationResult = (obj?: { __typename?: any } | null): obj is SingleCalculationResult => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSingleCalculationResult"')
      return SingleCalculationResult_possibleTypes.includes(obj.__typename)
    }
    


    const ChecklistPayload_possibleTypes: string[] = ['ChecklistPayload']
    export const isChecklistPayload = (obj?: { __typename?: any } | null): obj is ChecklistPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isChecklistPayload"')
      return ChecklistPayload_possibleTypes.includes(obj.__typename)
    }
    


    const Checklist_possibleTypes: string[] = ['Checklist']
    export const isChecklist = (obj?: { __typename?: any } | null): obj is Checklist => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isChecklist"')
      return Checklist_possibleTypes.includes(obj.__typename)
    }
    


    const ClinicalNotePayload_possibleTypes: string[] = ['ClinicalNotePayload']
    export const isClinicalNotePayload = (obj?: { __typename?: any } | null): obj is ClinicalNotePayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isClinicalNotePayload"')
      return ClinicalNotePayload_possibleTypes.includes(obj.__typename)
    }
    


    const GeneratedClinicalNote_possibleTypes: string[] = ['GeneratedClinicalNote']
    export const isGeneratedClinicalNote = (obj?: { __typename?: any } | null): obj is GeneratedClinicalNote => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGeneratedClinicalNote"')
      return GeneratedClinicalNote_possibleTypes.includes(obj.__typename)
    }
    


    const GeneratedClinicalNoteNarrative_possibleTypes: string[] = ['GeneratedClinicalNoteNarrative']
    export const isGeneratedClinicalNoteNarrative = (obj?: { __typename?: any } | null): obj is GeneratedClinicalNoteNarrative => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGeneratedClinicalNoteNarrative"')
      return GeneratedClinicalNoteNarrative_possibleTypes.includes(obj.__typename)
    }
    


    const GeneratedClinicalNoteContextField_possibleTypes: string[] = ['GeneratedClinicalNoteContextField']
    export const isGeneratedClinicalNoteContextField = (obj?: { __typename?: any } | null): obj is GeneratedClinicalNoteContextField => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGeneratedClinicalNoteContextField"')
      return GeneratedClinicalNoteContextField_possibleTypes.includes(obj.__typename)
    }
    


    const ElementsPayload_possibleTypes: string[] = ['ElementsPayload']
    export const isElementsPayload = (obj?: { __typename?: any } | null): obj is ElementsPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isElementsPayload"')
      return ElementsPayload_possibleTypes.includes(obj.__typename)
    }
    


    const Element_possibleTypes: string[] = ['Element']
    export const isElement = (obj?: { __typename?: any } | null): obj is Element => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isElement"')
      return Element_possibleTypes.includes(obj.__typename)
    }
    


    const ElementStakeholder_possibleTypes: string[] = ['ElementStakeholder']
    export const isElementStakeholder = (obj?: { __typename?: any } | null): obj is ElementStakeholder => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isElementStakeholder"')
      return ElementStakeholder_possibleTypes.includes(obj.__typename)
    }
    


    const EmrReportPayload_possibleTypes: string[] = ['EmrReportPayload']
    export const isEmrReportPayload = (obj?: { __typename?: any } | null): obj is EmrReportPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEmrReportPayload"')
      return EmrReportPayload_possibleTypes.includes(obj.__typename)
    }
    


    const EmrReport_possibleTypes: string[] = ['EmrReport']
    export const isEmrReport = (obj?: { __typename?: any } | null): obj is EmrReport => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEmrReport"')
      return EmrReport_possibleTypes.includes(obj.__typename)
    }
    


    const EmrReportMetadataField_possibleTypes: string[] = ['EmrReportMetadataField']
    export const isEmrReportMetadataField = (obj?: { __typename?: any } | null): obj is EmrReportMetadataField => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEmrReportMetadataField"')
      return EmrReportMetadataField_possibleTypes.includes(obj.__typename)
    }
    


    const ExtensionActivityRecordPayload_possibleTypes: string[] = ['ExtensionActivityRecordPayload']
    export const isExtensionActivityRecordPayload = (obj?: { __typename?: any } | null): obj is ExtensionActivityRecordPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isExtensionActivityRecordPayload"')
      return ExtensionActivityRecordPayload_possibleTypes.includes(obj.__typename)
    }
    


    const ExtensionActivityRecord_possibleTypes: string[] = ['ExtensionActivityRecord']
    export const isExtensionActivityRecord = (obj?: { __typename?: any } | null): obj is ExtensionActivityRecord => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isExtensionActivityRecord"')
      return ExtensionActivityRecord_possibleTypes.includes(obj.__typename)
    }
    


    const ExtensionActionField_possibleTypes: string[] = ['ExtensionActionField']
    export const isExtensionActionField = (obj?: { __typename?: any } | null): obj is ExtensionActionField => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isExtensionActionField"')
      return ExtensionActionField_possibleTypes.includes(obj.__typename)
    }
    


    const PluginActionSettingsProperty_possibleTypes: string[] = ['PluginActionSettingsProperty']
    export const isPluginActionSettingsProperty = (obj?: { __typename?: any } | null): obj is PluginActionSettingsProperty => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPluginActionSettingsProperty"')
      return PluginActionSettingsProperty_possibleTypes.includes(obj.__typename)
    }
    


    const ExtensionDataPoint_possibleTypes: string[] = ['ExtensionDataPoint']
    export const isExtensionDataPoint = (obj?: { __typename?: any } | null): obj is ExtensionDataPoint => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isExtensionDataPoint"')
      return ExtensionDataPoint_possibleTypes.includes(obj.__typename)
    }
    


    const FormPayload_possibleTypes: string[] = ['FormPayload']
    export const isFormPayload = (obj?: { __typename?: any } | null): obj is FormPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFormPayload"')
      return FormPayload_possibleTypes.includes(obj.__typename)
    }
    


    const FormsPayload_possibleTypes: string[] = ['FormsPayload']
    export const isFormsPayload = (obj?: { __typename?: any } | null): obj is FormsPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFormsPayload"')
      return FormsPayload_possibleTypes.includes(obj.__typename)
    }
    


    const FormResponsePayload_possibleTypes: string[] = ['FormResponsePayload']
    export const isFormResponsePayload = (obj?: { __typename?: any } | null): obj is FormResponsePayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFormResponsePayload"')
      return FormResponsePayload_possibleTypes.includes(obj.__typename)
    }
    


    const FormResponse_possibleTypes: string[] = ['FormResponse']
    export const isFormResponse = (obj?: { __typename?: any } | null): obj is FormResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFormResponse"')
      return FormResponse_possibleTypes.includes(obj.__typename)
    }
    


    const HostedSessionActivitiesPayload_possibleTypes: string[] = ['HostedSessionActivitiesPayload']
    export const isHostedSessionActivitiesPayload = (obj?: { __typename?: any } | null): obj is HostedSessionActivitiesPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isHostedSessionActivitiesPayload"')
      return HostedSessionActivitiesPayload_possibleTypes.includes(obj.__typename)
    }
    


    const HostedSessionPayload_possibleTypes: string[] = ['HostedSessionPayload']
    export const isHostedSessionPayload = (obj?: { __typename?: any } | null): obj is HostedSessionPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isHostedSessionPayload"')
      return HostedSessionPayload_possibleTypes.includes(obj.__typename)
    }
    


    const HostedSession_possibleTypes: string[] = ['HostedSession']
    export const isHostedSession = (obj?: { __typename?: any } | null): obj is HostedSession => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isHostedSession"')
      return HostedSession_possibleTypes.includes(obj.__typename)
    }
    


    const HostedSessionStakeholder_possibleTypes: string[] = ['HostedSessionStakeholder']
    export const isHostedSessionStakeholder = (obj?: { __typename?: any } | null): obj is HostedSessionStakeholder => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isHostedSessionStakeholder"')
      return HostedSessionStakeholder_possibleTypes.includes(obj.__typename)
    }
    


    const BrandingSettings_possibleTypes: string[] = ['BrandingSettings']
    export const isBrandingSettings = (obj?: { __typename?: any } | null): obj is BrandingSettings => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBrandingSettings"')
      return BrandingSettings_possibleTypes.includes(obj.__typename)
    }
    


    const MessagePayload_possibleTypes: string[] = ['MessagePayload']
    export const isMessagePayload = (obj?: { __typename?: any } | null): obj is MessagePayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMessagePayload"')
      return MessagePayload_possibleTypes.includes(obj.__typename)
    }
    


    const Message_possibleTypes: string[] = ['Message']
    export const isMessage = (obj?: { __typename?: any } | null): obj is Message => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMessage"')
      return Message_possibleTypes.includes(obj.__typename)
    }
    


    const MessageAttachment_possibleTypes: string[] = ['MessageAttachment']
    export const isMessageAttachment = (obj?: { __typename?: any } | null): obj is MessageAttachment => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMessageAttachment"')
      return MessageAttachment_possibleTypes.includes(obj.__typename)
    }
    


    const OrchestrationFactsPayload_possibleTypes: string[] = ['OrchestrationFactsPayload']
    export const isOrchestrationFactsPayload = (obj?: { __typename?: any } | null): obj is OrchestrationFactsPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOrchestrationFactsPayload"')
      return OrchestrationFactsPayload_possibleTypes.includes(obj.__typename)
    }
    


    const OrchestrationFact_possibleTypes: string[] = ['OrchestrationFact']
    export const isOrchestrationFact = (obj?: { __typename?: any } | null): obj is OrchestrationFact => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOrchestrationFact"')
      return OrchestrationFact_possibleTypes.includes(obj.__typename)
    }
    


    const PathwayDataPointDefinitionsPayload_possibleTypes: string[] = ['PathwayDataPointDefinitionsPayload']
    export const isPathwayDataPointDefinitionsPayload = (obj?: { __typename?: any } | null): obj is PathwayDataPointDefinitionsPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPathwayDataPointDefinitionsPayload"')
      return PathwayDataPointDefinitionsPayload_possibleTypes.includes(obj.__typename)
    }
    


    const PathwayPayload_possibleTypes: string[] = ['PathwayPayload']
    export const isPathwayPayload = (obj?: { __typename?: any } | null): obj is PathwayPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPathwayPayload"')
      return PathwayPayload_possibleTypes.includes(obj.__typename)
    }
    


    const Pathway_possibleTypes: string[] = ['Pathway']
    export const isPathway = (obj?: { __typename?: any } | null): obj is Pathway => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPathway"')
      return Pathway_possibleTypes.includes(obj.__typename)
    }
    


    const Swimlanes_possibleTypes: string[] = ['Swimlanes']
    export const isSwimlanes = (obj?: { __typename?: any } | null): obj is Swimlanes => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSwimlanes"')
      return Swimlanes_possibleTypes.includes(obj.__typename)
    }
    


    const Swimlane_possibleTypes: string[] = ['Swimlane']
    export const isSwimlane = (obj?: { __typename?: any } | null): obj is Swimlane => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSwimlane"')
      return Swimlane_possibleTypes.includes(obj.__typename)
    }
    


    const SwimlaneItem_possibleTypes: string[] = ['SwimlaneItem']
    export const isSwimlaneItem = (obj?: { __typename?: any } | null): obj is SwimlaneItem => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSwimlaneItem"')
      return SwimlaneItem_possibleTypes.includes(obj.__typename)
    }
    


    const FormattedText_possibleTypes: string[] = ['FormattedText']
    export const isFormattedText = (obj?: { __typename?: any } | null): obj is FormattedText => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFormattedText"')
      return FormattedText_possibleTypes.includes(obj.__typename)
    }
    


    const SwimlaneLink_possibleTypes: string[] = ['SwimlaneLink']
    export const isSwimlaneLink = (obj?: { __typename?: any } | null): obj is SwimlaneLink => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSwimlaneLink"')
      return SwimlaneLink_possibleTypes.includes(obj.__typename)
    }
    


    const Track_possibleTypes: string[] = ['Track']
    export const isTrack = (obj?: { __typename?: any } | null): obj is Track => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTrack"')
      return Track_possibleTypes.includes(obj.__typename)
    }
    


    const PathwayDashboard_possibleTypes: string[] = ['PathwayDashboard']
    export const isPathwayDashboard = (obj?: { __typename?: any } | null): obj is PathwayDashboard => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPathwayDashboard"')
      return PathwayDashboard_possibleTypes.includes(obj.__typename)
    }
    


    const User_possibleTypes: string[] = ['User']
    export const isUser = (obj?: { __typename?: any } | null): obj is User => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUser"')
      return User_possibleTypes.includes(obj.__typename)
    }
    


    const UserProfile_possibleTypes: string[] = ['UserProfile']
    export const isUserProfile = (obj?: { __typename?: any } | null): obj is UserProfile => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserProfile"')
      return UserProfile_possibleTypes.includes(obj.__typename)
    }
    


    const Address_possibleTypes: string[] = ['Address']
    export const isAddress = (obj?: { __typename?: any } | null): obj is Address => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAddress"')
      return Address_possibleTypes.includes(obj.__typename)
    }
    


    const Identifier_possibleTypes: string[] = ['Identifier']
    export const isIdentifier = (obj?: { __typename?: any } | null): obj is Identifier => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isIdentifier"')
      return Identifier_possibleTypes.includes(obj.__typename)
    }
    


    const PathwaysPayload_possibleTypes: string[] = ['PathwaysPayload']
    export const isPathwaysPayload = (obj?: { __typename?: any } | null): obj is PathwaysPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPathwaysPayload"')
      return PathwaysPayload_possibleTypes.includes(obj.__typename)
    }
    


    const PathwaySummary_possibleTypes: string[] = ['PathwaySummary']
    export const isPathwaySummary = (obj?: { __typename?: any } | null): obj is PathwaySummary => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPathwaySummary"')
      return PathwaySummary_possibleTypes.includes(obj.__typename)
    }
    


    const PatientDemographicsQueryConfigurationPayload_possibleTypes: string[] = ['PatientDemographicsQueryConfigurationPayload']
    export const isPatientDemographicsQueryConfigurationPayload = (obj?: { __typename?: any } | null): obj is PatientDemographicsQueryConfigurationPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPatientDemographicsQueryConfigurationPayload"')
      return PatientDemographicsQueryConfigurationPayload_possibleTypes.includes(obj.__typename)
    }
    


    const PatientPayload_possibleTypes: string[] = ['PatientPayload']
    export const isPatientPayload = (obj?: { __typename?: any } | null): obj is PatientPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPatientPayload"')
      return PatientPayload_possibleTypes.includes(obj.__typename)
    }
    


    const PatientsPayload_possibleTypes: string[] = ['PatientsPayload']
    export const isPatientsPayload = (obj?: { __typename?: any } | null): obj is PatientsPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPatientsPayload"')
      return PatientsPayload_possibleTypes.includes(obj.__typename)
    }
    


    const PublishedPathwayDefinitionsPayload_possibleTypes: string[] = ['PublishedPathwayDefinitionsPayload']
    export const isPublishedPathwayDefinitionsPayload = (obj?: { __typename?: any } | null): obj is PublishedPathwayDefinitionsPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPublishedPathwayDefinitionsPayload"')
      return PublishedPathwayDefinitionsPayload_possibleTypes.includes(obj.__typename)
    }
    


    const PublishedPathwayDefinition_possibleTypes: string[] = ['PublishedPathwayDefinition']
    export const isPublishedPathwayDefinition = (obj?: { __typename?: any } | null): obj is PublishedPathwayDefinition => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPublishedPathwayDefinition"')
      return PublishedPathwayDefinition_possibleTypes.includes(obj.__typename)
    }
    


    const AuditTrail_possibleTypes: string[] = ['AuditTrail']
    export const isAuditTrail = (obj?: { __typename?: any } | null): obj is AuditTrail => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAuditTrail"')
      return AuditTrail_possibleTypes.includes(obj.__typename)
    }
    


    const PathwayDefinitionDetails_possibleTypes: string[] = ['PathwayDefinitionDetails']
    export const isPathwayDefinitionDetails = (obj?: { __typename?: any } | null): obj is PathwayDefinitionDetails => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPathwayDefinitionDetails"')
      return PathwayDefinitionDetails_possibleTypes.includes(obj.__typename)
    }
    


    const ScheduledStepsPayload_possibleTypes: string[] = ['ScheduledStepsPayload']
    export const isScheduledStepsPayload = (obj?: { __typename?: any } | null): obj is ScheduledStepsPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isScheduledStepsPayload"')
      return ScheduledStepsPayload_possibleTypes.includes(obj.__typename)
    }
    


    const SearchPatientsPayload_possibleTypes: string[] = ['SearchPatientsPayload']
    export const isSearchPatientsPayload = (obj?: { __typename?: any } | null): obj is SearchPatientsPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSearchPatientsPayload"')
      return SearchPatientsPayload_possibleTypes.includes(obj.__typename)
    }
    


    const StakeholdersPayload_possibleTypes: string[] = ['StakeholdersPayload']
    export const isStakeholdersPayload = (obj?: { __typename?: any } | null): obj is StakeholdersPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStakeholdersPayload"')
      return StakeholdersPayload_possibleTypes.includes(obj.__typename)
    }
    


    const Stakeholder_possibleTypes: string[] = ['Stakeholder']
    export const isStakeholder = (obj?: { __typename?: any } | null): obj is Stakeholder => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStakeholder"')
      return Stakeholder_possibleTypes.includes(obj.__typename)
    }
    


    const StakeholderLabel_possibleTypes: string[] = ['StakeholderLabel']
    export const isStakeholderLabel = (obj?: { __typename?: any } | null): obj is StakeholderLabel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStakeholderLabel"')
      return StakeholderLabel_possibleTypes.includes(obj.__typename)
    }
    


    const TracksPayload_possibleTypes: string[] = ['TracksPayload']
    export const isTracksPayload = (obj?: { __typename?: any } | null): obj is TracksPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTracksPayload"')
      return TracksPayload_possibleTypes.includes(obj.__typename)
    }
    


    const CurrentUserPayload_possibleTypes: string[] = ['CurrentUserPayload']
    export const isCurrentUserPayload = (obj?: { __typename?: any } | null): obj is CurrentUserPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCurrentUserPayload"')
      return CurrentUserPayload_possibleTypes.includes(obj.__typename)
    }
    


    const CurrentUser_possibleTypes: string[] = ['CurrentUser']
    export const isCurrentUser = (obj?: { __typename?: any } | null): obj is CurrentUser => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCurrentUser"')
      return CurrentUser_possibleTypes.includes(obj.__typename)
    }
    


    const Tenant_possibleTypes: string[] = ['Tenant']
    export const isTenant = (obj?: { __typename?: any } | null): obj is Tenant => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTenant"')
      return Tenant_possibleTypes.includes(obj.__typename)
    }
    


    const IdentifierSystem_possibleTypes: string[] = ['IdentifierSystem']
    export const isIdentifierSystem = (obj?: { __typename?: any } | null): obj is IdentifierSystem => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isIdentifierSystem"')
      return IdentifierSystem_possibleTypes.includes(obj.__typename)
    }
    


    const WebhookCallPayload_possibleTypes: string[] = ['WebhookCallPayload']
    export const isWebhookCallPayload = (obj?: { __typename?: any } | null): obj is WebhookCallPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isWebhookCallPayload"')
      return WebhookCallPayload_possibleTypes.includes(obj.__typename)
    }
    


    const WebhookCall_possibleTypes: string[] = ['WebhookCall']
    export const isWebhookCall = (obj?: { __typename?: any } | null): obj is WebhookCall => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isWebhookCall"')
      return WebhookCall_possibleTypes.includes(obj.__typename)
    }
    


    const WebhookCallRequest_possibleTypes: string[] = ['WebhookCallRequest']
    export const isWebhookCallRequest = (obj?: { __typename?: any } | null): obj is WebhookCallRequest => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isWebhookCallRequest"')
      return WebhookCallRequest_possibleTypes.includes(obj.__typename)
    }
    


    const WebhookCallHeader_possibleTypes: string[] = ['WebhookCallHeader']
    export const isWebhookCallHeader = (obj?: { __typename?: any } | null): obj is WebhookCallHeader => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isWebhookCallHeader"')
      return WebhookCallHeader_possibleTypes.includes(obj.__typename)
    }
    


    const WebhookCallResponse_possibleTypes: string[] = ['WebhookCallResponse']
    export const isWebhookCallResponse = (obj?: { __typename?: any } | null): obj is WebhookCallResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isWebhookCallResponse"')
      return WebhookCallResponse_possibleTypes.includes(obj.__typename)
    }
    


    const ApiPathwayContext_possibleTypes: string[] = ['ApiPathwayContext']
    export const isApiPathwayContext = (obj?: { __typename?: any } | null): obj is ApiPathwayContext => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isApiPathwayContext"')
      return ApiPathwayContext_possibleTypes.includes(obj.__typename)
    }
    


    const WebhookCallsPayload_possibleTypes: string[] = ['WebhookCallsPayload']
    export const isWebhookCallsPayload = (obj?: { __typename?: any } | null): obj is WebhookCallsPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isWebhookCallsPayload"')
      return WebhookCallsPayload_possibleTypes.includes(obj.__typename)
    }
    


    const OrchestrationFactsPromptPayload_possibleTypes: string[] = ['OrchestrationFactsPromptPayload']
    export const isOrchestrationFactsPromptPayload = (obj?: { __typename?: any } | null): obj is OrchestrationFactsPromptPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOrchestrationFactsPromptPayload"')
      return OrchestrationFactsPromptPayload_possibleTypes.includes(obj.__typename)
    }
    


    const HostedPagesLinkPayload_possibleTypes: string[] = ['HostedPagesLinkPayload']
    export const isHostedPagesLinkPayload = (obj?: { __typename?: any } | null): obj is HostedPagesLinkPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isHostedPagesLinkPayload"')
      return HostedPagesLinkPayload_possibleTypes.includes(obj.__typename)
    }
    


    const HostedPagesLink_possibleTypes: string[] = ['HostedPagesLink']
    export const isHostedPagesLink = (obj?: { __typename?: any } | null): obj is HostedPagesLink => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isHostedPagesLink"')
      return HostedPagesLink_possibleTypes.includes(obj.__typename)
    }
    


    const Mutation_possibleTypes: string[] = ['Mutation']
    export const isMutation = (obj?: { __typename?: any } | null): obj is Mutation => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMutation"')
      return Mutation_possibleTypes.includes(obj.__typename)
    }
    


    const AddIdentifierToPatientPayload_possibleTypes: string[] = ['AddIdentifierToPatientPayload']
    export const isAddIdentifierToPatientPayload = (obj?: { __typename?: any } | null): obj is AddIdentifierToPatientPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAddIdentifierToPatientPayload"')
      return AddIdentifierToPatientPayload_possibleTypes.includes(obj.__typename)
    }
    


    const AddTrackPayload_possibleTypes: string[] = ['AddTrackPayload']
    export const isAddTrackPayload = (obj?: { __typename?: any } | null): obj is AddTrackPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAddTrackPayload"')
      return AddTrackPayload_possibleTypes.includes(obj.__typename)
    }
    


    const CancelScheduledTracksPayload_possibleTypes: string[] = ['CancelScheduledTracksPayload']
    export const isCancelScheduledTracksPayload = (obj?: { __typename?: any } | null): obj is CancelScheduledTracksPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCancelScheduledTracksPayload"')
      return CancelScheduledTracksPayload_possibleTypes.includes(obj.__typename)
    }
    


    const CompleteExtensionActivityPayload_possibleTypes: string[] = ['CompleteExtensionActivityPayload']
    export const isCompleteExtensionActivityPayload = (obj?: { __typename?: any } | null): obj is CompleteExtensionActivityPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCompleteExtensionActivityPayload"')
      return CompleteExtensionActivityPayload_possibleTypes.includes(obj.__typename)
    }
    


    const CreatePatientPayload_possibleTypes: string[] = ['CreatePatientPayload']
    export const isCreatePatientPayload = (obj?: { __typename?: any } | null): obj is CreatePatientPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCreatePatientPayload"')
      return CreatePatientPayload_possibleTypes.includes(obj.__typename)
    }
    


    const EmptyPayload_possibleTypes: string[] = ['EmptyPayload']
    export const isEmptyPayload = (obj?: { __typename?: any } | null): obj is EmptyPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEmptyPayload"')
      return EmptyPayload_possibleTypes.includes(obj.__typename)
    }
    


    const EvaluateFormRulesPayload_possibleTypes: string[] = ['EvaluateFormRulesPayload']
    export const isEvaluateFormRulesPayload = (obj?: { __typename?: any } | null): obj is EvaluateFormRulesPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEvaluateFormRulesPayload"')
      return EvaluateFormRulesPayload_possibleTypes.includes(obj.__typename)
    }
    


    const QuestionRuleResult_possibleTypes: string[] = ['QuestionRuleResult']
    export const isQuestionRuleResult = (obj?: { __typename?: any } | null): obj is QuestionRuleResult => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQuestionRuleResult"')
      return QuestionRuleResult_possibleTypes.includes(obj.__typename)
    }
    


    const MarkMessageAsReadPayload_possibleTypes: string[] = ['MarkMessageAsReadPayload']
    export const isMarkMessageAsReadPayload = (obj?: { __typename?: any } | null): obj is MarkMessageAsReadPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMarkMessageAsReadPayload"')
      return MarkMessageAsReadPayload_possibleTypes.includes(obj.__typename)
    }
    


    const PatientDemographicsPayload_possibleTypes: string[] = ['PatientDemographicsPayload']
    export const isPatientDemographicsPayload = (obj?: { __typename?: any } | null): obj is PatientDemographicsPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPatientDemographicsPayload"')
      return PatientDemographicsPayload_possibleTypes.includes(obj.__typename)
    }
    


    const RetryApiCallPayload_possibleTypes: string[] = ['RetryApiCallPayload']
    export const isRetryApiCallPayload = (obj?: { __typename?: any } | null): obj is RetryApiCallPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRetryApiCallPayload"')
      return RetryApiCallPayload_possibleTypes.includes(obj.__typename)
    }
    


    const RetryWebhookCallPayload_possibleTypes: string[] = ['RetryWebhookCallPayload']
    export const isRetryWebhookCallPayload = (obj?: { __typename?: any } | null): obj is RetryWebhookCallPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRetryWebhookCallPayload"')
      return RetryWebhookCallPayload_possibleTypes.includes(obj.__typename)
    }
    


    const ScheduleTrackPayload_possibleTypes: string[] = ['ScheduleTrackPayload']
    export const isScheduleTrackPayload = (obj?: { __typename?: any } | null): obj is ScheduleTrackPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isScheduleTrackPayload"')
      return ScheduleTrackPayload_possibleTypes.includes(obj.__typename)
    }
    


    const StartHostedActivitySessionPayload_possibleTypes: string[] = ['StartHostedActivitySessionPayload']
    export const isStartHostedActivitySessionPayload = (obj?: { __typename?: any } | null): obj is StartHostedActivitySessionPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStartHostedActivitySessionPayload"')
      return StartHostedActivitySessionPayload_possibleTypes.includes(obj.__typename)
    }
    


    const StartHostedPathwaySessionFromLinkPayload_possibleTypes: string[] = ['StartHostedPathwaySessionFromLinkPayload']
    export const isStartHostedPathwaySessionFromLinkPayload = (obj?: { __typename?: any } | null): obj is StartHostedPathwaySessionFromLinkPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStartHostedPathwaySessionFromLinkPayload"')
      return StartHostedPathwaySessionFromLinkPayload_possibleTypes.includes(obj.__typename)
    }
    


    const StartHostedPathwaySessionPayload_possibleTypes: string[] = ['StartHostedPathwaySessionPayload']
    export const isStartHostedPathwaySessionPayload = (obj?: { __typename?: any } | null): obj is StartHostedPathwaySessionPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStartHostedPathwaySessionPayload"')
      return StartHostedPathwaySessionPayload_possibleTypes.includes(obj.__typename)
    }
    


    const StartPathwayPayload_possibleTypes: string[] = ['StartPathwayPayload']
    export const isStartPathwayPayload = (obj?: { __typename?: any } | null): obj is StartPathwayPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStartPathwayPayload"')
      return StartPathwayPayload_possibleTypes.includes(obj.__typename)
    }
    


    const StartPathwayWithPatientIdentifierPayload_possibleTypes: string[] = ['StartPathwayWithPatientIdentifierPayload']
    export const isStartPathwayWithPatientIdentifierPayload = (obj?: { __typename?: any } | null): obj is StartPathwayWithPatientIdentifierPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStartPathwayWithPatientIdentifierPayload"')
      return StartPathwayWithPatientIdentifierPayload_possibleTypes.includes(obj.__typename)
    }
    


    const StopTrackPayload_possibleTypes: string[] = ['StopTrackPayload']
    export const isStopTrackPayload = (obj?: { __typename?: any } | null): obj is StopTrackPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStopTrackPayload"')
      return StopTrackPayload_possibleTypes.includes(obj.__typename)
    }
    


    const SubmitChecklistPayload_possibleTypes: string[] = ['SubmitChecklistPayload']
    export const isSubmitChecklistPayload = (obj?: { __typename?: any } | null): obj is SubmitChecklistPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSubmitChecklistPayload"')
      return SubmitChecklistPayload_possibleTypes.includes(obj.__typename)
    }
    


    const SubmitFormResponsePayload_possibleTypes: string[] = ['SubmitFormResponsePayload']
    export const isSubmitFormResponsePayload = (obj?: { __typename?: any } | null): obj is SubmitFormResponsePayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSubmitFormResponsePayload"')
      return SubmitFormResponsePayload_possibleTypes.includes(obj.__typename)
    }
    


    const UpdatePatientPayload_possibleTypes: string[] = ['UpdatePatientPayload']
    export const isUpdatePatientPayload = (obj?: { __typename?: any } | null): obj is UpdatePatientPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUpdatePatientPayload"')
      return UpdatePatientPayload_possibleTypes.includes(obj.__typename)
    }
    


    const UpdatePatientDemographicsQueryPayload_possibleTypes: string[] = ['UpdatePatientDemographicsQueryPayload']
    export const isUpdatePatientDemographicsQueryPayload = (obj?: { __typename?: any } | null): obj is UpdatePatientDemographicsQueryPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUpdatePatientDemographicsQueryPayload"')
      return UpdatePatientDemographicsQueryPayload_possibleTypes.includes(obj.__typename)
    }
    


    const UpdatePatientLanguagePayload_possibleTypes: string[] = ['UpdatePatientLanguagePayload']
    export const isUpdatePatientLanguagePayload = (obj?: { __typename?: any } | null): obj is UpdatePatientLanguagePayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUpdatePatientLanguagePayload"')
      return UpdatePatientLanguagePayload_possibleTypes.includes(obj.__typename)
    }
    


    const Subscription_possibleTypes: string[] = ['Subscription']
    export const isSubscription = (obj?: { __typename?: any } | null): obj is Subscription => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSubscription"')
      return Subscription_possibleTypes.includes(obj.__typename)
    }
    

export const enumPathwayStatus = {
   starting: 'starting' as const,
   active: 'active' as const,
   stopped: 'stopped' as const,
   completed: 'completed' as const,
   missing_baseline_info: 'missing_baseline_info' as const
}

export const enumDataPointSourceType = {
   PATHWAY: 'PATHWAY' as const,
   STEP: 'STEP' as const,
   TRACK: 'TRACK' as const,
   FORM: 'FORM' as const,
   CALCULATION: 'CALCULATION' as const,
   PATIENT_PROFILE: 'PATIENT_PROFILE' as const,
   PATIENT_IDENTIFIER: 'PATIENT_IDENTIFIER' as const,
   API_CALL: 'API_CALL' as const,
   API_CALL_STATUS: 'API_CALL_STATUS' as const,
   EXTENSION_WEBHOOK: 'EXTENSION_WEBHOOK' as const,
   EXTENSION_ACTION: 'EXTENSION_ACTION' as const,
   DATA_POINT: 'DATA_POINT' as const
}

export const enumDataPointValueType = {
   BOOLEAN: 'BOOLEAN' as const,
   DATE: 'DATE' as const,
   NUMBER: 'NUMBER' as const,
   STRING: 'STRING' as const,
   NUMBERS_ARRAY: 'NUMBERS_ARRAY' as const,
   STRINGS_ARRAY: 'STRINGS_ARRAY' as const,
   TELEPHONE: 'TELEPHONE' as const,
   JSON: 'JSON' as const
}

export const enumActivitySubjectType = {
   AWELL: 'AWELL' as const,
   STAKEHOLDER: 'STAKEHOLDER' as const,
   USER: 'USER' as const,
   PLUGIN: 'PLUGIN' as const,
   API_CALL: 'API_CALL' as const
}

export const enumActivityAction = {
   ADDED: 'ADDED' as const,
   ACTIVATE: 'ACTIVATE' as const,
   COMPLETE: 'COMPLETE' as const,
   DISCARDED: 'DISCARDED' as const,
   SEND: 'SEND' as const,
   REMIND: 'REMIND' as const,
   DELIVER: 'DELIVER' as const,
   COMPUTED: 'COMPUTED' as const,
   FAILED: 'FAILED' as const,
   FAILED_TO_SEND: 'FAILED_TO_SEND' as const,
   SUBMITTED: 'SUBMITTED' as const,
   ASSIGNED: 'ASSIGNED' as const,
   READ: 'READ' as const,
   STOPPED: 'STOPPED' as const,
   PROCESSED: 'PROCESSED' as const,
   SCHEDULED: 'SCHEDULED' as const,
   IS_WAITING_ON: 'IS_WAITING_ON' as const,
   POSTPONED: 'POSTPONED' as const,
   DELEGATED: 'DELEGATED' as const,
   GENERATED: 'GENERATED' as const,
   SKIPPED: 'SKIPPED' as const,
   REPORTED: 'REPORTED' as const,
   EXPIRED: 'EXPIRED' as const
}

export const enumActivityObjectType = {
   ACTION: 'ACTION' as const,
   API_CALL: 'API_CALL' as const,
   CALCULATION: 'CALCULATION' as const,
   CHECKLIST: 'CHECKLIST' as const,
   CLINICAL_NOTE: 'CLINICAL_NOTE' as const,
   EVALUATED_RULE: 'EVALUATED_RULE' as const,
   EMR_REPORT: 'EMR_REPORT' as const,
   FORM: 'FORM' as const,
   MESSAGE: 'MESSAGE' as const,
   PATHWAY: 'PATHWAY' as const,
   PATIENT: 'PATIENT' as const,
   REMINDER: 'REMINDER' as const,
   STAKEHOLDER: 'STAKEHOLDER' as const,
   STEP: 'STEP' as const,
   USER: 'USER' as const,
   EMR_REQUEST: 'EMR_REQUEST' as const,
   TRACK: 'TRACK' as const,
   PLUGIN: 'PLUGIN' as const,
   PLUGIN_ACTION: 'PLUGIN_ACTION' as const
}

export const enumActivityStatus = {
   ACTIVE: 'ACTIVE' as const,
   DONE: 'DONE' as const,
   FAILED: 'FAILED' as const,
   CANCELED: 'CANCELED' as const,
   EXPIRED: 'EXPIRED' as const
}

export const enumActivityResolution = {
   FAILURE: 'FAILURE' as const,
   SUCCESS: 'SUCCESS' as const,
   EXPIRED: 'EXPIRED' as const
}

export const enumFormDisplayMode = {
   CONVERSATIONAL: 'CONVERSATIONAL' as const,
   REGULAR: 'REGULAR' as const
}

export const enumQuestionType = {
   MULTIPLE_CHOICE: 'MULTIPLE_CHOICE' as const,
   INPUT: 'INPUT' as const,
   NO_INPUT: 'NO_INPUT' as const
}

export const enumUserQuestionType = {
   MULTIPLE_SELECT: 'MULTIPLE_SELECT' as const,
   MULTIPLE_CHOICE: 'MULTIPLE_CHOICE' as const,
   NUMBER: 'NUMBER' as const,
   YES_NO: 'YES_NO' as const,
   DATE: 'DATE' as const,
   SHORT_TEXT: 'SHORT_TEXT' as const,
   LONG_TEXT: 'LONG_TEXT' as const,
   SLIDER: 'SLIDER' as const,
   DESCRIPTION: 'DESCRIPTION' as const,
   MULTIPLE_CHOICE_GRID: 'MULTIPLE_CHOICE_GRID' as const,
   SIGNATURE: 'SIGNATURE' as const,
   TELEPHONE: 'TELEPHONE' as const
}

export const enumAllowedDatesOptions = {
   PAST: 'PAST' as const,
   FUTURE: 'FUTURE' as const,
   ALL: 'ALL' as const
}

export const enumBooleanOperator = {
   AND: 'AND' as const,
   OR: 'OR' as const
}

export const enumConditionOperator = {
   IS_EQUAL_TO: 'IS_EQUAL_TO' as const,
   IS_NOT_EQUAL_TO: 'IS_NOT_EQUAL_TO' as const,
   IS_GREATER_THAN: 'IS_GREATER_THAN' as const,
   IS_LESS_THAN: 'IS_LESS_THAN' as const,
   IS_GREATER_THAN_OR_EQUAL_TO: 'IS_GREATER_THAN_OR_EQUAL_TO' as const,
   IS_LESS_THAN_OR_EQUAL_TO: 'IS_LESS_THAN_OR_EQUAL_TO' as const,
   CONTAINS: 'CONTAINS' as const,
   DOES_NOT_CONTAIN: 'DOES_NOT_CONTAIN' as const,
   IS_TRUE: 'IS_TRUE' as const,
   IS_NOT_TRUE: 'IS_NOT_TRUE' as const,
   IS_IN_RANGE: 'IS_IN_RANGE' as const,
   IS_ANY_OF: 'IS_ANY_OF' as const,
   IS_NONE_OF: 'IS_NONE_OF' as const,
   IS_EMPTY: 'IS_EMPTY' as const,
   IS_NOT_EMPTY: 'IS_NOT_EMPTY' as const,
   IS_TODAY: 'IS_TODAY' as const
}

export const enumConditionOperandType = {
   DATA_SOURCE: 'DATA_SOURCE' as const,
   STRING: 'STRING' as const,
   NUMBER: 'NUMBER' as const,
   BOOLEAN: 'BOOLEAN' as const,
   NUMBERS_ARRAY: 'NUMBERS_ARRAY' as const,
   STRINGS_ARRAY: 'STRINGS_ARRAY' as const,
   DATA_POINT: 'DATA_POINT' as const
}

export const enumApiCallRequestMethod = {
   GET: 'GET' as const,
   POST: 'POST' as const
}

export const enumApiCallStatus = {
   InProgress: 'InProgress' as const,
   Failed: 'Failed' as const,
   PermanentlyFailed: 'PermanentlyFailed' as const,
   Success: 'Success' as const,
   Skipped: 'Skipped' as const,
   Pending: 'Pending' as const
}

export const enumElementType = {
   PATHWAY: 'PATHWAY' as const,
   TRACK: 'TRACK' as const,
   STEP: 'STEP' as const,
   ACTION: 'ACTION' as const,
   TRIGGER: 'TRIGGER' as const
}

export const enumActionType = {
   API_CALL: 'API_CALL' as const,
   API_CALL_GRAPHQL: 'API_CALL_GRAPHQL' as const,
   CALCULATION: 'CALCULATION' as const,
   CHECKLIST: 'CHECKLIST' as const,
   CLINICAL_NOTE: 'CLINICAL_NOTE' as const,
   FORM: 'FORM' as const,
   MESSAGE: 'MESSAGE' as const,
   PUSH_TO_EMR: 'PUSH_TO_EMR' as const,
   PLUGIN: 'PLUGIN' as const
}

export const enumElementStatus = {
   ACTIVE: 'ACTIVE' as const,
   DONE: 'DONE' as const,
   SCHEDULED: 'SCHEDULED' as const,
   STOPPED: 'STOPPED' as const,
   DISCARDED: 'DISCARDED' as const,
   POSTPONED: 'POSTPONED' as const
}

export const enumExtensionActionFieldType = {
   HTML: 'HTML' as const,
   JSON: 'JSON' as const,
   STRING: 'STRING' as const,
   TEXT: 'TEXT' as const,
   NUMERIC: 'NUMERIC' as const,
   BOOLEAN: 'BOOLEAN' as const,
   DATE: 'DATE' as const,
   NUMERIC_ARRAY: 'NUMERIC_ARRAY' as const,
   STRING_ARRAY: 'STRING_ARRAY' as const
}

export const enumHostedSessionStatus = {
   ACTIVE: 'ACTIVE' as const,
   EXPIRED: 'EXPIRED' as const,
   COMPLETED: 'COMPLETED' as const
}

export const enumHostedSessionStakeholderType = {
   PATIENT: 'PATIENT' as const,
   STAKEHOLDER: 'STAKEHOLDER' as const
}

export const enumMessageFormat = {
   SLATE: 'SLATE' as const,
   HTML: 'HTML' as const
}

export const enumMessageAttachmentType = {
   FILE: 'FILE' as const,
   VIDEO: 'VIDEO' as const,
   LINK: 'LINK' as const
}

export const enumSwimlaneItemCategory = {
   ACTION: 'ACTION' as const,
   STEP: 'STEP' as const,
   TRACK: 'TRACK' as const,
   TRACK_START: 'TRACK_START' as const,
   TRACK_END: 'TRACK_END' as const,
   PATHWAY_START: 'PATHWAY_START' as const,
   PATHWAY_END: 'PATHWAY_END' as const
}

export const enumSwimlaneItemType = {
   active: 'active' as const,
   completed: 'completed' as const,
   pending: 'pending' as const,
   possible: 'possible' as const
}

export const enumSex = {
   NOT_KNOWN: 'NOT_KNOWN' as const,
   MALE: 'MALE' as const,
   FEMALE: 'FEMALE' as const
}

export const enumStakeholderClinicalAppRole = {
   PATIENT: 'PATIENT' as const,
   PHYSICIAN: 'PHYSICIAN' as const,
   CAREGIVER: 'CAREGIVER' as const
}
