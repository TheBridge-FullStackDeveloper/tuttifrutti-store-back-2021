const router = require('express').Router();

module.exports = (db) => {
  router.post('/register', require('./register')(db));
  router.get('/confirmation/:token', require('./confirm')(db));
  router.post('/login', require('./login')(db));
  router.post('/password_forgotten', require('./password_forgotten')(db));
  router.post('/password/request', require('./password_request')(db));

  return router;
};
