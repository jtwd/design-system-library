import config from '../depth.config'
import { logError } from '../../../utils'

const { shadows } = config

const depth = (amount = 100, depthValues = shadows) => {
  let shadow = depthValues[amount]
  if (!shadow) {
    logError('depthAmount', { amount })
    shadow = depthValues[`100`]
  }
  return shadow
}

export default depth
