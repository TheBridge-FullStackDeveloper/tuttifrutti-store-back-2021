const {getFeatured} = require('../../query/index')

module.exports = db => async (req, res, next) =>{

    const result = await getFeatured(db)

    if(result === false){
      return next({
        status: 500,
        message: new Error('Something went wrong'),
      })
    }
  
    res.status(200).json({
      coincidences: result.rowCount,
      message: result.rows,
    })
  
}