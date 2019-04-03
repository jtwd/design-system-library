import system from '../../../../constants/system'

export const expectedUrl = `${system.googleFontUrl}Roboto:300,300i,400,400i,700|Roboto Mono`

export default {
  base: {
    family: 'Roboto',
    stack: 'Roboto, sans-serif',
    type: 'google',
    weights: {
      light: 300,
      'light-italic': '300i',
      normal: 400,
      italic: '400i',
      bold: 700
    }
  },
  secondary: {
    family: 'Roboto Mono',
    stack: 'Roboto Mono, serif',
    type: 'google'
  },
  fileFont: {
    family: 'File Font',
    stack: 'File Font, serif',
    type: 'file',
    weights: {
      light: 300,
      normal: 400,
      bold: 700
    }
  }
}
