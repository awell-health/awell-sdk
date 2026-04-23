import { type Question } from '../../../../genql/generated/schema'
import { slateToEscapedJsString } from '../slateToEscapedJsString'

/**
 * Returns a plain-text display string for a question, preferring the
 * HTML-rendered `title_html` (escaped via {@link slateToEscapedJsString})
 * when available, and falling back to `title`.
 *
 * Useful for description-style questions whose rich text lives in
 * `title_html`, while still working for non-description questions where
 * only `title` is set.
 */
export const getQuestionDisplayText = (
  question: Pick<Question, 'title' | 'title_html'>,
): string => {
  if (question.title_html != null && question.title_html !== '') {
    return slateToEscapedJsString(question.title_html)
  }

  return question.title ?? ''
}
