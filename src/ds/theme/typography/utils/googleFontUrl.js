import { objValues } from '../../../utils'
import system from '../../../constants/system'

const { googleFontUrl: gfUrl } = system

const googleFontUrl = (fonts, url = gfUrl) => {
  const result = []
  const fontKeys = Object.keys(fonts)
  for (let i = 0; i < fontKeys.length; i++) {
    const font = fonts[fontKeys[i]]
    if (font.type === 'google') {
      let family = font.family
      if (font.weights) family += `:${objValues(font.weights).join(',')}`
      result.push(family)
    }
  }
  return `${url}${result.join('|')}`
}

export default googleFontUrl
