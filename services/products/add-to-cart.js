const { addToCart } = require("../../query/products");

module.exports = (db) => async (req, res, next) => {
	const result= await addToCart(db, { productName, productId, orderId, orderTotal });

	if(!result) {
		return next({
			statuscode: 400,
			error: new Error("Something went wrong")
		})
	}

	res.status(200).json({
		product_name: productName,
		product_id: productId,
		order_id: orderId,
		order_total: orderTotal
	});
};
