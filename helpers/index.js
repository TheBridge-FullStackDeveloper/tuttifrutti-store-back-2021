const { encrypt, confirmToken } = require('./hash')

module.exports = {
  hash: {
    encrypt,
    confirmToken,
  },
}