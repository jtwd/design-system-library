import googleFontConfig from '../googleFontConfig'
import config from '../../typography.config'
import { objValues } from '../../../../utils'

config.fonts.fileFont = {
  family: 'File Font',
  stack: 'File font, serif',
  type: 'file',
  weights: {
    normal: 400,
    bold: 700
  }
}

describe('googleFontConfig', () => {
  it('return a valid config object with the correct values', () => {
    const expected = [
      {
        font: config.fonts.base.family,
        weights: objValues(config.fonts.base.weights)
      },
      {
        font: config.fonts.secondary.family,
        weights: objValues(config.fonts.secondary.weights)
      }
    ]
    expect(googleFontConfig(config.fonts)).toEqual(expected)
  })
})
