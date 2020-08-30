<template>
	<div class="auth">
		<div class="container">
			<form @submit.prevent="signIn" class="card">
				<h2 class="center">Авторизация</h2>
				<span class="error" v-if="error">{{ error }}</span>
				<div class="input">
					<input type="text" class="input__input" placeholder="Логин" v-model="login" required>
				</div>
				<div class="input">
					<input type="password" class="input__input" placeholder="Пароль" v-model="password" required>
				</div>
				<button class="button button--center">Войти</button>
			</form>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	name: 'auth',
	data() {
		return {
			login: '',
			password: ''
		}
	},
	computed: mapState([
		'error',
		'auth'
	]),
	methods: {
		signIn() {
			this.$store.dispatch('signIn', {
				login: this.login,
				password: this.password
			}).then((res) => {
				if (this.auth.role === 'admin') this.$router.push('/admin')
				else if (this.auth.role) this.$router.push('/')
			})
		}
	},
	created() {
		if (this.auth.role === 'admin') this.$router.push('/admin')
		else if (this.auth.role) this.$router.push('/')
	}
}
</script>

<style>
.auth {
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
}

.auth .card {
	max-width: 350px;
	margin: 50px auto;
}
</style>
