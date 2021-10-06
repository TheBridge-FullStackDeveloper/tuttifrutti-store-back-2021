const router = require("express").Router();

module.exports = (db) => {
<<<<<<< HEAD
    router.post('/', require('./get-by-search')(db))
    router.get("/keyword", require("./get-by-keyword")(db));
=======
  router.get("/keyword", require("./get-by-keyword")(db));

  router.get("/featured", require("./get-featured")(db));

  router.get("/", require("./getProducts")(db));
>>>>>>> 71753ed67b1b34dd17991d77353a082038c290dc

    return router;
};

