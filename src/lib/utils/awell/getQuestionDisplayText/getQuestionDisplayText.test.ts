import { getQuestionDisplayText } from './getQuestionDisplayText'

describe('getQuestionDisplayText', () => {
  it('returns slate-escaped text from title_html when present', () => {
    const result = getQuestionDisplayText({
      title: 'plain title fallback',
      title_html: '<p>Hello, world!</p>',
    })

    expect(result).toBe('Hello, world!')
  })

  it('falls back to title when title_html is null', () => {
    const result = getQuestionDisplayText({
      title: 'My question',
      title_html: null,
    })

    expect(result).toBe('My question')
  })

  it('falls back to title when title_html is an empty string', () => {
    const result = getQuestionDisplayText({
      title: 'My question',
      title_html: '',
    })

    expect(result).toBe('My question')
  })

  it('returns an empty string when both title and title_html are null', () => {
    const result = getQuestionDisplayText({
      title: null,
      title_html: null,
    })

    expect(result).toBe('')
  })

  it('prefers title_html over title even when title looks like HTML', () => {
    const result = getQuestionDisplayText({
      title: '<p class="slate-p">stale title</p>',
      title_html: '<p>fresh title</p>',
    })

    expect(result).toBe('fresh title')
  })
})
