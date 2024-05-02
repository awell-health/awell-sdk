export default {
    "scalars": [
        3,
        4,
        6,
        9,
        10,
        13,
        14,
        24,
        28,
        29,
        31,
        32,
        33,
        39,
        43,
        44,
        54,
        56,
        58,
        60,
        71,
        74,
        87,
        88,
        89,
        97,
        107,
        109,
        113,
        115,
        124,
        128,
        129,
        136,
        160
    ],
    "types": {
        "Query": {
            "scheduledTracksForPathway": [
                1,
                {
                    "pathway_id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "patientPathways": [
                7,
                {
                    "patient_id": [
                        3,
                        "String!"
                    ],
                    "filters": [
                        18
                    ]
                }
            ],
            "baselineInfo": [
                20,
                {
                    "pathway_id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "myPendingActivities": [
                21
            ],
            "myActivities": [
                21,
                {
                    "pagination": [
                        64
                    ],
                    "sorting": [
                        65
                    ],
                    "pathway_id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "pathwayActivities": [
                21,
                {
                    "pagination": [
                        64
                    ],
                    "sorting": [
                        65
                    ],
                    "pathway_id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "activities": [
                21,
                {
                    "pagination": [
                        64
                    ],
                    "sorting": [
                        65
                    ],
                    "filters": [
                        66
                    ]
                }
            ],
            "pathwayStepActivities": [
                21,
                {
                    "pathway_id": [
                        3,
                        "String!"
                    ],
                    "step_id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "apiCall": [
                68,
                {
                    "id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "apiCalls": [
                75,
                {
                    "pathway_id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "calculationAction": [
                76,
                {
                    "id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "calculationResults": [
                77,
                {
                    "pathway_id": [
                        3,
                        "String!"
                    ],
                    "activity_id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "checklist": [
                79,
                {
                    "id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "clinicalNote": [
                81,
                {
                    "id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "pathwayElements": [
                85,
                {
                    "pathway_id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "emrReport": [
                91,
                {
                    "id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "extensionActivityRecord": [
                94,
                {
                    "id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "form": [
                100,
                {
                    "id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "forms": [
                101,
                {
                    "pathway_definition_id": [
                        3,
                        "String!"
                    ],
                    "release_id": [
                        3
                    ]
                }
            ],
            "formResponse": [
                102,
                {
                    "pathway_id": [
                        3,
                        "String!"
                    ],
                    "activity_id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "hostedSessionActivities": [
                104,
                {
                    "only_stakeholder_activities": [
                        4
                    ]
                }
            ],
            "hostedSession": [
                105
            ],
            "message": [
                111,
                {
                    "id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "pathwayFacts": [
                116,
                {
                    "pagination": [
                        64
                    ],
                    "sorting": [
                        65
                    ],
                    "filters": [
                        118,
                        "PathwayFactsFilters!"
                    ]
                }
            ],
            "pathwayDataPointDefinitions": [
                120,
                {
                    "pathway_definition_id": [
                        3
                    ],
                    "release_id": [
                        3,
                        "String!"
                    ],
                    "filters": [
                        121
                    ]
                }
            ],
            "pathway": [
                122,
                {
                    "id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "myPathways": [
                139
            ],
            "pathways": [
                139,
                {
                    "pagination": [
                        64
                    ],
                    "sorting": [
                        65
                    ],
                    "filters": [
                        141
                    ]
                }
            ],
            "patientDemographicsQueryConfiguration": [
                144
            ],
            "patient": [
                145,
                {
                    "id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "patients": [
                146,
                {
                    "pagination": [
                        64
                    ],
                    "sorting": [
                        65
                    ],
                    "filters": [
                        147
                    ]
                }
            ],
            "patientByIdentifier": [
                145,
                {
                    "system": [
                        3,
                        "String!"
                    ],
                    "value": [
                        3,
                        "String!"
                    ]
                }
            ],
            "publishedPathwayDefinitions": [
                150
            ],
            "publishedPathwayDefinitionsDashboard": [
                150,
                {
                    "pagination": [
                        64
                    ],
                    "sorting": [
                        65
                    ],
                    "filters": [
                        154
                    ]
                }
            ],
            "getStatusForPublishedPathwayDefinitions": [
                150
            ],
            "scheduledSteps": [
                155,
                {
                    "pathway_id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "searchPatientsByPatientCode": [
                156,
                {
                    "patient_code": [
                        3,
                        "String!"
                    ]
                }
            ],
            "searchPatientsByNationalRegistryNumber": [
                156,
                {
                    "national_registry_number": [
                        3,
                        "String!"
                    ]
                }
            ],
            "filterStakeholders": [
                157,
                {
                    "pathway_definition_ids": [
                        3,
                        "[String!]"
                    ],
                    "release_ids": [
                        3,
                        "[String!]"
                    ],
                    "stakeholder_definition_ids": [
                        3,
                        "[String!]"
                    ]
                }
            ],
            "stakeholdersByPathwayDefinitionIds": [
                157,
                {
                    "pathway_definition_ids": [
                        3,
                        "[String!]!"
                    ]
                }
            ],
            "stakeholdersByReleaseIds": [
                157,
                {
                    "release_ids": [
                        3,
                        "[String!]!"
                    ]
                }
            ],
            "stakeholdersByDefinitionIds": [
                157,
                {
                    "stakeholder_definition_ids": [
                        3,
                        "[String!]!"
                    ]
                }
            ],
            "adHocTracksByPathway": [
                161,
                {
                    "pathway_id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "adHocTracksByRelease": [
                161,
                {
                    "release_id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "whoami": [
                162
            ],
            "webhookCall": [
                166,
                {
                    "webhook_call_id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "webhookCalls": [
                172,
                {
                    "pathway_id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "webhookCallsForTenant": [
                172
            ],
            "webhookCallsForPathwayDefinition": [
                172,
                {
                    "pathway_definition_id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "getOrchestrationFactsFromPrompt": [
                173,
                {
                    "pathway_id": [
                        3,
                        "String!"
                    ],
                    "prompt": [
                        3,
                        "String!"
                    ]
                }
            ],
            "hostedPagesLink": [
                174,
                {
                    "pathway_id": [
                        3,
                        "String!"
                    ],
                    "stakeholder_id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                3
            ]
        },
        "ScheduledTracksPayload": {
            "code": [
                3
            ],
            "success": [
                4
            ],
            "scheduled_tracks": [
                5
            ],
            "__typename": [
                3
            ]
        },
        "Payload": {
            "code": [
                3
            ],
            "success": [
                4
            ],
            "on_ScheduledTracksPayload": [
                1
            ],
            "on_PatientPathwaysPayload": [
                7
            ],
            "on_BaselineInfoPayload": [
                20
            ],
            "on_ApiCallPayload": [
                68
            ],
            "on_ApiCallsPayload": [
                75
            ],
            "on_ActionPayload": [
                76
            ],
            "on_CalculationResultsPayload": [
                77
            ],
            "on_ChecklistPayload": [
                79
            ],
            "on_ClinicalNotePayload": [
                81
            ],
            "on_ElementsPayload": [
                85
            ],
            "on_EmrReportPayload": [
                91
            ],
            "on_ExtensionActivityRecordPayload": [
                94
            ],
            "on_FormPayload": [
                100
            ],
            "on_FormsPayload": [
                101
            ],
            "on_FormResponsePayload": [
                102
            ],
            "on_HostedSessionActivitiesPayload": [
                104
            ],
            "on_HostedSessionPayload": [
                105
            ],
            "on_MessagePayload": [
                111
            ],
            "on_PathwayDataPointDefinitionsPayload": [
                120
            ],
            "on_PathwayPayload": [
                122
            ],
            "on_PatientPayload": [
                145
            ],
            "on_ScheduledStepsPayload": [
                155
            ],
            "on_SearchPatientsPayload": [
                156
            ],
            "on_StakeholdersPayload": [
                157
            ],
            "on_TracksPayload": [
                161
            ],
            "on_CurrentUserPayload": [
                162
            ],
            "on_WebhookCallPayload": [
                166
            ],
            "on_WebhookCallsPayload": [
                172
            ],
            "on_OrchestrationFactsPromptPayload": [
                173
            ],
            "on_HostedPagesLinkPayload": [
                174
            ],
            "on_AddIdentifierToPatientPayload": [
                177
            ],
            "on_AddTrackPayload": [
                180
            ],
            "on_CancelScheduledTracksPayload": [
                182
            ],
            "on_CompleteExtensionActivityPayload": [
                184
            ],
            "on_CreatePatientPayload": [
                187
            ],
            "on_EmptyPayload": [
                191
            ],
            "on_EvaluateFormRulesPayload": [
                194
            ],
            "on_MarkMessageAsReadPayload": [
                198
            ],
            "on_PatientDemographicsPayload": [
                200
            ],
            "on_RetryApiCallPayload": [
                208
            ],
            "on_RetryWebhookCallPayload": [
                211
            ],
            "on_ScheduleTrackPayload": [
                215
            ],
            "on_StartHostedActivitySessionPayload": [
                217
            ],
            "on_StartHostedPathwaySessionFromLinkPayload": [
                219
            ],
            "on_StartHostedPathwaySessionPayload": [
                222
            ],
            "on_StartPathwayPayload": [
                225
            ],
            "on_StartPathwayWithPatientIdentifierPayload": [
                227
            ],
            "on_StopTrackPayload": [
                230
            ],
            "on_SubmitChecklistPayload": [
                232
            ],
            "on_SubmitFormResponsePayload": [
                234
            ],
            "on_UpdatePatientPayload": [
                238
            ],
            "on_UpdatePatientDemographicsQueryPayload": [
                241
            ],
            "on_UpdatePatientLanguagePayload": [
                243
            ],
            "__typename": [
                3
            ]
        },
        "String": {},
        "Boolean": {},
        "ScheduledTrack": {
            "id": [
                6
            ],
            "pathway_id": [
                3
            ],
            "track_definition_id": [
                3
            ],
            "release_id": [
                3
            ],
            "tenant_id": [
                3
            ],
            "created_by_user_id": [
                3
            ],
            "created_date": [
                3
            ],
            "modified_date": [
                3
            ],
            "scheduled_date": [
                3
            ],
            "status": [
                3
            ],
            "title": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "ID": {},
        "PatientPathwaysPayload": {
            "code": [
                3
            ],
            "success": [
                4
            ],
            "patientPathways": [
                8
            ],
            "__typename": [
                3
            ]
        },
        "PatientPathway": {
            "id": [
                6
            ],
            "title": [
                3
            ],
            "status": [
                9
            ],
            "status_explanation": [
                3
            ],
            "pathway_definition_id": [
                3
            ],
            "complete_date": [
                3
            ],
            "stop_date": [
                3
            ],
            "release_id": [
                3
            ],
            "version": [
                10
            ],
            "total_activities": [
                10
            ],
            "active_activities": [
                10
            ],
            "failed_activities": [
                10
            ],
            "latest_activity_date": [
                3
            ],
            "latest_activity_title": [
                3
            ],
            "latest_activity_type": [
                3
            ],
            "baseline_info": [
                11
            ],
            "__typename": [
                3
            ]
        },
        "PathwayStatus": {},
        "Float": {},
        "BaselineDataPoint": {
            "definition": [
                12
            ],
            "value": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "DataPointDefinition": {
            "id": [
                6
            ],
            "key": [
                3
            ],
            "title": [
                3
            ],
            "category": [
                13
            ],
            "valueType": [
                14
            ],
            "source_definition_id": [
                3
            ],
            "possibleValues": [
                15
            ],
            "range": [
                16
            ],
            "unit": [
                3
            ],
            "optional": [
                4
            ],
            "pii": [
                4
            ],
            "metadata": [
                17
            ],
            "__typename": [
                3
            ]
        },
        "DataPointSourceType": {},
        "DataPointValueType": {},
        "DataPointPossibleValue": {
            "value": [
                3
            ],
            "label": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "Range": {
            "min": [
                10
            ],
            "max": [
                10
            ],
            "__typename": [
                3
            ]
        },
        "DataPointMetaDataItem": {
            "value": [
                3
            ],
            "key": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "FilterPatientPathways": {
            "status": [
                19
            ],
            "__typename": [
                3
            ]
        },
        "StringArrayFilter": {
            "in": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "BaselineInfoPayload": {
            "code": [
                3
            ],
            "success": [
                4
            ],
            "baselineDataPoints": [
                11
            ],
            "__typename": [
                3
            ]
        },
        "ActivitiesPayload": {
            "code": [
                3
            ],
            "success": [
                4
            ],
            "pagination": [
                23
            ],
            "sorting": [
                25
            ],
            "activities": [
                26
            ],
            "metadata": [
                63
            ],
            "__typename": [
                3
            ]
        },
        "PaginationAndSortingPayload": {
            "code": [
                3
            ],
            "success": [
                4
            ],
            "pagination": [
                23
            ],
            "sorting": [
                25
            ],
            "on_ActivitiesPayload": [
                21
            ],
            "on_OrchestrationFactsPayload": [
                116
            ],
            "on_PathwaysPayload": [
                139
            ],
            "on_PatientsPayload": [
                146
            ],
            "on_PublishedPathwayDefinitionsPayload": [
                150
            ],
            "__typename": [
                3
            ]
        },
        "PaginationOutput": {
            "offset": [
                24
            ],
            "count": [
                24
            ],
            "total_count": [
                24
            ],
            "__typename": [
                3
            ]
        },
        "Int": {},
        "SortingOutput": {
            "field": [
                3
            ],
            "direction": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "Activity": {
            "id": [
                6
            ],
            "stream_id": [
                3
            ],
            "date": [
                3
            ],
            "subject": [
                27
            ],
            "action": [
                29
            ],
            "object": [
                30
            ],
            "indirect_object": [
                30
            ],
            "status": [
                32
            ],
            "resolution": [
                33
            ],
            "reference_id": [
                3
            ],
            "container_name": [
                3
            ],
            "track": [
                34
            ],
            "label": [
                35
            ],
            "sub_activities": [
                36
            ],
            "isUserActivity": [
                4
            ],
            "public": [
                4
            ],
            "context": [
                38
            ],
            "session_id": [
                3
            ],
            "stakeholders": [
                30
            ],
            "icon_url": [
                3
            ],
            "form_display_mode": [
                39
            ],
            "form": [
                40
            ],
            "__typename": [
                3
            ]
        },
        "ActivitySubject": {
            "id": [
                3
            ],
            "type": [
                28
            ],
            "name": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "ActivitySubjectType": {},
        "ActivityAction": {},
        "ActivityObject": {
            "type": [
                31
            ],
            "id": [
                3
            ],
            "name": [
                3
            ],
            "email": [
                3
            ],
            "preferred_language": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "ActivityObjectType": {},
        "ActivityStatus": {},
        "ActivityResolution": {},
        "ActivityTrack": {
            "id": [
                3
            ],
            "title": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "ActivityLabel": {
            "id": [
                3
            ],
            "color": [
                3
            ],
            "text": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "SubActivity": {
            "id": [
                3
            ],
            "date": [
                3
            ],
            "subject": [
                27
            ],
            "action": [
                29
            ],
            "error": [
                3
            ],
            "error_category": [
                3
            ],
            "object": [
                30
            ],
            "text": [
                37
            ],
            "__typename": [
                3
            ]
        },
        "TranslatedText": {
            "en": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "PathwayContext": {
            "instance_id": [
                3
            ],
            "pathway_id": [
                3
            ],
            "track_id": [
                3
            ],
            "step_id": [
                3
            ],
            "action_id": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "FormDisplayMode": {},
        "Form": {
            "release_id": [
                3
            ],
            "key": [
                3
            ],
            "definition_id": [
                3
            ],
            "id": [
                6
            ],
            "title": [
                3
            ],
            "trademark": [
                3
            ],
            "metadata": [
                3
            ],
            "questions": [
                41
            ],
            "previous_answers": [
                61,
                {
                    "pathway_id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                3
            ]
        },
        "Question": {
            "key": [
                3
            ],
            "id": [
                6
            ],
            "definition_id": [
                3
            ],
            "title": [
                3
            ],
            "dataPointValueType": [
                14
            ],
            "options": [
                42
            ],
            "questionType": [
                43
            ],
            "userQuestionType": [
                44
            ],
            "questionConfig": [
                45
            ],
            "rule": [
                55
            ],
            "metadata": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "Option": {
            "id": [
                6
            ],
            "value": [
                10
            ],
            "value_string": [
                3
            ],
            "label": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "QuestionType": {},
        "UserQuestionType": {},
        "QuestionConfig": {
            "recode_enabled": [
                4
            ],
            "mandatory": [
                4
            ],
            "use_select": [
                4
            ],
            "slider": [
                46
            ],
            "phone": [
                47
            ],
            "number": [
                48
            ],
            "multiple_select": [
                50
            ],
            "date": [
                53
            ],
            "__typename": [
                3
            ]
        },
        "SliderConfig": {
            "min": [
                10
            ],
            "max": [
                10
            ],
            "step_value": [
                10
            ],
            "min_label": [
                3
            ],
            "max_label": [
                3
            ],
            "is_value_tooltip_on": [
                4
            ],
            "display_marks": [
                4
            ],
            "show_min_max_values": [
                4
            ],
            "__typename": [
                3
            ]
        },
        "PhoneConfig": {
            "default_country": [
                3
            ],
            "available_countries": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "NumberConfig": {
            "range": [
                49
            ],
            "__typename": [
                3
            ]
        },
        "RangeConfig": {
            "min": [
                10
            ],
            "max": [
                10
            ],
            "enabled": [
                4
            ],
            "__typename": [
                3
            ]
        },
        "MultipleSelectConfig": {
            "range": [
                51
            ],
            "exclusive_option": [
                52
            ],
            "__typename": [
                3
            ]
        },
        "ChoiceRangeConfig": {
            "enabled": [
                4
            ],
            "min": [
                10
            ],
            "max": [
                10
            ],
            "__typename": [
                3
            ]
        },
        "ExclusiveOptionConfig": {
            "enabled": [
                4
            ],
            "option_id": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "DateConfig": {
            "allowed_dates": [
                54
            ],
            "include_date_of_response": [
                4
            ],
            "__typename": [
                3
            ]
        },
        "AllowedDatesOptions": {},
        "Rule": {
            "id": [
                6
            ],
            "definition_id": [
                3
            ],
            "boolean_operator": [
                56
            ],
            "conditions": [
                57
            ],
            "__typename": [
                3
            ]
        },
        "BooleanOperator": {},
        "Condition": {
            "id": [
                6
            ],
            "reference": [
                3
            ],
            "reference_key": [
                3
            ],
            "operator": [
                58
            ],
            "operand": [
                59
            ],
            "__typename": [
                3
            ]
        },
        "ConditionOperator": {},
        "Operand": {
            "type": [
                60
            ],
            "value": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "ConditionOperandType": {},
        "PreviousAnswers": {
            "activity_id": [
                6
            ],
            "date": [
                3
            ],
            "answers": [
                62
            ],
            "__typename": [
                3
            ]
        },
        "Answer": {
            "question_id": [
                3
            ],
            "value": [
                3
            ],
            "label": [
                3
            ],
            "value_type": [
                14
            ],
            "__typename": [
                3
            ]
        },
        "ActivityMetadata": {
            "stakeholders": [
                30
            ],
            "__typename": [
                3
            ]
        },
        "PaginationParams": {
            "offset": [
                24
            ],
            "count": [
                24
            ],
            "__typename": [
                3
            ]
        },
        "SortingParams": {
            "field": [
                3
            ],
            "direction": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "FilterActivitiesParams": {
            "action": [
                19
            ],
            "activity_status": [
                19
            ],
            "pathway_definition_id": [
                19
            ],
            "patient_id": [
                67
            ],
            "activity_type": [
                19
            ],
            "stakeholders": [
                19
            ],
            "pathway_status": [
                19
            ],
            "__typename": [
                3
            ]
        },
        "TextFilterEquals": {
            "eq": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "ApiCallPayload": {
            "code": [
                3
            ],
            "success": [
                4
            ],
            "api_call": [
                69
            ],
            "__typename": [
                3
            ]
        },
        "ApiCall": {
            "id": [
                6
            ],
            "request": [
                70
            ],
            "responses": [
                73
            ],
            "created_at": [
                3
            ],
            "status": [
                74
            ],
            "title": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "ApiCallRequest": {
            "method": [
                71
            ],
            "endpoint": [
                3
            ],
            "headers": [
                72
            ],
            "body": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "ApiCallRequestMethod": {},
        "ApiCallHeader": {
            "key": [
                3
            ],
            "value": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "ApiCallResponse": {
            "status": [
                10
            ],
            "body": [
                3
            ],
            "date": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "ApiCallStatus": {},
        "ApiCallsPayload": {
            "code": [
                3
            ],
            "success": [
                4
            ],
            "api_calls": [
                69
            ],
            "__typename": [
                3
            ]
        },
        "ActionPayload": {
            "code": [
                3
            ],
            "success": [
                4
            ],
            "calculationId": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "CalculationResultsPayload": {
            "code": [
                3
            ],
            "success": [
                4
            ],
            "result": [
                78
            ],
            "__typename": [
                3
            ]
        },
        "SingleCalculationResult": {
            "subresult_id": [
                3
            ],
            "value": [
                3
            ],
            "value_type": [
                14
            ],
            "unit": [
                3
            ],
            "status": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "ChecklistPayload": {
            "code": [
                3
            ],
            "success": [
                4
            ],
            "checklist": [
                80
            ],
            "__typename": [
                3
            ]
        },
        "Checklist": {
            "title": [
                3
            ],
            "items": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "ClinicalNotePayload": {
            "code": [
                3
            ],
            "success": [
                4
            ],
            "clinical_note": [
                82
            ],
            "__typename": [
                3
            ]
        },
        "GeneratedClinicalNote": {
            "id": [
                6
            ],
            "narratives": [
                83
            ],
            "context": [
                84
            ],
            "__typename": [
                3
            ]
        },
        "GeneratedClinicalNoteNarrative": {
            "id": [
                6
            ],
            "key": [
                3
            ],
            "title": [
                3
            ],
            "body": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "GeneratedClinicalNoteContextField": {
            "key": [
                3
            ],
            "value": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "ElementsPayload": {
            "code": [
                3
            ],
            "success": [
                4
            ],
            "elements": [
                86
            ],
            "__typename": [
                3
            ]
        },
        "Element": {
            "id": [
                6
            ],
            "parent_id": [
                6
            ],
            "name": [
                3
            ],
            "type": [
                87
            ],
            "start_date": [
                3
            ],
            "end_date": [
                3
            ],
            "label": [
                35
            ],
            "activity_type": [
                88
            ],
            "status": [
                89
            ],
            "context": [
                38
            ],
            "stakeholders": [
                90
            ],
            "__typename": [
                3
            ]
        },
        "ElementType": {},
        "ActionType": {},
        "ElementStatus": {},
        "ElementStakeholder": {
            "id": [
                6
            ],
            "name": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "EmrReportPayload": {
            "code": [
                3
            ],
            "success": [
                4
            ],
            "report": [
                92
            ],
            "__typename": [
                3
            ]
        },
        "EmrReport": {
            "id": [
                6
            ],
            "message_html": [
                3
            ],
            "metadata": [
                93
            ],
            "__typename": [
                3
            ]
        },
        "EmrReportMetadataField": {
            "id": [
                6
            ],
            "label": [
                3
            ],
            "value": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "ExtensionActivityRecordPayload": {
            "code": [
                3
            ],
            "success": [
                4
            ],
            "record": [
                95
            ],
            "__typename": [
                3
            ]
        },
        "ExtensionActivityRecord": {
            "id": [
                6
            ],
            "activity_id": [
                3
            ],
            "pathway_id": [
                3
            ],
            "plugin_key": [
                3
            ],
            "plugin_action_key": [
                3
            ],
            "fields": [
                96
            ],
            "date": [
                3
            ],
            "settings": [
                98
            ],
            "data_points": [
                99
            ],
            "__typename": [
                3
            ]
        },
        "ExtensionActionField": {
            "id": [
                6
            ],
            "type": [
                97
            ],
            "label": [
                3
            ],
            "value": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "ExtensionActionFieldType": {},
        "PluginActionSettingsProperty": {
            "key": [
                3
            ],
            "label": [
                3
            ],
            "value": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "ExtensionDataPoint": {
            "label": [
                3
            ],
            "value": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "FormPayload": {
            "code": [
                3
            ],
            "success": [
                4
            ],
            "form": [
                40
            ],
            "__typename": [
                3
            ]
        },
        "FormsPayload": {
            "code": [
                3
            ],
            "success": [
                4
            ],
            "forms": [
                40
            ],
            "__typename": [
                3
            ]
        },
        "FormResponsePayload": {
            "code": [
                3
            ],
            "success": [
                4
            ],
            "response": [
                103
            ],
            "__typename": [
                3
            ]
        },
        "FormResponse": {
            "answers": [
                62
            ],
            "__typename": [
                3
            ]
        },
        "HostedSessionActivitiesPayload": {
            "code": [
                3
            ],
            "success": [
                4
            ],
            "activities": [
                26
            ],
            "__typename": [
                3
            ]
        },
        "HostedSessionPayload": {
            "code": [
                3
            ],
            "success": [
                4
            ],
            "session": [
                106
            ],
            "branding": [
                110
            ],
            "__typename": [
                3
            ]
        },
        "HostedSession": {
            "id": [
                6
            ],
            "pathway_id": [
                3
            ],
            "success_url": [
                3
            ],
            "cancel_url": [
                3
            ],
            "status": [
                107
            ],
            "stakeholder": [
                108
            ],
            "__typename": [
                3
            ]
        },
        "HostedSessionStatus": {},
        "HostedSessionStakeholder": {
            "id": [
                6
            ],
            "type": [
                109
            ],
            "name": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "HostedSessionStakeholderType": {},
        "BrandingSettings": {
            "accent_color": [
                3
            ],
            "logo_url": [
                3
            ],
            "hosted_page_title": [
                3
            ],
            "hosted_page_auto_progress": [
                4
            ],
            "hosted_page_autosave": [
                4
            ],
            "custom_theme": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "MessagePayload": {
            "code": [
                3
            ],
            "success": [
                4
            ],
            "message": [
                112
            ],
            "__typename": [
                3
            ]
        },
        "Message": {
            "id": [
                6
            ],
            "subject": [
                3
            ],
            "body": [
                3
            ],
            "format": [
                113
            ],
            "attachments": [
                114
            ],
            "__typename": [
                3
            ]
        },
        "MessageFormat": {},
        "MessageAttachment": {
            "id": [
                6
            ],
            "name": [
                3
            ],
            "url": [
                3
            ],
            "type": [
                115
            ],
            "__typename": [
                3
            ]
        },
        "MessageAttachmentType": {},
        "OrchestrationFactsPayload": {
            "code": [
                3
            ],
            "success": [
                4
            ],
            "pagination": [
                23
            ],
            "sorting": [
                25
            ],
            "facts": [
                117
            ],
            "__typename": [
                3
            ]
        },
        "OrchestrationFact": {
            "date": [
                3
            ],
            "level": [
                3
            ],
            "pathway_id": [
                3
            ],
            "content": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "PathwayFactsFilters": {
            "pathway_id": [
                3
            ],
            "date": [
                119
            ],
            "keyword": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "DateFilter": {
            "gte": [
                3
            ],
            "lte": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "PathwayDataPointDefinitionsPayload": {
            "code": [
                3
            ],
            "success": [
                4
            ],
            "data_point_definitions": [
                12
            ],
            "__typename": [
                3
            ]
        },
        "FilterPathwayDataPointDefinitionsParams": {
            "category": [
                19
            ],
            "value_type": [
                19
            ],
            "__typename": [
                3
            ]
        },
        "PathwayPayload": {
            "code": [
                3
            ],
            "success": [
                4
            ],
            "pathway": [
                123
            ],
            "__typename": [
                3
            ]
        },
        "Pathway": {
            "pathway_definition_id": [
                3
            ],
            "release_id": [
                3
            ],
            "id": [
                6
            ],
            "patient_id": [
                3
            ],
            "version": [
                10
            ],
            "title": [
                3
            ],
            "start_date": [
                124
            ],
            "stop_date": [
                124
            ],
            "complete_date": [
                124
            ],
            "activities": [
                26
            ],
            "latestActivities": [
                26
            ],
            "swimlanes": [
                125
            ],
            "status": [
                9
            ],
            "status_explanation": [
                3
            ],
            "tracks": [
                132
            ],
            "dashboards": [
                133
            ],
            "patient": [
                134
            ],
            "__typename": [
                3
            ]
        },
        "SafeDate": {},
        "Swimlanes": {
            "lanes": [
                126
            ],
            "items": [
                127
            ],
            "links": [
                131
            ],
            "__typename": [
                3
            ]
        },
        "Swimlane": {
            "id": [
                6
            ],
            "title": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "SwimlaneItem": {
            "id": [
                6
            ],
            "lane_id": [
                6
            ],
            "row_index": [
                10
            ],
            "column_index": [
                10
            ],
            "title": [
                3
            ],
            "info": [
                3
            ],
            "date": [
                124
            ],
            "category": [
                128
            ],
            "type": [
                129
            ],
            "documentation": [
                130
            ],
            "track_id": [
                6
            ],
            "__typename": [
                3
            ]
        },
        "SwimlaneItemCategory": {},
        "SwimlaneItemType": {},
        "FormattedText": {
            "content": [
                37
            ],
            "format": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "SwimlaneLink": {
            "id": [
                6
            ],
            "origin_id": [
                6
            ],
            "destination_id": [
                6
            ],
            "__typename": [
                3
            ]
        },
        "Track": {
            "id": [
                6
            ],
            "title": [
                3
            ],
            "release_id": [
                3
            ],
            "can_trigger_manually": [
                4
            ],
            "__typename": [
                3
            ]
        },
        "PathwayDashboard": {
            "dashboard_ids": [
                3
            ],
            "cumulio_auth_id": [
                3
            ],
            "cumulio_auth_token": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "User": {
            "id": [
                6
            ],
            "tenant_id": [
                3
            ],
            "profile": [
                135
            ],
            "__typename": [
                3
            ]
        },
        "UserProfile": {
            "email": [
                3
            ],
            "first_name": [
                3
            ],
            "last_name": [
                3
            ],
            "name": [
                3
            ],
            "birth_date": [
                3
            ],
            "preferred_language": [
                3
            ],
            "sex": [
                136
            ],
            "national_registry_number": [
                3
            ],
            "patient_code": [
                3
            ],
            "phone": [
                3
            ],
            "mobile_phone": [
                3
            ],
            "address": [
                137
            ],
            "identifier": [
                138
            ],
            "__typename": [
                3
            ]
        },
        "Sex": {},
        "Address": {
            "street": [
                3
            ],
            "city": [
                3
            ],
            "zip": [
                3
            ],
            "state": [
                3
            ],
            "country": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "Identifier": {
            "system": [
                3
            ],
            "value": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "PathwaysPayload": {
            "code": [
                3
            ],
            "success": [
                4
            ],
            "pagination": [
                23
            ],
            "sorting": [
                25
            ],
            "pathways": [
                140
            ],
            "__typename": [
                3
            ]
        },
        "PathwaySummary": {
            "pathway_definition_id": [
                3
            ],
            "id": [
                6
            ],
            "title": [
                3
            ],
            "status": [
                9
            ],
            "status_explanation": [
                3
            ],
            "patient_id": [
                3
            ],
            "start_date": [
                124
            ],
            "stop_date": [
                124
            ],
            "complete_date": [
                124
            ],
            "version": [
                10
            ],
            "__typename": [
                3
            ]
        },
        "FilterPathways": {
            "pathway_definition_id": [
                142
            ],
            "status": [
                19
            ],
            "patient_id": [
                19
            ],
            "version": [
                143
            ],
            "release_id": [
                19
            ],
            "start_date": [
                119
            ],
            "__typename": [
                3
            ]
        },
        "IdFilter": {
            "eq": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "NumberArrayFilter": {
            "in": [
                10
            ],
            "__typename": [
                3
            ]
        },
        "PatientDemographicsQueryConfigurationPayload": {
            "is_enabled": [
                4
            ],
            "input_box_text": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "PatientPayload": {
            "code": [
                3
            ],
            "success": [
                4
            ],
            "patient": [
                134
            ],
            "__typename": [
                3
            ]
        },
        "PatientsPayload": {
            "code": [
                3
            ],
            "success": [
                4
            ],
            "pagination": [
                23
            ],
            "sorting": [
                25
            ],
            "patients": [
                134
            ],
            "__typename": [
                3
            ]
        },
        "FilterPatients": {
            "profile_id": [
                19
            ],
            "patient_code": [
                67
            ],
            "national_registry_number": [
                67
            ],
            "name": [
                148
            ],
            "search": [
                149
            ],
            "__typename": [
                3
            ]
        },
        "TextFilter": {
            "eq": [
                3
            ],
            "contains": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "TextFilterContains": {
            "contains": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "PublishedPathwayDefinitionsPayload": {
            "code": [
                3
            ],
            "success": [
                4
            ],
            "pagination": [
                23
            ],
            "sorting": [
                25
            ],
            "publishedPathwayDefinitions": [
                151
            ],
            "__typename": [
                3
            ]
        },
        "PublishedPathwayDefinition": {
            "id": [
                6
            ],
            "title": [
                3
            ],
            "version": [
                10
            ],
            "release_id": [
                3
            ],
            "release_date": [
                3
            ],
            "created": [
                152
            ],
            "last_updated": [
                152
            ],
            "latest": [
                153
            ],
            "all": [
                153
            ],
            "total_activities": [
                10
            ],
            "active_activities": [
                10
            ],
            "failed_activities": [
                10
            ],
            "cancelled_activities": [
                10
            ],
            "total_stakeholders": [
                10
            ],
            "stakeholders_with_pending_activities_list": [
                3
            ],
            "total_patients": [
                10
            ],
            "patients_with_pending_activities": [
                10
            ],
            "dataPointDefinitions": [
                12
            ],
            "data_point_definitions": [
                12
            ],
            "track_definitions": [
                132
            ],
            "__typename": [
                3
            ]
        },
        "AuditTrail": {
            "user_id": [
                3
            ],
            "user_email": [
                3
            ],
            "date": [
                124
            ],
            "__typename": [
                3
            ]
        },
        "PathwayDefinitionDetails": {
            "total_careflows": [
                10
            ],
            "active_careflows": [
                10
            ],
            "stopped_careflows": [
                10
            ],
            "completed_careflows": [
                10
            ],
            "total_patients": [
                10
            ],
            "__typename": [
                3
            ]
        },
        "FilterPathwayDefinitionsParams": {
            "search": [
                149
            ],
            "__typename": [
                3
            ]
        },
        "ScheduledStepsPayload": {
            "code": [
                3
            ],
            "success": [
                4
            ],
            "steps": [
                86
            ],
            "__typename": [
                3
            ]
        },
        "SearchPatientsPayload": {
            "code": [
                3
            ],
            "success": [
                4
            ],
            "patients": [
                134
            ],
            "__typename": [
                3
            ]
        },
        "StakeholdersPayload": {
            "code": [
                3
            ],
            "success": [
                4
            ],
            "stakeholders": [
                158
            ],
            "__typename": [
                3
            ]
        },
        "Stakeholder": {
            "id": [
                6
            ],
            "definition_id": [
                3
            ],
            "label": [
                159
            ],
            "clinical_app_role": [
                160
            ],
            "release_id": [
                3
            ],
            "version": [
                10
            ],
            "__typename": [
                3
            ]
        },
        "StakeholderLabel": {
            "en": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "StakeholderClinicalAppRole": {},
        "TracksPayload": {
            "code": [
                3
            ],
            "success": [
                4
            ],
            "tracks": [
                132
            ],
            "__typename": [
                3
            ]
        },
        "CurrentUserPayload": {
            "code": [
                3
            ],
            "success": [
                4
            ],
            "user": [
                163
            ],
            "__typename": [
                3
            ]
        },
        "CurrentUser": {
            "id": [
                6
            ],
            "tenant_id": [
                3
            ],
            "profile": [
                135
            ],
            "tenant": [
                164
            ],
            "__typename": [
                3
            ]
        },
        "Tenant": {
            "name": [
                3
            ],
            "logo_path": [
                3
            ],
            "accent_color": [
                3
            ],
            "hosted_page_title": [
                3
            ],
            "is_default": [
                4
            ],
            "identifier_systems": [
                165
            ],
            "__typename": [
                3
            ]
        },
        "IdentifierSystem": {
            "name": [
                3
            ],
            "display_name": [
                3
            ],
            "system": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "WebhookCallPayload": {
            "code": [
                3
            ],
            "success": [
                4
            ],
            "webhook_call": [
                167
            ],
            "__typename": [
                3
            ]
        },
        "WebhookCall": {
            "id": [
                6
            ],
            "request": [
                168
            ],
            "responses": [
                170
            ],
            "status": [
                3
            ],
            "webhook_id": [
                3
            ],
            "webhook_name": [
                3
            ],
            "event_type": [
                3
            ],
            "created_at": [
                3
            ],
            "pathway": [
                171
            ],
            "__typename": [
                3
            ]
        },
        "WebhookCallRequest": {
            "endpoint": [
                3
            ],
            "headers": [
                169
            ],
            "body": [
                3
            ],
            "method": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "WebhookCallHeader": {
            "key": [
                3
            ],
            "value": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "WebhookCallResponse": {
            "status": [
                10
            ],
            "body": [
                3
            ],
            "date": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "ApiPathwayContext": {
            "id": [
                3
            ],
            "start_date": [
                3
            ],
            "pathway_definition_id": [
                3
            ],
            "patient_id": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "WebhookCallsPayload": {
            "code": [
                3
            ],
            "success": [
                4
            ],
            "webhook_calls": [
                167
            ],
            "__typename": [
                3
            ]
        },
        "OrchestrationFactsPromptPayload": {
            "code": [
                3
            ],
            "success": [
                4
            ],
            "response": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "HostedPagesLinkPayload": {
            "code": [
                3
            ],
            "success": [
                4
            ],
            "hosted_pages_link": [
                175
            ],
            "__typename": [
                3
            ]
        },
        "HostedPagesLink": {
            "id": [
                6
            ],
            "pathway_id": [
                3
            ],
            "stakeholder_id": [
                3
            ],
            "url": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "Mutation": {
            "addIdentifierToPatient": [
                177,
                {
                    "input": [
                        178,
                        "AddIdentifierToPatientInput!"
                    ]
                }
            ],
            "addTrack": [
                180,
                {
                    "input": [
                        181,
                        "AddTrackInput!"
                    ]
                }
            ],
            "unscheduleTracks": [
                182,
                {
                    "input": [
                        183,
                        "CancelScheduledTracksInput!"
                    ]
                }
            ],
            "completeExtensionActivity": [
                184,
                {
                    "input": [
                        185,
                        "CompleteExtensionActivityInput!"
                    ]
                }
            ],
            "createPatient": [
                187,
                {
                    "mycare": [
                        188
                    ],
                    "input": [
                        189
                    ]
                }
            ],
            "deletePathway": [
                191,
                {
                    "input": [
                        192,
                        "DeletePathwayInput!"
                    ]
                }
            ],
            "deletePatient": [
                191,
                {
                    "input": [
                        193,
                        "DeletePatientInput!"
                    ]
                }
            ],
            "evaluateFormRules": [
                194,
                {
                    "input": [
                        196,
                        "EvaluateFormRulesInput!"
                    ]
                }
            ],
            "markMessageAsRead": [
                198,
                {
                    "input": [
                        199,
                        "MarkMessageAsReadInput!"
                    ]
                }
            ],
            "requestPatientDemographics": [
                200,
                {
                    "input": [
                        201,
                        "PatientDemographicsInput!"
                    ]
                }
            ],
            "retryActivity": [
                191,
                {
                    "input": [
                        202,
                        "RetryActivityInput!"
                    ]
                }
            ],
            "retryAllApiCalls": [
                191,
                {
                    "input": [
                        203,
                        "RetryAllApiCallsInput!"
                    ]
                }
            ],
            "retryAllFailedApiCalls": [
                191,
                {
                    "input": [
                        204,
                        "RetryAllFailedApiCallsInput!"
                    ]
                }
            ],
            "retryAllFailedWebhookCalls": [
                191,
                {
                    "input": [
                        205,
                        "RetryAllFailedWebhookCallsInput!"
                    ]
                }
            ],
            "retryAllFailedWebhookCallsForPathwayDefinition": [
                191,
                {
                    "input": [
                        206,
                        "RetryAllFailedWebhookCallsForPathwayDefinitionInput!"
                    ]
                }
            ],
            "retryAllWebhookCalls": [
                191,
                {
                    "input": [
                        207,
                        "RetryAllWebhookCallsInput!"
                    ]
                }
            ],
            "retryApiCall": [
                208,
                {
                    "input": [
                        209,
                        "RetryApiCallInput!"
                    ]
                }
            ],
            "retryPushToEmr": [
                191,
                {
                    "input": [
                        210,
                        "RetryPushToEmrInput!"
                    ]
                }
            ],
            "retryWebhookCall": [
                211,
                {
                    "input": [
                        212,
                        "RetryWebhookCallInput!"
                    ]
                }
            ],
            "saveBaselineInfo": [
                191,
                {
                    "input": [
                        213,
                        "SaveBaselineInfoInput!"
                    ]
                }
            ],
            "scheduleTrack": [
                215,
                {
                    "input": [
                        216,
                        "ScheduleTrackInput!"
                    ]
                }
            ],
            "startHostedActivitySession": [
                217,
                {
                    "input": [
                        218,
                        "StartHostedActivitySessionInput!"
                    ]
                }
            ],
            "startHostedPathwaySessionFromLink": [
                219,
                {
                    "input": [
                        220,
                        "StartHostedPathwaySessionFromLinkInput!"
                    ]
                }
            ],
            "startHostedActivitySessionViaHostedPagesLink": [
                217,
                {
                    "input": [
                        221,
                        "StartHostedActivitySessionViaHostedPagesLinkInput!"
                    ]
                }
            ],
            "startHostedPathwaySession": [
                222,
                {
                    "input": [
                        223,
                        "StartHostedPathwaySessionInput!"
                    ]
                }
            ],
            "startPathway": [
                225,
                {
                    "input": [
                        226,
                        "StartPathwayInput!"
                    ]
                }
            ],
            "startPathwayWithPatientIdentifier": [
                227,
                {
                    "input": [
                        228,
                        "StartPathwayWithPatientIdentifierInput!"
                    ]
                }
            ],
            "stopPathway": [
                191,
                {
                    "input": [
                        229,
                        "StopPathwayInput!"
                    ]
                }
            ],
            "stopTrack": [
                230,
                {
                    "input": [
                        231,
                        "StopTrackInput!"
                    ]
                }
            ],
            "submitChecklist": [
                232,
                {
                    "input": [
                        233,
                        "SubmitChecklistInput!"
                    ]
                }
            ],
            "submitFormResponse": [
                234,
                {
                    "input": [
                        235,
                        "SubmitFormResponseInput!"
                    ]
                }
            ],
            "updateBaselineInfo": [
                191,
                {
                    "input": [
                        237,
                        "UpdateBaselineInfoInput!"
                    ]
                }
            ],
            "updatePatient": [
                238,
                {
                    "input": [
                        239,
                        "UpdatePatientInput!"
                    ]
                }
            ],
            "updatePatientDemographicsQuery": [
                241,
                {
                    "input": [
                        242,
                        "UpdatePatientDemographicsQueryInput!"
                    ]
                }
            ],
            "updatePatientLanguage": [
                243,
                {
                    "input": [
                        244,
                        "UpdatePatientLanguageInput!"
                    ]
                }
            ],
            "__typename": [
                3
            ]
        },
        "AddIdentifierToPatientPayload": {
            "code": [
                3
            ],
            "success": [
                4
            ],
            "patient": [
                134
            ],
            "__typename": [
                3
            ]
        },
        "AddIdentifierToPatientInput": {
            "patient_id": [
                3
            ],
            "identifier": [
                179
            ],
            "__typename": [
                3
            ]
        },
        "IdentifierInput": {
            "system": [
                3
            ],
            "value": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "AddTrackPayload": {
            "code": [
                3
            ],
            "success": [
                4
            ],
            "__typename": [
                3
            ]
        },
        "AddTrackInput": {
            "pathway_id": [
                3
            ],
            "track_id": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "CancelScheduledTracksPayload": {
            "code": [
                3
            ],
            "success": [
                4
            ],
            "unscheduled_ids": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "CancelScheduledTracksInput": {
            "ids": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "CompleteExtensionActivityPayload": {
            "code": [
                3
            ],
            "success": [
                4
            ],
            "activity": [
                26
            ],
            "__typename": [
                3
            ]
        },
        "CompleteExtensionActivityInput": {
            "activity_id": [
                3
            ],
            "data_points": [
                186
            ],
            "__typename": [
                3
            ]
        },
        "ExtensionDataPointInput": {
            "key": [
                3
            ],
            "value": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "CreatePatientPayload": {
            "code": [
                3
            ],
            "success": [
                4
            ],
            "patient": [
                134
            ],
            "__typename": [
                3
            ]
        },
        "MyCareOptions": {
            "password": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "CreatePatientInput": {
            "email": [
                3
            ],
            "first_name": [
                3
            ],
            "last_name": [
                3
            ],
            "birth_date": [
                3
            ],
            "preferred_language": [
                3
            ],
            "sex": [
                136
            ],
            "national_registry_number": [
                3
            ],
            "patient_code": [
                3
            ],
            "phone": [
                3
            ],
            "mobile_phone": [
                3
            ],
            "address": [
                190
            ],
            "identifier": [
                179
            ],
            "__typename": [
                3
            ]
        },
        "AddressInput": {
            "street": [
                3
            ],
            "city": [
                3
            ],
            "zip": [
                3
            ],
            "state": [
                3
            ],
            "country": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "EmptyPayload": {
            "code": [
                3
            ],
            "success": [
                4
            ],
            "__typename": [
                3
            ]
        },
        "DeletePathwayInput": {
            "pathway_id": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "DeletePatientInput": {
            "patient_id": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "EvaluateFormRulesPayload": {
            "code": [
                3
            ],
            "success": [
                4
            ],
            "results": [
                195
            ],
            "__typename": [
                3
            ]
        },
        "QuestionRuleResult": {
            "question_id": [
                3
            ],
            "rule_id": [
                3
            ],
            "satisfied": [
                4
            ],
            "__typename": [
                3
            ]
        },
        "EvaluateFormRulesInput": {
            "form_id": [
                3
            ],
            "answers": [
                197
            ],
            "__typename": [
                3
            ]
        },
        "AnswerInput": {
            "question_id": [
                3
            ],
            "value": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "MarkMessageAsReadPayload": {
            "code": [
                3
            ],
            "success": [
                4
            ],
            "activity": [
                26
            ],
            "__typename": [
                3
            ]
        },
        "MarkMessageAsReadInput": {
            "activity_id": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "PatientDemographicsPayload": {
            "code": [
                3
            ],
            "success": [
                4
            ],
            "query_id": [
                3
            ],
            "status": [
                3
            ],
            "total": [
                10
            ],
            "entry": [
                135
            ],
            "__typename": [
                3
            ]
        },
        "PatientDemographicsInput": {
            "patient_identifier": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "RetryActivityInput": {
            "activity_id": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "RetryAllApiCallsInput": {
            "pathway_id": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "RetryAllFailedApiCallsInput": {
            "pathway_id": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "RetryAllFailedWebhookCallsInput": {
            "pathway_id": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "RetryAllFailedWebhookCallsForPathwayDefinitionInput": {
            "pathway_definition_id": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "RetryAllWebhookCallsInput": {
            "pathway_id": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "RetryApiCallPayload": {
            "code": [
                3
            ],
            "success": [
                4
            ],
            "api_call": [
                69
            ],
            "__typename": [
                3
            ]
        },
        "RetryApiCallInput": {
            "api_call_id": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "RetryPushToEmrInput": {
            "activity_id": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "RetryWebhookCallPayload": {
            "code": [
                3
            ],
            "success": [
                4
            ],
            "webhook_call": [
                167
            ],
            "__typename": [
                3
            ]
        },
        "RetryWebhookCallInput": {
            "webhook_call_id": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "SaveBaselineInfoInput": {
            "pathway_id": [
                3
            ],
            "baseline_info": [
                214
            ],
            "__typename": [
                3
            ]
        },
        "BaselineInfoInput": {
            "data_point_definition_id": [
                3
            ],
            "value": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "ScheduleTrackPayload": {
            "code": [
                3
            ],
            "success": [
                4
            ],
            "id": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "ScheduleTrackInput": {
            "pathway_id": [
                3
            ],
            "track_id": [
                3
            ],
            "scheduled_date": [
                3
            ],
            "cancel_any_scheduled": [
                4
            ],
            "__typename": [
                3
            ]
        },
        "StartHostedActivitySessionPayload": {
            "code": [
                3
            ],
            "success": [
                4
            ],
            "session_id": [
                3
            ],
            "session_url": [
                3
            ],
            "language": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "StartHostedActivitySessionInput": {
            "pathway_id": [
                3
            ],
            "success_url": [
                3
            ],
            "cancel_url": [
                3
            ],
            "stakeholder_id": [
                3
            ],
            "language": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "StartHostedPathwaySessionFromLinkPayload": {
            "code": [
                3
            ],
            "success": [
                4
            ],
            "session_url": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "StartHostedPathwaySessionFromLinkInput": {
            "id": [
                3
            ],
            "patient_identifier": [
                179
            ],
            "__typename": [
                3
            ]
        },
        "StartHostedActivitySessionViaHostedPagesLinkInput": {
            "hosted_pages_link_id": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "StartHostedPathwaySessionPayload": {
            "code": [
                3
            ],
            "success": [
                4
            ],
            "session_id": [
                3
            ],
            "session_url": [
                3
            ],
            "pathway_id": [
                3
            ],
            "stakeholder": [
                108
            ],
            "__typename": [
                3
            ]
        },
        "StartHostedPathwaySessionInput": {
            "pathway_definition_id": [
                3
            ],
            "success_url": [
                3
            ],
            "cancel_url": [
                3
            ],
            "patient_id": [
                3
            ],
            "data_points": [
                224
            ],
            "language": [
                3
            ],
            "patient_identifier": [
                179
            ],
            "ttl": [
                10
            ],
            "__typename": [
                3
            ]
        },
        "DataPointInput": {
            "data_point_definition_id": [
                3
            ],
            "value": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "StartPathwayPayload": {
            "code": [
                3
            ],
            "success": [
                4
            ],
            "pathway_id": [
                3
            ],
            "stakeholders": [
                158
            ],
            "__typename": [
                3
            ]
        },
        "StartPathwayInput": {
            "patient_id": [
                3
            ],
            "pathway_definition_id": [
                3
            ],
            "data_points": [
                224
            ],
            "release_id": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "StartPathwayWithPatientIdentifierPayload": {
            "code": [
                3
            ],
            "success": [
                4
            ],
            "pathway_id": [
                3
            ],
            "patient_id": [
                3
            ],
            "stakeholders": [
                158
            ],
            "__typename": [
                3
            ]
        },
        "StartPathwayWithPatientIdentifierInput": {
            "patient_identifier": [
                179
            ],
            "pathway_definition_id": [
                3
            ],
            "data_points": [
                224
            ],
            "release_id": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "StopPathwayInput": {
            "pathway_id": [
                3
            ],
            "reason": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "StopTrackPayload": {
            "code": [
                3
            ],
            "success": [
                4
            ],
            "track": [
                86
            ],
            "__typename": [
                3
            ]
        },
        "StopTrackInput": {
            "pathway_id": [
                3
            ],
            "track_id": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "SubmitChecklistPayload": {
            "code": [
                3
            ],
            "success": [
                4
            ],
            "activity": [
                26
            ],
            "__typename": [
                3
            ]
        },
        "SubmitChecklistInput": {
            "activity_id": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "SubmitFormResponsePayload": {
            "code": [
                3
            ],
            "success": [
                4
            ],
            "activity": [
                26
            ],
            "__typename": [
                3
            ]
        },
        "SubmitFormResponseInput": {
            "activity_id": [
                3
            ],
            "response": [
                236
            ],
            "__typename": [
                3
            ]
        },
        "QuestionResponseInput": {
            "question_id": [
                3
            ],
            "value": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "UpdateBaselineInfoInput": {
            "pathway_id": [
                3
            ],
            "baseline_info": [
                214
            ],
            "__typename": [
                3
            ]
        },
        "UpdatePatientPayload": {
            "code": [
                3
            ],
            "success": [
                4
            ],
            "patient": [
                134
            ],
            "__typename": [
                3
            ]
        },
        "UpdatePatientInput": {
            "patient_id": [
                3
            ],
            "profile": [
                240
            ],
            "__typename": [
                3
            ]
        },
        "PatientProfileInput": {
            "first_name": [
                3
            ],
            "last_name": [
                3
            ],
            "birth_date": [
                3
            ],
            "preferred_language": [
                3
            ],
            "sex": [
                136
            ],
            "national_registry_number": [
                3
            ],
            "patient_code": [
                3
            ],
            "email": [
                3
            ],
            "phone": [
                3
            ],
            "mobile_phone": [
                3
            ],
            "address": [
                190
            ],
            "identifier": [
                179
            ],
            "__typename": [
                3
            ]
        },
        "UpdatePatientDemographicsQueryPayload": {
            "code": [
                3
            ],
            "success": [
                4
            ],
            "created_patient_entry_index": [
                10
            ],
            "created_patient_id": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "UpdatePatientDemographicsQueryInput": {
            "created_patient_id": [
                3
            ],
            "created_patient_entry_index": [
                10
            ],
            "query_id": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "UpdatePatientLanguagePayload": {
            "code": [
                3
            ],
            "success": [
                4
            ],
            "user": [
                134
            ],
            "__typename": [
                3
            ]
        },
        "UpdatePatientLanguageInput": {
            "preferred_language": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "Subscription": {
            "activityCreated": [
                26,
                {
                    "pathway_id": [
                        3
                    ],
                    "only_patient_activities": [
                        4
                    ]
                }
            ],
            "activityUpdated": [
                26,
                {
                    "pathway_id": [
                        3
                    ],
                    "only_patient_activities": [
                        4
                    ]
                }
            ],
            "activityCompleted": [
                26,
                {
                    "pathway_id": [
                        3
                    ],
                    "only_patient_activities": [
                        4
                    ]
                }
            ],
            "activityExpired": [
                26,
                {
                    "pathway_id": [
                        3
                    ],
                    "only_patient_activities": [
                        4
                    ]
                }
            ],
            "apiCallCreated": [
                69,
                {
                    "pathway_id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "apiCallUpdated": [
                69,
                {
                    "pathway_id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "elementCreated": [
                86,
                {
                    "pathway_id": [
                        3,
                        "String!"
                    ],
                    "element_type": [
                        87
                    ]
                }
            ],
            "elementCompleted": [
                86,
                {
                    "pathway_id": [
                        3,
                        "String!"
                    ],
                    "element_type": [
                        87
                    ]
                }
            ],
            "elementUpdated": [
                86,
                {
                    "pathway_id": [
                        3,
                        "String!"
                    ],
                    "element_type": [
                        87
                    ]
                }
            ],
            "sessionActivityCreated": [
                26,
                {
                    "only_stakeholder_activities": [
                        4
                    ]
                }
            ],
            "sessionActivityUpdated": [
                26,
                {
                    "only_stakeholder_activities": [
                        4
                    ]
                }
            ],
            "sessionActivityCompleted": [
                26,
                {
                    "only_stakeholder_activities": [
                        4
                    ]
                }
            ],
            "sessionActivityExpired": [
                26,
                {
                    "only_stakeholder_activities": [
                        4
                    ]
                }
            ],
            "sessionExpired": [
                106
            ],
            "sessionCompleted": [
                106
            ],
            "pathwayUpdated": [
                123,
                {
                    "id": [
                        6,
                        "ID!"
                    ]
                }
            ],
            "webhookCallCreated": [
                167,
                {
                    "pathway_id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "webhookCallUpdated": [
                167,
                {
                    "pathway_id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                3
            ]
        }
    }
}