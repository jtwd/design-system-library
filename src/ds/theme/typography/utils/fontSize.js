import config from '../typography.config'
import { logError, normaliseUnitValue } from '../../../utils'

export const baseVal = 'base'
const { fontSizes: fontSizeValues, fontSizeUnit } = config

export const fontSize = (
  size = baseVal,
  pxOverride = false,
  fontSizes = fontSizeValues,
  unit = fontSizeUnit
) => {
  const fs = fontSizes[size]
  if (!fs) {
    logError('fontSizeVariant', { size, baseVal })
    return normaliseUnitValue(fontSizes[baseVal], unit, pxOverride)
  }
  return normaliseUnitValue(fs, unit, pxOverride)
}
