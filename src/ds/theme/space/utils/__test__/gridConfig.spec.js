import gridConfig from '../gridConfig'
import { breakpointsMock, gridConfig as expectedConfig } from '../__mock__/breakpoints'

describe('gridConfig utility function', () => {
  it('returns the correct object', () => {
    expect(gridConfig(breakpointsMock)).toEqual(expectedConfig)
  })

  describe('when not passed a config', () => {
    it('falls back to default config', () => {
      expect(Object.keys(gridConfig()).length).toEqual(5)
    })
  })
})
