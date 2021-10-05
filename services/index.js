const Router = require('express').Router()



module.exports = db => {
	Router.get('/products', require('./getFeatured')(db))
	return Router
}