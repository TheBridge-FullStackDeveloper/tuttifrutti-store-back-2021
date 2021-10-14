const router = require('express').Router()

module.exports = db => {
    const update = require("./update")

    router.put('/update', update(db))


    return router
}