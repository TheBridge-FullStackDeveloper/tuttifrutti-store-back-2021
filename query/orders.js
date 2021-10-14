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

const getOrderByDate = async (db, { username, date }) => {
  try {
    return await db.query(sql`
    SELECT u.id, u.username, p.name, o.order_date, o.state
    FROM users u 
      INNER JOIN orders o
        ON u.id = o.user_id
      INNER JOIN products_orders po
        ON o.id = po.order_id
      INNER JOIN products p
        ON po.product_id = p.id
    WHERE u.username = ${username} AND o.order_date <= ${date}
    ORDER BY o.order_date
    `)
  } catch (e) {
    console.info('Error at "getOrderByDate" query: ', e.message)
    return false
  }
}


module.exports = {
  getOrders,
  getOrderByDate
}