const { deserialize } = require('../helpers');
const { tokenExists } = require('../query/auth');

const authorization = (db) => async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return next({
      statusCode: 401,
      error: new Error('unauthorized'),
    });
  }

  const [bearer, token] = authorization.split(' ');

  if (bearer !== 'Bearer' || !token) {
    return next({
      statusCode: 401,
      error: new Error('unauthorized'),
    });
  }

  const user = deserialize(token);

  if (!user) {
    return next({
      statusCode: 401,
      error: new Error('unauthorized'),
    });
  }
  console.log('hola');
  const tokenExist = await tokenExists(db, token);

  if (!tokenExist) {
    return next({
      statusCode: 401,
      error: new Error('unauthorized'),
    });
  }

  res.locals.user = user;
  next();
};

module.exports = { authorization };
