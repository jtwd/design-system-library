import config from '../space.config'
import { logError, pxTo } from '../../../utils'

export const baseVal = 'base'
const { units: spacingUnits, spacingUnit: unit, spacingUnitValuePx: px } = config

const space = (
  size = baseVal,
  units = spacingUnits,
  unitPx = px,
  spacingUnit = unit
) => {
  let multiplier = units[size]
  if (!multiplier) {
    logError('spaceSize', { size, baseVal })
    multiplier = units[baseVal]
  }
  const px = `${unitPx * multiplier}px`
  if (spacingUnit === 'px') return px
  return pxTo(px, spacingUnit)
}

export default space
