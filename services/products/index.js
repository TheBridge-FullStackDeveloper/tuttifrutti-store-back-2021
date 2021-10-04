const router = require('express').Router()

module.exports = db => {
    router.post('/', require('./get-by-search')(db))
    return router
}