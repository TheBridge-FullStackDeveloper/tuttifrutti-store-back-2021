const { getOrderByDate } = require('../../query/orders')

module.exports = (db) => async (req, res) => {
  
    const filterDate = req.query.date
    
    const { username } = res.locals.user
    const result = await getOrderByDate(db, { username , filterDate })
    
  
    res.status(200).json({
      success: true,
      data: {
        coincidences: result.rowCount,
        products: result.rows,
      },
    });
  };
  
