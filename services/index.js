const router = require("express").Router();

module.exports = (db) => {
  router.use("/auth", require("./auth")(db));
  router.use("/products", require("./products")(db));
  router.use("/cards", require("./cards")(db));
  router.use("/users", require("./users")(db));
  router.use("/orders", require("./products")(db));

  return router;
};
