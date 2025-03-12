import { slateToEscapedJsString } from './slateToEscapedJsString'

describe('slateToEscapedJsString', () => {
  const tests = [
    {
      input: '<p>Paragraph 1</p><p>Paragraph 2</p>',
      expectedSingle: 'Paragraph 1\nParagraph 2', // New line between paragraphs
      expectedDouble: 'Paragraph 1\n\nParagraph 2',
    },
    {
      input: '<p>Paragraph 1</p>\n<p>Paragraph 2</p>',
      expectedSingle: 'Paragraph 1\n\nParagraph 2', // New line due to \n and one in between paragraphs
      expectedDouble: 'Paragraph 1\n\n\nParagraph 2',
    },
    {
      input: '<p>First paragraph</p><br><p>Second paragraph</p>',
      expectedSingle: 'First paragraph\n\nSecond paragraph', // New line due to <br> and one in between paragraphs
      expectedDouble: 'First paragraph\n\n\nSecond paragraph',
    },
    {
      input: '<p>Hello, world!</p>',
      expectedSingle: 'Hello, world!',
      expectedDouble: 'Hello, world!',
    },
    {
      input: '<p>First paragraph</p><p><br></p><p>Second paragraph</p>',
      expectedSingle: 'First paragraph\n\nSecond paragraph', // New line due to empty p tag with <br> and one in between paragraphs
      expectedDouble: 'First paragraph\n\n\n\nSecond paragraph',
    },
    {
      input:
        '<h1>Heading 1</h1><h2>Heading 2</h2><p>Paragraph<br/>Line break</p>',
      expectedSingle: 'Heading 1\n\nHeading 2\n\nParagraph\nLine break',
      expectedDouble: 'Heading 1\n\nHeading 2\n\nParagraph\nLine break',
    },
    {
      input: '<p>Line one<br>Line two</p>',
      expectedSingle: 'Line one\nLine two',
      expectedDouble: 'Line one\nLine two',
    },
    {
      input: '<ul><li>Item 1</li><li>Item 2</li></ul>',
      expectedSingle: '- Item 1\n- Item 2',
      expectedDouble: '- Item 1\n- Item 2',
    },
    {
      input: '<ol><li>First</li><li>Second</li></ol>',
      expectedSingle: '1. First\n2. Second',
      expectedDouble: '1. First\n2. Second',
    },
    {
      input: '<p>Paragraph</p><ul><li>Item A</li><li>Item B</li></ul>',
      expectedSingle: 'Paragraph\n- Item A\n- Item B',
      expectedDouble: 'Paragraph\n\n- Item A\n- Item B',
    },
    {
      input:
        '<p>Mixed content<br>with line breaks</p><ol><li>First</li><li>Second</li></ol>',
      expectedSingle: 'Mixed content\nwith line breaks\n1. First\n2. Second',
      expectedDouble: 'Mixed content\nwith line breaks\n\n1. First\n2. Second',
    },
    {
      input:
        '<h2>Test</h2><ul><li>List</li><li>List</li><li>List</li></ul><p><br></p><p>Hello world</p><p><br></p><p>More</p><p><br></p><p>More</p><p><br></p><p>More</p>',
      expectedSingle:
        'Test\n\n- List\n- List\n- List\n\nHello world\n\nMore\n\nMore\n\nMore',
      expectedDouble:
        'Test\n\n- List\n- List\n- List\n\n\nHello world\n\n\n\nMore\n\n\n\nMore\n\n\n\nMore',
    },
  ]

  describe('with paragraphSpacing set to single', () => {
    tests.forEach(({ input, expectedSingle }, index) => {
      test(`Test ${index + 1}: Correctly processes HTML to escaped JS string`, () => {
        const result = slateToEscapedJsString(input, {
          paragraphSpacing: 'single',
        })
        console.log(JSON.stringify(result))
        expect(result).toBe(expectedSingle)
      })
    })
  })

  describe('with paragraphSpacing set to double', () => {
    tests.forEach(({ input, expectedDouble }, index) => {
      test(`Test ${index + 1}: Correctly processes HTML to escaped JS string`, () => {
        const result = slateToEscapedJsString(input, {
          paragraphSpacing: 'double',
        })
        console.log(JSON.stringify(result))
        expect(result).toBe(expectedDouble)
      })
    })
  })
})
