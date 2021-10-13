const { newOrder, addToOrder } = require("../../query/products");

module.exports = (db) => async (req, res, next) => {
	const {productId} = req.body;
	let {orderId} = req.body;
	if(!orderId){
		orderId = await newOrder(db)
	}
	const result= await addToOrder(db, { productId, orderId });

	if(!result) {
		return next({
			statuscode: 400,
			error: new Error("Something went wrong at AddToOrder")
		})
	}

	res.status(200).json({
		productId: productId,
		orderId: orderId,
	});
};
