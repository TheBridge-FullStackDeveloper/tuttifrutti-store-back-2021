const { getOrders } = require('../../query/orders')

module.exports = (db) => async (req, res, next) => {
  
  // token must provide this info:
  const {username, state } = req.body
  const page = Number(req.body.page) || 1;
  const perPage = Number(req.body.per_page) || 2;

  const { rowCount, rows } = await getOrders(db, { username, state })
  if(!rowCount){
    return next({
      statusCode: 400,
      error: new Error('This user has no orders')
    })
  }

  const totalPages = Math.ceil(rowCount / perPage)
  const prevPage = page - 1 ? `/orders?page=${ page - 1}` : null
  const nextPage = totalPages > page ? `/orders?page=${ page + 1}` : null
  const offset = ( page - 1 ) * perPage
  const query = rows.slice( offset, offset + perPage )

  res.status(200)
    .json({
      success: true,
      data: {
        prevPage: prevPage,
        currPage: page,
        nextPage: nextPage,
        totalPages: totalPages,
        totalOrders: rowCount,
        ordersPerPage: perPage,
        orders: query,
      }
    })
};
