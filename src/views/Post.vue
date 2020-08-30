<template>
	<div class="container">
		<div class="card">
			<component v-bind:is="post.type" :post="post"></component>
		</div>
		<router-link :to="'/' + $route.params.course" class="button button--center">Назад</router-link>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import Page from '@/components/views/Page'
import YoutubeVideo from '@/components/views/YoutubeVideo'
import Test from '@/components/views/Test'

export default {
	name: 'post',
	data() {
		return {
			post: {}
		}
	},
	computed: mapState([
		'courses'
	]),
	components: {
		Page,
		YoutubeVideo,
		Test
	},
	created() {
		this.$store.dispatch('getCourse', { id: this.$route.params.course }).then(() => {
			this.post = this.courses.find(i => i._id == this.$route.params.course).posts.find(i => i._id == this.$route.params.post)
		})
	}
}
</script>

<style>
.add-post .input {
	max-width: 100%;
}
</style>
