import breakpoint from '../breakpoint'
import * as logFunctions from '../../../../utils/log'
import { breakpointsMock, breakpointsMockInvalidConfig } from '../__mock__/breakpoints'

describe('breakpoint utility function', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  const logSpy = jest.spyOn(logFunctions, 'logError')

  it('returns the correct breakpoint min-width value', () => {
    expect(breakpoint('s', breakpointsMock, 'rem')).toBe('48rem')
    expect(breakpoint('m', breakpointsMock, 'rem')).toBe('64rem')
    expect(breakpoint('l', breakpointsMock, 'rem')).toBe('90rem')
  })

  describe('when an unknown value is passed', () => {
    it('returns false', () => {
      expect(breakpoint('unknownBreakpoint', breakpointsMock, 'rem')).toBe(false)
      expect(logSpy).toHaveBeenCalledWith('breakpointVariant', { bp: 'unknownBreakpoint' })
    })
  })

  describe('when min-width is missing from config', () => {
    it('returns false', () => {
      expect(breakpoint('s', breakpointsMockInvalidConfig, 'rem')).toBe(false)
      expect(logSpy).toHaveBeenCalledWith('breakpointMinWidth', { bp: 's' })
    })
  })

  describe('when breakpoints config is not passed', () => {
    it('fallsback to default config', () => {
      expect(breakpoint('s')).toBe('48rem')
    })
  })
})
