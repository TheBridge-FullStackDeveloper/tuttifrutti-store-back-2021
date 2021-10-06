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


module.exports = { 
  
    getByKeyword,
    getAll,   
};
