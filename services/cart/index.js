const router = require("express").Router();

module.exports = (db) => {
  router.post("/cart", require("./add-to-cart")(db));
    return router;
};

