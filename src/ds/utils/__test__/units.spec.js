import { normaliseUnitValue, pxTo, toPx, parseUnit, parseValue } from '../'

describe('normaliseUnitValue utility function', () => {
  it('returns the correct value when converting units', () => {
    expect(normaliseUnitValue('1.25rem', 'px')).toBe('20px')
    expect(normaliseUnitValue('1.25rem', 'px', false)).toBe('20px')
    expect(normaliseUnitValue('20px', 'rem', false)).toBe('1.25rem')
    expect(normaliseUnitValue('20px', 'rem', true)).toBe('20px')
    expect(normaliseUnitValue('20px', 'px', true)).toBe('20px')
    expect(normaliseUnitValue('1rem', 'px', true)).toBe('16px')
    expect(normaliseUnitValue('1rem', 'rem')).toBe('1rem')
  })
})

describe('toPx utility function', () => {
  it('returns the correct px value', () => {
    expect(toPx('1rem')).toBe('16px')
    expect(toPx('1rem', 14)).toBe('14px')
    expect(toPx('1.5em')).toBe('24px')
    expect(toPx('1.2em')).toBe('19.2px')
  })
})

describe('pxTo utility function', () => {
  it('returns the correct value and unit', () => {
    expect(pxTo(16)).toBe('1rem')
    expect(pxTo(14, 'em', 14)).toBe('1em')
    expect(pxTo(20, 'rem', 10)).toBe('2rem')
  })
})

describe('parseUnit utility function', () => {
  it('return the correct unit', () => {
    expect(parseUnit('2rem')).toBe('rem')
    expect(parseUnit('2.125em')).toBe('em')
    expect(parseUnit('1299px')).toBe('px')
    expect(parseUnit('123123')).toBe('')
  })
})

describe('parseValue utility function', () => {
  it('return the correct value', () => {
    expect(parseValue('2rem')).toBe(2)
    expect(parseValue('2.125em')).toBe(2.125)
    expect(parseValue('1299px')).toBe(1299)
  })
})
