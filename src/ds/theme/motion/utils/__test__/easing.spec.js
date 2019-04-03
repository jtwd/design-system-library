import { easing } from '../index'
import { baseId } from '../easing'
import config from '../../motion.config'

const { easing: easingValues } = config

describe('easing utiility function', () => {
  it('returns the correct easing value', () => {
    expect(easing()).toBe(easingValues[baseId])
    expect(easing('excite')).toBe(easingValues['excite'])
    expect(easing('overshoot')).toBe(easingValues['overshoot'])
  })

  describe('when variant has not been configured', () => {
    it('returns the base easing value', () => {
      expect(easing('unknownEasing')).toBe(easingValues[baseId])
    })
  })
})
