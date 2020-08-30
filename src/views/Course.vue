<template>
	<div class="container">
		<div class="course">
			<div class="courses__item card">
				<span class="courses__item-author" v-if="course.author"
					>Автор курса: <b>{{ course.author.name }}</b></span
				>
				<h3 class="center">{{ course.title }}</h3>
				<p>{{ course.description }}</p>
			</div>
			<router-link
				class="card post-preview"
				v-for="post in course.posts"
				:key="post._id"
				:to="'/' + $route.params.course + '/' + post._id"
			>
				<i class="far" :class="postIcon(post.type)"></i>
				<span>{{ post.title }}</span>
			</router-link>
			<router-link
				:to="'/' + $route.params.course + '/add'"
				class="button button--center"
				v-if="auth.role == 'teacher'"
				>Добавить запись</router-link
			>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	name: 'course',
	data() {
		return {
			course: {}
		}
	},
	computed: mapState([
		'auth',
		'courses'
	]),
	methods: {
		postIcon(type) {
			switch (type) {
				case 'youtube-video': {
					return 'fa-file-video'
					break
				}
				case 'test': {
					return 'fa-check-square'
					break
				}
				default: {
					return 'fa-file'
					break
				}
			}
		}
	},
	created() {
		this.$store.dispatch('getCourse', { id: this.$route.params.course }).then(() => {
			this.course = this.courses.find(i => i._id == this.$route.params.course) || {}
		})
	}
}
</script>

<style>
.course {
	max-width: 600px;
	margin: 0 auto;
}

.course .courses__item {
	margin: 0;
}

.post-preview {
	color: #000;
	text-decoration: none;
	margin: 16px 0;
}

.post-preview i {
	margin-right: 8px;
}
</style>
