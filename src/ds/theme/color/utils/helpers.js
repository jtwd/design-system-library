import Color from 'color'

import config from '../color.config'
import { logError } from '../../../utils'

const { variations: defaultVariations } = config

const getAdjustmentAmount = (variant, type = 'color', variations = defaultVariations) => {
  const variation = variations[type]
  if (!variation) {
    logError('variationType', { type, variant })
    return null
  }
  const { ids, baseId, unit } = variation
  const baseIndex = ids.indexOf(baseId)
  const variantIndex = ids.indexOf(variant)
  if (variantIndex === -1) {
    logError('variant', { type, variant })
    return null
  }
  const direction = variantIndex > baseIndex ? '+' : '-'
  const difference = Math.abs(variantIndex - baseIndex)
  const amount = (difference * unit) / 100

  return {
    direction,
    amount
  }
}

const adjustColor = (hex, adjustment, amt) => {
  const adjustedColor = Color(hex)[adjustment](amt)
  if (adjustment !== 'alpha') return adjustedColor.hex()
  return adjustedColor
}

export { getAdjustmentAmount, adjustColor }
