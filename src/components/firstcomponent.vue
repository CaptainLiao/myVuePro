<template>
	<div id="firstComponent" @click='show'>
		<h1>{{title}}</h1>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. </p>
		<div class="loading" v-if="loading">
      Loading...
    </div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				title: 'this is my firstComponent',
				loading: true
			}
		},
		beforeRouteEnter (to, from, next) {
			console.log(to)
			console.log(from)
			console.log(next)
			next();
		},
		methods: {
			show() {
				console.log(this.$route)
			}
		}
	} 
</script>

<style type="text/css" lang="less">
	#firstComponent {
		padding: 4px;
		border: 1px solid #ccc;
		h1 {
			color: red;
		}
	}
</style>