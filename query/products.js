const { sql } = require("slonik");

const getByKeyword = async (db, { keyword }) => {
  try {
    const { rows: products } = await db.query(sql`
            SELECT * FROM products WHERE ${keyword} = ANY (keywords)
        `);
    return products;
  } catch (error) {
    console.info("> error at 'getByKeyword' query: ", error.message);
    return false;
  }
};

module.exports = { getByKeyword };
