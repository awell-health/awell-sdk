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
        41,
        45,
        46,
        56,
        58,
        60,
        62,
        73,
        76,
        89,
        90,
        91,
        99,
        111,
        113,
        118,
        120,
        129,
        133,
        156
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
                        66
                    ],
                    "sorting": [
                        67
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
                        66
                    ],
                    "sorting": [
                        67
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
                        66
                    ],
                    "sorting": [
                        67
                    ],
                    "filters": [
                        68
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
                70,
                {
                    "id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "apiCalls": [
                77,
                {
                    "pathway_id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "calculationAction": [
                78,
                {
                    "id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "calculationResults": [
                79,
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
                81,
                {
                    "id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "clinicalNote": [
                83,
                {
                    "id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "pathwayElements": [
                87,
                {
                    "pathway_id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "emrReport": [
                93,
                {
                    "id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "extensionActivityRecord": [
                96,
                {
                    "id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "form": [
                102,
                {
                    "pathway_id": [
                        3
                    ],
                    "id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "forms": [
                103,
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
                104,
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
            "generateRetoolEmbedUrl": [
                106,
                {
                    "landingPageUuid": [
                        3,
                        "String!"
                    ],
                    "groupIds": [
                        3,
                        "[String!]!"
                    ],
                    "userInfo": [
                        107,
                        "UserInfoParams!"
                    ]
                }
            ],
            "hostedSessionActivities": [
                108,
                {
                    "only_stakeholder_activities": [
                        4
                    ]
                }
            ],
            "hostedSession": [
                109
            ],
            "message": [
                116,
                {
                    "id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "pathwayFacts": [
                121,
                {
                    "pagination": [
                        66
                    ],
                    "sorting": [
                        67
                    ],
                    "filters": [
                        123,
                        "PathwayFactsFilters!"
                    ]
                }
            ],
            "pathwayDataPointDefinitions": [
                125,
                {
                    "pathway_definition_id": [
                        3
                    ],
                    "release_id": [
                        3,
                        "String!"
                    ],
                    "filters": [
                        126
                    ]
                }
            ],
            "pathway": [
                127,
                {
                    "id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "myPathways": [
                136
            ],
            "pathways": [
                136,
                {
                    "pagination": [
                        66
                    ],
                    "sorting": [
                        67
                    ],
                    "filters": [
                        138
                    ]
                }
            ],
            "patientDemographicsQueryConfiguration": [
                141
            ],
            "patient": [
                142,
                {
                    "id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "patients": [
                143,
                {
                    "pagination": [
                        66
                    ],
                    "sorting": [
                        67
                    ],
                    "filters": [
                        144
                    ]
                }
            ],
            "patientByIdentifier": [
                142,
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
                147
            ],
            "getStatusForPublishedPathwayDefinitions": [
                147
            ],
            "scheduledSteps": [
                151,
                {
                    "pathway_id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "searchPatientsByPatientCode": [
                152,
                {
                    "patient_code": [
                        3,
                        "String!"
                    ]
                }
            ],
            "searchPatientsByNationalRegistryNumber": [
                152,
                {
                    "national_registry_number": [
                        3,
                        "String!"
                    ]
                }
            ],
            "filterStakeholders": [
                153,
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
                153,
                {
                    "pathway_definition_ids": [
                        3,
                        "[String!]!"
                    ]
                }
            ],
            "stakeholdersByReleaseIds": [
                153,
                {
                    "release_ids": [
                        3,
                        "[String!]!"
                    ]
                }
            ],
            "stakeholdersByDefinitionIds": [
                153,
                {
                    "stakeholder_definition_ids": [
                        3,
                        "[String!]!"
                    ]
                }
            ],
            "adHocTracksByPathway": [
                157,
                {
                    "pathway_id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "adHocTracksByRelease": [
                157,
                {
                    "release_id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "whoami": [
                158
            ],
            "webhookCall": [
                162,
                {
                    "webhook_call_id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "webhookCalls": [
                168,
                {
                    "pathway_id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "webhookCallsForTenant": [
                168
            ],
            "webhookCallsForPathwayDefinition": [
                168,
                {
                    "pathway_definition_id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "getOrchestrationFactsFromPrompt": [
                169,
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
                170,
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
            "pathwayDataPoints": [
                172,
                {
                    "pagination": [
                        66
                    ],
                    "sorting": [
                        67
                    ],
                    "pathway_id": [
                        3,
                        "String!"
                    ],
                    "activity_id": [
                        3
                    ],
                    "data_point_definition_id": [
                        3
                    ],
                    "data_point_key": [
                        3
                    ]
                }
            ],
            "decisionOutputs": [
                174,
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
                70
            ],
            "on_ApiCallsPayload": [
                77
            ],
            "on_ActionPayload": [
                78
            ],
            "on_CalculationResultsPayload": [
                79
            ],
            "on_ChecklistPayload": [
                81
            ],
            "on_ClinicalNotePayload": [
                83
            ],
            "on_ElementsPayload": [
                87
            ],
            "on_EmrReportPayload": [
                93
            ],
            "on_ExtensionActivityRecordPayload": [
                96
            ],
            "on_FormPayload": [
                102
            ],
            "on_FormsPayload": [
                103
            ],
            "on_FormResponsePayload": [
                104
            ],
            "on_GenerateRetoolEmbedUrlPayload": [
                106
            ],
            "on_HostedSessionActivitiesPayload": [
                108
            ],
            "on_HostedSessionPayload": [
                109
            ],
            "on_MessagePayload": [
                116
            ],
            "on_PathwayDataPointDefinitionsPayload": [
                125
            ],
            "on_PathwayPayload": [
                127
            ],
            "on_PatientPayload": [
                142
            ],
            "on_ScheduledStepsPayload": [
                151
            ],
            "on_SearchPatientsPayload": [
                152
            ],
            "on_StakeholdersPayload": [
                153
            ],
            "on_TracksPayload": [
                157
            ],
            "on_CurrentUserPayload": [
                158
            ],
            "on_WebhookCallPayload": [
                162
            ],
            "on_WebhookCallsPayload": [
                168
            ],
            "on_OrchestrationFactsPromptPayload": [
                169
            ],
            "on_HostedPagesLinkPayload": [
                170
            ],
            "on_DecisionOutputsPayload": [
                174
            ],
            "on_AddActivityMetadataPayload": [
                176
            ],
            "on_AddIdentifierToPatientPayload": [
                178
            ],
            "on_AddTrackPayload": [
                181
            ],
            "on_CancelScheduledTracksPayload": [
                183
            ],
            "on_CompleteExtensionActivityPayload": [
                185
            ],
            "on_CreatePatientPayload": [
                188
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
            "on_UpdateEmrReportStatusPayload": [
                238
            ],
            "on_UpdatePatientPayload": [
                241
            ],
            "on_UpdatePatientDemographicsQueryPayload": [
                244
            ],
            "on_UpdatePatientLanguagePayload": [
                246
            ],
            "on_IdentityVerificationPayload": [
                248
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
                65
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
                121
            ],
            "on_PathwaysPayload": [
                136
            ],
            "on_PatientsPayload": [
                143
            ],
            "on_PublishedPathwayDefinitionsPayload": [
                147
            ],
            "on_DataPointPayload": [
                172
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
            "metadata": [
                40
            ],
            "form_display_mode": [
                41
            ],
            "form": [
                42
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
        "JSON": {},
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
                43
            ],
            "previous_answers": [
                63,
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
                44
            ],
            "questionType": [
                45
            ],
            "userQuestionType": [
                46
            ],
            "questionConfig": [
                47
            ],
            "rule": [
                57
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
                48
            ],
            "phone": [
                49
            ],
            "number": [
                50
            ],
            "multiple_select": [
                52
            ],
            "date": [
                55
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
                51
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
                53
            ],
            "exclusive_option": [
                54
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
                56
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
                58
            ],
            "conditions": [
                59
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
                60
            ],
            "operand": [
                61
            ],
            "__typename": [
                3
            ]
        },
        "ConditionOperator": {},
        "Operand": {
            "type": [
                62
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
                64
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
                69
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
                71
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
                72
            ],
            "responses": [
                75
            ],
            "created_at": [
                3
            ],
            "status": [
                76
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
                73
            ],
            "endpoint": [
                3
            ],
            "headers": [
                74
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
                71
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
                80
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
                82
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
                84
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
                85
            ],
            "context": [
                86
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
                88
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
                89
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
                90
            ],
            "status": [
                91
            ],
            "context": [
                38
            ],
            "stakeholders": [
                92
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
                94
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
                95
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
                97
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
                98
            ],
            "date": [
                3
            ],
            "settings": [
                100
            ],
            "data_points": [
                101
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
                99
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
                42
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
                42
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
                105
            ],
            "__typename": [
                3
            ]
        },
        "FormResponse": {
            "answers": [
                64
            ],
            "__typename": [
                3
            ]
        },
        "GenerateRetoolEmbedUrlPayload": {
            "code": [
                3
            ],
            "success": [
                4
            ],
            "url": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "UserInfoParams": {
            "firstName": [
                3
            ],
            "lastName": [
                3
            ],
            "email": [
                3
            ],
            "id": [
                3
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
                110
            ],
            "branding": [
                114
            ],
            "metadata": [
                115
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
                111
            ],
            "stakeholder": [
                112
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
                113
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
                117
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
                118
            ],
            "attachments": [
                119
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
                120
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
                122
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
                124
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
                128
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
                129
            ],
            "stop_date": [
                129
            ],
            "complete_date": [
                129
            ],
            "activities": [
                26
            ],
            "latestActivities": [
                26
            ],
            "status": [
                9
            ],
            "status_explanation": [
                3
            ],
            "tracks": [
                130
            ],
            "patient": [
                131
            ],
            "__typename": [
                3
            ]
        },
        "SafeDate": {},
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
        "User": {
            "id": [
                6
            ],
            "tenant_id": [
                3
            ],
            "profile": [
                132
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
                133
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
                134
            ],
            "identifier": [
                135
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
                137
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
                129
            ],
            "stop_date": [
                129
            ],
            "complete_date": [
                129
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
                139
            ],
            "status": [
                19
            ],
            "patient_id": [
                19
            ],
            "version": [
                140
            ],
            "release_id": [
                19
            ],
            "start_date": [
                124
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
                131
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
                131
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
                69
            ],
            "national_registry_number": [
                69
            ],
            "name": [
                145
            ],
            "search": [
                146
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
                148
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
                149
            ],
            "last_updated": [
                149
            ],
            "latest": [
                150
            ],
            "all": [
                150
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
                130
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
                129
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
        "ScheduledStepsPayload": {
            "code": [
                3
            ],
            "success": [
                4
            ],
            "steps": [
                88
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
                131
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
                154
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
                155
            ],
            "clinical_app_role": [
                156
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
                130
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
                159
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
                132
            ],
            "tenant": [
                160
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
                161
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
                163
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
                164
            ],
            "responses": [
                166
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
                167
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
                165
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
                163
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
                171
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
        "DataPointPayload": {
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
            "dataPoints": [
                173
            ],
            "__typename": [
                3
            ]
        },
        "DataPoint": {
            "id": [
                6
            ],
            "key": [
                3
            ],
            "data_set_id": [
                3
            ],
            "serialized_value": [
                3
            ],
            "data_point_definition_id": [
                3
            ],
            "date": [
                3
            ],
            "valueType": [
                14
            ],
            "activity_id": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "DecisionOutputsPayload": {
            "code": [
                3
            ],
            "success": [
                4
            ],
            "outputs": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "Mutation": {
            "addActivityMetadata": [
                176,
                {
                    "input": [
                        177,
                        "AddActivityMetadataInput!"
                    ]
                }
            ],
            "addIdentifierToPatient": [
                178,
                {
                    "input": [
                        179,
                        "AddIdentifierToPatientInput!"
                    ]
                }
            ],
            "addTrack": [
                181,
                {
                    "input": [
                        182,
                        "AddTrackInput!"
                    ]
                }
            ],
            "unscheduleTracks": [
                183,
                {
                    "input": [
                        184,
                        "CancelScheduledTracksInput!"
                    ]
                }
            ],
            "completeExtensionActivity": [
                185,
                {
                    "input": [
                        186,
                        "CompleteExtensionActivityInput!"
                    ]
                }
            ],
            "createPatient": [
                188,
                {
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
            "updateEmrReportStatus": [
                238,
                {
                    "input": [
                        240,
                        "UpdateEmrReportStatusInput!"
                    ]
                }
            ],
            "updatePatient": [
                241,
                {
                    "input": [
                        242,
                        "UpdatePatientInput!"
                    ]
                }
            ],
            "updatePatientDemographicsQuery": [
                244,
                {
                    "input": [
                        245,
                        "UpdatePatientDemographicsQueryInput!"
                    ]
                }
            ],
            "updatePatientLanguage": [
                246,
                {
                    "input": [
                        247,
                        "UpdatePatientLanguageInput!"
                    ]
                }
            ],
            "verify_identity": [
                248,
                {
                    "input": [
                        249,
                        "VerifyIdentityInput!"
                    ]
                }
            ],
            "__typename": [
                3
            ]
        },
        "AddActivityMetadataPayload": {
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
        "AddActivityMetadataInput": {
            "activity_id": [
                3
            ],
            "note": [
                3
            ],
            "metadata": [
                40
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
                131
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
                180
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
                187
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
                131
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
                133
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
                180
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
                132
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
                71
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
                163
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
                180
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
                112
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
                180
            ],
            "ttl": [
                10
            ],
            "stakeholder_definition_id": [
                3
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
                154
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
                154
            ],
            "__typename": [
                3
            ]
        },
        "StartPathwayWithPatientIdentifierInput": {
            "patient_identifier": [
                180
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
                88
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
        "UpdateEmrReportStatusPayload": {
            "code": [
                3
            ],
            "success": [
                4
            ],
            "request": [
                239
            ],
            "__typename": [
                3
            ]
        },
        "EMRRequest": {
            "id": [
                3
            ],
            "status": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "UpdateEmrReportStatusInput": {
            "request_id": [
                3
            ],
            "status": [
                3
            ],
            "reason": [
                3
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
                131
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
                243
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
                133
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
                180
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
                131
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
        "IdentityVerificationPayload": {
            "code": [
                3
            ],
            "success": [
                4
            ],
            "is_verified": [
                4
            ],
            "__typename": [
                3
            ]
        },
        "VerifyIdentityInput": {
            "dob": [
                3
            ],
            "pathway_id": [
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
                71,
                {
                    "pathway_id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "apiCallUpdated": [
                71,
                {
                    "pathway_id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "elementCreated": [
                88,
                {
                    "pathway_id": [
                        3,
                        "String!"
                    ],
                    "element_type": [
                        89
                    ]
                }
            ],
            "elementCompleted": [
                88,
                {
                    "pathway_id": [
                        3,
                        "String!"
                    ],
                    "element_type": [
                        89
                    ]
                }
            ],
            "elementUpdated": [
                88,
                {
                    "pathway_id": [
                        3,
                        "String!"
                    ],
                    "element_type": [
                        89
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
                110
            ],
            "sessionCompleted": [
                110
            ],
            "pathwayUpdated": [
                128,
                {
                    "id": [
                        6,
                        "ID!"
                    ]
                }
            ],
            "webhookCallCreated": [
                163,
                {
                    "pathway_id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "webhookCallUpdated": [
                163,
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