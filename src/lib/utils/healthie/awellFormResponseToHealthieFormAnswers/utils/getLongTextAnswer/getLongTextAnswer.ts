/**
 * Converts plain text with paragraphs separated by double newline characters into
 * Unicode escape sequences representing HTML paragraph tags.
 *
 * This function is designed for transforming text data from a Awell long text input field,
 * where paragraphs are stored as plain text separated by double newline characters.
 * The transformed output is intended for the Healthie (destination) system, which expects
 * Unicode-escaped HTML strings for proper rendering of text content.
 *
 * @param text - The plain text input from Awell where paragraphs are separated by double newline characters.
 * @returns {Object} An object containing both the normal HTML and the Unicode escaped HTML string.
 */
export const getLongTextAnswer = (
  text?: string,
): { html: string; escapedHtml: string } => {
  if (text === undefined || text === '') return { html: '', escapedHtml: '' }

  // Replace double newlines (\n\n) with paragraph tags
  const paragraphs = text.split('\n\n').map((paragraph) => {
    // Replace single newlines (\n) within paragraphs with <br/>
    const lines = paragraph.split('\n').join('<br/>')
    return `<p>${lines}</p>`
  })

  // Join all paragraphs with newlines for better readability (optional)
  const htmlString = paragraphs.join('')

  // Escape HTML to Unicode
  const escapedHtmlString = htmlString
    // Replace '<' with its Unicode escape sequence '\u003c'
    .replace(/</g, '\\u003c')
    // Replace '>' with its Unicode escape sequence '\u003e'
    .replace(/>/g, '\\u003e')
    // Replace '&' with its Unicode escape sequence '\u0026'
    .replace(/&/g, '\\u0026')
    // Replace '"' with its Unicode escape sequence '\u0022'
    .replace(/"/g, '\\u0022')
    // Replace "'" with its Unicode escape sequence '\u0027'
    .replace(/'/g, '\\u0027')

  // Return both the normal HTML and the escaped HTML
  return {
    html: htmlString,
    escapedHtml: escapedHtmlString,
  }
}
