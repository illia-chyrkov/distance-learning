const mongoose = require('mongoose')
const crypto = require('crypto')

const User = new mongoose.Schema({
	login: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    role: { type: String, required: true, default: 'student' }
})

User.methods.setPassword = function(password) {
	this.password = crypto
		.createHash('sha1')
		.update(password)
		.digest('hex')
}

User.methods.validatePassword = function(password) {
	password = crypto
		.createHash('sha1')
		.update(password)
		.digest('hex')

	return this.password === password
}

module.exports = mongoose.model('User', User)
