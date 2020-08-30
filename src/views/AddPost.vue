<template>
	<div class="container">
		<form @submit.prevent="addPost" class="add-post card">
			<div class="row">
				<div class="col">
					<div class="input"><input type="text" class="input__input" placeholder="Введите заголовок" v-model="title"></div>
				</div>
				<div class="col">
					<div class="input">
						<select class="input__input" v-model="type">
							<option value="" selected disabled>Выберите тип записи</option>
							<option value="page">Страница</option>
							<option value="youtube-video">Видео</option>
							<option value="test">Тест</option>
						</select>
					</div>
				</div>
			</div>
			<span class="error">{{ error }}</span>
			<component v-bind:is="type" v-on:data="data = $event"></component>
			<button class="button button--center" v-if="type">Добавить</button>
		</form>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import Page from '@/components/posts/Page'
import YoutubeVideo from '@/components/posts/YoutubeVideo'
import Test from '@/components/posts/Test'

export default {
	name: 'add-post',
	data() {
		return {
			title: '',
			type: '',
			data: ''
		}
	},
	computed: mapState([
		'error'
	]),
	methods: {
		addPost() {
			this.$store.dispatch('addPost', {
				id: this.$route.params.course,
				data: {
					title: this.title,
					type: this.type,
					data: this.data
				}
			}).then(() => {
				if (!this.error) this.$router.push('/' + this.$route.params.course)
			})
		}
	},
	components: {
		Page,
		YoutubeVideo,
		Test
	}
}
</script>

<style>
.add-post .input {
	max-width: 100%;
}
</style>
