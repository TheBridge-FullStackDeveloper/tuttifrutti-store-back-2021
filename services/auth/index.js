module.exports = (db) => async (req, res, next) => {

  const { email, username, hash } = req.body

  console.info(email, username, hash)

  res.status(200)
    .json({
      Hello: '> Hello'
    })

};
