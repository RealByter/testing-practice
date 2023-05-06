import capitalize from './capitalize.js'

describe('capitalize()', () => {
  it('should keep the first letter capitalized', () => {
    expect(capitalize("This is capitalized")).toMatch('This is capitalized')
  })
  it('should capitalize the first letter', () => {
    expect(capitalize("this is not capitalized")).toMatch('This is not capitalized')
  })
});
