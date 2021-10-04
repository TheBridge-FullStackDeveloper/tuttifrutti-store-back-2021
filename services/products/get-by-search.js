const { getBySearch } = require('../../query/products')

module.exports = db => async (req, res, next) => {
    const { search } = req.query

    const result = await getBySearch(db, { data: search })

    if (result === false) {
        return next({
            statusCode: 404,
            error: new Error('No results')
        })
    }

    res.status(200).json({
        success: 'true',
        data: result
    })
}