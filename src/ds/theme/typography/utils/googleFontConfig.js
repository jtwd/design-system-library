import { objValues } from '../../../utils'

const googleFontConfig = fonts => {
  const result = []
  const fontKeys = Object.keys(fonts)
  for (let i = 0; i < fontKeys.length; i++) {
    const font = fonts[fontKeys[i]]
    if (font.type === 'google') {
      result.push({
        font: font.family,
        weights: objValues(font.weights)
      })
    }
  }

  return result
}

export default googleFontConfig
