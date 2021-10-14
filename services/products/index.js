const router = require("express").Router();

module.exports = (db) => {
  router.get("/keyword", require("./get-by-keyword")(db));
  router.post("/", require("./get-by-search")(db));
  router.get("/featured", require("./get-featured")(db));
  router.get("/", require("./getProducts")(db));
  router.post("/add", require("./addToOrder")(db));

  return router;
};

