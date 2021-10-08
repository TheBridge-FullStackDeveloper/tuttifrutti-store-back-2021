const router = require("express").Router();

module.exports = (db) => {
    router.put(
      "/update",
      require("./update-card")(db)
    );
  
    return router;
  };
  