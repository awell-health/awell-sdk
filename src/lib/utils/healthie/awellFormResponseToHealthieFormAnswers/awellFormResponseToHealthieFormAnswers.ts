import {
  type Form,
  type FormResponse,
  type Question,
  type Answer,
} from '../../../../genql/generated/schema'
import { type FormAnswerInput as HealthieFormAnswerInput } from '@/types/HealthieSchema'
import { has, isNil } from 'lodash'
import {
  getBooleanAnswer,
  getDateAnswer,
  getLongTextAnswer,
  getMultipleSelectAnswers,
  getSingleSelectAnswer,
} from './utils'

/**
 * Retrieves the answer for a given question based on its type.
 * @param {Question} questionDefinition - The definition of the question.
 * @param {Answer} questionResponse - The response to the question.
 * @returns {string} The answer in Healthie format.
 */
const getAnswerInHealthieFormat = (
  questionDefinition: Question,
  questionResponse: Answer,
): Pick<HealthieFormAnswerInput, 'answer'>['answer'] => {
  const userQuestionType = questionDefinition.userQuestionType

  switch (userQuestionType) {
    case 'YES_NO':
      return getBooleanAnswer(questionResponse.value)
    case 'DATE':
      return getDateAnswer(questionResponse.value)
    case 'NUMBER':
      return String(questionResponse.value)
    case 'LONG_TEXT': {
      const { escapedHtml } = getLongTextAnswer(questionResponse.value)
      return escapedHtml
    }
    case 'MULTIPLE_CHOICE':
      return getSingleSelectAnswer(questionDefinition, questionResponse)
    case 'MULTIPLE_SELECT':
      return getMultipleSelectAnswers(questionDefinition, questionResponse)
    case 'SLIDER':
      return String(questionResponse.value)
    case 'SHORT_TEXT':
      return String(questionResponse.value)
    case 'TELEPHONE':
      return String(questionResponse.value)
    case 'EMAIL':
      return String(questionResponse.value)
    default:
      return String(questionResponse.value)
  }
}

/**
 * Retrieves the custom module ID for a given question.
 * @param {Question} [questionDefinition] - The definition of the question.
 * @returns {string | null} The custom module ID or null if not found.
 */
const getCustomModuleIdForAwellQuestion = (
  questionDefinition?: Question,
): string | undefined => {
  if (isNil(questionDefinition)) return undefined

  const metaDataAsJson = JSON.parse(
    questionDefinition.metadata ?? '{}',
  ) as Record<string, string>

  if (has(metaDataAsJson, 'healthieCustomModuleId')) {
    return metaDataAsJson.healthieCustomModuleId
  } else {
    return undefined
  }
}

export interface OmittedFormAnswer {
  questionId: string
  reason: string
}

/**
 * Converts an Awell form response to Healthie form answers.
 * @param {Object} opts - The options object.
 * @param {Form} opts.awellFormDefinition - The definition of the Awell form.
 * @param {FormResponse} opts.awellFormResponse - The response to the Awell form.
 * @returns {Object} An object containing form answers and omitted form answers with reasons.
 */
export const awellFormResponseToHealthieFormAnswers = (opts: {
  awellFormDefinition: Form
  awellFormResponse: FormResponse
}): {
  formAnswers: HealthieFormAnswerInput[]
  omittedFormAnswers: OmittedFormAnswer[]
} => {
  const formAnswers: HealthieFormAnswerInput[] = []
  const omittedFormAnswers: OmittedFormAnswer[] = []

  opts.awellFormResponse.answers.forEach((questionResponse) => {
    const questionDefinition = opts.awellFormDefinition.questions.find(
      (q) => q.id === questionResponse.question_id,
    )

    if (questionDefinition === undefined) {
      omittedFormAnswers.push({
        questionId: questionResponse.question_id,
        reason:
          'No corresponding question definition found in the form definition',
      })
      return
    }

    const customModuleId = getCustomModuleIdForAwellQuestion(questionDefinition)

    if (customModuleId === undefined) {
      omittedFormAnswers.push({
        questionId: questionResponse.question_id,
        reason:
          'Unable to map this question to a Healthie form because it is missing the `healthieCustomModuleId` metadata required for proper integration.',
      })
      return
    }

    try {
      const answer = getAnswerInHealthieFormat(
        questionDefinition,
        questionResponse,
      )

      formAnswers.push({
        custom_module_id: customModuleId,
        answer,
      })
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error'

      omittedFormAnswers.push({
        questionId: questionResponse.question_id,
        reason: `Error processing answer: ${errorMessage}`,
      })
    }
  })

  return {
    formAnswers,
    omittedFormAnswers,
  }
}
