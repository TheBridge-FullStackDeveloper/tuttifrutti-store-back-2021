const { sql } = require("slonik");

const getUserData = async (db, {username}) => {
	try {
		return await db.query(sql`
			SELECT name, surname, username, email, address, postal_code, profile_pic, access_token
			FROM users
			WHERE username = ${username}
		`);
	} catch (error) {
		console.info('Error at getUserData:', error.message)
		return false
	}
}

module.exports = {
	getUserData,
}