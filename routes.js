const express = require('express')
const User = require('./controllers/user')
const Course = require('./controllers/course')
const Post = require('./controllers/post')
const permissions = require('./middleware/permissions')

const app = express.Router()

// Авторизация
app.post('/sign-in', User.signIn)

// Список пользователей
app.get('/users', permissions(['admin', 'teacher']), User.getAll)

// Добавить пользователя
app.put('/users', permissions(['admin']), User.add)

// Удалить пользователя
app.delete('/users/:id', permissions(['admin']), User.remove)

// Список курсов
app.get('/courses', permissions(), Course.getAll)

// Содержимое курса
app.get('/courses/:id', permissions(), Course.get)

// Добавить курс
app.put('/courses', permissions(['admin', 'teacher']), Course.add)

// Удалить курс
app.delete('/courses', permissions(['admin', 'teacher']), Course.remove)

// Добавить запись
app.put('/courses/:course', permissions(), Post.add)

// Обновить запись
app.post('/courses/:course/:id', permissions(), Post.set)

// Удалить запись
app.delete('/courses/:course/:id', permissions(), Post.delete)

module.exports = app
