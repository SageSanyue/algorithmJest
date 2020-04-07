export default (arr) => {
    var len = arr.length,
        i,
        j,
        min,
        temp;
    for(i = 0; i < len - 1; i++) {
        min = arr[i]
        for(j = i+1; j < len; j++) {
            if (arr[j] < min) {
                temp = min
                min = arr[j]
                arr[j] = temp
            }
        }
        arr[i] = min
    }
    return arr
}