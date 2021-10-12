const { getOrdersInCart } = require('../../query/products');
const {checkUserSession} = require('../../middlewares/checkUserSession')

module.exports = (db) => async (req, res, next) => {
  const orderNo = req.query.orderId;
  const token = req.query.accessToken;
  const state = req.query.state;
  const session = checkUserSession;

  const { query } = await getOrdersInCart(db, { orderNo, token, state });

  if (!token || !session){
	return next({
	statusCode: 404,
	error: new Error('Unauthorized'),
		})
	}
	if (!orderNo){
		return next({
			statusCode: 404,
			error: new Error('Please check order number'),
		})
	}
	if (!state || state !== 'pending'){
		return next({
			statusCode: 404,
			error: new Error('Search yielded no results'),
		});
	}
    res.status(200).json({
      order: query,
    });
  };