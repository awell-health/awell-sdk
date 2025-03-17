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
        59,
        61,
        63,
        71,
        79,
        82,
        95,
        96,
        97,
        105,
        117,
        119,
        125,
        127,
        139,
        165
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
                        67
                    ],
                    "sorting": [
                        68
                    ],
                    "pathway_id": [
                        3,
                        "String!"
                    ],
                    "track_id": [
                        3
                    ]
                }
            ],
            "pathwayActivities": [
                21,
                {
                    "pagination": [
                        67
                    ],
                    "sorting": [
                        68
                    ],
                    "pathway_id": [
                        3,
                        "String!"
                    ],
                    "track_id": [
                        3
                    ]
                }
            ],
            "careflowActivities": [
                21,
                {
                    "pagination": [
                        67
                    ],
                    "sorting": [
                        68
                    ],
                    "pathway_id": [
                        3,
                        "String!"
                    ],
                    "filters": [
                        69
                    ]
                }
            ],
            "activity": [
                72,
                {
                    "id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "activities": [
                21,
                {
                    "pagination": [
                        67
                    ],
                    "sorting": [
                        68
                    ],
                    "filters": [
                        73
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
            "careflowActivityTypes": [
                75,
                {
                    "careflow_id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "apiCall": [
                76,
                {
                    "id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "apiCalls": [
                83,
                {
                    "pathway_id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "calculationAction": [
                84,
                {
                    "id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "calculationResults": [
                85,
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
                87,
                {
                    "id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "clinicalNote": [
                89,
                {
                    "id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "pathwayElements": [
                93,
                {
                    "pathway_id": [
                        3,
                        "String!"
                    ],
                    "track_id": [
                        3
                    ]
                }
            ],
            "emrReport": [
                99,
                {
                    "id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "extensionActivityRecord": [
                102,
                {
                    "id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "form": [
                108,
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
                109,
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
                110,
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
                112,
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
                        113,
                        "UserInfoParams!"
                    ],
                    "releaseVersion": [
                        3
                    ]
                }
            ],
            "hostedSessionActivities": [
                114,
                {
                    "only_stakeholder_activities": [
                        4
                    ]
                }
            ],
            "hostedSession": [
                115
            ],
            "message": [
                123,
                {
                    "id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "pathwayFacts": [
                128,
                {
                    "pagination": [
                        67
                    ],
                    "sorting": [
                        68
                    ],
                    "filters": [
                        130,
                        "PathwayFactsFilters!"
                    ]
                }
            ],
            "pathwayDataPointDefinitions": [
                132,
                {
                    "pathway_definition_id": [
                        3
                    ],
                    "release_id": [
                        3,
                        "String!"
                    ],
                    "filters": [
                        133
                    ]
                }
            ],
            "pathway": [
                134,
                {
                    "id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "myPathways": [
                142
            ],
            "pathways": [
                142,
                {
                    "pagination": [
                        67
                    ],
                    "sorting": [
                        68
                    ],
                    "filters": [
                        144
                    ]
                }
            ],
            "patientDemographicsQueryConfiguration": [
                147
            ],
            "patient": [
                148,
                {
                    "id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "patients": [
                149,
                {
                    "pagination": [
                        67
                    ],
                    "sorting": [
                        68
                    ],
                    "filters": [
                        150
                    ]
                }
            ],
            "patientByIdentifier": [
                148,
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
                153
            ],
            "getStatusForPublishedPathwayDefinitions": [
                153
            ],
            "getPublishedCareflowVersions": [
                157,
                {
                    "careflow_definition_id": [
                        3
                    ]
                }
            ],
            "scheduledSteps": [
                160,
                {
                    "pathway_id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "searchPatientsByPatientCode": [
                161,
                {
                    "patient_code": [
                        3,
                        "String!"
                    ]
                }
            ],
            "searchPatientsByNationalRegistryNumber": [
                161,
                {
                    "national_registry_number": [
                        3,
                        "String!"
                    ]
                }
            ],
            "filterStakeholders": [
                162,
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
                162,
                {
                    "pathway_definition_ids": [
                        3,
                        "[String!]!"
                    ]
                }
            ],
            "stakeholdersByReleaseIds": [
                162,
                {
                    "release_ids": [
                        3,
                        "[String!]!"
                    ]
                }
            ],
            "stakeholdersByDefinitionIds": [
                162,
                {
                    "stakeholder_definition_ids": [
                        3,
                        "[String!]!"
                    ]
                }
            ],
            "adHocTracksByPathway": [
                166,
                {
                    "pathway_id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "adHocTracksByRelease": [
                166,
                {
                    "release_id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "whoami": [
                167
            ],
            "webhookCall": [
                171,
                {
                    "webhook_call_id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "webhookCalls": [
                177,
                {
                    "pathway_id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "webhookCallsForTenant": [
                177
            ],
            "webhookCallsForPathwayDefinition": [
                177,
                {
                    "pathway_definition_id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "getOrchestrationFactsFromPrompt": [
                178,
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
                179,
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
                181,
                {
                    "pagination": [
                        67
                    ],
                    "sorting": [
                        68
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
                183,
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
            "getSignedUrl": [
                184,
                {
                    "file_name": [
                        3,
                        "String!"
                    ],
                    "content_type": [
                        3,
                        "String!"
                    ],
                    "expires_in": [
                        10
                    ],
                    "config_id": [
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
            "on_ActivityPayload": [
                72
            ],
            "on_ActivityTypesPayload": [
                75
            ],
            "on_ApiCallPayload": [
                76
            ],
            "on_ApiCallsPayload": [
                83
            ],
            "on_ActionPayload": [
                84
            ],
            "on_CalculationResultsPayload": [
                85
            ],
            "on_ChecklistPayload": [
                87
            ],
            "on_ClinicalNotePayload": [
                89
            ],
            "on_ElementsPayload": [
                93
            ],
            "on_EmrReportPayload": [
                99
            ],
            "on_ExtensionActivityRecordPayload": [
                102
            ],
            "on_FormPayload": [
                108
            ],
            "on_FormsPayload": [
                109
            ],
            "on_FormResponsePayload": [
                110
            ],
            "on_GenerateRetoolEmbedUrlPayload": [
                112
            ],
            "on_HostedSessionActivitiesPayload": [
                114
            ],
            "on_HostedSessionPayload": [
                115
            ],
            "on_MessagePayload": [
                123
            ],
            "on_PathwayDataPointDefinitionsPayload": [
                132
            ],
            "on_PathwayPayload": [
                134
            ],
            "on_PatientPayload": [
                148
            ],
            "on_ScheduledStepsPayload": [
                160
            ],
            "on_SearchPatientsPayload": [
                161
            ],
            "on_StakeholdersPayload": [
                162
            ],
            "on_TracksPayload": [
                166
            ],
            "on_CurrentUserPayload": [
                167
            ],
            "on_WebhookCallPayload": [
                171
            ],
            "on_WebhookCallsPayload": [
                177
            ],
            "on_OrchestrationFactsPromptPayload": [
                178
            ],
            "on_HostedPagesLinkPayload": [
                179
            ],
            "on_DecisionOutputsPayload": [
                183
            ],
            "on_FileUploadGCSPayload": [
                184
            ],
            "on_AddActivityMetadataPayload": [
                186
            ],
            "on_AddIdentifierToPatientPayload": [
                188
            ],
            "on_AddTrackPayload": [
                191
            ],
            "on_CancelScheduledTracksPayload": [
                193
            ],
            "on_CompleteExtensionActivityPayload": [
                195
            ],
            "on_CreatePatientPayload": [
                198
            ],
            "on_EmptyPayload": [
                201
            ],
            "on_EvaluateFormRulesPayload": [
                204
            ],
            "on_MarkMessageAsReadPayload": [
                208
            ],
            "on_PatientDemographicsPayload": [
                210
            ],
            "on_RetryApiCallPayload": [
                218
            ],
            "on_RetryWebhookCallPayload": [
                221
            ],
            "on_ScheduleTrackPayload": [
                225
            ],
            "on_StartHostedActivitySessionPayload": [
                227
            ],
            "on_StartHostedPathwaySessionFromLinkPayload": [
                230
            ],
            "on_StartHostedPathwaySessionPayload": [
                233
            ],
            "on_StartPathwayPayload": [
                236
            ],
            "on_StartPathwayWithPatientIdentifierPayload": [
                238
            ],
            "on_StopTrackPayload": [
                241
            ],
            "on_SubmitChecklistPayload": [
                243
            ],
            "on_SubmitFormResponsePayload": [
                245
            ],
            "on_UpdateEmrReportStatusPayload": [
                249
            ],
            "on_UpdatePatientPayload": [
                252
            ],
            "on_UpdatePatientDemographicsQueryPayload": [
                255
            ],
            "on_UpdatePatientLanguagePayload": [
                257
            ],
            "on_IdentityVerificationPayload": [
                259
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
            "start_date": [
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
                66
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
                128
            ],
            "on_PathwaysPayload": [
                142
            ],
            "on_PatientsPayload": [
                149
            ],
            "on_PublishedPathwayDefinitionsPayload": [
                153
            ],
            "on_DataPointPayload": [
                181
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
            "scheduled_date": [
                3
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
                64,
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
                58
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
            "file_storage": [
                57
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
        "FileStorageQuestionConfig": {
            "file_storage_destination_id": [
                3
            ],
            "accepted_file_types": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "Rule": {
            "id": [
                6
            ],
            "definition_id": [
                3
            ],
            "boolean_operator": [
                59
            ],
            "conditions": [
                60
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
                61
            ],
            "operand": [
                62
            ],
            "__typename": [
                3
            ]
        },
        "ConditionOperator": {},
        "Operand": {
            "type": [
                63
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
                65
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
        "FilterCareflowActivitiesParams": {
            "action": [
                3
            ],
            "activity_status": [
                3
            ],
            "activity_type": [
                3
            ],
            "stakeholders": [
                3
            ],
            "hide_system_activities": [
                4
            ],
            "date_range": [
                70
            ],
            "__typename": [
                3
            ]
        },
        "DateRangeInput": {
            "from": [
                71
            ],
            "to": [
                71
            ],
            "__typename": [
                3
            ]
        },
        "SafeDate": {},
        "ActivityPayload": {
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
                74
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
        "ActivityTypesPayload": {
            "code": [
                3
            ],
            "success": [
                4
            ],
            "activityTypes": [
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
                77
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
                78
            ],
            "responses": [
                81
            ],
            "created_at": [
                3
            ],
            "status": [
                82
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
                79
            ],
            "endpoint": [
                3
            ],
            "headers": [
                80
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
                77
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
                86
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
                88
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
                90
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
                91
            ],
            "context": [
                92
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
                94
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
                95
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
                96
            ],
            "status": [
                97
            ],
            "context": [
                38
            ],
            "stakeholders": [
                98
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
                100
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
                101
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
                103
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
                104
            ],
            "date": [
                3
            ],
            "settings": [
                106
            ],
            "data_points": [
                107
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
                105
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
                111
            ],
            "__typename": [
                3
            ]
        },
        "FormResponse": {
            "answers": [
                65
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
                116
            ],
            "branding": [
                121
            ],
            "metadata": [
                122
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
                117
            ],
            "stakeholder": [
                118
            ],
            "user_context": [
                120
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
                119
            ],
            "name": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "HostedSessionStakeholderType": {},
        "HostedSessionUserContext": {
            "stytch_member_id": [
                3
            ],
            "stytch_member_email": [
                3
            ],
            "__typename": [
                3
            ]
        },
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
                124
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
                125
            ],
            "attachments": [
                126
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
                127
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
                129
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
                131
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
                135
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
                71
            ],
            "stop_date": [
                71
            ],
            "complete_date": [
                71
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
                136
            ],
            "patient": [
                137
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
        "User": {
            "id": [
                6
            ],
            "tenant_id": [
                3
            ],
            "profile": [
                138
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
                139
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
                140
            ],
            "identifier": [
                141
            ],
            "patient_timezone": [
                3
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
                143
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
                71
            ],
            "stop_date": [
                71
            ],
            "complete_date": [
                71
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
                145
            ],
            "status": [
                19
            ],
            "patient_id": [
                19
            ],
            "version": [
                146
            ],
            "release_id": [
                19
            ],
            "start_date": [
                131
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
                137
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
                137
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
                74
            ],
            "national_registry_number": [
                74
            ],
            "name": [
                151
            ],
            "search": [
                152
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
                154
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
                155
            ],
            "last_updated": [
                155
            ],
            "latest": [
                156
            ],
            "all": [
                156
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
                136
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
                71
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
        "CareflowVersionsPayload": {
            "careflowVersions": [
                158
            ],
            "__typename": [
                3
            ]
        },
        "CareflowVersions": {
            "careflow_definition_id": [
                3
            ],
            "versions": [
                159
            ],
            "__typename": [
                3
            ]
        },
        "CareflowVersion": {
            "version": [
                10
            ],
            "release_id": [
                3
            ],
            "release_date": [
                3
            ],
            "live": [
                4
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
                94
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
                137
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
                163
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
                164
            ],
            "clinical_app_role": [
                165
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
                136
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
                168
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
                138
            ],
            "tenant": [
                169
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
                170
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
                172
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
                173
            ],
            "responses": [
                175
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
                176
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
                174
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
                172
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
                180
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
                182
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
        "FileUploadGCSPayload": {
            "code": [
                3
            ],
            "success": [
                4
            ],
            "upload_url": [
                3
            ],
            "file_url": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "Mutation": {
            "addActivityMetadata": [
                186,
                {
                    "input": [
                        187,
                        "AddActivityMetadataInput!"
                    ]
                }
            ],
            "addIdentifierToPatient": [
                188,
                {
                    "input": [
                        189,
                        "AddIdentifierToPatientInput!"
                    ]
                }
            ],
            "addTrack": [
                191,
                {
                    "input": [
                        192,
                        "AddTrackInput!"
                    ]
                }
            ],
            "unscheduleTracks": [
                193,
                {
                    "input": [
                        194,
                        "CancelScheduledTracksInput!"
                    ]
                }
            ],
            "completeExtensionActivity": [
                195,
                {
                    "input": [
                        196,
                        "CompleteExtensionActivityInput!"
                    ]
                }
            ],
            "createPatient": [
                198,
                {
                    "input": [
                        199
                    ]
                }
            ],
            "deletePathway": [
                201,
                {
                    "input": [
                        202,
                        "DeletePathwayInput!"
                    ]
                }
            ],
            "deletePatient": [
                201,
                {
                    "input": [
                        203,
                        "DeletePatientInput!"
                    ]
                }
            ],
            "evaluateFormRules": [
                204,
                {
                    "input": [
                        206,
                        "EvaluateFormRulesInput!"
                    ]
                }
            ],
            "markMessageAsRead": [
                208,
                {
                    "input": [
                        209,
                        "MarkMessageAsReadInput!"
                    ]
                }
            ],
            "requestPatientDemographics": [
                210,
                {
                    "input": [
                        211,
                        "PatientDemographicsInput!"
                    ]
                }
            ],
            "retryActivity": [
                201,
                {
                    "input": [
                        212,
                        "RetryActivityInput!"
                    ]
                }
            ],
            "retryAllApiCalls": [
                201,
                {
                    "input": [
                        213,
                        "RetryAllApiCallsInput!"
                    ]
                }
            ],
            "retryAllFailedApiCalls": [
                201,
                {
                    "input": [
                        214,
                        "RetryAllFailedApiCallsInput!"
                    ]
                }
            ],
            "retryAllFailedWebhookCalls": [
                201,
                {
                    "input": [
                        215,
                        "RetryAllFailedWebhookCallsInput!"
                    ]
                }
            ],
            "retryAllFailedWebhookCallsForPathwayDefinition": [
                201,
                {
                    "input": [
                        216,
                        "RetryAllFailedWebhookCallsForPathwayDefinitionInput!"
                    ]
                }
            ],
            "retryAllWebhookCalls": [
                201,
                {
                    "input": [
                        217,
                        "RetryAllWebhookCallsInput!"
                    ]
                }
            ],
            "retryApiCall": [
                218,
                {
                    "input": [
                        219,
                        "RetryApiCallInput!"
                    ]
                }
            ],
            "retryPushToEmr": [
                201,
                {
                    "input": [
                        220,
                        "RetryPushToEmrInput!"
                    ]
                }
            ],
            "retryWebhookCall": [
                221,
                {
                    "input": [
                        222,
                        "RetryWebhookCallInput!"
                    ]
                }
            ],
            "saveBaselineInfo": [
                201,
                {
                    "input": [
                        223,
                        "SaveBaselineInfoInput!"
                    ]
                }
            ],
            "scheduleTrack": [
                225,
                {
                    "input": [
                        226,
                        "ScheduleTrackInput!"
                    ]
                }
            ],
            "startHostedActivitySession": [
                227,
                {
                    "input": [
                        228,
                        "StartHostedActivitySessionInput!"
                    ]
                }
            ],
            "startHostedPathwaySessionFromLink": [
                230,
                {
                    "input": [
                        231,
                        "StartHostedPathwaySessionFromLinkInput!"
                    ]
                }
            ],
            "startHostedActivitySessionViaHostedPagesLink": [
                227,
                {
                    "input": [
                        232,
                        "StartHostedActivitySessionViaHostedPagesLinkInput!"
                    ]
                }
            ],
            "startHostedPathwaySession": [
                233,
                {
                    "input": [
                        234,
                        "StartHostedPathwaySessionInput!"
                    ]
                }
            ],
            "startPathway": [
                236,
                {
                    "input": [
                        237,
                        "StartPathwayInput!"
                    ]
                }
            ],
            "startPathwayWithPatientIdentifier": [
                238,
                {
                    "input": [
                        239,
                        "StartPathwayWithPatientIdentifierInput!"
                    ]
                }
            ],
            "stopPathway": [
                201,
                {
                    "input": [
                        240,
                        "StopPathwayInput!"
                    ]
                }
            ],
            "stopTrack": [
                241,
                {
                    "input": [
                        242,
                        "StopTrackInput!"
                    ]
                }
            ],
            "submitChecklist": [
                243,
                {
                    "input": [
                        244,
                        "SubmitChecklistInput!"
                    ]
                }
            ],
            "submitFormResponse": [
                245,
                {
                    "input": [
                        246,
                        "SubmitFormResponseInput!"
                    ]
                }
            ],
            "updateBaselineInfo": [
                201,
                {
                    "input": [
                        248,
                        "UpdateBaselineInfoInput!"
                    ]
                }
            ],
            "updateEmrReportStatus": [
                249,
                {
                    "input": [
                        251,
                        "UpdateEmrReportStatusInput!"
                    ]
                }
            ],
            "updatePatient": [
                252,
                {
                    "input": [
                        253,
                        "UpdatePatientInput!"
                    ]
                }
            ],
            "updatePatientDemographicsQuery": [
                255,
                {
                    "input": [
                        256,
                        "UpdatePatientDemographicsQueryInput!"
                    ]
                }
            ],
            "updatePatientLanguage": [
                257,
                {
                    "input": [
                        258,
                        "UpdatePatientLanguageInput!"
                    ]
                }
            ],
            "verify_identity": [
                259,
                {
                    "input": [
                        260,
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
                137
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
                190
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
                197
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
                137
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
                139
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
                200
            ],
            "identifier": [
                190
            ],
            "patient_timezone": [
                3
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
                205
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
                207
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
                138
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
                77
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
                172
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
                224
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
            "user_context": [
                120
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
            "user_context": [
                229
            ],
            "__typename": [
                3
            ]
        },
        "HostedSessionUserContextInput": {
            "stytch_member_id": [
                3
            ],
            "stytch_member_email": [
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
                190
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
                118
            ],
            "user_context": [
                120
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
                235
            ],
            "language": [
                3
            ],
            "patient_identifier": [
                190
            ],
            "ttl": [
                10
            ],
            "stakeholder_definition_id": [
                3
            ],
            "user_context": [
                229
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
                163
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
                235
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
                163
            ],
            "__typename": [
                3
            ]
        },
        "StartPathwayWithPatientIdentifierInput": {
            "patient_identifier": [
                190
            ],
            "pathway_definition_id": [
                3
            ],
            "data_points": [
                235
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
                94
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
                247
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
                224
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
                250
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
                137
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
                254
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
                139
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
                200
            ],
            "identifier": [
                190
            ],
            "patient_timezone": [
                3
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
                137
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
                77,
                {
                    "pathway_id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "apiCallUpdated": [
                77,
                {
                    "pathway_id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "elementCreated": [
                94,
                {
                    "pathway_id": [
                        3,
                        "String!"
                    ],
                    "element_type": [
                        95
                    ]
                }
            ],
            "elementCompleted": [
                94,
                {
                    "pathway_id": [
                        3,
                        "String!"
                    ],
                    "element_type": [
                        95
                    ]
                }
            ],
            "elementUpdated": [
                94,
                {
                    "pathway_id": [
                        3,
                        "String!"
                    ],
                    "element_type": [
                        95
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
                116
            ],
            "sessionCompleted": [
                116
            ],
            "pathwayUpdated": [
                135,
                {
                    "id": [
                        6,
                        "ID!"
                    ]
                }
            ],
            "webhookCallCreated": [
                172,
                {
                    "pathway_id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "webhookCallUpdated": [
                172,
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