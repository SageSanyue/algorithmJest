export default (arr) => {
    // 卡牌排序，排序目的：让相同的牌排在一起方便分组
    let str = arr.sort((a, b) => a - b).join('')

    // 分组（多张或单张）
    let group = str.match(/(\d)\1+|\d/g)
    // let group = str.match(/(\d)+|\d/g)

    // 求两个数的最大公约数
    let gcd = (a, b) => {
        if(b === 0) {
            return a
        } else {
            return gcd(b, a%b)
        }
    }

    // 两组两组地求公约数
    while(group.length > 1) {
        let a = group.shift().length // 取之前分好组的里面的第一个字符串的长度
        let b = group.shift().length // 取之前分好组的里面的第二个字符串的长度
        let v = gcd(a, b)
        if(v === 1) {
            return false
        } else {
            group.unshift('0'.repeat(v)) // 只取字符串的长度'0'改成'2'什么的数字都行
        }
    }

    return group.length ? group[0].length > 1 : false
}