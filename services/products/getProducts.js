const {getAll} = require('../../query/products')

module.exports = db =>  async (req, res, next) => {
	const items = await getAll(db)
	let page = 1
	page= page || 1
 	let per_page = 3
	per_page = per_page || 3
 	const offset = (page - 1) * per_page
	const paginatedItems = items.slice(offset).slice(0, per_page)
	const total_pages = Math.ceil(items.length / per_page)

	res.status(200).json({
		page: page,
		per_page: per_page,
		pre_page: page - 1 ? page - 1 : null,
		next_page: total_pages > page ? page + 1 : null,
		total: items.length,
		total_pages: total_pages,
		data: paginatedItems,
	});
	};
