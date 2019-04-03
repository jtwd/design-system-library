import config from '../color.config'
import { logError } from '../../../utils'
import { getAdjustmentAmount, adjustColor } from './helpers'

const { palette, variations, systemErrorColor } = config

const {
  color: { baseId }
} = variations

const color = (name, variant = baseId, colors = palette) => {
  const colObj = colors[name]
  if (!colObj) {
    logError('colorName', { name })
    return systemErrorColor
  }
  const baseColor = colObj.hex
  if (variant === baseId) return baseColor
  const adjustments = getAdjustmentAmount(variant)
  if (!adjustments) {
    logError('colorVariant', { variant })
    return baseColor
  }
  const adjustment = adjustments.direction === '+' ? 'darken' : 'lighten'
  return adjustColor(baseColor, adjustment, adjustments.amount)
}

export default color
