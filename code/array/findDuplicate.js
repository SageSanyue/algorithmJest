// 请为所有数组对象添加一个findDuplicate(n)方法，用于返回该数组中出现频率>=n的元素列表
// [1,2,3,4,1,2,2,2].findDuplicate(2) => [1,2]
// [1,2,3,4,1,2,2,2].findDuplicate(5) => []
// [1,2,3,4,1,2,2,2].findDuplicate(-1) => [1,2,3,4]

if (!Array.prototype.findDup) {
    Array.prototype.findDup = function(count) {
        var arr = this.reduce((acc, cur) => {
            var index = acc.findIndex(function(item) {
                return item.cur === cur
            })
            if (index >= 0) {
                acc[index].count++
            } else {
                acc.push({ count: 1, cur})
            }
            return acc
        }, [])
    
        var arrFilter = arr.filter(item => item.count >= count)

        var outPut = arrFilter.map(item => item.cur)
        return outPut
    }
}

var a = [1,2,3,4,1,2,2,2].findDup(2)
console.log(a)
