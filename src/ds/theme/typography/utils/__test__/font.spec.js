import font, { baseVal } from '../font'
import config from '../../typography.config'

const { fonts } = config

describe('font utility function', () => {
  it('returns the correct font stack', () => {
    expect(font()).toBe(fonts[baseVal].stack)
    expect(font('secondary')).toBe(fonts.secondary.stack)
  })

  describe('when font is not defined', () => {
    it('returns the base font', () => {
      expect(font('unknownFont')).toBe(fonts[baseVal].stack)
    })
  })
})
