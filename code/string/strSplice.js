export default (str) => {
    let result = []

    // 找匹配子串的具体执行方法
    function matchStr(item) {
        let j = item.match(/^(0+|1+)/)[0] // 从这个字符串起始找到连续的0或1
        let k = (j[0] ^ 1).toString().repeat(j.length) // 找到上边j字段的第一位的取反数，后续还要它跟j长度相等
        // j + o 连起来才是符合条件的子串
        let reg = new RegExp(`^(${j}${k})`)
        if(reg.test(item)) {
            return RegExp.$1 // RegExp.$1是RegExp的一个属性,指的是与正则表达式匹配的第一个 子匹配(以括号为标志)字符串
        } else {
            return ''
        }
    }

    // 通过for循环控制程序运行的流程
    for(let i = 0; i < str.length-1; i++) {
        let sub = matchStr(str.slice(i))
        if(sub) {
            result.push(sub)
        }
    }
    return result
}