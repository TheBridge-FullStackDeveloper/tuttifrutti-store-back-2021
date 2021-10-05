const { sql } = require('slonik')


const getFeatured = async (db) =>{
    try{
        const result = await db.query(sql`
            SELECT *
            FROM products
            WHERE featured = true;
        `)
        return result
    } catch(error){
        return false 
    }
}

module.exports = {
    getFeatured,
}