export default (str) => {
  let arr = str.split(' ') // 让字符串按空格进行分割
  let result = arr.map(item => {
    return item.split('').reverse().join('')
  })
  return result.join(' ')
}
