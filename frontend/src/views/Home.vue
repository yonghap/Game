<template>
	<div id="home" class="home">
		<section class="home__wrap" :style="{'background-image': 'url('+background+')'}">

		</section>
	</div>
</template>

<script>
	export default {
		name: 'Home',
		data() {
			return {
				background : require('@/assets/images/game1.jpg')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.home {
		width:100%;
		height:100vh;
	}
	.home__wrap {
		width:100%;
		height:100%;
		background-position:center top;
		background-repeat:no-repeat;
		background-size:cover;
	}
</style>