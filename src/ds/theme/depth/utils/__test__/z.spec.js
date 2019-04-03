import z from '../z'
import * as logFunctions from '../../../../utils/log'

const indexes = {
  0: -1,
  1: 100,
  2: 200,
  3: 300
}

describe('z utility function', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  const logSpy = jest.spyOn(logFunctions, 'logError')

  it('returns the correct zIndex value', () => {
    expect(z(0, indexes)).toBe(-1)
    expect(z(1, indexes)).toBe(100)
    expect(z('2', indexes)).toBe(200)
    expect(z('3', indexes)).toBe(300)
    expect(z('unknownZIndex', indexes)).toBe(0)
  })

  describe('when index is not configured', () => {
    it('returns 0 and logs the error', () => {
      expect(z('unknown', indexes)).toBe(0)
      expect(logSpy).toHaveBeenCalledWith('zIndexVariation', { level: 'unknown' })
    })
  })

  describe('when indexes is not passed', () => {
    it('falls back to default config', () => {
      expect(z(0)).toBe(-1)
    })
  })
})
