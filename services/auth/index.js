const { createUser } = require('../../query/auth')
const { encrypt, confirmToken } = require('../../helpers/hash')

module.exports = (db) => async (req, res, next) => {

  const { email, username, hash } = req.body

  // check if exists
  if (!email || !username || !hash){
    return next({error: new Error('All fields are mandatory')})
  }

  // create user
  const pass = await encrypt(hash)
  const token = await confirmToken()
  const result = await createUser(db, { email, username, pass, token })
  if(result === false){
    return next({
      statusCode: 400,
      error: new Error('Username or email already on use')
    })
  }

  // send confirmation mail


  res.status(200)
    .json({
      success: true,
      message: '> User successfully created'
    })

};
