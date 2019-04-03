import { getAdjustmentAmount } from '../helpers'
import config from '../../color.config'
import * as logFunctions from '../../../../utils/log'

const {
  variations: {
    color: { unit: colorUnit },
    alpha: { unit: alphaUnit }
  }
} = config

describe('color utility helper functions', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  const logSpy = jest.spyOn(logFunctions, 'logError')

  describe('getAdjustmentAmount', () => {
    describe('when variant is lightest', () => {
      it('returns an object with direction as - and correct amount', () => {
        const expected = {
          direction: '-',
          amount: (colorUnit * 3) / 100
        }

        expect(getAdjustmentAmount('lightest')).toEqual(expected)
      })
    })

    describe('when variant is lighter', () => {
      it('returns an object with direction as - and correct amount', () => {
        const expected = {
          direction: '-',
          amount: (colorUnit * 2) / 100
        }

        expect(getAdjustmentAmount('lighter')).toEqual(expected)
      })
    })

    describe('when variant is light', () => {
      it('returns an object with direction as - and correct amount', () => {
        const expected = {
          direction: '-',
          amount: colorUnit / 100
        }

        expect(getAdjustmentAmount('light')).toEqual(expected)
      })
    })

    describe('when variant is darkest', () => {
      it('returns an object with direction as + and correct amount', () => {
        const expected = {
          direction: '+',
          amount: (colorUnit * 3) / 100
        }

        expect(getAdjustmentAmount('darkest')).toEqual(expected)
      })
    })

    describe('when variant is darker', () => {
      it('returns an object with direction as + and correct amount', () => {
        const expected = {
          direction: '+',
          amount: (colorUnit * 2) / 100
        }

        expect(getAdjustmentAmount('darker')).toEqual(expected)
      })
    })

    describe('when variant is dark', () => {
      it('returns an object with direction as + and correct amount', () => {
        const expected = {
          direction: '+',
          amount: colorUnit / 100
        }

        expect(getAdjustmentAmount('dark')).toEqual(expected)
      })
    })

    describe('when variant is undefined', () => {
      it('returns null', () => {
        expect(getAdjustmentAmount()).toBe(null)
        expect(logSpy).toHaveBeenCalledWith('variant', {
          type: 'color',
          variant: undefined
        })
      })
    })

    describe('when variant is not in config', () => {
      it('returns null', () => {
        expect(getAdjustmentAmount('notinconfig')).toBe(null)
        expect(logSpy).toHaveBeenCalledWith('variant', {
          type: 'color',
          variant: 'notinconfig'
        })
      })
    })

    describe('when type is alpha', () => {
      describe('when variant is lightest', () => {
        it('returns an object with direction as - and correct amount', () => {
          const expected = {
            direction: '-',
            amount: (alphaUnit * 3) / 100
          }

          expect(getAdjustmentAmount('lightest', 'alpha')).toEqual(expected)
        })
      })

      describe('when type is not in config', () => {
        it('returns null', () => {
          expect(getAdjustmentAmount('darker', 'unknownType')).toBe(null)
          expect(logSpy).toHaveBeenCalledWith('variationType', {
            type: 'unknownType',
            variant: 'darker'
          })
        })
      })

      describe('when variant is lighter', () => {
        it('returns an object with direction as - and correct amount', () => {
          const expected = {
            direction: '-',
            amount: (alphaUnit * 2) / 100
          }

          expect(getAdjustmentAmount('lighter', 'alpha')).toEqual(expected)
        })
      })

      describe('when variant is light', () => {
        it('returns an object with direction as - and correct amount', () => {
          const expected = {
            direction: '-',
            amount: alphaUnit / 100
          }

          expect(getAdjustmentAmount('light', 'alpha')).toEqual(expected)
        })
      })

      describe('when variant is darkest', () => {
        it('returns an object with direction as + and correct amount', () => {
          const expected = {
            direction: '+',
            amount: (alphaUnit * 3) / 100
          }

          expect(getAdjustmentAmount('darkest', 'alpha')).toEqual(expected)
        })
      })

      describe('when variant is darker', () => {
        it('returns an object with direction as + and correct amount', () => {
          const expected = {
            direction: '+',
            amount: (alphaUnit * 2) / 100
          }

          expect(getAdjustmentAmount('darker', 'alpha')).toEqual(expected)
        })
      })

      describe('when variant is dark', () => {
        it('returns an object with direction as + and correct amount', () => {
          const expected = {
            direction: '+',
            amount: alphaUnit / 100
          }

          expect(getAdjustmentAmount('dark', 'alpha')).toEqual(expected)
        })
      })
    })
  })
})
