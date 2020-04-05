export default (str) => {
    let map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
    let num = str.split('')
    let code = []
    num.forEach((item) => {
        if(map[item]) {
            code.push(map[item])
        }
    })
    let comb = (arr) => {
        let temp = []
        for(let i = 0; i < arr[0].length; i++) {
            for(let j = 0; j < arr[1].length; j++) {
                temp.push(`${arr[0][i]}${arr[1][j]}`)
            }
        }
        arr.splice(0, 2, temp)
        if (arr.length > 1) {
            comb(arr)
        } else {
            return temp
        }
        return arr[0]
    }
    return comb(code)
    































    // // 1.建立电话号码键盘映射
    // let map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
    // // 2.把输入字符串按单字符分隔变成数组，234=>[2,3，4]
    // let num = str.split('')
    // // 3.保存键盘映射后的字母内容，如234=>['abc', 'def', 'ghi']
    // let code = []
    // num.forEach(item => {
    //     if(map[item]) {           // 如果item为''空则不执行
    //         code.push(map[item]) // 例如输入的‘234’现在code为['abc', 'def', 'ghi']
    //     }
    // })
    // // 4.做组合运算的主函数
    // let comb = (arr) => {
    //     // 临时变量用来保存前两个组合的结果
    //     let temp = []
    //     // 最外层的循环是遍历第一个元素，里层循环是遍历第二个元素
    //     for(let i = 0; i < arr[0].length; i++) {    // 例如遍历2映射的”abc“
    //         for(let j = 0; j < arr[1].length; j++) {  // 例如遍历3映射的”def“
    //             temp.push(`${arr[0][i]}${arr[1][j]}`) // 临时变量用来保存前两个(2和3)组合的结果即abc和def的组合
    //         }
    //     }
    //     /**code由原来的['abc', 'def', 'ghi']变成
    //      * [['ad','ae', 'af','bd','be','bf','cd','ce','cf'],
    //      *   'ghi']
    //      * 即原code数组的前两位已经被temp替换了
    //      *  */ 
    //     arr.splice(0, 2, temp)
    //     console.log(arr) // (2) [Array(9), "ghi"]
    //     if(arr.length > 1) {
    //         comb(arr) // 递归——直到arr变成一个只含一个元素（['adg',...]）的数组[['adg',...]]
    //     } else {
    //         return temp
    //     }
    //     return arr[0]
    // }
    // return comb(code)
}