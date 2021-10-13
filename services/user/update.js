const {upDateUser} = require('../../query/user')



module.exports = db => async (req, res, next) => {
    
  const paramsContent = {...(req.body)}
  

  //res.locals.user = { username: "jnova1"} 
  const { username } = res.locals.user

  const result = await upDateUser(db, paramsContent, username)

    if(result === false){
      return next({
        status: 500,
        message: new Error('Something went wrong'),
      })
    }
    res.locals.user = { username: paramsContent.username, email: paramsContent.email }
    
    res.status(200).json({
      status: true,
      /*data: {
        coincidences: result.rowCount,
        featured: result.rows,
      }*/
    })
    
  }