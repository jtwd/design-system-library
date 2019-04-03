import config from '../typography.config'
import { logError } from '../../../utils'

export const baseVal = 'base'
const { fonts: fontValues } = config

const fontStack = (family = baseVal, fonts = fontValues) => {
  const font = fonts[family]
  if (!font) {
    logError('fontStack', { family })
    return fonts[baseVal].stack
  }
  return font.stack
}

export default fontStack
