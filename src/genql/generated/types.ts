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
        40,
        44,
        45,
        55,
        57,
        59,
        61,
        72,
        75,
        88,
        89,
        90,
        98,
        108,
        110,
        115,
        117,
        126,
        130,
        131,
        138,
        162
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
                        65
                    ],
                    "sorting": [
                        66
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
                        65
                    ],
                    "sorting": [
                        66
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
                        65
                    ],
                    "sorting": [
                        66
                    ],
                    "filters": [
                        67
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
                69,
                {
                    "id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "apiCalls": [
                76,
                {
                    "pathway_id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "calculationAction": [
                77,
                {
                    "id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "calculationResults": [
                78,
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
                80,
                {
                    "id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "clinicalNote": [
                82,
                {
                    "id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "pathwayElements": [
                86,
                {
                    "pathway_id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "emrReport": [
                92,
                {
                    "id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "extensionActivityRecord": [
                95,
                {
                    "id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "form": [
                101,
                {
                    "id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "forms": [
                102,
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
                103,
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
                105,
                {
                    "only_stakeholder_activities": [
                        4
                    ]
                }
            ],
            "hostedSession": [
                106
            ],
            "message": [
                113,
                {
                    "id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "pathwayFacts": [
                118,
                {
                    "pagination": [
                        65
                    ],
                    "sorting": [
                        66
                    ],
                    "filters": [
                        120,
                        "PathwayFactsFilters!"
                    ]
                }
            ],
            "pathwayDataPointDefinitions": [
                122,
                {
                    "pathway_definition_id": [
                        3
                    ],
                    "release_id": [
                        3,
                        "String!"
                    ],
                    "filters": [
                        123
                    ]
                }
            ],
            "pathway": [
                124,
                {
                    "id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "myPathways": [
                141
            ],
            "pathways": [
                141,
                {
                    "pagination": [
                        65
                    ],
                    "sorting": [
                        66
                    ],
                    "filters": [
                        143
                    ]
                }
            ],
            "patientDemographicsQueryConfiguration": [
                146
            ],
            "patient": [
                147,
                {
                    "id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "patients": [
                148,
                {
                    "pagination": [
                        65
                    ],
                    "sorting": [
                        66
                    ],
                    "filters": [
                        149
                    ]
                }
            ],
            "patientByIdentifier": [
                147,
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
                152
            ],
            "publishedPathwayDefinitionsDashboard": [
                152,
                {
                    "pagination": [
                        65
                    ],
                    "sorting": [
                        66
                    ],
                    "filters": [
                        156
                    ]
                }
            ],
            "getStatusForPublishedPathwayDefinitions": [
                152
            ],
            "scheduledSteps": [
                157,
                {
                    "pathway_id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "searchPatientsByPatientCode": [
                158,
                {
                    "patient_code": [
                        3,
                        "String!"
                    ]
                }
            ],
            "searchPatientsByNationalRegistryNumber": [
                158,
                {
                    "national_registry_number": [
                        3,
                        "String!"
                    ]
                }
            ],
            "filterStakeholders": [
                159,
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
                159,
                {
                    "pathway_definition_ids": [
                        3,
                        "[String!]!"
                    ]
                }
            ],
            "stakeholdersByReleaseIds": [
                159,
                {
                    "release_ids": [
                        3,
                        "[String!]!"
                    ]
                }
            ],
            "stakeholdersByDefinitionIds": [
                159,
                {
                    "stakeholder_definition_ids": [
                        3,
                        "[String!]!"
                    ]
                }
            ],
            "adHocTracksByPathway": [
                163,
                {
                    "pathway_id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "adHocTracksByRelease": [
                163,
                {
                    "release_id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "whoami": [
                164
            ],
            "webhookCall": [
                168,
                {
                    "webhook_call_id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "webhookCalls": [
                174,
                {
                    "pathway_id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "webhookCallsForTenant": [
                174
            ],
            "webhookCallsForPathwayDefinition": [
                174,
                {
                    "pathway_definition_id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "getOrchestrationFactsFromPrompt": [
                175,
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
                176,
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
                69
            ],
            "on_ApiCallsPayload": [
                76
            ],
            "on_ActionPayload": [
                77
            ],
            "on_CalculationResultsPayload": [
                78
            ],
            "on_ChecklistPayload": [
                80
            ],
            "on_ClinicalNotePayload": [
                82
            ],
            "on_ElementsPayload": [
                86
            ],
            "on_EmrReportPayload": [
                92
            ],
            "on_ExtensionActivityRecordPayload": [
                95
            ],
            "on_FormPayload": [
                101
            ],
            "on_FormsPayload": [
                102
            ],
            "on_FormResponsePayload": [
                103
            ],
            "on_HostedSessionActivitiesPayload": [
                105
            ],
            "on_HostedSessionPayload": [
                106
            ],
            "on_MessagePayload": [
                113
            ],
            "on_PathwayDataPointDefinitionsPayload": [
                122
            ],
            "on_PathwayPayload": [
                124
            ],
            "on_PatientPayload": [
                147
            ],
            "on_ScheduledStepsPayload": [
                157
            ],
            "on_SearchPatientsPayload": [
                158
            ],
            "on_StakeholdersPayload": [
                159
            ],
            "on_TracksPayload": [
                163
            ],
            "on_CurrentUserPayload": [
                164
            ],
            "on_WebhookCallPayload": [
                168
            ],
            "on_WebhookCallsPayload": [
                174
            ],
            "on_OrchestrationFactsPromptPayload": [
                175
            ],
            "on_HostedPagesLinkPayload": [
                176
            ],
            "on_AddIdentifierToPatientPayload": [
                179
            ],
            "on_AddTrackPayload": [
                182
            ],
            "on_CancelScheduledTracksPayload": [
                184
            ],
            "on_CompleteExtensionActivityPayload": [
                186
            ],
            "on_CreatePatientPayload": [
                189
            ],
            "on_EmptyPayload": [
                193
            ],
            "on_EvaluateFormRulesPayload": [
                196
            ],
            "on_MarkMessageAsReadPayload": [
                200
            ],
            "on_PatientDemographicsPayload": [
                202
            ],
            "on_RetryApiCallPayload": [
                210
            ],
            "on_RetryWebhookCallPayload": [
                213
            ],
            "on_ScheduleTrackPayload": [
                217
            ],
            "on_StartHostedActivitySessionPayload": [
                219
            ],
            "on_StartHostedPathwaySessionFromLinkPayload": [
                221
            ],
            "on_StartHostedPathwaySessionPayload": [
                224
            ],
            "on_StartPathwayPayload": [
                227
            ],
            "on_StartPathwayWithPatientIdentifierPayload": [
                229
            ],
            "on_StopTrackPayload": [
                232
            ],
            "on_SubmitChecklistPayload": [
                234
            ],
            "on_SubmitFormResponsePayload": [
                236
            ],
            "on_UpdatePatientPayload": [
                240
            ],
            "on_UpdatePatientDemographicsQueryPayload": [
                243
            ],
            "on_UpdatePatientLanguagePayload": [
                245
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
                64
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
                118
            ],
            "on_PathwaysPayload": [
                141
            ],
            "on_PatientsPayload": [
                148
            ],
            "on_PublishedPathwayDefinitionsPayload": [
                152
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
            "action_component": [
                39
            ],
            "form_display_mode": [
                40
            ],
            "form": [
                41
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
        "ActionComponent": {
            "definition_id": [
                3
            ],
            "release_id": [
                3
            ],
            "title": [
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
                42
            ],
            "previous_answers": [
                62,
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
                43
            ],
            "questionType": [
                44
            ],
            "userQuestionType": [
                45
            ],
            "questionConfig": [
                46
            ],
            "rule": [
                56
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
                47
            ],
            "phone": [
                48
            ],
            "number": [
                49
            ],
            "multiple_select": [
                51
            ],
            "date": [
                54
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
                50
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
                52
            ],
            "exclusive_option": [
                53
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
                55
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
                57
            ],
            "conditions": [
                58
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
                59
            ],
            "operand": [
                60
            ],
            "__typename": [
                3
            ]
        },
        "ConditionOperator": {},
        "Operand": {
            "type": [
                61
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
                63
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
                68
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
                70
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
                71
            ],
            "responses": [
                74
            ],
            "created_at": [
                3
            ],
            "status": [
                75
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
                72
            ],
            "endpoint": [
                3
            ],
            "headers": [
                73
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
                70
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
                79
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
                81
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
                83
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
                84
            ],
            "context": [
                85
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
                87
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
                88
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
                89
            ],
            "status": [
                90
            ],
            "context": [
                38
            ],
            "stakeholders": [
                91
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
                93
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
                94
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
                96
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
                97
            ],
            "date": [
                3
            ],
            "settings": [
                99
            ],
            "data_points": [
                100
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
                98
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
                41
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
                41
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
                104
            ],
            "__typename": [
                3
            ]
        },
        "FormResponse": {
            "answers": [
                63
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
                107
            ],
            "branding": [
                111
            ],
            "metadata": [
                112
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
                108
            ],
            "stakeholder": [
                109
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
                110
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
        "SessionMetadata": {
            "pathway_definition_id": [
                3
            ],
            "tenant_id": [
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
                114
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
                115
            ],
            "attachments": [
                116
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
                117
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
                119
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
                121
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
                125
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
                126
            ],
            "stop_date": [
                126
            ],
            "complete_date": [
                126
            ],
            "activities": [
                26
            ],
            "latestActivities": [
                26
            ],
            "swimlanes": [
                127
            ],
            "status": [
                9
            ],
            "status_explanation": [
                3
            ],
            "tracks": [
                134
            ],
            "dashboards": [
                135
            ],
            "patient": [
                136
            ],
            "__typename": [
                3
            ]
        },
        "SafeDate": {},
        "Swimlanes": {
            "lanes": [
                128
            ],
            "items": [
                129
            ],
            "links": [
                133
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
                126
            ],
            "category": [
                130
            ],
            "type": [
                131
            ],
            "documentation": [
                132
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
                137
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
                138
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
                139
            ],
            "identifier": [
                140
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
                142
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
                126
            ],
            "stop_date": [
                126
            ],
            "complete_date": [
                126
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
                144
            ],
            "status": [
                19
            ],
            "patient_id": [
                19
            ],
            "version": [
                145
            ],
            "release_id": [
                19
            ],
            "start_date": [
                121
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
                136
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
                136
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
                68
            ],
            "national_registry_number": [
                68
            ],
            "name": [
                150
            ],
            "search": [
                151
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
                153
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
                154
            ],
            "last_updated": [
                154
            ],
            "latest": [
                155
            ],
            "all": [
                155
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
                134
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
                126
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
                151
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
                87
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
                136
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
                160
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
                161
            ],
            "clinical_app_role": [
                162
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
                134
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
                165
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
                137
            ],
            "tenant": [
                166
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
                167
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
                169
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
                170
            ],
            "responses": [
                172
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
                173
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
                171
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
                169
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
                177
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
                179,
                {
                    "input": [
                        180,
                        "AddIdentifierToPatientInput!"
                    ]
                }
            ],
            "addTrack": [
                182,
                {
                    "input": [
                        183,
                        "AddTrackInput!"
                    ]
                }
            ],
            "unscheduleTracks": [
                184,
                {
                    "input": [
                        185,
                        "CancelScheduledTracksInput!"
                    ]
                }
            ],
            "completeExtensionActivity": [
                186,
                {
                    "input": [
                        187,
                        "CompleteExtensionActivityInput!"
                    ]
                }
            ],
            "createPatient": [
                189,
                {
                    "mycare": [
                        190
                    ],
                    "input": [
                        191
                    ]
                }
            ],
            "deletePathway": [
                193,
                {
                    "input": [
                        194,
                        "DeletePathwayInput!"
                    ]
                }
            ],
            "deletePatient": [
                193,
                {
                    "input": [
                        195,
                        "DeletePatientInput!"
                    ]
                }
            ],
            "evaluateFormRules": [
                196,
                {
                    "input": [
                        198,
                        "EvaluateFormRulesInput!"
                    ]
                }
            ],
            "markMessageAsRead": [
                200,
                {
                    "input": [
                        201,
                        "MarkMessageAsReadInput!"
                    ]
                }
            ],
            "requestPatientDemographics": [
                202,
                {
                    "input": [
                        203,
                        "PatientDemographicsInput!"
                    ]
                }
            ],
            "retryActivity": [
                193,
                {
                    "input": [
                        204,
                        "RetryActivityInput!"
                    ]
                }
            ],
            "retryAllApiCalls": [
                193,
                {
                    "input": [
                        205,
                        "RetryAllApiCallsInput!"
                    ]
                }
            ],
            "retryAllFailedApiCalls": [
                193,
                {
                    "input": [
                        206,
                        "RetryAllFailedApiCallsInput!"
                    ]
                }
            ],
            "retryAllFailedWebhookCalls": [
                193,
                {
                    "input": [
                        207,
                        "RetryAllFailedWebhookCallsInput!"
                    ]
                }
            ],
            "retryAllFailedWebhookCallsForPathwayDefinition": [
                193,
                {
                    "input": [
                        208,
                        "RetryAllFailedWebhookCallsForPathwayDefinitionInput!"
                    ]
                }
            ],
            "retryAllWebhookCalls": [
                193,
                {
                    "input": [
                        209,
                        "RetryAllWebhookCallsInput!"
                    ]
                }
            ],
            "retryApiCall": [
                210,
                {
                    "input": [
                        211,
                        "RetryApiCallInput!"
                    ]
                }
            ],
            "retryPushToEmr": [
                193,
                {
                    "input": [
                        212,
                        "RetryPushToEmrInput!"
                    ]
                }
            ],
            "retryWebhookCall": [
                213,
                {
                    "input": [
                        214,
                        "RetryWebhookCallInput!"
                    ]
                }
            ],
            "saveBaselineInfo": [
                193,
                {
                    "input": [
                        215,
                        "SaveBaselineInfoInput!"
                    ]
                }
            ],
            "scheduleTrack": [
                217,
                {
                    "input": [
                        218,
                        "ScheduleTrackInput!"
                    ]
                }
            ],
            "startHostedActivitySession": [
                219,
                {
                    "input": [
                        220,
                        "StartHostedActivitySessionInput!"
                    ]
                }
            ],
            "startHostedPathwaySessionFromLink": [
                221,
                {
                    "input": [
                        222,
                        "StartHostedPathwaySessionFromLinkInput!"
                    ]
                }
            ],
            "startHostedActivitySessionViaHostedPagesLink": [
                219,
                {
                    "input": [
                        223,
                        "StartHostedActivitySessionViaHostedPagesLinkInput!"
                    ]
                }
            ],
            "startHostedPathwaySession": [
                224,
                {
                    "input": [
                        225,
                        "StartHostedPathwaySessionInput!"
                    ]
                }
            ],
            "startPathway": [
                227,
                {
                    "input": [
                        228,
                        "StartPathwayInput!"
                    ]
                }
            ],
            "startPathwayWithPatientIdentifier": [
                229,
                {
                    "input": [
                        230,
                        "StartPathwayWithPatientIdentifierInput!"
                    ]
                }
            ],
            "stopPathway": [
                193,
                {
                    "input": [
                        231,
                        "StopPathwayInput!"
                    ]
                }
            ],
            "stopTrack": [
                232,
                {
                    "input": [
                        233,
                        "StopTrackInput!"
                    ]
                }
            ],
            "submitChecklist": [
                234,
                {
                    "input": [
                        235,
                        "SubmitChecklistInput!"
                    ]
                }
            ],
            "submitFormResponse": [
                236,
                {
                    "input": [
                        237,
                        "SubmitFormResponseInput!"
                    ]
                }
            ],
            "updateBaselineInfo": [
                193,
                {
                    "input": [
                        239,
                        "UpdateBaselineInfoInput!"
                    ]
                }
            ],
            "updatePatient": [
                240,
                {
                    "input": [
                        241,
                        "UpdatePatientInput!"
                    ]
                }
            ],
            "updatePatientDemographicsQuery": [
                243,
                {
                    "input": [
                        244,
                        "UpdatePatientDemographicsQueryInput!"
                    ]
                }
            ],
            "updatePatientLanguage": [
                245,
                {
                    "input": [
                        246,
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
                136
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
                181
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
                188
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
                136
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
                138
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
                192
            ],
            "identifier": [
                181
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
                197
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
                199
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
                137
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
                70
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
                169
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
                216
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
                181
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
                109
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
                226
            ],
            "language": [
                3
            ],
            "patient_identifier": [
                181
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
                160
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
                226
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
                160
            ],
            "__typename": [
                3
            ]
        },
        "StartPathwayWithPatientIdentifierInput": {
            "patient_identifier": [
                181
            ],
            "pathway_definition_id": [
                3
            ],
            "data_points": [
                226
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
                87
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
                238
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
                216
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
                136
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
                242
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
                138
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
                192
            ],
            "identifier": [
                181
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
                136
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
                70,
                {
                    "pathway_id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "apiCallUpdated": [
                70,
                {
                    "pathway_id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "elementCreated": [
                87,
                {
                    "pathway_id": [
                        3,
                        "String!"
                    ],
                    "element_type": [
                        88
                    ]
                }
            ],
            "elementCompleted": [
                87,
                {
                    "pathway_id": [
                        3,
                        "String!"
                    ],
                    "element_type": [
                        88
                    ]
                }
            ],
            "elementUpdated": [
                87,
                {
                    "pathway_id": [
                        3,
                        "String!"
                    ],
                    "element_type": [
                        88
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
                107
            ],
            "sessionCompleted": [
                107
            ],
            "pathwayUpdated": [
                125,
                {
                    "id": [
                        6,
                        "ID!"
                    ]
                }
            ],
            "webhookCallCreated": [
                169,
                {
                    "pathway_id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "webhookCallUpdated": [
                169,
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