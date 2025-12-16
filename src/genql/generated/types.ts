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
        51,
        66,
        78,
        80,
        83,
        94,
        98,
        99,
        101,
        102,
        103,
        104,
        111,
        132,
        135,
        147,
        148,
        149,
        157,
        169,
        171,
        188,
        213
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
            "on_DecisionTableActivityInputs": [
                47
            ],
            "on_CodeBlockActivityInputs": [
                48
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
            "componentKey": [
                4
            ],
            "extension_settings": [
                45
            ],
            "__typename": [
                4
            ]
        },
        "DecisionTableActivityInputs": {
            "type": [
                2
            ],
            "decision_table": [
                45
            ],
            "__typename": [
                4
            ]
        },
        "CodeBlockActivityInputs": {
            "type": [
                2
            ],
            "code_block": [
                45
            ],
            "__typename": [
                4
            ]
        },
        "DynamicFormActivityOutputs": {
            "type": [
                51
            ],
            "answers": [
                52
            ],
            "__typename": [
                4
            ]
        },
        "ActivityOutputs": {
            "type": [
                51
            ],
            "on_DynamicFormActivityOutputs": [
                49
            ],
            "on_FormActivityOutputs": [
                53
            ],
            "on_CalculationActivityOutputs": [
                54
            ],
            "on_ExtensionActivityOutputs": [
                56
            ],
            "on_DecisionTableActivityOutputs": [
                57
            ],
            "on_CodeBlockActivityOutputs": [
                58
            ],
            "on_TrackTriggerActivityOutputs": [
                60
            ],
            "on_EnrollmentTriggerActivityOutputs": [
                63
            ],
            "on_TimerActivityOutputs": [
                65
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
                51
            ],
            "answers": [
                52
            ],
            "__typename": [
                4
            ]
        },
        "CalculationActivityOutputs": {
            "type": [
                51
            ],
            "calculation_results": [
                55
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
                51
            ],
            "extension_results": [
                45
            ],
            "__typename": [
                4
            ]
        },
        "DecisionTableActivityOutputs": {
            "type": [
                51
            ],
            "decision_table_outputs": [
                45
            ],
            "matched_rule_ids": [
                4
            ],
            "matched_rule_priorities": [
                9
            ],
            "__typename": [
                4
            ]
        },
        "CodeBlockActivityOutputs": {
            "type": [
                51
            ],
            "result": [
                4
            ],
            "code_block_outputs": [
                45
            ],
            "execution_meta": [
                59
            ],
            "__typename": [
                4
            ]
        },
        "CodeBlockExecutionMeta": {
            "duration_ms": [
                9
            ],
            "execution_id": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "TrackTriggerActivityOutputs": {
            "type": [
                51
            ],
            "satisfied": [
                13
            ],
            "evaluated_rule_id": [
                4
            ],
            "trigger_type": [
                4
            ],
            "triggering_event": [
                61
            ],
            "target_track_id": [
                4
            ],
            "target_track_name": [
                4
            ],
            "scheduled_activation_date": [
                4
            ],
            "activation_reference": [
                62
            ],
            "__typename": [
                4
            ]
        },
        "TriggeringEvent": {
            "type": [
                4
            ],
            "source_id": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ActivationReference": {
            "type": [
                4
            ],
            "reference_name": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "EnrollmentTriggerActivityOutputs": {
            "type": [
                51
            ],
            "action_type": [
                4
            ],
            "result": [
                4
            ],
            "status": [
                4
            ],
            "skip_reason": [
                4
            ],
            "error_message": [
                4
            ],
            "careflow_definition_id": [
                4
            ],
            "careflow_definition_name": [
                4
            ],
            "careflow_id": [
                4
            ],
            "existing_careflow_id": [
                4
            ],
            "existing_careflow_title": [
                4
            ],
            "track_id": [
                4
            ],
            "track_name": [
                4
            ],
            "conditions_evaluated": [
                13
            ],
            "data_points_set": [
                64
            ],
            "source_type": [
                4
            ],
            "source_id": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "EnrollmentTriggerDataPoint": {
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
        "TimerActivityOutputs": {
            "type": [
                51
            ],
            "timer_type": [
                66
            ],
            "delay_config": [
                67
            ],
            "reference_data_point": [
                68
            ],
            "resource_config": [
                69
            ],
            "awaited_data_point": [
                70
            ],
            "timeout_config": [
                71
            ],
            "completion_reason": [
                4
            ],
            "scheduled_date": [
                4
            ],
            "completion_date": [
                4
            ],
            "completion_type": [
                4
            ],
            "skipped_by": [
                4
            ],
            "skip_reason": [
                4
            ],
            "activation_activity_id": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "TimerType": {},
        "TimerDelayConfig": {
            "amount": [
                9
            ],
            "unit": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "TimerReferenceDataPoint": {
            "definition_id": [
                4
            ],
            "name": [
                4
            ],
            "value": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "TimerResourceConfig": {
            "timer_key": [
                4
            ],
            "action_key": [
                4
            ],
            "resource_id": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "TimerAwaitedDataPoint": {
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
        "TimerTimeoutConfig": {
            "amount": [
                9
            ],
            "unit": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "Query": {
            "scheduledTracksForPathway": [
                73,
                {
                    "pathway_id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "patientPathways": [
                76,
                {
                    "patient_id": [
                        4
                    ],
                    "patient_identifier": [
                        87
                    ],
                    "filters": [
                        88
                    ]
                }
            ],
            "baselineInfo": [
                90,
                {
                    "pathway_id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "myPendingActivities": [
                91
            ],
            "myActivities": [
                91,
                {
                    "pagination": [
                        113
                    ],
                    "sorting": [
                        114
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
                91,
                {
                    "pagination": [
                        113
                    ],
                    "sorting": [
                        114
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
                91,
                {
                    "pagination": [
                        113
                    ],
                    "sorting": [
                        114
                    ],
                    "pathway_id": [
                        4,
                        "String!"
                    ],
                    "filters": [
                        115
                    ]
                }
            ],
            "activity": [
                117,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "activities": [
                91,
                {
                    "pagination": [
                        113
                    ],
                    "sorting": [
                        114
                    ],
                    "filters": [
                        118
                    ]
                }
            ],
            "pathwayStepActivities": [
                91,
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
                120,
                {
                    "careflow_id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "agent": [
                121,
                {
                    "id": [
                        5,
                        "ID!"
                    ]
                }
            ],
            "apiCall": [
                129,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "apiCalls": [
                136,
                {
                    "pathway_id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "calculationAction": [
                137,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "calculationResults": [
                138,
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
                139,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "clinicalNote": [
                141,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "pathwayElements": [
                145,
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
                151,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "extensionActivityRecord": [
                154,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "form": [
                160,
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
                161,
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
                162,
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
                164,
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
                        165,
                        "UserInfoParams!"
                    ],
                    "releaseVersion": [
                        4
                    ]
                }
            ],
            "hostedSessionActivities": [
                166,
                {
                    "only_stakeholder_activities": [
                        13
                    ]
                }
            ],
            "hostedSession": [
                167
            ],
            "message": [
                175,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "pathwayFacts": [
                177,
                {
                    "pagination": [
                        113
                    ],
                    "sorting": [
                        114
                    ],
                    "filters": [
                        179,
                        "PathwayFactsFilters!"
                    ]
                }
            ],
            "pathwayDataPointDefinitions": [
                181,
                {
                    "pathway_definition_id": [
                        4
                    ],
                    "release_id": [
                        4,
                        "String!"
                    ],
                    "filters": [
                        182
                    ]
                }
            ],
            "pathway": [
                183,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "myPathways": [
                191
            ],
            "pathways": [
                191,
                {
                    "pagination": [
                        113
                    ],
                    "sorting": [
                        114
                    ],
                    "filters": [
                        193
                    ]
                }
            ],
            "patientDemographicsQueryConfiguration": [
                196
            ],
            "patient": [
                197,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "patients": [
                198,
                {
                    "pagination": [
                        113
                    ],
                    "sorting": [
                        114
                    ],
                    "filters": [
                        199
                    ]
                }
            ],
            "patientByIdentifier": [
                197,
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
                202
            ],
            "getStatusForPublishedPathwayDefinitions": [
                202
            ],
            "getPublishedCareflowVersions": [
                205,
                {
                    "careflow_definition_id": [
                        4
                    ]
                }
            ],
            "scheduledSteps": [
                208,
                {
                    "pathway_id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "searchPatientsByPatientCode": [
                209,
                {
                    "patient_code": [
                        4,
                        "String!"
                    ]
                }
            ],
            "searchPatientsByNationalRegistryNumber": [
                209,
                {
                    "national_registry_number": [
                        4,
                        "String!"
                    ]
                }
            ],
            "filterStakeholders": [
                210,
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
                210,
                {
                    "pathway_definition_ids": [
                        4,
                        "[String!]!"
                    ]
                }
            ],
            "stakeholdersByReleaseIds": [
                210,
                {
                    "release_ids": [
                        4,
                        "[String!]!"
                    ]
                }
            ],
            "stakeholdersByDefinitionIds": [
                210,
                {
                    "stakeholder_definition_ids": [
                        4,
                        "[String!]!"
                    ]
                }
            ],
            "adHocTracksByPathway": [
                214,
                {
                    "pathway_id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "adHocTracksByRelease": [
                214,
                {
                    "release_id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "tenant": [
                215
            ],
            "webhookCall": [
                218,
                {
                    "webhook_call_id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "webhookCalls": [
                224,
                {
                    "pathway_id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "webhookCallsForTenant": [
                224
            ],
            "webhookCallsForPathwayDefinition": [
                224,
                {
                    "pathway_definition_id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "getOrchestrationFactsFromPrompt": [
                225,
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
                226,
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
                228,
                {
                    "pagination": [
                        113
                    ],
                    "sorting": [
                        114
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
            "getSignedUrl": [
                230,
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
                    ],
                    "activity_id": [
                        4
                    ]
                }
            ],
            "getAgentByThreadId": [
                231,
                {
                    "agent_thread_id": [
                        4
                    ]
                }
            ],
            "formActivityDataPoints": [
                235,
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
                75
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
                73
            ],
            "on_PatientPathwaysPayload": [
                76
            ],
            "on_BaselineInfoPayload": [
                90
            ],
            "on_ActivityPayload": [
                117
            ],
            "on_ActivityTypesPayload": [
                120
            ],
            "on_ApiCallPayload": [
                129
            ],
            "on_ApiCallsPayload": [
                136
            ],
            "on_ActionPayload": [
                137
            ],
            "on_CalculationResultsPayload": [
                138
            ],
            "on_ChecklistPayload": [
                139
            ],
            "on_ClinicalNotePayload": [
                141
            ],
            "on_ElementsPayload": [
                145
            ],
            "on_EmrReportPayload": [
                151
            ],
            "on_ExtensionActivityRecordPayload": [
                154
            ],
            "on_FormPayload": [
                160
            ],
            "on_FormsPayload": [
                161
            ],
            "on_FormResponsePayload": [
                162
            ],
            "on_GenerateRetoolEmbedUrlPayload": [
                164
            ],
            "on_HostedSessionActivitiesPayload": [
                166
            ],
            "on_HostedSessionPayload": [
                167
            ],
            "on_MessagePayload": [
                175
            ],
            "on_PathwayDataPointDefinitionsPayload": [
                181
            ],
            "on_PathwayPayload": [
                183
            ],
            "on_PatientPayload": [
                197
            ],
            "on_ScheduledStepsPayload": [
                208
            ],
            "on_SearchPatientsPayload": [
                209
            ],
            "on_StakeholdersPayload": [
                210
            ],
            "on_TracksPayload": [
                214
            ],
            "on_TenantPayload": [
                215
            ],
            "on_WebhookCallPayload": [
                218
            ],
            "on_WebhookCallsPayload": [
                224
            ],
            "on_OrchestrationFactsPromptPayload": [
                225
            ],
            "on_HostedPagesLinkPayload": [
                226
            ],
            "on_FileUploadGCSPayload": [
                230
            ],
            "on_FormActivityDataPointsPayload": [
                235
            ],
            "on_AddActivityMetadataPayload": [
                238
            ],
            "on_AddIdentifierToPatientPayload": [
                240
            ],
            "on_AddTrackPayload": [
                242
            ],
            "on_EmptyPayload": [
                244
            ],
            "on_CancelScheduledTracksPayload": [
                246
            ],
            "on_CompleteExtensionActivityPayload": [
                248
            ],
            "on_CreatePatientPayload": [
                251
            ],
            "on_EvaluateFormRulesPayload": [
                256
            ],
            "on_MarkMessageAsReadPayload": [
                261
            ],
            "on_PatientDemographicsPayload": [
                263
            ],
            "on_RetryApiCallPayload": [
                271
            ],
            "on_RetryWebhookCallPayload": [
                274
            ],
            "on_ScheduleTrackPayload": [
                278
            ],
            "on_StartHostedActivitySessionPayload": [
                280
            ],
            "on_StartHostedPathwaySessionFromLinkPayload": [
                283
            ],
            "on_StartHostedPathwaySessionPayload": [
                286
            ],
            "on_StartPathwayPayload": [
                289
            ],
            "on_StartPathwayWithPatientIdentifierPayload": [
                291
            ],
            "on_StopTrackPayload": [
                294
            ],
            "on_SubmitChecklistPayload": [
                296
            ],
            "on_SubmitFormResponsePayload": [
                298
            ],
            "on_UpdateEmrReportStatusPayload": [
                302
            ],
            "on_UpdatePatientPayload": [
                305
            ],
            "on_UpdatePatientDemographicsQueryPayload": [
                308
            ],
            "on_UpdatePatientLanguagePayload": [
                310
            ],
            "on_UpsertPatientPayload": [
                312
            ],
            "on_IdentityVerificationPayload": [
                315
            ],
            "on_CompleteSessionPayload": [
                317
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
                77
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
                78
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
                79
            ],
            "baseline_info": [
                81
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
                80
            ],
            "__typename": [
                4
            ]
        },
        "SafeDate": {},
        "BaselineDataPoint": {
            "definition": [
                82
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
                83
            ],
            "valueType": [
                7
            ],
            "source_definition_id": [
                4
            ],
            "possibleValues": [
                84
            ],
            "range": [
                85
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
                86
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
        "FilterPatientPathways": {
            "status": [
                89
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
                81
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
                93
            ],
            "sorting": [
                95
            ],
            "activities": [
                96
            ],
            "metadata": [
                112
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
                93
            ],
            "sorting": [
                95
            ],
            "on_ActivitiesPayload": [
                91
            ],
            "on_OrchestrationFactsPayload": [
                177
            ],
            "on_PathwaysPayload": [
                191
            ],
            "on_PatientsPayload": [
                198
            ],
            "on_PublishedPathwayDefinitionsPayload": [
                202
            ],
            "on_DataPointPayload": [
                228
            ],
            "__typename": [
                4
            ]
        },
        "PaginationOutput": {
            "offset": [
                94
            ],
            "count": [
                94
            ],
            "total_count": [
                94
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
                97
            ],
            "action": [
                99
            ],
            "object": [
                100
            ],
            "indirect_object": [
                100
            ],
            "status": [
                102
            ],
            "resolution": [
                103
            ],
            "reference_id": [
                4
            ],
            "reference_type": [
                104
            ],
            "container_name": [
                4
            ],
            "track": [
                105
            ],
            "label": [
                106
            ],
            "sub_activities": [
                107
            ],
            "inputs": [
                1
            ],
            "outputs": [
                50
            ],
            "isUserActivity": [
                13
            ],
            "public": [
                13
            ],
            "context": [
                109
            ],
            "session_id": [
                4
            ],
            "stakeholders": [
                100
            ],
            "icon_url": [
                4
            ],
            "action_component": [
                110
            ],
            "metadata": [
                45
            ],
            "form_display_mode": [
                111
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
                98
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
                101
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
                97
            ],
            "action": [
                99
            ],
            "error": [
                4
            ],
            "error_category": [
                4
            ],
            "object": [
                100
            ],
            "text": [
                108
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
                100
            ],
            "__typename": [
                4
            ]
        },
        "PaginationParams": {
            "offset": [
                94
            ],
            "count": [
                94
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
                116
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
                80
            ],
            "to": [
                80
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
                96
            ],
            "__typename": [
                4
            ]
        },
        "FilterActivitiesParams": {
            "action": [
                89
            ],
            "activity_status": [
                89
            ],
            "pathway_definition_id": [
                89
            ],
            "patient_id": [
                119
            ],
            "activity_type": [
                89
            ],
            "stakeholders": [
                89
            ],
            "pathway_status": [
                89
            ],
            "reference_id": [
                119
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
                122
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
                123
            ],
            "input_specs": [
                124
            ],
            "output_specs": [
                124
            ],
            "tools": [
                125
            ],
            "guardrails": [
                4
            ],
            "created": [
                127
            ],
            "updated": [
                127
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
                126
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
                80
            ],
            "by": [
                128
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
                130
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
                131
            ],
            "responses": [
                134
            ],
            "created_at": [
                4
            ],
            "status": [
                135
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
                132
            ],
            "endpoint": [
                4
            ],
            "headers": [
                133
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
                130
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
                55
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
                140
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
                142
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
                143
            ],
            "context": [
                144
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
                146
            ],
            "__typename": [
                4
            ]
        },
        "Element": {
            "id": [
                5
            ],
            "definition_id": [
                4
            ],
            "parent_id": [
                5
            ],
            "name": [
                4
            ],
            "type": [
                147
            ],
            "start_date": [
                4
            ],
            "end_date": [
                4
            ],
            "label": [
                106
            ],
            "activity_type": [
                148
            ],
            "status": [
                149
            ],
            "context": [
                109
            ],
            "stakeholders": [
                150
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
                152
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
                153
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
                155
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
                156
            ],
            "date": [
                4
            ],
            "settings": [
                158
            ],
            "data_points": [
                159
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
                157
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
                163
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
                96
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
                168
            ],
            "branding": [
                173
            ],
            "metadata": [
                174
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
                169
            ],
            "stakeholder": [
                170
            ],
            "user_context": [
                172
            ],
            "created_at": [
                4
            ],
            "expires_at": [
                4
            ],
            "organization_slug": [
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
                171
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
                176
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
                93
            ],
            "sorting": [
                95
            ],
            "facts": [
                178
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
                180
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
                82
            ],
            "__typename": [
                4
            ]
        },
        "FilterPathwayDataPointDefinitionsParams": {
            "category": [
                89
            ],
            "value_type": [
                89
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
                184
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
                80
            ],
            "stop_date": [
                80
            ],
            "complete_date": [
                80
            ],
            "activities": [
                96
            ],
            "latestActivities": [
                96
            ],
            "status": [
                78
            ],
            "status_explanation": [
                4
            ],
            "tracks": [
                185
            ],
            "created": [
                79
            ],
            "patient": [
                186
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
                187
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
                188
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
                189
            ],
            "identifier": [
                190
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
                93
            ],
            "sorting": [
                95
            ],
            "pathways": [
                192
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
                78
            ],
            "status_explanation": [
                4
            ],
            "patient_id": [
                4
            ],
            "start_date": [
                80
            ],
            "stop_date": [
                80
            ],
            "complete_date": [
                80
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
                194
            ],
            "status": [
                89
            ],
            "patient_id": [
                89
            ],
            "patient_identifier": [
                87
            ],
            "version": [
                195
            ],
            "release_id": [
                89
            ],
            "start_date": [
                180
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
                186
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
                93
            ],
            "sorting": [
                95
            ],
            "patients": [
                186
            ],
            "__typename": [
                4
            ]
        },
        "FilterPatients": {
            "profile_id": [
                89
            ],
            "patient_code": [
                119
            ],
            "national_registry_number": [
                119
            ],
            "name": [
                200
            ],
            "search": [
                201
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
                93
            ],
            "sorting": [
                95
            ],
            "publishedPathwayDefinitions": [
                203
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
                79
            ],
            "last_updated": [
                79
            ],
            "latest": [
                204
            ],
            "all": [
                204
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
                82
            ],
            "data_point_definitions": [
                82
            ],
            "track_definitions": [
                185
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
                206
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
                207
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
                146
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
                186
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
                211
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
                212
            ],
            "clinical_app_role": [
                213
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
                185
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
                216
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
                217
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
                219
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
                220
            ],
            "responses": [
                222
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
                223
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
                221
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
                219
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
                227
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
                93
            ],
            "sorting": [
                95
            ],
            "dataPoints": [
                229
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
            "required_headers": [
                45
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
                232
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
                233
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
                234
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
                236
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
                238,
                {
                    "input": [
                        239,
                        "AddActivityMetadataInput!"
                    ]
                }
            ],
            "addIdentifierToPatient": [
                240,
                {
                    "input": [
                        241,
                        "AddIdentifierToPatientInput!"
                    ]
                }
            ],
            "addTrack": [
                242,
                {
                    "input": [
                        243,
                        "AddTrackInput!"
                    ]
                }
            ],
            "expireActivity": [
                244,
                {
                    "input": [
                        245,
                        "ExpireActivityInput!"
                    ]
                }
            ],
            "unscheduleTracks": [
                246,
                {
                    "input": [
                        247,
                        "CancelScheduledTracksInput!"
                    ]
                }
            ],
            "completeExtensionActivity": [
                248,
                {
                    "input": [
                        249,
                        "CompleteExtensionActivityInput!"
                    ]
                }
            ],
            "createPatient": [
                251,
                {
                    "input": [
                        252
                    ]
                }
            ],
            "deletePathway": [
                244,
                {
                    "input": [
                        254,
                        "DeletePathwayInput!"
                    ]
                }
            ],
            "deletePatient": [
                244,
                {
                    "input": [
                        255,
                        "DeletePatientInput!"
                    ]
                }
            ],
            "evaluateFormRules": [
                256,
                {
                    "input": [
                        258,
                        "EvaluateFormRulesInput!"
                    ]
                }
            ],
            "expireTimer": [
                244,
                {
                    "input": [
                        260,
                        "ExpireTimerInput!"
                    ]
                }
            ],
            "markMessageAsRead": [
                261,
                {
                    "input": [
                        262,
                        "MarkMessageAsReadInput!"
                    ]
                }
            ],
            "requestPatientDemographics": [
                263,
                {
                    "input": [
                        264,
                        "PatientDemographicsInput!"
                    ]
                }
            ],
            "retryActivity": [
                244,
                {
                    "input": [
                        265,
                        "RetryActivityInput!"
                    ]
                }
            ],
            "retryAllApiCalls": [
                244,
                {
                    "input": [
                        266,
                        "RetryAllApiCallsInput!"
                    ]
                }
            ],
            "retryAllFailedApiCalls": [
                244,
                {
                    "input": [
                        267,
                        "RetryAllFailedApiCallsInput!"
                    ]
                }
            ],
            "retryAllFailedWebhookCalls": [
                244,
                {
                    "input": [
                        268,
                        "RetryAllFailedWebhookCallsInput!"
                    ]
                }
            ],
            "retryAllFailedWebhookCallsForPathwayDefinition": [
                244,
                {
                    "input": [
                        269,
                        "RetryAllFailedWebhookCallsForPathwayDefinitionInput!"
                    ]
                }
            ],
            "retryAllWebhookCalls": [
                244,
                {
                    "input": [
                        270,
                        "RetryAllWebhookCallsInput!"
                    ]
                }
            ],
            "retryApiCall": [
                271,
                {
                    "input": [
                        272,
                        "RetryApiCallInput!"
                    ]
                }
            ],
            "retryPushToEmr": [
                244,
                {
                    "input": [
                        273,
                        "RetryPushToEmrInput!"
                    ]
                }
            ],
            "retryWebhookCall": [
                274,
                {
                    "input": [
                        275,
                        "RetryWebhookCallInput!"
                    ]
                }
            ],
            "saveBaselineInfo": [
                244,
                {
                    "input": [
                        276,
                        "SaveBaselineInfoInput!"
                    ]
                }
            ],
            "scheduleTrack": [
                278,
                {
                    "input": [
                        279,
                        "ScheduleTrackInput!"
                    ]
                }
            ],
            "startHostedActivitySession": [
                280,
                {
                    "input": [
                        281,
                        "StartHostedActivitySessionInput!"
                    ]
                }
            ],
            "startHostedPathwaySessionFromLink": [
                283,
                {
                    "input": [
                        284,
                        "StartHostedPathwaySessionFromLinkInput!"
                    ]
                }
            ],
            "startHostedActivitySessionViaHostedPagesLink": [
                280,
                {
                    "input": [
                        285,
                        "StartHostedActivitySessionViaHostedPagesLinkInput!"
                    ]
                }
            ],
            "startHostedPathwaySession": [
                286,
                {
                    "input": [
                        287,
                        "StartHostedPathwaySessionInput!"
                    ]
                }
            ],
            "startPathway": [
                289,
                {
                    "input": [
                        290,
                        "StartPathwayInput!"
                    ]
                }
            ],
            "startPathwayWithPatientIdentifier": [
                291,
                {
                    "input": [
                        292,
                        "StartPathwayWithPatientIdentifierInput!"
                    ]
                }
            ],
            "stopPathway": [
                244,
                {
                    "input": [
                        293,
                        "StopPathwayInput!"
                    ]
                }
            ],
            "stopTrack": [
                294,
                {
                    "input": [
                        295,
                        "StopTrackInput!"
                    ]
                }
            ],
            "submitChecklist": [
                296,
                {
                    "input": [
                        297,
                        "SubmitChecklistInput!"
                    ]
                }
            ],
            "submitFormResponse": [
                298,
                {
                    "input": [
                        299,
                        "SubmitFormResponseInput!"
                    ]
                }
            ],
            "updateBaselineInfo": [
                244,
                {
                    "input": [
                        301,
                        "UpdateBaselineInfoInput!"
                    ]
                }
            ],
            "updateEmrReportStatus": [
                302,
                {
                    "input": [
                        304,
                        "UpdateEmrReportStatusInput!"
                    ]
                }
            ],
            "updatePatient": [
                305,
                {
                    "input": [
                        306,
                        "UpdatePatientInput!"
                    ]
                }
            ],
            "updatePatientDemographicsQuery": [
                308,
                {
                    "input": [
                        309,
                        "UpdatePatientDemographicsQueryInput!"
                    ]
                }
            ],
            "updatePatientLanguage": [
                310,
                {
                    "input": [
                        311,
                        "UpdatePatientLanguageInput!"
                    ]
                }
            ],
            "upsertPatient": [
                312,
                {
                    "input": [
                        313,
                        "UpsertPatientInput!"
                    ]
                }
            ],
            "verify_identity": [
                315,
                {
                    "input": [
                        316,
                        "VerifyIdentityInput!"
                    ]
                }
            ],
            "completeSession": [
                317,
                {
                    "input": [
                        318,
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
                96
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
                186
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
                87
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
                96
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
                250
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
                186
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
                188
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
                253
            ],
            "identifier": [
                87
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
            "patient_identifier": [
                87
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
                257
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
                259
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
                96
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
                187
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
                130
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
                219
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
                277
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
                172
            ],
            "organization_slug": [
                4
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
                282
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
            "organization_slug": [
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
                87
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
                170
            ],
            "user_context": [
                172
            ],
            "organization_slug": [
                4
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
                288
            ],
            "language": [
                4
            ],
            "patient_identifier": [
                87
            ],
            "ttl": [
                9
            ],
            "stakeholder_definition_id": [
                4
            ],
            "user_context": [
                282
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
                211
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
                288
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
                211
            ],
            "__typename": [
                4
            ]
        },
        "StartPathwayWithPatientIdentifierInput": {
            "patient_identifier": [
                87
            ],
            "pathway_definition_id": [
                4
            ],
            "data_points": [
                288
            ],
            "release_id": [
                4
            ],
            "create_patient": [
                13
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
                146
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
                96
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
                96
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
                300
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
                277
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
                303
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
                186
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
                307
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
                188
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
                253
            ],
            "identifier": [
                87
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
                186
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
                186
            ],
            "__typename": [
                4
            ]
        },
        "UpsertPatientInput": {
            "patient_identifier": [
                87
            ],
            "profile": [
                314
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
                188
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
                253
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
                168
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
                96,
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
                96,
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
                96,
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
                96,
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
                130,
                {
                    "pathway_id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "apiCallUpdated": [
                130,
                {
                    "pathway_id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "elementCreated": [
                146,
                {
                    "pathway_id": [
                        4,
                        "String!"
                    ],
                    "element_type": [
                        147
                    ]
                }
            ],
            "elementCompleted": [
                146,
                {
                    "pathway_id": [
                        4,
                        "String!"
                    ],
                    "element_type": [
                        147
                    ]
                }
            ],
            "elementUpdated": [
                146,
                {
                    "pathway_id": [
                        4,
                        "String!"
                    ],
                    "element_type": [
                        147
                    ]
                }
            ],
            "sessionActivityCreated": [
                96,
                {
                    "only_stakeholder_activities": [
                        13
                    ]
                }
            ],
            "sessionActivityUpdated": [
                96,
                {
                    "only_stakeholder_activities": [
                        13
                    ]
                }
            ],
            "sessionActivityCompleted": [
                96,
                {
                    "only_stakeholder_activities": [
                        13
                    ]
                }
            ],
            "sessionActivityExpired": [
                96,
                {
                    "only_stakeholder_activities": [
                        13
                    ]
                }
            ],
            "sessionExpired": [
                168
            ],
            "sessionCompleted": [
                168
            ],
            "pathwayUpdated": [
                184,
                {
                    "id": [
                        5,
                        "ID!"
                    ]
                }
            ],
            "webhookCallCreated": [
                219,
                {
                    "pathway_id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "webhookCallUpdated": [
                219,
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