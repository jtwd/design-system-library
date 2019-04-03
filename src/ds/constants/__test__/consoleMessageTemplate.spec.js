import consoleMessageTemplates from '../consoleMessageTemplates'

const { missingVariant } = consoleMessageTemplates

describe('Missing variant console message template', () => {
  it('returns the correct message', () => {
    const msg1 = {
      fnName: 'function name',
      pre: 'pre-amble',
      value: 'replacementValue',
      returned: 'returned value',
      config: 'config'
    }
    expect(missingVariant(msg1)).toBe(
      "function name pre-amble '[replacementValue]' has not been configured. Returned returned value. Check config config."
    )

    const msg2 = {
      fnName: 'function name',
      value: 'replacementValue'
    }
    expect(missingVariant(msg2)).toBe("function name '[replacementValue]' has not been configured.")
  })
})
