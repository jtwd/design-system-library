import { config as typeConfig } from '../theme/typography'
const { baseFontSizePx: baseFontSize } = typeConfig

/* converts `px` to `rem` or `em` */
export const pxTo = (value, unit = 'rem', base = baseFontSize) =>
  `${parseFloat(value) / base}${unit}`

/* converts a `rem` or `em` value to `px` */
export const toPx = (value, base = baseFontSize) => `${parseFloat(value) * base}px`

/* parses a number and unit string, and returns the number used */
export const parseValue = str => parseFloat(str.trim().match(/[\d.\-+]*\s*(.*)/)[0])

/* parses a number and unit string, and returns the unit used */
export const parseUnit = str => str.trim().match(/[\d.\-+]*\s*(.*)/)[1] || ''

export const normaliseUnitValue = (value, unit, pxOverride = false) => {
  const curUnit = parseUnit(value)
  if (pxOverride) return curUnit === 'px' ? value : toPx(parseValue(value))
  if (curUnit === unit) return value
  if (curUnit === 'px') return pxTo(value, unit)
  return toPx(value)
}
