const { getPendingOrdersByUser } = require('../../query/products');

module.exports = (db) => async (req, res, next) => {
  const { state } = req.query;

  if (!state || state !== 'pending') {
    return next({
      statusCode: 404,
      error: new Error('No pending orders'),
    });
  }

  const { username } = res.locals.user;

  const { query } = await getPendingOrdersByUser(db, { username });

  res.status(200).json({
    order: query,
  });
};
