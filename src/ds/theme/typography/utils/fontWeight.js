import config from '../typography.config'
import { logError } from '../../../utils'

export const baseFontVal = 'base'
export const baseVal = 'normal'
const { fonts: fontValues } = config

const fontWeight = (weight = baseVal, family = baseFontVal, fonts = fontValues) => {
  const font = fonts[family]
  if (!font) {
    logError('fontStack', { family, baseVal: baseFontVal })
    return fonts[baseFontVal].weights[baseVal]
  }
  const fw = font.weights[weight]
  if (!fw) {
    logError('fontWeight', { weight, family, baseVal })
    return font.weights[baseVal]
  }
  return fw
}

export default fontWeight
