const { createUser } = require('../../query/auth')
const { hashing } = require('../../helpers')

const { sendMail } = require('../../config/mailer')
// const { templateFactory } = require('../../helpers/templates/activation')

module.exports = (db) => async (req, res, next) => {
  const { email, username, hash } = req.body

  // check if exists
  if (!email || !username || !hash){
    return next({error: new Error('All fields are mandatory')})
  }

  // create user
  const pass = await hashing.encrypt(hash)
  const token = await hashing.confirmToken()
  const result = await createUser(db, { email, username, pass, token })
  if(result === false){
    return next({
      statusCode: 400,
      error: new Error('Username or email already on use')
    })
  }

  // send activation mail
  // await sendMail(templateFactory({ to: email, token}))

  await sendMail({ to:email, token})

  res.status(200)
    .json({
      success: true,
      message: '> Confirmation token sent to provided email'
    })

};
