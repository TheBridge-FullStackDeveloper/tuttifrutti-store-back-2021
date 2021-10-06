const { getUserData } = require("../../query/user");

module.exports = (db) => async (req, res, next) => {
	//This variable is temporary. It should be replaced by token info.
	const { username } = req.query;
	const [result] = await getUserData(db, {username})

	res.status(200).json({
		success: true,
		data: {
			name: result.name,
			surname: result.surname,
			username: result.username,
			email: result.email,
			address: result.address,
			postal_code: result.postal_code,
			profile_pic: result.profile_pic,
			access_token: result.access_token
		}
	})

}