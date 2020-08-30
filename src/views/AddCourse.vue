<template>
	<div class="container">
		<div class="card">
			<form @submit.prevent="addCourse" class="add-course">
				<span class="error">{{ error }}</span>
				<div class="input"><input type="text" class="input__input" placeholder="Название курса" v-model="title" required></div>
				<div class="textarea"><textarea name="" id="" cols="30" rows="10" class="textarea__input" v-model="description" placeholder="Описание курса (не обязательно)"></textarea></div>
				<div class="input"><input type="text" class="input__input" placeholder="Студенты (логины, через запятую)" v-model="members" required></div>
				<button class="button button--center">Добавить</button>
			</form>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	name: 'add-course',
	data() {
		return {
			title: '',
			description: '',
			members: ''
		}
	},
	computed: mapState([
		'error',
		'users'
	]),
	methods: {
		addCourse() {
			let members = this.members.replace(/\s/g,'').split(',')
			members = members.map(member => {
				return this.users.find(user => user.login === member)._id || undefined
			})

			this.$store.dispatch('addCourse', {
				title: this.title,
				description: this.description,
				members
			}).then(res => {
				if (res && res._id) this.$router.push('/' + res._id)
			})
		}
	},
	created() {
		this.$store.dispatch('getUsers')
	}
}
</script>

<style>
.add-course .input,
.add-course .textarea {
	max-width: 100%;
}

.add-course .textarea__input {
	height: 160px;
}
</style>

