import googleFontUrl from '../googleFontUrl'
import fontsMock, { expectedUrl } from '../__mock__/fonts'

describe('getGoogleFontUrl utility function', () => {
  it('returns the correct google fonts url', () => {
    expect(googleFontUrl(fontsMock)).toBe(expectedUrl)
  })
})
