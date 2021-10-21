const { authorization } = require('../../middlewares/authorizer');

const router = require('express').Router();

module.exports = (db) => {
  router.get('/', authorization(db), require('./getUser')(db));
  router.put('/update', authorization(db), require('./updateUser')(db));

  return router;
};
