const { sql } = require('slonik')
const { lowerCaseFn, upperCaseFn } = require('../utils')

const getBySearch = async (db, { data }) => {
    try {
        const searchlower = `%${lowerCaseFn(data).split(' ')[0]}%`
        const searchupper = `%${upperCaseFn(data)}%`

        const result = await db.query(sql`
        SELECT *
        FROM products
        WHERE 
            category::text LIKE ${searchlower}
        OR
            name LIKE ${searchupper}
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

module.exports = {
    getBySearch
}