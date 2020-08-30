<template>
	<div>
		<h3 class="center">{{ post.title }}</h3>
		<form
			@submit.prevent="sendResult"
			class="test-user"
			v-if="auth.role == 'student'"
		>
			<h2 class="center" style="margin: 50px 0" v-if="oldScore">
				Ваш результат: {{ oldScore }}
			</h2>
			<template v-else>
				<div class="test-user__questions">
					<div
						class="test-user__question"
						v-for="(question, i) in post.data"
						:key="question.id"
					>
						<h4>{{ question.question }}</h4>
						<label
							v-for="answer in question.answers"
							:key="question.id + answer"
						>
							<input
								type="radio"
								:value="answer"
								v-model="user_answers[i]"
								required
							/>
							<span>{{ answer }}</span>
						</label>
					</div>
				</div>
				<button class="button button--center">
					Завершить прохождение ({{ score }})
				</button>
			</template>
		</form>
		<div class="test-teacher" v-else>
			<div v-for="response in post.responses" :key="response.user">
				<p>{{ response.user }}: <b>{{ response.score }}</b></p>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	props: ['post'],
	data() {
		return {
			user_answers: []
		}
	},
	computed: {
		...mapState(['error', 'auth']),
		score() {
			let score = 0
			this.post.data.forEach((question, i) => {
				if (question.right == this.user_answers[i]) score++
			})
			return Math.round((score / this.post.data.length) * 100) + '%'
		},
		oldScore() {
			return (
				this.post.responses.find(res => res.user == this.auth.name)
					.score || false
			)
		}
	},
	methods: {
		sendResult() {
			this.$store.dispatch('setPost', {
				course: this.$route.params.course,
				post: this.$route.params.post,
				data: {
					...this.post,
					responses: [
						...this.post.responses,
						{
							user: this.auth.name,
							score: this.score
						}
					]
				}
			})
		}
	},
	created() {
		this.post.data.forEach(() => {
			this.user_answers.push('')
		})
	}
}
</script>

<style scoped>
label {
	display: flex;
	align-items: center;
	justify-content: flex-start;
	margin: 8px 0;
}

label span {
	padding-left: 8px;
}
</style>
