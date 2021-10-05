const { confirmUser } = require('../../query/auth')
const { mailer } = require('../../helpers')

module.exports = (db) => async (req, res, next) => {
  const { token } = req.params

  // confirm token and update user
  const result = await confirmUser(db, {token})
  if(!result){
    return next({ 
      statusCode: 400,
      error: new Error('Invalid token'),
    })
  }

  // sending confirmation email

  res.status(200)
    .json({
      success: true,
      message: '> Account activated'
    })

}