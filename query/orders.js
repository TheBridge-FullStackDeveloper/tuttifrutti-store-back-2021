const { sql } = require('slonik')

const getOrders = async (db, { username }) => {
  try {
    const { rows } =  await db.query(sql`
      SELECT * FROM orders
    `)
    return rows
  } catch (error) {
    console.info('Error at "getOrders" query :', e.message)
    return false
  }
}


module.exports = {
  getOrders,
}