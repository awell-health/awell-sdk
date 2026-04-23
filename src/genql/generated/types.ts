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
        74,
        84,
        86,
        89,
        107,
        108,
        110,
        111,
        112,
        113,
        120,
        143,
        146,
        158,
        159,
        160,
        172,
        184,
        186,
        206,
        237,
        250
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
            "title_html": [
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
        "DelayTimerConfig": {
            "type": [
                4
            ],
            "description": [
                4
            ],
            "value": [
                74
            ],
            "unit": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "TimerConfigInterface": {
            "type": [
                4
            ],
            "description": [
                4
            ],
            "on_DelayTimerConfig": [
                72
            ],
            "on_DataPointReferenceTimerConfig": [
                75
            ],
            "on_ExtensionResourceUpdatedTimerConfig": [
                76
            ],
            "on_DataPointAwaitedTimerConfig": [
                77
            ],
            "__typename": [
                4
            ]
        },
        "Int": {},
        "DataPointReferenceTimerConfig": {
            "type": [
                4
            ],
            "description": [
                4
            ],
            "data_point_definition_id": [
                4
            ],
            "data_point_key": [
                4
            ],
            "offset": [
                74
            ],
            "offsetDirection": [
                4
            ],
            "offset_unit": [
                4
            ],
            "hour": [
                4
            ],
            "period": [
                4
            ],
            "usePatientTimezone": [
                13
            ],
            "__typename": [
                4
            ]
        },
        "ExtensionResourceUpdatedTimerConfig": {
            "type": [
                4
            ],
            "description": [
                4
            ],
            "extension_key": [
                4
            ],
            "timer_key": [
                4
            ],
            "action_key": [
                4
            ],
            "action_definition_id": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "DataPointAwaitedTimerConfig": {
            "type": [
                4
            ],
            "description": [
                4
            ],
            "data_point_definition_id": [
                4
            ],
            "data_point_key": [
                4
            ],
            "timeout_value": [
                74
            ],
            "timeout_unit": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "Query": {
            "scheduledTracksForPathway": [
                79,
                {
                    "pathway_id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "patientPathways": [
                82,
                {
                    "patient_id": [
                        4
                    ],
                    "patient_identifier": [
                        93
                    ],
                    "filters": [
                        94
                    ]
                }
            ],
            "baselineInfo": [
                96,
                {
                    "pathway_id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "baselineInfoLog": [
                97,
                {
                    "pagination": [
                        102
                    ],
                    "sorting": [
                        103
                    ],
                    "pathway_id": [
                        4,
                        "String!"
                    ],
                    "data_point_definition_id": [
                        4
                    ],
                    "data_point_key": [
                        4
                    ]
                }
            ],
            "myPendingActivities": [
                104
            ],
            "myActivities": [
                104,
                {
                    "pagination": [
                        102
                    ],
                    "sorting": [
                        103
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
                104,
                {
                    "pagination": [
                        102
                    ],
                    "sorting": [
                        103
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
                104,
                {
                    "pagination": [
                        102
                    ],
                    "sorting": [
                        103
                    ],
                    "pathway_id": [
                        4,
                        "String!"
                    ],
                    "filters": [
                        122
                    ],
                    "skip_enrichment": [
                        13
                    ]
                }
            ],
            "careflowTracks": [
                124,
                {
                    "careflow_id": [
                        4,
                        "String!"
                    ],
                    "statuses": [
                        4,
                        "[String!]"
                    ]
                }
            ],
            "activity": [
                126,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "activities": [
                104,
                {
                    "pagination": [
                        102
                    ],
                    "sorting": [
                        103
                    ],
                    "filters": [
                        127
                    ]
                }
            ],
            "activitiesByPatient": [
                104,
                {
                    "pagination": [
                        102
                    ],
                    "sorting": [
                        103
                    ],
                    "patient_id": [
                        4,
                        "String!"
                    ],
                    "filters": [
                        129
                    ]
                }
            ],
            "activitiesByCareflowDefinition": [
                104,
                {
                    "pagination": [
                        102
                    ],
                    "sorting": [
                        103
                    ],
                    "careflow_definition_id": [
                        4,
                        "String!"
                    ],
                    "filters": [
                        130
                    ]
                }
            ],
            "pathwayStepActivities": [
                104,
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
                131,
                {
                    "careflow_id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "agent": [
                132,
                {
                    "id": [
                        5,
                        "ID!"
                    ]
                }
            ],
            "apiCall": [
                140,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "apiCalls": [
                147,
                {
                    "pathway_id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "calculationAction": [
                148,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "calculationResults": [
                149,
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
                150,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "clinicalNote": [
                152,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "pathwayElements": [
                156,
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
                162,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "evaluatedRule": [
                165,
                {
                    "id": [
                        4,
                        "String!"
                    ],
                    "release_id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "extensionActivityRecord": [
                169,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "form": [
                175,
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
                176,
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
                177,
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
                179,
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
                        180,
                        "UserInfoParams!"
                    ],
                    "releaseVersion": [
                        4
                    ]
                }
            ],
            "hostedSessionActivities": [
                181,
                {
                    "only_stakeholder_activities": [
                        13
                    ]
                }
            ],
            "hostedSession": [
                182
            ],
            "message": [
                191,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "pathwayFacts": [
                193,
                {
                    "pagination": [
                        102
                    ],
                    "sorting": [
                        103
                    ],
                    "filters": [
                        195,
                        "PathwayFactsFilters!"
                    ]
                }
            ],
            "pathwayDataPointDefinitions": [
                197,
                {
                    "pathway_definition_id": [
                        4
                    ],
                    "release_id": [
                        4,
                        "String!"
                    ],
                    "filters": [
                        198
                    ]
                }
            ],
            "pathway": [
                199,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "myPathways": [
                209
            ],
            "pathways": [
                209,
                {
                    "pagination": [
                        102
                    ],
                    "sorting": [
                        103
                    ],
                    "filters": [
                        211
                    ]
                }
            ],
            "patientDemographicsQueryConfiguration": [
                214
            ],
            "patient": [
                215,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "patients": [
                216,
                {
                    "pagination": [
                        102
                    ],
                    "sorting": [
                        103
                    ],
                    "filters": [
                        217
                    ]
                }
            ],
            "patientByIdentifier": [
                215,
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
                220
            ],
            "getStatusForPublishedPathwayDefinitions": [
                220
            ],
            "getPublishedCareflowVersions": [
                223,
                {
                    "careflow_definition_id": [
                        4
                    ]
                }
            ],
            "scheduledSteps": [
                226,
                {
                    "pathway_id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "scheduledDestinations": [
                227,
                {
                    "pathway_id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "careflowTimers": [
                230,
                {
                    "status": [
                        4
                    ],
                    "careflow_id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "activityTimer": [
                232,
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
            "searchPatientsByPatientCode": [
                233,
                {
                    "patient_code": [
                        4,
                        "String!"
                    ]
                }
            ],
            "searchPatientsByNationalRegistryNumber": [
                233,
                {
                    "national_registry_number": [
                        4,
                        "String!"
                    ]
                }
            ],
            "filterStakeholders": [
                234,
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
                234,
                {
                    "pathway_definition_ids": [
                        4,
                        "[String!]!"
                    ]
                }
            ],
            "stakeholdersByReleaseIds": [
                234,
                {
                    "release_ids": [
                        4,
                        "[String!]!"
                    ]
                }
            ],
            "stakeholdersByDefinitionIds": [
                234,
                {
                    "stakeholder_definition_ids": [
                        4,
                        "[String!]!"
                    ]
                }
            ],
            "adHocTracksByPathway": [
                238,
                {
                    "pathway_id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "tracksByPathway": [
                238,
                {
                    "pathway_id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "adHocTracksByRelease": [
                238,
                {
                    "release_id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "tenant": [
                239
            ],
            "webhookCall": [
                242,
                {
                    "webhook_call_id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "webhookCalls": [
                248,
                {
                    "pagination": [
                        102
                    ],
                    "sorting": [
                        103
                    ],
                    "pathway_id": [
                        4,
                        "String!"
                    ],
                    "filters": [
                        249
                    ]
                }
            ],
            "webhookCallsForTenant": [
                248,
                {
                    "pagination": [
                        102
                    ],
                    "sorting": [
                        103
                    ],
                    "filters": [
                        249
                    ]
                }
            ],
            "webhookCallsForPathwayDefinition": [
                248,
                {
                    "pagination": [
                        102
                    ],
                    "sorting": [
                        103
                    ],
                    "pathway_definition_id": [
                        4,
                        "String!"
                    ],
                    "filters": [
                        249
                    ]
                }
            ],
            "getOrchestrationFactsFromPrompt": [
                251,
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
                252,
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
                254,
                {
                    "pagination": [
                        102
                    ],
                    "sorting": [
                        103
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
                255,
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
                256,
                {
                    "agent_thread_id": [
                        4
                    ]
                }
            ],
            "formActivityDataPoints": [
                260,
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
                81
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
                79
            ],
            "on_PatientPathwaysPayload": [
                82
            ],
            "on_BaselineInfoPayload": [
                96
            ],
            "on_CareflowTracksPayload": [
                124
            ],
            "on_ActivityPayload": [
                126
            ],
            "on_ActivityTypesPayload": [
                131
            ],
            "on_ApiCallPayload": [
                140
            ],
            "on_ApiCallsPayload": [
                147
            ],
            "on_ActionPayload": [
                148
            ],
            "on_CalculationResultsPayload": [
                149
            ],
            "on_ChecklistPayload": [
                150
            ],
            "on_ClinicalNotePayload": [
                152
            ],
            "on_ElementsPayload": [
                156
            ],
            "on_EmrReportPayload": [
                162
            ],
            "on_EvaluatedRulePayload": [
                165
            ],
            "on_ExtensionActivityRecordPayload": [
                169
            ],
            "on_FormPayload": [
                175
            ],
            "on_FormsPayload": [
                176
            ],
            "on_FormResponsePayload": [
                177
            ],
            "on_GenerateRetoolEmbedUrlPayload": [
                179
            ],
            "on_HostedSessionActivitiesPayload": [
                181
            ],
            "on_HostedSessionPayload": [
                182
            ],
            "on_MessagePayload": [
                191
            ],
            "on_PathwayDataPointDefinitionsPayload": [
                197
            ],
            "on_PathwayPayload": [
                199
            ],
            "on_PatientPayload": [
                215
            ],
            "on_ScheduledStepsPayload": [
                226
            ],
            "on_ScheduledDestinationsPayload": [
                227
            ],
            "on_CareflowTimersPayload": [
                230
            ],
            "on_ActivityTimerPayload": [
                232
            ],
            "on_SearchPatientsPayload": [
                233
            ],
            "on_StakeholdersPayload": [
                234
            ],
            "on_TracksPayload": [
                238
            ],
            "on_TenantPayload": [
                239
            ],
            "on_WebhookCallPayload": [
                242
            ],
            "on_OrchestrationFactsPromptPayload": [
                251
            ],
            "on_HostedPagesLinkPayload": [
                252
            ],
            "on_FileUploadGCSPayload": [
                255
            ],
            "on_FormActivityDataPointsPayload": [
                260
            ],
            "on_AddActivityMetadataPayload": [
                263
            ],
            "on_AddIdentifierToPatientPayload": [
                265
            ],
            "on_AddTrackPayload": [
                267
            ],
            "on_EmptyPayload": [
                269
            ],
            "on_CancelScheduledTracksPayload": [
                271
            ],
            "on_CompleteExtensionActivityPayload": [
                273
            ],
            "on_CreatePatientPayload": [
                276
            ],
            "on_EvaluateFormRulesPayload": [
                281
            ],
            "on_MarkMessageAsReadPayload": [
                286
            ],
            "on_MergePatientsPayload": [
                288
            ],
            "on_PatientDemographicsPayload": [
                290
            ],
            "on_RetryApiCallPayload": [
                301
            ],
            "on_RetryWebhookCallPayload": [
                304
            ],
            "on_ScheduleTrackPayload": [
                308
            ],
            "on_StartHostedActivitySessionPayload": [
                310
            ],
            "on_StartHostedPathwaySessionFromLinkPayload": [
                314
            ],
            "on_StartHostedPathwaySessionPayload": [
                317
            ],
            "on_StartPathwayPayload": [
                320
            ],
            "on_StartPathwayWithPatientIdentifierPayload": [
                322
            ],
            "on_StopTrackPayload": [
                325
            ],
            "on_SubmitChecklistPayload": [
                327
            ],
            "on_SubmitFormResponsePayload": [
                329
            ],
            "on_UpdateEmrReportStatusPayload": [
                333
            ],
            "on_UpdatePatientPayload": [
                336
            ],
            "on_UpdatePatientDemographicsQueryPayload": [
                339
            ],
            "on_UpdatePatientLanguagePayload": [
                341
            ],
            "on_UpsertPatientPayload": [
                343
            ],
            "on_IdentityVerificationPayload": [
                346
            ],
            "on_CompleteSessionPayload": [
                348
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
                83
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
                84
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
                85
            ],
            "baseline_info": [
                87
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
                86
            ],
            "__typename": [
                4
            ]
        },
        "SafeDate": {},
        "BaselineDataPoint": {
            "definition": [
                88
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
                89
            ],
            "valueType": [
                7
            ],
            "source_definition_id": [
                4
            ],
            "possibleValues": [
                90
            ],
            "range": [
                91
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
                92
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
                95
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
                87
            ],
            "__typename": [
                4
            ]
        },
        "BaselineInfoLogPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "pagination": [
                99
            ],
            "sorting": [
                100
            ],
            "dataPoints": [
                101
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
                99
            ],
            "sorting": [
                100
            ],
            "on_BaselineInfoLogPayload": [
                97
            ],
            "on_ActivitiesPayload": [
                104
            ],
            "on_OrchestrationFactsPayload": [
                193
            ],
            "on_PathwaysPayload": [
                209
            ],
            "on_PatientsPayload": [
                216
            ],
            "on_PublishedPathwayDefinitionsPayload": [
                220
            ],
            "on_WebhookCallsPayload": [
                248
            ],
            "on_DataPointPayload": [
                254
            ],
            "__typename": [
                4
            ]
        },
        "PaginationOutput": {
            "offset": [
                74
            ],
            "count": [
                74
            ],
            "total_count": [
                74
            ],
            "__typename": [
                4
            ]
        },
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
        "PaginationParams": {
            "offset": [
                74
            ],
            "count": [
                74
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
        "ActivitiesPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "pagination": [
                99
            ],
            "sorting": [
                100
            ],
            "activities": [
                105
            ],
            "metadata": [
                121
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
                106
            ],
            "action": [
                108
            ],
            "object": [
                109
            ],
            "indirect_object": [
                109
            ],
            "status": [
                111
            ],
            "resolution": [
                112
            ],
            "reference_id": [
                4
            ],
            "reference_type": [
                113
            ],
            "container_name": [
                4
            ],
            "track": [
                114
            ],
            "label": [
                115
            ],
            "sub_activities": [
                116
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
                118
            ],
            "session_id": [
                4
            ],
            "stakeholders": [
                109
            ],
            "icon_url": [
                4
            ],
            "action_component": [
                119
            ],
            "metadata": [
                45
            ],
            "expires_at": [
                4
            ],
            "form_display_mode": [
                120
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
                107
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
                110
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
                106
            ],
            "action": [
                108
            ],
            "error": [
                4
            ],
            "error_category": [
                4
            ],
            "object": [
                109
            ],
            "text": [
                117
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
                109
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
                123
            ],
            "reference_id": [
                4
            ],
            "track_id": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "DateRangeInput": {
            "from": [
                86
            ],
            "to": [
                86
            ],
            "__typename": [
                4
            ]
        },
        "CareflowTracksPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "tracks": [
                125
            ],
            "__typename": [
                4
            ]
        },
        "CareflowTrack": {
            "id": [
                4
            ],
            "definition_id": [
                4
            ],
            "title": [
                4
            ],
            "status": [
                4
            ],
            "start_date": [
                4
            ],
            "end_date": [
                4
            ],
            "started_by_user_id": [
                4
            ],
            "started_by_user_name": [
                4
            ],
            "stopped_by_user_id": [
                4
            ],
            "stopped_by_user_name": [
                4
            ],
            "stop_reason": [
                4
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
                105
            ],
            "__typename": [
                4
            ]
        },
        "FilterActivitiesParams": {
            "action": [
                95
            ],
            "activity_status": [
                95
            ],
            "pathway_definition_id": [
                95
            ],
            "patient_id": [
                128
            ],
            "activity_type": [
                95
            ],
            "stakeholders": [
                95
            ],
            "pathway_status": [
                95
            ],
            "reference_id": [
                128
            ],
            "exclude_system_activities": [
                13
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
        "FilterActivitiesByPatientFilters": {
            "activity_status": [
                95
            ],
            "activity_type": [
                95
            ],
            "action": [
                95
            ],
            "stakeholders": [
                95
            ],
            "careflow_status": [
                95
            ],
            "careflow_definition_id": [
                95
            ],
            "careflow_ids": [
                95
            ],
            "exclude_system_activities": [
                13
            ],
            "__typename": [
                4
            ]
        },
        "FilterActivitiesByCareflowDefinitionFilters": {
            "activity_status": [
                95
            ],
            "activity_type": [
                95
            ],
            "action": [
                95
            ],
            "stakeholders": [
                95
            ],
            "careflow_status": [
                95
            ],
            "exclude_system_activities": [
                13
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
                133
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
                134
            ],
            "input_specs": [
                135
            ],
            "output_specs": [
                135
            ],
            "tools": [
                136
            ],
            "guardrails": [
                4
            ],
            "created": [
                138
            ],
            "updated": [
                138
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
                137
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
                86
            ],
            "by": [
                139
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
                141
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
                142
            ],
            "responses": [
                145
            ],
            "created_at": [
                4
            ],
            "status": [
                146
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
                143
            ],
            "endpoint": [
                4
            ],
            "headers": [
                144
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
                141
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
                151
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
                153
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
                154
            ],
            "context": [
                155
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
                157
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
                158
            ],
            "start_date": [
                4
            ],
            "end_date": [
                4
            ],
            "label": [
                115
            ],
            "activity_type": [
                159
            ],
            "status": [
                160
            ],
            "context": [
                118
            ],
            "stakeholders": [
                161
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
                163
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
                164
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
        "EvaluatedRulePayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "evaluatedRule": [
                166
            ],
            "__typename": [
                4
            ]
        },
        "EvaluatedRule": {
            "satisfied": [
                13
            ],
            "conditions": [
                167
            ],
            "__typename": [
                4
            ]
        },
        "EvaluatedRuleCondition": {
            "id": [
                4
            ],
            "satisfied": [
                13
            ],
            "reference": [
                168
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
        "EvaluatedRuleReference": {
            "data_point_definition_id": [
                4
            ],
            "qualified_key": [
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
                170
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
                171
            ],
            "date": [
                4
            ],
            "settings": [
                173
            ],
            "data_points": [
                174
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
                172
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
                178
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
                105
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
                183
            ],
            "branding": [
                189
            ],
            "metadata": [
                190
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
                184
            ],
            "stakeholder": [
                185
            ],
            "user_context": [
                187
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
            "tracking": [
                188
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
                186
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
        "SessionTracking": {
            "utm_source": [
                4
            ],
            "utm_medium": [
                4
            ],
            "utm_campaign": [
                4
            ],
            "utm_term": [
                4
            ],
            "utm_content": [
                4
            ],
            "custom": [
                45
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
                192
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
                99
            ],
            "sorting": [
                100
            ],
            "facts": [
                194
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
                196
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
                88
            ],
            "__typename": [
                4
            ]
        },
        "FilterPathwayDataPointDefinitionsParams": {
            "category": [
                95
            ],
            "value_type": [
                95
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
                200
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
            "upgrades": [
                201
            ],
            "title": [
                4
            ],
            "start_date": [
                86
            ],
            "stop_date": [
                86
            ],
            "complete_date": [
                86
            ],
            "activities": [
                105
            ],
            "latestActivities": [
                105
            ],
            "status": [
                84
            ],
            "status_explanation": [
                4
            ],
            "tracks": [
                203
            ],
            "created": [
                85
            ],
            "patient": [
                204
            ],
            "__typename": [
                4
            ]
        },
        "PathwayUpgrade": {
            "from": [
                202
            ],
            "to": [
                202
            ],
            "upgrade_date": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "PathwayUpgradeVersion": {
            "release_id": [
                4
            ],
            "revision": [
                9
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
                205
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
                206
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
                207
            ],
            "identifier": [
                208
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
                99
            ],
            "sorting": [
                100
            ],
            "pathways": [
                210
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
                84
            ],
            "status_explanation": [
                4
            ],
            "patient_id": [
                4
            ],
            "start_date": [
                86
            ],
            "stop_date": [
                86
            ],
            "complete_date": [
                86
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
                212
            ],
            "status": [
                95
            ],
            "patient_id": [
                95
            ],
            "patient_identifier": [
                93
            ],
            "version": [
                213
            ],
            "release_id": [
                95
            ],
            "start_date": [
                196
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
                204
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
                99
            ],
            "sorting": [
                100
            ],
            "patients": [
                204
            ],
            "__typename": [
                4
            ]
        },
        "FilterPatients": {
            "profile_id": [
                95
            ],
            "patient_code": [
                128
            ],
            "national_registry_number": [
                128
            ],
            "name": [
                218
            ],
            "search": [
                219
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
                99
            ],
            "sorting": [
                100
            ],
            "publishedPathwayDefinitions": [
                221
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
                85
            ],
            "last_updated": [
                85
            ],
            "latest": [
                222
            ],
            "all": [
                222
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
                88
            ],
            "data_point_definitions": [
                88
            ],
            "track_definitions": [
                203
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
                224
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
                225
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
                157
            ],
            "__typename": [
                4
            ]
        },
        "ScheduledDestinationsPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "destinations": [
                228
            ],
            "__typename": [
                4
            ]
        },
        "ScheduledDestination": {
            "node": [
                229
            ],
            "date": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ScheduledDestinationNode": {
            "id": [
                5
            ],
            "name": [
                4
            ],
            "definition_type": [
                4
            ],
            "definition_id": [
                4
            ],
            "track_definition_id": [
                4
            ],
            "date": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "CareflowTimersPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "timers": [
                231
            ],
            "__typename": [
                4
            ]
        },
        "CareflowTimer": {
            "id": [
                5
            ],
            "activity_id": [
                4
            ],
            "type": [
                4
            ],
            "name": [
                4
            ],
            "status": [
                4
            ],
            "careflow_id": [
                4
            ],
            "scheduled_date": [
                4
            ],
            "readable_explanation": [
                4
            ],
            "job_id": [
                4
            ],
            "resource_id": [
                4
            ],
            "completion_reason": [
                4
            ],
            "config": [
                73
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
        "ActivityTimerPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "timer": [
                231
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
                204
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
                235
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
                236
            ],
            "clinical_app_role": [
                237
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
                203
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
                240
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
                241
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
                243
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
                244
            ],
            "responses": [
                246
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
                247
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
                245
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
            "pagination": [
                99
            ],
            "sorting": [
                100
            ],
            "webhook_calls": [
                243
            ],
            "__typename": [
                4
            ]
        },
        "WebhookCallFiltersInput": {
            "event_type": [
                250
            ],
            "status": [
                4
            ],
            "response_codes": [
                74
            ],
            "webhook_name": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "WebhookCallEventType": {},
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
                253
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
                99
            ],
            "sorting": [
                100
            ],
            "dataPoints": [
                101
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
                257
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
                258
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
                259
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
                261
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
                263,
                {
                    "input": [
                        264,
                        "AddActivityMetadataInput!"
                    ]
                }
            ],
            "addIdentifierToPatient": [
                265,
                {
                    "input": [
                        266,
                        "AddIdentifierToPatientInput!"
                    ]
                }
            ],
            "addTrack": [
                267,
                {
                    "input": [
                        268,
                        "AddTrackInput!"
                    ]
                }
            ],
            "expireActivity": [
                269,
                {
                    "input": [
                        270,
                        "ExpireActivityInput!"
                    ]
                }
            ],
            "unscheduleTracks": [
                271,
                {
                    "input": [
                        272,
                        "CancelScheduledTracksInput!"
                    ]
                }
            ],
            "completeExtensionActivity": [
                273,
                {
                    "input": [
                        274,
                        "CompleteExtensionActivityInput!"
                    ]
                }
            ],
            "createPatient": [
                276,
                {
                    "input": [
                        277
                    ]
                }
            ],
            "deletePathway": [
                269,
                {
                    "input": [
                        279,
                        "DeletePathwayInput!"
                    ]
                }
            ],
            "deletePatient": [
                269,
                {
                    "input": [
                        280,
                        "DeletePatientInput!"
                    ]
                }
            ],
            "evaluateFormRules": [
                281,
                {
                    "input": [
                        283,
                        "EvaluateFormRulesInput!"
                    ]
                }
            ],
            "expireTimer": [
                269,
                {
                    "input": [
                        285,
                        "ExpireTimerInput!"
                    ]
                }
            ],
            "markMessageAsRead": [
                286,
                {
                    "input": [
                        287,
                        "MarkMessageAsReadInput!"
                    ]
                }
            ],
            "mergePatients": [
                288,
                {
                    "input": [
                        289,
                        "MergePatientsInput!"
                    ]
                }
            ],
            "requestPatientDemographics": [
                290,
                {
                    "input": [
                        291,
                        "PatientDemographicsInput!"
                    ]
                }
            ],
            "retryActivities": [
                292,
                {
                    "input": [
                        294,
                        "RetryActivitiesInput!"
                    ]
                }
            ],
            "retryActivity": [
                269,
                {
                    "input": [
                        295,
                        "RetryActivityInput!"
                    ]
                }
            ],
            "retryAllApiCalls": [
                269,
                {
                    "input": [
                        296,
                        "RetryAllApiCallsInput!"
                    ]
                }
            ],
            "retryAllFailedApiCalls": [
                269,
                {
                    "input": [
                        297,
                        "RetryAllFailedApiCallsInput!"
                    ]
                }
            ],
            "retryAllFailedWebhookCalls": [
                269,
                {
                    "input": [
                        298,
                        "RetryAllFailedWebhookCallsInput!"
                    ]
                }
            ],
            "retryAllFailedWebhookCallsForPathwayDefinition": [
                269,
                {
                    "input": [
                        299,
                        "RetryAllFailedWebhookCallsForPathwayDefinitionInput!"
                    ]
                }
            ],
            "retryAllWebhookCalls": [
                269,
                {
                    "input": [
                        300,
                        "RetryAllWebhookCallsInput!"
                    ]
                }
            ],
            "retryApiCall": [
                301,
                {
                    "input": [
                        302,
                        "RetryApiCallInput!"
                    ]
                }
            ],
            "retryPushToEmr": [
                269,
                {
                    "input": [
                        303,
                        "RetryPushToEmrInput!"
                    ]
                }
            ],
            "retryWebhookCall": [
                304,
                {
                    "input": [
                        305,
                        "RetryWebhookCallInput!"
                    ]
                }
            ],
            "saveBaselineInfo": [
                269,
                {
                    "input": [
                        306,
                        "SaveBaselineInfoInput!"
                    ]
                }
            ],
            "scheduleTrack": [
                308,
                {
                    "input": [
                        309,
                        "ScheduleTrackInput!"
                    ]
                }
            ],
            "startHostedActivitySession": [
                310,
                {
                    "input": [
                        311,
                        "StartHostedActivitySessionInput!"
                    ]
                }
            ],
            "startHostedPathwaySessionFromLink": [
                314,
                {
                    "input": [
                        315,
                        "StartHostedPathwaySessionFromLinkInput!"
                    ]
                }
            ],
            "startHostedActivitySessionViaHostedPagesLink": [
                310,
                {
                    "input": [
                        316,
                        "StartHostedActivitySessionViaHostedPagesLinkInput!"
                    ]
                }
            ],
            "startHostedPathwaySession": [
                317,
                {
                    "input": [
                        318,
                        "StartHostedPathwaySessionInput!"
                    ]
                }
            ],
            "startPathway": [
                320,
                {
                    "input": [
                        321,
                        "StartPathwayInput!"
                    ]
                }
            ],
            "startPathwayWithPatientIdentifier": [
                322,
                {
                    "input": [
                        323,
                        "StartPathwayWithPatientIdentifierInput!"
                    ]
                }
            ],
            "stopPathway": [
                269,
                {
                    "input": [
                        324,
                        "StopPathwayInput!"
                    ]
                }
            ],
            "stopTrack": [
                325,
                {
                    "input": [
                        326,
                        "StopTrackInput!"
                    ]
                }
            ],
            "submitChecklist": [
                327,
                {
                    "input": [
                        328,
                        "SubmitChecklistInput!"
                    ]
                }
            ],
            "submitFormResponse": [
                329,
                {
                    "input": [
                        330,
                        "SubmitFormResponseInput!"
                    ]
                }
            ],
            "updateBaselineInfo": [
                269,
                {
                    "input": [
                        332,
                        "UpdateBaselineInfoInput!"
                    ]
                }
            ],
            "updateEmrReportStatus": [
                333,
                {
                    "input": [
                        335,
                        "UpdateEmrReportStatusInput!"
                    ]
                }
            ],
            "updatePatient": [
                336,
                {
                    "input": [
                        337,
                        "UpdatePatientInput!"
                    ]
                }
            ],
            "updatePatientDemographicsQuery": [
                339,
                {
                    "input": [
                        340,
                        "UpdatePatientDemographicsQueryInput!"
                    ]
                }
            ],
            "updatePatientLanguage": [
                341,
                {
                    "input": [
                        342,
                        "UpdatePatientLanguageInput!"
                    ]
                }
            ],
            "upsertPatient": [
                343,
                {
                    "input": [
                        344,
                        "UpsertPatientInput!"
                    ]
                }
            ],
            "verify_identity": [
                346,
                {
                    "input": [
                        347,
                        "VerifyIdentityInput!"
                    ]
                }
            ],
            "completeSession": [
                348,
                {
                    "input": [
                        349,
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
                105
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
                204
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
                93
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
            "allow_any_track_definition": [
                13
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
                105
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
                275
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
                204
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
                206
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
                278
            ],
            "identifier": [
                93
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
                93
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
                282
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
                284
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
                105
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
        "MergePatientsPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "transferred_careflow_ids": [
                4
            ],
            "transferred_count": [
                74
            ],
            "deleted_patient_id": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "MergePatientsInput": {
            "patient_id_to_keep": [
                4
            ],
            "patient_id_to_delete": [
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
                205
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
        "RetryActivitiesPayload": {
            "code": [
                4
            ],
            "success": [
                13
            ],
            "result": [
                293
            ],
            "__typename": [
                4
            ]
        },
        "RetryActivitiesResultType": {
            "succeeded": [
                74
            ],
            "failed": [
                74
            ],
            "skipped": [
                74
            ],
            "__typename": [
                4
            ]
        },
        "RetryActivitiesInput": {
            "activity_ids": [
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
                141
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
                243
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
                307
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
                187
            ],
            "organization_slug": [
                4
            ],
            "tracking": [
                188
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
                312
            ],
            "tracking": [
                313
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
        "TrackingInput": {
            "utm_source": [
                4
            ],
            "utm_medium": [
                4
            ],
            "utm_campaign": [
                4
            ],
            "utm_term": [
                4
            ],
            "utm_content": [
                4
            ],
            "custom": [
                45
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
            "tracking": [
                188
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
                93
            ],
            "tracking": [
                313
            ],
            "__typename": [
                4
            ]
        },
        "StartHostedActivitySessionViaHostedPagesLinkInput": {
            "hosted_pages_link_id": [
                4
            ],
            "tracking": [
                313
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
                185
            ],
            "user_context": [
                187
            ],
            "organization_slug": [
                4
            ],
            "tracking": [
                188
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
                319
            ],
            "language": [
                4
            ],
            "patient_identifier": [
                93
            ],
            "ttl": [
                9
            ],
            "stakeholder_definition_id": [
                4
            ],
            "user_context": [
                312
            ],
            "tracking": [
                313
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
                235
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
                319
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
                235
            ],
            "__typename": [
                4
            ]
        },
        "StartPathwayWithPatientIdentifierInput": {
            "patient_identifier": [
                93
            ],
            "pathway_definition_id": [
                4
            ],
            "data_points": [
                319
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
                157
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
            "reason": [
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
                105
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
                105
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
                331
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
                307
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
                334
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
                204
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
                338
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
                206
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
                278
            ],
            "identifier": [
                93
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
                204
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
                204
            ],
            "__typename": [
                4
            ]
        },
        "UpsertPatientInput": {
            "patient_identifier": [
                93
            ],
            "profile": [
                345
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
                206
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
                278
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
                183
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
                105,
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
                105,
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
                105,
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
                105,
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
                141,
                {
                    "pathway_id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "apiCallUpdated": [
                141,
                {
                    "pathway_id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "elementCreated": [
                157,
                {
                    "pathway_id": [
                        4,
                        "String!"
                    ],
                    "element_type": [
                        158
                    ]
                }
            ],
            "elementCompleted": [
                157,
                {
                    "pathway_id": [
                        4,
                        "String!"
                    ],
                    "element_type": [
                        158
                    ]
                }
            ],
            "elementUpdated": [
                157,
                {
                    "pathway_id": [
                        4,
                        "String!"
                    ],
                    "element_type": [
                        158
                    ]
                }
            ],
            "sessionActivityCreated": [
                105,
                {
                    "only_stakeholder_activities": [
                        13
                    ]
                }
            ],
            "sessionActivityUpdated": [
                105,
                {
                    "only_stakeholder_activities": [
                        13
                    ]
                }
            ],
            "sessionActivityCompleted": [
                105,
                {
                    "only_stakeholder_activities": [
                        13
                    ]
                }
            ],
            "sessionActivityExpired": [
                105,
                {
                    "only_stakeholder_activities": [
                        13
                    ]
                }
            ],
            "sessionExpired": [
                183
            ],
            "sessionCompleted": [
                183
            ],
            "pathwayUpdated": [
                200,
                {
                    "id": [
                        5,
                        "ID!"
                    ]
                }
            ],
            "webhookCallCreated": [
                243,
                {
                    "pathway_id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "webhookCallUpdated": [
                243,
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