const Router = require('express').Router()

module.exports = db => {
	Router.get('/products', require('./getProducts')(db))
	return Router
}
