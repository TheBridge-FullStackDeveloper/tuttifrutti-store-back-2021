const {getFeatured} = require('../../query/products')

module.exports = db => async (req, res, next) =>{

    const result = await getFeatured(db)

    if(result === false){
      return next({
        status: 500,
        message: new Error('Something went wrong'),
      })
    }
  
    res.status(200).json({
      status: true,
      data: {
        coincidences: result.rowCount,
        featured: result.rows,
      }
    })
  
}