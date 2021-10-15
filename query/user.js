const { sql } = require('slonik');

const getUserData = async (db, { email, username }) => {
  let whereClause = '';
  if (username) {
    whereClause = sql`WHERE username = ${username}`;
  } else {
    whereClause = sql`WHERE email = ${email}`;
  }
  console.log('whereClause', whereClause);
  try {
    const user = await db.maybeOne(sql`
			SELECT name, surname, username, email, address, postal_code, profile_pic, access_token
			FROM users ${whereClause}
    `);
    console.log('user query', user);
    return user;
  } catch (error) {
    console.info('Error at getUserData:', error.message);
    return false;
  }
};

const updateUser = async (db, user) => {
  try {
    await db.query(
      sql`UPDATE users SET hash=${user.newHash}, activation_token=NULL WHERE email LIKE ${user.email}`
    );
    return true;
  } catch (error) {
    console.info('error at updateHash query:', error.message);
    return false;
  }
};

module.exports = {
  getUserData,
  updateUser,
};
