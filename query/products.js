const { sql } = require("slonik");

const countAll = async (db) => {
	return await db.query(sql`
		SELECT *
		FROM products
	`);
};

const getAll = async (db, { page, perPage }) => {
	const test = page * perPage - perPage;
	try {
		const { rows: query } = await db.query(sql`
			SELECT *
			FROM products
			LIMIT ${perPage}
			OFFSET ${test}
		`);
		const { rowCount: items } = await countAll(db);
		return { query, items };
	} catch (error) {
		console.info("Error getAll products: ", error.message);
		return false;
	}
};

module.exports = {
	getAll,
};
