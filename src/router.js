import Vue from 'vue'
import Router from 'vue-router'

import Auth from './views/Auth.vue'
import Admin from './views/Admin.vue'
import Courses from './views/Courses.vue'
import Course from './views/Course.vue'
import AddCourse from './views/AddCourse.vue'
import Post from './views/Post.vue'
import AddPost from './views/AddPost.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'courses',
			component: Courses
		},
		{
			path: '/auth',
			name: 'auth',
			component: Auth
		},
		{
			path: '/admin',
			name: 'admin',
			component: Admin
		},
		{
			path: '/add',
			name: 'add-course',
			component: AddCourse
		},
		{
			path: '/:course',
			name: 'course',
			component: Course
		},
		{
			path: '/:course/add',
			name: 'add-post',
			component: AddPost
		},
		{
			path: '/:course/:post',
			name: 'post',
			component: Post
		}
	]
})
