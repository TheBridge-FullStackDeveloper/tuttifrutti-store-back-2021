

const { sql } = require('slonik')
const { upperCaseFn } = require('../utils')

const getFeatured = async (db) =>{
    try{
        const result = await db.query(sql`
            SELECT *
            FROM products
            WHERE featured = true;
        `)
        return result
    } catch(error){
        return false
    }
}


const getByKeyword = async (db, { keyword }) => {
	try {
		const { rows: products } = await db.query(sql`
		SELECT * FROM products WHERE ${keyword} = ANY (keywords)
        `);
		return products;
	} catch (error) {
		console.info("> error at 'getByKeyword' query: ", error.message);
		return false;
	}
};

const countAll = async (db) => {
	return await db.query(sql`
		SELECT *
		FROM products
	`);
};

const getAll = async (db, { page, perPage }) => {
	const offset = page * perPage - perPage;
	try {
		const { rows: query } = await db.query(sql`
			SELECT *
			FROM products
			LIMIT ${perPage}
			OFFSET ${offset}
		`);
		const { rowCount: items } = await countAll(db);
		return { query, items };
	} catch (error) {
		console.info("Error getAll products: ", error.message);
		return false;
	}
};


const getBySearch = async (db, { search, category }) => {
	try {
		if (!search && !category) {
			throw new Error('No search')
		}
		let subquery

		if (search) {
		    const searchUpper = `%${upperCaseFn(search)}%`
		    subquery = sql`name LIKE ${searchUpper}`
		}
		if (category) subquery = sql`category::text LIKE ${category}`

		if (category && search) {
		    const searchUpper = `%${upperCaseFn(search)}%`
		    subquery = sql`category::text LIKE ${category} AND name LIKE ${searchUpper}`
		}

		const result = await db.query(sql`
		SELECT *
		FROM products
		WHERE ${subquery}
		`)

		if (!result) {
			throw new Error('Search not found')
		}
		console.log(result)
		return result.rows

	} catch (error) {
		console.info('> error at "getBySearch" query: ', error.message)
		return false
	}
}

const newOrder = async (db, { orderId }) => {
	try {
		if (orderId == true) {
			addToOrder({orderId});
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

const addToOrder = async (
	db,
	{ productName, productId, orderId }
) => {
	try {
		if (!orderId) {
			newOrder();
		}
		const { rows: order } = await db.query(sql`
			INSERT INTO products_orders (product_name, product_id)
			VALUES ('${productName}', '${productId}')
			WHERE order_id = '${orderId}'
		`);
		console.log("AddToCart: ", addToOrder);
		console.log("AddToCart(): ", addToOrder());
		return order.rows;
	} catch (error) {
		console.info("Error addToOrder: ", error.message);
		return false;
	}
};


module.exports = {
	getByKeyword,
	getBySearch,
	getAll,
	getFeatured,
	newOrder,
	addToOrder,
};

