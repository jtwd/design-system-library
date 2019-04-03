import space, { baseVal } from '../space'
import unitMock from '../__mock__/spacingUnits'

describe('space utility function', () => {
  it('should return the correct spacing in pixels', () => {
    expect(space('base', unitMock, 8, 'px')).toBe('16px')
    expect(space('extra-tight', unitMock)).toBe('0.25rem')
    expect(space('tight', unitMock, 8, 'em')).toBe('0.5em')
    expect(space('bit-loose', unitMock)).toBe('1.5rem')
    expect(space('loose', unitMock)).toBe('2rem')
    expect(space('extra-loose', unitMock)).toBe('3rem')
    expect(space('super-loose', unitMock)).toBe('4rem')
    expect(space('spaced-out', unitMock)).toBe('5rem')
  })

  describe('when an unknown value is passed', () => {
    it('returns the default spacing', () => {
      expect(space('unknownSpacer', unitMock)).toBe('1rem')
    })
  })

  describe('when not passed a config', () => {
    it('falls back to default config', () => {
      expect(space('base')).toBe('1rem')
    })

    describe('when not passed a size', () => {
      it('falls back to base size', () => {
        expect(space()).toBe('1rem')
      })
    })
  })
})
