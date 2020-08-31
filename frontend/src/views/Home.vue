<template>
	<div id="home" class="home">
		<section class="intro" :style="{'background-image': 'url('+intro.background_image+')'}">
			<div class="intro__wrap">
				<h2 class="intro__title">
					{{ intro.name }}
				</h2>
				<p class="intro__desc">
					{{ intro.metacritic }} / 100
				</p>
				<div class="intro__btn">
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
				intro : null,
				background : require('@/assets/images/game1.jpg')
			}
		},
		created() {

			this.$store.dispatch('getIntroGame')
			.then(() => {
				//
				this.intro = this.$store.getters.game.results[Math.floor(Math.random() * this.$store.getters.game.results.length)];

			})
		},
		mounted() {

		}
	}
</script>
<style lang="scss" scoped>
	.home {
		width:100%;
		height:100vh;
	}
	.intro {
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