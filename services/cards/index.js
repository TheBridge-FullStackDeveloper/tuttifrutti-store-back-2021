const router = require("express").Router();
const { authorization } = require("../../middlewares/authorizer");
const createCardValidation = require("../../middlewares/createCardValidator");

module.exports = (db) => {
  router.post(
    "/new",
    authorization,
    createCardValidation,
    require("./create-card")(db)
  );
  router.put(
    "/update",
    require("./update-card")(db)
  );

  return router;
};
