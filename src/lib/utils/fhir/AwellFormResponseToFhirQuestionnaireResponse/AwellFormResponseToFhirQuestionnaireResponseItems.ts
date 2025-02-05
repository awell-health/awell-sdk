import {
  type Answer,
  type Form,
  type FormResponse,
  enumUserQuestionType,
} from '../../../../genql/generated/schema'
import {
  type QuestionnaireResponseItem as FhirQuestionnaireResponseItem,
  type QuestionnaireResponseItemAnswer as FhirQuestionnaireResponseItemAnswer,
} from '@medplum/fhirtypes'
import { isNil } from 'lodash'
import { slateToEscapedJsString } from '../../awell'

const getQuestionLabel = (
  awellFormDefinition: Form,
  questionId: string,
): string => {
  const itemDefinition = awellFormDefinition.questions.find(
    (item) => item.id === questionId,
  )

  if (isNil(itemDefinition)) {
    throw new Error(
      `Could not find question definition for question with id ${questionId}`,
    )
  }

  return itemDefinition.title
}

const getMultipleSelectFhirAnswers = (
  itemResponse: Answer,
): FhirQuestionnaireResponseItemAnswer[] => {
  const itemResponseValueArray = JSON.parse(itemResponse.value) as Array<
    number | string
  >
  const itemResponseLabelArray = itemResponse.label?.split(', ') ?? []

  return itemResponseValueArray.map((item, i) => {
    return {
      valueCoding: {
        code: String(item),
        display: String(itemResponseLabelArray[i]),
      },
    }
  })
}

const getAnswer = (
  awellFormDefinition: Form,
  itemResponse: Answer,
): FhirQuestionnaireResponseItemAnswer[] => {
  const itemDefinition = awellFormDefinition.questions.find(
    (item) => item.id === itemResponse.question_id,
  )

  if (isNil(itemDefinition)) {
    throw new Error(
      `Could not find question definition for question with id ${itemResponse.question_id}`,
    )
  }

  const userQuestionType = itemDefinition.userQuestionType

  switch (userQuestionType) {
    case enumUserQuestionType.YES_NO:
      return [
        {
          valueBoolean: Boolean(Number(itemResponse.value)),
        },
      ]
    case enumUserQuestionType.DATE:
      return [
        {
          valueDateTime: itemResponse.value,
        },
      ]
    case enumUserQuestionType.NUMBER:
      return [
        {
          valueInteger: Number(itemResponse.value),
        },
      ]
    case enumUserQuestionType.LONG_TEXT:
      return [
        {
          valueString: itemResponse.value,
        },
      ]
    case enumUserQuestionType.MULTIPLE_CHOICE:
      return [
        {
          valueCoding: {
            code: itemResponse.value,
            display: itemResponse.label ?? 'Answer label not found',
          },
        },
      ]
    case enumUserQuestionType.MULTIPLE_SELECT:
      return getMultipleSelectFhirAnswers(itemResponse)
    case enumUserQuestionType.SLIDER:
      return [
        {
          valueInteger: Number(itemResponse.value),
        },
      ]
    case enumUserQuestionType.SHORT_TEXT:
      return [
        {
          valueString: itemResponse.value,
        },
      ]
    case enumUserQuestionType.TELEPHONE:
      return [
        {
          valueString: itemResponse.value,
        },
      ]
    default:
      return [
        {
          valueString: String(itemResponse.value),
        },
      ]
  }
}

export const AwellFormResponseToFhirQuestionnaireResponseItems = (opts: {
  awellFormDefinition: Form
  awellFormResponse: FormResponse
}): FhirQuestionnaireResponseItem[] => {
  /**
   * Description items are not included in the form response,
   * but should be added to the questionnaire response.
   * See https://build.fhir.org/questionnaireresponse.html#validation
   */
  const descriptionQuestions = opts.awellFormDefinition.questions.filter(
    (_q) => _q.userQuestionType === enumUserQuestionType.DESCRIPTION,
  )

  const descriptionQuestionsAsFhirItems = descriptionQuestions.map((item) => {
    return {
      linkId: item.id,
      text: slateToEscapedJsString(item.title),
    } satisfies FhirQuestionnaireResponseItem
  })

  const questionnaireResponseItems = opts.awellFormResponse.answers.map(
    (itemResponse) => {
      return {
        linkId: itemResponse.question_id,
        text: getQuestionLabel(
          opts.awellFormDefinition,
          itemResponse.question_id,
        ),
        answer: getAnswer(opts.awellFormDefinition, itemResponse),
      } satisfies FhirQuestionnaireResponseItem
    },
  )

  /**
   * Sort the questionnaire response items by the original question order.
   */
  const originalQuestionOrder = opts.awellFormDefinition.questions.map(
    (q) => q.id,
  )

  return [
    ...descriptionQuestionsAsFhirItems,
    ...questionnaireResponseItems,
  ].sort((a, b) => {
    return (
      originalQuestionOrder.indexOf(a.linkId) -
      originalQuestionOrder.indexOf(b.linkId)
    )
  })
}
