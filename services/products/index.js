const router = require("express").Router();

module.exports = (db) => {
    router.post('/', require('./get-by-search')(db))
    router.get("/keyword", require("./get-by-keyword")(db));

    return router;
};

