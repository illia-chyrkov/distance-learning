<template>
	<div>
		<h3 class="center">{{ post.title }}</h3>
		<iframe width="560" height="315" :src="post.data" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	</div>
</template>

<script>
export default {
	props: ['post']
}
</script>

<style scoped>
iframe {
	display: block;
	margin: 16px auto;
}
</style>

