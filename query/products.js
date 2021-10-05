const { sql } = require("slonik");
const { upperCaseFn } = require('../utils')

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

const getBySearch = async (db, { search, category }) => {
    try {
        let subquery

        if (!category) {
            const searchUpper = `%${upperCaseFn(search)}%`
            subquery = sql`name LIKE ${searchUpper}`
        }
        if (category) subquery = sql`category::text LIKE ${category}`

        if (category && search) {
            const searchUpper = `%${upperCaseFn(search)}%`
            subquery = sql`category::text LIKE ${category} AND name LIKE ${searchUpper}`
        }
        
        const result = await db.query(sql`
        SELECT *
        FROM products
        WHERE ${subquery}
        `)
        if (!result) {
            throw new Error('Search not found')
        }
        console.log(result)
        return result.rows

    } catch (error) {
        console.info('> error at "getBySearch" query: ', error.message)
        return false
    }
}

module.exports = { getByKeyword, getBySearch, };

