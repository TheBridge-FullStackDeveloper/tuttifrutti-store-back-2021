const { sql} = require('slonik')

const getAll = async (db) => {
	try {
		const {rows: products} = await db.query(sql`
			SELECT * FROM products
		`)
		return products
	}
	catch(error) {
		console.info('Error getAll products: ', error.message)
		return false
	}
}

module.exports= {
	getAll
}