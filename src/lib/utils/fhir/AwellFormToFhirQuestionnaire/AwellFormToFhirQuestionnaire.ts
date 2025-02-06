import {
  type Form,
  type Question,
  enumUserQuestionType,
  type Option,
} from '../../../../genql/generated/schema'
import {
  type Questionnaire as FhirQuestionnaire,
  type QuestionnaireItem as FhirQuestionnaireItem,
  type QuestionnaireItemAnswerOption as FhirQuestionnaireItemAnswerOption,
} from '@medplum/fhirtypes'
import { kebabCase, pickBy } from 'lodash'
import { slateToEscapedJsString } from '../../awell'

const getQuestionnaireItemType = (
  question: Question,
): Pick<FhirQuestionnaireItem, 'type'> => {
  const userQuestionType = question.userQuestionType

  switch (userQuestionType) {
    case enumUserQuestionType.DESCRIPTION:
      return {
        type: 'display',
      }
    case enumUserQuestionType.YES_NO:
      return {
        type: 'boolean',
      }
    case enumUserQuestionType.DATE:
      return {
        type: 'dateTime',
      }
    case enumUserQuestionType.NUMBER:
      return {
        type: 'integer',
      }
    case enumUserQuestionType.LONG_TEXT:
      return {
        type: 'text',
      }
    case enumUserQuestionType.MULTIPLE_CHOICE:
      return {
        type: 'choice',
      }
    case enumUserQuestionType.MULTIPLE_SELECT:
      return {
        type: 'choice',
      }
    case enumUserQuestionType.SLIDER:
      return {
        type: 'integer',
      }
    case enumUserQuestionType.SHORT_TEXT:
      return {
        type: 'string',
      }
    case enumUserQuestionType.TELEPHONE:
      return {
        type: 'string',
      }
    default:
      return {
        type: 'string',
      }
  }
}

const getSelectAnswerOptions = (
  answerOptions: Option[],
): FhirQuestionnaireItemAnswerOption[] => {
  return answerOptions.map((option) => {
    return {
      valueCoding: {
        code: String(option.value_string),
        display: String(option.label),
      },
    }
  })
}

const getFormItems = (formQuestions: Question[]): FhirQuestionnaireItem[] => {
  return formQuestions.map((q) => {
    const obj = {
      linkId: q.id,
      text:
        q.userQuestionType === enumUserQuestionType.DESCRIPTION
          ? slateToEscapedJsString(q.title)
          : q.title,
      type: getQuestionnaireItemType(q).type,
      repeats:
        q.userQuestionType === enumUserQuestionType.MULTIPLE_SELECT
          ? true
          : undefined,
      required:
        q.userQuestionType === enumUserQuestionType.DESCRIPTION
          ? undefined
          : q.questionConfig?.mandatory,
      answerOption:
        q.userQuestionType === enumUserQuestionType.MULTIPLE_SELECT ||
        q.userQuestionType === enumUserQuestionType.MULTIPLE_CHOICE
          ? getSelectAnswerOptions(q.options ?? [])
          : undefined,
    }

    // @ts-expect-error fix later
    return pickBy(obj, (v) => v !== undefined) as QuestionnaireItem
  })
}

export const AwellFormToFhirQuestionnaire = (
  awellFormDefinition: Form,
): FhirQuestionnaire => {
  return {
    resourceType: 'Questionnaire',
    url: `http://awellhealth.com/forms/${awellFormDefinition.definition_id}`,
    name: `${kebabCase(awellFormDefinition.title)}-version-${
      awellFormDefinition.id
    }`,
    title: `${awellFormDefinition.title} (version ${awellFormDefinition.id})`,
    copyright: awellFormDefinition?.trademark ?? undefined,
    status: 'unknown',
    version: awellFormDefinition.id,
    publisher: 'Awell',
    contact: [
      {
        name: 'Awell',
        telecom: [
          {
            system: 'email',
            value: 'info@awellhealth.com',
          },
        ],
      },
    ],
    identifier: [
      {
        system: 'https://awellhealth.com/forms',
        value: `${awellFormDefinition.definition_id}/published/${awellFormDefinition.id}`,
      },
    ],
    item: getFormItems(awellFormDefinition.questions),
  }
}
