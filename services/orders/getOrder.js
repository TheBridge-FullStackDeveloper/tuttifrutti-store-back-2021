const { getOrder } = require('../../query/products');

module.exports = (db) => async (req, res) => {
  const orderNo = req.query.orderId

  const { query } = await getOrder(db, { orderNo });

  res.status(200).json({
    order: query,
  });
};
