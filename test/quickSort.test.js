import quickSort from '.././code/array/quickSort'

test('quickSort:[2,4,1,6,8,7]', () => {
    expect(quickSort([2,4,1,6,8,7])).toEqual([1,2,4,6,7,8])
})
test('quickSort:[6,2,8,0,1,3]', () => {
    expect(quickSort([6,2,8,0,1,3])).toEqual([0,1,2,3,6,8])
})