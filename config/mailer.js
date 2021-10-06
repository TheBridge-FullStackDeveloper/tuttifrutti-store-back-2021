require('dotenv').config()
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  }
})

const sendMail = async ({to, token}) => {
  await transporter.sendMail({
    from: `" 🤟 Tutteam" ${process.env.MAIL_USER}`,
    to,
    subject: 'Confirma tu correo',
    html: `
      <h2> Un último paso </h2>
      <p> para confirmar tu cuenta, haz clic
        <a href="${process.env.SERVER_URL}:${process.env.SERVER_PORT}/auth/confirmation/${token}">
        <button> aquí </button>
        </a>
      </p>  
    `
  })
}

// const sendMail = async (template) => {
//   try {
//     return await transporter.sendMail(template)
//   } catch (error) {
//     console.info('Error at "sendMail" config: ', error.message)
//     return false
//   }
// }

const { activation } = require('../helpers/templates/activation')

module.exports = {
  sendMail,
}

