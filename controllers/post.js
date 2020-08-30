const boom = require('boom')
const Post = require('../models/Post')

exports.add = async (req, res, next) => {
	try {
		const post = new Post(req.body)
		post.setCourse(req.params.course)
		await post.save()
		res.send(post)
	} catch (err) {
		next(boom.badRequest('Проверьте введенные данные'))
	}
}

exports.set = async (req, res, next) => {
	try {
		console.info({ id: req.params.id, body: req.body })
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true })
		res.send(post)
	} catch (err) {
		next(boom.badRequest('Проверьте введенные данные'))
	}
}

exports.delete = async (req, res, next) => {
	try {
		await Post.findByIdAndRemove(req.params.id)
		res.send({ ok: true })
	} catch (err) {
		next(boom.notFound('Ничего не найдено'))
	}
}
