// 手写reduce函数
var reduce1 = function(a, f, initial) {
    var i = 0, len = a.length, accumulator;
    if(arguments.length > 2) accumulator = initial
    else {
        if(len === 0) throw TypeError()
        while(i < len) {
            if (i in a) {
                accumulator = a[i++]
                break
            } else {
                i++
            }
        }
        if (i === len) { throw TypeError() }
    }

    while(i < len) {
        if (i in a) {
            accumulator = f(accumulator, a[i], i, a)
        }
        i++
    }

    return accumulator
}

var arr = [2,3,4]
var a1 = reduce1(arr, (acc, cur, idx, arr) => {
    return acc + cur
}, 5)
console.log(a1) // 14

var a1 = reduce1(arr, (acc, cur, idx, arr) => {
    return acc + cur
})
console.log(a1) // 9

var a1 = reduce1(arr, (acc, cur, idx, arr) => {
    return acc * cur
}, 2)
console.log(a1) // 48