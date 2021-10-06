const router = require("express").Router();

module.exports = (db) => {
  router.use("/products", require("./products")(db));
  router.use("/cards", require("./cards")(db));

  return router;
};
