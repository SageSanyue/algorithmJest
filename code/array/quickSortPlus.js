export default (arr) => {
    let quickSort = (arr) => {
        let len = arr.length,
            pivot;
        if (len < 2) {
            return arr
        } else {
            let index = arr.length / 2 | 0
            pivot = arr.splice(index, 1)
            let left = [],
                right = [],
                temp;
            for (let i = 1; i < len; i++) {
                temp = arr[i]
                if (temp < pivot) {
                    left.push(temp)
                } else {
                    right.push(temp)
                }
            }
            return quickSort(left).concat(pivot, quickSort(right))
        }
    }
    return quickSort(arr)
}