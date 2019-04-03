import { logError } from '../../../utils'
import config from '../motion.config'

export const baseId = 'base'
const { easing: easingValues } = config

const easing = (variant = baseId, easings = easingValues) => {
  const easingVal = easings[variant]
  if (!easingVal) {
    logError('easingVariant', { variant })
    return easings[baseId]
  }
  return easingVal
}

export default easing
