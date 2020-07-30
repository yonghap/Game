<template>
	<div id="home" class="home">
		<section class="home__wrap" :style="{'background-image': 'url('+background+')'}">
			<h2 class="home__title">
				CYBERPUNK 2077
			</h2>
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
		display:flex;
		height:100%;
		align-items:center;
		background-position:center top;
		background-repeat:no-repeat;
		background-size:cover;
		text-align:center;
	}
	.home__title {
		width:100%
	}
</style>