import { getLongTextAnswer } from './'

describe('getLongTextAnswer', () => {
  test('Should work with simple string with no paragraph', async () => {
    const { html, escapedHtml } = getLongTextAnswer('Simple answer')
    expect(html).toStrictEqual('<p>Simple answer</p>')
    expect(escapedHtml).toStrictEqual(
      '\\u003cp\\u003eSimple answer\\u003c/p\\u003e',
    )
  })

  test('Should work with more complex string that has paragraphs and line breaks', async () => {
    const { html, escapedHtml } = getLongTextAnswer(
      'A long text\n\nNew paragraph\nNew line',
    )

    expect(html).toStrictEqual(
      '<p>A long text</p><p>New paragraph<br/>New line</p>',
    )
    expect(escapedHtml).toStrictEqual(
      '\\u003cp\\u003eA long text\\u003c/p\\u003e\\u003cp\\u003eNew paragraph\\u003cbr/\\u003eNew line\\u003c/p\\u003e',
    )
  })
})
