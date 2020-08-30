const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const boom = require('boom')
const routes = require('./routes')

const app = express()

app.use(express.static('dist'))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.set('trust proxy', 1)
app.use('/api', routes)
app.get('/*', (req, res, next) => {
	res.sendFile(__dirname + '/dist/index.html', err => {
		if (err) next(boom.notFound('Не найдено'))
	})
})
app.use((req, res, next) => {
	next(boom.notFound('Не найдено'))
})
app.use((err, req, res, next) => {
	if (err.isServer) console.error(err)
	return res.status(err.output.statusCode).json(err.output.payload)
})

mongoose.set('useFindAndModify', false)
mongoose.connect(
	process.env.MONGODB_URI
		? process.env.MONGODB_URI
		: 'mongodb://localhost:27017/distance-learning',
	{ useNewUrlParser: true }
)
mongoose.connection.on('error', console.error.bind(console, 'Database error: '))
mongoose.connection.once('open', () => {
	const server = app.listen(process.env.PORT || 3000, () =>
		console.info('Server listening on port ' + server.address().port)
	)
})

module.exports = app
