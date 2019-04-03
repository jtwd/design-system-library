import objValues from '../objValues'

describe('objValues utility functions', () => {
  it('returns an array of the values of each parameter in the object', () => {
    const obj = {
      param1: 'value',
      param2: '3',
      another: 'test'
    }

    const expected = ['value', '3', 'test']
    expect(objValues(obj)).toEqual(expected)
  })
})
