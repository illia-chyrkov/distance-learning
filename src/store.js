import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie'
import { _ } from 'core-js';

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		error: '',
		auth: {},
		courses: [],
		users: []
	},
	mutations: {
		setError(state, error = '') {
			state.error = error
		},
		signIn(state, auth) {
			state.auth = auth
			Cookies.set('auth', JSON.stringify(auth))
		},
		signOut(state) {
			state.auth = {}
			Cookies.remove('auth')
		},
		setUsers(state, users) {
			state.users = users
		},
		setCourses(state, courses) {
			state.courses = courses
		},
		setCourse(state, course) {
			let i = state.courses.findIndex(i => i._id == course._id)
			if (i > -1) state.courses[i] = course
			else state.courses.push(course)
		}
	},
	actions: {
		signIn(store, payload = {}) {
			store.commit('setError')
			return fetch('/api/sign-in', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(payload)
			})
				.then(i => i.json())
				.then(res => {
					if (res.error) throw Error(res.message)
					store.commit('signIn', res)
					return res
				})
				.catch(err => {
					store.commit('setError', err.message)
				})
		},
		signOut(store) {
			store.commit('setError')
			store.commit('signOut')
		},
		getUsers(store) {
			store.commit('setError')
			return fetch('/api/users', {
				headers: {
					Authorization: store.state.auth.token,
				}
			})
				.then(i => i.json())
				.then(res => {
					if (res.error) throw Error(res.message)
					store.commit('setUsers', res)
					return res
				})
				.catch(err => {
					store.commit('setError', err.message)
				})
		},
		addUser(store, payload = {}) {
			store.commit('setError')
			return fetch('/api/users', {
				method: 'PUT',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: store.state.auth.token
				},
				body: JSON.stringify(payload)
			})
				.then(i => i.json())
				.then(res => {
					if (res.error) throw Error(res.message)
					return store.dispatch('getUsers')
				})
				.catch(err => {
					store.commit('setError', err.message)
				})
		},
		removeUser(store, payload = {}) {
			store.commit('setError')
			return fetch('/api/users/' + payload.id, {
				method: 'DELETE',
				headers: {
					Authorization: store.state.auth.token
				}
			})
				.then(i => i.json())
				.then(res => {
					if (res.error) throw Error(res.message)
					return store.dispatch('getUsers')
				})
				.catch(err => {
					store.commit('setError', err.message)
				})
		},
		getCourses(store) {
			store.commit('setError')
			return fetch('/api/courses', {
				headers: {
					Authorization: store.state.auth.token,
				}
			})
				.then(i => i.json())
				.then(res => {
					if (res.error) throw Error(res.message)
					store.commit('setCourses', res)
					return res
				})
				.catch(err => {
					store.commit('setError', err.message)
				})
		},
		getCourse(store, payload = {}) {
			store.commit('setError')
			return fetch('/api/courses/' + payload.id, {
				headers: {
					Authorization: store.state.auth.token,
				}
			})
				.then(i => i.json())
				.then(res => {
					if (res.error) throw Error(res.message)
					store.commit('setCourse', res)
					return res
				})
				.catch(err => {
					store.commit('setError', err.message)
				})
		},
		addCourse(store, payload = {}) {
			store.commit('setError')
			return fetch('/api/courses', {
				method: 'PUT',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: store.state.auth.token
				},
				body: JSON.stringify(payload)
			})
				.then(i => i.json())
				.then(res => {
					if (res.error) throw Error(res.message)
					return store.dispatch('getCourses').then(() => {
						return res
					})
				})
				.catch(err => {
					store.commit('setError', err.message)
				})
		},
		removeCourse(store, payload = {}) {
			store.commit('setError')
			return fetch('/api/courses/' + payload.id, {
				method: 'DELETE',
				headers: {
					Authorization: store.state.auth.token
				}
			})
				.then(i => i.json())
				.then(res => {
					if (res.error) throw Error(res.message)
					return store.dispatch('getCourses')
				})
				.catch(err => {
					store.commit('setError', err.message)
				})
		},
		addPost(store, payload = {}) {
			store.commit('setError')
			return fetch('/api/courses/' + payload.id, {
				method: 'PUT',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: store.state.auth.token
				},
				body: JSON.stringify(payload.data)
			})
				.then(i => i.json())
				.then(res => {
					if (res.error) throw Error(res.message)
					return store.dispatch('getCourse', payload)
				})
				.catch(err => {
					store.commit('setError', err.message)
				})
		},
		setPost(store, payload = {}) {
			store.commit('setError')
			return fetch('/api/courses/' + payload.course + '/' + payload.post, {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: store.state.auth.token
				},
				body: JSON.stringify(payload.data)
			})
				.then(i => i.json())
				.then(res => {
					if (res.error) throw Error(res.message)
					return store.dispatch('getCourse', { id: payload.course })
				})
				.catch(err => {
					store.commit('setError', err.message)
				})
		}
	}
})
