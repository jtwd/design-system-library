import { fontSize } from '../fontSize'

describe('fontSize utility function', () => {
  it('returns the correct font size value', () => {
    expect(fontSize()).toBe('1rem')
    expect(fontSize('xl')).toBe('1.25rem')
    expect(fontSize('xxl')).toBe('1.5rem')
    expect(fontSize('s')).toBe('0.875rem')
    expect(fontSize('xs')).toBe('0.75rem')
  })

  describe('when pxOverride is true', () => {
    it('returns the px value', () => {
      expect(fontSize('base', true)).toBe('16px')
    })
  })

  describe('when size is not configured', () => {
    it('returns the base value', () => {
      expect(fontSize('unknownFontSize')).toBe('1rem')
    })
  })
})
