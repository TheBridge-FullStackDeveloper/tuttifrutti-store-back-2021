const { sql } = require("slonik");



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

module.exports = {
	getByKeyword,
	getAll,
}
