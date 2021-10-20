const router = require('express').Router();
const { authorization } = require('../../middlewares/authorizer');
const createCardValidation = require('../../middlewares/createCardValidator');

module.exports = (db) => {
  router.post(
    '/new',
    authorization(db),
    createCardValidation,
    require('./create-card')(db)
  );
  router.put(
    '/update',
    authorization(db),
    createCardValidation,
    require('./update-card')(db)
  );

  return router;
};
