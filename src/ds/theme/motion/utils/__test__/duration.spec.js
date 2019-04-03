import { duration } from '../index'
import { baseId } from '../duration'
import config from '../../motion.config'

const { duration: durationValues } = config

describe('duration utility function', () => {
  it('return the correct value', () => {
    expect(duration()).toBe(durationValues[baseId])
    expect(duration('fast')).toBe(durationValues['fast'])
    expect(duration('slow')).toBe(durationValues['slow'])
    expect(duration('slowest')).toBe(durationValues['slowest'])
  })

  describe('when variant is not configured', () => {
    it('return the base duration value', () => {
      expect(duration('unknownDuration')).toBe(durationValues[baseId])
    })
  })
})
