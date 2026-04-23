import { type Question } from '../../../../genql/generated/schema'
import { slateToEscapedJsString } from '../slateToEscapedJsString'

/**
 * Heuristic: does this string look like HTML/slate content that should be
 * run through {@link slateToEscapedJsString}? We detect the presence of
 * any tag, which covers slate output (e.g. `<p class="slate-p">...</p>`,
 * `<br>`, `<ul>`, etc.).
 */
const looksLikeHtml = (value: string): boolean => /<\/?[a-z][^>]*>/i.test(value)

const toPlainText = (value: string): string =>
  looksLikeHtml(value) ? slateToEscapedJsString(value) : value

/**
 * Returns a plain-text display string for a question, preferring the
 * HTML-rendered `title_html` when available and falling back to `title`.
 * Either field may contain slate HTML, so both are run through
 * {@link slateToEscapedJsString} when they look like HTML. Plain-text
 * values are returned as-is to avoid unnecessary JS escaping.
 */
export const getQuestionDisplayText = (
  question: Pick<Question, 'title' | 'title_html'>,
): string => {
  if (question.title_html != null && question.title_html !== '') {
    return toPlainText(question.title_html)
  }

  if (question.title != null && question.title !== '') {
    return toPlainText(question.title)
  }

  return ''
}
