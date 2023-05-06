import caesarCipher from './caesarCipher.js'

describe('caesarCipher', () => {
  it('should shift - happy path', () => {
    expect(caesarCipher('abc', 3)).toMatch('def')
  })
  it('should shift - wrap z to a', () => {
    expect(caesarCipher('zab', 4)).toMatch('def')
  })
  it('should shift - wrap a to z', () => {
    expect(caesarCipher('acd', -2)).toMatch('yab')
  })
  it('should shift - ignore punctuation', () => {
    expect(caesarCipher('a!b#c&d%', 1)).toMatch("b!c#d&e%")
  })
});
