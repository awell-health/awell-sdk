import { JSDOM } from 'jsdom'

/**
 * Converts HTML content to a plain text string while preserving paragraph and line break formatting.
 *
 * @param {string} html - The input HTML string to be converted.
 * @param {Object} [opts] - Optional configuration options.
 * @param {'single' | 'double'} [opts.paragraphSpacing='single'] - Determines the number of new lines (`\n`) after paragraphs.
 *   - `'single'` (default) → Adds one `\n` after each paragraph (`<p>`), making the output more compact.
 *   - `'double'` → Adds two `\n\n` after each paragraph, improving readability in plain-text formats like emails, logs, and CLI output.
 *
 * @returns {string} The escaped plain text string with structured line breaks.
 */
export const slateToEscapedJsString = (
  html: string,
  opts?: {
    /**
     *
     */
    paragraphSpacing?: 'single' | 'double'
  },
): string => {
  const { paragraphSpacing = 'single' } = opts ?? {}
  const sanitizedHtml = html.replace(/\n/g, '<br>')

  // Use JSDOM to parse the HTML since we're in a Node.js environment
  const dom = new JSDOM(sanitizedHtml)
  const doc = dom.window.document

  // Define constants for node types
  const TEXT_NODE = 3
  const ELEMENT_NODE = 1

  // Helper function to escape special JavaScript characters
  const escapeJsString = (str: string): string => {
    return str
      .replace(/\\/g, '\\\\') // Escape backslashes
      .replace(/'/g, "\\'") // Escape single quotes
      .replace(/"/g, '\\"') // Escape double quotes
      .replace(/\n/g, '\\n') // Escape new lines
      .replace(/\r/g, '\\r') // Escape carriage returns
  }

  // Traverse the DOM and transform to plain text
  const traverseAndFormat = (node: Node): string => {
    if (node.nodeType === TEXT_NODE) {
      // If it's a text node, return its content
      return escapeJsString(node.textContent ?? '').trim()
    }

    if (node.nodeType === ELEMENT_NODE) {
      const element = node

      switch (element.nodeName) {
        case 'P': {
          const content = Array.from(node.childNodes)
            .map(traverseAndFormat)
            .join('')
            .trim()

          const spacing = paragraphSpacing === 'single' ? '\n' : '\n\n'

          return content === '' ? spacing : `${content}${spacing}`
        }
        case 'H1':
        case 'H2':
        case 'H3':
        case 'H4':
        case 'H5':
        case 'H6':
          return `${escapeJsString(element.textContent?.trim() ?? '')}\n\n`
        case 'BR':
          return '\n'
        case 'UL':
          return `${Array.from(element.childNodes)
            .filter((child) => child.nodeName === 'LI')
            .map((child) => `- ${traverseAndFormat(child)}`)
            .join('\n')}\n`
        case 'OL':
          return `${Array.from(element.childNodes)
            .filter((child) => child.nodeName === 'LI')
            .map((child, index) => `${index + 1}. ${traverseAndFormat(child)}`)
            .join('\n')}\n`
        case 'LI':
          return `${Array.from(node.childNodes).map(traverseAndFormat).join('')}`
        default:
          return Array.from(node.childNodes).map(traverseAndFormat).join('')
      }
    }

    return '' // For any other node types, return an empty string
  }

  return traverseAndFormat(doc.body).trim()
}
