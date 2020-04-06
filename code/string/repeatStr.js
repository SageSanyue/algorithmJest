export default (str) => {
    let reg = new RegExp(/^(\w+)\1+$/)
    return reg.test(str)
}