const { sql } = require("slonik");

const newOrder = async (db, { orderId }) => {
	try {
		if (orderId == true) {
			addToCart();
		}
		const addOrder = await db.query(sql`
			INSERT INTO orders (order_id)
			VALUES ('${order_id})
		`);
		console.log("OrderId: ", orderId);
		console.log("newOrder: ", newOrder);
		console.log("newOrder(): ", newOrder());

		return addOrder.rows;
	} catch (error) {
		console.info("Error at newOrder query: ", error.message);
		return false;
	}
};

const addToCart = async (
	db,
	{ productName, productId, orderTotal, orderId }
) => {
	try {
		if (!orderId) {
			newOrder();
		}
		const { rows: order } = await db.query(sql`
			INSERT INTO products_orders (product_name, product_id, order_total)
			VALUES ('${productName}', '${productId}', '${orderTotal}')
			WHERE order_id = '${orderId}'
		`);
		console.log("AddToCart: ", addToCart);
		console.log("AddToCart(): ", addToCart());
		return order.rows;
	} catch (error) {
		console.info("Error addToCart: ", error.message);
		return false;
	}
};

module.exports = {
	newOrder,
	addToCart,
};
