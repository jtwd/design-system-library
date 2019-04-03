import color from '../color'
import config from '../../color.config'
import * as logFunctions from '../../../../utils/log'

const { systemErrorColor } = config

describe('color utility function', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  const logSpy = jest.spyOn(logFunctions, 'logError')

  const {
    palette: {
      primary: { hex: colPrimary },
      warning: { hex: colWarning }
    }
  } = config

  it('returns base color from palette', () => {
    expect(color('primary')).toBe(colPrimary)
    expect(color('warning')).toBe(colWarning)
  })

  describe('when color is not in palette', () => {
    it('logs the error and returns system error color', () => {
      expect(color('unknownColor')).toBe(systemErrorColor)
      expect(logSpy).toHaveBeenCalledWith('colorName', { name: 'unknownColor' })
    })
  })

  describe('when passing a variant', () => {
    it('returns the correct color hex value', () => {
      expect(color('secondary', 'dark')).toBe('#A260FA')
      expect(color('secondary', 'darker')).toBe('#8D3BF9')
      expect(color('secondary', 'darkest')).toBe('#7715F7')
      expect(color('secondary', 'light')).toBe('#CEAAFC')
      expect(color('secondary', 'lighter')).toBe('#E3CFFD')
      expect(color('secondary', 'lightest')).toBe('#F9F5FF')
    })
  })

  describe('when variant has not been configured', () => {
    it('logs the error and returns the base color', () => {
      expect(color('primary', 'unknownVariant')).toBe(colPrimary)
      expect(logSpy).toHaveBeenCalledWith('colorVariant', { variant: 'unknownVariant' })
    })
  })
})
