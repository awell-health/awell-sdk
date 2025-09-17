export default {
    "scalars": [
        2,
        4,
        5,
        7,
        9,
        10,
        11,
        13,
        22,
        28,
        30,
        32,
        40,
        42,
        45,
        49,
        61,
        63,
        66,
        76,
        80,
        81,
        83,
        84,
        85,
        86,
        93,
        114,
        117,
        129,
        130,
        131,
        139,
        151,
        153,
        170,
        195
    ],
    "types": {
        "FormActivityInputs": {
            "type": [
                2
            ],
            "form": [
                3
            ],
            "__typename": [
                4
            ]
        },
        "ActivityInputs": {
            "type": [
                2
            ],
            "on_FormActivityInputs": [
                0
            ],
            "on_DynamicFormActivityInputs": [
                35
            ],
            "on_MessageActivityInputs": [
                38
            ],
            "on_CalculationActivityInputs": [
                43
            ],
            "on_ExtensionActivityInputs": [
                46
            ],
            "__typename": [
                4
            ]
        },
        "ActivityInputType": {},
        "Form": {
            "release_id": [
                4
            ],
            "key": [
                4
            ],
            "definition_id": [
                4
            ],
            "id": [
                5
            ],
            "title": [
                4
            ],
            "trademark": [
                4
            ],
            "metadata": [
                4
            ],
            "questions": [
                6
            ],
            "previous_answers": [
                33,
                {
                    "pathway_id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                4
            ]
        },
        "String": {},
        "ID": {},
        "Question": {
            "key": [
                4
            ],
            "id": [
                5
            ],
            "definition_id": [
                4
            ],
            "title": [
                4
            ],
            "dataPointValueType": [
                7
            ],
            "options": [
                8
            ],
            "questionType": [
                10
            ],
            "userQuestionType": [
                11
            ],
            "questionConfig": [
                12
            ],
            "rule": [
                27
            ],
            "metadata": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "DataPointValueType": {},
        "Option": {
            "id": [
                5
            ],
            "value": [
                9
            ],
            "value_string": [
                4
            ],
            "label": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "Float": {},
        "QuestionType": {},
        "UserQuestionType": {},
        "QuestionConfig": {
            "recode_enabled": [
                13
            ],
            "mandatory": [
                13
            ],
            "use_select": [
                13
            ],
            "slider": [
                14
            ],
            "phone": [
                15
            ],
            "number": [
                16
            ],
            "multiple_select": [
                18
            ],
            "date": [
                21
            ],
            "file_storage": [
                23
            ],
            "input_validation": [
                24
            ],
            "__typename": [
                4
            ]
        },
        "Boolean": {},
        "SliderConfig": {
            "min": [
                9
            ],
            "max": [
                9
            ],
            "step_value": [
                9
            ],
            "min_label": [
                4
            ],
            "max_label": [
                4
            ],
            "is_value_tooltip_on": [
                13
            ],
            "display_marks": [
                13
            ],
            "show_min_max_values": [
                13
            ],
            "__typename": [
                4
            ]
        },
        "PhoneConfig": {
            "default_country": [
                4
            ],
            "available_countries": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "NumberConfig": {
            "range": [
                17
            ],
            "__typename": [
                4
            ]
        },
        "RangeConfig": {
            "min": [
                9
            ],
            "max": [
                9
            ],
            "enabled": [
                13
            ],
            "__typename": [
                4
            ]
        },
        "MultipleSelectConfig": {
            "range": [
                19
            ],
            "exclusive_option": [
                20
            ],
            "__typename": [
                4
            ]
        },
        "ChoiceRangeConfig": {
            "enabled": [
                13
            ],
            "min": [
                9
            ],
            "max": [
                9
            ],
            "__typename": [
                4
            ]
        },
        "ExclusiveOptionConfig": {
            "enabled": [
                13
            ],
            "option_id": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "DateConfig": {
            "allowed_dates": [
                22
            ],
            "include_date_of_response": [
                13
            ],
            "__typename": [
                4
            ]
        },
        "AllowedDatesOptions": {},
        "FileStorageQuestionConfig": {
            "file_storage_config_slug": [
                4
            ],
            "accepted_file_types": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "InputValidationConfig": {
            "mode": [
                4
            ],
            "pattern": [
                4
            ],
            "helper_text": [
                4
            ],
            "simpleConfig": [
                25
            ],
            "__typename": [
                4
            ]
        },
        "InputValidationSimpleConfig": {
            "exactLength": [
                9
            ],
            "allowed": [
                26
            ],
            "__typename": [
                4
            ]
        },
        "InputValidationAllowed": {
            "letters": [
                13
            ],
            "numbers": [
                13
            ],
            "whitespace": [
                13
            ],
            "special": [
                13
            ],
            "__typename": [
                4
            ]
        },
        "Rule": {
            "id": [
                5
            ],
            "definition_id": [
                4
            ],
            "boolean_operator": [
                28
            ],
            "conditions": [
                29
            ],
            "__typename": [
                4
            ]
        },
        "BooleanOperator": {},
        "Condition": {
            "id": [
                5
            ],
            "reference": [
                4
            ],
            "reference_key": [
                4
            ],
            "operator": [
                30
            ],
            "operand": [
                31
            ],
            "__typename": [
                4
            ]
        },
        "ConditionOperator": {},
        "Operand": {
            "type": [
                32
            ],
            "value": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ConditionOperandType": {},
        "PreviousAnswers": {
            "activity_id": [
                5
            ],
            "date": [
                4
            ],
            "answers": [
                34
            ],
            "__typename": [
                4
            ]
        },
        "Answer": {
            "question_id": [
                4
            ],
            "value": [
                4
            ],
            "label": [
                4
            ],
            "value_type": [
                7
            ],
            "__typename": [
                4
            ]
        },
        "DynamicFormActivityInputs": {
            "type": [
                2
            ],
            "dynamicForm": [
                36
            ],
            "__typename": [
                4
            ]
        },
        "DynamicFormGraphqlType": {
            "key": [
                4
            ],
            "title": [
                4
            ],
            "trademark": [
                4
            ],
            "questions": [
                37
            ],
            "__typename": [
                4
            ]
        },
        "DynamicQuestion": {
            "id": [
                5
            ],
            "key": [
                4
            ],
            "title": [
                4
            ],
            "dataPointValueType": [
                7
            ],
            "options": [
                8
            ],
            "questionType": [
                10
            ],
            "userQuestionType": [
                11
            ],
            "questionConfig": [
                12
            ],
            "__typename": [
                4
            ]
        },
        "MessageActivityInputs": {
            "type": [
                2
            ],
            "message": [
                39
            ],
            "__typename": [
                4
            ]
        },
        "ActivityMessage": {
            "message_id": [
                4
            ],
            "subject": [
                4
            ],
            "body": [
                4
            ],
            "format": [
                40
            ],
            "attachments": [
                41
            ],
            "__typename": [
                4
            ]
        },
        "MessageFormat": {},
        "MessageAttachment": {
            "id": [
                5
            ],
            "name": [
                4
            ],
            "url": [
                4
            ],
            "type": [
                42
            ],
            "__typename": [
                4
            ]
        },
        "MessageAttachmentType": {},
        "CalculationActivityInputs": {
            "type": [
                2
            ],
            "calculation_fields": [
                44
            ],
            "__typename": [
                4
            ]
        },
        "CalculationInput": {
            "calculation_input_id": [
                4
            ],
            "data_point_value": [
                45
            ],
            "__typename": [
                4
            ]
        },
        "JSON": {},
        "ExtensionActivityInputs": {
            "type": [
                2
            ],
            "extension_fields": [
                45
            ],
            "__typename": [
                4
            ]
        },
        "DynamicFormActivityOutputs": {
            "type": [
                49
            ],
            "answers": [
                50
            ],
            "__typename": [
                4
            ]
        },
        "ActivityOutputs": {
            "type": [
                49
            ],
            "on_DynamicFormActivityOutputs": [
                47
            ],
            "on_FormActivityOutputs": [
                51
            ],
            "on_CalculationActivityOutputs": [
                52
            ],
            "on_ExtensionActivityOutputs": [
                54
            ],
            "__typename": [
                4
            ]
        },
        "ActivityOutputType": {},
        "QuestionResponseOutput": {
            "question_id": [
                4
            ],
            "value": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "FormActivityOutputs": {
            "type": [
                49
            ],
            "answers": [
                50
            ],
            "__typename": [
                4
            ]
        },
        "CalculationActivityOutputs": {
            "type": [
                49
            ],
            "calculation_results": [
                53
            ],
            "__typename": [
                4
            ]
        },
        "SingleCalculationResult": {
            "subresult_id": [
                4
            ],
            "value": [
                4
            ],
            "value_type": [
                7
            ],
            "unit": [
                4
            ],
            "status": [
                4
            ],
            "label": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ExtensionActivityOutputs": {
            "type": [
                49
            ],
            "extension_results": [
                45
            ],
            "__typename": [
                4
            ]
        },
        "Query": {
            "scheduledTracksForPathway": [
                56,
                {
                    "pathway_id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "patientPathways": [
                59,
                {
                    "patient_id": [
                        4,
                        "String!"
                    ],
                    "filters": [
                        70
                    ]
                }
            ],
            "baselineInfo": [
                72,
                {
                    "pathway_id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "myPendingActivities": [
                73
            ],
            "myActivities": [
                73,
                {
                    "pagination": [
                        95
                    ],
                    "sorting": [
                        96
                    ],
                    "pathway_id": [
                        4,
                        "String!"
                    ],
                    "track_id": [
                        4
                    ]
                }
            ],
            "pathwayActivities": [
                73,
                {
                    "pagination": [
                        95
                    ],
                    "sorting": [
                        96
                    ],
                    "pathway_id": [
                        4,
                        "String!"
                    ],
                    "track_id": [
                        4
                    ]
                }
            ],
            "careflowActivities": [
                73,
                {
                    "pagination": [
                        95
                    ],
                    "sorting": [
                        96
                    ],
                    "pathway_id": [
                        4,
                        "String!"
                    ],
                    "filters": [
                        97
                    ]
                }
            ],
            "activity": [
                99,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "activities": [
                73,
                {
                    "pagination": [
                        95
                    ],
                    "sorting": [
                        96
                    ],
                    "filters": [
                        100
                    ]
                }
            ],
            "pathwayStepActivities": [
                73,
                {
                    "pathway_id": [
                        4,
                        "String!"
                    ],
                    "step_id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "careflowActivityTypes": [
                102,
                {
                    "careflow_id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "agent": [
                103,
                {
                    "id": [
                        5,
                        "ID!"
                    ]
                }
            ],
            "apiCall": [
                111,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "apiCalls": [
                118,
                {
                    "pathway_id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "calculationAction": [
                119,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "calculationResults": [
                120,
                {
                    "pathway_id": [
                        4,
                        "String!"
                    ],
                    "activity_id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "checklist": [
                121,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "clinicalNote": [
                123,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "pathwayElements": [
                127,
                {
                    "pathway_id": [
                        4,
                        "String!"
                    ],
                    "track_id": [
                        4
                    ]
                }
            ],
            "emrReport": [
                133,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "extensionActivityRecord": [
                136,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "form": [
                142,
                {
                    "pathway_id": [
                        4
                    ],
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "forms": [
                143,
                {
                    "pathway_definition_id": [
                        4,
                        "String!"
                    ],
                    "release_id": [
                        4
                    ]
                }
            ],
            "formResponse": [
                144,
                {
                    "pathway_id": [
                        4,
                        "String!"
                    ],
                    "activity_id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "generateRetoolEmbedUrl": [
                146,
                {
                    "landingPageUuid": [
                        4,
                        "String!"
                    ],
                    "groupIds": [
                        4,
                        "[String!]!"
                    ],
                    "userInfo": [
                        147,
                        "UserInfoParams!"
                    ],
                    "releaseVersion": [
                        4
                    ]
                }
            ],
            "hostedSessionActivities": [
                148,
                {
                    "only_stakeholder_activities": [
                        13
                    ]
                }
            ],
            "hostedSession": [
                149
            ],
            "message": [
                157,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "pathwayFacts": [
                159,
                {
                    "pagination": [
                        95
                    ],
                    "sorting": [
                        96
                    ],
                    "filters": [
                        161,
                        "PathwayFactsFilters!"
                    ]
                }
            ],
            "pathwayDataPointDefinitions": [
                163,
                {
                    "pathway_definition_id": [
                        4
                    ],
                    "release_id": [
                        4,
                        "String!"
                    ],
                    "filters": [
                        164
                    ]
                }
            ],
            "pathway": [
                165,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "myPathways": [
                173
            ],
            "pathways": [
                173,
                {
                    "pagination": [
                        95
                    ],
                    "sorting": [
                        96
                    ],
                    "filters": [
                        175
                    ]
                }
            ],
            "patientDemographicsQueryConfiguration": [
                178
            ],
            "patient": [
                179,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "patients": [
                180,
                {
                    "pagination": [
                        95
                    ],
                    "sorting": [
                        96
                    ],
                    "filters": [
                        181
                    ]
                }
            ],
            "patientByIdentifier": [
                179,
                {
                    "system": [
                        4,
                        "String!"
                    ],
                    "value": [
                        4,
                        "String!"
                    ]
                }
            ],
            "publishedPathwayDefinitions": [
                184
            ],
            "getStatusForPublishedPathwayDefinitions": [
                184
            ],
            "getPublishedCareflowVersions": [
                187,
                {
                    "careflow_definition_id": [
                        4
                    ]
                }
            ],
            "scheduledSteps": [
                190,
                {
                    "pathway_id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "searchPatientsByPatientCode": [
                191,
                {
                    "patient_code": [
                        4,
                        "String!"
                    ]
                }
            ],
            "searchPatientsByNationalRegistryNumber": [
                191,
                {
                    "national_registry_number": [
                        4,
                        "String!"
                    ]
                }
            ],
            "filterStakeholders": [
                192,
                {
                    "pathway_definition_ids": [
                        4,
                        "[String!]"
                    ],
                    "release_ids": [
                        4,
                        "[String!]"
                    ],
                    "stakeholder_definition_ids": [
                        4,
                        "[String!]"
                    ]
                }
            ],
            "stakeholdersByPathwayDefinitionIds": [
                192,
                {
                    "pathway_definition_ids": [
                        4,
                        "[String!]!"
                    ]
                }
            ],
            "stakeholdersByReleaseIds": [
                192,
                {
                    "release_ids": [
                        4,
                        "[String!]!"
                    ]
                }
            ],
            "stakeholdersByDefinitionIds": [
                192,
                {
                    "stakeholder_definition_ids": [
                        4,
                        "[String!]!"
                    ]
                }
            ],
            "adHocTracksByPathway": [
                196,
                {
                    "pathway_id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "adHocTracksByRelease": [
                196,
                {
                    "release_id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "tenant": [
                197
            ],
            "webhookCall": [
                200,
                {
                    "webhook_call_id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "webhookCalls": [
                206,
                {
                    "pathway_id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "webhookCallsForTenant": [
                206
            ],
            "webhookCallsForPathwayDefinition": [
                206,
                {
                    "pathway_definition_id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "getOrchestrationFactsFromPrompt": [
                207,
                {
                    "pathway_id": [
                        4,
                        "String!"
                    ],
                    "prompt": [
                        4,
                        "String!"
                    ]
                }
            ],
            "hostedPagesLink": [
                208,
                {
                    "pathway_id": [
                        4,
                        "String!"
                    ],
                    "stakeholder_id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "pathwayDataPoints": [
                210,
                {
                    "pagination": [
                        95
                    ],
                    "sorting": [
                        96
                    ],
                    "pathway_id": [
                        4,
                        "String!"
                    ],
                    "activity_id": [
                        4
                    ],
                    "data_point_definition_id": [
                        4
                    ],
                    "data_point_key": [
                        4
                    ]
                }
            ],
            "decisionOutputs": [
                212,
                {
                    "pathway_id": [
                        4,
                        "String!"
                    ],
                    "activity_id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "getSignedUrl": [
                213,
                {
                    "file_name": [
                        4,
                        "String!"
                    ],
                    "content_type": [
                        4,
                        "String!"
                    ],
                    "expires_in": [
                        9
                    ],
                    "config_slug": [
                        4,
                        "String!"
                    ]
                }
            ],
            "getAgentByThreadId": [
                214,
                {
                    "agent_thread_id": [
                        4
                    ]
                }
            ],
            "formActivityDataPoints": [
                218,
                {
                    "careflow_id": [
                        4,
                        "String!"
                    ],
                    "activity_id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                4
            ]
        },
        "ScheduledTracksPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "scheduled_tracks": [
                58
            ],
            "__typename": [
                4
            ]
        },
        "Payload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "on_ScheduledTracksPayload": [
                56
            ],
            "on_PatientPathwaysPayload": [
                59
            ],
            "on_BaselineInfoPayload": [
                72
            ],
            "on_ActivityPayload": [
                99
            ],
            "on_ActivityTypesPayload": [
                102
            ],
            "on_ApiCallPayload": [
                111
            ],
            "on_ApiCallsPayload": [
                118
            ],
            "on_ActionPayload": [
                119
            ],
            "on_CalculationResultsPayload": [
                120
            ],
            "on_ChecklistPayload": [
                121
            ],
            "on_ClinicalNotePayload": [
                123
            ],
            "on_ElementsPayload": [
                127
            ],
            "on_EmrReportPayload": [
                133
            ],
            "on_ExtensionActivityRecordPayload": [
                136
            ],
            "on_FormPayload": [
                142
            ],
            "on_FormsPayload": [
                143
            ],
            "on_FormResponsePayload": [
                144
            ],
            "on_GenerateRetoolEmbedUrlPayload": [
                146
            ],
            "on_HostedSessionActivitiesPayload": [
                148
            ],
            "on_HostedSessionPayload": [
                149
            ],
            "on_MessagePayload": [
                157
            ],
            "on_PathwayDataPointDefinitionsPayload": [
                163
            ],
            "on_PathwayPayload": [
                165
            ],
            "on_PatientPayload": [
                179
            ],
            "on_ScheduledStepsPayload": [
                190
            ],
            "on_SearchPatientsPayload": [
                191
            ],
            "on_StakeholdersPayload": [
                192
            ],
            "on_TracksPayload": [
                196
            ],
            "on_TenantPayload": [
                197
            ],
            "on_WebhookCallPayload": [
                200
            ],
            "on_WebhookCallsPayload": [
                206
            ],
            "on_OrchestrationFactsPromptPayload": [
                207
            ],
            "on_HostedPagesLinkPayload": [
                208
            ],
            "on_DecisionOutputsPayload": [
                212
            ],
            "on_FileUploadGCSPayload": [
                213
            ],
            "on_FormActivityDataPointsPayload": [
                218
            ],
            "on_AddActivityMetadataPayload": [
                221
            ],
            "on_AddIdentifierToPatientPayload": [
                223
            ],
            "on_AddTrackPayload": [
                226
            ],
            "on_EmptyPayload": [
                228
            ],
            "on_CancelScheduledTracksPayload": [
                230
            ],
            "on_CompleteExtensionActivityPayload": [
                232
            ],
            "on_CreatePatientPayload": [
                235
            ],
            "on_EvaluateFormRulesPayload": [
                240
            ],
            "on_MarkMessageAsReadPayload": [
                245
            ],
            "on_PatientDemographicsPayload": [
                247
            ],
            "on_RetryApiCallPayload": [
                255
            ],
            "on_RetryWebhookCallPayload": [
                258
            ],
            "on_ScheduleTrackPayload": [
                262
            ],
            "on_StartHostedActivitySessionPayload": [
                264
            ],
            "on_StartHostedPathwaySessionFromLinkPayload": [
                267
            ],
            "on_StartHostedPathwaySessionPayload": [
                270
            ],
            "on_StartPathwayPayload": [
                273
            ],
            "on_StartPathwayWithPatientIdentifierPayload": [
                275
            ],
            "on_StopTrackPayload": [
                278
            ],
            "on_SubmitChecklistPayload": [
                280
            ],
            "on_SubmitFormResponsePayload": [
                282
            ],
            "on_UpdateEmrReportStatusPayload": [
                286
            ],
            "on_UpdatePatientPayload": [
                289
            ],
            "on_UpdatePatientDemographicsQueryPayload": [
                292
            ],
            "on_UpdatePatientLanguagePayload": [
                294
            ],
            "on_UpsertPatientPayload": [
                296
            ],
            "on_IdentityVerificationPayload": [
                299
            ],
            "on_CompleteSessionPayload": [
                301
            ],
            "__typename": [
                4
            ]
        },
        "ScheduledTrack": {
            "id": [
                5
            ],
            "pathway_id": [
                4
            ],
            "track_definition_id": [
                4
            ],
            "release_id": [
                4
            ],
            "tenant_id": [
                4
            ],
            "created_by_user_id": [
                4
            ],
            "created_date": [
                4
            ],
            "modified_date": [
                4
            ],
            "scheduled_date": [
                4
            ],
            "status": [
                4
            ],
            "title": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "PatientPathwaysPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "patientPathways": [
                60
            ],
            "__typename": [
                4
            ]
        },
        "PatientPathway": {
            "id": [
                5
            ],
            "title": [
                4
            ],
            "status": [
                61
            ],
            "status_explanation": [
                4
            ],
            "pathway_definition_id": [
                4
            ],
            "complete_date": [
                4
            ],
            "stop_date": [
                4
            ],
            "start_date": [
                4
            ],
            "release_id": [
                4
            ],
            "version": [
                9
            ],
            "total_activities": [
                9
            ],
            "active_activities": [
                9
            ],
            "failed_activities": [
                9
            ],
            "latest_activity_date": [
                4
            ],
            "latest_activity_title": [
                4
            ],
            "latest_activity_type": [
                4
            ],
            "created": [
                62
            ],
            "baseline_info": [
                64
            ],
            "__typename": [
                4
            ]
        },
        "PathwayStatus": {},
        "AuditTrail": {
            "user_id": [
                4
            ],
            "user_email": [
                4
            ],
            "user_name": [
                4
            ],
            "date": [
                63
            ],
            "__typename": [
                4
            ]
        },
        "SafeDate": {},
        "BaselineDataPoint": {
            "definition": [
                65
            ],
            "value": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "DataPointDefinition": {
            "id": [
                5
            ],
            "key": [
                4
            ],
            "title": [
                4
            ],
            "category": [
                66
            ],
            "valueType": [
                7
            ],
            "source_definition_id": [
                4
            ],
            "possibleValues": [
                67
            ],
            "range": [
                68
            ],
            "unit": [
                4
            ],
            "optional": [
                13
            ],
            "pii": [
                13
            ],
            "metadata": [
                69
            ],
            "__typename": [
                4
            ]
        },
        "DataPointSourceType": {},
        "DataPointPossibleValue": {
            "value": [
                4
            ],
            "label": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "Range": {
            "min": [
                9
            ],
            "max": [
                9
            ],
            "__typename": [
                4
            ]
        },
        "DataPointMetaDataItem": {
            "value": [
                4
            ],
            "key": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "FilterPatientPathways": {
            "status": [
                71
            ],
            "__typename": [
                4
            ]
        },
        "StringArrayFilter": {
            "in": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "BaselineInfoPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "baselineDataPoints": [
                64
            ],
            "__typename": [
                4
            ]
        },
        "ActivitiesPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "pagination": [
                75
            ],
            "sorting": [
                77
            ],
            "activities": [
                78
            ],
            "metadata": [
                94
            ],
            "__typename": [
                4
            ]
        },
        "PaginationAndSortingPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "pagination": [
                75
            ],
            "sorting": [
                77
            ],
            "on_ActivitiesPayload": [
                73
            ],
            "on_OrchestrationFactsPayload": [
                159
            ],
            "on_PathwaysPayload": [
                173
            ],
            "on_PatientsPayload": [
                180
            ],
            "on_PublishedPathwayDefinitionsPayload": [
                184
            ],
            "on_DataPointPayload": [
                210
            ],
            "__typename": [
                4
            ]
        },
        "PaginationOutput": {
            "offset": [
                76
            ],
            "count": [
                76
            ],
            "total_count": [
                76
            ],
            "__typename": [
                4
            ]
        },
        "Int": {},
        "SortingOutput": {
            "field": [
                4
            ],
            "direction": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "Activity": {
            "id": [
                5
            ],
            "stream_id": [
                4
            ],
            "date": [
                4
            ],
            "subject": [
                79
            ],
            "action": [
                81
            ],
            "object": [
                82
            ],
            "indirect_object": [
                82
            ],
            "status": [
                84
            ],
            "resolution": [
                85
            ],
            "reference_id": [
                4
            ],
            "reference_type": [
                86
            ],
            "container_name": [
                4
            ],
            "track": [
                87
            ],
            "label": [
                88
            ],
            "sub_activities": [
                89
            ],
            "inputs": [
                1
            ],
            "outputs": [
                48
            ],
            "isUserActivity": [
                13
            ],
            "public": [
                13
            ],
            "context": [
                91
            ],
            "session_id": [
                4
            ],
            "stakeholders": [
                82
            ],
            "icon_url": [
                4
            ],
            "action_component": [
                92
            ],
            "metadata": [
                45
            ],
            "form_display_mode": [
                93
            ],
            "form": [
                3
            ],
            "__typename": [
                4
            ]
        },
        "ActivitySubject": {
            "id": [
                4
            ],
            "type": [
                80
            ],
            "name": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ActivitySubjectType": {},
        "ActivityAction": {},
        "ActivityObject": {
            "type": [
                83
            ],
            "id": [
                4
            ],
            "name": [
                4
            ],
            "email": [
                4
            ],
            "preferred_language": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ActivityObjectType": {},
        "ActivityStatus": {},
        "ActivityResolution": {},
        "ActivityReferenceType": {},
        "ActivityTrack": {
            "id": [
                4
            ],
            "title": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ActivityLabel": {
            "id": [
                4
            ],
            "color": [
                4
            ],
            "text": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "SubActivity": {
            "id": [
                4
            ],
            "date": [
                4
            ],
            "subject": [
                79
            ],
            "action": [
                81
            ],
            "error": [
                4
            ],
            "error_category": [
                4
            ],
            "object": [
                82
            ],
            "text": [
                90
            ],
            "scheduled_date": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "TranslatedText": {
            "en": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "PathwayContext": {
            "instance_id": [
                4
            ],
            "pathway_id": [
                4
            ],
            "track_id": [
                4
            ],
            "step_id": [
                4
            ],
            "action_id": [
                4
            ],
            "agent_thread_id": [
                4
            ],
            "agent_id": [
                4
            ],
            "agent_config_id": [
                4
            ],
            "run_id": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ActionComponent": {
            "definition_id": [
                4
            ],
            "release_id": [
                4
            ],
            "title": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "FormDisplayMode": {},
        "ActivityMetadata": {
            "stakeholders": [
                82
            ],
            "__typename": [
                4
            ]
        },
        "PaginationParams": {
            "offset": [
                76
            ],
            "count": [
                76
            ],
            "__typename": [
                4
            ]
        },
        "SortingParams": {
            "field": [
                4
            ],
            "direction": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "FilterCareflowActivitiesParams": {
            "action": [
                4
            ],
            "activity_status": [
                4
            ],
            "activity_type": [
                4
            ],
            "stakeholders": [
                4
            ],
            "hide_system_activities": [
                13
            ],
            "date_range": [
                98
            ],
            "reference_id": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "DateRangeInput": {
            "from": [
                63
            ],
            "to": [
                63
            ],
            "__typename": [
                4
            ]
        },
        "ActivityPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "activity": [
                78
            ],
            "__typename": [
                4
            ]
        },
        "FilterActivitiesParams": {
            "action": [
                71
            ],
            "activity_status": [
                71
            ],
            "pathway_definition_id": [
                71
            ],
            "patient_id": [
                101
            ],
            "activity_type": [
                71
            ],
            "stakeholders": [
                71
            ],
            "pathway_status": [
                71
            ],
            "reference_id": [
                101
            ],
            "__typename": [
                4
            ]
        },
        "TextFilterEquals": {
            "eq": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ActivityTypesPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "activityTypes": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "WorkerAgentConfigPayload": {
            "workerAgentConfig": [
                104
            ],
            "__typename": [
                4
            ]
        },
        "WorkerAgentConfigGraphqlType": {
            "id": [
                4
            ],
            "agent_uuid": [
                4
            ],
            "state": [
                4
            ],
            "name": [
                4
            ],
            "description": [
                4
            ],
            "agent_id": [
                4
            ],
            "organization_slug": [
                4
            ],
            "version": [
                9
            ],
            "instructions": [
                4
            ],
            "jobToBeDone": [
                4
            ],
            "stakeholders": [
                105
            ],
            "input_specs": [
                106
            ],
            "output_specs": [
                106
            ],
            "tools": [
                107
            ],
            "guardrails": [
                4
            ],
            "created": [
                109
            ],
            "updated": [
                109
            ],
            "__typename": [
                4
            ]
        },
        "StakeholderInfoGraphqlType": {
            "definition_id": [
                4
            ],
            "name": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "FieldSpecGraphqlType": {
            "name": [
                4
            ],
            "description": [
                4
            ],
            "type": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ToolSpecGraphqlType": {
            "id": [
                4
            ],
            "name": [
                4
            ],
            "type": [
                4
            ],
            "description": [
                4
            ],
            "parameters": [
                108
            ],
            "hitl_required": [
                13
            ],
            "__typename": [
                4
            ]
        },
        "ParameterSpecGraphqlType": {
            "name": [
                4
            ],
            "description": [
                4
            ],
            "value_source": [
                4
            ],
            "value_type": [
                4
            ],
            "required": [
                13
            ],
            "instructions": [
                4
            ],
            "static_value": [
                4
            ],
            "input_field_name": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "AuditGraphqlType": {
            "at": [
                63
            ],
            "by": [
                110
            ],
            "__typename": [
                4
            ]
        },
        "ByGraphqlType": {
            "id": [
                4
            ],
            "name": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ApiCallPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "api_call": [
                112
            ],
            "__typename": [
                4
            ]
        },
        "ApiCall": {
            "id": [
                5
            ],
            "request": [
                113
            ],
            "responses": [
                116
            ],
            "created_at": [
                4
            ],
            "status": [
                117
            ],
            "title": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ApiCallRequest": {
            "method": [
                114
            ],
            "endpoint": [
                4
            ],
            "headers": [
                115
            ],
            "body": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ApiCallRequestMethod": {},
        "ApiCallHeader": {
            "key": [
                4
            ],
            "value": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ApiCallResponse": {
            "status": [
                9
            ],
            "body": [
                4
            ],
            "date": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ApiCallStatus": {},
        "ApiCallsPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "api_calls": [
                112
            ],
            "__typename": [
                4
            ]
        },
        "ActionPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "calculationId": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "CalculationResultsPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "result": [
                53
            ],
            "__typename": [
                4
            ]
        },
        "ChecklistPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "checklist": [
                122
            ],
            "__typename": [
                4
            ]
        },
        "Checklist": {
            "title": [
                4
            ],
            "items": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ClinicalNotePayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "clinical_note": [
                124
            ],
            "__typename": [
                4
            ]
        },
        "GeneratedClinicalNote": {
            "id": [
                5
            ],
            "narratives": [
                125
            ],
            "context": [
                126
            ],
            "__typename": [
                4
            ]
        },
        "GeneratedClinicalNoteNarrative": {
            "id": [
                5
            ],
            "key": [
                4
            ],
            "title": [
                4
            ],
            "body": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "GeneratedClinicalNoteContextField": {
            "key": [
                4
            ],
            "value": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ElementsPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "elements": [
                128
            ],
            "__typename": [
                4
            ]
        },
        "Element": {
            "id": [
                5
            ],
            "parent_id": [
                5
            ],
            "name": [
                4
            ],
            "type": [
                129
            ],
            "start_date": [
                4
            ],
            "end_date": [
                4
            ],
            "label": [
                88
            ],
            "activity_type": [
                130
            ],
            "status": [
                131
            ],
            "context": [
                91
            ],
            "stakeholders": [
                132
            ],
            "__typename": [
                4
            ]
        },
        "ElementType": {},
        "ActionType": {},
        "ElementStatus": {},
        "ElementStakeholder": {
            "id": [
                5
            ],
            "name": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "EmrReportPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "report": [
                134
            ],
            "__typename": [
                4
            ]
        },
        "EmrReport": {
            "id": [
                5
            ],
            "message_html": [
                4
            ],
            "metadata": [
                135
            ],
            "__typename": [
                4
            ]
        },
        "EmrReportMetadataField": {
            "id": [
                5
            ],
            "label": [
                4
            ],
            "value": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ExtensionActivityRecordPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "record": [
                137
            ],
            "__typename": [
                4
            ]
        },
        "ExtensionActivityRecord": {
            "id": [
                5
            ],
            "activity_id": [
                4
            ],
            "pathway_id": [
                4
            ],
            "plugin_key": [
                4
            ],
            "plugin_action_key": [
                4
            ],
            "fields": [
                138
            ],
            "date": [
                4
            ],
            "settings": [
                140
            ],
            "data_points": [
                141
            ],
            "__typename": [
                4
            ]
        },
        "ExtensionActionField": {
            "id": [
                5
            ],
            "type": [
                139
            ],
            "label": [
                4
            ],
            "value": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ExtensionActionFieldType": {},
        "PluginActionSettingsProperty": {
            "key": [
                4
            ],
            "label": [
                4
            ],
            "value": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ExtensionDataPoint": {
            "label": [
                4
            ],
            "value": [
                4
            ],
            "valueType": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "FormPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "form": [
                3
            ],
            "__typename": [
                4
            ]
        },
        "FormsPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "forms": [
                3
            ],
            "__typename": [
                4
            ]
        },
        "FormResponsePayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "response": [
                145
            ],
            "__typename": [
                4
            ]
        },
        "FormResponse": {
            "answers": [
                34
            ],
            "__typename": [
                4
            ]
        },
        "GenerateRetoolEmbedUrlPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "url": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "UserInfoParams": {
            "firstName": [
                4
            ],
            "lastName": [
                4
            ],
            "email": [
                4
            ],
            "id": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "HostedSessionActivitiesPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "activities": [
                78
            ],
            "__typename": [
                4
            ]
        },
        "HostedSessionPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "session": [
                150
            ],
            "branding": [
                155
            ],
            "metadata": [
                156
            ],
            "__typename": [
                4
            ]
        },
        "HostedSession": {
            "id": [
                5
            ],
            "pathway_id": [
                4
            ],
            "success_url": [
                4
            ],
            "cancel_url": [
                4
            ],
            "status": [
                151
            ],
            "stakeholder": [
                152
            ],
            "user_context": [
                154
            ],
            "created_at": [
                4
            ],
            "expires_at": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "HostedSessionStatus": {},
        "HostedSessionStakeholder": {
            "id": [
                5
            ],
            "type": [
                153
            ],
            "name": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "HostedSessionStakeholderType": {},
        "HostedSessionUserContext": {
            "stytch_member_id": [
                4
            ],
            "stytch_member_email": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "BrandingSettings": {
            "accent_color": [
                4
            ],
            "logo_url": [
                4
            ],
            "hosted_page_title": [
                4
            ],
            "hosted_page_auto_progress": [
                13
            ],
            "hosted_page_autosave": [
                13
            ],
            "custom_theme": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "SessionMetadata": {
            "pathway_definition_id": [
                4
            ],
            "tenant_id": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "MessagePayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "message": [
                158
            ],
            "__typename": [
                4
            ]
        },
        "Message": {
            "id": [
                5
            ],
            "subject": [
                4
            ],
            "body": [
                4
            ],
            "format": [
                40
            ],
            "attachments": [
                41
            ],
            "__typename": [
                4
            ]
        },
        "OrchestrationFactsPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "pagination": [
                75
            ],
            "sorting": [
                77
            ],
            "facts": [
                160
            ],
            "__typename": [
                4
            ]
        },
        "OrchestrationFact": {
            "date": [
                4
            ],
            "level": [
                4
            ],
            "pathway_id": [
                4
            ],
            "content": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "PathwayFactsFilters": {
            "pathway_id": [
                4
            ],
            "date": [
                162
            ],
            "keyword": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "DateFilter": {
            "gte": [
                4
            ],
            "lte": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "PathwayDataPointDefinitionsPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "data_point_definitions": [
                65
            ],
            "__typename": [
                4
            ]
        },
        "FilterPathwayDataPointDefinitionsParams": {
            "category": [
                71
            ],
            "value_type": [
                71
            ],
            "__typename": [
                4
            ]
        },
        "PathwayPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "pathway": [
                166
            ],
            "__typename": [
                4
            ]
        },
        "Pathway": {
            "pathway_definition_id": [
                4
            ],
            "release_id": [
                4
            ],
            "id": [
                5
            ],
            "patient_id": [
                4
            ],
            "version": [
                9
            ],
            "title": [
                4
            ],
            "start_date": [
                63
            ],
            "stop_date": [
                63
            ],
            "complete_date": [
                63
            ],
            "activities": [
                78
            ],
            "latestActivities": [
                78
            ],
            "status": [
                61
            ],
            "status_explanation": [
                4
            ],
            "tracks": [
                167
            ],
            "created": [
                62
            ],
            "patient": [
                168
            ],
            "__typename": [
                4
            ]
        },
        "Track": {
            "id": [
                5
            ],
            "title": [
                4
            ],
            "release_id": [
                4
            ],
            "can_trigger_manually": [
                13
            ],
            "__typename": [
                4
            ]
        },
        "User": {
            "id": [
                5
            ],
            "tenant_id": [
                4
            ],
            "profile": [
                169
            ],
            "__typename": [
                4
            ]
        },
        "UserProfile": {
            "email": [
                4
            ],
            "first_name": [
                4
            ],
            "last_name": [
                4
            ],
            "name": [
                4
            ],
            "birth_date": [
                4
            ],
            "preferred_language": [
                4
            ],
            "sex": [
                170
            ],
            "national_registry_number": [
                4
            ],
            "patient_code": [
                4
            ],
            "phone": [
                4
            ],
            "mobile_phone": [
                4
            ],
            "address": [
                171
            ],
            "identifier": [
                172
            ],
            "patient_timezone": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "Sex": {},
        "Address": {
            "street": [
                4
            ],
            "city": [
                4
            ],
            "zip": [
                4
            ],
            "state": [
                4
            ],
            "country": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "Identifier": {
            "system": [
                4
            ],
            "value": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "PathwaysPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "pagination": [
                75
            ],
            "sorting": [
                77
            ],
            "pathways": [
                174
            ],
            "__typename": [
                4
            ]
        },
        "PathwaySummary": {
            "pathway_definition_id": [
                4
            ],
            "id": [
                5
            ],
            "title": [
                4
            ],
            "status": [
                61
            ],
            "status_explanation": [
                4
            ],
            "patient_id": [
                4
            ],
            "start_date": [
                63
            ],
            "stop_date": [
                63
            ],
            "complete_date": [
                63
            ],
            "version": [
                9
            ],
            "__typename": [
                4
            ]
        },
        "FilterPathways": {
            "pathway_definition_id": [
                176
            ],
            "status": [
                71
            ],
            "patient_id": [
                71
            ],
            "version": [
                177
            ],
            "release_id": [
                71
            ],
            "start_date": [
                162
            ],
            "__typename": [
                4
            ]
        },
        "IdFilter": {
            "eq": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "NumberArrayFilter": {
            "in": [
                9
            ],
            "__typename": [
                4
            ]
        },
        "PatientDemographicsQueryConfigurationPayload": {
            "is_enabled": [
                13
            ],
            "input_box_text": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "PatientPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "patient": [
                168
            ],
            "__typename": [
                4
            ]
        },
        "PatientsPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "pagination": [
                75
            ],
            "sorting": [
                77
            ],
            "patients": [
                168
            ],
            "__typename": [
                4
            ]
        },
        "FilterPatients": {
            "profile_id": [
                71
            ],
            "patient_code": [
                101
            ],
            "national_registry_number": [
                101
            ],
            "name": [
                182
            ],
            "search": [
                183
            ],
            "__typename": [
                4
            ]
        },
        "TextFilter": {
            "eq": [
                4
            ],
            "contains": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "TextFilterContains": {
            "contains": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "PublishedPathwayDefinitionsPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "pagination": [
                75
            ],
            "sorting": [
                77
            ],
            "publishedPathwayDefinitions": [
                185
            ],
            "__typename": [
                4
            ]
        },
        "PublishedPathwayDefinition": {
            "id": [
                5
            ],
            "title": [
                4
            ],
            "version": [
                9
            ],
            "release_id": [
                4
            ],
            "release_date": [
                4
            ],
            "created": [
                62
            ],
            "last_updated": [
                62
            ],
            "latest": [
                186
            ],
            "all": [
                186
            ],
            "total_activities": [
                9
            ],
            "active_activities": [
                9
            ],
            "failed_activities": [
                9
            ],
            "cancelled_activities": [
                9
            ],
            "total_stakeholders": [
                9
            ],
            "stakeholders_with_pending_activities_list": [
                4
            ],
            "total_patients": [
                9
            ],
            "patients_with_pending_activities": [
                9
            ],
            "dataPointDefinitions": [
                65
            ],
            "data_point_definitions": [
                65
            ],
            "track_definitions": [
                167
            ],
            "__typename": [
                4
            ]
        },
        "PathwayDefinitionDetails": {
            "total_careflows": [
                9
            ],
            "active_careflows": [
                9
            ],
            "stopped_careflows": [
                9
            ],
            "completed_careflows": [
                9
            ],
            "total_patients": [
                9
            ],
            "__typename": [
                4
            ]
        },
        "CareflowVersionsPayload": {
            "careflowVersions": [
                188
            ],
            "__typename": [
                4
            ]
        },
        "CareflowVersions": {
            "careflow_definition_id": [
                4
            ],
            "versions": [
                189
            ],
            "__typename": [
                4
            ]
        },
        "CareflowVersion": {
            "version": [
                9
            ],
            "release_id": [
                4
            ],
            "release_date": [
                4
            ],
            "live": [
                13
            ],
            "__typename": [
                4
            ]
        },
        "ScheduledStepsPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "steps": [
                128
            ],
            "__typename": [
                4
            ]
        },
        "SearchPatientsPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "patients": [
                168
            ],
            "__typename": [
                4
            ]
        },
        "StakeholdersPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "stakeholders": [
                193
            ],
            "__typename": [
                4
            ]
        },
        "Stakeholder": {
            "id": [
                5
            ],
            "definition_id": [
                4
            ],
            "label": [
                194
            ],
            "clinical_app_role": [
                195
            ],
            "release_id": [
                4
            ],
            "version": [
                9
            ],
            "__typename": [
                4
            ]
        },
        "StakeholderLabel": {
            "en": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "StakeholderClinicalAppRole": {},
        "TracksPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "tracks": [
                167
            ],
            "__typename": [
                4
            ]
        },
        "TenantPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "tenant": [
                198
            ],
            "__typename": [
                4
            ]
        },
        "Tenant": {
            "name": [
                4
            ],
            "logo_path": [
                4
            ],
            "accent_color": [
                4
            ],
            "hosted_page_title": [
                4
            ],
            "is_default": [
                13
            ],
            "identifier_systems": [
                199
            ],
            "__typename": [
                4
            ]
        },
        "IdentifierSystem": {
            "name": [
                4
            ],
            "display_name": [
                4
            ],
            "system": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "WebhookCallPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "webhook_call": [
                201
            ],
            "__typename": [
                4
            ]
        },
        "WebhookCall": {
            "id": [
                5
            ],
            "request": [
                202
            ],
            "responses": [
                204
            ],
            "status": [
                4
            ],
            "webhook_id": [
                4
            ],
            "webhook_name": [
                4
            ],
            "event_type": [
                4
            ],
            "created_at": [
                4
            ],
            "pathway": [
                205
            ],
            "__typename": [
                4
            ]
        },
        "WebhookCallRequest": {
            "endpoint": [
                4
            ],
            "headers": [
                203
            ],
            "body": [
                4
            ],
            "method": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "WebhookCallHeader": {
            "key": [
                4
            ],
            "value": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "WebhookCallResponse": {
            "status": [
                9
            ],
            "body": [
                4
            ],
            "date": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ApiPathwayContext": {
            "id": [
                4
            ],
            "start_date": [
                4
            ],
            "pathway_definition_id": [
                4
            ],
            "patient_id": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "WebhookCallsPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "webhook_calls": [
                201
            ],
            "__typename": [
                4
            ]
        },
        "OrchestrationFactsPromptPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "response": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "HostedPagesLinkPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "hosted_pages_link": [
                209
            ],
            "__typename": [
                4
            ]
        },
        "HostedPagesLink": {
            "id": [
                5
            ],
            "pathway_id": [
                4
            ],
            "stakeholder_id": [
                4
            ],
            "url": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "DataPointPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "pagination": [
                75
            ],
            "sorting": [
                77
            ],
            "dataPoints": [
                211
            ],
            "__typename": [
                4
            ]
        },
        "DataPoint": {
            "id": [
                5
            ],
            "key": [
                4
            ],
            "data_set_id": [
                4
            ],
            "serialized_value": [
                4
            ],
            "data_point_definition_id": [
                4
            ],
            "date": [
                4
            ],
            "valueType": [
                7
            ],
            "activity_id": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "DecisionOutputsPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "outputs": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "FileUploadGCSPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "upload_url": [
                4
            ],
            "file_url": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "OrchestratedAgentPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "agent": [
                215
            ],
            "__typename": [
                4
            ]
        },
        "OrchestratedAgent": {
            "tenant_id": [
                4
            ],
            "careflow_id": [
                4
            ],
            "agent_definition_id": [
                4
            ],
            "agent_version": [
                9
            ],
            "agent_id": [
                4
            ],
            "agent_config_id": [
                4
            ],
            "agent_thread_id": [
                4
            ],
            "status": [
                4
            ],
            "execution": [
                45
            ],
            "context": [
                45
            ],
            "hosted_pages_links": [
                216
            ],
            "created_at": [
                4
            ],
            "updated_at": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "StakeholderHPLink": {
            "stakeholder": [
                217
            ],
            "url": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "AgentStakeholder": {
            "definition_id": [
                4
            ],
            "name": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "FormActivityDataPointsPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "data_points": [
                219
            ],
            "__typename": [
                4
            ]
        },
        "FormActivityDataPoint": {
            "key": [
                4
            ],
            "value": [
                4
            ],
            "valueType": [
                7
            ],
            "__typename": [
                4
            ]
        },
        "Mutation": {
            "addActivityMetadata": [
                221,
                {
                    "input": [
                        222,
                        "AddActivityMetadataInput!"
                    ]
                }
            ],
            "addIdentifierToPatient": [
                223,
                {
                    "input": [
                        224,
                        "AddIdentifierToPatientInput!"
                    ]
                }
            ],
            "addTrack": [
                226,
                {
                    "input": [
                        227,
                        "AddTrackInput!"
                    ]
                }
            ],
            "expireActivity": [
                228,
                {
                    "input": [
                        229,
                        "ExpireActivityInput!"
                    ]
                }
            ],
            "unscheduleTracks": [
                230,
                {
                    "input": [
                        231,
                        "CancelScheduledTracksInput!"
                    ]
                }
            ],
            "completeExtensionActivity": [
                232,
                {
                    "input": [
                        233,
                        "CompleteExtensionActivityInput!"
                    ]
                }
            ],
            "createPatient": [
                235,
                {
                    "input": [
                        236
                    ]
                }
            ],
            "deletePathway": [
                228,
                {
                    "input": [
                        238,
                        "DeletePathwayInput!"
                    ]
                }
            ],
            "deletePatient": [
                228,
                {
                    "input": [
                        239,
                        "DeletePatientInput!"
                    ]
                }
            ],
            "evaluateFormRules": [
                240,
                {
                    "input": [
                        242,
                        "EvaluateFormRulesInput!"
                    ]
                }
            ],
            "expireTimer": [
                228,
                {
                    "input": [
                        244,
                        "ExpireTimerInput!"
                    ]
                }
            ],
            "markMessageAsRead": [
                245,
                {
                    "input": [
                        246,
                        "MarkMessageAsReadInput!"
                    ]
                }
            ],
            "requestPatientDemographics": [
                247,
                {
                    "input": [
                        248,
                        "PatientDemographicsInput!"
                    ]
                }
            ],
            "retryActivity": [
                228,
                {
                    "input": [
                        249,
                        "RetryActivityInput!"
                    ]
                }
            ],
            "retryAllApiCalls": [
                228,
                {
                    "input": [
                        250,
                        "RetryAllApiCallsInput!"
                    ]
                }
            ],
            "retryAllFailedApiCalls": [
                228,
                {
                    "input": [
                        251,
                        "RetryAllFailedApiCallsInput!"
                    ]
                }
            ],
            "retryAllFailedWebhookCalls": [
                228,
                {
                    "input": [
                        252,
                        "RetryAllFailedWebhookCallsInput!"
                    ]
                }
            ],
            "retryAllFailedWebhookCallsForPathwayDefinition": [
                228,
                {
                    "input": [
                        253,
                        "RetryAllFailedWebhookCallsForPathwayDefinitionInput!"
                    ]
                }
            ],
            "retryAllWebhookCalls": [
                228,
                {
                    "input": [
                        254,
                        "RetryAllWebhookCallsInput!"
                    ]
                }
            ],
            "retryApiCall": [
                255,
                {
                    "input": [
                        256,
                        "RetryApiCallInput!"
                    ]
                }
            ],
            "retryPushToEmr": [
                228,
                {
                    "input": [
                        257,
                        "RetryPushToEmrInput!"
                    ]
                }
            ],
            "retryWebhookCall": [
                258,
                {
                    "input": [
                        259,
                        "RetryWebhookCallInput!"
                    ]
                }
            ],
            "saveBaselineInfo": [
                228,
                {
                    "input": [
                        260,
                        "SaveBaselineInfoInput!"
                    ]
                }
            ],
            "scheduleTrack": [
                262,
                {
                    "input": [
                        263,
                        "ScheduleTrackInput!"
                    ]
                }
            ],
            "startHostedActivitySession": [
                264,
                {
                    "input": [
                        265,
                        "StartHostedActivitySessionInput!"
                    ]
                }
            ],
            "startHostedPathwaySessionFromLink": [
                267,
                {
                    "input": [
                        268,
                        "StartHostedPathwaySessionFromLinkInput!"
                    ]
                }
            ],
            "startHostedActivitySessionViaHostedPagesLink": [
                264,
                {
                    "input": [
                        269,
                        "StartHostedActivitySessionViaHostedPagesLinkInput!"
                    ]
                }
            ],
            "startHostedPathwaySession": [
                270,
                {
                    "input": [
                        271,
                        "StartHostedPathwaySessionInput!"
                    ]
                }
            ],
            "startPathway": [
                273,
                {
                    "input": [
                        274,
                        "StartPathwayInput!"
                    ]
                }
            ],
            "startPathwayWithPatientIdentifier": [
                275,
                {
                    "input": [
                        276,
                        "StartPathwayWithPatientIdentifierInput!"
                    ]
                }
            ],
            "stopPathway": [
                228,
                {
                    "input": [
                        277,
                        "StopPathwayInput!"
                    ]
                }
            ],
            "stopTrack": [
                278,
                {
                    "input": [
                        279,
                        "StopTrackInput!"
                    ]
                }
            ],
            "submitChecklist": [
                280,
                {
                    "input": [
                        281,
                        "SubmitChecklistInput!"
                    ]
                }
            ],
            "submitFormResponse": [
                282,
                {
                    "input": [
                        283,
                        "SubmitFormResponseInput!"
                    ]
                }
            ],
            "updateBaselineInfo": [
                228,
                {
                    "input": [
                        285,
                        "UpdateBaselineInfoInput!"
                    ]
                }
            ],
            "updateEmrReportStatus": [
                286,
                {
                    "input": [
                        288,
                        "UpdateEmrReportStatusInput!"
                    ]
                }
            ],
            "updatePatient": [
                289,
                {
                    "input": [
                        290,
                        "UpdatePatientInput!"
                    ]
                }
            ],
            "updatePatientDemographicsQuery": [
                292,
                {
                    "input": [
                        293,
                        "UpdatePatientDemographicsQueryInput!"
                    ]
                }
            ],
            "updatePatientLanguage": [
                294,
                {
                    "input": [
                        295,
                        "UpdatePatientLanguageInput!"
                    ]
                }
            ],
            "upsertPatient": [
                296,
                {
                    "input": [
                        297,
                        "UpsertPatientInput!"
                    ]
                }
            ],
            "verify_identity": [
                299,
                {
                    "input": [
                        300,
                        "VerifyIdentityInput!"
                    ]
                }
            ],
            "completeSession": [
                301,
                {
                    "input": [
                        302,
                        "CompleteSessionInput!"
                    ]
                }
            ],
            "__typename": [
                4
            ]
        },
        "AddActivityMetadataPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "activity": [
                78
            ],
            "__typename": [
                4
            ]
        },
        "AddActivityMetadataInput": {
            "activity_id": [
                4
            ],
            "note": [
                4
            ],
            "metadata": [
                45
            ],
            "__typename": [
                4
            ]
        },
        "AddIdentifierToPatientPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "patient": [
                168
            ],
            "__typename": [
                4
            ]
        },
        "AddIdentifierToPatientInput": {
            "patient_id": [
                4
            ],
            "identifier": [
                225
            ],
            "__typename": [
                4
            ]
        },
        "IdentifierInput": {
            "system": [
                4
            ],
            "value": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "AddTrackPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "__typename": [
                4
            ]
        },
        "AddTrackInput": {
            "pathway_id": [
                4
            ],
            "track_id": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "EmptyPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "__typename": [
                4
            ]
        },
        "ExpireActivityInput": {
            "activity_id": [
                4
            ],
            "user_id": [
                4
            ],
            "user_email": [
                4
            ],
            "reason": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "CancelScheduledTracksPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "unscheduled_ids": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "CancelScheduledTracksInput": {
            "ids": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "CompleteExtensionActivityPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "activity": [
                78
            ],
            "__typename": [
                4
            ]
        },
        "CompleteExtensionActivityInput": {
            "activity_id": [
                4
            ],
            "data_points": [
                234
            ],
            "__typename": [
                4
            ]
        },
        "ExtensionDataPointInput": {
            "key": [
                4
            ],
            "value": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "CreatePatientPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "patient": [
                168
            ],
            "__typename": [
                4
            ]
        },
        "CreatePatientInput": {
            "email": [
                4
            ],
            "first_name": [
                4
            ],
            "last_name": [
                4
            ],
            "birth_date": [
                4
            ],
            "preferred_language": [
                4
            ],
            "sex": [
                170
            ],
            "national_registry_number": [
                4
            ],
            "patient_code": [
                4
            ],
            "phone": [
                4
            ],
            "mobile_phone": [
                4
            ],
            "address": [
                237
            ],
            "identifier": [
                225
            ],
            "patient_timezone": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "AddressInput": {
            "street": [
                4
            ],
            "city": [
                4
            ],
            "zip": [
                4
            ],
            "state": [
                4
            ],
            "country": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "DeletePathwayInput": {
            "pathway_id": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "DeletePatientInput": {
            "patient_id": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "EvaluateFormRulesPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "results": [
                241
            ],
            "__typename": [
                4
            ]
        },
        "QuestionRuleResult": {
            "question_id": [
                4
            ],
            "rule_id": [
                4
            ],
            "satisfied": [
                13
            ],
            "__typename": [
                4
            ]
        },
        "EvaluateFormRulesInput": {
            "form_id": [
                4
            ],
            "answers": [
                243
            ],
            "__typename": [
                4
            ]
        },
        "AnswerInput": {
            "question_id": [
                4
            ],
            "value": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ExpireTimerInput": {
            "activity_id": [
                4
            ],
            "user_name": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "MarkMessageAsReadPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "activity": [
                78
            ],
            "__typename": [
                4
            ]
        },
        "MarkMessageAsReadInput": {
            "activity_id": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "PatientDemographicsPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "query_id": [
                4
            ],
            "status": [
                4
            ],
            "total": [
                9
            ],
            "entry": [
                169
            ],
            "__typename": [
                4
            ]
        },
        "PatientDemographicsInput": {
            "patient_identifier": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "RetryActivityInput": {
            "activity_id": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "RetryAllApiCallsInput": {
            "pathway_id": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "RetryAllFailedApiCallsInput": {
            "pathway_id": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "RetryAllFailedWebhookCallsInput": {
            "pathway_id": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "RetryAllFailedWebhookCallsForPathwayDefinitionInput": {
            "pathway_definition_id": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "RetryAllWebhookCallsInput": {
            "pathway_id": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "RetryApiCallPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "api_call": [
                112
            ],
            "__typename": [
                4
            ]
        },
        "RetryApiCallInput": {
            "api_call_id": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "RetryPushToEmrInput": {
            "activity_id": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "RetryWebhookCallPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "webhook_call": [
                201
            ],
            "__typename": [
                4
            ]
        },
        "RetryWebhookCallInput": {
            "webhook_call_id": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "SaveBaselineInfoInput": {
            "pathway_id": [
                4
            ],
            "baseline_info": [
                261
            ],
            "__typename": [
                4
            ]
        },
        "BaselineInfoInput": {
            "data_point_definition_id": [
                4
            ],
            "value": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ScheduleTrackPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "id": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ScheduleTrackInput": {
            "pathway_id": [
                4
            ],
            "track_id": [
                4
            ],
            "scheduled_date": [
                4
            ],
            "cancel_any_scheduled": [
                13
            ],
            "__typename": [
                4
            ]
        },
        "StartHostedActivitySessionPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "session_id": [
                4
            ],
            "session_url": [
                4
            ],
            "language": [
                4
            ],
            "user_context": [
                154
            ],
            "__typename": [
                4
            ]
        },
        "StartHostedActivitySessionInput": {
            "pathway_id": [
                4
            ],
            "success_url": [
                4
            ],
            "cancel_url": [
                4
            ],
            "stakeholder_id": [
                4
            ],
            "language": [
                4
            ],
            "user_context": [
                266
            ],
            "__typename": [
                4
            ]
        },
        "HostedSessionUserContextInput": {
            "stytch_member_id": [
                4
            ],
            "stytch_member_email": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "StartHostedPathwaySessionFromLinkPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "session_url": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "StartHostedPathwaySessionFromLinkInput": {
            "id": [
                4
            ],
            "patient_identifier": [
                225
            ],
            "__typename": [
                4
            ]
        },
        "StartHostedActivitySessionViaHostedPagesLinkInput": {
            "hosted_pages_link_id": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "StartHostedPathwaySessionPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "session_id": [
                4
            ],
            "session_url": [
                4
            ],
            "pathway_id": [
                4
            ],
            "stakeholder": [
                152
            ],
            "user_context": [
                154
            ],
            "__typename": [
                4
            ]
        },
        "StartHostedPathwaySessionInput": {
            "pathway_definition_id": [
                4
            ],
            "success_url": [
                4
            ],
            "cancel_url": [
                4
            ],
            "patient_id": [
                4
            ],
            "data_points": [
                272
            ],
            "language": [
                4
            ],
            "patient_identifier": [
                225
            ],
            "ttl": [
                9
            ],
            "stakeholder_definition_id": [
                4
            ],
            "user_context": [
                266
            ],
            "__typename": [
                4
            ]
        },
        "DataPointInput": {
            "data_point_definition_id": [
                4
            ],
            "value": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "StartPathwayPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "pathway_id": [
                4
            ],
            "stakeholders": [
                193
            ],
            "__typename": [
                4
            ]
        },
        "StartPathwayInput": {
            "patient_id": [
                4
            ],
            "pathway_definition_id": [
                4
            ],
            "data_points": [
                272
            ],
            "release_id": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "StartPathwayWithPatientIdentifierPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "pathway_id": [
                4
            ],
            "patient_id": [
                4
            ],
            "stakeholders": [
                193
            ],
            "__typename": [
                4
            ]
        },
        "StartPathwayWithPatientIdentifierInput": {
            "patient_identifier": [
                225
            ],
            "pathway_definition_id": [
                4
            ],
            "data_points": [
                272
            ],
            "release_id": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "StopPathwayInput": {
            "pathway_id": [
                4
            ],
            "reason": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "StopTrackPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "track": [
                128
            ],
            "__typename": [
                4
            ]
        },
        "StopTrackInput": {
            "pathway_id": [
                4
            ],
            "track_id": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "SubmitChecklistPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "activity": [
                78
            ],
            "__typename": [
                4
            ]
        },
        "SubmitChecklistInput": {
            "activity_id": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "SubmitFormResponsePayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "activity": [
                78
            ],
            "__typename": [
                4
            ]
        },
        "SubmitFormResponseInput": {
            "activity_id": [
                4
            ],
            "response": [
                284
            ],
            "__typename": [
                4
            ]
        },
        "QuestionResponseInput": {
            "question_id": [
                4
            ],
            "value": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "UpdateBaselineInfoInput": {
            "pathway_id": [
                4
            ],
            "baseline_info": [
                261
            ],
            "__typename": [
                4
            ]
        },
        "UpdateEmrReportStatusPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "request": [
                287
            ],
            "__typename": [
                4
            ]
        },
        "EMRRequest": {
            "id": [
                4
            ],
            "status": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "UpdateEmrReportStatusInput": {
            "request_id": [
                4
            ],
            "status": [
                4
            ],
            "reason": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "UpdatePatientPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "patient": [
                168
            ],
            "__typename": [
                4
            ]
        },
        "UpdatePatientInput": {
            "patient_id": [
                4
            ],
            "profile": [
                291
            ],
            "__typename": [
                4
            ]
        },
        "PatientProfileInput": {
            "first_name": [
                4
            ],
            "last_name": [
                4
            ],
            "birth_date": [
                4
            ],
            "preferred_language": [
                4
            ],
            "sex": [
                170
            ],
            "national_registry_number": [
                4
            ],
            "patient_code": [
                4
            ],
            "email": [
                4
            ],
            "phone": [
                4
            ],
            "mobile_phone": [
                4
            ],
            "address": [
                237
            ],
            "identifier": [
                225
            ],
            "patient_timezone": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "UpdatePatientDemographicsQueryPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "created_patient_entry_index": [
                9
            ],
            "created_patient_id": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "UpdatePatientDemographicsQueryInput": {
            "created_patient_id": [
                4
            ],
            "created_patient_entry_index": [
                9
            ],
            "query_id": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "UpdatePatientLanguagePayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "user": [
                168
            ],
            "__typename": [
                4
            ]
        },
        "UpdatePatientLanguageInput": {
            "preferred_language": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "UpsertPatientPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "patient": [
                168
            ],
            "__typename": [
                4
            ]
        },
        "UpsertPatientInput": {
            "patient_identifier": [
                225
            ],
            "profile": [
                298
            ],
            "__typename": [
                4
            ]
        },
        "UpsertPatientProfileInput": {
            "email": [
                4
            ],
            "first_name": [
                4
            ],
            "last_name": [
                4
            ],
            "birth_date": [
                4
            ],
            "preferred_language": [
                4
            ],
            "sex": [
                170
            ],
            "national_registry_number": [
                4
            ],
            "patient_code": [
                4
            ],
            "phone": [
                4
            ],
            "mobile_phone": [
                4
            ],
            "address": [
                237
            ],
            "patient_timezone": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "IdentityVerificationPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "is_verified": [
                13
            ],
            "__typename": [
                4
            ]
        },
        "VerifyIdentityInput": {
            "dob": [
                4
            ],
            "pathway_id": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "CompleteSessionPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "session": [
                150
            ],
            "__typename": [
                4
            ]
        },
        "CompleteSessionInput": {
            "session_id": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "Subscription": {
            "activityCreated": [
                78,
                {
                    "pathway_id": [
                        4
                    ],
                    "only_patient_activities": [
                        13
                    ]
                }
            ],
            "activityUpdated": [
                78,
                {
                    "pathway_id": [
                        4
                    ],
                    "only_patient_activities": [
                        13
                    ]
                }
            ],
            "activityCompleted": [
                78,
                {
                    "pathway_id": [
                        4
                    ],
                    "only_patient_activities": [
                        13
                    ]
                }
            ],
            "activityExpired": [
                78,
                {
                    "pathway_id": [
                        4
                    ],
                    "only_patient_activities": [
                        13
                    ]
                }
            ],
            "apiCallCreated": [
                112,
                {
                    "pathway_id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "apiCallUpdated": [
                112,
                {
                    "pathway_id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "elementCreated": [
                128,
                {
                    "pathway_id": [
                        4,
                        "String!"
                    ],
                    "element_type": [
                        129
                    ]
                }
            ],
            "elementCompleted": [
                128,
                {
                    "pathway_id": [
                        4,
                        "String!"
                    ],
                    "element_type": [
                        129
                    ]
                }
            ],
            "elementUpdated": [
                128,
                {
                    "pathway_id": [
                        4,
                        "String!"
                    ],
                    "element_type": [
                        129
                    ]
                }
            ],
            "sessionActivityCreated": [
                78,
                {
                    "only_stakeholder_activities": [
                        13
                    ]
                }
            ],
            "sessionActivityUpdated": [
                78,
                {
                    "only_stakeholder_activities": [
                        13
                    ]
                }
            ],
            "sessionActivityCompleted": [
                78,
                {
                    "only_stakeholder_activities": [
                        13
                    ]
                }
            ],
            "sessionActivityExpired": [
                78,
                {
                    "only_stakeholder_activities": [
                        13
                    ]
                }
            ],
            "sessionExpired": [
                150
            ],
            "sessionCompleted": [
                150
            ],
            "pathwayUpdated": [
                166,
                {
                    "id": [
                        5,
                        "ID!"
                    ]
                }
            ],
            "webhookCallCreated": [
                201,
                {
                    "pathway_id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "webhookCallUpdated": [
                201,
                {
                    "pathway_id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                4
            ]
        }
    }
}