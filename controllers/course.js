const boom = require('boom')
const Course = require('../models/course')
const Post = require('../models/Post')

exports.add = async (req, res, next) => {
	try {
        const course = new Course(req.body)
        course.setAuthor(req.user._id)
		await course.save()
		res.send(course)
	} catch (err) {
		next(
			boom.badRequest(
				'Введенные данные неверны или такой курс уже существует'
			)
		)
	}
}

exports.getAll = async (req, res, next) => {
	try {
		const query =
			req.user.role !== 'admin'
				? { $or: [{ author: req.user._id }, { members: req.user._id }] }
				: {}
		const courses = await Course.find(query).populate('author', '-password')
		res.send(courses)
	} catch (err) {
		next(boom.notFound('Ничего не найдено'))
	}
}

exports.get = async (req, res, next) => {
	try {
		const [ course, posts ] = await Promise.all([
			Course.findById(req.params.id).populate('author'),
			Post.find({ course: req.params.id }).populate('author')
		])
		res.send({ ...course.toObject(), posts })
	} catch (err) {
		next(boom.notFound('Ничего не найдено'))
	}
}

exports.remove = async (req, res, next) => {
	try {
		await Course.findByIdAndRemove(req.params.id)
		res.send({ ok: true })
	} catch (err) {
		next(boom.notFound('Ничего не найдено'))
	}
}
