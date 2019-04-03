import fontWeight from '../fontWeight'
import config from '../../typography.config'

const { fonts } = config

describe('fontWeight utility function', () => {
  it('returns the correct font weight value', () => {
    expect(fontWeight('normal')).toBe(fonts.base.weights.normal)
    expect(fontWeight('bold')).toBe(fonts.base.weights.bold)
    expect(fontWeight('light-italic')).toBe(fonts.base.weights['light-italic'])
  })

  describe('when weight variant is not configured', () => {
    it('returns the base weight', () => {
      expect(fontWeight('unknownWeight')).toBe(fonts.base.weights['normal'])
    })
  })

  describe('when alternative font is passed', () => {
    it('returns the correct font weight value', () => {
      expect(fontWeight('normal', 'secondary')).toBe(fonts.secondary.weights.normal)
      expect(fontWeight('bold', 'secondary')).toBe(fonts.secondary.weights.bold)
    })

    describe('when weight variant is not configured', () => {
      it('returns the base weight', () => {
        expect(fontWeight('unknownWeight', 'secondary')).toBe(fonts.secondary.weights['normal'])
      })
    })
  })

  describe('when font family is not configured', () => {
    it('returns the base weight of the base font', () => {
      expect(fontWeight('bold', 'unknownFont')).toBe(fonts.base.weights['normal'])
    })
  })

  describe('when no font weight or font family is provided', () => {
    it('returns the base weight of the base font', () => {
      expect(fontWeight()).toBe(fonts.base.weights['normal'])
    })
  })
})
