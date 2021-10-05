const { createUser } = require('../../query/auth')

module.exports = (db) => async (req, res, next) => {

  const { email, username, hash } = req.body

  // check
  if (!email || !username || !hash){
    return next({
      error: new Error('All fields are mandatory')
    })
  }

  // create user
  const result = await createUser(db, { email, username, hash })
  if(result === false){
    return next({
      statusCode: 400,
      error: new Error('Username or email already on use')
    })
  }

  // await mailer

  res.status(200)
    .json({
      success: true,
      message: '> User successfully created'
    })

};
