<template>
	<div class="header" v-if="auth.role">
		<div class="container">
			<div class="header__row">
				<nav class="header__nav" v-if="auth.role === 'teacher'">
					<router-link to="/" class="header__nav-link"
						>Главная</router-link
					>
					<router-link to="/add" class="header__nav-link"
						>Добавить курс</router-link
					>
				</nav>
				<div class="header__buttons">
					<a href="#" class="button button--min" @click.prevent="signOut">Выйти</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'app-header',
	computed: mapState([
		'auth'
	]),
    methods: {
        signOut() {
            this.$store.commit('signOut')
            this.$router.push('/auth')
        }
    }
}
</script>

<style>
.header {
	position: relative;
	background: #ffffff;
	-webkit-box-shadow: 0 10px 40px rgba(61, 81, 112, 0.1);
	box-shadow: 0 10px 40px rgba(61, 81, 112, 0.1);
	margin-bottom: 64px;
}

.header__row {
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-justify-content: space-between;
	-webkit-box-pack: justify;
	-ms-flex-pack: justify;
	justify-content: space-between;
	-webkit-align-items: center;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
}

.header__nav {
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-align-items: center;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	padding: 0 22px;
	margin-right: auto;
}

.header__nav-link {
	font-size: 14px;
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	-webkit-align-items: center;
	align-items: center;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	-webkit-justify-content: center;
	justify-content: center;
	height: 64px;
	padding: 0 16px;
	color: #c2c2ca;
	text-decoration: none;
	border-bottom: 2px solid #ffffff;
	-webkit-transition: 0.2s ease-in-out;
	transition: 0.2s ease-in-out;
}

.header__nav-link:hover {
	color: #3d5170;
	border-color: #4a90e2;
}

.header__nav-link.router-link-exact-active,
.header__nav-link.active {
	color: #4a90e2;
	background: #f6f6f8;
	border-color: #4a90e2;
}

.header__buttons {
    margin-left: auto;
}

.header__buttons .button {
	margin-left: 16px;
}
</style>
