import {
  type Form,
  type FormResponse,
  type Question,
  type Answer,
} from '@/genql/generated/schema'
import { type FormAnswerInput as HealthieFormAnswerInput } from '@/types/HealthieSchema'
import { isNil } from 'lodash'

/**
 * Extracts multiple select answers from a question response and formats it to Healthie format.
 * @param {Question} questionDefinition - The definition of the question.
 * @param {Answer} questionResponse - The response to the question.
 * @returns {string} The concatenated labels of the selected answers, joined by \n.
 */
const getMultipleSelectAnswers = (
  questionDefinition: Question,
  questionResponse: Answer,
): Pick<HealthieFormAnswerInput, 'answer'>['answer'] => {
  const answerValues = JSON.parse(questionResponse.value) as (string | number)[]
  const answerOptions = questionDefinition.options

  const answerLabels = answerValues.map((answerValue) => {
    return answerOptions?.find(
      (answerOption) => String(answerOption.value) === String(answerValue),
    )?.label
  })

  return answerLabels.join('\n')
}

/**
 * Retrieves the answer for a given question based on its type.
 * @param {Question} questionDefinition - The definition of the question.
 * @param {Answer} questionResponse - The response to the question.
 * @returns {string} The answer in Healthie format.
 */
const getAnswer = (
  questionDefinition: Question,
  questionResponse: Answer,
): Pick<HealthieFormAnswerInput, 'answer'>['answer'] => {
  const userQuestionType = questionDefinition.userQuestionType

  switch (userQuestionType) {
    case 'YES_NO':
      return String(questionResponse.value)
    case 'DATE':
      return String(questionResponse.value)
    case 'NUMBER':
      return String(questionResponse.value)
    case 'LONG_TEXT':
      return String(questionResponse.value)
    case 'MULTIPLE_CHOICE':
      return String(questionResponse.value)
    case 'MULTIPLE_SELECT':
      return getMultipleSelectAnswers(questionDefinition, questionResponse)
    case 'SLIDER':
      return String(questionResponse.value)
    case 'SHORT_TEXT':
      return String(questionResponse.value)
    case 'TELEPHONE':
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
): string | null => {
  if (isNil(questionDefinition)) return null

  const metaDataAsJson = JSON.parse(
    questionDefinition.metadata ?? '{}',
  ) as Record<string, string>

  if (metaDataAsJson.hasOwnProperty('healthieCustomModuleId')) {
    return metaDataAsJson['healthieCustomModuleId']
  } else {
    return null
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

    if (!questionDefinition) {
      omittedFormAnswers.push({
        questionId: questionResponse.question_id,
        reason:
          'No corresponding question definition found in the form definition',
      })
      return
    }

    const customModuleId = getCustomModuleIdForAwellQuestion(questionDefinition)

    if (!customModuleId) {
      omittedFormAnswers.push({
        questionId: questionResponse.question_id,
        reason: 'Question is missing `healthieCustomModuleId` metadata',
      })
      return
    }

    try {
      const answer = getAnswer(questionDefinition, questionResponse)

      formAnswers.push({
        custom_module_id: customModuleId,
        answer: answer,
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
