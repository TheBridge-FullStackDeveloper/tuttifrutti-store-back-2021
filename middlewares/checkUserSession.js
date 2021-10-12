const {authorization} = require ('./authorizer')


const checkUserSession = (req, res, next) => {
  const { token } = req.headers;

  const [bearer] = authorization.split(' ');

  if (bearer !== 'Bearer' || !token) {
    return next({
      statusCode: 401,
      error: new Error('Token not found'),
    });
  }

  res.locals.token = token;
  next();
};
module.exports={checkUserSession,}

