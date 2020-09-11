<template>
	<div id="detail" class="detail">
		<section class="game">
			<h2 class="title" :style="{'background-image': 'url('+game.background_image+')'}" v-if="game.name">
				<div class="row">
					{{ game.name }}
				</div>
			</h2>
			<div class="inner">
				<div class="row">
					<section class="game__wrap">
						<article class="meta">
							<div class="meta__content">
								<img :src="sc.results[0].image">
							</div>
							<div class="meta__info">
								<div class="info">
									<ul class="info__list">
										<li>
											<span>개발사</span>
											{{ game.developers[0].name }}
										</li>
										<li>
											<span>배급사</span>
											{{ game.publishers[0].name }}
										</li>
										<li>
											<span>출시일</span>
											{{ game.released }}
										</li>
										<li>
											<span>웹사이트</span>
											<a :href="game.website" target="_blank">
												{{ game.website }}
											</a>
										</li>
									</ul>
									<div class="info__metacritic">
										{{ game.metacritic }}
									</div>
									<div class="info__meta">
										<Tag></Tag>
									</div>
								</div>
							</div>
						</article>
						<article class="game__article desc" v-html="game.description">
						</article>
						<article class="game__article">
							<ul class="game__image">
								<li v-for="item in sc.results">
									<img :src="item.image">
								</li>
							</ul>
						</article>
					</section>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	import Tag from '@/components/Tag';

	export default {
		components: {
			Tag
		},
		name: 'Home',
		data() {
			return {
				id : this.$route.params.id,
				game : null,
				sc : null
			}
		},
		created() {
			this.$http.all([
				this.$http.get('https://api.rawg.io/api/games/'+this.id),
				this.$http.get('https://api.rawg.io/api/games/'+this.id+'/screenshots')
			])
			.then(this.$http.spread((detailRes, scRes) => {
				this.game = detailRes.data;
				this.sc = scRes.data;
				console.log(this.game);
			}))
		}
	}
</script>
<style lang="scss" scoped>
	@import '@/styles/variables.scss';
	.title {
		padding-top:22%;
		padding-bottom:1.6%;
		background-position:50% 0%;
		background-size:cover;
		font-size:3.8rem;
		color:#fff;
	}
	.game {
		&__detail {
			padding:50px 0;
		}
		&__wrap {
			padding:40px;
			background:rgba(0, 0, 0, .25);
		}
		&__article {
			margin:26px 0;
		}
		&__image {
			display:flex;
			flex-wrap:wrap;
			margin:0 -10px;
			li {
				flex-basis:25%;
				flex-shrink:0;
				padding:10px;
				box-sizing:border-box;
			}
		}
	}
	.meta {
		display:flex;
		margin-bottom:26px;
		&__content {
			flex-basis:70%;
			flex-shrink:0;
			margin-right:20px;
		}
		&__info {
			flex-basis:30%;
			flex-shrink:0;
		}
	}
	.info {
		color:$titleColor;
		&__image {
			margin-bottom:10px;
		}
		&__list {
			li {
				position:relative;
				margin:10px 0;
				padding-left:80px;
				span {
					position:absolute;
					top:0;
					left:0;
				}
				a {
					word-break:break-all;
				}
			}
		}
		&__metacritic {
			width:70px;
			height:70px;
			border-radius:5px;
			background:#6c3;
			font-size:1.6rem;
			line-height:72px;
			color:#eee;
			text-align:center;
		}
		&__meta {
			margin-top:20px;
		}
	}
</style>
