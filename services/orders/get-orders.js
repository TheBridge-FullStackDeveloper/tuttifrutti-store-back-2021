const { getOrders } = require('../../query/orders')

module.exports = (db) => async (req, res, next) => {

  // token must provide this info:
  const username = 'jnova' 

  const [result] = await getOrders(db, { username })

  console.info(result)


  res.status(200)
    .json({
      success: true,
      data: '> Hola'
    })
};
