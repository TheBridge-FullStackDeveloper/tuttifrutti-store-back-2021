const router = require("express").Router();

module.exports = (db) => {
  router.use("/products", require("./products")(db));
  router.use("/user", require("./user")(db));

  return router;
};
