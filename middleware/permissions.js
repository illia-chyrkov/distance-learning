const jwt = require('jsonwebtoken')
const boom = require('boom')
const config = require('../config')

module.exports = (roles = []) => (req, res, next) => {
	const token = req.headers.authorization
	jwt.verify(token, config.secret, function(err, user) {
		if (err || (roles.length > 0 && roles.indexOf(user.role) == -1))
			next(boom.unauthorized('Доступ запрещен'))
		else {
			req.user = user
			next()
		}
	})
}
