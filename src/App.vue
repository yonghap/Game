<template>
	<div id="app">
		<div id="nav" class="nav">
			<router-link to="/">Home</router-link>
			<router-link to="/about">About</router-link>
			<router-link to="/detail">Game</router-link>
			<router-link to="/best">Search</router-link>
		</div>
		<router-view/>
		<Loading v-if="isLoading"></Loading>
	</div>
</template>

<script>
	import Loading from './components/Loading'
	export default {
		components : {
			Loading
		},
		data() {
			return {

			}
		},
		computed : {
			isLoading() {
				return this.$store.getters.isLoading;
			}
		}
	}
</script>

<style lang="scss">
	.nav {
		a {
			margin:0 10px;
			color:#fff;
		}
	}
</style>
