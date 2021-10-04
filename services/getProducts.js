const {getAll} = require('../query/index')
module.exports = db =>  async (req, res, next) => {
	const result = await getAll(db)
	res.json({
		result: result,
	})
}