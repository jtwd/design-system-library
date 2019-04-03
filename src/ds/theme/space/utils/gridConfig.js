import config from '../space.config'

const { breakpoints: bps } = config

const getValues = (param, bp, bpKeys) => {
  const obj = {}
  bpKeys.forEach(key => {
    obj[key] = bp[key][param]
  })
  return obj
}

const gridConfig = (breakpoints = bps) => {
  const bpKeys = Object.keys(breakpoints)
  return {
    breakpoints: getValues('minWidth', breakpoints, bpKeys),
    columns: getValues('columns', breakpoints, bpKeys),
    gutterWidth: getValues('gutterWidth', breakpoints, bpKeys),
    paddingWidth: getValues('paddingWidth', breakpoints, bpKeys),
    container: getValues('container', breakpoints, bpKeys)
  }
}

export default gridConfig
