import bubbleSort from '.././code/array/bubbleSort'

test('bubbleSort:', () => {
    expect(bubbleSort([2,6,1,4,8,3])).toEqual([1,2,3,4,6,8])
})

test('bubbleSort:', () => {
    expect(bubbleSort([2,2,1,2,8,3,9,4])).toEqual([1,2,2,2,3,4,8,9])
})