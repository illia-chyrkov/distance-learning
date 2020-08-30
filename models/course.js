const mongoose = require('mongoose')

const Course = new mongoose.Schema({
    title: { type: String, unique: true, required: true },
    description: String,
    author: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
})

Course.methods.setAuthor = function(author) {
	this.author = mongoose.Types.ObjectId(author)
}

module.exports = mongoose.model('Course', Course)
