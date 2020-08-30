const mongoose = require('mongoose')

const Post = new mongoose.Schema({
    course: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Course'},
    title: { type: String, unique: true, required: true },
    type: { type: String, required: true },
    data: { type: mongoose.Schema.Types.Mixed, required: true },
    responses: [Object]
})

Post.methods.setCourse = function(course) {
	this.course = mongoose.Types.ObjectId(course)
}

module.exports = mongoose.model('Post', Post)
