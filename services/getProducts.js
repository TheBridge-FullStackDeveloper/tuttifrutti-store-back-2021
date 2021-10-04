module.exports = db =>  (req, res, next) => {
	res.json({
		info: 'Hola, mundo'
	})
}