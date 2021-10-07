const router = require("express").Router();
const { authorization } = require("../../middlewares/authorizer");

module.exports = (db) => {
  router.post("/new", authorization, require("./create-card")(db));

  return router;
};
