import { formatIdempotencyKey, isValidIdempotencyKey } from './key'

describe('idempotency key helpers', () => {
  test.each([
    ['a UUID', '6f1c2e0e-3f0b-4c1e-9a1b-0d2c9c0f7b21'],
    ['a derived key', 'evt_123:complete'],
    ['255 characters', 'x'.repeat(255)],
  ])('accepts %s', (_, key) => {
    expect(isValidIdempotencyKey(key)).toBe(true)
  })

  test.each([
    ['empty', ''],
    ['whitespace', 'has space'],
    ['256 characters', 'x'.repeat(256)],
    ['non-ASCII', 'clé'],
  ])('rejects %s', (_, key) => {
    expect(isValidIdempotencyKey(key)).toBe(false)
  })

  test('formats the RFC 8941 String the API requires, escaping quotes and backslashes', () => {
    expect(formatIdempotencyKey('abc')).toBe('"abc"')
    expect(formatIdempotencyKey('a"b\\c')).toBe('"a\\"b\\\\c"')
  })
})
