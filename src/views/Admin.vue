<template>
	<div class="container">
		<div class="card">
			<div class="table__wrap">
				<table class="table" cellpadding="0" cellspacing="0">
					<tbody>
						<tr>
							<th>Логин</th>
							<th>Имя</th>
							<th>Роль</th>
							<th width="46"></th>
						</tr>
						<tr v-for="user in users" :key="user._id">
							<td>{{ user.login }}</td>
							<td>{{ user.name }}</td>
							<td>{{ user.role == 'student' ? 'Студент' : 'Преподаватель' }}</td>
							<td>
								<a href="#" class="table__button" @click.prevent="remove(user._id)"
									><i class="far fa-trash-alt"></i
								></a>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		<div class="card">
			<form @submit.prevent="addUser" class="user-add">
				<div class="user-add__row">
					<div class="input"><input type="text" class="input__input" placeholder="Имя" v-model="name"></div>
					<div class="input"><input type="text" class="input__input" placeholder="Логин" v-model="login"></div>
					<div class="input"><input type="text" class="input__input" placeholder="Пароль" v-model="password"></div>
					<div class="input">
						<select class="input__input" v-model="role">
							<option value="student">Студент</option>
							<option value="teacher">Преподаватель</option>
						</select>
					</div>
				</div>
				<button class="button button--center">Добавить</button>
			</form>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	name: 'admin',
	data() {
		return {
			login: '',
			name: '',
			password: '',
			role: 'student'
		}
	},
	computed: mapState([
		'error',
		'users'
	]),
	methods: {
		addUser() {
			this.$store.dispatch('addUser', {
				login: this.login,
				name: this.name,
				password: this.password,
				role: this.role
			})

			this.login = ''
			this.name = ''
			this.password = ''
			this.role = 'student'
		},
		remove(id) {
			this.$store.dispatch('removeUser', { id })
		}
	},
	created() {
		this.$store.dispatch('getUsers')
	}
}
</script>

<style>
.user-add__row {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 0 -8px;
}

.user-add__row .input {
	margin: 8px;
}
</style>
