const router = require('express').Router()

module.exports = db => {
    router.get('/', require('./get-by-search')(db))
    return router
}