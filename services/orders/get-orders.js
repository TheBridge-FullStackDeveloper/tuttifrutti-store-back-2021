const { getOrders } = require('../../query/orders')

module.exports = (db) => async (req, res, next) => {
  const page = Number(req.query.page) || 1;
  const perPage = Number(req.query.per_page) || 2;
  
  // token must provide this info:
  const username = 'jnova' 

  const result = await getOrders(db, { username })
  if(!result){
    return next({
      statusCode: 400,
      error: new Error('This user has no orders')
    })
  }

  const totalPages = ~~(result.rowCount / perPage)
  const prevPage = page - 1 ? `/orders?page=${ page - 1}` : null
  const nextPage = totalPages > page ? `/orders?page=${ page + 1}` : null
  
  // failing misserably
  const offset = page * perPage - perPage
  const query = Object.entries(result.rows).slice(offset, page + 1)

  console.info(query)

  res.status(200)
    .json({
      success: true,
      data: {
        prevPage: prevPage,
        currPage: page,
        nextPage: nextPage,
        totalPages: totalPages,
        totalOrders: result.rowCount,
        ordersPerPage: perPage,
        orders: query,
      }
    })
};
