import alpha from '../alpha'
import config from '../../color.config'

const red = '#ff0000'
const rgbRed = '255, 0, 0'
const {
  variations: {
    alpha: { baseVal, unit }
  }
} = config

const rgbaVal = (alphaAmt, color = rgbRed) => `rgba(${color}, ${alphaAmt / 100})`

describe('alpha utility function', () => {
  it('returns the correct rgba value', () => {
    expect(alpha(red)).toBe(rgbaVal(baseVal))
  })

  describe('when a variant is passed', () => {
    it('returns the correct rgba value', () => {
      const lightest = rgbaVal(baseVal - unit * 3)
      expect(alpha(red, 'lightest')).toBe(lightest)
      const lighter = rgbaVal(baseVal - unit * 2)
      expect(alpha(red, 'lighter')).toBe(lighter)
      const light = rgbaVal(baseVal - unit)
      expect(alpha(red, 'light')).toBe(light)
      const dark = rgbaVal(baseVal + unit)
      expect(alpha(red, 'dark')).toBe(dark)
      const darker = rgbaVal(baseVal + unit * 2)
      expect(alpha(red, 'darker')).toBe(darker)
      const darkest = rgbaVal(baseVal + unit * 3)
      expect(alpha(red, 'darkest')).toBe(darkest)
    })
  })

  describe('when variant is not configured', () => {
    it('return base value rgba value', () => {
      expect(alpha(red, 'unknownVariant')).toBe(rgbaVal(baseVal))
    })
  })
})
