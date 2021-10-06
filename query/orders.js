const { sql } = require('slonik')

const getOrders = async (db, { username }) => {
  try {
    const result =  await db.query(sql`
      SELECT * FROM orders
      -- WHERE user_id = (select id from users where username = ${username})
    `)
    if (!result.rowCount) throw new Error('This user has no orders')
    return result
  } catch (e) {
    console.info('Error at "getOrders" query :', e.message)
    return false
  }
}


module.exports = {
  getOrders,
}