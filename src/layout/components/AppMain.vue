<template>
	<div id="container" class="container">
		<TheHeader/>
		<transition name="fade-transform" mode="out-in">
			<router-view :key="key"/>
		</transition>
		<TheFooter/>
	</div>
</template>

<script>
	import TheHeader from '@/components/TheHeader';
	import TheFooter from '@/components/TheFooter';

	export default {
		name : 'AppMain',
		components: {
			TheHeader,
			TheFooter
		},
		computed : {
			key() {
				return this.$route.path
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>