<template>
	<div>
		<h3 class="center">{{ post.title }}</h3>
		<p>{{ post.data }}</p>
	</div>
</template>

<script>
export default {
	props: ['post']
}
</script>
