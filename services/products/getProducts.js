const { getAll } = require("../../query/products");

module.exports = (db) => async (req, res, next) => {
	const page = Number(req.query.page) || 1;
	const perPage = Number(req.query.perPage) || 3;

	// const { page, perPage } = req.query
	const { items, query } = await getAll(db, { page, perPage });
	const totalPages = ~~(items / perPage);

	res.status(200).json({
		resultsPerPage: perPage,

		prevPage: page - 1 ? `/products?page=${page - 1}` : null,
		currentPage: page,
		nextPage: totalPages > page ? `/products?page=${page + 1}` : null,

		totalProducts: items,
		totalPages: totalPages,

		products: query,
	});
};
