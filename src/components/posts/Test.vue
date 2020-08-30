<template>
	<div class="test">
		<div
			class="test__item"
			v-for="question in questions"
			:key="question.id"
		>
			<div class="input">
				<input
					type="text"
					class="input__input"
					placeholder="Текст вопроса"
					v-model.lazy="question.question"
				/>
			</div>
			<div class="test__item-answers">
				<div
					class="input"
					v-for="(answer, i) in question.answers"
					:key="question.question + answer + '0'"
				>
					<input
						type="text"
						class="input__input"
						placeholder="Текст ответа"
						v-model.lazy="question.answers[i]"
					/>
				</div>
				<a
					href="#"
					class="button button--min button--center"
					@click.prevent="addAnswer(question.id)"
					>Добавить ответ</a
				>
			</div>
			<div class="input">
				<select class="input__input" v-model.lazy="question.right">
					<option value="" selected disabled
						>Выберите правильный ответ</option
					>
					<option
						v-for="answer in question.answers"
						:key="question.question + answer + '1'"
						:value="answer"
						>{{ answer }}</option
					>
				</select>
			</div>
		</div>
		<a
			href="#"
			class="button button--min button--center"
			@click.prevent="addQuestion"
			>Добавить вопрос</a
		>
	</div>
</template>

<script>
export default {
	data() {
		return {
			questions: []
		}
	},
	methods: {
		addQuestion() {
			this.questions.push({
				id: this.questions.length,
				question: '',
				right: '',
				answers: []
			})
		},
		addAnswer(question) {
			this.questions[question].answers.push('')
		}
	},
	watch: {
		questions: {
			handler: function(value) {
				this.$emit('data', value)
			},
			deep: true
		}
	}
}
</script>

<style scoped>
.test {
	border-radius: 3px;
	padding: 16px;
	background: #f6f6f8;
	margin-bottom: 24px;
}

.test__item {
    margin-bottom: 36px;
}

.test__item-answers {
	border-radius: 3px;
	padding: 16px;
	background: #f0f0f2;
	margin-bottom: 24px;
}

.input {
	max-width: 100%;
}
</style>
