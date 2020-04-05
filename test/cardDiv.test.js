import card from '.././code/array/cardDiv'

test('card', () => {
    expect(card([1,2,3,4,4,3,2,1])).toBe(true)
    expect(card([1,1,1,2,2,2,3,3])).toBe(false)
    expect(card([1])).toBe(false)
    expect(card([1,1])).toBe(true)
    expect(card([1,1,2,2,2,2])).toBe(true)
})