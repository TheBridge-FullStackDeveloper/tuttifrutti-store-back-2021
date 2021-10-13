const { sql } = require('slonik')

const upDateUser = async (db, paramsContent, userNameRes) => {
    const { name, email, address, surname, postal_code, username } = paramsContent
    try {
        return await db.query(sql`
		UPDATE users 
            SET name = ${name}, surname = ${surname}, email = ${email} , address = ${address},  postal_code = ${postal_code}, username = ${username}
            WHERE username = ${userNameRes}`);
    } catch (error) {
        console.info("> error at 'upDateUser' query: ", error.message);
		return false;
    }
    
}

const getUserData = async (db, {username}) => {
	try {
		const { rows: user } = await db.maybeOne(sql`
			SELECT name, surname, username, email, address, postal_code, profile_pic, access_token
			FROM users
			WHERE username = ${username}
		`);
		return user
	} catch (error) {
		console.info('Error at getUserData:', error.message)
		return false
	}
}


module.exports = {
  upDateUser,
	getUserData
}