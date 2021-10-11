const { getOrdersInCart } = require('../../query/products');

module.exports = (db) => async (req, res, next) => {
	const orderNo = req.query.orderId;
	const token = req.query.accessToken;
	const state = req.query.state;

	const { query } = await getOrdersInCart(db, { orderNo, token, state });

	if (!orderNo || !state) {
		return next({
			statusCode: 404,
			error: new Error('Cannot find specified order'),
		});
	}
	if (!token) {
		return next({
			statusCode: 404,
			error: new Error('Unauthorized'),
		});
	}
	res.status(200).json({
		order: query,
	});
};
