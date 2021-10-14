const { authorization } = require("../../middlewares/authorizer");

const router = require("express").Router();

module.exports = (db) => {
	router.get("/", authorization, require("./getUser")(db));
	router.put("/update", authorization, require("./updateUser")(db));

	return router;
};
