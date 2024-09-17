import { type Question, type Answer } from '@/genql/generated'
import { type FormAnswerInput as HealthieFormAnswerInput } from '@/types/HealthieSchema'

/**
 * Extracts multiple select answers from a question response and formats it to Healthie format.
 * @param {Question} questionDefinition - The definition of the question.
 * @param {Answer} questionResponse - The response to the question.
 * @returns {string} The concatenated labels of the selected answers, joined by \n (how Healhtie stores multi-select answers).
 */
export const getMultipleSelectAnswers = (
  questionDefinition: Question,
  questionResponse: Answer,
): Pick<HealthieFormAnswerInput, 'answer'>['answer'] => {
  const answerValues = JSON.parse(questionResponse.value) as Array<
    string | number
  >
  const answerOptions = questionDefinition.options

  const answerLabels = answerValues.map((answerValue) => {
    return answerOptions?.find(
      /** We need to compare against value_string! */
      (answerOption) => answerOption.value_string === String(answerValue),
    )?.label
  })

  return answerLabels.join('\n')
}
