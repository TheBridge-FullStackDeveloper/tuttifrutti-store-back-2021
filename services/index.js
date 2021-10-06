const router = require("express").Router();

module.exports = (db) => {
  router.use("/products", require("./products")(db));
  router.use("/users", require("./users")(db));

  return router;
};
