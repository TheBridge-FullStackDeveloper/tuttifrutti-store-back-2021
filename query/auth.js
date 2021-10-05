const { sql } = require('slonik')

const userExist = async (db, { email, username }) => {
  return await db.query(sql`
    SELECT * FROM users
    WHERE email = ${email} OR username = ${username}
  `)
}

const createUser = async (db, { email, username, hash }) => {
  try {
    const {rowCount} = await userExist(db, { email, username })
    if(rowCount) throw new Error('Username or email already on use')
    return await db.query(sql`
      INSERT INTO users ( email, username, hash )
      VALUES ( ${email}, ${username}, ${hash} )
    `)    
  } catch (e) {
    console.info('> Error at "createUser" query:', e.message)
    return false
  }
}



module.exports = {
  createUser
}