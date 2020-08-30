<template>
	<div class="container">
		<div class="courses__list">
			<div class="courses__item card" v-for="course in courses" :key="course._id">
				<span class="courses__item-author">Автор курса: <b>{{ course.author.name }}</b></span>
				<h3 class="center">{{ course.title }}</h3>
				<p>{{ course.description }}</p>
				<router-link :to="'/' + course._id" class="button button--center">Перейти к курсу</router-link>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	name: 'courses',
	computed: mapState([
		'error',
		'courses'
	]),
	created() {
		this.$store.dispatch('getCourses')
	}
}
</script>

<style>
.courses__list {
	display: flex;
	flex-wrap: wrap;
	margin: 0 -8px;
}

.courses__item {
	margin: 8px;
	flex-basis: calc(100% / 3)
}

.courses__item-author {
	display: block;
	font-size: 12px;
	text-transform: uppercase;
	color: #7F8C8D;
	text-align: right;
}
</style>
