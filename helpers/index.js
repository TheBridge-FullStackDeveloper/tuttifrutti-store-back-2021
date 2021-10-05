const { sendActivationMail, sendConfirmationMail } = require('./mailer')
const { encrypt, confirmToken } = require('./hash')

module.exports = {
  mailer: { 
    sendActivationMail,
    sendConfirmationMail,
  },
  hashing: {
    encrypt,
    confirmToken,
  },
}