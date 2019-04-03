import copyReplacer from '../copyReplacer'

describe('copy replacer', () => {
  const copy = 'The member [name] needs to reduce the borrowing by [amount] in order to continue'
  const changesObj = { name: 'Maureen', amount: '4500' }
  it('test the string output', () => {
    const updatedCopy = copyReplacer(copy, changesObj)

    const expectedCopy = copy
      .replace('[name]', changesObj.name)
      .replace('[amount]', changesObj.amount)

    expect(updatedCopy).toBe(expectedCopy)
  })
})
