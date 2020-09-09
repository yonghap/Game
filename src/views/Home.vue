<template>
	<div id="home" class="home">
		<section class="intro" :style="{'background-image': 'url('+intro.background_image+')'}">
			<div class="intro__wrap">
				<h2 class="intro__title">
					{{ intro.name }}
				</h2>
				<div class="intro__metacritic">
					{{ intro.metacritic }}
				</div>
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
			this.$http.get('http://api.steampowered.com/ISteamApps/GetAppList/v0002/?key=CD279D63142FD4882FC26DD06308289D&format=json',{
				headers: {
					'Access-Control-Allow-Origin' : '*'
				}
			})
			.then(res=> {
				console.log(res);
			})
			// this.$store.commit('SET_LOADING');
			// this.$store.dispatch('getIntroGame')
			// .then(() => {
			// 	this.intro = this.$store.getters.introGame.results[Math.floor(Math.random() * this.$store.getters.introGame.results.length)];
			// 	this.$store.commit('SET_LOADING');
			// })
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
			margin-bottom:20px;
			font-size:6rem;
			color:#fff;
			text-shadow:5px 5px 10px #666;
		}
		&__metacritic {
			width:70px;
			height:70px;
			margin:0 auto;
			border-radius:5px;
			background:#6c3;
			font-size:1.6rem;
			line-height:70px;
			color:#eee;
		}
		&__btn {
			margin-top:80px;
		}
	}
</style>