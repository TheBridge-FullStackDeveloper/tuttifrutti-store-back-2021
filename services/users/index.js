const router = require("express").Router();

module.exports = (db) => {
	router.get("/", require("./getUser")(db));

	return router;
};
