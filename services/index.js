const router = require("express").Router();

module.exports = (db) => {
  router.use("/auth", require("./auth")(db));
  router.use("/products", require("./products")(db));
<<<<<<< HEAD
  router.use("/users", require("./users")(db));
=======
  router.use("/orders", require("./products")(db));
>>>>>>> 89cabf81a1775f376c4e8d2adbffc4fce190981f

  return router;
};
