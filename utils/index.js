const lowerCaseFn = str => str.toLowerCase()
const upperCaseFn = str => str.replace(/(^\w|\s\w)/g, m => m.toUpperCase())

module.exports = {
    lowerCaseFn,
    upperCaseFn
}