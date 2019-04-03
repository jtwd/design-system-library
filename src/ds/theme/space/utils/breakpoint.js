import spaceConfig from '../space.config'
import { logError } from '../../../utils'

const { breakpoints, spacingUnit } = spaceConfig

const breakpoint = (bp, values = breakpoints, unit = spacingUnit) => {
  const selectedBp = values[bp]
  if (!selectedBp) {
    logError('breakpointVariant', { bp })
    return false
  }
  if (!selectedBp.minWidth) {
    logError('breakpointMinWidth', { bp })
    return false
  }
  return `${selectedBp.minWidth}${unit}`
}

export default breakpoint
