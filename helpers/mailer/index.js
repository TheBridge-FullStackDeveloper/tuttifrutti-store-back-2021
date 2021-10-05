const { sendActivationMail } = require('./activation')
const { sendConfirmationMail } = require('./confirmation')

module.exports = {
  sendActivationMail,
  sendConfirmationMail,
}