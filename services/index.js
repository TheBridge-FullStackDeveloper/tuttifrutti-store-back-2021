const router = require("express").Router();

module.exports = (db) => {
  router.use("/products", require("./products")(db));

  return router;
};
