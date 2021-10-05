module.exports = (db) => async (req, res, next) => {

  const { email, username, hash } = req.body

  if (!email || !username || !hash){
    return next({
      error: new Error('All fields are mandatory')
    })
  }



  res.status(200)
    .json({
      Hello: '> Hello'
    })

};
