import depth from '../depth'
import config from '../../depth.config'

const { shadows } = config

describe('depth utility function', () => {
  it('returns the correct box shadow values', () => {
    expect(depth()).toBe(shadows['100'])
    expect(depth(200)).toBe(shadows['200'])
    expect(depth(300)).toBe(shadows['300'])
    expect(depth(400)).toBe(shadows['400'])
    expect(depth(500)).toBe(shadows['500'])
    expect(depth('000')).toBe(shadows['000'])
  })

  describe('when an unknown value is passed', () => {
    it('returns the default box shadow (100)', () => {
      expect(depth('unknownDepth')).toBe(shadows['100'])
    })
  })
})
