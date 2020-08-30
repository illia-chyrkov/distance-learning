const jwt = require('jsonwebtoken')
const boom = require('boom')
const User = require('../models/user')
const config = require('../config')

exports.signIn = async (req, res, next) => {
	if (req.body.login == 'admin' && !!req.body.password) {
		if (req.body.password === config.admin_pass) {
			const admin = {
				name: 'Администратор',
				login: 'admin',
				role: 'admin'
			}

			const token = jwt.sign(
				admin,
				config.secret
			)
			res.send({ ...admin, token })
		} else next(boom.notFound('Логин или пароль неверный'))
	} else
		try {
			let user = await User.findOne({ login: req.body.login })
			if (user && user.validatePassword(req.body.password)) {
				user = user.toObject()
				const token = jwt.sign(user, config.secret)
				res.send({ ...user, token })
			} else next(boom.notFound('Логин или пароль неверный'))
		} catch (err) {
			next(boom.badRequest('Проверьте введенные данные'))
		}
}

exports.add = async (req, res, next) => {
	try {
        const user = new User(req.body)
        user.setPassword(req.body.password)
		await user.save()
		res.send(user)
	} catch (err) {
		next(
			boom.badRequest(
				'Введенные данные неверны или такой пользователь уже существует'
			)
		)
	}
}

exports.getAll = async (req, res, next) => {
	try {
        const users = await User.find().select('-password')
		res.send(users)
	} catch (err) {
		next(boom.notFound('Ничего не найдено'))
	}
}

exports.remove = async (req, res, next) => {
    try {
        await User.findByIdAndRemove(req.params.id)
		res.send({ ok: true })
	} catch (err) {
		next(boom.notFound('Ничего не найдено'))
	}
}
