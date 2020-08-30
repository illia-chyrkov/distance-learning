<template>
	<div class="input">
        <input type="text" class="input__input" placeholder="Введите ссылку на видео" v-model.lazy="value" required>
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
