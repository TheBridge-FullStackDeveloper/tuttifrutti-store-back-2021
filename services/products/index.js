const router = require("express").Router();

module.exports = (db) => {
  router.get("/keyword", require("./get_by_keyword")(db));

  return router;
};
