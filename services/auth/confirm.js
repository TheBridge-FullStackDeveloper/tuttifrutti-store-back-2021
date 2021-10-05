
module.exports = (db) => async (req, res, next) => {

  const { token } = req.params
  console.info(token )

  res.status(200)
    .json({
      success: true,
      message: '> Account activated'
    })

}