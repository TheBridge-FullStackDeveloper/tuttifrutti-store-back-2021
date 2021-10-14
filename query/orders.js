const { sql } = require('slonik')

const getOrders = async (db, { username, state }) => {
  try {
    return await db.query(sql`
      SELECT * 
        FROM orders
        WHERE 
          user_id = (select id from users where username = ${username}) 
          ${state ? sql`AND state::text = ${state}` : sql``}
    `)
  } catch (e) {
    console.info('Error at "getOrders" query: ', e.message)
    return false
  }
}

module.exports = {
  getOrders,
}