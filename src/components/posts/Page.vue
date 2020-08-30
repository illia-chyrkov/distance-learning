<template>
	<div class="input">
		<textarea class="input__input" placeholder="Введите содержимое страницы" v-model.lazy="value" required></textarea>
	</div>
</template>

<script>
export default {
	data() {
		return {
			value: ''
		}
	},
	watch: {
		value: function(value) {
			this.$emit('data', value)
		}
	}
}
</script>

<style scoped>
.input__input {
	height: 300px;
}
</style>
