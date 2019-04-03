import { logError } from '../../../utils'
import config from '../depth.config'

const { zIndex } = config

const z = (level, indexes = zIndex) => {
  const val = indexes[level]
  if (!val) {
    logError('zIndexVariation', { level })
    return 0
  }
  return val
}

export default z
