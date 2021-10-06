const { confirmUser } = require('../../query/auth')
// const { mailer } = require('../../helpers')

const { sendMail } = require('../../config/mailer')
const { templateFactory } = require('../../helpers/templates/confirmation')


module.exports = (db) => async (req, res, next) => {
  const { token } = req.params

  // confirm token and update user
  const [ result ] = await confirmUser(db, {token})
  if(!result){
    return next({ 
      statusCode: 400,
      error: new Error('Invalid token'),
    })
  }

  // sending confirmation email
  // await mailer.sendConfirmationMail({ to: result.email, username: result.username })
  await sendMail(templateFactory)({ to: email, token})

  res.status(200)
    .json({
      success: true,
      message: '> Account activated, sent email with user details'
    })
}