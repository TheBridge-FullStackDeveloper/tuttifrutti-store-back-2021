const Router = require("express").Router();

module.exports = (db) => {
	Router.get("/", require("./getProducts")(db));
	return Router;
};
