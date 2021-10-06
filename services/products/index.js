const router = require("express").Router();

module.exports = (db) => {
  router.get("/keyword", require("./get-by-keyword")(db));
  router.get("/", require("./getProducts")(db));

  return router;
};
