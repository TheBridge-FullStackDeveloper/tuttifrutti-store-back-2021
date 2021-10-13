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


module.exports = {
    upDateUser,
}