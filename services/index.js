const Router = require('express').Router()

module.exports = db => {
	Router.use('/products', require('./products/index')(db))
	return Router
}
