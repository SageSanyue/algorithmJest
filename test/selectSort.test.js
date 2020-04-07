import selectSort from '.././code/array/selectSort'

test('selectSort', () => {
    expect(selectSort([3,5,1,2,6,4])).toEqual([1,2,3,4,5,6])
})