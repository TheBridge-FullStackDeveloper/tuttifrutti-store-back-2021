const transporter = require('../../config/mailer')

const templateFactory = ({ to, token }) => ({
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

const sendActivationMail = async ({ to, token}) => {
  try {
    const template = templateFactory({ to, token})
    return await transporter.sendMail(template)
  } catch (e) {
    console.info('> Error at "sendActivationMail" helper: ', e.message)
    return false
  }
}

module.exports = {
  sendActivationMail,
}