import config from '../color.config'
import { getAdjustmentAmount, adjustColor } from './helpers'

const { variations } = config

const {
  alpha: { baseId, baseVal }
} = variations

const alpha = (colorHex, variant = baseId, base = baseVal) => {
  let amount = base / 100
  if (variant !== baseId) {
    const adjustments = getAdjustmentAmount(variant, 'alpha')
    if (adjustments) {
      amount =
        adjustments.direction === '+' ? amount + adjustments.amount : amount - adjustments.amount
    }
  }
  const colObj = adjustColor(colorHex, 'alpha', amount)
  return `rgba(${colObj.color.join(', ')}, ${colObj.valpha})`
}

export default alpha
