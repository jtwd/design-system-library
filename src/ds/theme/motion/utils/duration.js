import { logError } from '../../../utils'
import config from '../motion.config'

export const baseId = 'base'
const { duration: durationValues } = config

const duration = (variant = baseId, durations = durationValues) => {
  const durationVal = durations[variant]
  if (!durationVal) {
    logError('durationVariant', { variant })
    return durations[baseId]
  }
  return durationVal
}

export default duration
