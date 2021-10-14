const { authorization } = require("../../middlewares/authorizer");

const router = require("express").Router();

module.exports = (db) => {
  router.get('/orders', require('./getOrder')(db));
  router.post("/:order", require("./addToOrder")(db));
  router.get("/orders", authorization, require("./getOrdersInCart")(db));

  return router;
};

