<template>
	<div class="my-2">
		<div :class="`alert alert-sm alert-${props.type}`">{{props.message}}</div>
	</div>
</template>
<script setup>
	const props=defineProps({
		type:String,
		message:String
	})
</script>