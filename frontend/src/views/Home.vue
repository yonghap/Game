<template>
	<div id="intro" class="intro">
		<section class="home" :style="{'background-image': 'url('+background+')'}">
			<div class="home__wrap">
				<h2 class="home__title">
					CYBERPUNK 2077
				</h2>
				<p class="home__desc">
					싸이버펑크 2077
				</p>
				<div class="home__btn">
					<button type="button" class="btn">
						<span class="btn__text">MORE</span>
					</button>
				</div>
			</div>
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
		},
		created() {
			this.$store.dispatch('getGame');
		}
	}
</script>
<style lang="scss" scoped>
	.intro {
		width:100%;
		height:100vh;
	}
	.home {
		display:flex;
		height:100%;
		align-items:center;
		justify-content:center;
		background-position:center top;
		background-repeat:no-repeat;
		background-size:cover;
		text-align:center;
		&__wrap {
			width:100%;
		}
		&__title {
			font-size:6rem;
			color:#fff;
		}
		&__desc {
			font-size:2rem;
			color:#eee;
		}
		&__btn {
			margin-top:80px;
		}
	}
</style>