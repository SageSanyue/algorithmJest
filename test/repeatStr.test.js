import repeat from '.././code/string/repeatStr'

test('repeat: abab true', () => {
    expect(repeat('abab')).toBe(true)
})

test('repeat: aba false', () => {
    expect(repeat('aba')).toBe(false)
})

test('repeat: abcabcabcabc true', () => {
    expect(repeat('abcabcabcabc')).toBe(true)
})