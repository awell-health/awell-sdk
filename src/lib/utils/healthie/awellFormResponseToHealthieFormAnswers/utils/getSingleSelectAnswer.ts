import { type Question, type Answer } from '@/genql/generated'
import { type FormAnswerInput as HealthieFormAnswerInput } from '@/types/HealthieSchema'

/**
 * Extracts single select answer from a question response and formats it to Healthie format.
 * @param {Question} questionDefinition - The definition of the question.
 * @param {Answer} questionResponse - The response to the question.
 * @returns {string} The label of the selected answer (how Healhtie stores single-select answers)
 */
export const getSingleSelectAnswer = (
  questionDefinition: Question,
  questionResponse: Answer,
): Pick<HealthieFormAnswerInput, 'answer'>['answer'] => {
  const answerValue = questionResponse.value
  const answerOptions = questionDefinition.options

  const answerLabel = answerOptions?.find(
    /** We need to compare against value_string! */
    (answerOption) => answerOption.value_string === answerValue,
  )?.label

  return String(answerLabel)
}
