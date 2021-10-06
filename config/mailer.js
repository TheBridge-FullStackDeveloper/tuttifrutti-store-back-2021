const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  }
})

const { activation } = require('../helpers/templates/activation')
const { confirmation } = require('../helpers/templates/confirmation')

// const sendMail = async ({to, token})=> {
//   const template = activation({to, token})
//   await transporter.sendMail(template)
// }
const sendMail = async ({to, token})=> {
  const template = activation({to, token})
  await transporter.sendMail(template)
}

module.exports = {
  mailer: sendMail,
}

// const sendMail = async (template) => {
//   try {
//     return await transporter.sendMail(template)
//   } catch (error) {
//     console.info('Error at "sendMail" config: ', error.message)
//     return false
//   }
// }

