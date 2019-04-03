import utils from '../'

describe('index', () => {
  it('exports all the utilities', () => {
    expect(utils['dsColor']).toBeTruthy()
    expect(utils['dsAlpha']).toBeTruthy()
    expect(utils['dsDepth']).toBeTruthy()
    expect(utils['dsZ']).toBeTruthy()
    expect(utils['dsSpace']).toBeTruthy()
    expect(utils['dsGoogleFontConfig']).toBeTruthy()
    expect(utils['dsGoogleFontUrl']).toBeTruthy()
    expect(utils['dsFont']).toBeTruthy()
    expect(utils['dsFontSize']).toBeTruthy()
    expect(utils['dsFs']).toBeTruthy()
    expect(utils['dsWeight']).toBeTruthy()
    expect(utils['dsDuration']).toBeTruthy()
    expect(utils['dsEasing']).toBeTruthy()
  })
})
