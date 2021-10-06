const router = require("express").Router();

module.exports = (db) => {
  router.post("/new_card", require("./create-card")(db));

  return router;
};
