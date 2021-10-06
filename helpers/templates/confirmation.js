const confirmation = ({ to, username }) => ({
  from: `" 🤟 Tutteam" ${process.env.MAIL_USER}`,
  to,
  subject: `${ username }, tu cuenta ha sido verificada`,
  html: `
    <h2> Gracias por registrarte ${username} </h2>
    <p> ${ username }, esto es un template de plantilla </p>  
  `
})

module.exports = {
  // sendConfirmationMail,
  confirmation,
}


// const sendConfirmationMail = async ({ to, username}) => {
//   try {
//     const template = templateFactory({ to, username})
//     return await transporter.sendMail(template)
//   } catch (e) {
//     console.info('> Error at "sendConfirmationMail" helper: ', e.message)
//     return false
//   }
// }

