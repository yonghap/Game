<template>
	<div id="app">
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
