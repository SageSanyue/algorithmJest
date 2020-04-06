export default (arr) => {
    let i,
        j,
        len = arr.length,
        temp;
    for (i = len - 1; 0 < i; i--) {
        for (j = 0; j < i; j++) {
            if (arr[j] > arr[j+1]) {
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}