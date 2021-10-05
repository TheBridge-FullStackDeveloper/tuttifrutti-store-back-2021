const { sendActivationMail } = require('./mailer')
const { encrypt, confirmToken } = require('./hash')

module.exports = {
  mailer: { 
    sendActivationMail,
  },
  hashing: {
    encrypt,
    confirmToken,
  },
}