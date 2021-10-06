const { getUserData } = require("../../query/user");

module.exports = (db) => async (req, res, next) => {
	const { username } = req.query;
	const result = await getUserData(db, {username})
	console.info(result)

	res.status(200).json({
		success: true,
		data: 'hola'
	})

}